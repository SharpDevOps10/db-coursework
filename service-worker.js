/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "051893989d557bc6c64f0c4806d56de9"
  },
  {
    "url": "assets/css/0.styles.c9f6dee4.css",
    "revision": "47007e9d5e66f773558a07f44d233ea5"
  },
  {
    "url": "assets/img/img_1.934aa295.png",
    "revision": "934aa295802d8894dc68a954b69fe6da"
  },
  {
    "url": "assets/img/img_1.950232a8.png",
    "revision": "950232a8ac1b70137dc20e63f3f6f733"
  },
  {
    "url": "assets/img/img_10.17ff2079.png",
    "revision": "17ff20790b949b63e04eb02edb06861b"
  },
  {
    "url": "assets/img/img_2.2bf6b8fb.png",
    "revision": "2bf6b8fb588e0f83c50be838d36b0a0a"
  },
  {
    "url": "assets/img/img_2.94773be4.png",
    "revision": "94773be44af8d90afccbee5794abe540"
  },
  {
    "url": "assets/img/img_3.0d789056.png",
    "revision": "0d789056f30d958a40ee9602106ec92f"
  },
  {
    "url": "assets/img/img_3.240819a2.png",
    "revision": "240819a2dfaef5355d6e29d6ea456981"
  },
  {
    "url": "assets/img/img_4.8b9a9d89.png",
    "revision": "8b9a9d89ab29e13ab381b4e57958b833"
  },
  {
    "url": "assets/img/img_5.22a042e7.png",
    "revision": "22a042e78c4dd693429b7d54236a0726"
  },
  {
    "url": "assets/img/img_5.ad106572.png",
    "revision": "ad106572df796709f91347c2308092fe"
  },
  {
    "url": "assets/img/img_6.0dffcfcd.png",
    "revision": "0dffcfcd61409d5deb0982120ea69d27"
  },
  {
    "url": "assets/img/img_6.b8281e11.png",
    "revision": "b8281e11a2a008a56832dc0265b16847"
  },
  {
    "url": "assets/img/img_7.35287db7.png",
    "revision": "35287db737d9bdb59690c22f90170136"
  },
  {
    "url": "assets/img/img_7.d24bc315.png",
    "revision": "d24bc315d81a20d23b2f932f6d00a72f"
  },
  {
    "url": "assets/img/img_8.01807c76.png",
    "revision": "01807c76d679b735f416365aaafbd999"
  },
  {
    "url": "assets/img/img_9.f3f65bea.png",
    "revision": "f3f65bea1e3dea78a2c7c4b347bf415e"
  },
  {
    "url": "assets/img/img.07eb6dbc.png",
    "revision": "07eb6dbc48b838a6d63eef4de9aeebf6"
  },
  {
    "url": "assets/img/img.b69abd11.png",
    "revision": "b69abd11e9e6b198914495424b4cd1ff"
  },
  {
    "url": "assets/img/relationalSchema.3a2a4fde.png",
    "revision": "3a2a4fdeff9e9713d6425c71e25a45b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e1315d2e.js",
    "revision": "e0cc3bba6b71ac24b3e2882476a4d3a6"
  },
  {
    "url": "assets/js/11.f4f9f3d4.js",
    "revision": "81ff4703ce92a5daf18886a450013171"
  },
  {
    "url": "assets/js/12.e567e794.js",
    "revision": "3bf6ab37902b60368ee69b03ccd2da68"
  },
  {
    "url": "assets/js/13.8762ce04.js",
    "revision": "0d842ae59a42eba126f312d119fbbe53"
  },
  {
    "url": "assets/js/14.919feb72.js",
    "revision": "11db7a49ce382a709e1cf0ccf67821b7"
  },
  {
    "url": "assets/js/15.bb4aee63.js",
    "revision": "93584e7089738c672fde86947e741ffb"
  },
  {
    "url": "assets/js/16.afe3289a.js",
    "revision": "0b4ecef2b2b11f65cb567c06c8e3588e"
  },
  {
    "url": "assets/js/17.5668d361.js",
    "revision": "3a0b26a32ea551ce0830e6756f94e1d7"
  },
  {
    "url": "assets/js/18.b18cbb70.js",
    "revision": "495bde45883f22ed5f13aa66eac83745"
  },
  {
    "url": "assets/js/19.eb4193a0.js",
    "revision": "79ba45c4b4a41fd50e6295bdd54c7bb0"
  },
  {
    "url": "assets/js/2.49df3feb.js",
    "revision": "12bff251cab42e766f954575620ddc39"
  },
  {
    "url": "assets/js/20.4cdd4e92.js",
    "revision": "34117253371b87abaeed29cdf10d41da"
  },
  {
    "url": "assets/js/21.772e5c4c.js",
    "revision": "33379936e7edb74ae69e129c02ce6793"
  },
  {
    "url": "assets/js/22.d4f0465f.js",
    "revision": "19d3662b89e66eadb4af78d5eb860838"
  },
  {
    "url": "assets/js/23.30f17d06.js",
    "revision": "0196833a92cfd7947015f972a419858d"
  },
  {
    "url": "assets/js/24.5dc83088.js",
    "revision": "828aed2f4fe8b20a853174b181ea160a"
  },
  {
    "url": "assets/js/26.5cb5bd10.js",
    "revision": "8e1e3e5bde6b1481ca5b7ac091fece3c"
  },
  {
    "url": "assets/js/3.74cbfe17.js",
    "revision": "6cdf68563178312254698d17dc8c3e22"
  },
  {
    "url": "assets/js/4.cf2108c8.js",
    "revision": "16262c71d5cacf14b90de88b663e0d97"
  },
  {
    "url": "assets/js/5.4059656c.js",
    "revision": "bbff73e49ed75c932403e6e9505f9e88"
  },
  {
    "url": "assets/js/6.9b5add6c.js",
    "revision": "61b6b877affdb6442d5ec9c4dde7d8ed"
  },
  {
    "url": "assets/js/7.52f494d8.js",
    "revision": "fbf4aa3d7054bbe12f7f793050587b15"
  },
  {
    "url": "assets/js/8.d44cebe4.js",
    "revision": "ee91079c3c6c2568a7189a3307e947a3"
  },
  {
    "url": "assets/js/9.6a491c05.js",
    "revision": "c874a79c1dec29f6f49f3c507d3a07be"
  },
  {
    "url": "assets/js/app.baa117a5.js",
    "revision": "d04da5dd6f3724d4f0220222bfbc8463"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d5f52df1d89add54b7f25ae1abf599a7"
  },
  {
    "url": "design/index.html",
    "revision": "c8d0ec14913f69482f80727157893609"
  },
  {
    "url": "index.html",
    "revision": "cd05daf4f8975cd34559479ade589eb2"
  },
  {
    "url": "intro/index.html",
    "revision": "a5135e0456a77ef9da76cf0c33128a6e"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6fba6f856e5144f5e11e3f312258a18a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8768a2dbce7fe285939e9ad4cdbd66a6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "13d9783110f618bc46ab34a53e930dca"
  },
  {
    "url": "software/index.html",
    "revision": "a9d4ec5e03c76c67caf1a7bd0891433e"
  },
  {
    "url": "test/index.html",
    "revision": "8e20cfb96ba99c6a0012133dde332b52"
  },
  {
    "url": "use cases/index.html",
    "revision": "c6b15cf8ec827487e015d486742504cd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
