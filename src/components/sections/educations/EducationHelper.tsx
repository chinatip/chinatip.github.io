import { getEducationProps } from "../../../utils/DataProvider";
import { Education } from '../../../models/Data';
import { CardProps } from '../../../models/Card';

const mapEducationToCard = (props: Education): CardProps => {
    return {
        content: <div>EducationContent</div>
    };
};

export const getEducationList = (): CardProps[] => {
    const props = getEducationProps();

    return Object.values(props.list).map((e) => mapEducationToCard(e))
}