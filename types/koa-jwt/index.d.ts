// Type definitions for koa-jwt 3.2
// Project: https://github.com/koajs/jwt
// Definitions by: Bruno Krebs <https://github.com/brunokrebs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "koa-jwt" {
    import Koa = require("koa");
    import * as JwksRsa from "jwks-rsa";

    function KoaJwt(options: KoaJwt.Options): Koa.Middleware;

    namespace KoaJwt {
        interface Options {
            secret: string | Buffer | JwksRsa.JwksClient;
            key?: string;
            getToken?(opts: Options): string;
            passthrough?: boolean;
            cookie?: string;
            audience?: string;
            issuer?: string;
            debug?: boolean;
        }

    }

    export = KoaJwt;
}
