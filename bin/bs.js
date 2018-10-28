#!/usr/bin/env node
const browserSync = require('browser-sync');

browserSync({
    server: "./www",
    files: ["../**/*"]
});