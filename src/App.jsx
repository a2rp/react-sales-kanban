import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import AppRoutes from "./AppRoutes";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
    const mainRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        mainRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);

    return (
        <Styled.Wrapper>
            <Styled.HeaderWrapper>
                <Header />
            </Styled.HeaderWrapper>

            <Styled.Main ref={mainRef}>
                <div className="appRoutesFooterWrapper">
                    <div className="appRoutesWrapper">
                        <AppRoutes key={pathname} />
                    </div>
                    <div className="footerWrapper">
                        <Footer />
                    </div>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
