export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const config = useRuntimeConfig();
  const reqUrl = config.public.VITE_APP_TRANSLATION_URL;
  const res = await $fetch<{
    code: 0;
    content: string;
  }>(reqUrl, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(query),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
});
