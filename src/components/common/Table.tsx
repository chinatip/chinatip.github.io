import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Row } from './../../models/Table.d';

const GridContainer = styled(Grid)`
    margin: 0 auto;
    border: 1px solid red;
`;

const ListItemWrapper = styled.div`
    max-width: 240px;
    cursor: pointer;
    border: 1px solid blue;
`;

const Table = (rows: Row[]) => {
    const [selectIndex, setIndex] = React.useState(0);
    
    const handleOnClick = (index: number) => () => {
        setIndex(index);
    };

    const renderRow = (row: Row, i: number) => (
        <ListItemWrapper>
            <ListItem key={i} onClick={handleOnClick(i)}>
                <ListItemText primary={row.title} secondary={row.subtitle} />
            </ListItem>
        </ListItemWrapper>
    );

    return (
        <GridContainer container xs={12}>
            <Grid item sm={6}>
                <List>
                    {Object.values(rows).map((e, i) => renderRow(e, i))}
                </List>
            </Grid>
            <Grid item sm={6}>
                {rows[selectIndex].detail}
            </Grid>
        </GridContainer>
    );
};

export default Table;