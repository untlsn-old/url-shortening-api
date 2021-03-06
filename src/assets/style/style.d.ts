import 'styled-components';

declare module 'styled-components' { // Add own themes (remember to copy it to theme.ts)
  export interface DefaultTheme {
    colors: {
      white: '#ffffff',
      black: '#000000',
      cyan: '#2acfcf',
      darkViolet: '#3b3054',
      red: '#f46262',
      gray: '#ececec',
      grayishViolet: '#9d99a6',
      veryDarkBlue: '#35323e',
      veryDarkViolet: '#232127',
    }
  }
}

