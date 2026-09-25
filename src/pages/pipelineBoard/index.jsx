// src/pages/pipelineBoard/index.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Styled } from "./styled";
import {
    FiSearch,
    FiPlus,
    FiFilter,
    FiX,
    FiArrowRight,
    FiClock,
    FiTag,
    FiUser,
    FiDollarSign,
    FiCalendar,
    FiEdit3,
    FiTrash2,
    FiCopy,
    FiTrendingUp,
} from "react-icons/fi";

/* LocalStorage keys */
const LS_STAGES = "rsk_stages";
const LS_DEALS = "rsk_deals";
const LS_VIEWS = "rsk_views";

function uid(prefix = "id") {
    return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

function money(n) {
    const val = Number(n || 0);
    return val.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

function clampPct(n) {
    const v = Number(n);
    if (Number.isNaN(v)) return 0;
    return Math.max(0, Math.min(100, v));
}

function daysBetween(a, b) {
    const d1 = new Date(a).getTime();
    const d2 = new Date(b).getTime();
    const diff = d2 - d1;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function dateInputValue(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}

function isoFromDateInput(v) {
    if (!v) return "";
    const d = new Date(`${v}T00:00:00`);
    return d.toISOString();
}

function seededStages() {
    return [
        { id: "st_new", name: "New", probability: 10, order: 1 },
        { id: "st_qual", name: "Qualified", probability: 25, order: 2 },
        { id: "st_prop", name: "Proposal", probability: 45, order: 3 },
        { id: "st_neg", name: "Negotiation", probability: 70, order: 4 },
        { id: "st_won", name: "Won", probability: 100, order: 5 },
        { id: "st_lost", name: "Lost", probability: 0, order: 6 },
    ];
}

function seededDeals() {
    const now = Date.now();
    const mk = (overrides) => {
        const createdAt = new Date(
            now - Math.floor(Math.random() * 9 + 1) * 86400000,
        ).toISOString();
        const nextFollowUpAt = new Date(
            now + Math.floor(Math.random() * 7) * 86400000,
        ).toISOString();
        const amount = Math.floor(Math.random() * 900000 + 50000);
        const seed = overrides.seed || uid("pic");
        const stageId = overrides.stageId || "st_new";
        const probability = overrides.probability ?? 10;

        return {
            id: uid("deal"),
            company: overrides.company,
            title: overrides.title || overrides.company,
            owner: overrides.owner || "You",
            tags: overrides.tags || [],
            amount,
            currency: "INR",
            stageId,
            probability,
            createdAt,
            updatedAt: createdAt,
            expectedCloseAt: new Date(
                now + Math.floor(Math.random() * 30 + 5) * 86400000,
            ).toISOString(),
            nextFollowUpAt,
            lastActivityAt: createdAt,
            notes: [
                {
                    id: uid("note"),
                    at: createdAt,
                    text: "Initial discovery done. Waiting for next step.",
                },
            ],
            stageHistory: [
                {
                    id: uid("hist"),
                    at: createdAt,
                    from: "",
                    to: stageId,
                },
            ],
            imageSeed: seed,
        };
    };

    return [
        mk({
            company: "Nova Retail",
            owner: "Ash",
            tags: ["High value", "Fast track"],
            stageId: "st_qual",
            probability: 25,
            seed: "nova-retail",
        }),
        mk({
            company: "Orbit Logistics",
            owner: "Ash",
            tags: ["Renewal"],
            stageId: "st_prop",
            probability: 45,
            seed: "orbit-logistics",
        }),
        mk({
            company: "Beacon Finance",
            owner: "Ash",
            tags: ["Enterprise"],
            stageId: "st_neg",
            probability: 70,
            seed: "beacon-finance",
        }),
        mk({
            company: "Lumen Health",
            owner: "Ash",
            tags: ["Inbound"],
            stageId: "st_new",
            probability: 10,
            seed: "lumen-health",
        }),
        mk({
            company: "Zenith Studios",
            owner: "Ash",
            tags: ["Upsell"],
            stageId: "st_qual",
            probability: 25,
            seed: "zenith-studios",
        }),
    ];
}

function loadJSON(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        return parsed ?? fallback;
    } catch {
        return fallback;
    }
}

function saveJSON(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // ignore
    }
}

function computeWeighted(amount, probability) {
    const a = Number(amount || 0);
    const p = clampPct(probability);
    return Math.round((a * p) / 100);
}

function stageTotals(stage, deals) {
    const list = deals.filter((d) => d.stageId === stage.id);
    const total = list.reduce((s, d) => s + Number(d.amount || 0), 0);
    const weighted = list.reduce(
        (s, d) => s + computeWeighted(d.amount, d.probability),
        0,
    );
    return { count: list.length, total, weighted };
}

function ImageWithSkeleton({ src, alt, size = 36 }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Styled.ImgWrap $size={size}>
            {!loaded ? <span className="sk" aria-hidden="true" /> : null}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0 }}
            />
        </Styled.ImgWrap>
    );
}

