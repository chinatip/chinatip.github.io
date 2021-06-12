import Table from '../../common/Table';
import { getProjectProps } from '../../../utils/DataProvider';
import { getProjectTableProps } from './ProjectListHelper';
import { Section } from './../SectionName';

const ProjectsSection = () => {
    const props = getProjectProps();

    return (
        <Section sectionName={props.sectionName}>
            <Table {...getProjectTableProps()} />
        </Section>
    );
};
ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;
