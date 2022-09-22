const cacheName = 'cache_v1.0.3'
self.addEventListener('install', async (event) => { // 主要用以缓存内容
  console.log('install')

  // 缓存内容
  const cache = await caches.open(cacheName)
  await cache.addAll([
    '/www/github-zhouhuafei/hello-wrold_service-worker/',
    '/www/github-zhouhuafei/hello-wrold_service-worker/index.css'
  ])

  await self.skipWaiting()
})
self.addEventListener('activate', async (event) => { // 主要用以清除旧的缓存
  console.log('activate')

  // cacheName改变进而清除旧的缓存
  const keys = await caches.keys()
  keys.forEach(key => {
    if (key !== cacheName) {
      caches.delete(key)
    }
  })

  await self.clients.claim()
})
