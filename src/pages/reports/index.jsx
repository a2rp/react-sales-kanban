// src/pages/reports/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiBarChart2,
    FiTrendingUp,
    FiCalendar,
    FiFilter,
    FiDownload,
    FiRefreshCw,
    FiArrowUpRight,
    FiArrowDownRight,
    FiTarget,
    FiDollarSign,
    FiLayers,
    FiActivity,
} from "react-icons/fi";

const Reports = () => {
    const [range, setRange] = useState("30d");
    const [owner, setOwner] = useState("all");

    const deals = useMemo(() => {
        return [
            {
                id: "d-1001",
                company: "Nova Retail",
                owner: "Ash",
                stage: "Qualified",
                amount: 658166,
                probability: 25,
                createdAt: "2026-01-18",
                expectedClose: "2026-02-20",
                delta: +12,
            },
            {
                id: "d-1002",
                company: "Orion Foods",
                owner: "Ash",
                stage: "Proposal",
                amount: 420000,
                probability: 45,
                createdAt: "2026-01-28",
                expectedClose: "2026-02-28",
                delta: +6,
            },
            {
                id: "d-1003",
                company: "Vega Logistics",
                owner: "Neha",
                stage: "Negotiation",
                amount: 980000,
                probability: 70,
                createdAt: "2026-01-10",
                expectedClose: "2026-02-14",
                delta: -4,
            },
            {
                id: "d-1004",
                company: "Atlas Tools",
                owner: "Niraj",
                stage: "New",
                amount: 215000,
                probability: 10,
                createdAt: "2026-02-05",
                expectedClose: "2026-03-06",
                delta: +2,
            },
            {
                id: "d-1005",
                company: "Pulse Studio",
                owner: "Ash",
                stage: "Won",
                amount: 310000,
                probability: 100,
                createdAt: "2025-12-22",
                expectedClose: "2026-01-12",
                delta: +18,
            },
            {
                id: "d-1006",
                company: "Stonepeak Realty",
                owner: "Neha",
                stage: "Lost",
                amount: 540000,
                probability: 0,
                createdAt: "2026-01-06",
                expectedClose: "2026-01-30",
                delta: -9,
            },
        ];
    }, []);

    const stageOrder = useMemo(() => {
        return [
            { key: "New", prob: 10 },
            { key: "Qualified", prob: 25 },
            { key: "Proposal", prob: 45 },
            { key: "Negotiation", prob: 70 },
            { key: "Won", prob: 100 },
            { key: "Lost", prob: 0 },
        ];
    }, []);

    const filteredDeals = useMemo(() => {
        const byOwner =
            owner === "all" ? deals : deals.filter((d) => d.owner === owner);

        // Range is UI-only demo. Kept simple and deterministic.
        if (range === "7d") return byOwner.slice(0, 3);
        if (range === "90d") return byOwner;
        return byOwner.slice(0, 5);
    }, [deals, owner, range]);

    const kpis = useMemo(() => {
        const total = filteredDeals.reduce((s, d) => s + d.amount, 0);
        const weighted = filteredDeals.reduce(
            (s, d) => s + d.amount * (d.probability / 100),
            0,
        );
        const open = filteredDeals.filter(
            (d) => d.stage !== "Won" && d.stage !== "Lost",
        );
        const win = filteredDeals.filter((d) => d.stage === "Won").length;
        const loss = filteredDeals.filter((d) => d.stage === "Lost").length;
        const winRate =
            win + loss === 0 ? 0 : Math.round((win / (win + loss)) * 100);

        return {
            total,
            weighted,
            openCount: open.length,
            winRate,
        };
    }, [filteredDeals]);

    const stageStats = useMemo(() => {
        const map = new Map();
        stageOrder.forEach((s) =>
            map.set(s.key, { count: 0, amount: 0, prob: s.prob }),
        );

        filteredDeals.forEach((d) => {
            if (!map.has(d.stage))
                map.set(d.stage, { count: 0, amount: 0, prob: d.probability });
            const cur = map.get(d.stage);
            cur.count += 1;
            cur.amount += d.amount;
            map.set(d.stage, cur);
        });

        const rows = stageOrder.map((s) => {
            const v = map.get(s.key) || { count: 0, amount: 0, prob: s.prob };
            const weighted = v.amount * (v.prob / 100);
            return {
                stage: s.key,
                count: v.count,
                amount: v.amount,
                prob: v.prob,
                weighted,
            };
        });

        const max = Math.max(1, ...rows.map((r) => r.amount));
        return { rows, max };
    }, [filteredDeals, stageOrder]);

    const fmtINR = (n) => {
        try {
            return new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
            }).format(n);
        } catch {
            return `₹${Math.round(n)}`;
        }
    };

    const exportJson = () => {
        const payload = {
            range,
            owner,
            generatedAt: new Date().toISOString(),
            deals: filteredDeals,
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "reports-export.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <div className="bg">
                    <img
                        src={`https://picsum.photos/seed/reports-ui/1600/520`}
                        alt="reports cover"
                    />
                    <div className="overlay" />
                </div>

                <div className="content">
                    <div className="top">
                        <div className="title">
                            <FiBarChart2 />
                            <div className="txt">
                                <div className="h1">Reports</div>
                                <div className="sub">
                                    Pipeline health, weighted forecast, stage
                                    distribution, and activity signals.
                                </div>
                            </div>
                        </div>

                        <div className="actions">
                            <button className="btn ghost" type="button">
                                <FiRefreshCw />
                                Refresh
                            </button>
                            <button
                                className="btn"
                                type="button"
                                onClick={exportJson}
                            >
                                <FiDownload />
                                Export
                            </button>
                        </div>
                    </div>

                    <div className="filters">
                        <div className="chip">
                            <FiFilter />
                            <span>Filters</span>
                        </div>

                        <div className="field">
                            <label>Range</label>
                            <select
                                value={range}
                                onChange={(e) => setRange(e.target.value)}
                            >
                                <option value="7d">Last 7 days</option>
                                <option value="30d">Last 30 days</option>
                                <option value="90d">Last 90 days</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>Owner</label>
                            <select
                                value={owner}
                                onChange={(e) => setOwner(e.target.value)}
                            >
                                <option value="all">All owners</option>
                                <option value="Ash">Ash</option>
                                <option value="Neha">Neha</option>
                                <option value="Niraj">Niraj</option>
                            </select>
                        </div>

                        <div className="hint">
                            <FiCalendar />
                            <span>Demo data, frontend-only.</span>
                        </div>
                    </div>
                </div>
            </Styled.Hero>

            <Styled.Kpis>
                <div className="k">
                    <div className="kTop">
                        <div className="kLabel">
                            <FiDollarSign /> Total pipeline
                        </div>
                        <div className="kTag">Gross</div>
                    </div>
                    <div className="kVal">{fmtINR(kpis.total)}</div>
                    <div className="kSub">
                        Sum of deal amounts in current filter.
                    </div>
                </div>

                <div className="k">
                    <div className="kTop">
                        <div className="kLabel">
                            <FiTarget /> Weighted forecast
                        </div>
                        <div className="kTag">Probability</div>
                    </div>
                    <div className="kVal">{fmtINR(kpis.weighted)}</div>
                    <div className="kSub">
                        Amount multiplied by stage probability.
                    </div>
                </div>

                <div className="k">
                    <div className="kTop">
                        <div className="kLabel">
                            <FiLayers /> Open deals
                        </div>
                        <div className="kTag">Active</div>
                    </div>
                    <div className="kVal">{kpis.openCount}</div>
                    <div className="kSub">Excludes Won and Lost.</div>
                </div>

                <div className="k">
                    <div className="kTop">
                        <div className="kLabel">
                            <FiTrendingUp /> Win rate
                        </div>
                        <div className="kTag">Closed</div>
                    </div>
                    <div className="kVal">{kpis.winRate}%</div>
                    <div className="kSub">Won divided by closed deals.</div>
                </div>
            </Styled.Kpis>

            <Styled.Grid>
                <Styled.Panel>
                    <div className="pHead">
                        <div className="pTitle">
                            <FiActivity />
                            Stage distribution
                        </div>
                        <div className="pSub">Hover bars to see totals.</div>
                    </div>

                    <div className="bars">
                        {stageStats.rows.map((r) => {
                            const pct = Math.round(
                                (r.amount / stageStats.max) * 100,
                            );
                            return (
                                <div key={r.stage} className="barRow">
                                    <div className="label">
                                        <span className="nm">{r.stage}</span>
                                        <span className="mini">
                                            {r.count} deals
                                        </span>
                                    </div>

                                    <div className="bar">
                                        <div
                                            className="fill"
                                            style={{ width: `${pct}%` }}
                                            title={`${r.stage} - ${fmtINR(r.amount)}`}
                                        />
                                    </div>

                                    <div className="val">
                                        {fmtINR(r.amount)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Styled.Panel>

                <Styled.Panel>
                    <div className="pHead">
                        <div className="pTitle">
                            <FiTrendingUp />
                            Forecast table
                        </div>
                        <div className="pSub">
                            Stage probability applied to amounts.
                        </div>
                    </div>

                    <div className="table">
                        <div className="tr th">
                            <div>Stage</div>
                            <div className="r">Probability</div>
                            <div className="r">Amount</div>
                            <div className="r">Weighted</div>
                        </div>

                        {stageStats.rows.map((r) => (
                            <div key={r.stage} className="tr">
                                <div className="stage">{r.stage}</div>
                                <div className="r">{r.prob}%</div>
                                <div className="r">{fmtINR(r.amount)}</div>
                                <div className="r strong">
                                    {fmtINR(r.weighted)}
                                </div>
                            </div>
                        ))}
                    </div>
                </Styled.Panel>

                <Styled.Panel className="span2">
                    <div className="pHead">
                        <div className="pTitle">
                            <FiArrowUpRight />
                            Recent movement
                        </div>
                        <div className="pSub">
                            Simple velocity signal for the selected range.
                        </div>
                    </div>

                    <div className="list">
                        {filteredDeals.map((d) => {
                            const up = d.delta >= 0;
                            return (
                                <button
                                    key={d.id}
                                    type="button"
                                    className="row"
                                >
                                    <div className="left">
                                        <div className="avatar">
                                            <img
                                                src={`https://picsum.photos/seed/${d.id}/120/120`}
                                                alt=""
                                            />
                                        </div>

                                        <div className="meta">
                                            <div className="nm">
                                                {d.company}
                                            </div>
                                            <div className="sub">
                                                <span className="pill">
                                                    {d.stage}
                                                </span>
                                                <span className="dot" />
                                                <span className="muted">
                                                    {d.owner}
                                                </span>
                                                <span className="dot" />
                                                <span className="muted">
                                                    Close {d.expectedClose}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="right">
                                        <div className="amt">
                                            {fmtINR(d.amount)}
                                        </div>
                                        <div
                                            className={`delta ${up ? "up" : "down"}`}
                                        >
                                            {up ? (
                                                <FiArrowUpRight />
                                            ) : (
                                                <FiArrowDownRight />
                                            )}
                                            <span>{Math.abs(d.delta)}%</span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </Styled.Panel>
            </Styled.Grid>
        </Styled.Wrapper>
    );
};

export default Reports;
