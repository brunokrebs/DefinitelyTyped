// Type definitions for jwks-rsa
// Project: https://github.com/auth0/jwks-rsa
// Definitions by: Bruno Krebs <https://github.com/brunokrebs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'jwks-rsa' {

    function JwksRsa(options: JwksRsa.Options): JwksRsa.JwksClient;

    namespace JwksRsa {
        class JwksClient {
            constructor(options: Options);

            getKeys: (cb: (err: Error, keys: Jwk[]) => any) => any;
            getSigningKeys: (cb: (err: Error, keys: Jwk[]) => any) => any;
            getSigningKey: (kid: string, cb: (err: Error, key: Jwk) => any) => any;
        }

        interface Jwk {
            kid: string;
            nbf?: number;
            publicKey?: string;
            rsaPublicKey?: string;
        }

        interface Options {
            jwksUri: string;
            rateLimit?: boolean;
            cache?: boolean;
            cacheMaxEntries?: number;
            cacheMaxAge?: number;
            jwksRequestsPerMinute?: number;
            strictSsl?: boolean;
            handleSigningKeyError?(err: Error, cb: (err: Error) => void): any;
        }
    }

    export = JwksRsa;
}
