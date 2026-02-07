
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Sitio_Estructura_SHD/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23847, hash: '3204e9ab046e8e22bf70add389d1e668446df6bc466b8e6b636723f1124678b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17164, hash: '9865fd9e0fa7b9df5fd73be9343443b1afd26afbd510e6ae2ee9065281042127', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EQJCRPKV.css': {size: 8178, hash: 'RXkAjKRnurM', text: () => import('./assets-chunks/styles-EQJCRPKV_css.mjs').then(m => m.default)}
  },
};
