import redirects from "~/utils/redirects";

export default defineNuxtRouteMiddleware((to) => {
  const redirect = redirects[to.path];
  if (redirect) {
    return navigateTo(redirect.to, {
      redirectCode: redirect.code,
    });
  }
});
