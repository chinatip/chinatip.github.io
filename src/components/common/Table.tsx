import { Box, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Row, TableProps } from './../../models/Table.d';

const GridContainer = styled(Grid)`
    margin: 0 auto;
    border: 1px solid red;
    display: flex;
`;

const MenuContainer = styled(Box)`
    display: flex;
    width: 250px;
    min-width: 250px;
    overflow-y: auto;

    .MuiList-root {
        width: 100%;
    }
`;

const DetailContainer = styled(Box)`
    overflow-y: auto;
`;

const ListItemWrapper = styled.div`
    margin-left: 8px;
    margin-bottom: 8px;
    border: 1px solid blue;

    &:last-child {
        margin-bottom: 0;
    }

    .MuiListItem-gutters {
        cursor: pointer;
    }
`;

const Table = (props: TableProps) => {
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
        <GridContainer item xs={12}>
            <MenuContainer>
                <List>
                    {Object.values(props.rows).map((e, i) => renderRow(e, i))}
                </List>
            </MenuContainer>
            <DetailContainer>
                {props.rows[selectIndex].detail}
            </DetailContainer>
        </GridContainer>
    );
};

export default Table;