import {createTheme} from '@shopify/restyle';
import colors from './colors';
import spacing from './spacing';
import textVariants from './textVariants';
import inputVariants from './inputVariants';
import buttonVariants from './buttonVariants';

const theme = createTheme({
    colors,
    spacing,
    textVariants,
    inputVariants,
    buttonVariants
})

export type ThemeProps = typeof theme
export default theme