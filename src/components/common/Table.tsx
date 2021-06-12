import { Card, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import styled, { css } from 'styled-components';
import { ColorType, getColor } from '../../utils/ThemeProvider';
import { Row, TableProps } from './../../models/Table.d';

const borderStyle = css`
    border-radius: 4px;
`;

const TableContainer = styled(Card)`
    width: 100%;
    background: ${getColor(ColorType.tableBackground)} !important;
`;

const GridContainer = styled(Grid)`
    margin: 0 auto;
    // border: 1px solid red;
    display: flex;
`;

const MenuContainer = styled.div`
    display: flex;
    width: 250px;
    min-width: 250px;
    overflow-y: auto;

    .MuiList-root {
        width: 100%;
    }
`;

const DetailContainer = styled.div`
    overflow-y: auto;
    width: 100%;
    margin: 8px;
    padding: 16px;
    background: white;
    ${borderStyle}
`;

const ListItemWrapper = styled(Card)`
    margin-left: 8px;
    margin-bottom: 8px;
    ${borderStyle}

    &:last-child {
        margin-bottom: 0;
    }

    .MuiListItem-gutters {
        cursor: pointer;
        background: ${getColor(ColorType.tableMenuItem)};
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
        <TableContainer>
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
        </TableContainer>
    );
};

export default Table;