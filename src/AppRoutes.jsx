// AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

/* Lazy pages */
const PipelineBoard = lazy(() => import("./pages/pipelineBoard"));
const DealDetails = lazy(() => import("./pages/dealDetails"));
const Reports = lazy(() => import("./pages/reports"));
const Settings = lazy(() => import("./pages/settings"));
const NotFound = lazy(() => import("./pages/notFound"));

/* Loader */
const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const LoaderWrap = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg);
`;

const Spinner = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 4px solid var(--color-border);
    border-top-color: var(--color-accent);
    animation: ${spin} 0.9s linear infinite;
`;

function PageLoader() {
    return (
        <LoaderWrap>
            <Spinner aria-label="Loading" />
        </LoaderWrap>
    );
}

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/* Redirect root to pipeline */}
                <Route path="/" element={<Navigate to="/pipeline" replace />} />

                {/* Main routes */}
                <Route path="/pipeline" element={<PipelineBoard />} />
                <Route path="/deals/:id" element={<DealDetails />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />

                {/* Fallback */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
