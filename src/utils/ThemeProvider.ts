const mint: string = '#c7ffd8';
const blue: string = '#161d6f';
const grey: string = '#f6f6f6';
const ocean: string = '#98ded9';

export enum ColorType {
    sectionName = 'sectionName',
    cardBackground = 'cardBackground',
    cardTitle = 'cardTitle',
    cardSubtitle = 'cardSubtitle',
    cardCaption = 'cardCaption',
    cardContent = 'cardContent',
    title = 'title',
    subtitle = 'subtitle',
    bodyText = 'bodyText',
    caption = 'caption',
    background = 'background',
    tableBackground = 'tableBackground',
    tableMenuBackground = 'tableMenuBackground',
    tableMenuTitle = 'tableMenuTitle',
    tableMenuSubtitle = 'tableMenuSubtitle',
    tableContentBackground = 'tableContentBackground',
    tableContentText = 'tableContentText',
}

interface ThemeProps {
    [ColorType.sectionName]: string;
    [ColorType.cardBackground]: string;
    [ColorType.cardTitle]: string;
    [ColorType.cardSubtitle]: string;
    [ColorType.cardCaption]: string;
    [ColorType.cardContent]: string;
    [ColorType.title]: string;
    [ColorType.subtitle]: string;
    [ColorType.bodyText]: string;
    [ColorType.caption]: string;
    [ColorType.background]: string;
    [ColorType.tableBackground]: string;
    [ColorType.tableMenuBackground]: string;
    [ColorType.tableMenuTitle]: string;
    [ColorType.tableMenuSubtitle]: string;
    [ColorType.tableContentText]: string;
    [ColorType.tableContentBackground]: string;
}

const defaultTheme: ThemeProps = {
    [ColorType.sectionName]: ocean,
    [ColorType.cardBackground]: grey,
    [ColorType.cardTitle]: ocean,
    [ColorType.cardSubtitle]: blue,
    [ColorType.cardCaption]: ocean,
    [ColorType.cardContent]: blue,
    [ColorType.title]: blue,
    [ColorType.subtitle]: ocean,
    [ColorType.bodyText]: blue,
    [ColorType.caption]: grey,
    [ColorType.background]: grey,
    [ColorType.tableBackground]: mint,
    [ColorType.tableMenuBackground]: grey,
    [ColorType.tableMenuTitle]: blue,
    [ColorType.tableMenuSubtitle]: ocean,
    [ColorType.tableContentText]: blue,
    [ColorType.tableContentBackground]: ocean,
};

let self: ThemeProps = defaultTheme;

export const AddTheme = () => {
    self = defaultTheme;
};

export const getColor = (type: ColorType): string => self[type];