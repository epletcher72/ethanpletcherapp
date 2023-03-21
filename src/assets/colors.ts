const white = '#FFFFFF';
const black = '#000000';

const transparent = 'transparent';

const darkGreyBackground = '#131313';

const hexToOpacity = (opacityHex: string) => {
  return parseInt(opacityHex, 16) / 255;
};
const opacityToHex = (opacity: number) => {
  return (opacity * 255).toString(16).substr(0, 2);
};
const opacity = (color?: string, opacity?: number) => {
  return `${color ?? '#FFFFFF'}${opacityToHex(opacity ?? 1)}`;
};

export {
  white,
  black,
  transparent,
  darkGreyBackground,
  hexToOpacity,
  opacityToHex,
  opacity,
};
