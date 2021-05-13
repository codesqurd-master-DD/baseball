import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
const FROM = 150;
const TO = 0;
const POSITION = {
  top: -1,
  bottom: 1,
};
function Fade({ children, popupPosition, setPopup }) {
  const [show, setShow] = useState(true);
  const onAnimationEnd = () => { if (!show) setPopup("none"); };
  return (
    <FadeWrapper
      show={show}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShow(false);
        }
      }}
      onAnimationEnd={onAnimationEnd}
    >
      <SlideBox show={show} popupPosition={popupPosition}>
        {children}
      </SlideBox>
    </FadeWrapper>
  );
}

const FadeWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  z-index:9999;
  left: 0;
  right: 0;
  padding: 2rem 0;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 1.5s forwards
    cubic-bezier(0.33, 1, 0.68, 1);
  text-align: center;
`;

const SlideBox = styled.div`
  display: inline-block;
  width: auto;
  ${({ show, popupPosition }) => {
    const val = POSITION[popupPosition];
    return css`
    animation ${
      show ? slide(FROM * val, TO) : slide(TO, FROM * val)
    } 1.5s forwards cubic-bezier(0.33, 1, 0.68, 1); 
    ${
      popupPosition === "bottom" &&
      css`
        height: 100%;
      `
    }
    `;
  }}
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

export default Fade;
