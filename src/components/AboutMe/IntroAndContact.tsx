import { Grid, Typography } from '@material-ui/core';
import { AboutMe } from '../../models/data';
import Contact from './../common/Contact';

const IntroAndContact = (props: AboutMe) => {
    return (
        <Grid item xs={12} sm={8}>
            <Typography variant="h6">
                {props.title} 
            </Typography>
            <Typography variant="body1">
                {props.subtitle} 
            </Typography>
            <Contact />
        </Grid>
    );
};

export default IntroAndContact;