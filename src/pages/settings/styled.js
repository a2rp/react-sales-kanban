// src/pages/settings/styled.js
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
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 14px;
        align-items: stretch;
        animation: ${fadeUp} 220ms ease both;

        @media (max-width: 1050px) {
            grid-template-columns: 1fr;
        }

        .left {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            padding: 16px;
            box-shadow: var(--shadow-sm);
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

        .tabs {
            margin-top: 14px;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tab {
            height: 40px;
            padding: 0 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
            color: var(--color-text-primary);
            font-weight: 900;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            svg {
                color: var(--color-text-muted);
                font-size: 16px;
            }

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
        }

        .right {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 18px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }

        .heroCard {
            position: relative;
            height: 100%;
            min-height: 210px;
        }

        .heroCard img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.03);
        }

        .heroOverlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                rgba(15, 23, 42, 0.12),
                rgba(15, 23, 42, 0.55)
            );
        }

        .heroText {
            position: absolute;
            left: 14px;
            bottom: 14px;
            color: #fff;
        }

        .heroText .k {
            font-size: 11px;
            font-weight: 900;
            opacity: 0.8;
            letter-spacing: 0.3px;
            text-transform: uppercase;
        }

        .heroText .v {
            margin-top: 4px;
            font-weight: 900;
            font-size: 16px;
            letter-spacing: 0.2px;
        }
    `,

    Content: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        animation: ${fadeUp} 240ms ease both;
    `,

    Panel: styled.section`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 14px;
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);

        .pHead {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;

            @media (max-width: 700px) {
                flex-direction: column;
                align-items: stretch;
            }
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

        .formGrid {
            display: grid;
            grid-template-columns: 1fr 1fr auto;
            gap: 10px;
            align-items: end;

            @media (max-width: 850px) {
                grid-template-columns: 1fr;
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
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
        }

        .field input {
            height: 40px;
            border-radius: 12px;
            background: #fff;
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

        .btn.danger {
            background: rgba(220, 38, 38, 0.92);

            &:hover {
                background: rgba(220, 38, 38, 1);
            }
        }

        .tips {
            margin-top: 12px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
        }

        .tip {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .tip .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: rgba(79, 70, 229, 0.7);
            box-shadow: 0 8px 18px rgba(79, 70, 229, 0.18);
            flex: 0 0 auto;
        }

        .stageList {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .row {
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
                transform: translateY(-1px);
                box-shadow: 0 14px 26px rgba(15, 23, 42, 0.06);
            }

            &.editing {
                box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
                border-color: rgba(79, 70, 229, 0.26);
            }

            @media (max-width: 700px) {
                flex-direction: column;
                align-items: stretch;
            }
        }

        .left {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            min-width: 0;
        }

        .name {
            font-weight: 900;
            color: var(--color-text-primary);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 320px;
        }

        .pill {
            font-size: 11px;
            font-weight: 900;
            color: var(--color-text-primary);
            background: rgba(79, 70, 229, 0.08);
            border: 1px solid rgba(79, 70, 229, 0.16);
            padding: 6px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        .right {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;
        }

        .icon {
            height: 38px;
            width: 38px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            svg {
                font-size: 16px;
                color: var(--color-text-primary);
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
                background: #fff;
            }
        }

        .icon.danger svg {
            color: var(--color-danger);
        }

        .icon.ok svg {
            color: var(--color-info);
        }

        .edit {
            display: grid;
            grid-template-columns: 1fr 160px;
            gap: 10px;
            align-items: end;
            width: 100%;

            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
        }

        .pillGrid {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .pillBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 999px;
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

            .txt {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .x {
                height: 22px;
                width: 22px;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background: rgba(15, 23, 42, 0.04);
                display: inline-flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 14px;
                    color: var(--color-text-secondary);
                }
            }
        }

        .dataGrid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;

            @media (max-width: 900px) {
                grid-template-columns: 1fr;
            }
        }

        .upload input {
            display: none;
        }

        .upload .btn {
            width: 100%;
        }

        .note {
            margin-top: 12px;
            font-size: 12px;
            color: var(--color-text-muted);
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

    ConfirmBackdrop: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.38);
        backdrop-filter: blur(10px);
        opacity: 0;
        pointer-events: none;
        transition: opacity 180ms ease;
        z-index: 2100;

        &.open {
            opacity: 1;
            pointer-events: auto;
        }
    `,

    ConfirmModal: styled.div`
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0.98);
        width: min(520px, calc(100vw - 28px));
        background: #fff;
        border: 1px solid var(--color-border);
        border-radius: 18px;
        box-shadow: 0 26px 70px rgba(15, 23, 42, 0.22);
        opacity: 0;
        pointer-events: none;
        transition:
            opacity 180ms ease,
            transform 180ms ease;
        z-index: 2101;

        &.open {
            opacity: 1;
            pointer-events: auto;
            transform: translate(-50%, -50%) scale(1);
        }

        .mHead {
            display: grid;
            grid-template-columns: 46px 1fr 40px;
            gap: 10px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
            align-items: start;
        }

        .ic {
            height: 40px;
            width: 40px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: rgba(220, 38, 38, 0.08);
            border: 1px solid rgba(220, 38, 38, 0.18);
        }

        .ic svg {
            color: var(--color-danger);
            font-size: 18px;
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .m {
            margin-top: 6px;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.5;
        }

        .x {
            height: 38px;
            width: 38px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-alt);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition:
                transform 140ms ease,
                box-shadow 140ms ease,
                background 140ms ease;

            svg {
                font-size: 18px;
                color: var(--color-text-primary);
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: var(--shadow-sm);
                background: #fff;
            }
        }

        .mActions {
            padding: 14px;
            display: flex;
            gap: 10px;
            justify-content: flex-end;

            @media (max-width: 520px) {
                flex-direction: column;
                align-items: stretch;
            }
        }

        .btn {
            height: 40px;
            padding: 0 14px;
            border-radius: 12px;
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
                box-shadow: 0 14px 26px rgba(15, 23, 42, 0.12);
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
    `,
};
