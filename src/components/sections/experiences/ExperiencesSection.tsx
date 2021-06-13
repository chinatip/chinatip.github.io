import { getExperienceProps } from '../../../utils/DataProvider';
import { getExperienceCardListProps } from './ExperienceListHelper';
import { Section } from './../SectionName';
import CardList from './../../common/CardList';

const ExperiencesSection = () => {
    const props = getExperienceProps();

    return (
        <Section sectionName={props.sectionName}>
            <CardList {...getExperienceCardListProps()} />
        </Section>
    );
};

ExperiencesSection.displayName = 'ExperiencesSection';
export default ExperiencesSection;
