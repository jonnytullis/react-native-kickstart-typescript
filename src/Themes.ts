const BRAND_COLOR = '#c90000';

type ColorGroup = {
  primary: string;
};

export type Theme = {
  colors: {
    primary: string;
    background: ColorGroup;
    border: ColorGroup;
    card: ColorGroup;
    notification: ColorGroup;
    text: ColorGroup;
  };
  isDark: boolean;
};

export const light = {
  colors: {
    primary: BRAND_COLOR,
    background: {
      primary: '#f2f2f2',
    },
    border: {
      primary: '#d8d8d8',
    },
    card: {
      primary: '#ffffff',
    },
    notification: {
      primary: '#ff3b30',
    },
    text: {
      primary: '#1c1c1e',
    },
  },
  isDark: false,
};

export const dark = {
  colors: {
    primary: BRAND_COLOR,
    background: {
      primary: '#111',
    },
    border: {
      primary: '#272729',
    },
    card: {
      primary: '#181818',
    },
    notification: {
      primary: '#ff453a',
    },
    text: {
      primary: '#e5e5e7',
    },
  },
  isDark: true,
};
