export interface CardProps {
    title: string;
    subtitle: string;
    description?: string;
    tags?: string[];
    link?: string[];
    content?: string | JSX.Element;
}
