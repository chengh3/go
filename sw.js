jsproxy_config=x=>{
  __CONF__=x;
  console.log(x.assets_cdn);
  //importScripts(__FILE__=x.assets_cdn+'bundle.c33e24c5.js')
  importScripts('assets/bundle.c33e24c5.js')
};
importScripts('conf.js')
