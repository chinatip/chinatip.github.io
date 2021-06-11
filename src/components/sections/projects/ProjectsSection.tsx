import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Table from '../../common/Table';
import { Desktop, Mobile } from '../../../utils/BreakpointHelper';
import { getProjectData } from '../../../utils/DataProvider';
import { getProjectTableProps } from './ProjectListHelper';

const Wrapper = styled(Grid)`
    padding: 20px 0;
`;


const ProjectsSection = () => {
    const props = getProjectData();

    const renderTable = () => (
        <Desktop>
            <Table {...getProjectTableProps()} />
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

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;
