

const white: string = '#fff';
const white5p: string = 'rgb(255 255 255 / 5%)';
const white20p: string = 'rgb(255 255 255 / 20%)';
const white65p: string = 'rgb(255 255 255 / 65%)';
const white85p: string = 'rgb(255 255 255 / 85%)';

//https://coolors.co/7400b8-6930c3-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb
const purple: string = '#7400b8';
const frenchViolet: string = '#6930c3';
const slateBlue: string = '#5e60ce';
const tuftsBlue: string = '#5390d9';
const blueJeans: string = '#4ea8de';
const vividSkyBlue: string = '#48bfe3';
const skyBlueCrayola: string = '#56cfe1';
const mediumTurquoise: string = '#64dfdf';
const turquoise: string = '#72efdd';
const aquamarine: string = '#80ffdb';

export enum ColorType {
    name = 'name',
    position = 'position',
    bodyText = 'bodyText',
    icon = 'icon',
    background = 'background',
    wrapperBorder = 'wrapperBorder',
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
    [ColorType.name]: string;
    [ColorType.position]: string;
    [ColorType.bodyText]: string;
    [ColorType.icon]: string;
    [ColorType.background]: string;
    [ColorType.wrapperBorder]: string;
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
    [ColorType.name]: white,
    [ColorType.position]: purple,
    [ColorType.bodyText]: purple,
    [ColorType.icon]: white,
    [ColorType.background]: `linear-gradient(45deg, ${purple}, ${frenchViolet}, ${slateBlue}, ${tuftsBlue}, ${blueJeans}, ${vividSkyBlue}, ${skyBlueCrayola}, ${mediumTurquoise}, ${turquoise}, ${aquamarine}) fixed`,
    [ColorType.wrapperBorder]: white65p,
    [ColorType.sectionName]: white,
    [ColorType.cardBackground]: `linear-gradient(190deg, ${white20p}, ${white5p})`,
    [ColorType.cardTitle]: white,
    [ColorType.cardSubtitle]: white65p,
    [ColorType.cardCaption]: white65p,
    [ColorType.cardContent]: white,
    [ColorType.tableBackground]: purple,
    [ColorType.tableMenuBackground]: white,
    [ColorType.tableMenuTitle]: purple,
    [ColorType.tableMenuSubtitle]: purple,
    [ColorType.tableContentText]: purple,
    [ColorType.tableContentBackground]: white,
};

let self: ThemeProps = defaultTheme;

export const AddTheme = () => {
    self = defaultTheme;
};

export const getColor = (type: ColorType): string => self[type];
