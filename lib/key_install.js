// Generated by IcedCoffeeScript 1.6.3-j
(function() {
  var KeyInstall, make_esc;

  make_esc = require('iced-error').make_esc;

  exports.KeyInstall = KeyInstall = (function() {
    function KeyInstall(config, key) {
      this.config = config;
      this.key = key;
    }

    KeyInstall.prototype.run = function(cb) {
      var esc;
      esc = make_esc(cb, "KeyInstall::run");
      return cb(null);
    };

    return KeyInstall;

  })();

}).call(this);