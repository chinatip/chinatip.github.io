import Grid from '@material-ui/core/Grid';
import Profile from './Profile';
import IntroAndContact from './IntroAndContact';
import styled from 'styled-components';

const Wrapper = styled(Grid)`
    padding: 60px 0;
    overflow: auto;
`;

const AboutMe = () => {
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

export default AboutMe;