interface IPath {
  id: number,
  url: string
}

interface IPaths {
  [key: string]: IPath
}

const paths: IPaths = {
  home: {
    id: 0,
    url: '/',
  },
  calculator: {
    id: 1,
    url: '/',
  },
  help: {
    id: 2,
    url: '/help',
  },
  faq: {
    id: 3,
    url: '/faq',
  },
  contacts: {
    id: 4,
    url: '/contacts',
  },
  settings: {
    id: 5,
    url: '/settings',
  },
  exit: {
    id: 6,
    url: '/exit',
  },
};

export default paths;
