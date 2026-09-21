import{d as f,m as ee,r as l,j as e,E as ae,G as E,H,i as U,I as P,b as O,F as se,t as te,p as T,J as re,c as N,y as oe,K as ie,o as ne,L as le}from"./index-ZSPj-1pO.js";const D=ee`
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
`,c={Wrapper:f.div`
        width: 100%;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        @media (max-width: 900px) {
            padding: 14px;
        }
    `,Hero:f.div`
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 14px;
        align-items: stretch;
        animation: ${D} 220ms ease both;

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
    `,Content:f.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        animation: ${D} 240ms ease both;
    `,Panel:f.section`
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
    `,Toast:f.div`
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
    `,ConfirmBackdrop:f.div`
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
    `,ConfirmModal:f.div`
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
    `},xe=()=>{const[d,x]=l.useState("pipeline"),[b,n]=l.useState([{id:"s-new",name:"New",prob:10},{id:"s-qualified",name:"Qualified",prob:25},{id:"s-proposal",name:"Proposal",prob:45},{id:"s-negotiation",name:"Negotiation",prob:70},{id:"s-won",name:"Won",prob:100},{id:"s-lost",name:"Lost",prob:0}]),[p,m]=l.useState(["Ash","Neha","Niraj"]),[o,h]=l.useState(["Hot","Warm","Cold","Follow up","Enterprise"]),[u,k]=l.useState({name:"",prob:25}),[z,C]=l.useState(null),[v,j]=l.useState({name:"",prob:25}),[F,R]=l.useState(""),[g,A]=l.useState({open:!1,title:"",message:"",dangerText:"Delete",cancelText:"Cancel",onConfirm:null}),S=l.useRef(null),r=a=>{R(a),window.clearTimeout(r.t),r.t=window.setTimeout(()=>R(""),1600)},w=({title:a,message:s,dangerText:t="Delete",cancelText:i="Cancel",onConfirm:_})=>{A({open:!0,title:a,message:s,dangerText:t,cancelText:i,onConfirm:_}),window.setTimeout(()=>{S.current&&S.current.focus()},0)},y=()=>{A(a=>({...a,open:!1,onConfirm:null}))},J=()=>{const a=g.onConfirm;y(),typeof a=="function"&&a()},Y=l.useMemo(()=>["Keep stages minimal so the board stays fast.","Use probability as a forecast signal, not as truth.","Won and Lost should be terminal stages."],[]),$=()=>{const a=u.name.trim(),s=Number(u.prob);if(!a){r("Stage name is required");return}if(Number.isNaN(s)||s<0||s>100){r("Probability must be between 0 and 100");return}const t=`s-${Date.now()}`;n(i=>[...i,{id:t,name:a,prob:s}]),k({name:"",prob:25}),r("Stage added")},G=a=>{C(a.id),j({name:a.name,prob:a.prob})},I=()=>{const a=v.name.trim(),s=Number(v.prob);if(!a){r("Stage name is required");return}if(Number.isNaN(s)||s<0||s>100){r("Probability must be between 0 and 100");return}n(t=>t.map(i=>i.id===z?{...i,name:a,prob:s}:i)),C(null),r("Stage updated")},L=()=>{C(null),j({name:"",prob:25})},W=a=>{n(s=>s.filter(t=>t.id!==a)),r("Stage removed")},B=a=>{const s=a.trim();if(s){if(p.includes(s)){r("Owner already exists");return}m(t=>[...t,s]),r("Owner added")}},q=a=>{m(s=>s.filter(t=>t!==a)),r("Owner removed")},K=a=>{const s=a.trim();if(s){if(o.includes(s)){r("Tag already exists");return}h(t=>[...t,s]),r("Tag added")}},M=a=>{h(s=>s.filter(t=>t!==a)),r("Tag removed")},X=()=>{const a={exportedAt:new Date().toISOString(),stages:b,owners:p,tags:o},s=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),t=URL.createObjectURL(s),i=document.createElement("a");i.href=t,i.download="react-sales-kanban-settings.json",i.click(),URL.revokeObjectURL(t),r("Exported settings JSON")},Q=a=>{if(!a)return;const s=new FileReader;s.onload=()=>{try{const t=JSON.parse(String(s.result||"{}"));Array.isArray(t.stages)&&n(t.stages),Array.isArray(t.owners)&&m(t.owners),Array.isArray(t.tags)&&h(t.tags),r("Imported settings")}catch{r("Invalid JSON file")}},s.readAsText(a)},V=()=>{n([{id:"s-new",name:"New",prob:10},{id:"s-qualified",name:"Qualified",prob:25},{id:"s-proposal",name:"Proposal",prob:45},{id:"s-negotiation",name:"Negotiation",prob:70},{id:"s-won",name:"Won",prob:100},{id:"s-lost",name:"Lost",prob:0}]),m(["Ash","Neha","Niraj"]),h(["Hot","Warm","Cold","Follow up","Enterprise"]),r("Demo settings reset")},Z=async()=>{const a={stages:b,owners:p,tags:o};try{await navigator.clipboard.writeText(JSON.stringify(a,null,2)),r("Copied JSON")}catch{r("Copy failed")}};return e.jsxs(c.Wrapper,{children:[e.jsxs(c.Hero,{children:[e.jsxs("div",{className:"left",children:[e.jsxs("div",{className:"title",children:[e.jsx(ae,{}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"h1",children:"Settings"}),e.jsx("div",{className:"sub",children:"Configure pipeline stages, owners, tags, and manage demo data."})]})]}),e.jsxs("div",{className:"tabs",children:[e.jsxs("button",{type:"button",className:`tab ${d==="pipeline"?"active":""}`,onClick:()=>x("pipeline"),children:[e.jsx(E,{}),"Pipeline"]}),e.jsxs("button",{type:"button",className:`tab ${d==="owners"?"active":""}`,onClick:()=>x("owners"),children:[e.jsx(H,{}),"Owners"]}),e.jsxs("button",{type:"button",className:`tab ${d==="tags"?"active":""}`,onClick:()=>x("tags"),children:[e.jsx(U,{}),"Tags"]}),e.jsxs("button",{type:"button",className:`tab ${d==="data"?"active":""}`,onClick:()=>x("data"),children:[e.jsx(P,{}),"Data"]})]})]}),e.jsx("div",{className:"right",children:e.jsxs("div",{className:"heroCard",children:[e.jsx("img",{src:"https://picsum.photos/seed/settings-ui/520/260",alt:"settings cover"}),e.jsx("div",{className:"heroOverlay"}),e.jsxs("div",{className:"heroText",children:[e.jsx("div",{className:"k",children:"Workspace"}),e.jsx("div",{className:"v",children:"react sales kanban"})]})]})})]}),e.jsxs(c.Content,{children:[d==="pipeline"&&e.jsxs(e.Fragment,{children:[e.jsxs(c.Panel,{children:[e.jsxs("div",{className:"pHead",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(E,{}),"Pipeline stages"]}),e.jsx("div",{className:"pSub",children:"Probability affects weighted forecasts."})]}),e.jsxs("div",{className:"formGrid",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Stage name"}),e.jsx("input",{value:u.name,onChange:a=>k(s=>({...s,name:a.target.value})),placeholder:"e.g. Negotiation"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Probability (0 to 100)"}),e.jsx("input",{type:"number",value:u.prob,onChange:a=>k(s=>({...s,prob:a.target.value})),placeholder:"25"})]}),e.jsxs("button",{className:"btn",type:"button",onClick:$,children:[e.jsx(O,{}),"Add stage"]})]}),e.jsx("div",{className:"tips",children:Y.map(a=>e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:a})]},a))})]}),e.jsxs(c.Panel,{children:[e.jsxs("div",{className:"pHead",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(se,{}),"Stage list"]}),e.jsx("div",{className:"pSub",children:"Edit names or probability. Keep terminal stages stable."})]}),e.jsx("div",{className:"stageList",children:b.map(a=>{const s=z===a.id;return e.jsx("div",{className:`row ${s?"editing":""}`,children:s?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"edit",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Name"}),e.jsx("input",{value:v.name,onChange:t=>j(i=>({...i,name:t.target.value}))})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Probability"}),e.jsx("input",{type:"number",value:v.prob,onChange:t=>j(i=>({...i,prob:t.target.value}))})]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{type:"button",className:"icon ok",onClick:I,"aria-label":"Save stage",children:e.jsx(re,{})}),e.jsx("button",{type:"button",className:"icon",onClick:L,"aria-label":"Cancel edit",children:e.jsx(N,{})})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"name",children:a.name}),e.jsxs("div",{className:"pill",children:[a.prob,"% probability"]})]}),e.jsxs("div",{className:"right",children:[e.jsx("button",{type:"button",className:"icon",onClick:()=>G(a),"aria-label":"Edit stage",children:e.jsx(te,{})}),e.jsx("button",{type:"button",className:"icon danger",onClick:()=>w({title:"Delete stage",message:`Delete "${a.name}" stage? This cannot be undone.`,dangerText:"Delete stage",onConfirm:()=>W(a.id)}),"aria-label":"Delete stage",children:e.jsx(T,{})})]})]})},a.id)})})]})]}),d==="owners"&&e.jsx(de,{owners:p,addOwner:B,removeOwner:a=>w({title:"Remove owner",message:`Remove "${a}" from owners list?`,dangerText:"Remove",onConfirm:()=>q(a)})}),d==="tags"&&e.jsx(ce,{tags:o,addTag:K,removeTag:a=>w({title:"Remove tag",message:`Remove "${a}" tag?`,dangerText:"Remove",onConfirm:()=>M(a)})}),d==="data"&&e.jsxs(c.Panel,{children:[e.jsxs("div",{className:"pHead",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(P,{}),"Data tools"]}),e.jsx("div",{className:"pSub",children:"Export or import demo config, or reset defaults."})]}),e.jsxs("div",{className:"dataGrid",children:[e.jsxs("button",{type:"button",className:"btn ghost",onClick:X,children:[e.jsx(oe,{}),"Export JSON"]}),e.jsxs("label",{className:"upload",children:[e.jsx("input",{type:"file",accept:"application/json",onChange:a=>{var s;return Q((s=a.target.files)==null?void 0:s[0])}}),e.jsxs("span",{className:"btn",children:[e.jsx(ie,{}),"Import JSON"]})]}),e.jsxs("button",{type:"button",className:"btn ghost",onClick:Z,children:[e.jsx(ne,{}),"Copy JSON"]}),e.jsxs("button",{type:"button",className:"btn danger",onClick:()=>w({title:"Reset demo settings",message:"Reset stages, owners, and tags back to default demo values?",dangerText:"Reset demo",onConfirm:V}),children:[e.jsx(T,{}),"Reset demo"]})]}),e.jsx("div",{className:"note",children:"Imported settings replace current pipeline configuration only."})]})]}),e.jsx(c.Toast,{className:F?"open":"",role:"status","aria-live":"polite",children:F}),e.jsx(c.ConfirmBackdrop,{className:g.open?"open":"",onClick:y,"aria-hidden":g.open?"false":"true"}),e.jsxs(c.ConfirmModal,{className:g.open?"open":"",role:"dialog","aria-modal":"true","aria-label":"Confirm action",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"mHead",children:[e.jsx("div",{className:"ic",children:e.jsx(le,{})}),e.jsxs("div",{className:"txt",children:[e.jsx("div",{className:"t",children:g.title}),e.jsx("div",{className:"m",children:g.message})]}),e.jsx("button",{type:"button",className:"x",onClick:y,"aria-label":"Close",children:e.jsx(N,{})})]}),e.jsxs("div",{className:"mActions",children:[e.jsx("button",{type:"button",className:"btn ghost",onClick:y,children:g.cancelText}),e.jsxs("button",{type:"button",className:"btn danger",onClick:J,ref:S,children:[e.jsx(T,{}),g.dangerText]})]})]})]})},de=({owners:d,addOwner:x,removeOwner:b})=>{const[n,p]=l.useState(""),m=()=>{n.trim()&&(x(n),p(""))};return e.jsxs(c.Panel,{children:[e.jsxs("div",{className:"pHead",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(H,{}),"Owners"]}),e.jsx("div",{className:"pSub",children:"Used for assignment and reporting filters."})]}),e.jsxs("div",{className:"formGrid",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Owner name"}),e.jsx("input",{value:n,onChange:o=>p(o.target.value),placeholder:"e.g. Ash"})]}),e.jsxs("button",{className:"btn",type:"button",onClick:m,children:[e.jsx(O,{}),"Add owner"]})]}),e.jsx("div",{className:"pillGrid",children:d.map(o=>e.jsxs("button",{type:"button",className:"pillBtn",onClick:()=>b(o),title:"Remove owner",children:[e.jsx("span",{className:"txt",children:o}),e.jsx("span",{className:"x",children:e.jsx(N,{})})]},o))}),e.jsx("div",{className:"note",children:"Removing an owner does not auto reassign deals in this demo."})]})},ce=({tags:d,addTag:x,removeTag:b})=>{const[n,p]=l.useState(""),m=()=>{n.trim()&&(x(n),p(""))};return e.jsxs(c.Panel,{children:[e.jsxs("div",{className:"pHead",children:[e.jsxs("div",{className:"pTitle",children:[e.jsx(U,{}),"Tags"]}),e.jsx("div",{className:"pSub",children:"Used for quick labeling and filtering."})]}),e.jsxs("div",{className:"formGrid",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Tag name"}),e.jsx("input",{value:n,onChange:o=>p(o.target.value),placeholder:"e.g. Enterprise"})]}),e.jsxs("button",{className:"btn",type:"button",onClick:m,children:[e.jsx(O,{}),"Add tag"]})]}),e.jsx("div",{className:"pillGrid",children:d.map(o=>e.jsxs("button",{type:"button",className:"pillBtn",onClick:()=>b(o),title:"Remove tag",children:[e.jsx("span",{className:"txt",children:o}),e.jsx("span",{className:"x",children:e.jsx(N,{})})]},o))}),e.jsx("div",{className:"note",children:"Tags are just UI labels in this demo."})]})};export{xe as default};
