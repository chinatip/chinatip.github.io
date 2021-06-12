import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled(Grid)`
    padding: 20px 0;
`;

export const Section = ({ sectionName, children }: any) => (
    <Wrapper item container>
        <Typography variant="h6">{sectionName}</Typography>
        {children}
    </Wrapper>
);