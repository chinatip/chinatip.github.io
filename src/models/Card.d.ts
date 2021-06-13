export interface CardListProps {
    list: CardProps[];
    alignment?: 'horizontal' | 'vertical';
}

export interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    tags?: string[];
    links?: string[];
    content?: string[];
    alignment?: 'horizontal' | 'vertical';
}