export default function PipelineBoard() {
    const [stages] = useState(() => {
        const s = loadJSON(LS_STAGES, null);
        return Array.isArray(s) && s.length ? s : seededStages();
    });

    const [deals, setDeals] = useState(() => {
        const d = loadJSON(LS_DEALS, null);
        return Array.isArray(d) && d.length ? d : seededDeals();
    });

    const [query, setQuery] = useState("");
    const [onlyOverdue, setOnlyOverdue] = useState(false);
    const [minAmount, setMinAmount] = useState("");
    const [activeTag, setActiveTag] = useState("");

    const [selectedId, setSelectedId] = useState("");
    const [draggingId, setDraggingId] = useState("");

    const [inlineAddStageId, setInlineAddStageId] = useState("");
    const [addForm, setAddForm] = useState({
        company: "",
        amount: "",
        owner: "Ash",
        tag: "",
        nextFollowUp: "",
    });

    const [toast, setToast] = useState({ open: false, text: "" });

    const lastMoveRef = useRef(null);

    useEffect(() => {
        saveJSON(LS_STAGES, stages);
    }, [stages]);

    useEffect(() => {
        saveJSON(LS_DEALS, deals);
    }, [deals]);

    const sortedStages = useMemo(() => {
        return [...stages].sort((a, b) => (a.order || 0) - (b.order || 0));
    }, [stages]);

    const allTags = useMemo(() => {
        const set = new Set();
        deals.forEach((d) => (d.tags || []).forEach((t) => set.add(t)));
        return Array.from(set).sort((a, b) => a.localeCompare(b));
    }, [deals]);

    const filteredDeals = useMemo(() => {
        const q = query.trim().toLowerCase();
        const min = minAmount === "" ? 0 : Number(minAmount || 0);
        const now = new Date();

        return deals.filter((d) => {
            const txt = `${d.company} ${d.title} ${d.owner}`.toLowerCase();
            const matchQ = q ? txt.includes(q) : true;
            const matchMin = Number(d.amount || 0) >= min;
            const matchTag = activeTag
                ? (d.tags || []).includes(activeTag)
                : true;

            const follow = d.nextFollowUpAt ? new Date(d.nextFollowUpAt) : null;
            const isOverdue = follow ? follow.getTime() < now.getTime() : false;
            const matchOverdue = onlyOverdue ? isOverdue : true;

            return matchQ && matchMin && matchTag && matchOverdue;
        });
    }, [deals, query, minAmount, activeTag, onlyOverdue]);

    const selectedDeal = useMemo(() => {
        return deals.find((d) => d.id === selectedId) || null;
    }, [deals, selectedId]);

    const boardTotals = useMemo(() => {
        const total = filteredDeals.reduce(
            (s, d) => s + Number(d.amount || 0),
            0,
        );
        const weighted = filteredDeals.reduce(
            (s, d) => s + computeWeighted(d.amount, d.probability),
            0,
        );
        return { total, weighted, count: filteredDeals.length };
    }, [filteredDeals]);

    function showToast(text) {
        setToast({ open: true, text });
        window.clearTimeout(showToast.t);
        showToast.t = window.setTimeout(
            () => setToast({ open: false, text: "" }),
            1800,
        );
    }

    function stageById(id) {
        return stages.find((s) => s.id === id) || null;
    }

    function updateDeal(id, patch) {
        setDeals((prev) =>
            prev.map((d) => {
                if (d.id !== id) return d;
                const updatedAt = new Date().toISOString();
                return { ...d, ...patch, updatedAt };
            }),
        );
    }

    function deleteDeal(id) {
        setDeals((prev) => prev.filter((d) => d.id !== id));
        if (selectedId === id) setSelectedId("");
        showToast("Deal deleted");
    }

    function duplicateDeal(id) {
        const d = deals.find((x) => x.id === id);
        if (!d) return;

        const copy = {
            ...d,
            id: uid("deal"),
            company: `${d.company} Copy`,
            title: `${d.title} Copy`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            lastActivityAt: new Date().toISOString(),
            stageHistory: [
                {
                    id: uid("hist"),
                    at: new Date().toISOString(),
                    from: "",
                    to: d.stageId,
                },
            ],
            notes: (d.notes || []).map((n) => ({ ...n, id: uid("note") })),
            imageSeed: `${d.imageSeed}-copy`,
        };

        setDeals((prev) => [copy, ...prev]);
        showToast("Deal duplicated");
    }

    function moveDealToStage(dealId, toStageId) {
        const d = deals.find((x) => x.id === dealId);
        if (!d) return;

        const fromStageId = d.stageId;
        if (fromStageId === toStageId) return;

        const toStage = stageById(toStageId);
        const nextProbability = toStage
            ? clampPct(toStage.probability)
            : clampPct(d.probability);

        const at = new Date().toISOString();
        const stageHistory = [
            ...(d.stageHistory || []),
            { id: uid("hist"), at, from: fromStageId, to: toStageId },
        ];

        lastMoveRef.current = { dealId, fromStageId, toStageId };

        updateDeal(dealId, {
            stageId: toStageId,
            probability: nextProbability,
            stageHistory,
            lastActivityAt: at,
        });

        showToast("Moved");
    }

    function undoLastMove() {
        const last = lastMoveRef.current;
        if (!last) return;
        lastMoveRef.current = null;
        moveDealToStage(last.dealId, last.fromStageId);
        showToast("Undo");
    }

    function onDragStart(e, dealId) {
        setDraggingId(dealId);
        try {
            e.dataTransfer.setData("text/plain", dealId);
            e.dataTransfer.effectAllowed = "move";
        } catch {
            // ignore
        }
    }

    function onDragEnd() {
        setDraggingId("");
    }

    function onDropToStage(e, stageId) {
        e.preventDefault();
        const dealId = e.dataTransfer.getData("text/plain");
        if (!dealId) return;
        moveDealToStage(dealId, stageId);
        setDraggingId("");
    }

    function onDragOver(e) {
        e.preventDefault();
    }

    function openInlineAdd(stageId) {
        setInlineAddStageId(stageId);
        setAddForm({
            company: "",
            amount: "",
            owner: "Ash",
            tag: "",
            nextFollowUp: "",
        });
    }

    function closeInlineAdd() {
        setInlineAddStageId("");
    }

    function submitInlineAdd(stageId) {
        const company = addForm.company.trim();
        const amount = Number(addForm.amount || 0);

        if (!company || !amount) {
            showToast("Add company and amount");
            return;
        }

        const st = stageById(stageId);
        const prob = st ? clampPct(st.probability) : 0;

        const now = new Date().toISOString();
        const nextFollowUpAt = addForm.nextFollowUp
            ? isoFromDateInput(addForm.nextFollowUp)
            : new Date(Date.now() + 2 * 86400000).toISOString();

        const tag = addForm.tag.trim();
        const tags = tag ? [tag] : [];

        const deal = {
            id: uid("deal"),
            company,
            title: company,
            owner: addForm.owner.trim() || "Ash",
            tags,
            amount,
            currency: "INR",
            stageId,
            probability: prob,
            createdAt: now,
            updatedAt: now,
            expectedCloseAt: new Date(Date.now() + 21 * 86400000).toISOString(),
            nextFollowUpAt,
            lastActivityAt: now,
            notes: [
                {
                    id: uid("note"),
                    at: now,
                    text: "Deal created on the board.",
                },
            ],
            stageHistory: [{ id: uid("hist"), at: now, from: "", to: stageId }],
            imageSeed: company.toLowerCase().replace(/\s+/g, "-"),
        };

        setDeals((prev) => [deal, ...prev]);
        setSelectedId(deal.id);
        setInlineAddStageId("");
        showToast("Deal added");
    }

    function setProbabilityForSelected(next) {
        if (!selectedDeal) return;
        updateDeal(selectedDeal.id, { probability: clampPct(next) });
    }

    function addNoteToSelected(text) {
        if (!selectedDeal) return;
        const t = text.trim();
        if (!t) return;

        const at = new Date().toISOString();
        const notes = [
            { id: uid("note"), at, text: t },
            ...(selectedDeal.notes || []),
        ];

        updateDeal(selectedDeal.id, { notes, lastActivityAt: at });
        showToast("Note added");
    }

    const overdueCount = useMemo(() => {
        const now = Date.now();
        return deals.filter(
            (d) =>
                d.nextFollowUpAt && new Date(d.nextFollowUpAt).getTime() < now,
        ).length;
    }, [deals]);

    const savedViews = useMemo(() => {
        const v = loadJSON(LS_VIEWS, []);
        return Array.isArray(v) ? v : [];
    }, []);

    function saveCurrentView() {
        const name = `View ${String(savedViews.length + 1).padStart(2, "0")}`;
        const next = [
            {
                id: uid("view"),
                name,
                query,
                onlyOverdue,
                minAmount,
                activeTag,
            },
            ...savedViews,
        ];
        saveJSON(LS_VIEWS, next);
        showToast("View saved");
    }

    function applyView(view) {
        setQuery(view.query || "");
        setOnlyOverdue(Boolean(view.onlyOverdue));
        setMinAmount(view.minAmount || "");
        setActiveTag(view.activeTag || "");
        showToast("View applied");
    }

    function clearFilters() {
        setQuery("");
        setOnlyOverdue(false);
        setMinAmount("");
        setActiveTag("");
        showToast("Cleared");
    }

    return (
        <Styled.Wrapper>
            <Styled.TopBar>
                <div className="left">
                    <div className="titleRow">
                        <div className="title">
                            <FiTrendingUp />
                            <span>Pipeline</span>
                        </div>
                        <div className="meta">
                            <span className="pill">
                                Deals <b>{boardTotals.count}</b>
                            </span>
                            <span className="pill">
                                Total <b>₹{money(boardTotals.total)}</b>
                            </span>
                            <span className="pill">
                                Forecast <b>₹{money(boardTotals.weighted)}</b>
                            </span>
                        </div>
                    </div>

                    <div className="searchRow">
                        <div className="search">
                            <FiSearch />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search deals, companies, owners"
                                aria-label="Search"
                            />
                        </div>

                        <button
                            type="button"
                            className="btn ghost"
                            onClick={saveCurrentView}
                            title="Save view"
                        >
                            <FiPlus />
                            <span>Save view</span>
                        </button>

                        <button
                            type="button"
                            className="btn ghost"
                            onClick={clearFilters}
                            title="Clear filters"
                        >
                            <FiX />
                            <span>Clear</span>
                        </button>

                        {lastMoveRef.current ? (
                            <button
                                type="button"
                                className="btn"
                                onClick={undoLastMove}
                                title="Undo last move"
                            >
                                <FiArrowRight />
                                <span>Undo</span>
                            </button>
                        ) : null}
                    </div>
                </div>

                <div className="right">
                    <div className="kpi">
                        <div className="kTitle">
                            <FiClock />
                            <span>Overdue</span>
                        </div>
                        <div className="kVal">{overdueCount}</div>
                    </div>

                    <div className="kpi">
                        <div className="kTitle">
                            <FiFilter />
                            <span>Filters</span>
                        </div>
                        <div className="kVal">
                            {(onlyOverdue ? 1 : 0) +
                                (activeTag ? 1 : 0) +
                                (minAmount ? 1 : 0)}
                        </div>
                    </div>
                </div>
            </Styled.TopBar>

            <Styled.Layout>
                <Styled.LeftRail>
                    <div className="panel">
                        <div className="pTitle">
                            <FiFilter />
                            <span>Quick filters</span>
                        </div>

                        <label className="field">
                            <span className="lbl">Min amount</span>
                            <div className="inRow">
                                <FiDollarSign className="ic" />
                                <input
                                    value={minAmount}
                                    onChange={(e) =>
                                        setMinAmount(
                                            e.target.value.replace(
                                                /[^\d]/g,
                                                "",
                                            ),
                                        )
                                    }
                                    placeholder="50000"
                                    inputMode="numeric"
                                />
                            </div>
                        </label>

                        <label className="field">
                            <span className="lbl">Tag</span>
                            <div className="inRow">
                                <FiTag className="ic" />
                                <select
                                    value={activeTag}
                                    onChange={(e) =>
                                        setActiveTag(e.target.value)
                                    }
                                >
                                    <option value="">All tags</option>
                                    {allTags.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </label>

                        <label className="check">
                            <input
                                type="checkbox"
                                checked={onlyOverdue}
                                onChange={(e) =>
                                    setOnlyOverdue(e.target.checked)
                                }
                            />
                            <span>Only overdue follow-ups</span>
                        </label>

                        <div className="hint">
                            Tip: use "Save view" to keep a preset for clients or
                            demos.
                        </div>
                    </div>

                    <div className="panel">
                        <div className="pTitle">
                            <FiUser />
                            <span>Saved views</span>
                        </div>

                        <div className="views">
                            {savedViews.length ? (
                                savedViews.slice(0, 6).map((v) => (
                                    <button
                                        key={v.id}
                                        type="button"
                                        className="viewBtn"
                                        onClick={() => applyView(v)}
                                    >
                                        <span className="nm">{v.name}</span>
                                        <span className="sub">
                                            {v.onlyOverdue ? "Overdue" : "All"}{" "}
                                            {v.activeTag
                                                ? `- ${v.activeTag}`
                                                : ""}
                                        </span>
                                    </button>
                                ))
                            ) : (
                                <div className="empty">
                                    No views yet. Save one from the top bar.
                                </div>
                            )}
                        </div>
                    </div>
                </Styled.LeftRail>

                <Styled.Board>
                    <div className="columns">
                        {sortedStages.map((st) => {
                            const totals = stageTotals(st, filteredDeals);
                            const list = filteredDeals.filter(
                                (d) => d.stageId === st.id,
                            );

                            return (
                                <Styled.Column
                                    key={st.id}
                                    onDragOver={onDragOver}
                                    onDrop={(e) => onDropToStage(e, st.id)}
                                    className={draggingId ? "dragMode" : ""}
                                >
                                    <div className="colHead">
                                        <div className="hLeft">
                                            <div className="name">
                                                {st.name}
                                            </div>
                                            <div className="sub">
                                                <span>
                                                    {totals.count} deals
                                                </span>
                                                <span className="dot" />
                                                <span>
                                                    ₹{money(totals.total)}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="hRight">
                                            <div
                                                className="prob"
                                                title="Stage probability"
                                            >
                                                {clampPct(st.probability)}%
                                            </div>

                                            <button
                                                type="button"
                                                className="icon"
                                                onClick={() =>
                                                    openInlineAdd(st.id)
                                                }
                                                title="Add deal"
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                    </div>

                                    {inlineAddStageId === st.id ? (
                                        <Styled.InlineAdd>
                                            <div className="row">
                                                <label>
                                                    <span>Company</span>
                                                    <input
                                                        value={addForm.company}
                                                        onChange={(e) =>
                                                            setAddForm((p) => ({
                                                                ...p,
                                                                company:
                                                                    e.target
                                                                        .value,
                                                            }))
                                                        }
                                                        placeholder="Company name"
                                                    />
                                                </label>
                                            </div>

                                            <div className="row two">
                                                <label>
                                                    <span>Amount</span>
                                                    <input
                                                        value={addForm.amount}
                                                        onChange={(e) =>
                                                            setAddForm((p) => ({
                                                                ...p,
                                                                amount: e.target.value.replace(
                                                                    /[^\d]/g,
                                                                    "",
                                                                ),
                                                            }))
                                                        }
                                                        placeholder="150000"
                                                        inputMode="numeric"
                                                    />
                                                </label>

                                                <label>
                                                    <span>Tag</span>
                                                    <input
                                                        value={addForm.tag}
                                                        onChange={(e) =>
                                                            setAddForm((p) => ({
                                                                ...p,
                                                                tag: e.target
                                                                    .value,
                                                            }))
                                                        }
                                                        placeholder="High value"
                                                    />
                                                </label>
                                            </div>

                                            <div className="row two">
                                                <label>
                                                    <span>Owner</span>
                                                    <input
                                                        value={addForm.owner}
                                                        onChange={(e) =>
                                                            setAddForm((p) => ({
                                                                ...p,
                                                                owner: e.target
                                                                    .value,
                                                            }))
                                                        }
                                                        placeholder="Owner"
                                                    />
                                                </label>

                                                <label>
                                                    <span>Next follow-up</span>
                                                    <input
                                                        type="date"
                                                        value={
                                                            addForm.nextFollowUp
                                                        }
                                                        onChange={(e) =>
                                                            setAddForm((p) => ({
                                                                ...p,
                                                                nextFollowUp:
                                                                    e.target
                                                                        .value,
                                                            }))
                                                        }
                                                    />
                                                </label>
                                            </div>

                                            <div className="actions">
                                                <button
                                                    type="button"
                                                    className="btn"
                                                    onClick={() =>
                                                        submitInlineAdd(st.id)
                                                    }
                                                >
                                                    Add
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn ghost"
                                                    onClick={closeInlineAdd}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </Styled.InlineAdd>
                                    ) : null}

                                    <div className="cards">
                                        {list.length ? (
                                            list.map((d) => {
                                                const follow = d.nextFollowUpAt
                                                    ? new Date(d.nextFollowUpAt)
                                                    : null;
                                                const isOverdue = follow
                                                    ? follow.getTime() <
                                                      Date.now()
                                                    : false;
                                                const ageDays = daysBetween(
                                                    d.createdAt,
                                                    new Date().toISOString(),
                                                );
                                                const weighted =
                                                    computeWeighted(
                                                        d.amount,
                                                        d.probability,
                                                    );

                                                return (
                                                    <Styled.Card
                                                        key={d.id}
                                                        draggable
                                                        onDragStart={(e) =>
                                                            onDragStart(e, d.id)
                                                        }
                                                        onDragEnd={onDragEnd}
                                                        onClick={() =>
                                                            setSelectedId(d.id)
                                                        }
                                                        className={[
                                                            selectedId === d.id
                                                                ? "active"
                                                                : "",
                                                            draggingId === d.id
                                                                ? "dragging"
                                                                : "",
                                                            isOverdue
                                                                ? "overdue"
                                                                : "",
                                                        ].join(" ")}
                                                    >
                                                        <div className="top">
                                                            <ImageWithSkeleton
                                                                src={`https://picsum.photos/seed/${encodeURIComponent(
                                                                    d.imageSeed ||
                                                                        d.company,
                                                                )}/72/72`}
                                                                alt={`${d.company} logo`}
                                                                size={38}
                                                            />
                                                            <div className="meta">
                                                                <div className="company">
                                                                    {d.company}
                                                                </div>
                                                                <div className="line">
                                                                    <span className="owner">
                                                                        <FiUser />
                                                                        {
                                                                            d.owner
                                                                        }
                                                                    </span>
                                                                    <span className="age">
                                                                        <FiClock />
                                                                        {
                                                                            ageDays
                                                                        }
                                                                        d
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="amt">
                                                                ₹
                                                                {money(
                                                                    d.amount,
                                                                )}
                                                                <span className="w">
                                                                    ₹
                                                                    {money(
                                                                        weighted,
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="bottom">
                                                            <div className="tags">
                                                                {(d.tags || [])
                                                                    .slice(0, 2)
                                                                    .map(
                                                                        (t) => (
                                                                            <span
                                                                                key={
                                                                                    t
                                                                                }
                                                                                className="tag"
                                                                            >
                                                                                {
                                                                                    t
                                                                                }
                                                                            </span>
                                                                        ),
                                                                    )}
                                                                {(d.tags || [])
                                                                    .length >
                                                                2 ? (
                                                                    <span className="tag more">
                                                                        +
                                                                        {(
                                                                            d.tags ||
                                                                            []
                                                                        )
                                                                            .length -
                                                                            2}
                                                                    </span>
                                                                ) : null}
                                                            </div>

                                                            <div
                                                                className={`follow ${isOverdue ? "bad" : ""}`}
                                                            >
                                                                <FiCalendar />
                                                                <span>
                                                                    {follow
                                                                        ? follow.toLocaleDateString(
                                                                              "en-US",
                                                                              {
                                                                                  month: "short",
                                                                                  day: "2-digit",
                                                                              },
                                                                          )
                                                                        : "No follow-up"}
                                                                </span>
                                                            </div>

                                                            <div className="probChip">
                                                                {clampPct(
                                                                    d.probability,
                                                                )}
                                                                %
                                                            </div>
                                                        </div>
                                                    </Styled.Card>
                                                );
                                            })
                                        ) : (
                                            <div className="empty">
                                                <div className="eTitle">
                                                    No deals
                                                </div>
                                                <div className="eSub">
                                                    Drop here or add a new deal.
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Styled.Column>
                            );
                        })}
                    </div>
                </Styled.Board>

                <Styled.Inspector className={selectedDeal ? "open" : ""}>
                    {selectedDeal ? (
                        <InspectorPanel
                            deal={selectedDeal}
                            stages={sortedStages}
                            onClose={() => setSelectedId("")}
                            onMove={(toStageId) =>
                                moveDealToStage(selectedDeal.id, toStageId)
                            }
                            onSetProb={setProbabilityForSelected}
                            onAddNote={addNoteToSelected}
                            onDelete={() => deleteDeal(selectedDeal.id)}
                            onDuplicate={() => duplicateDeal(selectedDeal.id)}
                            onUpdate={(patch) =>
                                updateDeal(selectedDeal.id, patch)
                            }
                        />
                    ) : (
                        <div className="emptyState">
                            <div className="t">Select a deal</div>
                            <div className="s">
                                Click any card to open details here.
                            </div>
                        </div>
                    )}
                </Styled.Inspector>
            </Styled.Layout>

            <Styled.Toast className={toast.open ? "open" : ""}>
                {toast.text}
            </Styled.Toast>
        </Styled.Wrapper>
    );
}

function InspectorPanel({
    deal,
    stages,
    onClose,
    onMove,
    onSetProb,
    onAddNote,
    onDelete,
    onDuplicate,
    onUpdate,
}) {
    const [note, setNote] = useState("");
    const [edit, setEdit] = useState({
        company: deal.company || "",
        owner: deal.owner || "",
        amount: String(deal.amount || ""),
        nextFollowUp: dateInputValue(deal.nextFollowUpAt),
        expectedClose: dateInputValue(deal.expectedCloseAt),
    });

    useEffect(() => {
        setEdit({
            company: deal.company || "",
            owner: deal.owner || "",
            amount: String(deal.amount || ""),
            nextFollowUp: dateInputValue(deal.nextFollowUpAt),
            expectedClose: dateInputValue(deal.expectedCloseAt),
        });
    }, [deal.id, deal.company, deal.owner, deal.amount, deal.nextFollowUpAt, deal.expectedCloseAt]);

    const currentStage = useMemo(
        () => stages.find((s) => s.id === deal.stageId) || null,
        [stages, deal.stageId],
    );

    const weighted = useMemo(
        () => computeWeighted(deal.amount, deal.probability),
        [deal.amount, deal.probability],
    );

    const isOverdue = useMemo(() => {
        if (!deal.nextFollowUpAt) return false;
        return new Date(deal.nextFollowUpAt).getTime() < Date.now();
    }, [deal.nextFollowUpAt]);

    function saveBasics() {
        const company = edit.company.trim();
        const owner = edit.owner.trim() || "Ash";
        const amount = Number(edit.amount || 0);

        onUpdate({
            company,
            title: company,
            owner,
            amount,
            nextFollowUpAt: edit.nextFollowUp
                ? isoFromDateInput(edit.nextFollowUp)
                : deal.nextFollowUpAt,
            expectedCloseAt: edit.expectedClose
                ? isoFromDateInput(edit.expectedClose)
                : deal.expectedCloseAt,
        });
    }

    function addNote() {
        const t = note.trim();
        if (!t) return;
        onAddNote(t);
        setNote("");
    }

    return (
        <div className="panel">
            <div className="head">
                <div className="hLeft">
                    <div className="hTitle">
                        <FiEdit3 />
                        <span>Deal inspector</span>
                    </div>
                    <div className="hSub">
                        <span className="badge">
                            {currentStage ? currentStage.name : "Unknown stage"}
                        </span>
                        <span className={`badge ${isOverdue ? "bad" : ""}`}>
                            {isOverdue ? "Overdue" : "On track"}
                        </span>
                    </div>
                </div>

                <button
                    type="button"
                    className="close"
                    onClick={onClose}
                    aria-label="Close inspector"
                >
                    <FiX />
                </button>
            </div>

            <div className="hero">
                <div className="heroTop">
                    <ImageWithSkeleton
                        src={`https://picsum.photos/seed/${encodeURIComponent(deal.imageSeed || deal.company)}/96/96`}
                        alt={`${deal.company} logo`}
                        size={46}
                    />

                    <div className="heroMeta">
                        <div className="company">{deal.company}</div>
                        <div className="row">
                            <span className="chip">
                                <FiDollarSign />₹{money(deal.amount)}
                            </span>
                            <span className="chip">
                                <FiTrendingUp />₹{money(weighted)}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="probRow">
                    <div className="lbl">Probability</div>
                    <div className="val">{clampPct(deal.probability)}%</div>
                </div>

                <input
                    className="range"
                    type="range"
                    min="0"
                    max="100"
                    value={clampPct(deal.probability)}
                    onChange={(e) => onSetProb(e.target.value)}
                    aria-label="Probability"
                />
            </div>

            <div className="section">
                <div className="secTitle">Move stage</div>
                <div className="stageGrid">
                    {stages.map((s) => (
                        <button
                            key={s.id}
                            type="button"
                            className={`stageBtn ${s.id === deal.stageId ? "active" : ""}`}
                            onClick={() => onMove(s.id)}
                            title={`${s.name} - ${clampPct(s.probability)}%`}
                        >
                            <span className="nm">{s.name}</span>
                            <span className="pc">
                                {clampPct(s.probability)}%
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="section">
                <div className="secTitle">Basics</div>

                <div className="form">
                    <label>
                        <span>Company</span>
                        <input
                            value={edit.company}
                            onChange={(e) =>
                                setEdit((p) => ({
                                    ...p,
                                    company: e.target.value,
                                }))
                            }
                            placeholder="Company"
                        />
                    </label>

                    <div className="two">
                        <label>
                            <span>Owner</span>
                            <input
                                value={edit.owner}
                                onChange={(e) =>
                                    setEdit((p) => ({
                                        ...p,
                                        owner: e.target.value,
                                    }))
                                }
                                placeholder="Owner"
                            />
                        </label>

                        <label>
                            <span>Amount</span>
                            <input
                                value={edit.amount}
                                onChange={(e) =>
                                    setEdit((p) => ({
                                        ...p,
                                        amount: e.target.value.replace(
                                            /[^\d]/g,
                                            "",
                                        ),
                                    }))
                                }
                                placeholder="150000"
                                inputMode="numeric"
                            />
                        </label>
                    </div>

                    <div className="two">
                        <label>
                            <span>Next follow-up</span>
                            <input
                                type="date"
                                value={edit.nextFollowUp}
                                onChange={(e) =>
                                    setEdit((p) => ({
                                        ...p,
                                        nextFollowUp: e.target.value,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            <span>Expected close</span>
                            <input
                                type="date"
                                value={edit.expectedClose}
                                onChange={(e) =>
                                    setEdit((p) => ({
                                        ...p,
                                        expectedClose: e.target.value,
                                    }))
                                }
                            />
                        </label>
                    </div>

                    <div className="btnRow">
                        <button
                            type="button"
                            className="btn"
                            onClick={saveBasics}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn ghost"
                            onClick={onDuplicate}
                        >
                            <FiCopy />
                            Duplicate
                        </button>
                        <button
                            type="button"
                            className="btn danger"
                            onClick={onDelete}
                        >
                            <FiTrash2 />
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="secTitle">Notes</div>

                <div className="noteBox">
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Write a note and press Add"
                        rows={3}
                    />
                    <button type="button" className="btn" onClick={addNote}>
                        Add note
                    </button>
                </div>

                <div className="notes">
                    {(deal.notes || []).slice(0, 6).map((n) => (
                        <div key={n.id} className="note">
                            <div className="at">
                                {new Date(n.at).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "2-digit",
                                    year: "numeric",
                                })}
                            </div>
                            <div className="tx">{n.text}</div>
                        </div>
                    ))}
                    {!deal.notes || deal.notes.length === 0 ? (
                        <div className="emptyMini">No notes yet.</div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
