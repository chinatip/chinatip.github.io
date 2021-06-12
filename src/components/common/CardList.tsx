import styled from 'styled-components';
import { CardProps, CardListProps } from './../../models/Card.d';
import Card from './Card';

const Container = styled.div`
    width: 100%;
`;

const CardWrapper = styled.div`
    width: 100%;
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
        <Container>
            {list}
        </Container>
    )
};

CardList.displayName = 'CardList';
export default CardList;
