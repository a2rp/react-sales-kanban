import{d as S,m as le,r as c,j as e,F as ce,a as Fe,b as te,c as de,e as Te,f as ae,g as oe,h as pe,i as ze,k as re,l as Me,n as Ue,o as Oe,p as $e}from"./index-CzSBm97R.js";const z=le`
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
`,Le=le`
    0% { opacity: 0.45; }
    50% { opacity: 0.85; }
    100% { opacity: 0.45; }
`,A={Wrapper:S.div`
        width: 100%;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        @media (max-width: 900px) {
            padding: 14px;
        }
    `,TopBar:S.div`
        display: flex;
        gap: 14px;
        align-items: stretch;
        justify-content: space-between;
        padding: 14px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        animation: ${z} 200ms ease both;

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
    `,Layout:S.div`
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
    `,LeftRail:S.aside`
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
            animation: ${z} 220ms ease both;
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
    `,Board:S.main`
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        padding: 10px;
        overflow: hidden;
        animation: ${z} 240ms ease both;

        .columns {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: minmax(300px, 340px);
            gap: 10px;
            overflow: auto;
            padding-bottom: 6px;
        }
    `,Column:S.section`
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
    `,InlineAdd:S.div`
        margin: 10px;
        padding: 10px;
        border-radius: var(--radius-lg);
        background: #fff;
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        animation: ${z} 160ms ease both;

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
    `,Card:S.button`
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
        animation: ${z} 180ms ease both;

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
    `,Inspector:S.aside`
        position: sticky;
        top: 12px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-sm);
        min-height: 660px;
        overflow: hidden;
        animation: ${z} 260ms ease both;

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
            animation: ${z} 160ms ease both;

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
    `,ImgWrap:S.div`
        height: ${a=>a.$size}px;
        width: ${a=>a.$size}px;
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
            animation: ${Le} 1.1s ease infinite;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 160ms ease;
        }
    `,Toast:S.div`
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
    `},se="rsk_stages",ne="rsk_deals",ie="rsk_views";function b(a="id"){return`${a}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`}function M(a){return Number(a||0).toLocaleString("en-IN",{maximumFractionDigits:0})}function C(a){const s=Number(a);return Number.isNaN(s)?0:Math.max(0,Math.min(100,s))}function Re(a,s){const l=new Date(a).getTime(),m=new Date(s).getTime()-l;return Math.floor(m/(1e3*60*60*24))}function H(a){if(!a)return"";const s=new Date(a),l=s.getFullYear(),d=String(s.getMonth()+1).padStart(2,"0"),m=String(s.getDate()).padStart(2,"0");return`${l}-${d}-${m}`}function X(a){return a?new Date(`${a}T00:00:00`).toISOString():""}function _e(){return[{id:"st_new",name:"New",probability:10,order:1},{id:"st_qual",name:"Qualified",probability:25,order:2},{id:"st_prop",name:"Proposal",probability:45,order:3},{id:"st_neg",name:"Negotiation",probability:70,order:4},{id:"st_won",name:"Won",probability:100,order:5},{id:"st_lost",name:"Lost",probability:0,order:6}]}function Be(){const a=Date.now(),s=l=>{const d=new Date(a-Math.floor(Math.random()*9+1)*864e5).toISOString(),m=new Date(a+Math.floor(Math.random()*7)*864e5).toISOString(),g=Math.floor(Math.random()*9e5+5e4),f=l.seed||b("pic"),j=l.stageId||"st_new",T=l.probability??10;return{id:b("deal"),company:l.company,title:l.title||l.company,owner:l.owner||"You",tags:l.tags||[],amount:g,currency:"INR",stageId:j,probability:T,createdAt:d,updatedAt:d,expectedCloseAt:new Date(a+Math.floor(Math.random()*30+5)*864e5).toISOString(),nextFollowUpAt:m,lastActivityAt:d,notes:[{id:b("note"),at:d,text:"Initial discovery done. Waiting for next step."}],stageHistory:[{id:b("hist"),at:d,from:"",to:j}],imageSeed:f}};return[s({company:"Nova Retail",owner:"Ash",tags:["High value","Fast track"],stageId:"st_qual",probability:25,seed:"nova-retail"}),s({company:"Orbit Logistics",owner:"Ash",tags:["Renewal"],stageId:"st_prop",probability:45,seed:"orbit-logistics"}),s({company:"Beacon Finance",owner:"Ash",tags:["Enterprise"],stageId:"st_neg",probability:70,seed:"beacon-finance"}),s({company:"Lumen Health",owner:"Ash",tags:["Inbound"],stageId:"st_new",probability:10,seed:"lumen-health"}),s({company:"Zenith Studios",owner:"Ash",tags:["Upsell"],stageId:"st_qual",probability:25,seed:"zenith-studios"})]}function Q(a,s){try{const l=localStorage.getItem(a);return l?JSON.parse(l)??s:s}catch{return s}}function G(a,s){try{localStorage.setItem(a,JSON.stringify(s))}catch{}}function W(a,s){const l=Number(a||0),d=C(s);return Math.round(l*d/100)}function Ee(a,s){const l=s.filter(g=>g.stageId===a.id),d=l.reduce((g,f)=>g+Number(f.amount||0),0),m=l.reduce((g,f)=>g+W(f.amount,f.probability),0);return{count:l.length,total:d,weighted:m}}function xe({src:a,alt:s,size:l=36}){const[d,m]=c.useState(!1);return e.jsxs(A.ImgWrap,{$size:l,children:[d?null:e.jsx("span",{className:"sk","aria-hidden":"true"}),e.jsx("img",{src:a,alt:s,onLoad:()=>m(!0),style:{opacity:d?1:0}})]})}function Ve(){const[a]=c.useState(()=>{const t=Q(se,null);return Array.isArray(t)&&t.length?t:_e()}),[s,l]=c.useState(()=>{const t=Q(ne,null);return Array.isArray(t)&&t.length?t:Be()}),[d,m]=c.useState(""),[g,f]=c.useState(!1),[j,T]=c.useState(""),[D,U]=c.useState(""),[x,N]=c.useState(""),[$,L]=c.useState(""),[_,R]=c.useState(""),[h,n]=c.useState({company:"",amount:"",owner:"Ash",tag:"",nextFollowUp:""}),[u,B]=c.useState({open:!1,text:""}),E=c.useRef(null);c.useEffect(()=>{G(se,a)},[a]),c.useEffect(()=>{G(ne,s)},[s]);const Z=c.useMemo(()=>[...a].sort((t,r)=>(t.order||0)-(r.order||0)),[a]),me=c.useMemo(()=>{const t=new Set;return s.forEach(r=>(r.tags||[]).forEach(i=>t.add(i))),Array.from(t).sort((r,i)=>r.localeCompare(i))},[s]),O=c.useMemo(()=>{const t=d.trim().toLowerCase(),r=j===""?0:Number(j||0),i=new Date;return s.filter(o=>{const p=`${o.company} ${o.title} ${o.owner}`.toLowerCase(),y=t?p.includes(t):!0,I=Number(o.amount||0)>=r,F=D?(o.tags||[]).includes(D):!0,k=o.nextFollowUpAt?new Date(o.nextFollowUpAt):null,V=k?k.getTime()<i.getTime():!1;return y&&I&&F&&(g?V:!0)})},[s,d,j,D,g]),v=c.useMemo(()=>s.find(t=>t.id===x)||null,[s,x]),q=c.useMemo(()=>{const t=O.reduce((i,o)=>i+Number(o.amount||0),0),r=O.reduce((i,o)=>i+W(o.amount,o.probability),0);return{total:t,weighted:r,count:O.length}},[O]);function w(t){B({open:!0,text:t}),window.clearTimeout(w.t),w.t=window.setTimeout(()=>B({open:!1,text:""}),1800)}function K(t){return a.find(r=>r.id===t)||null}function Y(t,r){l(i=>i.map(o=>{if(o.id!==t)return o;const p=new Date().toISOString();return{...o,...r,updatedAt:p}}))}function ge(t){l(r=>r.filter(i=>i.id!==t)),x===t&&N(""),w("Deal deleted")}function ue(t){const r=s.find(o=>o.id===t);if(!r)return;const i={...r,id:b("deal"),company:`${r.company} Copy`,title:`${r.title} Copy`,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),lastActivityAt:new Date().toISOString(),stageHistory:[{id:b("hist"),at:new Date().toISOString(),from:"",to:r.stageId}],notes:(r.notes||[]).map(o=>({...o,id:b("note")})),imageSeed:`${r.imageSeed}-copy`};l(o=>[i,...o]),w("Deal duplicated")}function J(t,r){const i=s.find(k=>k.id===t);if(!i)return;const o=i.stageId;if(o===r)return;const p=K(r),y=C(p?p.probability:i.probability),I=new Date().toISOString(),F=[...i.stageHistory||[],{id:b("hist"),at:I,from:o,to:r}];E.current={dealId:t,fromStageId:o,toStageId:r},Y(t,{stageId:r,probability:y,stageHistory:F,lastActivityAt:I}),w("Moved")}function he(){const t=E.current;t&&(E.current=null,J(t.dealId,t.fromStageId),w("Undo"))}function be(t,r){L(r);try{t.dataTransfer.setData("text/plain",r),t.dataTransfer.effectAllowed="move"}catch{}}function fe(){L("")}function ve(t,r){t.preventDefault();const i=t.dataTransfer.getData("text/plain");i&&(J(i,r),L(""))}function we(t){t.preventDefault()}function ye(t){R(t),n({company:"",amount:"",owner:"Ash",tag:"",nextFollowUp:""})}function je(){R("")}function Ne(t){const r=h.company.trim(),i=Number(h.amount||0);if(!r||!i){w("Add company and amount");return}const o=K(t),p=o?C(o.probability):0,y=new Date().toISOString(),I=h.nextFollowUp?X(h.nextFollowUp):new Date(Date.now()+2*864e5).toISOString(),F=h.tag.trim(),k=F?[F]:[],V={id:b("deal"),company:r,title:r,owner:h.owner.trim()||"Ash",tags:k,amount:i,currency:"INR",stageId:t,probability:p,createdAt:y,updatedAt:y,expectedCloseAt:new Date(Date.now()+21*864e5).toISOString(),nextFollowUpAt:I,lastActivityAt:y,notes:[{id:b("note"),at:y,text:"Deal created on the board."}],stageHistory:[{id:b("hist"),at:y,from:"",to:t}],imageSeed:r.toLowerCase().replace(/\s+/g,"-")};l(ee=>[V,...ee]),N(V.id),R(""),w("Deal added")}function ke(t){v&&Y(v.id,{probability:C(t)})}function Se(t){if(!v)return;const r=t.trim();if(!r)return;const i=new Date().toISOString(),o=[{id:b("note"),at:i,text:r},...v.notes||[]];Y(v.id,{notes:o,lastActivityAt:i}),w("Note added")}const Ae=c.useMemo(()=>{const t=Date.now();return s.filter(r=>r.nextFollowUpAt&&new Date(r.nextFollowUpAt).getTime()<t).length},[s]),P=c.useMemo(()=>{const t=Q(ie,[]);return Array.isArray(t)?t:[]},[]);function Ce(){const t=`View ${String(P.length+1).padStart(2,"0")}`,r=[{id:b("view"),name:t,query:d,onlyOverdue:g,minAmount:j,activeTag:D},...P];G(ie,r),w("View saved")}function De(t){m(t.query||""),f(!!t.onlyOverdue),T(t.minAmount||""),U(t.activeTag||""),w("View applied")}function Ie(){m(""),f(!1),T(""),U(""),w("Cleared")}return e.jsxs(A.Wrapper,{children:[e.jsxs(A.TopBar,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{className:"title",children:[e.jsx(ce,{}),e.jsx("span",{children:"Pipeline"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{className:"pill",children:["Deals ",e.jsx("b",{children:q.count})]}),e.jsxs("span",{className:"pill",children:["Total ",e.jsxs("b",{children:["₹",M(q.total)]})]}),e.jsxs("span",{className:"pill",children:["Forecast ",e.jsxs("b",{children:["₹",M(q.weighted)]})]})]})]}),e.jsxs("div",{className:"searchRow",children:[e.jsxs("div",{className:"search",children:[e.jsx(Fe,{}),e.jsx("input",{value:d,onChange:t=>m(t.target.value),placeholder:"Search deals, companies, owners","aria-label":"Search"})]}),e.jsxs("button",{type:"button",className:"btn ghost",onClick:Ce,title:"Save view",children:[e.jsx(te,{}),e.jsx("span",{children:"Save view"})]}),e.jsxs("button",{type:"button",className:"btn ghost",onClick:Ie,title:"Clear filters",children:[e.jsx(de,{}),e.jsx("span",{children:"Clear"})]}),E.current?e.jsxs("button",{type:"button",className:"btn",onClick:he,title:"Undo last move",children:[e.jsx(Te,{}),e.jsx("span",{children:"Undo"})]}):null]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"kpi",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx(ae,{}),e.jsx("span",{children:"Overdue"})]}),e.jsx("div",{className:"kVal",children:Ae})]}),e.jsxs("div",{className:"kpi",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx(oe,{}),e.jsx("span",{children:"Filters"})]}),e.jsx("div",{className:"kVal",children:(g?1:0)+(D?1:0)+(j?1:0)})]})]})]}),e.jsxs(A.Layout,{children:[e.jsxs(A.LeftRail,{children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(oe,{}),e.jsx("span",{children:"Quick filters"})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Min amount"}),e.jsxs("div",{className:"inRow",children:[e.jsx(pe,{className:"ic"}),e.jsx("input",{value:j,onChange:t=>T(t.target.value.replace(/[^\d]/g,"")),placeholder:"50000",inputMode:"numeric"})]})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Tag"}),e.jsxs("div",{className:"inRow",children:[e.jsx(ze,{className:"ic"}),e.jsxs("select",{value:D,onChange:t=>U(t.target.value),children:[e.jsx("option",{value:"",children:"All tags"}),me.map(t=>e.jsx("option",{value:t,children:t},t))]})]})]}),e.jsxs("label",{className:"check",children:[e.jsx("input",{type:"checkbox",checked:g,onChange:t=>f(t.target.checked)}),e.jsx("span",{children:"Only overdue follow-ups"})]}),e.jsx("div",{className:"hint",children:'Tip: use "Save view" to keep a preset for clients or demos.'})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(re,{}),e.jsx("span",{children:"Saved views"})]}),e.jsx("div",{className:"views",children:P.length?P.slice(0,6).map(t=>e.jsxs("button",{type:"button",className:"viewBtn",onClick:()=>De(t),children:[e.jsx("span",{className:"nm",children:t.name}),e.jsxs("span",{className:"sub",children:[t.onlyOverdue?"Overdue":"All"," ",t.activeTag?`- ${t.activeTag}`:""]})]},t.id)):e.jsx("div",{className:"empty",children:"No views yet. Save one from the top bar."})})]})]}),e.jsx(A.Board,{children:e.jsx("div",{className:"columns",children:Z.map(t=>{const r=Ee(t,O),i=O.filter(o=>o.stageId===t.id);return e.jsxs(A.Column,{onDragOver:we,onDrop:o=>ve(o,t.id),className:$?"dragMode":"",children:[e.jsxs("div",{className:"colHead",children:[e.jsxs("div",{className:"hLeft",children:[e.jsx("div",{className:"name",children:t.name}),e.jsxs("div",{className:"sub",children:[e.jsxs("span",{children:[r.count," deals"]}),e.jsx("span",{className:"dot"}),e.jsxs("span",{children:["₹",M(r.total)]})]})]}),e.jsxs("div",{className:"hRight",children:[e.jsxs("div",{className:"prob",title:"Stage probability",children:[C(t.probability),"%"]}),e.jsx("button",{type:"button",className:"icon",onClick:()=>ye(t.id),title:"Add deal",children:e.jsx(te,{})})]})]}),_===t.id?e.jsxs(A.InlineAdd,{children:[e.jsx("div",{className:"row",children:e.jsxs("label",{children:[e.jsx("span",{children:"Company"}),e.jsx("input",{value:h.company,onChange:o=>n(p=>({...p,company:o.target.value})),placeholder:"Company name"})]})}),e.jsxs("div",{className:"row two",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Amount"}),e.jsx("input",{value:h.amount,onChange:o=>n(p=>({...p,amount:o.target.value.replace(/[^\d]/g,"")})),placeholder:"150000",inputMode:"numeric"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Tag"}),e.jsx("input",{value:h.tag,onChange:o=>n(p=>({...p,tag:o.target.value})),placeholder:"High value"})]})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Owner"}),e.jsx("input",{value:h.owner,onChange:o=>n(p=>({...p,owner:o.target.value})),placeholder:"Owner"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Next follow-up"}),e.jsx("input",{type:"date",value:h.nextFollowUp,onChange:o=>n(p=>({...p,nextFollowUp:o.target.value}))})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"btn",onClick:()=>Ne(t.id),children:"Add"}),e.jsx("button",{type:"button",className:"btn ghost",onClick:je,children:"Cancel"})]})]}):null,e.jsx("div",{className:"cards",children:i.length?i.map(o=>{const p=o.nextFollowUpAt?new Date(o.nextFollowUpAt):null,y=p?p.getTime()<Date.now():!1,I=Re(o.createdAt,new Date().toISOString()),F=W(o.amount,o.probability);return e.jsxs(A.Card,{draggable:!0,onDragStart:k=>be(k,o.id),onDragEnd:fe,onClick:()=>N(o.id),className:[x===o.id?"active":"",$===o.id?"dragging":"",y?"overdue":""].join(" "),children:[e.jsxs("div",{className:"top",children:[e.jsx(xe,{src:`https://picsum.photos/seed/${encodeURIComponent(o.imageSeed||o.company)}/72/72`,alt:`${o.company} logo`,size:38}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"company",children:o.company}),e.jsxs("div",{className:"line",children:[e.jsxs("span",{className:"owner",children:[e.jsx(re,{}),o.owner]}),e.jsxs("span",{className:"age",children:[e.jsx(ae,{}),I,"d"]})]})]}),e.jsxs("div",{className:"amt",children:["₹",M(o.amount),e.jsxs("span",{className:"w",children:["₹",M(F)]})]})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("div",{className:"tags",children:[(o.tags||[]).slice(0,2).map(k=>e.jsx("span",{className:"tag",children:k},k)),(o.tags||[]).length>2?e.jsxs("span",{className:"tag more",children:["+",(o.tags||[]).length-2]}):null]}),e.jsxs("div",{className:`follow ${y?"bad":""}`,children:[e.jsx(Me,{}),e.jsx("span",{children:p?p.toLocaleDateString("en-US",{month:"short",day:"2-digit"}):"No follow-up"})]}),e.jsxs("div",{className:"probChip",children:[C(o.probability),"%"]})]})]},o.id)}):e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"eTitle",children:"No deals"}),e.jsx("div",{className:"eSub",children:"Drop here or add a new deal."})]})})]},t.id)})})}),e.jsx(A.Inspector,{className:v?"open":"",children:v?e.jsx(Ye,{deal:v,stages:Z,onClose:()=>N(""),onMove:t=>J(v.id,t),onSetProb:ke,onAddNote:Se,onDelete:()=>ge(v.id),onDuplicate:()=>ue(v.id),onUpdate:t=>Y(v.id,t)}):e.jsxs("div",{className:"emptyState",children:[e.jsx("div",{className:"t",children:"Select a deal"}),e.jsx("div",{className:"s",children:"Click any card to open details here."})]})})]}),e.jsx(A.Toast,{className:u.open?"open":"",children:u.text})]})}function Ye({deal:a,stages:s,onClose:l,onMove:d,onSetProb:m,onAddNote:g,onDelete:f,onDuplicate:j,onUpdate:T}){const[D,U]=c.useState(""),[x,N]=c.useState({company:a.company||"",owner:a.owner||"",amount:String(a.amount||""),nextFollowUp:H(a.nextFollowUpAt),expectedClose:H(a.expectedCloseAt)});c.useEffect(()=>{N({company:a.company||"",owner:a.owner||"",amount:String(a.amount||""),nextFollowUp:H(a.nextFollowUpAt),expectedClose:H(a.expectedCloseAt)})},[a.id,a.company,a.owner,a.amount,a.nextFollowUpAt,a.expectedCloseAt]);const $=c.useMemo(()=>s.find(n=>n.id===a.stageId)||null,[s,a.stageId]),L=c.useMemo(()=>W(a.amount,a.probability),[a.amount,a.probability]),_=c.useMemo(()=>a.nextFollowUpAt?new Date(a.nextFollowUpAt).getTime()<Date.now():!1,[a.nextFollowUpAt]);function R(){const n=x.company.trim(),u=x.owner.trim()||"Ash",B=Number(x.amount||0);T({company:n,title:n,owner:u,amount:B,nextFollowUpAt:x.nextFollowUp?X(x.nextFollowUp):a.nextFollowUpAt,expectedCloseAt:x.expectedClose?X(x.expectedClose):a.expectedCloseAt})}function h(){const n=D.trim();n&&(g(n),U(""))}return e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"head",children:[e.jsxs("div",{className:"hLeft",children:[e.jsxs("div",{className:"hTitle",children:[e.jsx(Ue,{}),e.jsx("span",{children:"Deal inspector"})]}),e.jsxs("div",{className:"hSub",children:[e.jsx("span",{className:"badge",children:$?$.name:"Unknown stage"}),e.jsx("span",{className:`badge ${_?"bad":""}`,children:_?"Overdue":"On track"})]})]}),e.jsx("button",{type:"button",className:"close",onClick:l,"aria-label":"Close inspector",children:e.jsx(de,{})})]}),e.jsxs("div",{className:"hero",children:[e.jsxs("div",{className:"heroTop",children:[e.jsx(xe,{src:`https://picsum.photos/seed/${encodeURIComponent(a.imageSeed||a.company)}/96/96`,alt:`${a.company} logo`,size:46}),e.jsxs("div",{className:"heroMeta",children:[e.jsx("div",{className:"company",children:a.company}),e.jsxs("div",{className:"row",children:[e.jsxs("span",{className:"chip",children:[e.jsx(pe,{}),"₹",M(a.amount)]}),e.jsxs("span",{className:"chip",children:[e.jsx(ce,{}),"₹",M(L)]})]})]})]}),e.jsxs("div",{className:"probRow",children:[e.jsx("div",{className:"lbl",children:"Probability"}),e.jsxs("div",{className:"val",children:[C(a.probability),"%"]})]}),e.jsx("input",{className:"range",type:"range",min:"0",max:"100",value:C(a.probability),onChange:n=>m(n.target.value),"aria-label":"Probability"})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Move stage"}),e.jsx("div",{className:"stageGrid",children:s.map(n=>e.jsxs("button",{type:"button",className:`stageBtn ${n.id===a.stageId?"active":""}`,onClick:()=>d(n.id),title:`${n.name} - ${C(n.probability)}%`,children:[e.jsx("span",{className:"nm",children:n.name}),e.jsxs("span",{className:"pc",children:[C(n.probability),"%"]})]},n.id))})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Basics"}),e.jsxs("div",{className:"form",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Company"}),e.jsx("input",{value:x.company,onChange:n=>N(u=>({...u,company:n.target.value})),placeholder:"Company"})]}),e.jsxs("div",{className:"two",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Owner"}),e.jsx("input",{value:x.owner,onChange:n=>N(u=>({...u,owner:n.target.value})),placeholder:"Owner"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Amount"}),e.jsx("input",{value:x.amount,onChange:n=>N(u=>({...u,amount:n.target.value.replace(/[^\d]/g,"")})),placeholder:"150000",inputMode:"numeric"})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Next follow-up"}),e.jsx("input",{type:"date",value:x.nextFollowUp,onChange:n=>N(u=>({...u,nextFollowUp:n.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Expected close"}),e.jsx("input",{type:"date",value:x.expectedClose,onChange:n=>N(u=>({...u,expectedClose:n.target.value}))})]})]}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{type:"button",className:"btn",onClick:R,children:"Save"}),e.jsxs("button",{type:"button",className:"btn ghost",onClick:j,children:[e.jsx(Oe,{}),"Duplicate"]}),e.jsxs("button",{type:"button",className:"btn danger",onClick:f,children:[e.jsx($e,{}),"Delete"]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Notes"}),e.jsxs("div",{className:"noteBox",children:[e.jsx("textarea",{value:D,onChange:n=>U(n.target.value),placeholder:"Write a note and press Add",rows:3}),e.jsx("button",{type:"button",className:"btn",onClick:h,children:"Add note"})]}),e.jsxs("div",{className:"notes",children:[(a.notes||[]).slice(0,6).map(n=>e.jsxs("div",{className:"note",children:[e.jsx("div",{className:"at",children:new Date(n.at).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})}),e.jsx("div",{className:"tx",children:n.text})]},n.id)),!a.notes||a.notes.length===0?e.jsx("div",{className:"emptyMini",children:"No notes yet."}):null]})]})]})}export{Ve as default};
