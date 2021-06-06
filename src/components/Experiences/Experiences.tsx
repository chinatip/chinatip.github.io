import { Grid, Hidden, ListItem, ListItemText, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Experience } from '../../models/Data';
import { List } from '@material-ui/core';

const Wrapper = styled(Grid)`
    padding: 20px 0;
`;


const Experiences = (props: Experience[]) => {
    const renderRow = (row: Experience, i: number) => (
        <ListItem key={i}>
            <ListItemText primary={row.company} secondary={row.position} />
        </ListItem>
    );

    const renderTable = () => (
        <>
            <Hidden mdUp>
                smup
            </Hidden>
            <Hidden smDown>
                <Grid container xs={12}>
                    <Grid item sm={6}>
                        <List>
                            {Object.values(props).map((e, i) => renderRow(e, i))}
                        </List>
                    </Grid>
                    <Grid item sm={6}>
                        content here
                    </Grid>
                </Grid>
            </Hidden>
        </>
    );

    return (
        <Wrapper item container>
            <Typography variant="h6">
                Experiences
            </Typography>
            {renderTable()}
        </Wrapper>
    );
};

export default Experiences;
