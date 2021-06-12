import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { ColorType, getColor } from './../../utils/ThemeProvider';

const Wrapper = styled(Grid)`
    padding: 20px 0;
`;

const Name = styled(Typography)`
    color: ${getColor(ColorType.sectionName)};
`;

export const Section = ({ sectionName, children }: any) => (
    <Wrapper item container>
        <Grid xs={12}>
            <Name variant="h6">{sectionName}</Name>
        </Grid>
        {children}
    </Wrapper>
);