import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`,
        min-height: 100vh;
        background: #f7f8fb;
    `,

    HeaderWrapper: styled.div`,
        height: 70px;
    `,

    Main: styled.main`,
        position: relative;
        height: calc(100vh - 70px);
        overflow-y: auto;
        background: #f7f8fb;

        .appRoutesFooterWrapper {
            position: relative;
            min-height: 100%;

            .appRoutesWrapper {
                min-height: 100vh;
            }

            .footerWrapper {
                position: relative;
            }
        }

        @media (max-width: 700px) {
            height: calc(100vh - 64px);

            .appRoutesWrapper {
                min-height: calc(100vh - 64px);
            }
        }
    `,

    Footer: styled.div` `,
};
