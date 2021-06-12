import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ProfileImage from '../../common/ProfileImage';
import { Mobile } from '../../../utils/BreakpointHelper';
import Contact from '../../common/Contact';
import { getAboutMeProps } from '../../../utils/DataProvider';
import styled from 'styled-components';
import { ColorType, getColor } from './../../../utils/ThemeProvider';

const Name = styled(Typography)`
    color: ${getColor(ColorType.title)};
`;

const Position = styled(Typography)`
    color: ${getColor(ColorType.subtitle)};
`;


const Profile = () => {
    const props = getAboutMeProps();

    return (
        <Grid
            container
            item
            xs={12}
            md={4}
            direction="column"
            justify="center"
            alignItems="center"
        >
            <ProfileImage />
            <Name variant="h4"> {props.name} </Name>
            <Position variant="subtitle1">{props.position}</Position>
            <Mobile>
                <Contact />
            </Mobile>
        </Grid>
    );
};

export default Profile;