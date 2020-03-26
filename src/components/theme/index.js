const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#f0efee',
    heading: '#072e43',
    text: '#292521',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#2376FF',
    sidebar: '#e1dedd',
    sidebarTitle: '#d1cecb',
    bg_pop: '#fff',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#041722',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#211924',
    link: '#1fd3e6',
    sidebar: '#072e43',
    sidebarTitle: '#0b4665',
    bg_pop: '#151211',
  },
};

export { lightTheme, darkTheme };
