import styled, { keyframes } from "styled-components";

export const FadeWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 1.5s forwards
    cubic-bezier(0.33, 1, 0.68, 1);
  text-align: center;
`;
export const SlideBox = styled.div`
  animation: ${({ show, from, to }) =>
      show ? slide(from, to) : slide(to, from)}
    1.5s forwards cubic-bezier(0.33, 1, 0.68, 1);
`;

const slide = (from, to) => keyframes`
    from{
        transform : translateY(${from}%)
    }
    to{
        transform : translateY(${to}%)
    }
`;

const fadeIn = keyframes`
    from{
        background: rgba(0, 0, 0, 0);
    }
    to{
        background: rgba(0, 0, 0, .7);
    }
`;
const fadeOut = keyframes`
    from{
        background: rgba(0, 0, 0, .7);
    }
    to{
        background: rgba(0, 0, 0, 0);
    }
`;
