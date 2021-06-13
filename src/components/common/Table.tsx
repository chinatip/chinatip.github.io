import { Card, CardProps, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled, { css } from 'styled-components';
import { Desktop, Mobile } from '../../utils/BreakpointHelper';
import { ColorType, Sizing } from '../../utils/Constant';
import { getColor } from '../../utils/ThemeProvider';
import { Row, TableProps } from './../../models/Table.d';
import CardList from './CardList';
import { formatTableToCardList } from './TableHelper';

const borderStyle = css`
    border-radius: ${Sizing.XS};
`;

const TableContainer = styled(Card)`
    width: 100%;
    min-height: 300px;
    background: ${getColor(ColorType.tableBackground)} !important;
`;

const GridContainer = styled(Grid)`
    margin: 0 auto;
    display: flex;
    height: 100%;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 100%;
    margin: ${Sizing.S};
    padding: ${Sizing.L};
    background: ${getColor(ColorType.tableContentBackground)};
    ${borderStyle}
`;

const ContentTextWrapper = styled.div`
    margin-bottom: ${Sizing.S};

    .MuiPaper-root {
        background: transparent !important;
    }

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
    padding: ${Sizing.S};
    overflow-y: auto;

    .MuiList-root {
        width: 100%;
    }
`;

const MenuList = styled.div`
    margin-bottom: ${Sizing.S};
    ${borderStyle};

    &:last-child {
        margin-bottom: 0;
    }
`;

const MenuItem = styled(Card)`
    padding: ${Sizing.S};
    cursor: pointer;
    border-box: box-sizing;
    background: ${getColor(ColorType.tableMenuBackground)} !important;
    border: ${Sizing.XXS} solid transparent;

    &.selected {
        border-color: ${getColor(ColorType.tableMenuBorder)};
    }
`;
const MenuTitle = styled(Typography)`
    color: ${getColor(ColorType.tableMenuTitle)};
`;
const MenuSubtitle = styled(Typography)`
    color: ${getColor(ColorType.tableMenuSubtitle)};
`;
const MenuDescription = styled(Typography)`
    color: ${getColor(ColorType.tableMenuDescription)};
`;

const Table = (props: TableProps) => {
    const [selectIndex, setIndex] = React.useState(0);
    
    const handleOnClick = (index: number) => () => {
        setIndex(index);
    };

    const renderRow = (row: Row, i: number) => (
        <MenuList>
            <MenuItem key={i} className={selectIndex === i ? 'selected' : ''} onClick={handleOnClick(i)}>
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