import { ProjectProps } from "../../../models/Data";
import { getProjectData } from "../../../utils/DataProvider";
import { Row } from '../../../models/Table';

const mapProject = (props: ProjectProps): Row => {
    return {
        title: props.name,
        subtitle: props.description,
        detail: props.detail,
    };
};

export const getProjectList = (): Row[] => {
    const props = getProjectData();
    return Object.values(props.list).map((e) => mapProject(e));
};
