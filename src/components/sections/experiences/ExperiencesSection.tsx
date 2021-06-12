import Table from '../../common/Table';
import { getExperienceProps } from '../../../utils/DataProvider';
import { getExperienceTableProps } from './ExperienceListHelper';
import { Section } from './../SectionName';

const ExperiencesSection = () => {
    const props = getExperienceProps();

    return (
        <Section sectionName={props.sectionName}>
            <Table {...getExperienceTableProps()} />
        </Section>
    );
};

ExperiencesSection.displayName = 'ExperiencesSection';
export default ExperiencesSection;
