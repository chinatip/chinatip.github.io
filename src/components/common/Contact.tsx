import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import styled from 'styled-components';
import { getColor } from '../../utils/ThemeProvider';
import { ColorType, Sizing } from '../../utils/Constant';

const Container = styled.div`
    .MuiSvgIcon-root {
        margin-right: ${Sizing.S};

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
