"use strict";
module.exports = {
    apps: [
        {
            name: 'google-meet-clone',
            script: './build/src/index.js',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
                PORT: 4000
            }
        }
    ]
};
