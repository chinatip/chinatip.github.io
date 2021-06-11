import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Experience } from '../../../models/Data';
import { getExperienceData } from './../../../utils/DataProvider';

const GridContainer = styled(Grid)`
    margin: 0 auto;
    border: 1px solid red;
`;

const ListItemWrapper = styled.div`
    max-width: 240px;
    cursor: pointer;
    border: 1px solid blue;
`;

const ExperienceTable = () => {
    const props = getExperienceData();
    const [selectIndex, setIndex] = React.useState(0);
    
    const handleOnClick = (index: number) => () => {
        setIndex(index);
    };

    const renderRow = (row: Experience, i: number) => (
        <ListItemWrapper>
            <ListItem key={i} onClick={handleOnClick(i)}>
                <ListItemText primary={row.company} secondary={row.position} />
            </ListItem>
        </ListItemWrapper>
    );

    return (
        <GridContainer container xs={12}>
            <Grid item sm={6}>
                <List>
                    {Object.values(props.list).map((e, i) => renderRow(e, i))}
                </List>
            </Grid>
            <Grid item sm={6}>
                {props.list[selectIndex].detail}
            </Grid>
        </GridContainer>
    );
};

export default ExperienceTable;