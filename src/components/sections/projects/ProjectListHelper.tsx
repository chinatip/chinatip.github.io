import { Project } from "../../../models/Data";
import { getProjectData } from "../../../utils/DataProvider";
import { Row } from '../../../models/Table';
import { TableProps } from './../../../models/Table.d';

const mapProject = (props: Project): Row => {
    return {
        title: props.name,
        subtitle: props.description,
        detail: props.detail.description,
    };
};

export const getProjectTableProps = (): TableProps => {
    const props = getProjectData();
    return { rows: Object.values(props.list).map((e) => mapProject(e)) };
};
