import { ExperienceProps } from "../../../models/Data";
import { getExperienceData } from "../../../utils/DataProvider";
import { Row, TableProps } from './../../../models/Table.d';

const mapExperience = (props: ExperienceProps): Row => {
    return {
        title: props.position,
        subtitle: props.company,
        detail: props.detail,
    };
};

export const getExperienceTableProps = (): TableProps => {
    const props = getExperienceData();
    return { rows: Object.values(props.list).map((e) => mapExperience(e)) };
};
