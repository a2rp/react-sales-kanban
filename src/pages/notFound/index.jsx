// src/pages/notFound/index.jsx
import React from "react";
import { Styled } from "./styled";
import { Link, useLocation } from "react-router-dom";
import {
    FiAlertTriangle,
    FiArrowLeft,
    FiHome,
    FiGrid,
    FiBarChart2,
    FiSettings,
} from "react-icons/fi";

const NotFound = () => {
    const loc = useLocation();

    return (
        <Styled.Wrapper>
            <Styled.Card>
                <div className="top">
                    <div className="badge">
                        <FiAlertTriangle />
                        Page not found
                    </div>

                    <div className="titleRow">
                        <div className="title">404</div>
                        <div className="subtitle">
                            That route does not exist in this demo.
                        </div>
                    </div>

                    <div className="path">
                        <span className="k">Requested</span>
                        <span className="v">{loc.pathname}</span>
                    </div>
                </div>

                <div className="hero">
                    <img
                        src="https://picsum.photos/seed/kanban-404/1100/520"
                        alt="not found cover"
                        loading="lazy"
                    />
                    <div className="overlay" />
                    <div className="heroText">
                        <div className="h">Lost in the pipeline</div>
                        <div className="p">
                            Jump back to a real page and keep deals moving.
                        </div>
                    </div>
                </div>

                <div className="actions">
                    <Link className="btn" to="/pipeline">
                        <FiArrowLeft />
                        Back to pipeline
                    </Link>

                    <Link className="btn ghost" to="/reports">
                        <FiBarChart2 />
                        Reports
                    </Link>

                    <Link className="btn ghost" to="/settings">
                        <FiSettings />
                        Settings
                    </Link>
                </div>

                <div className="quick">
                    <div className="qTitle">
                        <FiGrid />
                        Quick links
                    </div>

                    <div className="qGrid">
                        <Link className="qItem" to="/pipeline">
                            <span className="ic">
                                <FiGrid />
                            </span>
                            <span className="txt">
                                <span className="t">Pipeline</span>
                                <span className="d">
                                    Board view for moving deals
                                </span>
                            </span>
                        </Link>

                        <Link className="qItem" to="/reports">
                            <span className="ic">
                                <FiBarChart2 />
                            </span>
                            <span className="txt">
                                <span className="t">Reports</span>
                                <span className="d">
                                    Forecast and performance metrics
                                </span>
                            </span>
                        </Link>

                        <Link className="qItem" to="/settings">
                            <span className="ic">
                                <FiSettings />
                            </span>
                            <span className="txt">
                                <span className="t">Settings</span>
                                <span className="d">
                                    Stages, owners, tags, data tools
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="foot">
                    <Link className="mini" to="/pipeline">
                        <FiHome />
                        Go home
                    </Link>
                </div>
            </Styled.Card>
        </Styled.Wrapper>
    );
};

export default NotFound;
