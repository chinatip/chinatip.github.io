import { getEducationList } from './EducationHelper';
import { Section } from './../SectionName';
import { getEducationProps } from '../../../utils/DataProvider';
import CardList from './../../common/CardList';

const EducationSection = () => {
    const props = getEducationProps();
    
    return (
        <Section sectionName={props.sectionName}>
            <CardList {...getEducationList()} />
        </Section>
    );
};

EducationSection.displayName = 'EducationSection';
export default EducationSection;