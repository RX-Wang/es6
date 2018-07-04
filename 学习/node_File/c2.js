let config = require('./config.json');
// let config = JSON.parse(require('./config'));

module.exports = {
  c2: function(ctx, next) {
    console.log(config);
  }
};