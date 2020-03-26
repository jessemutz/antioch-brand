const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fdfbf8',
    heading: '#3A2D40',
    text: '#271a2d',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#2376FF',
    sidebar: '#f3e9e2',
    sidebarTitle: '#e3d9d2',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#271a2d',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#211924',
    link: '#1fd3e6',
    sidebar: '#211528',
    sidebarTitle: '#392741',
  },
};

export { lightTheme, darkTheme };
