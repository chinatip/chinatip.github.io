import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled, { css } from 'styled-components';
import { Desktop, Mobile } from '../../utils/BreakpointHelper';
import { ColorType, getColor } from '../../utils/ThemeProvider';
import { Row, TableProps } from './../../models/Table.d';
import CardList from './CardList';
import { formatTableToCardList } from './TableHelper';
const borderStyle = css`
    border-radius: 4px;
`;

const TableContainer = styled(Card)`
    width: 100%;
    background: ${getColor(ColorType.tableBackground)} !important;
`;

const GridContainer = styled(Grid)`
    margin: 0 auto;
    display: flex;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 100%;
    margin: 8px;
    padding: 16px;
    background: ${getColor(ColorType.tableContentBackground)};
    ${borderStyle}
`;

const ContentTextWrapper = styled.div`
    margin-bottom: 8px;

    &:last-child {
        margin: 0;
    }
`;

const ContentText = styled(Typography)`
    color: ${getColor(ColorType.tableContentText)};
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    min-width: 250px;
    padding: 8px;
    overflow-y: auto;

    .MuiList-root {
        width: 100%;
    }
`;

const MenuList = styled(Card)`
    margin-bottom: 8px;
    ${borderStyle}

    &:last-child {
        margin-bottom: 0;
    }
`;

const MenuItem = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    background: ${getColor(ColorType.tableMenuBackground)};
`;
const MenuTitle = styled(Typography)`
    color: ${getColor(ColorType.tableMenuTitle)};
`;
const MenuSubtitle = styled(Typography)`
    color: ${getColor(ColorType.tableMenuSubtitle)};
`;
const MenuDescription = styled(Typography)`
    color: ${getColor(ColorType.tableMenuSubtitle)};
`;

const Table = (props: TableProps) => {
    const [selectIndex, setIndex] = React.useState(0);
    
    const handleOnClick = (index: number) => () => {
        setIndex(index);
    };

    const renderRow = (row: Row, i: number) => (
        <MenuList>
            <MenuItem key={i} onClick={handleOnClick(i)}>
                <MenuTitle variant="body1">{row.title}</MenuTitle>
                <MenuSubtitle variant="body2">{row.subtitle}</MenuSubtitle>
                <MenuDescription variant="caption">{row.description}</MenuDescription>
            </MenuItem>
        </MenuList>
    );

    const renderContent = () => {
        const content = props.rows[selectIndex].detail;
        if (!content) return null;

        const renderItem = (text: string) => (
            <ContentTextWrapper>
                <ContentText variant="body2">{`- ${text}`}</ContentText>
            </ContentTextWrapper>
        );

        return content.map(c => renderItem(c));
    };

    return (
        <>
            <Desktop>
                <TableContainer>
                    <GridContainer item xs={12}>
                        <MenuContainer>
                            {Object.values(props.rows).map((e, i) => renderRow(e, i))}
                        </MenuContainer>
                        <ContentContainer>
                            {renderContent()}
                        </ContentContainer>
                    </GridContainer>
                </TableContainer>
            </Desktop>
            <Mobile>
                <CardList {...formatTableToCardList(props)} />
            </Mobile>
        </>
    );
};

export default Table;