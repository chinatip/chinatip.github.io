const mint: string = '#c7ffd8';
const deepBlue: string = '#1f3373';
const blue: string = '#367cff';
const grey: string = '#f8f9fb';
const greyBlue: string = '#c0c4d4';
const fadedBlue: string = '#98ded9';
const white: string = '#fff';

export enum ColorType {
    title = 'title',
    subtitle = 'subtitle',
    bodyText = 'bodyText',
    background = 'background',
    sectionName = 'sectionName',
    cardBackground = 'cardBackground',
    cardTitle = 'cardTitle',
    cardSubtitle = 'cardSubtitle',
    cardCaption = 'cardCaption',
    cardContent = 'cardContent',
    tableBackground = 'tableBackground',
    tableMenuBackground = 'tableMenuBackground',
    tableMenuTitle = 'tableMenuTitle',
    tableMenuSubtitle = 'tableMenuSubtitle',
    tableContentBackground = 'tableContentBackground',
    tableContentText = 'tableContentText',
}

interface ThemeProps {
    [ColorType.title]: string;
    [ColorType.subtitle]: string;
    [ColorType.bodyText]: string;
    [ColorType.background]: string;
    [ColorType.sectionName]: string;
    [ColorType.cardBackground]: string;
    [ColorType.cardTitle]: string;
    [ColorType.cardSubtitle]: string;
    [ColorType.cardCaption]: string;
    [ColorType.cardContent]: string;
    [ColorType.tableBackground]: string;
    [ColorType.tableMenuBackground]: string;
    [ColorType.tableMenuTitle]: string;
    [ColorType.tableMenuSubtitle]: string;
    [ColorType.tableContentText]: string;
    [ColorType.tableContentBackground]: string;
}

const defaultTheme: ThemeProps = {
    [ColorType.title]: deepBlue,
    [ColorType.subtitle]: deepBlue,
    [ColorType.bodyText]: deepBlue,
    [ColorType.background]: white,
    [ColorType.sectionName]: deepBlue,
    [ColorType.cardBackground]: white,
    [ColorType.cardTitle]: deepBlue,
    [ColorType.cardSubtitle]: deepBlue,
    [ColorType.cardCaption]: greyBlue,
    [ColorType.cardContent]: deepBlue,
    [ColorType.tableBackground]: grey,
    [ColorType.tableMenuBackground]: white,
    [ColorType.tableMenuTitle]: deepBlue,
    [ColorType.tableMenuSubtitle]: greyBlue,
    [ColorType.tableContentText]: deepBlue,
    [ColorType.tableContentBackground]: white,
};

let self: ThemeProps = defaultTheme;

export const AddTheme = () => {
    self = defaultTheme;
};

export const getColor = (type: ColorType): string => self[type];
