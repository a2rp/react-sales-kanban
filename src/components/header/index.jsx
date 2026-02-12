import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import {
    FiMenu,
    FiX,
    FiChevronRight,
    FiTrendingUp,
    FiFileText,
    FiSettings,
    FiPlusCircle,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => (document.body.style.overflow = "");
    }, [isMenuOpen]);

    const navCls = ({ isActive }) => `navLink ${isActive ? "active" : ""}`;
    const mNavCls = ({ isActive }) => `mLink ${isActive ? "active" : ""}`;

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <Styled.Col className="logoName">
                    <NavLink
                        to="/pipeline"
                        className="brandLink"
                        aria-label="Go to pipeline"
                    >
                        <img src={logo} alt="Sales Kanban logo" />
                        <div className="name">react - sales kanban</div>
                    </NavLink>
                </Styled.Col>

                <Styled.Col className="centerNav">
                    <Styled.Nav>
                        <NavLink className={navCls} to="/pipeline">
                            Pipeline
                        </NavLink>

                        <NavLink className={navCls} to="/reports">
                            Reports
                        </NavLink>

                        <NavLink className={navCls} to="/settings">
                            Settings
                        </NavLink>
                    </Styled.Nav>
                </Styled.Col>

                <Styled.Col className="rightActions">
                    <Styled.ActionsRow>
                        <NavLink className="navLink cta" to="/pipeline">
                            Add Deal
                        </NavLink>
                    </Styled.ActionsRow>

                    <Styled.IconBtn
                        type="button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={() => setIsMenuOpen((v) => !v)}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </Styled.IconBtn>
                </Styled.Col>
            </Styled.Main>

            <Styled.Backdrop
                className={isMenuOpen ? "open" : ""}
                onClick={closeMenu}
            />

            <Styled.Slider className={isMenuOpen ? "open" : ""}>
                <div className="topRow">
                    <div className="title">
                        <img src={logo} alt="" />
                        <div className="text">react - sales kanban</div>
                    </div>
                    <button
                        type="button"
                        className="closeBtn"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <FiX />
                    </button>
                </div>

                <div className="links">
                    <div className="section">
                        <div className="sectionTitle">Main</div>

                        <NavLink
                            className={mNavCls}
                            to="/pipeline"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiTrendingUp />
                                </span>
                                <span className="txt">
                                    <span className="label">Pipeline</span>
                                    <span className="hint">
                                        Board view for deals
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>

                        <NavLink
                            className={mNavCls}
                            to="/reports"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiFileText />
                                </span>
                                <span className="txt">
                                    <span className="label">Reports</span>
                                    <span className="hint">
                                        Forecast and insights
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>

                        <NavLink
                            className={mNavCls}
                            to="/settings"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiSettings />
                                </span>
                                <span className="txt">
                                    <span className="label">Settings</span>
                                    <span className="hint">
                                        Stages and defaults
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>
                    </div>

                    <div className="divider" />

                    <div className="section">
                        <div className="sectionTitle">Quick Action</div>

                        <NavLink
                            className="mLink cta"
                            to="/pipeline"
                            onClick={closeMenu}
                        >
                            <span className="left">
                                <span className="ic">
                                    <FiPlusCircle />
                                </span>
                                <span className="txt">
                                    <span className="label">Add New Deal</span>
                                    <span className="hint">
                                        Create and track instantly
                                    </span>
                                </span>
                            </span>
                            <FiChevronRight />
                        </NavLink>
                    </div>
                </div>

                <div className="bottomNote">
                    <div className="pill">Sales</div>
                    <div className="muted">Track. Forecast. Close.</div>
                </div>
            </Styled.Slider>
        </Styled.Wrapper>
    );
};

export default Header;
