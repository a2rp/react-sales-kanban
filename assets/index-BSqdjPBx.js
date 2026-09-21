import{d as m,m as z,r as n,j as e,w as R,x as A,y as F,g as L,l as C,h as T,z as M,A as W,F as w,B as O,C as y,D as P}from"./index-ZSPj-1pO.js";const j=z`
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
`,d={Wrapper:m.div`
        width: 100%;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        @media (max-width: 900px) {
            padding: 14px;
        }
    `,Hero:m.div`
        position: relative;
        border-radius: 18px;
        overflow: hidden;
        border: 1px solid var(--color-border);
        background: #fff;
        animation: ${j} 220ms ease both;

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
    `,Kpis:m.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        animation: ${j} 240ms ease both;

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
    `,Grid:m.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        align-items: start;
        animation: ${j} 260ms ease both;

        @media (max-width: 1100px) {
            grid-template-columns: 1fr;
        }

        .span2 {
            grid-column: span 2;

            @media (max-width: 1100px) {
                grid-column: auto;
            }
        }
    `,Panel:m.section`
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
    `},D=()=>{const[p,N]=n.useState("30d"),[x,k]=n.useState("all"),b=n.useMemo(()=>[{id:"d-1001",company:"Nova Retail",owner:"Ash",stage:"Qualified",amount:658166,probability:25,createdAt:"2026-01-18",expectedClose:"2026-02-20",delta:12},{id:"d-1002",company:"Orion Foods",owner:"Ash",stage:"Proposal",amount:42e4,probability:45,createdAt:"2026-01-28",expectedClose:"2026-02-28",delta:6},{id:"d-1003",company:"Vega Logistics",owner:"Neha",stage:"Negotiation",amount:98e4,probability:70,createdAt:"2026-01-10",expectedClose:"2026-02-14",delta:-4},{id:"d-1004",company:"Atlas Tools",owner:"Niraj",stage:"New",amount:215e3,probability:10,createdAt:"2026-02-05",expectedClose:"2026-03-06",delta:2},{id:"d-1005",company:"Pulse Studio",owner:"Ash",stage:"Won",amount:31e4,probability:100,createdAt:"2025-12-22",expectedClose:"2026-01-12",delta:18},{id:"d-1006",company:"Stonepeak Realty",owner:"Neha",stage:"Lost",amount:54e4,probability:0,createdAt:"2026-01-06",expectedClose:"2026-01-30",delta:-9}],[]),u=n.useMemo(()=>[{key:"New",prob:10},{key:"Qualified",prob:25},{key:"Proposal",prob:45},{key:"Negotiation",prob:70},{key:"Won",prob:100},{key:"Lost",prob:0}],[]),o=n.useMemo(()=>{const a=x==="all"?b:b.filter(t=>t.owner===x);return p==="7d"?a.slice(0,3):p==="90d"?a:a.slice(0,5)},[b,x,p]),g=n.useMemo(()=>{const a=o.reduce((i,h)=>i+h.amount,0),t=o.reduce((i,h)=>i+h.amount*(h.probability/100),0),c=o.filter(i=>i.stage!=="Won"&&i.stage!=="Lost"),s=o.filter(i=>i.stage==="Won").length,r=o.filter(i=>i.stage==="Lost").length,v=s+r===0?0:Math.round(s/(s+r)*100);return{total:a,weighted:t,openCount:c.length,winRate:v}},[o]),f=n.useMemo(()=>{const a=new Map;u.forEach(s=>a.set(s.key,{count:0,amount:0,prob:s.prob})),o.forEach(s=>{a.has(s.stage)||a.set(s.stage,{count:0,amount:0,prob:s.probability});const r=a.get(s.stage);r.count+=1,r.amount+=s.amount,a.set(s.stage,r)});const t=u.map(s=>{const r=a.get(s.key)||{count:0,amount:0,prob:s.prob},v=r.amount*(r.prob/100);return{stage:s.key,count:r.count,amount:r.amount,prob:r.prob,weighted:v}}),c=Math.max(1,...t.map(s=>s.amount));return{rows:t,max:c}},[o,u]),l=a=>{try{return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(a)}catch{return`₹${Math.round(a)}`}},S=()=>{const a={range:p,owner:x,generatedAt:new Date().toISOString(),deals:o},t=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),c=URL.createObjectURL(t),s=document.createElement("a");s.href=c,s.download="reports-export.json",s.click(),URL.revokeObjectURL(c)};return e.jsxs(d.Wrapper,{children:[e.jsxs(d.Hero,{children:[e.jsxs("div",{className:"bg",children:[e.jsx("img",{src:"https://picsum.photos/seed/reports-ui/1600/520",alt:"reports cover"}),e.jsx("div",{className:"overlay"})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"top",children:[e.jsxs("div",{className:"title",children:[e.jsx(R,{}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"h1",children:"Reports"}),e.jsx("div",{className:"sub",children:"Pipeline health, weighted forecast, stage distribution, and activity signals."})]})]}),e.jsxs("div",{className:"actions",children:[e.jsxs("button",{className:"btn ghost",type:"button",children:[e.jsx(A,{}),"Refresh"]}),e.jsxs("button",{className:"btn",type:"button",onClick:S,children:[e.jsx(F,{}),"Export"]})]})]}),e.jsxs("div",{className:"filters",children:[e.jsxs("div",{className:"chip",children:[e.jsx(L,{}),e.jsx("span",{children:"Filters"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Range"}),e.jsxs("select",{value:p,onChange:a=>N(a.target.value),children:[e.jsx("option",{value:"7d",children:"Last 7 days"}),e.jsx("option",{value:"30d",children:"Last 30 days"}),e.jsx("option",{value:"90d",children:"Last 90 days"})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Owner"}),e.jsxs("select",{value:x,onChange:a=>k(a.target.value),children:[e.jsx("option",{value:"all",children:"All owners"}),e.jsx("option",{value:"Ash",children:"Ash"}),e.jsx("option",{value:"Neha",children:"Neha"}),e.jsx("option",{value:"Niraj",children:"Niraj"})]})]}),e.jsxs("div",{className:"hint",children:[e.jsx(C,{}),e.jsx("span",{children:"Demo data, frontend-only."})]})]})]})]}),e.jsxs(d.Kpis,{children:[e.jsxs("div",{className:"k",children:[e.jsxs("div",{className:"kTop",children:[e.jsxs("div",{className:"kLabel",children:[e.jsx(T,{})," Total pipeline"]}),e.jsx("div",{className:"kTag",children:"Gross"})]}),e.jsx("div",{className:"kVal",children:l(g.total)}),e.jsx("div",{className:"kSub",children:"Sum of deal amounts in current filter."})]}),e.jsxs("div",{className:"k",children:[e.jsxs("div",{className:"kTop",children:[e.jsxs("div",{className:"kLabel",children:[e.jsx(M,{})," Weighted forecast"]}),e.jsx("div",{className:"kTag",children:"Probability"})]}),e.jsx("div",{className:"kVal",children:l(g.weighted)}),e.jsx("div",{className:"kSub",children:"Amount multiplied by stage probability."})]}),e.jsxs("div",{className:"k",children:[e.jsxs("div",{className:"kTop",children:[e.jsxs("div",{className:"kLabel",children:[e.jsx(W,{})," Open deals"]}),e.jsx("div",{className:"kTag",children:"Active"})]}),e.jsx("div",{className:"kVal",children:g.openCount}),e.jsx("div",{className:"kSub",children:"Excludes Won and Lost."})]}),e.jsxs("div",{className:"k",children:[e.jsxs("div",{className:"kTop",children:[e.jsxs("div",{className:"kLabel",children:[e.jsx(w,{})," Win rate"]}),e.jsx("div",{className:"kTag",children:"Closed"})]}),e.jsxs("div",{className:"kVal",children:[g.winRate,"%"]}),e.jsx("div",{className:"kSub",children:"Won divided by closed deals."})]})]}),e.jsxs(d.Grid,{children:[e.jsxs(d.Panel,{children:[e.jsxs("div",{className:"pHead",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(O,{}),"Stage distribution"]}),e.jsx("div",{className:"pSub",children:"Hover bars to see totals."})]}),e.jsx("div",{className:"bars",children:f.rows.map(a=>{const t=Math.round(a.amount/f.max*100);return e.jsxs("div",{className:"barRow",children:[e.jsxs("div",{className:"label",children:[e.jsx("span",{className:"nm",children:a.stage}),e.jsxs("span",{className:"mini",children:[a.count," deals"]})]}),e.jsx("div",{className:"bar",children:e.jsx("div",{className:"fill",style:{width:`${t}%`},title:`${a.stage} - ${l(a.amount)}`})}),e.jsx("div",{className:"val",children:l(a.amount)})]},a.stage)})})]}),e.jsxs(d.Panel,{children:[e.jsxs("div",{className:"pHead",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(w,{}),"Forecast table"]}),e.jsx("div",{className:"pSub",children:"Stage probability applied to amounts."})]}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"tr th",children:[e.jsx("div",{children:"Stage"}),e.jsx("div",{className:"r",children:"Probability"}),e.jsx("div",{className:"r",children:"Amount"}),e.jsx("div",{className:"r",children:"Weighted"})]}),f.rows.map(a=>e.jsxs("div",{className:"tr",children:[e.jsx("div",{className:"stage",children:a.stage}),e.jsxs("div",{className:"r",children:[a.prob,"%"]}),e.jsx("div",{className:"r",children:l(a.amount)}),e.jsx("div",{className:"r strong",children:l(a.weighted)})]},a.stage))]})]}),e.jsxs(d.Panel,{className:"span2",children:[e.jsxs("div",{className:"pHead",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(y,{}),"Recent movement"]}),e.jsx("div",{className:"pSub",children:"Simple velocity signal for the selected range."})]}),e.jsx("div",{className:"list",children:o.map(a=>{const t=a.delta>=0;return e.jsxs("button",{type:"button",className:"row",children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:`https://picsum.photos/seed/${a.id}/120/120`,alt:""})}),e.jsxs("div",{className:"meta",children:[e.jsx("div",{className:"nm",children:a.company}),e.jsxs("div",{className:"sub",children:[e.jsx("span",{className:"pill",children:a.stage}),e.jsx("span",{className:"dot"}),e.jsx("span",{className:"muted",children:a.owner}),e.jsx("span",{className:"dot"}),e.jsxs("span",{className:"muted",children:["Close ",a.expectedClose]})]})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("div",{className:"amt",children:l(a.amount)}),e.jsxs("div",{className:`delta ${t?"up":"down"}`,children:[t?e.jsx(y,{}):e.jsx(P,{}),e.jsxs("span",{children:[Math.abs(a.delta),"%"]})]})]})]},a.id)})})]})]})]})};export{D as default};
