import { getActivityList } from './ActivitySectionHelper';
import { getActivityProps } from '../../../utils/DataProvider';
import { Section } from './../SectionName';
import CardList from './../../common/CardList';

const ActivitySection = () => {
    const props = getActivityProps();
    
    return (
        <Section sectionName={props.sectionName}>
            <CardList {...getActivityList()} />
        </Section>
    )
};

ActivitySection.displayName = 'ActivitySection';
export default ActivitySection;