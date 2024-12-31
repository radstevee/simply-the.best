import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((ctx, next) => {
    const host = ctx.url.host;
    const hostParts = host.split(".");
    const isUsingSubdomain = hostParts.length > 2;

    if (!isUsingSubdomain) {
        return next();
    }

    const subdomain = hostParts.slice(0, -2).join(".");
    const target = subdomain.replace("-is", "").replace("-are", "");

    return Response.redirect(new URL("https://simply-the.best/en/blog/" + target), 302);
});

