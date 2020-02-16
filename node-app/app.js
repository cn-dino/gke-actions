'use strict';
const os = require('os');
const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const HOSTNAME = os.hostname();
const SHA = process.env.SHA;
const REF = process.env.REF;
// App
const app = express();
app.get('/', (req, res) => {
  res.send(`
            <ul>
                <li>Host:${HOSTNAME}
                <li>SHA:${SHA}
                <li>REF:${REF}
            </ul>`);
});

app.listen(PORT, HOST);
//console.log('');