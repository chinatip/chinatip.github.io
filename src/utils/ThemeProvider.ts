import { ColorType } from './Constant';

const white: string = '#fff';
const white5p: string = 'rgb(255 255 255 / 5%)';
const white20p: string = 'rgb(255 255 255 / 20%)';
const white65p: string = 'rgb(255 255 255 / 65%)';
const white85p: string = 'rgb(255 255 255 / 85%)';
const grey20p: string = 'rgb(188 188 188 / 20%)';

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
const aquamarine30p:string = 'rgb(128 255 219 / 30%)';

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
    [ColorType.tableMenuDescription]: string;
    [ColorType.tableMenuBorder]: string;
    [ColorType.tableContentText]: string;
    [ColorType.tableContentBackground]: string;
}

const gradientBackground = `linear-gradient(190deg, ${white20p}, ${white5p})`;
const gradientBackground2 = `linear-gradient(190deg, ${white20p} 10%, ${white5p} 30%)`;
const defaultTheme: ThemeProps = {
    [ColorType.name]: white,
    [ColorType.position]: purple,
    [ColorType.bodyText]: purple,
    [ColorType.icon]: white,
    [ColorType.background]: `linear-gradient(45deg, ${purple}, ${frenchViolet}, ${slateBlue}, ${tuftsBlue}, ${blueJeans}, ${vividSkyBlue}, ${skyBlueCrayola}, ${mediumTurquoise}, ${turquoise}, ${aquamarine}) fixed`,
    [ColorType.wrapperBorder]: white65p,
    [ColorType.sectionName]: white85p,
    [ColorType.cardBackground]: gradientBackground,
    [ColorType.cardTitle]: white,
    [ColorType.cardSubtitle]: white65p,
    [ColorType.cardCaption]: white65p,
    [ColorType.cardContent]: white,
    [ColorType.tableBackground]: gradientBackground,
    [ColorType.tableMenuBackground]: gradientBackground,
    [ColorType.tableMenuTitle]: white,
    [ColorType.tableMenuSubtitle]: frenchViolet,
    [ColorType.tableMenuDescription]: white65p,
    [ColorType.tableMenuBorder]: aquamarine30p,
    [ColorType.tableContentText]: white,
    [ColorType.tableContentBackground]: gradientBackground2,
};

let self: ThemeProps = defaultTheme;

export const AddTheme = () => {
    self = defaultTheme;
};

export const getColor = (type: ColorType): string => self[type];
