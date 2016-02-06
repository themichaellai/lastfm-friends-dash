var devConfig = require('./webpack.config.js');

delete devConfig['devtool'];
devConfig.output.publicPath = '/lastfm-friends-dash/'

module.exports = devConfig;
