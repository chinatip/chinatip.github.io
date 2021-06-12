import { getActivityList } from './ActivitySectionHelper';
import Card from './../../common/Card';
import { getActivityProps } from '../../../utils/DataProvider';
import { Section } from './../SectionName';

const ActivitySection = () => {
    const props = getActivityProps();
    const list = getActivityList();
    
    return (
        <Section sectionName={props.sectionName}>
            {list.map(c => <Card {...c} />)}
        </Section>
    )
};

ActivitySection.displayName = 'ActivitySection';
export default ActivitySection;