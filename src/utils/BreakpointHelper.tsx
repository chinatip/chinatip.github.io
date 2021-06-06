import { Hidden } from "@material-ui/core"

export const Desktop = ({ children }: any) => (
    <Hidden smDown>
        {children}
    </Hidden>
);

export const Mobile = ({ children }: any) => (
    <Hidden mdUp>
        {children}
    </Hidden>
);
