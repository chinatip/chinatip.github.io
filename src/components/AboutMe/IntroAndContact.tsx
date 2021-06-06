import { Grid, Typography } from '@material-ui/core';
import { AboutMeSection } from '../../models/Data';
import { Desktop } from '../../utils/BreakpointHelper';
import Contact from './../common/Contact';

const IntroAndContact = (props: AboutMeSection) => {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6">
                {props.title} 
            </Typography>
            <Typography variant="body1">
                {props.subtitle} 
            </Typography>
            <Desktop>
                <Contact />
            </Desktop>
        </Grid>
    );
};

export default IntroAndContact;