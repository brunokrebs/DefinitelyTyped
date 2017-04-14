import * as JwksRsa from 'jwks-rsa';
import ms = require('ms');

//
// example #1
//

const options: JwksRsa.Options = {
  jwksUri: 'https://bkrebs.auth0.com/.well-known/jwks.json',
  strictSsl: true
};

const client = new JwksRsa.JwksClient(options);

const kid: string = 'RkI5MjI5OUY5ODc1N0Q4QzM0OUYzNkVGMTJDOUEzQkFCOTU3NjE2Rg';
client.getSigningKey(kid, (err, key) => {
  const signingKey = key.publicKey || key.rsaPublicKey;
});

client.getSigningKeys((err, keys) => {
  for (let key of keys) {
      const signingKey = key.publicKey || key.rsaPublicKey;
  }
});

//
// example #2
//

const options2 = {
  cache: true,
  cacheMaxEntries: 5, // Default value
  cacheMaxAge: ms('10h'), // Default value
  jwksUri: 'https://sandrino.auth0.com/.well-known/jwks.json'
};

const client2 = new JwksRsa.JwksClient(options2);

const kid2 = 'RkI5MjI5OUY5ODc1N0Q4QzM0OUYzNkVGMTJDOUEzQkFCOTU3NjE2Rg';
client2.getSigningKey(kid2, (err, key) => {
  const signingKey = key.publicKey || key.rsaPublicKey;
});
