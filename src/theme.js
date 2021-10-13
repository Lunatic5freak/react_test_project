import {createMuiTheme} from '@material-ui/core/styles'
const fontSize = 14
const htmlFontSize = 16
const coef = fontSize / 14

export const theme = createMuiTheme({
    typography: {
        pxToRem: size=>`${(size/htmlFontSize)*coef}rem`
    }
})