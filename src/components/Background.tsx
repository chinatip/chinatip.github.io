import styled, { css } from "styled-components";


const circleStyle = css`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
`

const Circle = styled.div`
    ${circleStyle}
    width: 50px;
    height: 50px;
    background: ;
    box-shadow: 0 0 150px grey;
`;

const Background = () => (
    <>
        <Circle />
    </>
);

export default Background;
