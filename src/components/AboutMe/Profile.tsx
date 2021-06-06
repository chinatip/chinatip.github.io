import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import ProfileImage from '../common/ProfileImage';
import { AboutMe } from '../../models/data';

const Profile = (props: AboutMe) => {
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
                {props.name}
            </Typography>
            <Typography variant="subtitle1">
                {props.position}
            </Typography>
        </Grid>
    );
};

export default Profile;