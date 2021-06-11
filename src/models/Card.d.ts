export interface CardProps {
    header?: CardHeader;
    content: string | JSX.Element;
}

interface CardHeader {
    title: string;
    subtitle: string;
    tags?: string[];
    link?: string[];
}
