import styled, { css } from 'styled-components';

const size = 120;
const borderStyle = css`
    border: 1px solid black;
`;
const Container = styled.div`
    width: ${size}px;
    height: ${size}px;
    background: grey;
    border-radius: 50%;
    ${borderStyle}
    margin-bottom: 10px;
`;
const Image = styled.img`
    background: grey;
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;


const ProfileImage = () => {
    return (
        <Container>
            <Image />
        </Container>
    );
};

export default ProfileImage;