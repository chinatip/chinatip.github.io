import { Project } from "../../../models/Data";
import { getProjectProps } from "../../../utils/DataProvider";
import { Row } from '../../../models/Table';
import { TableProps } from '../../../models/Table';
import { CardListProps, CardProps } from "../../../models/Card";

const mapProjectToRow = (props: Project): Row => {
    return {
        title: props.name,
        subtitle: props.description,
        detail: props.detail.description ? [props.detail.description] : undefined,
    };
};

export const getProjectTableProps = (): TableProps => {
    const props = getProjectProps();
    return { rows: Object.values(props.list).map((e) => mapProjectToRow(e)) };
};

const mapProjectToCard = (props: Project): CardProps => {
    return {
        title: props.name,
        description: props.description,
        links: props.detail.links,
    };
};

export const getProjectCardListProps = (): CardListProps => {
    const props = getProjectProps();
    return {
        list: Object.values(props.list).map((e) => mapProjectToCard(e)),
        alignment: 'horizontal',
    };
};

