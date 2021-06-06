import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import ProfileImage from '../common/ProfileImage';

const Profile = () => {
    return (
        <Grid
            container
            xs={12}
            sm={4}
            direction="column"
            justify="center"
            alignItems="center"
        >
            <ProfileImage />
            <Typography variant="h5">
                Chinatip Vichian
            </Typography>
            <Typography variant="subtitle1">
                Full Stack Engineer
            </Typography>
        </Grid>
    );
};

export default Profile;