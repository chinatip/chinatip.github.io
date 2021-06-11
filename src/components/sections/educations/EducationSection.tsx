import { getEducationList } from './EducationHelper';
import Card from './../../common/Card';

const EducationSection = () => {
    const list = getEducationList();
    
    return (
        <div>
            {list.map(c => <Card {...c} />)}
        </div>
    )
};

EducationSection.displayName = 'EducationSection';
export default EducationSection;