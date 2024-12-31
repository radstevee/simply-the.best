import {defineMiddleware} from "astro/middleware";

export const onRequest = defineMiddleware((ctx, next) => {
    const host = ctx.url.host;
    const hostParts = host.split(".");
    const isUsingSubdomain = hostParts.length > 2;

    if (!isUsingSubdomain) {
        return next();
    }

    const subdomain = hostParts.slice(0, -2).join(".");
    const target = subdomain.replace("-is", "").replace("-are", "");

    console.log("Target: " + target);

    return next();
});
