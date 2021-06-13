import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import styled from 'styled-components';
import { ColorType, getColor } from '../../utils/ThemeProvider';

const Container = styled.div`
    .MuiSvgIcon-root {
        margin-right: 8px;
        &:last-child {
            margin: 0;
        }
    }
`;

const Contact = () => {
    return (
        <Container>
            <LinkedInIcon fontSize="large" htmlColor={getColor(ColorType.icon)} />
            <GitHubIcon fontSize="large" htmlColor={getColor(ColorType.icon)} />
            <PictureAsPdfIcon fontSize="large" htmlColor={getColor(ColorType.icon)} />
        </Container>
    );
};

export default Contact;
