;
//asignar un nombre y versión al cache
const CACHE_NAME = 'HimnarioApp',
  urlsToCache = [
    './',
    './index.html',
    './css/style.css',
    './css/himnos.css',
    './css/porNombre.css',
    './css/porNumero.css',
    './css/boxicons.min.css',
    './js/script.js',
    './js/number.js',

    './js/jquery-3.6.0.js',

    './hymns/himno1.html',
    './hymns/himno2.html',
    './hymns/himno3.html',
    './hymns/himno4.html',
    './hymns/himno5.html',
    './hymns/himno6.html',
    './hymns/himno7.html',
    './hymns/himno8.html',
    './hymns/himno9.html',
    './hymns/himno10.html',
    './hymns/himno11.html',
    './hymns/himno12.html',
    './hymns/himno13.html',
    './hymns/himno14.html',
    './hymns/himno15.html',
    './hymns/himno16.html',
    './hymns/himno17.html',
    './hymns/himno18.html',
    './hymns/himno19.html',
    './hymns/himno20.html',
    './hymns/himno21.html',
    './hymns/himno22.html',
    './hymns/himno23.html',
    './hymns/himno24.html',
    './hymns/himno25.html',
    './hymns/himno26.html',
    './hymns/himno27.html',
    './hymns/himno28.html',
    './hymns/himno29.html',
    './hymns/himno30.html',
    './hymns/himno31.html',
    './hymns/himno32.html',
    './hymns/himno33.html',
    './hymns/himno34.html',
    './hymns/himno35.html',
    './hymns/himno36.html',
    './hymns/himno37.html',
    './hymns/himno38.html',
    './hymns/himno39.html',
    './hymns/himno40.html',
    './hymns/himno41.html',
    './hymns/himno42.html',
    './hymns/himno43.html',
    './hymns/himno44.html',
    './hymns/himno45.html',
    './hymns/himno46.html',
    './hymns/himno47.html',
    './hymns/himno48.html',
    './hymns/himno49.html',
    './hymns/himno50.html',
    './hymns/himno51.html',
    './hymns/himno52.html',
    './hymns/himno53.html',
    './hymns/himno54.html',
    './hymns/himno55.html',
    './hymns/himno56.html',
    './hymns/himno57.html',
    './hymns/himno58.html',
    './hymns/himno59.html',
    './hymns/himno60.html',
    './hymns/himno61.html',
    './hymns/himno62.html',
    './hymns/himno63.html',
    './hymns/himno64.html',
    './hymns/himno65.html',
    './hymns/himno66.html',
    './hymns/himno67.html',
    './hymns/himno68.html',
    './hymns/himno69.html',
    './hymns/himno70.html',
    './hymns/himno71.html',
    './hymns/himno72.html',
    './hymns/himno73.html',
    './hymns/himno74.html',
    './hymns/himno75.html',
    './hymns/himno76.html',
    './hymns/himno77.html',
    './hymns/himno78.html',
    './hymns/himno79.html',
    './hymns/himno80.html',
    './hymns/himno81.html',
    './hymns/himno82.html',
    './hymns/himno83.html',
    './hymns/himno84.html',
    './hymns/himno85.html',
    './hymns/himno86.html',
    './hymns/himno87.html',
    './hymns/himno88.html',
    './hymns/himno89.html',
    './hymns/himno90.html',
    './hymns/himno91.html',
    './hymns/himno92.html',
    './hymns/himno93.html',
    './hymns/himno94.html',
    './hymns/himno95.html',
    './hymns/himno96.html',
    './hymns/himno97.html',
    './hymns/himno98.html',
    './hymns/himno99.html',
    './hymns/himno100.html',

    './buscarPorNombre.html',
    './buscarPorNumero.html',


    './regist_serviceWorker.js',
    './pwa/images/icons/icon-512x512.png',
    './pwa/images/icons/icon-72x72.png',

    './img/icon.png',
    './img/imagen4.jpg',
    './img/logonavbar.png',

  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})
