import { getActivityList } from './ActivitySectionHelper';
import Card from './../../common/Card';

const ActivitySection = () => {
    const list = getActivityList();
    
    return (
        <div>
            {list.map(c => <Card {...c} />)}
        </div>
    )
};

ActivitySection.displayName = 'ActivitySection';
export default ActivitySection;