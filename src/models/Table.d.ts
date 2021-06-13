export interface TableProps {
    rows: Row[];
}

export interface Row {
    title: string;
    subtitle: string;
    description?: string;
    detail?: string[];
    links?: string[];
}
