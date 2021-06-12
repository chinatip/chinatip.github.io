import { getActivityProps } from "../../../utils/DataProvider";
import { Activity } from '../../../models/Data';
import { CardListProps, CardProps } from '../../../models/Card';

const mapActivityToCard = (props: Activity): CardProps => {
    return {
        title: props.name,
        subtitle: props.duration,
        content: props.description
    };
};

export const getActivityList = (): CardListProps => {
    const props = getActivityProps();

    return { list: Object.values(props.list).map((e) => mapActivityToCard(e)) };
}