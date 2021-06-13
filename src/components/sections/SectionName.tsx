import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { ColorType, Sizing } from "../../utils/Constant";
import { getColor } from './../../utils/ThemeProvider';

const Wrapper = styled(Grid)`
    padding: ${Sizing.L} 0;
`;

const Name = styled(Typography)`
    color: ${getColor(ColorType.sectionName)};
`;

export const Section = ({ sectionName, children }: any) => (
    <Wrapper item container>
        <Grid xs={12}>
            <Name variant="h4">{sectionName}</Name>
        </Grid>
        {children}
    </Wrapper>
);