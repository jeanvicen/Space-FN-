/* ============================================================
   SPACEFN — SERVICE WORKER
   ============================================================
   Isso é o que faz o jogo:
   1) poder ser "instalado" como app (Chrome/Android/desktop mostra
      o prompt de instalar automaticamente quando os requisitos do
      manifest.json + este arquivo estão OK);
   2) funcionar offline depois da primeira visita.

   IMPORTANTE PRA VOCÊ (Jean): toda vez que subir uma mudança nova
   pro GitHub (nova nave, novo texto, correção de bug), troque o
   número da linha CACHE_VERSION abaixo (ex: 'v1' -> 'v2'). Isso
   força o navegador de quem já tem o app instalado a baixar a
   versão nova, em vez de continuar preso no cache antigo.
   ============================================================ */

const CACHE_VERSION = 'spacefn-v1';

const CORE_FILES = [
  './index.html',
  './admin.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

/* instala: baixa e guarda os arquivos essenciais no cache */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_FILES))
  );
  self.skipWaiting();
});

/* ativa: apaga caches de versões antigas (das trocas de CACHE_VERSION) */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.filter((n) => n !== CACHE_VERSION).map((n) => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

/* busca arquivos: tenta a rede primeiro (pra pegar admin.js atualizado
   o mais rápido possível); se não tiver internet, usa o que tem salvo. */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
