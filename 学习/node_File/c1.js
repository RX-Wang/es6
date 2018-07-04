let config = require('./config.json');
// let config = JSON.parse(require('./config'));

module.exports = {
  c1: function(ctx, next) {
    config.age = 18;
    console.log(config);
  }
};