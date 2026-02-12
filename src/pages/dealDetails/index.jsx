import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiArrowLeft,
    FiEdit2,
    FiTrash2,
    FiUser,
    FiCalendar,
    FiDollarSign,
    FiTrendingUp,
    FiMessageSquare,
    FiPlus,
} from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

const DealDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [notes, setNotes] = useState([
        {
            id: 1,
            text: "Initial discovery call completed.",
            date: "Feb 03, 2026",
        },
    ]);

    const [newNote, setNewNote] = useState("");

    const addNote = () => {
        if (!newNote.trim()) return;

        const today = new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });

        setNotes((prev) => [
            {
                id: Date.now(),
                text: newNote,
                date: today,
            },
            ...prev,
        ]);

        setNewNote("");
    };

    return (
        <Styled.Wrapper>
            <Styled.TopBar>
                <button className="back" onClick={() => navigate(-1)}>
                    <FiArrowLeft /> Back
                </button>

                <div className="actions">
                    <button className="btn ghost">
                        <FiEdit2 /> Edit
                    </button>
                    <button className="btn danger">
                        <FiTrash2 /> Delete
                    </button>
                </div>
            </Styled.TopBar>

            <Styled.Layout>
                <Styled.Left>
                    <Styled.Hero>
                        <img
                            src={`https://picsum.photos/seed/${id}/1200/300`}
                            alt="cover"
                        />
                        <div className="overlay" />
                        <div className="content">
                            <h2>Nova Retail</h2>
                            <div className="amount">₹6,58,166</div>
                        </div>
                    </Styled.Hero>

                    <Styled.InfoGrid>
                        <div className="card">
                            <div className="row">
                                <FiUser />
                                <span>Owner</span>
                            </div>
                            <strong>Ash</strong>
                        </div>

                        <div className="card">
                            <div className="row">
                                <FiCalendar />
                                <span>Next follow up</span>
                            </div>
                            <strong>Feb 20, 2026</strong>
                        </div>

                        <div className="card">
                            <div className="row">
                                <FiTrendingUp />
                                <span>Stage</span>
                            </div>
                            <strong>Qualified</strong>
                        </div>

                        <div className="card">
                            <div className="row">
                                <FiDollarSign />
                                <span>Weighted revenue</span>
                            </div>
                            <strong>₹1,64,542</strong>
                        </div>
                    </Styled.InfoGrid>
                </Styled.Left>

                <Styled.Right>
                    <Styled.NotesCard>
                        <div className="header">
                            <h3>
                                <FiMessageSquare /> Activity & Notes
                            </h3>
                        </div>

                        <div className="addBox">
                            <textarea
                                placeholder="Write a note and press Add"
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                            />
                            <button className="btn" onClick={addNote}>
                                <FiPlus /> Add note
                            </button>
                        </div>

                        <div className="notes">
                            {notes.map((note) => (
                                <div key={note.id} className="note">
                                    <div className="date">{note.date}</div>
                                    <div className="text">{note.text}</div>
                                </div>
                            ))}
                        </div>
                    </Styled.NotesCard>
                </Styled.Right>
            </Styled.Layout>
        </Styled.Wrapper>
    );
};

export default DealDetails;
