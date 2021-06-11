import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { getExperienceData } from '../../utils/DataProvider';
import { Experience } from './../../models/Data.d';

const ExperienceTable = () => {
    const props = getExperienceData();

    const renderRow = (row: Experience, i: number) => (
        <ListItem key={i}>
            <ListItemText primary={row.company} secondary={row.position} />
        </ListItem>
    );

    return (
        <Grid container xs={12}>
            <Grid item sm={6}>
                <List>
                    {Object.values(props.list).map((e, i) => renderRow(e, i))}
                </List>
            </Grid>
            <Grid item sm={6}>
                content here
            </Grid>
        </Grid>
    );
};

export default ExperienceTable;