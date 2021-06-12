import { getEducationProps } from "../../../utils/DataProvider";
import { Education } from '../../../models/Data';
import { CardProps } from '../../../models/Card';

const mapEducationToCard = (props: Education): CardProps => {
    return {
        title: props.degree,
        subtitle: props.school,
        description: props.duration,
    };
};

export const getEducationList = (): CardProps[] => {
    const props = getEducationProps();

    return Object.values(props.list).map((e) => mapEducationToCard(e))
}