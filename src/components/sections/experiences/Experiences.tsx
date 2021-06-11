import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Desktop, Mobile } from '../../../utils/BreakpointHelper';
import { getExperienceData } from '../../../utils/DataProvider';
import ExperienceTable from './ExperienceTable';

const Wrapper = styled(Grid)`
    padding: 20px 0;
`;


const Experiences = () => {
    const props = getExperienceData();

    const renderTable = () => (
        <Desktop>
            <ExperienceTable />
        </Desktop>
    );

    const renderList = () => (
        <Mobile>
            smup
        </Mobile>
    );

    const renderContent = () => (
        <>
            {renderList()}
            {renderTable()}
        </>
    );

    return (
        <Wrapper item container>
            <Typography variant="h6">{props.sectionName}</Typography>
            {renderContent()}
        </Wrapper>
    );
};

export default Experiences;
