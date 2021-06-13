import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import styled from 'styled-components';
import { getColor } from '../../utils/ThemeProvider';
import { ColorType, Sizing } from '../../utils/Constant';
import { getContactProps } from './../../utils/DataProvider';

const Container = styled.div`
    margin-top: ${Sizing.S};
    
    .MuiSvgIcon-root {
        cursor: pointer;
        margin-right: ${Sizing.S};

        &:last-child {
            margin: 0;
        }
    }
`;
const handleOnClick = (link: string) => () => window.open(link, "_blank");

const Contact = () => {
    const props = getContactProps();
    const iconColor = getColor(ColorType.icon);

    return (
        <Container>
            <LinkedInIcon fontSize="large" htmlColor={iconColor} onClick={handleOnClick(props.linkedin)} />
            <GitHubIcon fontSize="large" htmlColor={iconColor}  onClick={handleOnClick(props.gitHub)}/>
            <PictureAsPdfIcon fontSize="large" htmlColor={iconColor}  onClick={handleOnClick(props.medium)}/>
        </Container>
    );
};

export default Contact;
