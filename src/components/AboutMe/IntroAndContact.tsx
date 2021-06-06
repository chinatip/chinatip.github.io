import { Grid, Typography } from '@material-ui/core';
import Contact from './../common/Contact';

const IntroAndContact = () => {
    return (
        <Grid item xs={12} sm={8}>
            <Typography variant="h6">
                Hello,
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Typography>
            <Contact />
        </Grid>
    );
};

export default IntroAndContact;