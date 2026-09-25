import{d as s,m as l,M as c,j as e,L as d,N as a,s as p,w as r,E as o,O as t,P as x}from"./index-CzSBm97R.js";const m=l`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`,i={Wrapper:s.div`
        min-height: calc(100vh - 80px);
        padding: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-bg);

        @media (max-width: 900px) {
            padding: 14px;
        }
    `,Card:s.div`
        width: min(1100px, 100%);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 26px 70px rgba(15, 23, 42, 0.08);
        animation: ${m} 220ms ease both;

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
    `},h=()=>{const n=c();return e.jsx(i.Wrapper,{children:e.jsxs(i.Card,{children:[e.jsxs("div",{className:"top",children:[e.jsxs("div",{className:"badge",children:[e.jsx(d,{}),"Page not found"]}),e.jsxs("div",{className:"titleRow",children:[e.jsx("div",{className:"title",children:"404"}),e.jsx("div",{className:"subtitle",children:"That route does not exist in this demo."})]}),e.jsxs("div",{className:"path",children:[e.jsx("span",{className:"k",children:"Requested"}),e.jsx("span",{className:"v",children:n.pathname})]})]}),e.jsxs("div",{className:"hero",children:[e.jsx("img",{src:"https://picsum.photos/seed/kanban-404/1100/520",alt:"not found cover",loading:"lazy"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"heroText",children:[e.jsx("div",{className:"h",children:"Lost in the pipeline"}),e.jsx("div",{className:"p",children:"Jump back to a real page and keep deals moving."})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs(a,{className:"btn",to:"/pipeline",children:[e.jsx(p,{}),"Back to pipeline"]}),e.jsxs(a,{className:"btn ghost",to:"/reports",children:[e.jsx(r,{}),"Reports"]}),e.jsxs(a,{className:"btn ghost",to:"/settings",children:[e.jsx(o,{}),"Settings"]})]}),e.jsxs("div",{className:"quick",children:[e.jsxs("div",{className:"qTitle",children:[e.jsx(t,{}),"Quick links"]}),e.jsxs("div",{className:"qGrid",children:[e.jsxs(a,{className:"qItem",to:"/pipeline",children:[e.jsx("span",{className:"ic",children:e.jsx(t,{})}),e.jsxs("span",{className:"txt",children:[e.jsx("span",{className:"t",children:"Pipeline"}),e.jsx("span",{className:"d",children:"Board view for moving deals"})]})]}),e.jsxs(a,{className:"qItem",to:"/reports",children:[e.jsx("span",{className:"ic",children:e.jsx(r,{})}),e.jsxs("span",{className:"txt",children:[e.jsx("span",{className:"t",children:"Reports"}),e.jsx("span",{className:"d",children:"Forecast and performance metrics"})]})]}),e.jsxs(a,{className:"qItem",to:"/settings",children:[e.jsx("span",{className:"ic",children:e.jsx(o,{})}),e.jsxs("span",{className:"txt",children:[e.jsx("span",{className:"t",children:"Settings"}),e.jsx("span",{className:"d",children:"Stages, owners, tags, data tools"})]})]})]})]}),e.jsx("div",{className:"foot",children:e.jsxs(a,{className:"mini",to:"/pipeline",children:[e.jsx(x,{}),"Go home"]})})]})})};export{h as default};
