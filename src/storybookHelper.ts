import { ColumnSize, Spacings } from './types'

export const buttonType = {
  control: {
    type: 'select',
    options: ['button', 'submit', 'reset'],
  },
}
export const spacing: { control: string; options: Spacings[] } = {
  control: 'select',
  options: [
    'none',
    '3xs',
    '2xs',
    'xs',
    's',
    'm',
    'l',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
    '7xl',
  ],
}
export const flexGrow = {
  control: {
    type: 'select',
    options: ['1', '0'],
  },
}

export const flexDirection = {
  control: 'select',
  options: ['column', 'column-reverse', 'row', 'row-reverse'],
}

export const color = { control: 'color' }

export const alignItems = {
  control: 'select',
  options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
}
export const justifyContent = {
  control: 'select',
  options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
}
export const elevation = {
  control: {
    type: 'select',
    options: ['none', 'small', 'medium', 'large'],
  },
}

export const priority = {
  control: {
    type: 'select',
    options: ['primary', 'secondary', 'tertiary', 'outline'],
  },
}
export const weight = {
  control: {
    type: 'select',
    options: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800'],
  },
}
export const columnSize: { control: string; options: ColumnSize[] } = {
  control: 'select',
  options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
}
export const direction = {
  control: 'select',
  options: ['row', 'row-reverse', 'column', 'column-reverse'],
}
export const severity = {
  control: {
    type: 'select',
    options: ['success', 'warning', 'error', 'info'],
  },
}
export const textAlign = {
  control: {
    type: 'select',
    options: ['inherit', 'left', 'center', 'right', 'justify'],
  },
}
export const typographyVariants = {
  control: {
    type: 'select',
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'caption', 'body-text', 'body-text-special'],
  },
}

export const messagePositions = {
  control: {
    type: 'select',
    options: ['center', 'bottom-right', 'top-right', 'bottom-left', 'top-left'],
  },
}
export const inputType = {
  control: {
    type: 'select',
    options: ['text', 'number', 'password', 'date', 'datetime-local', 'email', 'tel', 'url'],
  },
}

// export const getColorsFromTokens = () => {
//   const colorArr = cssVarsFromObject(tokens.default)
//     .split('\n')
//     .filter((x) => x.includes('color'));

//   const colorVars = colorArr.reduce((acc, curr) => {
//     const [key, value] = curr.split(':');
//     console.log(curr, key, value);
//     return { ...acc, [key.trim()]: value.replace(';', '').trim() };
//   }, {});

//   return colorVars;
// };

// export const cssVarsFromObject = (obj: any, css = '', str = '-') => {
//   Object.entries(obj).forEach(([key, value]) => {
//     const newKey = `${str}-${key}`;
//     if (typeof value === 'object') {
//       css = cssVarsFromObject(value, css, newKey);
//     } else {
//       css += `  ${newKey}: ${typeof value === 'number' ? `${value}px` : value};\n`;
//     }
//   });
//   return css;
// };

export const splitAtIndex = (value: string, index: number): string[] => {
  return [value.substring(0, index), value.substring(index + 1)]
}

// const findDeepValue = (obj: any, path: any) => {
//   for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
//     obj = obj[path[i]];
//   }
//   return obj;
// };

// const checkForReference = (value: string) => {
//   if (value.includes('{')) {
//     const path = value.replace('{', '').replace('}', '');
//     const readValue = findDeepValue(figmaJson.global, path)?.value;
//     if (readValue) {
//       return readValue;
//     }
//   }

//   return value;
// };

// export const loopFigmaObject = (obj: any, css = '', str = '-') => {
//   Object.entries(obj).forEach(([key, value]) => {
//     const newKey = key !== 'value' ? `${str}-${key.replace(/\s+/g, '-').toLowerCase()}` : str;
//     if (typeof value === 'object' && key !== 'value') {
//       css = loopFigmaObject(value, css, newKey);
//     } else if (typeof value === 'object' && key === 'value') {
//       Object.values(value as any).forEach((val: string, idx) => {
//         const v = checkForReference(val);
//         css += `  ${newKey}-${Object.keys(value as any)[idx]}: ${!isNaN(v) ? `${v}px` : v};\n`;
//       });
//     } else if (key === 'value') {
//       const v = checkForReference(value as any);
//       css += `  ${newKey}: ${!isNaN(v as any) ? `${v}px` : v};\n`;
//     }
//   });
//   return css;
// };
