import { getActivityProps } from "../../../utils/DataProvider";
import { Activity } from '../../../models/Data';
import { CardProps } from '../../../models/Card';

const mapActivityToCard = (props: Activity): CardProps => {
    return {
        content: <div>ActivityContent</div>
    };
};

export const getActivityList = (): CardProps[] => {
    const props = getActivityProps();

    return Object.values(props.list).map((e) => mapActivityToCard(e))
}