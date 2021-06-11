import { ExperienceProps } from "../../../models/Data";
import { getExperienceData } from "../../../utils/DataProvider";
import { Row } from './../../../models/Table.d';

const mapExperience = (props: ExperienceProps): Row => {
    return {
        title: props.position,
        subtitle: props.company,
        detail: props.detail,
    };
};

export const getExperienceList = (): Row[] => {
    const props = getExperienceData();
    return Object.values(props.list).map((e) => mapExperience(e));
};
