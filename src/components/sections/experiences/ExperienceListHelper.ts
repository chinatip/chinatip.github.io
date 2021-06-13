import { ExperienceProps } from "../../../models/Data";
import { getExperienceProps } from "../../../utils/DataProvider";
import { Row, TableProps } from '../../../models/Table';
import { CardListProps, CardProps } from './../../../models/Card.d';

const mapExperienceToRow = (props: ExperienceProps): Row => {
    return {
        title: props.position,
        subtitle: props.company,
        detail: props.detail,
        description: props.duration,
    };
};

export const getExperienceTableProps = (): TableProps => {
    const props = getExperienceProps();
    return { rows: Object.values(props.list).map((e) => mapExperienceToRow(e)) };
};

const mapExperienceToCard = (props: ExperienceProps): CardProps => {
    return {
        title: props.position,
        subtitle: props.company,
        description: props.duration,
        content: props.detail,
    };
};

export const getExperienceCardListProps = (): CardListProps => {
    const props = getExperienceProps();
    return { list: Object.values(props.list).map((e) => mapExperienceToCard(e)) };
};
