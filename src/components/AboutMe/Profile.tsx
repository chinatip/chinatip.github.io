import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import ProfileImage from '../common/ProfileImage';
import { AboutMeSection } from '../../models/Data';
import { Mobile } from '../../utils/BreakpointHelper';
import Contact from './../common/Contact';

const Profile = (props: AboutMeSection) => {
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