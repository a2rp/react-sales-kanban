// src/pages/pipelineBoard/styled.js
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
    0% { opacity: 0.45; }
    50% { opacity: 0.85; }
    100% { opacity: 0.45; }
`;

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        @media (max-width: 900px) {
            padding: 14px;
        }
    `,

    TopBar: styled.div`
        display: flex;
        gap: 14px;
        align-items: stretch;
        justify-content: space-between;
        padding: 14px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        animation: ${fadeUp} 200ms ease both;

        .left {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .title {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-family: "Antonio", sans-serif;
            font-size: 22px;
            letter-spacing: 0.8px;
            text-transform: uppercase;

            svg {
                color: var(--color-accent);
                font-size: 20px;
            }
        }

        .meta {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--color-surface-alt);
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            color: var(--color-text-secondary);

            b {
                color: var(--color-text-primary);
                font-weight: 800;
            }
        }

        .searchRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .search {
            flex: 1;
            min-width: 260px;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
            transition:
                box-shadow 160ms ease,
                border-color 160ms ease;

            svg {
                color: var(--color-text-muted);
                font-size: 16px;
                flex: 0 0 auto;
            }

            input {
                border: 0;
                outline: none;
                padding: 0;
                background: transparent;
                width: 100%;
            }

            &:focus-within {
                border-color: var(--color-accent);
                box-shadow: 0 0 0 3px var(--color-accent-soft);
            }
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            height: 40px;
            padding: 0 12px;
            border-radius: var(--radius-md);
            border: 1px solid transparent;
            background: var(--color-accent);
            color: #fff;
            font-size: 13px;
            font-weight: 800;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            svg {
                font-size: 16px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-md);
                background: var(--color-accent-strong);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .btn.ghost {
            background: var(--color-surface);
            border-color: var(--color-border);
            color: var(--color-text-primary);

            &:hover {
                background: var(--color-surface-alt);
                box-shadow: var(--shadow-sm);
            }
        }

        .right {
            width: 240px;
            display: flex;
            gap: 10px;

            @media (max-width: 1150px) {
                display: none;
            }
        }

        .kpi {
            flex: 1;
            background: var(--color-surface-alt);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            padding: 10px 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 6px;
        }

        .kTitle {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: var(--color-text-secondary);

            svg {
                color: var(--color-text-muted);
                font-size: 15px;
            }
        }

        .kVal {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.4px;
        }
    `,

    Layout: styled.div`
        display: grid;
        grid-template-columns: 280px 1fr 360px;
        gap: 14px;
        align-items: start;

        @media (max-width: 1200px) {
            grid-template-columns: 280px 1fr;
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    LeftRail: styled.aside`
        display: flex;
        flex-direction: column;
        gap: 14px;
        position: sticky;
        top: 12px;

        @media (max-width: 900px) {
            position: static;
        }

        .panel {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            padding: 12px;
            animation: ${fadeUp} 220ms ease both;
        }

        .pTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            letter-spacing: 0.4px;
            color: var(--color-text-primary);
            margin-bottom: 10px;

            svg {
                color: var(--color-accent);
                font-size: 16px;
            }
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 10px;

            .lbl {
                font-size: 12px;
                color: var(--color-text-secondary);
                font-weight: 800;
                letter-spacing: 0.3px;
            }
        }

        .inRow {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 10px;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-md);
            background: var(--color-surface-alt);
            transition:
                box-shadow 160ms ease,
                border-color 160ms ease;

            .ic {
                color: var(--color-text-muted);
                font-size: 16px;
            }

            input,
            select {
                border: 0;
                padding: 0;
                background: transparent;
                width: 100%;
                outline: none;
            }

            &:focus-within {
                border-color: var(--color-accent);
                box-shadow: 0 0 0 3px var(--color-accent-soft);
            }
        }

        .check {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13px;
            color: var(--color-text-secondary);
            user-select: none;

            input {
                width: 16px;
                height: 16px;
                accent-color: var(--color-accent);
            }
        }

        .hint {
            margin-top: 10px;
            font-size: 12px;
            color: var(--color-text-muted);
            line-height: 1.45;
        }

        .views {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .viewBtn {
            text-align: left;
            padding: 10px 10px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
                background: #fff;
            }

            .nm {
                display: block;
                font-weight: 900;
                font-size: 13px;
                color: var(--color-text-primary);
            }

            .sub {
                display: block;
                margin-top: 2px;
                font-size: 12px;
                color: var(--color-text-muted);
            }
        }

        .empty {
            font-size: 12px;
            color: var(--color-text-muted);
            padding: 8px 2px;
        }
    `,

    Board: styled.main`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: 10px;
        overflow: hidden;
        animation: ${fadeUp} 240ms ease both;

        .columns {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: minmax(300px, 340px);
            gap: 10px;
            overflow: auto;
            padding-bottom: 6px;
        }
    `,

    Column: styled.section`
        background: var(--color-surface-alt);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        min-height: 560px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transition:
            box-shadow 140ms ease,
            transform 140ms ease;

        &.dragMode {
            outline: 2px dashed rgba(79, 70, 229, 0.18);
            outline-offset: -6px;
        }

        .colHead {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 12px 12px;
            background: #fff;
            border-bottom: 1px solid var(--color-border);
        }

        .hLeft .name {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .hLeft .sub {
            margin-top: 2px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-muted);
            font-size: 12px;

            .dot {
                height: 4px;
                width: 4px;
                border-radius: 99px;
                background: var(--color-border);
            }
        }

        .hRight {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .prob {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            background: var(--color-accent-soft);
            border: 1px solid rgba(79, 70, 229, 0.16);
            padding: 6px 10px;
            border-radius: 999px;
        }

        .icon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease;

            svg {
                color: var(--color-text-primary);
                font-size: 16px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
            }
        }

        .cards {
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            overflow: auto;
            flex: 1;
        }

        .empty {
            border: 1px dashed rgba(100, 116, 139, 0.35);
            border-radius: var(--radius-lg);
            padding: 14px;
            background: rgba(255, 255, 255, 0.75);
            color: var(--color-text-muted);
            text-align: center;

            .eTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .eSub {
                font-size: 12px;
            }
        }
    `,

    InlineAdd: styled.div`
        margin: 10px;
        padding: 10px;
        border-radius: var(--radius-lg);
        background: #fff;
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        animation: ${fadeUp} 160ms ease both;

        .row {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
        }

        /* previously side by side - now forced single column always */
        .row.two {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        label {
            display: flex;
            flex-direction: column;
            gap: 6px;
            width: 100%;

            span {
                font-size: 12px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            input {
                background: var(--color-surface-alt);
                border-radius: var(--radius-md);
            }
        }

        .actions {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        .btn {
            height: 38px;
            padding: 0 12px;
            border-radius: var(--radius-md);
            border: 1px solid transparent;
            background: var(--color-accent);
            color: #fff;
            font-weight: 900;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
                background: var(--color-accent-strong);
            }
        }

        .btn.ghost {
            background: #fff;
            border-color: var(--color-border);
            color: var(--color-text-primary);

            &:hover {
                background: var(--color-surface-alt);
            }
        }
    `,

    Card: styled.button`
        width: 100%;
        text-align: left;
        padding: 12px;
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border);
        background: #fff;
        box-shadow: var(--shadow-sm);
        transition:
            transform 140ms ease,
            box-shadow 140ms ease,
            border-color 140ms ease;
        animation: ${fadeUp} 180ms ease both;

        &.active {
            border-color: rgba(79, 70, 229, 0.32);
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
        }

        &.dragging {
            opacity: 0.55;
            transform: rotate(-0.3deg);
        }

        &.overdue {
            border-color: rgba(220, 38, 38, 0.28);
        }

        &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .top {
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .meta {
            flex: 1;
            min-width: 0;
        }

        .company {
            font-weight: 900;
            color: var(--color-text-primary);
            line-height: 1.2;
            margin-bottom: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .line {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .owner,
        .age {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--color-text-muted);

            svg {
                font-size: 14px;
            }
        }

        .amt {
            text-align: right;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            .w {
                display: block;
                margin-top: 2px;
                font-size: 12px;
                color: var(--color-text-muted);
                font-weight: 800;
            }
        }

        .bottom {
            margin-top: 10px;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            align-items: center;
        }

        .tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
        }

        .tag {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-text-secondary);
            background: var(--color-surface-alt);
            border: 1px solid var(--color-border);
            padding: 4px 8px;
            border-radius: 999px;
        }

        .tag.more {
            color: var(--color-text-muted);
        }

        .follow {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--color-text-muted);

            svg {
                font-size: 14px;
            }
        }

        .follow.bad {
            color: var(--color-danger);
        }

        .probChip {
            justify-self: end;
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            background: rgba(15, 23, 42, 0.04);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
        }
    `,

    Inspector: styled.aside`
        position: sticky;
        top: 12px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        min-height: 660px;
        overflow: hidden;
        animation: ${fadeUp} 260ms ease both;

        @media (max-width: 1200px) {
            display: none;
        }

        .emptyState {
            padding: 18px;
            color: var(--color-text-muted);

            .t {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }

            .s {
                font-size: 13px;
            }
        }

        .panel {
            height: 100%;
            display: flex;
            flex-direction: column;
            background: var(--color-surface);
        }

        .head {
            padding: 14px 14px;
            border-bottom: 1px solid var(--color-border);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
            background: linear-gradient(
                180deg,
                rgba(79, 70, 229, 0.07),
                rgba(255, 255, 255, 0)
            );
        }

        .hLeft {
            min-width: 0;
        }

        .hTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.3px;

            svg {
                color: var(--color-accent);
            }
        }

        .hSub {
            margin-top: 8px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .badge {
            font-size: 11px;
            font-weight: 900;
            background: rgba(15, 23, 42, 0.04);
            border: 1px solid var(--color-border);
            color: var(--color-text-secondary);
            padding: 5px 10px;
            border-radius: 999px;
            letter-spacing: 0.2px;
            line-height: 1;
        }

        .badge.bad {
            border-color: rgba(220, 38, 38, 0.22);
            background: rgba(220, 38, 38, 0.06);
            color: var(--color-danger);
        }

        .close {
            height: 38px;
            width: 38px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: rgba(255, 255, 255, 0.85);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            svg {
                color: var(--color-text-primary);
                font-size: 18px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
                background: #fff;
            }
        }

        .hero {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
            background: #fff;
        }

        .heroTop {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .heroMeta {
            flex: 1;
            min-width: 0;
        }

        .heroMeta .company {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.3px;
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .heroMeta .row {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            background: rgba(79, 70, 229, 0.06);
            border: 1px solid rgba(79, 70, 229, 0.14);
            padding: 7px 10px;
            border-radius: 999px;

            svg {
                color: var(--color-accent);
                font-size: 14px;
            }
        }

        .probRow {
            margin-top: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--color-text-secondary);
            font-size: 12px;

            .lbl {
                font-weight: 900;
                letter-spacing: 0.2px;
            }

            .val {
                font-weight: 900;
                color: var(--color-text-primary);
            }
        }

        .range {
            width: 100%;
            margin-top: 10px;
            appearance: none;
            height: 6px;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.08);
            outline: none;
        }

        .range::-webkit-slider-thumb {
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 999px;
            background: var(--color-accent);
            border: 3px solid #fff;
            box-shadow: 0 10px 22px rgba(15, 23, 42, 0.18);
            cursor: pointer;
        }

        .range::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 999px;
            background: var(--color-accent);
            border: 3px solid #fff;
            box-shadow: 0 10px 22px rgba(15, 23, 42, 0.18);
            cursor: pointer;
        }

        .section {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .secTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            letter-spacing: 0.25px;
            font-size: 13px;
            text-transform: uppercase;
            opacity: 0.9;
        }

        .stageGrid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
        }

        .stageBtn {
            width: 100%;
            text-align: left;
            padding: 10px 12px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
                background: #fff;
            }

            &.active {
                border-color: rgba(79, 70, 229, 0.28);
                box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
                background: #fff;
            }

            .nm {
                font-weight: 900;
                color: var(--color-text-primary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .pc {
                flex: 0 0 auto;
                font-size: 12px;
                font-weight: 900;
                color: var(--color-text-secondary);
                background: rgba(15, 23, 42, 0.04);
                border: 1px solid var(--color-border);
                padding: 6px 10px;
                border-radius: 999px;
            }
        }

        .form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .form label {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .form label span {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
        }

        .form input,
        .form textarea {
            background: #fff;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
            padding: 10px 12px;
        }

        .form input:focus,
        .form textarea:focus {
            border-color: var(--color-accent);
            box-shadow: 0 0 0 3px var(--color-accent-soft);
        }

        .form .two {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
        }

        .btnRow {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 4px;
        }

        .btn {
            height: 40px;
            padding: 0 12px;
            border-radius: var(--radius-md);
            border: 1px solid transparent;
            background: var(--color-accent);
            color: #fff;
            font-weight: 900;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            svg {
                font-size: 16px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
                background: var(--color-accent-strong);
            }
        }

        .btn.ghost {
            background: #fff;
            border-color: var(--color-border);
            color: var(--color-text-primary);

            &:hover {
                background: var(--color-surface-alt);
            }
        }

        .btn.danger {
            background: rgba(220, 38, 38, 0.92);

            &:hover {
                background: rgba(220, 38, 38, 1);
            }
        }

        .noteBox {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .noteBox textarea {
            background: #fff;
            border-radius: var(--radius-md);
            min-height: 92px;
        }

        .notes {
            margin-top: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .note {
            border: 1px solid var(--color-border);
            background: #fff;
            border-radius: var(--radius-md);
            padding: 12px;
            box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
            animation: ${fadeUp} 160ms ease both;

            .at {
                font-size: 11px;
                font-weight: 900;
                color: var(--color-text-muted);
                margin-bottom: 6px;
                letter-spacing: 0.2px;
            }

            .tx {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .emptyMini {
            font-size: 12px;
            color: var(--color-text-muted);
            padding: 6px 2px;
        }
    `,

    ImgWrap: styled.div`
        height: ${(p) => p.$size}px;
        width: ${(p) => p.$size}px;
        border-radius: 14px;
        border: 1px solid var(--color-border);
        background: #fff;
        overflow: hidden;
        position: relative;
        flex: 0 0 auto;

        .sk {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                90deg,
                rgba(148, 163, 184, 0.18),
                rgba(148, 163, 184, 0.08),
                rgba(148, 163, 184, 0.18)
            );
            animation: ${pulse} 1.1s ease infinite;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 160ms ease;
        }
    `,

    Toast: styled.div`
        position: fixed;
        left: 50%;
        bottom: 18px;
        transform: translateX(-50%) translateY(10px);
        opacity: 0;
        pointer-events: none;
        padding: 10px 12px;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.92);
        color: #fff;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 0.2px;
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.22);
        transition:
            opacity 180ms ease,
            transform 180ms ease;
        z-index: 2000;

        &.open {
            opacity: 1;
            transform: translateX(-50%) translateY(0px);
        }
    `,
};
