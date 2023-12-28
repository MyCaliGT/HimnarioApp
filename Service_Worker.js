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
