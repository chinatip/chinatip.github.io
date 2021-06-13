const mint: string = '#c7ffd8';
const deepBlue: string = '#1f3373';
const blue: string = '#367cff';
const grey: string = '#f8f9fb';
const greyBlue: string = '#c0c4d4';
const fadedBlue: string = '#98ded9';
const white: string = '#fff';

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
    title = 'title',
    subtitle = 'subtitle',
    bodyText = 'bodyText',
    background = 'background',
    wrapperBackground = 'wrapperBackground',
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
    [ColorType.wrapperBackground]: string;
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
    [ColorType.background]: `linear-gradient(45deg, ${purple}, ${frenchViolet}, ${slateBlue}, ${tuftsBlue}, ${blueJeans}, ${vividSkyBlue}, ${skyBlueCrayola}, ${mediumTurquoise}, ${turquoise}, ${aquamarine}) fixed`,
    [ColorType.wrapperBackground]: 'rgb(255 255 255 / 66%)',
    [ColorType.sectionName]: white,
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
