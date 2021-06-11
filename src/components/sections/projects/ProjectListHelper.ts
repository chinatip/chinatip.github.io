import { Project } from "../../../models/Data";
import { getProjectProps } from "../../../utils/DataProvider";
import { Row } from '../../../models/Table';
import { TableProps } from '../../../models/Table';

const mapProjectToRow = (props: Project): Row => {
    return {
        title: props.name,
        subtitle: props.description,
        detail: props.detail.description,
    };
};

export const getProjectTableProps = (): TableProps => {
    const props = getProjectProps();
    return { rows: Object.values(props.list).map((e) => mapProjectToRow(e)) };
};
