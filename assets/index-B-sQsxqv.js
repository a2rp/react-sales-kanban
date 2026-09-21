import{d as N,m as ce,r as c,j as e,F as de,a as Fe,b as ae,c as pe,e as ze,f as oe,g as re,h as xe,i as Me,k as se,l as Oe,n as Ue,o as $e,p as Le}from"./index-DDRmxK_r.js";const z=ce`
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
`,Re=ce`
    0% { opacity: 0.45; }
    50% { opacity: 0.85; }
    100% { opacity: 0.45; }
`,S={Wrapper:N.div`
        width: 100%;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        @media (max-width: 900px) {
            padding: 14px;
        }
    `,TopBar:N.div`
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
    `,Layout:N.div`
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
    `,LeftRail:N.aside`
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
    `,Board:N.main`
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
    `,Column:N.section`
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
    `,InlineAdd:N.div`
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
    `,Card:N.button`
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
    `,Inspector:N.aside`
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
    `,ImgWrap:N.div`
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
            animation: ${Re} 1.1s ease infinite;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 160ms ease;
        }
    `,Toast:N.div`
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
    `},ne="rsk_stages",ie="rsk_deals",le="rsk_views";function b(a="id"){return`${a}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`}function M(a){return Number(a||0).toLocaleString("en-IN",{maximumFractionDigits:0})}function k(a){const i=Number(a);return Number.isNaN(i)?0:Math.max(0,Math.min(100,i))}function _e(a,i){const n=new Date(a).getTime(),m=new Date(i).getTime()-n;return Math.floor(m/(1e3*60*60*24))}function V(a){if(!a)return"";const i=new Date(a),n=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),m=String(i.getDate()).padStart(2,"0");return`${n}-${d}-${m}`}function X(a){return a?new Date(`${a}T00:00:00`).toISOString():""}function Be(){return[{id:"st_new",name:"New",probability:10,order:1},{id:"st_qual",name:"Qualified",probability:25,order:2},{id:"st_prop",name:"Proposal",probability:45,order:3},{id:"st_neg",name:"Negotiation",probability:70,order:4},{id:"st_won",name:"Won",probability:100,order:5},{id:"st_lost",name:"Lost",probability:0,order:6}]}function Ee(){const a=Date.now(),i=n=>{const d=new Date(a-Math.floor(Math.random()*9+1)*864e5).toISOString(),m=new Date(a+Math.floor(Math.random()*7)*864e5).toISOString(),h=Math.floor(Math.random()*9e5+5e4),u=n.seed||b("pic"),D=n.stageId||"st_new",A=n.probability??10;return{id:b("deal"),company:n.company,title:n.title||n.company,owner:n.owner||"You",tags:n.tags||[],amount:h,currency:"INR",stageId:D,probability:A,createdAt:d,updatedAt:d,expectedCloseAt:new Date(a+Math.floor(Math.random()*30+5)*864e5).toISOString(),nextFollowUpAt:m,lastActivityAt:d,notes:[{id:b("note"),at:d,text:"Initial discovery done. Waiting for next step."}],stageHistory:[{id:b("hist"),at:d,from:"",to:D}],imageSeed:u}};return[i({company:"Nova Retail",owner:"Ash",tags:["High value","Fast track"],stageId:"st_qual",probability:25,seed:"nova-retail"}),i({company:"Orbit Logistics",owner:"Ash",tags:["Renewal"],stageId:"st_prop",probability:45,seed:"orbit-logistics"}),i({company:"Beacon Finance",owner:"Ash",tags:["Enterprise"],stageId:"st_neg",probability:70,seed:"beacon-finance"}),i({company:"Lumen Health",owner:"Ash",tags:["Inbound"],stageId:"st_new",probability:10,seed:"lumen-health"}),i({company:"Zenith Studios",owner:"Ash",tags:["Upsell"],stageId:"st_qual",probability:25,seed:"zenith-studios"})]}function Q(a,i){try{const n=localStorage.getItem(a);return n?JSON.parse(n)??i:i}catch{return i}}function G(a,i){try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function H(a,i){const n=Number(a||0),d=k(i);return Math.round(n*d/100)}function Ye(a,i){const n=i.filter(h=>h.stageId===a.id),d=n.reduce((h,u)=>h+Number(u.amount||0),0),m=n.reduce((h,u)=>h+H(u.amount,u.probability),0);return{count:n.length,total:d,weighted:m}}function me({src:a,alt:i,size:n=36}){const[d,m]=c.useState(!1);return e.jsxs(S.ImgWrap,{$size:n,children:[d?null:e.jsx("span",{className:"sk","aria-hidden":"true"}),e.jsx("img",{src:a,alt:i,onLoad:()=>m(!0),style:{opacity:d?1:0}})]})}function He(){const[a,i]=c.useState(()=>{const t=Q(ne,null);return Array.isArray(t)&&t.length?t:Be()}),[n,d]=c.useState(()=>{const t=Q(ie,null);return Array.isArray(t)&&t.length?t:Ee()}),[m,h]=c.useState(""),[u,D]=c.useState(!1),[A,O]=c.useState(""),[C,g]=c.useState(""),[y,F]=c.useState(""),[R,U]=c.useState(""),[W,L]=c.useState(""),[s,x]=c.useState({company:"",amount:"",owner:"Ash",tag:"",nextFollowUp:""}),[_,Z]=c.useState({open:!1,text:""}),B=c.useRef(null);c.useEffect(()=>{G(ne,a)},[a]),c.useEffect(()=>{G(ie,n)},[n]);const K=c.useMemo(()=>[...a].sort((t,r)=>(t.order||0)-(r.order||0)),[a]),ge=c.useMemo(()=>{const t=new Set;return n.forEach(r=>(r.tags||[]).forEach(l=>t.add(l))),Array.from(t).sort((r,l)=>r.localeCompare(l))},[n]),$=c.useMemo(()=>{const t=m.trim().toLowerCase(),r=A===""?0:Number(A||0),l=new Date;return n.filter(o=>{const p=`${o.company} ${o.title} ${o.owner}`.toLowerCase(),w=t?p.includes(t):!0,I=Number(o.amount||0)>=r,T=C?(o.tags||[]).includes(C):!0,j=o.nextFollowUpAt?new Date(o.nextFollowUpAt):null,P=j?j.getTime()<l.getTime():!1;return w&&I&&T&&(u?P:!0)})},[n,m,A,C,u]),f=c.useMemo(()=>n.find(t=>t.id===y)||null,[n,y]),q=c.useMemo(()=>{const t=$.reduce((l,o)=>l+Number(o.amount||0),0),r=$.reduce((l,o)=>l+H(o.amount,o.probability),0);return{total:t,weighted:r,count:$.length}},[$]);function v(t){Z({open:!0,text:t}),window.clearTimeout(v.t),v.t=window.setTimeout(()=>Z({open:!1,text:""}),1800)}function ee(t){return a.find(r=>r.id===t)||null}function E(t,r){d(l=>l.map(o=>{if(o.id!==t)return o;const p=new Date().toISOString();return{...o,...r,updatedAt:p}}))}function ue(t){d(r=>r.filter(l=>l.id!==t)),y===t&&F(""),v("Deal deleted")}function he(t){const r=n.find(o=>o.id===t);if(!r)return;const l={...r,id:b("deal"),company:`${r.company} Copy`,title:`${r.title} Copy`,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),lastActivityAt:new Date().toISOString(),stageHistory:[{id:b("hist"),at:new Date().toISOString(),from:"",to:r.stageId}],notes:(r.notes||[]).map(o=>({...o,id:b("note")})),imageSeed:`${r.imageSeed}-copy`};d(o=>[l,...o]),v("Deal duplicated")}function J(t,r){const l=n.find(j=>j.id===t);if(!l)return;const o=l.stageId;if(o===r)return;const p=ee(r),w=k(p?p.probability:l.probability),I=new Date().toISOString(),T=[...l.stageHistory||[],{id:b("hist"),at:I,from:o,to:r}];B.current={dealId:t,fromStageId:o,toStageId:r},E(t,{stageId:r,probability:w,stageHistory:T,lastActivityAt:I}),v("Moved")}function be(){const t=B.current;t&&(B.current=null,J(t.dealId,t.fromStageId),v("Undo"))}function fe(t,r){U(r);try{t.dataTransfer.setData("text/plain",r),t.dataTransfer.effectAllowed="move"}catch{}}function ve(){U("")}function we(t,r){t.preventDefault();const l=t.dataTransfer.getData("text/plain");l&&(J(l,r),U(""))}function ye(t){t.preventDefault()}function je(t){L(t),x({company:"",amount:"",owner:"Ash",tag:"",nextFollowUp:""})}function Ne(){L("")}function Se(t){const r=s.company.trim(),l=Number(s.amount||0);if(!r||!l){v("Add company and amount");return}const o=ee(t),p=o?k(o.probability):0,w=new Date().toISOString(),I=s.nextFollowUp?X(s.nextFollowUp):new Date(Date.now()+2*864e5).toISOString(),T=s.tag.trim(),j=T?[T]:[],P={id:b("deal"),company:r,title:r,owner:s.owner.trim()||"Ash",tags:j,amount:l,currency:"INR",stageId:t,probability:p,createdAt:w,updatedAt:w,expectedCloseAt:new Date(Date.now()+21*864e5).toISOString(),nextFollowUpAt:I,lastActivityAt:w,notes:[{id:b("note"),at:w,text:"Deal created on the board."}],stageHistory:[{id:b("hist"),at:w,from:"",to:t}],imageSeed:r.toLowerCase().replace(/\s+/g,"-")};d(te=>[P,...te]),F(P.id),L(""),v("Deal added")}function ke(t){f&&E(f.id,{probability:k(t)})}function Ae(t){if(!f)return;const r=t.trim();if(!r)return;const l=new Date().toISOString(),o=[{id:b("note"),at:l,text:r},...f.notes||[]];E(f.id,{notes:o,lastActivityAt:l}),v("Note added")}const Ce=c.useMemo(()=>{const t=Date.now();return n.filter(r=>r.nextFollowUpAt&&new Date(r.nextFollowUpAt).getTime()<t).length},[n]),Y=c.useMemo(()=>{const t=Q(le,[]);return Array.isArray(t)?t:[]},[]);function De(){const t=`View ${String(Y.length+1).padStart(2,"0")}`,r=[{id:b("view"),name:t,query:m,onlyOverdue:u,minAmount:A,activeTag:C},...Y];G(le,r),v("View saved")}function Ie(t){h(t.query||""),D(!!t.onlyOverdue),O(t.minAmount||""),g(t.activeTag||""),v("View applied")}function Te(){h(""),D(!1),O(""),g(""),v("Cleared")}return e.jsxs(S.Wrapper,{children:[e.jsxs(S.TopBar,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"titleRow",children:[e.jsxs("div",{className:"title",children:[e.jsx(de,{}),e.jsx("span",{children:"Pipeline"})]}),e.jsxs("div",{className:"meta",children:[e.jsxs("span",{className:"pill",children:["Deals ",e.jsx("b",{children:q.count})]}),e.jsxs("span",{className:"pill",children:["Total ",e.jsxs("b",{children:["₹",M(q.total)]})]}),e.jsxs("span",{className:"pill",children:["Forecast ",e.jsxs("b",{children:["₹",M(q.weighted)]})]})]})]}),e.jsxs("div",{className:"searchRow",children:[e.jsxs("div",{className:"search",children:[e.jsx(Fe,{}),e.jsx("input",{value:m,onChange:t=>h(t.target.value),placeholder:"Search deals, companies, owners","aria-label":"Search"})]}),e.jsxs("button",{type:"button",className:"btn ghost",onClick:De,title:"Save view",children:[e.jsx(ae,{}),e.jsx("span",{children:"Save view"})]}),e.jsxs("button",{type:"button",className:"btn ghost",onClick:Te,title:"Clear filters",children:[e.jsx(pe,{}),e.jsx("span",{children:"Clear"})]}),B.current?e.jsxs("button",{type:"button",className:"btn",onClick:be,title:"Undo last move",children:[e.jsx(ze,{}),e.jsx("span",{children:"Undo"})]}):null]})]}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"kpi",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx(oe,{}),e.jsx("span",{children:"Overdue"})]}),e.jsx("div",{className:"kVal",children:Ce})]}),e.jsxs("div",{className:"kpi",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx(re,{}),e.jsx("span",{children:"Filters"})]}),e.jsx("div",{className:"kVal",children:(u?1:0)+(C?1:0)+(A?1:0)})]})]})]}),e.jsxs(S.Layout,{children:[e.jsxs(S.LeftRail,{children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(re,{}),e.jsx("span",{children:"Quick filters"})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Min amount"}),e.jsxs("div",{className:"inRow",children:[e.jsx(xe,{className:"ic"}),e.jsx("input",{value:A,onChange:t=>O(t.target.value.replace(/[^\d]/g,"")),placeholder:"50000",inputMode:"numeric"})]})]}),e.jsxs("label",{className:"field",children:[e.jsx("span",{className:"lbl",children:"Tag"}),e.jsxs("div",{className:"inRow",children:[e.jsx(Me,{className:"ic"}),e.jsxs("select",{value:C,onChange:t=>g(t.target.value),children:[e.jsx("option",{value:"",children:"All tags"}),ge.map(t=>e.jsx("option",{value:t,children:t},t))]})]})]}),e.jsxs("label",{className:"check",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>D(t.target.checked)}),e.jsx("span",{children:"Only overdue follow-ups"})]}),e.jsx("div",{className:"hint",children:'Tip: use "Save view" to keep a preset for clients or demos.'})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(se,{}),e.jsx("span",{children:"Saved views"})]}),e.jsx("div",{className:"views",children:Y.length?Y.slice(0,6).map(t=>e.jsxs("button",{type:"button",className:"viewBtn",onClick:()=>Ie(t),children:[e.jsx("span",{className:"nm",children:t.name}),e.jsxs("span",{className:"sub",children:[t.onlyOverdue?"Overdue":"All"," ",t.activeTag?`- ${t.activeTag}`:""]})]},t.id)):e.jsx("div",{className:"empty",children:"No views yet. Save one from the top bar."})})]})]}),e.jsx(S.Board,{children:e.jsx("div",{className:"columns",children:K.map(t=>{const r=Ye(t,$),l=$.filter(o=>o.stageId===t.id);return e.jsxs(S.Column,{onDragOver:ye,onDrop:o=>we(o,t.id),className:R?"dragMode":"",children:[e.jsxs("div",{className:"colHead",children:[e.jsxs("div",{className:"hLeft",children:[e.jsx("div",{className:"name",children:t.name}),e.jsxs("div",{className:"sub",children:[e.jsxs("span",{children:[r.count," deals"]}),e.jsx("span",{className:"dot"}),e.jsxs("span",{children:["₹",M(r.total)]})]})]}),e.jsxs("div",{className:"hRight",children:[e.jsxs("div",{className:"prob",title:"Stage probability",children:[k(t.probability),"%"]}),e.jsx("button",{type:"button",className:"icon",onClick:()=>je(t.id),title:"Add deal",children:e.jsx(ae,{})})]})]}),W===t.id?e.jsxs(S.InlineAdd,{children:[e.jsx("div",{className:"row",children:e.jsxs("label",{children:[e.jsx("span",{children:"Company"}),e.jsx("input",{value:s.company,onChange:o=>x(p=>({...p,company:o.target.value})),placeholder:"Company name"})]})}),e.jsxs("div",{className:"row two",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Amount"}),e.jsx("input",{value:s.amount,onChange:o=>x(p=>({...p,amount:o.target.value.replace(/[^\d]/g,"")})),placeholder:"150000",inputMode:"numeric"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Tag"}),e.jsx("input",{value:s.tag,onChange:o=>x(p=>({...p,tag:o.target.value})),placeholder:"High value"})]})]}),e.jsxs("div",{className:"row two",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Owner"}),e.jsx("input",{value:s.owner,onChange:o=>x(p=>({...p,owner:o.target.value})),placeholder:"Owner"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Next follow-up"}),e.jsx("input",{type:"date",value:s.nextFollowUp,onChange:o=>x(p=>({...p,nextFollowUp:o.target.value}))})]})]}),e.jsxs("div",{className:"actions",children:[e.jsx("button",{type:"button",className:"btn",onClick:()=>Se(t.id),children:"Add"}),e.jsx("button",{type:"button",className:"btn ghost",onClick:Ne,children:"Cancel"})]})]}):null,e.jsx("div",{className:"cards",children:l.length?l.map(o=>{const p=o.nextFollowUpAt?new Date(o.nextFollowUpAt):null,w=p?p.getTime()<Date.now():!1,I=_e(o.createdAt,new Date().toISOString()),T=H(o.amount,o.probability);return e.jsxs(S.Card,{draggable:!0,onDragStart:j=>fe(j,o.id),onDragEnd:ve,onClick:()=>F(o.id),className:[y===o.id?"active":"",R===o.id?"dragging":"",w?"overdue":""].join(" "),children:[e.jsxs("div",{className:"top",children:[e.jsx(me,{src:`https://picsum.photos/seed/${encodeURIComponent(o.imageSeed||o.company)}/72/72`,alt:`${o.company} logo`,size:38}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"company",children:o.company}),e.jsxs("div",{className:"line",children:[e.jsxs("span",{className:"owner",children:[e.jsx(se,{}),o.owner]}),e.jsxs("span",{className:"age",children:[e.jsx(oe,{}),I,"d"]})]})]}),e.jsxs("div",{className:"amt",children:["₹",M(o.amount),e.jsxs("span",{className:"w",children:["₹",M(T)]})]})]}),e.jsxs("div",{className:"bottom",children:[e.jsxs("div",{className:"tags",children:[(o.tags||[]).slice(0,2).map(j=>e.jsx("span",{className:"tag",children:j},j)),(o.tags||[]).length>2?e.jsxs("span",{className:"tag more",children:["+",(o.tags||[]).length-2]}):null]}),e.jsxs("div",{className:`follow ${w?"bad":""}`,children:[e.jsx(Oe,{}),e.jsx("span",{children:p?p.toLocaleDateString("en-US",{month:"short",day:"2-digit"}):"No follow-up"})]}),e.jsxs("div",{className:"probChip",children:[k(o.probability),"%"]})]})]},o.id)}):e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"eTitle",children:"No deals"}),e.jsx("div",{className:"eSub",children:"Drop here or add a new deal."})]})})]},t.id)})})}),e.jsx(S.Inspector,{className:f?"open":"",children:f?e.jsx(Pe,{deal:f,stages:K,onClose:()=>F(""),onMove:t=>J(f.id,t),onSetProb:ke,onAddNote:Ae,onDelete:()=>ue(f.id),onDuplicate:()=>he(f.id),onUpdate:t=>E(f.id,t)}):e.jsxs("div",{className:"emptyState",children:[e.jsx("div",{className:"t",children:"Select a deal"}),e.jsx("div",{className:"s",children:"Click any card to open details here."})]})})]}),e.jsx(S.Toast,{className:_.open?"open":"",children:_.text})]})}function Pe({deal:a,stages:i,onClose:n,onMove:d,onSetProb:m,onAddNote:h,onDelete:u,onDuplicate:D,onUpdate:A}){const[O,C]=c.useState(""),[g,y]=c.useState({company:a.company||"",owner:a.owner||"",amount:String(a.amount||""),nextFollowUp:V(a.nextFollowUpAt),expectedClose:V(a.expectedCloseAt)});c.useEffect(()=>{y({company:a.company||"",owner:a.owner||"",amount:String(a.amount||""),nextFollowUp:V(a.nextFollowUpAt),expectedClose:V(a.expectedCloseAt)})},[a.id]);const F=c.useMemo(()=>i.find(s=>s.id===a.stageId)||null,[i,a.stageId]),R=c.useMemo(()=>H(a.amount,a.probability),[a.amount,a.probability]),U=c.useMemo(()=>a.nextFollowUpAt?new Date(a.nextFollowUpAt).getTime()<Date.now():!1,[a.nextFollowUpAt]);function W(){const s=g.company.trim(),x=g.owner.trim()||"Ash",_=Number(g.amount||0);A({company:s,title:s,owner:x,amount:_,nextFollowUpAt:g.nextFollowUp?X(g.nextFollowUp):a.nextFollowUpAt,expectedCloseAt:g.expectedClose?X(g.expectedClose):a.expectedCloseAt})}function L(){const s=O.trim();s&&(h(s),C(""))}return e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"head",children:[e.jsxs("div",{className:"hLeft",children:[e.jsxs("div",{className:"hTitle",children:[e.jsx(Ue,{}),e.jsx("span",{children:"Deal inspector"})]}),e.jsxs("div",{className:"hSub",children:[e.jsx("span",{className:"badge",children:F?F.name:"Unknown stage"}),e.jsx("span",{className:`badge ${U?"bad":""}`,children:U?"Overdue":"On track"})]})]}),e.jsx("button",{type:"button",className:"close",onClick:n,"aria-label":"Close inspector",children:e.jsx(pe,{})})]}),e.jsxs("div",{className:"hero",children:[e.jsxs("div",{className:"heroTop",children:[e.jsx(me,{src:`https://picsum.photos/seed/${encodeURIComponent(a.imageSeed||a.company)}/96/96`,alt:`${a.company} logo`,size:46}),e.jsxs("div",{className:"heroMeta",children:[e.jsx("div",{className:"company",children:a.company}),e.jsxs("div",{className:"row",children:[e.jsxs("span",{className:"chip",children:[e.jsx(xe,{}),"₹",M(a.amount)]}),e.jsxs("span",{className:"chip",children:[e.jsx(de,{}),"₹",M(R)]})]})]})]}),e.jsxs("div",{className:"probRow",children:[e.jsx("div",{className:"lbl",children:"Probability"}),e.jsxs("div",{className:"val",children:[k(a.probability),"%"]})]}),e.jsx("input",{className:"range",type:"range",min:"0",max:"100",value:k(a.probability),onChange:s=>m(s.target.value),"aria-label":"Probability"})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Move stage"}),e.jsx("div",{className:"stageGrid",children:i.map(s=>e.jsxs("button",{type:"button",className:`stageBtn ${s.id===a.stageId?"active":""}`,onClick:()=>d(s.id),title:`${s.name} - ${k(s.probability)}%`,children:[e.jsx("span",{className:"nm",children:s.name}),e.jsxs("span",{className:"pc",children:[k(s.probability),"%"]})]},s.id))})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Basics"}),e.jsxs("div",{className:"form",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Company"}),e.jsx("input",{value:g.company,onChange:s=>y(x=>({...x,company:s.target.value})),placeholder:"Company"})]}),e.jsxs("div",{className:"two",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Owner"}),e.jsx("input",{value:g.owner,onChange:s=>y(x=>({...x,owner:s.target.value})),placeholder:"Owner"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Amount"}),e.jsx("input",{value:g.amount,onChange:s=>y(x=>({...x,amount:s.target.value.replace(/[^\d]/g,"")})),placeholder:"150000",inputMode:"numeric"})]})]}),e.jsxs("div",{className:"two",children:[e.jsxs("label",{children:[e.jsx("span",{children:"Next follow-up"}),e.jsx("input",{type:"date",value:g.nextFollowUp,onChange:s=>y(x=>({...x,nextFollowUp:s.target.value}))})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Expected close"}),e.jsx("input",{type:"date",value:g.expectedClose,onChange:s=>y(x=>({...x,expectedClose:s.target.value}))})]})]}),e.jsxs("div",{className:"btnRow",children:[e.jsx("button",{type:"button",className:"btn",onClick:W,children:"Save"}),e.jsxs("button",{type:"button",className:"btn ghost",onClick:D,children:[e.jsx($e,{}),"Duplicate"]}),e.jsxs("button",{type:"button",className:"btn danger",onClick:u,children:[e.jsx(Le,{}),"Delete"]})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"secTitle",children:"Notes"}),e.jsxs("div",{className:"noteBox",children:[e.jsx("textarea",{value:O,onChange:s=>C(s.target.value),placeholder:"Write a note and press Add",rows:3}),e.jsx("button",{type:"button",className:"btn",onClick:L,children:"Add note"})]}),e.jsxs("div",{className:"notes",children:[(a.notes||[]).slice(0,6).map(s=>e.jsxs("div",{className:"note",children:[e.jsx("div",{className:"at",children:new Date(s.at).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})}),e.jsx("div",{className:"tx",children:s.text})]},s.id)),!a.notes||a.notes.length===0?e.jsx("div",{className:"emptyMini",children:"No notes yet."}):null]})]})]})}export{He as default};
