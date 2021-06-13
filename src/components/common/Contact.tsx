import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';
import { getColor } from '../../utils/ThemeProvider';
import { ColorType, Sizing } from '../../utils/Constant';
import { getContactProps } from './../../utils/DataProvider';
import { Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-ui/core';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${Sizing.S};
    
    .MuiSvgIcon-root {
        cursor: pointer;
        margin-right: ${Sizing.S};

        &:last-child {
            margin: 0;
        }
    }

    .MuiSvgIcon-root, .MuiTypography-root {
        color: ${getColor(ColorType.icon)};
    }
`;
const handleOnClick = (link: string) => () => window.open(link, "_blank");

const Contact = () => {
    const props = getContactProps();

    return (
        <Container>
            <LinkedInIcon fontSize="large" onClick={handleOnClick(props.linkedin)} />
            <GitHubIcon fontSize="large" onClick={handleOnClick(props.gitHub)} />
            <Typography variant="h4">
                <FontAwesomeIcon icon={["fab", "medium"]} />
            </Typography>
        </Container>
    );
};

export default Contact;
