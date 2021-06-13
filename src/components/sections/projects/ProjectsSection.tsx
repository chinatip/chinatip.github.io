import { getProjectProps } from '../../../utils/DataProvider';
import { getProjectCardListProps } from './ProjectListHelper';
import { Section } from './../SectionName';
import CardList from './../../common/CardList';

const ProjectsSection = () => {
    const props = getProjectProps();

    return (
        <Section sectionName={props.sectionName}>
            <CardList {...getProjectCardListProps()} />
        </Section>
    );
};
ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;
