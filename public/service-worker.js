if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,a,n)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const f={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return i;case"module":return f;default:return e(c)}})).then(e=>{const c=n(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/KsMo2whRnSNBKv-4kSMND/_buildManifest.js",revision:"08733fe1804ef191d00a155754f9915c"},{url:"/_next/static/KsMo2whRnSNBKv-4kSMND/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/813ab55dea8c2def8673dbbc939483775321fa01.56d7bf4a38236d26e1bb.js",revision:"61366c0553af5d446014b92ef45c3c1f"},{url:"/_next/static/chunks/c9787b2e67d04485ea556b79e503c7f6cc1ff4d5.5c19f3f3afc02498cc1b.js",revision:"f66845fc6275854a41c00ae17ee66403"},{url:"/_next/static/chunks/commons.7c377ea91159d6c0a6c9.js",revision:"fb4a48b5294897acc1206c45b1d23957"},{url:"/_next/static/chunks/framework.9ec1f7868b3e9d138cdd.js",revision:"d0fde0e086852f5cc2882d8830400a6e"},{url:"/_next/static/chunks/main-bb8265ba8394970bf5b9.js",revision:"ac86e34a450cb959e361579ac756ccdc"},{url:"/_next/static/chunks/pages/_app-11cbae66b5e7c92f0d80.js",revision:"2a9b0bac35f42f068ffcb73bcf06cb66"},{url:"/_next/static/chunks/pages/_error-c8f6dc44d9034427b900.js",revision:"204ff9f631baed2d4c511033cc294e90"},{url:"/_next/static/chunks/pages/about-fc5d276daf01bcd4859b.js",revision:"e5aa3480808da0d0b93f6c92da26e272"},{url:"/_next/static/chunks/pages/blog-d995028340438be5f90b.js",revision:"9325e281a7b201e48db3bfc62b5642cb"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-bcfe2e3a0fcd5d043002.js",revision:"dcbde772f88630bae60a93220af9754b"},{url:"/_next/static/chunks/pages/index-e8f40e024afaa9697523.js",revision:"bced1088246a6741f6b7222bb69ac729"},{url:"/_next/static/chunks/pages/newsletter-8e77cc6f0635ec17ab82.js",revision:"3728f38484178b7ce6c3860894320d30"},{url:"/_next/static/chunks/pages/photos-9729d89c9425bd9a5308.js",revision:"59c49b96da0201851af791d4445bef7e"},{url:"/_next/static/chunks/pages/uses-f21793ff004e3d34abde.js",revision:"e0ddc38bb8217a33d368a4c74d9a1032"},{url:"/_next/static/chunks/polyfills-a578c3097b36509e7ccf.js",revision:"d5b734fe8746ef0108c50c6bc25ce4c6"},{url:"/_next/static/chunks/styles.831ae605ff610858381c.js",revision:"cc624450879b757f25fcdca85628091d"},{url:"/_next/static/chunks/webpack-22eaaa575d3c455933b4.js",revision:"2019297a9ccffe0e261600bad1b1f98a"},{url:"/_next/static/css/styles.6bd64bf2.chunk.css",revision:"742317c7310ee050f659de4fc6296e4b"},{url:"/bg-pattern.png",revision:"6a0daf12ef7439f5b3e784bb64869eb4"},{url:"/colorTheme.js",revision:"3fd6280b8103265fd41b48e1da54306a"},{url:"/favicon/blue-theme/android-icon-144x144.png",revision:"b557252bf3a80d380fabd86e39a68e26"},{url:"/favicon/blue-theme/android-icon-192x192.png",revision:"84eccdcaf6221c295427444254646233"},{url:"/favicon/blue-theme/android-icon-36x36.png",revision:"81265dfe10aae4ef0442dab3feca9a81"},{url:"/favicon/blue-theme/android-icon-48x48.png",revision:"e63fc525631e07fd425ef5901bec63d5"},{url:"/favicon/blue-theme/android-icon-72x72.png",revision:"b9e8f24752c5d7cc70c3336517e299ba"},{url:"/favicon/blue-theme/android-icon-96x96.png",revision:"bf041ce75477afe4aa75a9266be6ded7"},{url:"/favicon/blue-theme/apple-icon-114x114.png",revision:"5b0d00c9e4a13b3b26254e112dd26748"},{url:"/favicon/blue-theme/apple-icon-120x120.png",revision:"230ce6215f7640e7e58282f4f395f022"},{url:"/favicon/blue-theme/apple-icon-144x144.png",revision:"b557252bf3a80d380fabd86e39a68e26"},{url:"/favicon/blue-theme/apple-icon-152x152.png",revision:"8d88dd6540cfaba6d79bd4582fe363f7"},{url:"/favicon/blue-theme/apple-icon-180x180.png",revision:"330f2ffad088e928832a3bb569497845"},{url:"/favicon/blue-theme/apple-icon-57x57.png",revision:"43dfdc417db9d39a72c13e5273f4fbcc"},{url:"/favicon/blue-theme/apple-icon-60x60.png",revision:"e5922ca49e798f50b413bf422bcdd10b"},{url:"/favicon/blue-theme/apple-icon-72x72.png",revision:"b9e8f24752c5d7cc70c3336517e299ba"},{url:"/favicon/blue-theme/apple-icon-76x76.png",revision:"66210bc40cd90e50853c36548e1b3061"},{url:"/favicon/blue-theme/apple-icon-precomposed.png",revision:"55fb38aafe422cf7c5191bed30336f0c"},{url:"/favicon/blue-theme/apple-icon.png",revision:"55fb38aafe422cf7c5191bed30336f0c"},{url:"/favicon/blue-theme/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon/blue-theme/favicon-16x16.png",revision:"8d7270110a6c7ee6c85a4acdff03849e"},{url:"/favicon/blue-theme/favicon-32x32.png",revision:"3fb8068ab6e2c059d1f8ce99fa55d7c9"},{url:"/favicon/blue-theme/favicon-96x96.png",revision:"bf041ce75477afe4aa75a9266be6ded7"},{url:"/favicon/blue-theme/favicon.ico",revision:"f3a06d2b1845efe88d3ccca45d9bd976"},{url:"/favicon/blue-theme/logo.png",revision:"d26a04b01e560767960dabbaf1beee52"},{url:"/favicon/blue-theme/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/favicon/blue-theme/ms-icon-144x144.png",revision:"b557252bf3a80d380fabd86e39a68e26"},{url:"/favicon/blue-theme/ms-icon-150x150.png",revision:"8be52a7c6ba9106d6e27bf2207be4f62"},{url:"/favicon/blue-theme/ms-icon-310x310.png",revision:"1bf7906bcd64fa7c6dccba755077d23d"},{url:"/favicon/blue-theme/ms-icon-70x70.png",revision:"1c1a3759bf8cecb12c75a4585efa3c90"},{url:"/favicon/dark-theme/android-icon-144x144.png",revision:"843e6001cf968c98e2aa1ff9a944378d"},{url:"/favicon/dark-theme/android-icon-192x192.png",revision:"a4ba9eb5a46bd060da31393f2df7af67"},{url:"/favicon/dark-theme/android-icon-36x36.png",revision:"b5c5127e1e4893f47cdb99cf6ce37f2e"},{url:"/favicon/dark-theme/android-icon-48x48.png",revision:"a00295ff623da0f363b62731d4b5259e"},{url:"/favicon/dark-theme/android-icon-72x72.png",revision:"136e07f2bb650d4965149a0ccd658f8b"},{url:"/favicon/dark-theme/android-icon-96x96.png",revision:"35e0c743dfe314d6039a3f938ca97964"},{url:"/favicon/dark-theme/apple-icon-114x114.png",revision:"d780a36e60a3d9069d4c4067441d1130"},{url:"/favicon/dark-theme/apple-icon-120x120.png",revision:"a911a7ce4b20a0fc84cfcac944166a29"},{url:"/favicon/dark-theme/apple-icon-144x144.png",revision:"843e6001cf968c98e2aa1ff9a944378d"},{url:"/favicon/dark-theme/apple-icon-152x152.png",revision:"313b980096c26e2fad2f161cda6bc7cf"},{url:"/favicon/dark-theme/apple-icon-180x180.png",revision:"500edf8646d8390db23562325a8d7021"},{url:"/favicon/dark-theme/apple-icon-57x57.png",revision:"a65bb795d49dce286fe84743d9a215c7"},{url:"/favicon/dark-theme/apple-icon-60x60.png",revision:"71c957d4fc04f338baa5c0844b78b792"},{url:"/favicon/dark-theme/apple-icon-72x72.png",revision:"136e07f2bb650d4965149a0ccd658f8b"},{url:"/favicon/dark-theme/apple-icon-76x76.png",revision:"309885a3fe411aa782b06cff81bdf50e"},{url:"/favicon/dark-theme/apple-icon-precomposed.png",revision:"74405241f4b3e9634d54f5318080702b"},{url:"/favicon/dark-theme/apple-icon.png",revision:"74405241f4b3e9634d54f5318080702b"},{url:"/favicon/dark-theme/browserconfig.xml",revision:"88b7af6779f04980f44e82f364eb5ae7"},{url:"/favicon/dark-theme/favicon-16x16.png",revision:"789276114b6c726becd191c6b470b87c"},{url:"/favicon/dark-theme/favicon-32x32.png",revision:"866f102bfb990e1875565c384703a717"},{url:"/favicon/dark-theme/favicon-96x96.png",revision:"35e0c743dfe314d6039a3f938ca97964"},{url:"/favicon/dark-theme/favicon.ico",revision:"b9eb5949f785fc4630dd308fb4696982"},{url:"/favicon/dark-theme/logo.jpg",revision:"602004bd4199af30590aa703bf2c1d18"},{url:"/favicon/dark-theme/logo.png",revision:"01f218c615c87c84e803b7c3af0f099d"},{url:"/favicon/dark-theme/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/favicon/dark-theme/ms-icon-144x144.png",revision:"843e6001cf968c98e2aa1ff9a944378d"},{url:"/favicon/dark-theme/ms-icon-150x150.png",revision:"9780797714e3190e23d7bb92a6ba4c18"},{url:"/favicon/dark-theme/ms-icon-310x310.png",revision:"1395f2efc255d55eeeb8348b23284822"},{url:"/favicon/dark-theme/ms-icon-70x70.png",revision:"71e06387a94b92598bf1abe8b41084a9"},{url:"/favicon/light-theme/android-icon-144x144.png",revision:"e0041860eaed690d08a02f7acf4dc3b5"},{url:"/favicon/light-theme/android-icon-192x192.png",revision:"bedc68067e31e32dc6cea8d4b004716c"},{url:"/favicon/light-theme/android-icon-36x36.png",revision:"f8f43e1ddfef1df056cca279076431d2"},{url:"/favicon/light-theme/android-icon-48x48.png",revision:"21ab877edd8fdd8465a1f260540caafa"},{url:"/favicon/light-theme/android-icon-72x72.png",revision:"8cbf645f9e1369506f991f2b8aa45f0d"},{url:"/favicon/light-theme/android-icon-96x96.png",revision:"5a5f68f19c9e062ff35374b30c99459a"},{url:"/favicon/light-theme/apple-icon-114x114.png",revision:"3b399f8d100a6f73d243afe6762cba18"},{url:"/favicon/light-theme/apple-icon-120x120.png",revision:"dec71ac523c6bf7e056df021f090e6d3"},{url:"/favicon/light-theme/apple-icon-144x144.png",revision:"e0041860eaed690d08a02f7acf4dc3b5"},{url:"/favicon/light-theme/apple-icon-152x152.png",revision:"3028df63e64d09d2494dd9f2fb892ae9"},{url:"/favicon/light-theme/apple-icon-180x180.png",revision:"473fcdb8fc273bc7a56040655eb0d45a"},{url:"/favicon/light-theme/apple-icon-57x57.png",revision:"82415c03853a3b828d4c5e382010dff4"},{url:"/favicon/light-theme/apple-icon-60x60.png",revision:"02dd18114d04092086986bbd546246ac"},{url:"/favicon/light-theme/apple-icon-72x72.png",revision:"8cbf645f9e1369506f991f2b8aa45f0d"},{url:"/favicon/light-theme/apple-icon-76x76.png",revision:"793a7e88ed1473e31fb7060ee638d374"},{url:"/favicon/light-theme/apple-icon-precomposed.png",revision:"7425cb54cf37e0d2165709ecacf8743f"},{url:"/favicon/light-theme/apple-icon.png",revision:"7425cb54cf37e0d2165709ecacf8743f"},{url:"/favicon/light-theme/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon/light-theme/favicon-16x16.png",revision:"c10f6cada21fb60fbebb9cc079fa1e58"},{url:"/favicon/light-theme/favicon-32x32.png",revision:"4150ea0c95b84b190d9e5f6a07694ee0"},{url:"/favicon/light-theme/favicon-96x96.png",revision:"5a5f68f19c9e062ff35374b30c99459a"},{url:"/favicon/light-theme/favicon.ico",revision:"d59f597dd4e9d1486c40b0bb3c54afd0"},{url:"/favicon/light-theme/logo.png",revision:"7350588a062d2be054ed9c5e9cefdb17"},{url:"/favicon/light-theme/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/favicon/light-theme/ms-icon-144x144.png",revision:"e0041860eaed690d08a02f7acf4dc3b5"},{url:"/favicon/light-theme/ms-icon-150x150.png",revision:"ba31989404a762f39d927bb368282fbb"},{url:"/favicon/light-theme/ms-icon-310x310.png",revision:"7b8ed5bd3b780839ab93da04637c6e70"},{url:"/favicon/light-theme/ms-icon-70x70.png",revision:"b0cbc1d3de2a1efac681f15efb83e2cc"},{url:"/favicon3.png",revision:"5480ceb474a07dc8e1c50bd06714b3ba"},{url:"/icons/CheckIcon.svg",revision:"ef3e7a5c3bf36c699bef8e38d34d100e"},{url:"/icons/gradient.svg",revision:"def83e67880a73ea868f55fa5c15a81b"},{url:"/icons/loading.svg",revision:"f4d407165a9ef2c0442420b2f43e4906"},{url:"/images/color-themes-with-react/color-change.gif",revision:"63601107c565ccff2f616fcf5df8163f"},{url:"/images/color-themes.jpg",revision:"a9e438e1c00df09fbdb744c23712a3cc"},{url:"/images/og-default.jpg",revision:"f446053c1bb91df8570d3d1aac4d4b11"},{url:"/images/og-smaller.jpg",revision:"e3c67c12c65ab4fded990774e9c2b92b"},{url:"/robots.txt",revision:"89901ae6e2febc64345ca0d78ef9741f"},{url:"/sitemap.xml",revision:"ea6a82f749a3d6cd59bcb53b9f40dfc0"},{url:"/sw.js",revision:"a62c21b7f594ed49bdfd5ee95c987941"},{url:"/sw.js.map",revision:"d7f2a2f727b57dfd8c475fe0f56e97f3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
