// src/pages/settings/index.jsx
import React, { useMemo, useRef, useState } from "react";
import { Styled } from "./styled";
import {
    FiSettings,
    FiSliders,
    FiUsers,
    FiTag,
    FiDownload,
    FiUpload,
    FiTrash2,
    FiPlus,
    FiEdit2,
    FiCheck,
    FiX,
    FiInfo,
    FiCopy,
    FiAlertTriangle,
    FiTrendingUp,
} from "react-icons/fi";

const Settings = () => {
    const [activeTab, setActiveTab] = useState("pipeline");

    const [stages, setStages] = useState([
        { id: "s-new", name: "New", prob: 10 },
        { id: "s-qualified", name: "Qualified", prob: 25 },
        { id: "s-proposal", name: "Proposal", prob: 45 },
        { id: "s-negotiation", name: "Negotiation", prob: 70 },
        { id: "s-won", name: "Won", prob: 100 },
        { id: "s-lost", name: "Lost", prob: 0 },
    ]);

    const [owners, setOwners] = useState(["Ash", "Neha", "Niraj"]);
    const [tags, setTags] = useState([
        "Hot",
        "Warm",
        "Cold",
        "Follow up",
        "Enterprise",
    ]);

    const [newStage, setNewStage] = useState({ name: "", prob: 25 });
    const [editingStageId, setEditingStageId] = useState(null);
    const [editDraft, setEditDraft] = useState({ name: "", prob: 25 });

    const [toast, setToast] = useState("");

    // confirm modal
    const [confirm, setConfirm] = useState({
        open: false,
        title: "",
        message: "",
        dangerText: "Delete",
        cancelText: "Cancel",
        onConfirm: null,
    });

    const confirmRef = useRef(null);

    const showToast = (msg) => {
        setToast(msg);
        window.clearTimeout(showToast.t);
        showToast.t = window.setTimeout(() => setToast(""), 1600);
    };

    const openConfirm = ({
        title,
        message,
        dangerText = "Delete",
        cancelText = "Cancel",
        onConfirm,
    }) => {
        setConfirm({
            open: true,
            title,
            message,
            dangerText,
            cancelText,
            onConfirm,
        });

        window.setTimeout(() => {
            if (confirmRef.current) confirmRef.current.focus();
        }, 0);
    };

    const closeConfirm = () => {
        setConfirm((p) => ({ ...p, open: false, onConfirm: null }));
    };

    const runConfirm = () => {
        const fn = confirm.onConfirm;
        closeConfirm();
        if (typeof fn === "function") fn();
    };

    const stageTips = useMemo(() => {
        return [
            "Keep stages minimal so the board stays fast.",
            "Use probability as a forecast signal, not as truth.",
            "Won and Lost should be terminal stages.",
        ];
    }, []);

    const addStage = () => {
        const name = newStage.name.trim();
        const prob = Number(newStage.prob);

        if (!name) {
            showToast("Stage name is required");
            return;
        }

        if (Number.isNaN(prob) || prob < 0 || prob > 100) {
            showToast("Probability must be between 0 and 100");
            return;
        }

        const id = `s-${Date.now()}`;
        setStages((prev) => [...prev, { id, name, prob }]);
        setNewStage({ name: "", prob: 25 });
        showToast("Stage added");
    };

    const startEditStage = (stage) => {
        setEditingStageId(stage.id);
        setEditDraft({ name: stage.name, prob: stage.prob });
    };

    const saveEditStage = () => {
        const name = editDraft.name.trim();
        const prob = Number(editDraft.prob);

        if (!name) {
            showToast("Stage name is required");
            return;
        }

        if (Number.isNaN(prob) || prob < 0 || prob > 100) {
            showToast("Probability must be between 0 and 100");
            return;
        }

        setStages((prev) =>
            prev.map((s) =>
                s.id === editingStageId ? { ...s, name, prob } : s,
            ),
        );
        setEditingStageId(null);
        showToast("Stage updated");
    };

    const cancelEditStage = () => {
        setEditingStageId(null);
        setEditDraft({ name: "", prob: 25 });
    };

    const removeStage = (id) => {
        setStages((prev) => prev.filter((s) => s.id !== id));
        showToast("Stage removed");
    };

    const addOwner = (name) => {
        const n = name.trim();
        if (!n) return;
        if (owners.includes(n)) {
            showToast("Owner already exists");
            return;
        }
        setOwners((prev) => [...prev, n]);
        showToast("Owner added");
    };

    const removeOwner = (name) => {
        setOwners((prev) => prev.filter((x) => x !== name));
        showToast("Owner removed");
    };

    const addTag = (name) => {
        const n = name.trim();
        if (!n) return;
        if (tags.includes(n)) {
            showToast("Tag already exists");
            return;
        }
        setTags((prev) => [...prev, n]);
        showToast("Tag added");
    };

    const removeTag = (name) => {
        setTags((prev) => prev.filter((x) => x !== name));
        showToast("Tag removed");
    };

    const exportSettings = () => {
        const payload = {
            exportedAt: new Date().toISOString(),
            stages,
            owners,
            tags,
        };

        const blob = new Blob([JSON.stringify(payload, null, 2)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "react-sales-kanban-settings.json";
        a.click();
        URL.revokeObjectURL(url);
        showToast("Exported settings JSON");
    };

    const importSettings = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(String(reader.result || "{}"));
                if (Array.isArray(data.stages)) setStages(data.stages);
                if (Array.isArray(data.owners)) setOwners(data.owners);
                if (Array.isArray(data.tags)) setTags(data.tags);
                showToast("Imported settings");
            } catch {
                showToast("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    };

    const resetDemo = () => {
        setStages([
            { id: "s-new", name: "New", prob: 10 },
            { id: "s-qualified", name: "Qualified", prob: 25 },
            { id: "s-proposal", name: "Proposal", prob: 45 },
            { id: "s-negotiation", name: "Negotiation", prob: 70 },
            { id: "s-won", name: "Won", prob: 100 },
            { id: "s-lost", name: "Lost", prob: 0 },
        ]);
        setOwners(["Ash", "Neha", "Niraj"]);
        setTags(["Hot", "Warm", "Cold", "Follow up", "Enterprise"]);
        showToast("Demo settings reset");
    };

    const copyJsonToClipboard = async () => {
        const payload = {
            stages,
            owners,
            tags,
        };
        try {
            await navigator.clipboard.writeText(
                JSON.stringify(payload, null, 2),
            );
            showToast("Copied JSON");
        } catch {
            showToast("Copy failed");
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <div className="left">
                    <div className="title">
                        <FiSettings />
                        <div className="txt">
                            <div className="h1">Settings</div>
                            <div className="sub">
                                Configure pipeline stages, owners, tags, and
                                manage demo data.
                            </div>
                        </div>
                    </div>

                    <div className="tabs">
                        <button
                            type="button"
                            className={`tab ${
                                activeTab === "pipeline" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("pipeline")}
                        >
                            <FiSliders />
                            Pipeline
                        </button>

                        <button
                            type="button"
                            className={`tab ${
                                activeTab === "owners" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("owners")}
                        >
                            <FiUsers />
                            Owners
                        </button>

                        <button
                            type="button"
                            className={`tab ${
                                activeTab === "tags" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("tags")}
                        >
                            <FiTag />
                            Tags
                        </button>

                        <button
                            type="button"
                            className={`tab ${
                                activeTab === "data" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("data")}
                        >
                            <FiInfo />
                            Data
                        </button>
                    </div>
                </div>

                <div className="right">
                    <div className="heroCard">
                        <img
                            src="https://picsum.photos/seed/settings-ui/520/260"
                            alt="settings cover"
                        />
                        <div className="heroOverlay" />
                        <div className="heroText">
                            <div className="k">Workspace</div>
                            <div className="v">react sales kanban</div>
                        </div>
                    </div>
                </div>
            </Styled.Hero>

            <Styled.Content>
                {activeTab === "pipeline" && (
                    <>
                        <Styled.Panel>
                            <div className="pHead">
                                <div className="pTitle">
                                    <FiSliders />
                                    Pipeline stages
                                </div>
                                <div className="pSub">
                                    Probability affects weighted forecasts.
                                </div>
                            </div>

                            <div className="formGrid">
                                <div className="field">
                                    <label>Stage name</label>
                                    <input
                                        value={newStage.name}
                                        onChange={(e) =>
                                            setNewStage((p) => ({
                                                ...p,
                                                name: e.target.value,
                                            }))
                                        }
                                        placeholder="e.g. Negotiation"
                                    />
                                </div>

                                <div className="field">
                                    <label>Probability (0 to 100)</label>
                                    <input
                                        type="number"
                                        value={newStage.prob}
                                        onChange={(e) =>
                                            setNewStage((p) => ({
                                                ...p,
                                                prob: e.target.value,
                                            }))
                                        }
                                        placeholder="25"
                                    />
                                </div>

                                <button
                                    className="btn"
                                    type="button"
                                    onClick={addStage}
                                >
                                    <FiPlus />
                                    Add stage
                                </button>
                            </div>

                            <div className="tips">
                                {stageTips.map((t) => (
                                    <div key={t} className="tip">
                                        <span className="dot" />
                                        <span>{t}</span>
                                    </div>
                                ))}
                            </div>
                        </Styled.Panel>

                        <Styled.Panel>
                            <div className="pHead">
                                <div className="pTitle">
                                    <FiTrendingUp />
                                    Stage list
                                </div>
                                <div className="pSub">
                                    Edit names or probability. Keep terminal
                                    stages stable.
                                </div>
                            </div>

                            <div className="stageList">
                                {stages.map((s) => {
                                    const isEditing = editingStageId === s.id;

                                    return (
                                        <div
                                            key={s.id}
                                            className={`row ${
                                                isEditing ? "editing" : ""
                                            }`}
                                        >
                                            {!isEditing ? (
                                                <>
                                                    <div className="left">
                                                        <div className="name">
                                                            {s.name}
                                                        </div>
                                                        <div className="pill">
                                                            {s.prob}%
                                                            probability
                                                        </div>
                                                    </div>

                                                    <div className="right">
                                                        <button
                                                            type="button"
                                                            className="icon"
                                                            onClick={() =>
                                                                startEditStage(
                                                                    s,
                                                                )
                                                            }
                                                            aria-label="Edit stage"
                                                        >
                                                            <FiEdit2 />
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="icon danger"
                                                            onClick={() =>
                                                                openConfirm({
                                                                    title: "Delete stage",
                                                                    message: `Delete "${s.name}" stage? This cannot be undone.`,
                                                                    dangerText:
                                                                        "Delete stage",
                                                                    onConfirm:
                                                                        () =>
                                                                            removeStage(
                                                                                s.id,
                                                                            ),
                                                                })
                                                            }
                                                            aria-label="Delete stage"
                                                        >
                                                            <FiTrash2 />
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="edit">
                                                        <div className="field">
                                                            <label>Name</label>
                                                            <input
                                                                value={
                                                                    editDraft.name
                                                                }
                                                                onChange={(e) =>
                                                                    setEditDraft(
                                                                        (
                                                                            p,
                                                                        ) => ({
                                                                            ...p,
                                                                            name: e
                                                                                .target
                                                                                .value,
                                                                        }),
                                                                    )
                                                                }
                                                            />
                                                        </div>

                                                        <div className="field">
                                                            <label>
                                                                Probability
                                                            </label>
                                                            <input
                                                                type="number"
                                                                value={
                                                                    editDraft.prob
                                                                }
                                                                onChange={(e) =>
                                                                    setEditDraft(
                                                                        (
                                                                            p,
                                                                        ) => ({
                                                                            ...p,
                                                                            prob: e
                                                                                .target
                                                                                .value,
                                                                        }),
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="right">
                                                        <button
                                                            type="button"
                                                            className="icon ok"
                                                            onClick={
                                                                saveEditStage
                                                            }
                                                            aria-label="Save stage"
                                                        >
                                                            <FiCheck />
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="icon"
                                                            onClick={
                                                                cancelEditStage
                                                            }
                                                            aria-label="Cancel edit"
                                                        >
                                                            <FiX />
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </Styled.Panel>
                    </>
                )}

                {activeTab === "owners" && (
                    <OwnersPanel
                        owners={owners}
                        addOwner={addOwner}
                        removeOwner={(name) =>
                            openConfirm({
                                title: "Remove owner",
                                message: `Remove "${name}" from owners list?`,
                                dangerText: "Remove",
                                onConfirm: () => removeOwner(name),
                            })
                        }
                    />
                )}

                {activeTab === "tags" && (
                    <TagsPanel
                        tags={tags}
                        addTag={addTag}
                        removeTag={(name) =>
                            openConfirm({
                                title: "Remove tag",
                                message: `Remove "${name}" tag?`,
                                dangerText: "Remove",
                                onConfirm: () => removeTag(name),
                            })
                        }
                    />
                )}

                {activeTab === "data" && (
                    <Styled.Panel>
                        <div className="pHead">
                            <div className="pTitle">
                                <FiInfo />
                                Data tools
                            </div>
                            <div className="pSub">
                                Export or import demo config, or reset defaults.
                            </div>
                        </div>

                        <div className="dataGrid">
                            <button
                                type="button"
                                className="btn ghost"
                                onClick={exportSettings}
                            >
                                <FiDownload />
                                Export JSON
                            </button>

                            <label className="upload">
                                <input
                                    type="file"
                                    accept="application/json"
                                    onChange={(e) =>
                                        importSettings(e.target.files?.[0])
                                    }
                                />
                                <span className="btn">
                                    <FiUpload />
                                    Import JSON
                                </span>
                            </label>

                            <button
                                type="button"
                                className="btn ghost"
                                onClick={copyJsonToClipboard}
                            >
                                <FiCopy />
                                Copy JSON
                            </button>

                            <button
                                type="button"
                                className="btn danger"
                                onClick={() =>
                                    openConfirm({
                                        title: "Reset demo settings",
                                        message:
                                            "Reset stages, owners, and tags back to default demo values?",
                                        dangerText: "Reset demo",
                                        onConfirm: resetDemo,
                                    })
                                }
                            >
                                <FiTrash2 />
                                Reset demo
                            </button>
                        </div>

                        <div className="note">
                            Imported settings replace current pipeline
                            configuration only.
                        </div>
                    </Styled.Panel>
                )}
            </Styled.Content>

            <Styled.Toast
                className={toast ? "open" : ""}
                role="status"
                aria-live="polite"
            >
                {toast}
            </Styled.Toast>

            <Styled.ConfirmBackdrop
                className={confirm.open ? "open" : ""}
                onClick={closeConfirm}
                aria-hidden={confirm.open ? "false" : "true"}
            />

            <Styled.ConfirmModal
                className={confirm.open ? "open" : ""}
                role="dialog"
                aria-modal="true"
                aria-label="Confirm action"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mHead">
                    <div className="ic">
                        <FiAlertTriangle />
                    </div>
                    <div className="txt">
                        <div className="t">{confirm.title}</div>
                        <div className="m">{confirm.message}</div>
                    </div>

                    <button
                        type="button"
                        className="x"
                        onClick={closeConfirm}
                        aria-label="Close"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="mActions">
                    <button
                        type="button"
                        className="btn ghost"
                        onClick={closeConfirm}
                    >
                        {confirm.cancelText}
                    </button>

                    <button
                        type="button"
                        className="btn danger"
                        onClick={runConfirm}
                        ref={confirmRef}
                    >
                        <FiTrash2 />
                        {confirm.dangerText}
                    </button>
                </div>
            </Styled.ConfirmModal>
        </Styled.Wrapper>
    );
};

const OwnersPanel = ({ owners, addOwner, removeOwner }) => {
    const [name, setName] = useState("");

    const add = () => {
        if (!name.trim()) return;
        addOwner(name);
        setName("");
    };

    return (
        <Styled.Panel>
            <div className="pHead">
                <div className="pTitle">
                    <FiUsers />
                    Owners
                </div>
                <div className="pSub">
                    Used for assignment and reporting filters.
                </div>
            </div>

            <div className="formGrid">
                <div className="field">
                    <label>Owner name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ash"
                    />
                </div>

                <button className="btn" type="button" onClick={add}>
                    <FiPlus />
                    Add owner
                </button>
            </div>

            <div className="pillGrid">
                {owners.map((o) => (
                    <button
                        key={o}
                        type="button"
                        className="pillBtn"
                        onClick={() => removeOwner(o)}
                        title="Remove owner"
                    >
                        <span className="txt">{o}</span>
                        <span className="x">
                            <FiX />
                        </span>
                    </button>
                ))}
            </div>

            <div className="note">
                Removing an owner does not auto reassign deals in this demo.
            </div>
        </Styled.Panel>
    );
};

const TagsPanel = ({ tags, addTag, removeTag }) => {
    const [name, setName] = useState("");

    const add = () => {
        if (!name.trim()) return;
        addTag(name);
        setName("");
    };

    return (
        <Styled.Panel>
            <div className="pHead">
                <div className="pTitle">
                    <FiTag />
                    Tags
                </div>
                <div className="pSub">
                    Used for quick labeling and filtering.
                </div>
            </div>

            <div className="formGrid">
                <div className="field">
                    <label>Tag name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Enterprise"
                    />
                </div>

                <button className="btn" type="button" onClick={add}>
                    <FiPlus />
                    Add tag
                </button>
            </div>

            <div className="pillGrid">
                {tags.map((t) => (
                    <button
                        key={t}
                        type="button"
                        className="pillBtn"
                        onClick={() => removeTag(t)}
                        title="Remove tag"
                    >
                        <span className="txt">{t}</span>
                        <span className="x">
                            <FiX />
                        </span>
                    </button>
                ))}
            </div>

            <div className="note">Tags are just UI labels in this demo.</div>
        </Styled.Panel>
    );
};

export default Settings;
