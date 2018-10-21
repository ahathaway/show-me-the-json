module.exports = {
    apps: [{
        name: 'SHOWMETHEJSON',
        script: './bin/www',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        instances: 'max',
        exec_mode: 'cluster',
        autorestart: true,
        watch: false,
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        restart_delay: 1000
    }]
};
