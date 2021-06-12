import { getEducationList } from './EducationHelper';
import Card from './../../common/Card';
import { Section } from './../SectionName';
import { getEducationProps } from '../../../utils/DataProvider';

const EducationSection = () => {
    const props = getEducationProps();
    const list = getEducationList();
    
    return (
        <Section sectionName={props.sectionName}>
            {list.map(c => <Card {...c} />)}
        </Section>
    );
};

EducationSection.displayName = 'EducationSection';
export default EducationSection;