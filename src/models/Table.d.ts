export interface TableProps {
    rows: Row[];
}

export interface Row {
    title: string;
    subtitle: string | React.ReactNode;
    detail: string | React.ReactNode;
}
