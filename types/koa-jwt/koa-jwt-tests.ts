import koa = require('koa');
import * as KoaJwt from 'koa-jwt';

const app = new koa();

const options: KoaJwt.Options = {
  secret: 'some-secret-key'
}

app.use(KoaJwt.jwt(options));

options.key = 'auth';

app.use(KoaJwt.jwt(options));
