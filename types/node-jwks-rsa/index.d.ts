// Type definitions for node-jwks-rsa
// Project: https://github.com/auth0/node-jwks-rsa
// Definitions by: Bruno Krebs <https://github.com/brunokrebs/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class JwksClient {
  constructor(options: Options);

  getKeys: (cb: (err: Error, keys: Jwk[]) => any) => any;
  getSigningKeys: (cb: (err: Error, keys: Jwk[]) => any) => any;
  getSigningKey: (kid: string, cb: (err: Error, key: Jwk) => any) => any;
}

export interface Jwk {
  kid: string;
  nbf?: number;
  publicKey?: string;
  rsaPublicKey?: string;
}

export interface Options {
  jwksUri: string;
  rateLimit?: boolean;
  cache?: boolean;
  cacheMaxEntries?: number;
  cacheMaxAge?: number;
  jwksRequestsPerMinute?: number;
  strictSsl?: boolean;
  handleSigningKeyError?(err: Error, cb: (err: Error) => void): any;
}
