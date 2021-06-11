import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Section } from "../../models/Data";

const Wrapper = styled(Grid)`
    padding: 20px 0;
`;

export const withSectionName: React.FC<Section> = (props) => {
    return (
        <Wrapper item container>
            <Typography variant="h6">{props.sectionName}</Typography>
            {props.children}
        </Wrapper>
    );
};
