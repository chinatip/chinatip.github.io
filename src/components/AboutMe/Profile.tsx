import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ProfileImage from '../common/ProfileImage';
import { Mobile } from '../../utils/BreakpointHelper';
import Contact from './../common/Contact';
import { getAboutMeData } from '../../utils/DataProvider';

const Profile = () => {
    const props = getAboutMeData();

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
            <Typography variant="h5">
                {props.name}
            </Typography>
            <Typography variant="subtitle1">
                {props.position}
            </Typography>
            <Mobile>
                <Contact />
            </Mobile>
        </Grid>
    );
};

export default Profile;