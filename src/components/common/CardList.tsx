import styled, { css } from 'styled-components';
import { CardProps, CardListProps } from './../../models/Card.d';
import Card from './Card';

const horizontalStyle = css`
    display: flex;
`
const Container = styled.div<CardListProps>`
    width: 100%;
    ${props => props.alignment == 'horizontal' ? horizontalStyle : '' }
`;

const CardWrapper = styled.div`
    margin-bottom: 8px;
    
    &:last-child {
        margin: 0;
    }
`;

const CardList = (props: CardListProps) => {
    if (!props || !props.list) return null;
    
    const renderCard = (i: number, card: CardProps) => (
        <CardWrapper>
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
