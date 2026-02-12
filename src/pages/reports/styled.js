// src/pages/reports/styled.js
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
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

    Hero: styled.div`
        position: relative;
        border-radius: 18px;
        overflow: hidden;
        border: 1px solid var(--color-border);
        background: #fff;
        animation: ${fadeUp} 220ms ease both;

        .bg {
            position: absolute;
            inset: 0;
        }

        .bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.03);
            filter: saturate(1.05);
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                90deg,
                rgba(246, 247, 251, 0.92),
                rgba(246, 247, 251, 0.72),
                rgba(246, 247, 251, 0.22)
            );
        }

        .content {
            position: relative;
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 14px;

            @media (max-width: 820px) {
                flex-direction: column;
                align-items: stretch;
            }
        }

        .title {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            min-width: 0;
        }

        .title svg {
            color: var(--color-accent);
            font-size: 22px;
            margin-top: 4px;
        }

        .txt {
            min-width: 0;
        }

        .h1 {
            font-family: "Antonio", sans-serif;
            font-size: 26px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--color-text-primary);
        }

        .sub {
            margin-top: 6px;
            font-size: 13px;
            color: var(--color-text-secondary);
            max-width: 780px;
        }

        .actions {
            display: flex;
            gap: 10px;
            flex: 0 0 auto;

            @media (max-width: 820px) {
                justify-content: flex-end;
            }
        }

        .btn {
            height: 40px;
            padding: 0 12px;
            border-radius: 12px;
            border: 1px solid transparent;
            background: var(--color-accent);
            color: #fff;
            font-weight: 900;
            display: inline-flex;
            align-items: center;
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
                box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
                background: rgba(79, 70, 229, 0.92);
            }
        }

        .btn.ghost {
            background: rgba(255, 255, 255, 0.86);
            border-color: var(--color-border);
            color: var(--color-text-primary);

            &:hover {
                background: #fff;
            }
        }

        .filters {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .chip {
            height: 38px;
            padding: 0 12px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid var(--color-border);
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-weight: 900;
            font-size: 12px;
            color: var(--color-text-primary);

            svg {
                color: var(--color-text-muted);
                font-size: 14px;
            }
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .field label {
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
        }

        .field select {
            height: 38px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: rgba(255, 255, 255, 0.88);
            padding: 0 10px;
            min-width: 170px;
        }

        .hint {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-muted);
            font-size: 12px;
            margin-left: auto;

            @media (max-width: 820px) {
                margin-left: 0;
                width: 100%;
            }

            svg {
                font-size: 14px;
            }
        }
    `,

    Kpis: styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        animation: ${fadeUp} 240ms ease both;

        @media (max-width: 1100px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 650px) {
            grid-template-columns: 1fr;
        }

        .k {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 26px rgba(15, 23, 42, 0.08);
            }
        }

        .kTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .kLabel {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);

            svg {
                color: var(--color-text-muted);
                font-size: 15px;
            }
        }

        .kTag {
            font-size: 11px;
            font-weight: 900;
            color: var(--color-text-primary);
            background: rgba(15, 23, 42, 0.04);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
        }

        .kVal {
            margin-top: 10px;
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .kSub {
            margin-top: 8px;
            font-size: 12px;
            color: var(--color-text-muted);
        }
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        align-items: start;
        animation: ${fadeUp} 260ms ease both;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .span2 {
            grid-column: span 2;

            @media (max-width: 1100px) {
                grid-column: auto;
            }
        }
    `,

    Panel: styled.section`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 14px;
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);

        .pHead {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
        }

        .pTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            svg {
                color: var(--color-accent);
                font-size: 16px;
            }
        }

        .pSub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .bars {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .barRow {
            display: grid;
            grid-template-columns: 170px 1fr 140px;
            gap: 10px;
            align-items: center;

            @media (max-width: 650px) {
                grid-template-columns: 1fr;
                gap: 8px;
            }
        }

        .label {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;
        }

        .nm {
            font-weight: 900;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .mini {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .bar {
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: rgba(15, 23, 42, 0.04);
            overflow: hidden;
        }

        .fill {
            height: 100%;
            border-radius: 999px;
            background: var(--color-accent);
            box-shadow: 0 12px 24px rgba(79, 70, 229, 0.18);
            transition:
                width 260ms ease,
                transform 140ms ease;
        }

        .barRow:hover .fill {
            transform: scaleY(1.12);
        }

        .val {
            text-align: right;
            font-weight: 900;
            color: var(--color-text-secondary);

            @media (max-width: 650px) {
                text-align: left;
            }
        }

        .table {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: #fff;
        }

        .tr {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 1fr 1fr;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-border);
            align-items: center;

            @media (max-width: 650px) {
                grid-template-columns: 1fr;
                gap: 6px;
            }
        }

        .tr:last-child {
            border-bottom: 0;
        }

        .th {
            background: rgba(15, 23, 42, 0.03);
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
        }

        .r {
            text-align: right;

            @media (max-width: 650px) {
                text-align: left;
            }
        }

        .strong {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .row {
            width: 100%;
            text-align: left;
            border: 1px solid var(--color-border);
            background: #fff;
            border-radius: 16px;
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
            }
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .avatar {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid var(--color-border);
            flex: 0 0 auto;
        }

        .avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .meta {
            min-width: 0;
        }

        .meta .nm {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .meta .sub {
            margin-top: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .pill {
            font-size: 11px;
            font-weight: 900;
            color: var(--color-text-primary);
            background: rgba(79, 70, 229, 0.08);
            border: 1px solid rgba(79, 70, 229, 0.16);
            padding: 5px 10px;
            border-radius: 999px;
        }

        .dot {
            width: 4px;
            height: 4px;
            border-radius: 999px;
            background: rgba(100, 116, 139, 0.45);
        }

        .muted {
            color: var(--color-text-muted);
        }

        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 6px;
            flex: 0 0 auto;

            @media (max-width: 650px) {
                align-items: flex-start;
                width: 100%;
            }
        }

        .amt {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .delta {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            font-weight: 900;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: rgba(15, 23, 42, 0.03);
            color: var(--color-text-secondary);
        }

        .delta svg {
            font-size: 14px;
        }

        .delta.up {
            background: rgba(37, 99, 235, 0.08);
            border-color: rgba(37, 99, 235, 0.18);
            color: var(--color-info);
        }

        .delta.down {
            background: rgba(220, 38, 38, 0.06);
            border-color: rgba(220, 38, 38, 0.18);
            color: var(--color-danger);
        }
    `,
};
