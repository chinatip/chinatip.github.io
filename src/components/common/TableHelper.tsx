
import { Row, TableProps } from '../../models/Table';
import { CardListProps, CardProps } from './../../models/Card.d';

const formatRowToCard = ({ detail, description, title, subtitle }: Row): CardProps => ({
    title,
    subtitle,
    description,
    content: detail,
});

export const formatTableToCardList = (props: TableProps): CardListProps => {
    
    return { list: Object.values(props.rows).map((e) => formatRowToCard(e)) };
};
