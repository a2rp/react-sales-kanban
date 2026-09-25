import{d as r,u as g,q as h,r as t,j as e,s as m,t as f,p as v,k as u,l as b,F as j,h as N,v as y,b as w}from"./index-CzSBm97R.js";const a={Wrapper:r.div`
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,TopBar:r.div`
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
    `,Layout:r.div`
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,Left:r.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
    `,Hero:r.div`
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
    `,InfoGrid:r.div`
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
    `,Right:r.div`
        display: flex;
        flex-direction: column;
    `,NotesCard:r.div`
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
    `},F=()=>{const d=g(),{id:n}=h(),[l,c]=t.useState([{id:1,text:"Initial discovery call completed.",date:"Feb 03, 2026"}]),[o,i]=t.useState(""),x=()=>{if(!o.trim())return;const s=new Date().toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"});c(p=>[{id:Date.now(),text:o,date:s},...p]),i("")};return e.jsxs(a.Wrapper,{children:[e.jsxs(a.TopBar,{children:[e.jsxs("button",{className:"back",onClick:()=>d(-1),children:[e.jsx(m,{})," Back"]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btn ghost",children:[e.jsx(f,{})," Edit"]}),e.jsxs("button",{className:"btn danger",children:[e.jsx(v,{})," Delete"]})]})]}),e.jsxs(a.Layout,{children:[e.jsxs(a.Left,{children:[e.jsxs(a.Hero,{children:[e.jsx("img",{src:`https://picsum.photos/seed/${n}/1200/300`,alt:"cover"}),e.jsx("div",{className:"overlay"}),e.jsxs("div",{className:"content",children:[e.jsx("h2",{children:"Nova Retail"}),e.jsx("div",{className:"amount",children:"₹6,58,166"})]})]}),e.jsxs(a.InfoGrid,{children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsx(u,{}),e.jsx("span",{children:"Owner"})]}),e.jsx("strong",{children:"Ash"})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsx(b,{}),e.jsx("span",{children:"Next follow up"})]}),e.jsx("strong",{children:"Feb 20, 2026"})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsx(j,{}),e.jsx("span",{children:"Stage"})]}),e.jsx("strong",{children:"Qualified"})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"row",children:[e.jsx(N,{}),e.jsx("span",{children:"Weighted revenue"})]}),e.jsx("strong",{children:"₹1,64,542"})]})]})]}),e.jsx(a.Right,{children:e.jsxs(a.NotesCard,{children:[e.jsx("div",{className:"header",children:e.jsxs("h3",{children:[e.jsx(y,{})," Activity & Notes"]})}),e.jsxs("div",{className:"addBox",children:[e.jsx("textarea",{placeholder:"Write a note and press Add",value:o,onChange:s=>i(s.target.value)}),e.jsxs("button",{className:"btn",onClick:x,children:[e.jsx(w,{})," Add note"]})]}),e.jsx("div",{className:"notes",children:l.map(s=>e.jsxs("div",{className:"note",children:[e.jsx("div",{className:"date",children:s.date}),e.jsx("div",{className:"text",children:s.text})]},s.id))})]})})]})]})};export{F as default};
