import Grid from '@material-ui/core/Grid';
import Profile from './Profile';
import IntroAndContact from './IntroAndContact';
import styled from 'styled-components';

const Wrapper = styled(Grid)`
    padding-top: 60px;
    overflow: auto;
`;

const AboutMeSection = () => {
    return (
        <Wrapper
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            <Profile />
            <IntroAndContact />
        </Wrapper>
    );
};

AboutMeSection.displayName = 'AboutMeSection';
export default AboutMeSection;