import styled, { css } from 'styled-components';
import { Sizing } from '../../utils/Constant';
import { CardProps, CardListProps } from './../../models/Card.d';
import Card from './Card';

const horizontalContainerStyle = css`
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const horizontalCardStyle = css`
    min-width: 200px;
    width: 270px;
    margin-right: 10px;
`;

const Container = styled.div<CardListProps>`
    width: 100%;
    ${props => props.alignment == 'horizontal' ? horizontalContainerStyle : '' }
`;

const CardWrapper = styled.div<CardListProps>`
    margin-bottom: ${Sizing.S};

    ${props => props.alignment == 'horizontal' ? horizontalCardStyle : '' }
    
    &:last-child {
        margin: 0;
    }
`;

const CardList = (props: CardListProps) => {
    if (!props || !props.list) return null;
    
    const renderCard = (i: number, card: CardProps) => (
        <CardWrapper {...props}>
            <Card key={i} {...card} />
        </CardWrapper>
    );

    const list = Object.values(props.list).map((cardProps, i) => renderCard(i, cardProps));

    return (
        <Container {...props}>
            {list}
        </Container>
    )
};

CardList.displayName = 'CardList';
export default CardList;
