const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

export const pxToRem = () => {
  return `${(fontSize / htmlFontSize) * coef}rem`;
};
