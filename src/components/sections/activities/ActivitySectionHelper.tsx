import { getActivityProps } from "../../../utils/DataProvider";
import { Activity } from '../../../models/Data';
import { CardProps } from '../../../models/Card';

const mapActivityToCard = (props: Activity): CardProps => {
    return {
        title: props.name,
        subtitle: props.duration,
        description: props.description
    };
};

export const getActivityList = (): CardProps[] => {
    const props = getActivityProps();

    return Object.values(props.list).map((e) => mapActivityToCard(e))
}