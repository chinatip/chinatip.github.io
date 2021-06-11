import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Table from '../../common/Table';
import { Desktop, Mobile } from '../../../utils/BreakpointHelper';
import { getExperienceProps } from '../../../utils/DataProvider';
import { getExperienceTableProps } from './ExperienceListHelper';

const Wrapper = styled(Grid)`
    padding: 20px 0;
`;


const ExperiencesSection = () => {
    const props = getExperienceProps();

    const renderTable = () => (
        <Desktop>
            <Table {...getExperienceTableProps()} />
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

ExperiencesSection.displayName = 'ExperiencesSection';
export default ExperiencesSection;
