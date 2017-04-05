import { channel, response } from 'syncano-server';

const { username, text, token } = ARGS;

channel.publish(`realtime.${token}`, { text, username })
  .then(res => response(JSON.stringify(res), 200, 'application/json'))
  .catch(err => response(JSON.stringify(err), 400, 'application/json'))
