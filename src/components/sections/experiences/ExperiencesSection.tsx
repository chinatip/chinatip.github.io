import { getExperienceProps } from '../../../utils/DataProvider';
import { getExperienceTableProps } from './ExperienceListHelper';
import { Section } from './../SectionName';
import Table from './../../common/Table';

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
