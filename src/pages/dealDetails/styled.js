import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,

    TopBar: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        .back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            border: 1px solid var(--color-border);
            padding: 8px 12px;
            border-radius: 10px;
            transition: 140ms ease;

            &:hover {
                background: var(--color-accent-soft);
            }
        }

        .actions {
            display: flex;
            gap: 10px;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 10px;
            border: 1px solid transparent;
            background: var(--color-accent);
            color: #fff;
            font-weight: 800;
            transition: 140ms ease;

            &:hover {
                transform: translateY(-1px);
            }
        }

        .ghost {
            background: #fff;
            border-color: var(--color-border);
            color: var(--color-text-primary);
        }

        .danger {
            background: var(--color-danger);
        }
    `,

    Layout: styled.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,

    Left: styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,

    Hero: styled.div`
        position: relative;
        height: 220px;
        border-radius: 16px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 300ms ease;
        }

        &:hover img {
            transform: scale(1.05);
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.6)
            );
        }

        .content {
            position: absolute;
            bottom: 20px;
            left: 20px;
            color: #fff;

            h2 {
                font-size: 24px;
                font-weight: 900;
            }

            .amount {
                margin-top: 6px;
                font-size: 18px;
                font-weight: 700;
            }
        }
    `,

    InfoGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;

        .card {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 14px;
            transition: 140ms ease;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
            }

            .row {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 13px;
                color: var(--color-text-secondary);
                margin-bottom: 6px;
            }

            strong {
                font-size: 16px;
                color: var(--color-text-primary);
            }
        }
    `,

    Right: styled.div`
        display: flex;
        flex-direction: column;
    `,

    NotesCard: styled.div`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        .header h3 {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            font-weight: 900;
        }

        .addBox {
            display: flex;
            flex-direction: column;
            gap: 10px;

            textarea {
                resize: vertical;
                min-height: 80px;
                padding: 10px;
                border-radius: 10px;
                border: 1px solid var(--color-border);
            }
        }

        .btn {
            align-self: flex-end;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 12px;
            border-radius: 10px;
            border: none;
            background: var(--color-accent);
            color: #fff;
            font-weight: 800;
        }

        .notes {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .note {
            padding: 10px;
            border-radius: 10px;
            background: var(--color-surface-alt);
            border: 1px solid var(--color-border);

            .date {
                font-size: 11px;
                font-weight: 700;
                color: var(--color-text-muted);
                margin-bottom: 4px;
            }

            .text {
                font-size: 13px;
                color: var(--color-text-secondary);
            }
        }
    `,
};
