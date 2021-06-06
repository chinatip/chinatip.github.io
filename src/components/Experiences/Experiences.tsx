import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Desktop, Mobile } from '../../utils/BreakpointHelper';
import ExperienceTable from './ExperienceTable';
import { ExperienceSection } from './../../models/Data.d';

const Wrapper = styled(Grid)`
    padding: 20px 0;
`;


const Experiences = (props: ExperienceSection) => {
    const renderTable = () => (
        <Desktop>
            <ExperienceTable {...props} />
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
            <Typography variant="h6">
                {props.sectionName}
            </Typography>
            {renderContent()}
        </Wrapper>
    );
};

export default Experiences;
