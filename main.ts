addEventListener("fetch", (event) => {
  const response = new Response("my new deno is success 2 !", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
