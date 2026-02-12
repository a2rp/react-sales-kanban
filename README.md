<div align="center">

# react-sales-kanban

A frontend-only Sales Pipeline Kanban demo built in React to manage deals, visualize revenue forecasts, and control pipeline flow.

</div>

---

![alt text](image.png)

---

## What this is

react-sales-kanban is a light-theme sales pipeline UI that helps you:

- track deals across structured stages
- move opportunities through a visual board
- calculate weighted revenue forecasts
- monitor aging and follow-up activity
- customize stages and probabilities

This is a frontend-only demo. All data is stored locally and persists between sessions.

---

## Pages

- Pipeline Board - horizontal stage board with drag and drop, totals, and deal inspector panel
- Deal Details - full deal profile with activity timeline, notes, and stage history
- Reports - pipeline summary, forecast metrics, funnel breakdown, aging analysis
- Settings - stage configuration, probability mapping, owners, tags, sample data reset

---

## Key features

- Stage-based pipeline with configurable probability per stage
- Drag and drop deal movement with real-time totals update
- Weighted forecast calculation based on deal amount and stage probability
- Activity timeline with notes and mock interactions
- Aging indicators for stalled deals
- Saved filters and quick views
- Export pipeline data to CSV
- Light theme design with a clean SaaS-style layout

---

## Tech stack

- React with Vite
- styled-components
- React Router
- localStorage for persistence

---

## Local development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build
npm run build

# Preview build
npm run preview
```
