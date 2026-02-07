
export default {
  basePath: '/Sitio_Estructura_SHD',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
