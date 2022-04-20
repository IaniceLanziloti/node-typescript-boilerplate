import 'dotenv/config';
import './settings';

import './shared/database';
import './shared/container';

import server from './shared/server';

server.listen(process.settings.app.port);
