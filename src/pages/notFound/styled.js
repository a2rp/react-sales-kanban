// src/pages/notFound/styled.js
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

export const Styled = {
    Wrapper: styled.div`
        min-height: calc(100vh - 80px);
        padding: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-bg);

        @media (max-width: 900px) {
            padding: 14px;
        }
    `,

    Card: styled.div`
        width: min(1100px, 100%);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 26px 70px rgba(15, 23, 42, 0.08);
        animation: ${fadeUp} 220ms ease both;

        .top {
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .badge {
            width: fit-content;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 999px;
            border: 1px solid rgba(220, 38, 38, 0.18);
            background: rgba(220, 38, 38, 0.06);
            color: var(--color-text-primary);
            font-weight: 900;
            letter-spacing: 0.2px;
            font-size: 12px;

            svg {
                color: var(--color-danger);
                font-size: 15px;
            }
        }

        .titleRow {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 12px;
            flex-wrap: wrap;
        }

        .title {
            font-family: "Antonio", sans-serif;
            font-size: 56px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: var(--color-text-primary);
            line-height: 1;
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-secondary);
            font-weight: 700;
        }

        .path {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
        }

        .path .k {
            font-size: 11px;
            font-weight: 900;
            color: var(--color-text-muted);
            text-transform: uppercase;
            letter-spacing: 0.4px;
        }

        .path .v {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12px;
            color: var(--color-text-primary);
            font-weight: 900;
            word-break: break-all;
        }

        .hero {
            position: relative;
            height: 320px;
            background: #fff;
        }

        .hero img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.02);
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                rgba(15, 23, 42, 0.12),
                rgba(15, 23, 42, 0.62)
            );
        }

        .heroText {
            position: absolute;
            left: 16px;
            bottom: 16px;
            color: #fff;
            max-width: 520px;
        }

        .heroText .h {
            font-weight: 900;
            font-size: 18px;
            letter-spacing: 0.2px;
        }

        .heroText .p {
            margin-top: 6px;
            font-size: 13px;
            opacity: 0.88;
            line-height: 1.45;
        }

        .actions {
            padding: 16px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btn {
            height: 42px;
            padding: 0 14px;
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
                box-shadow: 0 14px 26px rgba(15, 23, 42, 0.12);
                background: rgba(79, 70, 229, 0.92);
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

        .quick {
            padding: 0 16px 16px 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .qTitle {
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

        .qGrid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .qItem {
            text-decoration: none;
            border: 1px solid var(--color-border);
            background: #fff;
            border-radius: 16px;
            padding: 12px;
            display: flex;
            gap: 10px;
            align-items: flex-start;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 14px 26px rgba(15, 23, 42, 0.08);
                background: var(--color-surface-alt);
            }
        }

        .qItem .ic {
            height: 38px;
            width: 38px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 auto;

            svg {
                color: var(--color-accent);
                font-size: 18px;
            }
        }

        .qItem .txt {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .qItem .t {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .qItem .d {
            font-size: 12px;
            color: var(--color-text-secondary);
            line-height: 1.45;
        }

        .foot {
            padding: 0 16px 16px 16px;
            display: flex;
            justify-content: flex-end;
        }

        .mini {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            font-weight: 900;
            color: var(--color-text-secondary);
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: #fff;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            svg {
                color: var(--color-accent);
                font-size: 16px;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 14px 26px rgba(15, 23, 42, 0.08);
                background: var(--color-surface-alt);
            }
        }
    `,
};
