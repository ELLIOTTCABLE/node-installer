// Generated by IcedCoffeeScript 1.6.3-j
(function() {
  var KeyUpgrade, chain, clean_ring, fpeq, iced, keyring, make_esc, __iced_k, __iced_k_noop;

  iced = require('iced-coffee-script/lib/coffee-script/iced').runtime;
  __iced_k = __iced_k_noop = function() {};

  make_esc = require('iced-error').make_esc;

  keyring = require('gpg-wrapper').keyring;

  fpeq = require('pgp-utils').util.fpeq;

  clean_ring = require('./util').clean_ring;

  chain = require('iced-utils').util.chain;

  exports.KeyUpgrade = KeyUpgrade = (function() {
    function KeyUpgrade(config) {
      this.config = config;
      this._v = {};
    }

    KeyUpgrade.prototype.fetch = function(cb) {
      var err, res, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase-node-installer/src/key_upgrade.iced",
            funcname: "KeyUpgrade.fetch"
          });
          _this.config.request("/" + _this._v.old + "/keyset-" + _this._v["new"] + ".asc", __iced_deferrals.defer({
            assign_fn: (function(__slot_1) {
              return function() {
                err = arguments[0];
                res = arguments[1];
                return __slot_1._sig = arguments[2];
              };
            })(_this),
            lineno: 19
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    KeyUpgrade.prototype.decrypt_and_verify = function(cb) {
      var err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase-node-installer/src/key_upgrade.iced",
            funcname: "KeyUpgrade.decrypt_and_verify"
          });
          _this.config.oneshot_verify({
            which: 'code',
            sig: _this._sig
          }, __iced_deferrals.defer({
            assign_fn: (function(__slot_1) {
              return function() {
                err = arguments[0];
                return __slot_1._keyset = arguments[1];
              };
            })(_this),
            lineno: 25
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    KeyUpgrade.prototype.install = function(cb) {
      return (new KeyInstall(this.config, this._keyset)).run(cb);
    };

    KeyUpgrade.prototype.run = function(cb) {
      var esc, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "KeyUpgrade::run");
      (function(_this) {
        return (function(__iced_k) {
          if ((_this._v["new"] = _this.config.index().version) > (_this._v.old = _this.config.key_version())) {
            log.info("Key upgrade suggested; new version is " + _this._v["new"] + ", but we have " + _this._v.old);
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase-node-installer/src/key_upgrade.iced",
                funcname: "KeyUpgrade.run"
              });
              _this.fetch(__iced_deferrals.defer({
                lineno: 38
              }));
              __iced_deferrals._fulfill();
            })(function() {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase-node-installer/src/key_upgrade.iced",
                  funcname: "KeyUpgrade.run"
                });
                _this.verify(esc(__iced_deferrals.defer({
                  lineno: 39
                })));
                __iced_deferrals._fulfill();
              })(function() {
                (function(__iced_k) {
                  __iced_deferrals = new iced.Deferrals(__iced_k, {
                    parent: ___iced_passed_deferral,
                    filename: "/Users/max/src/keybase-node-installer/src/key_upgrade.iced",
                    funcname: "KeyUpgrade.run"
                  });
                  _this.install(esc(__iced_deferrals.defer({
                    lineno: 40
                  })));
                  __iced_deferrals._fulfill();
                })(function() {
                  return __iced_k(_this.config.set_key_version(_this._v["new"]));
                });
              });
            });
          } else {
            return __iced_k();
          }
        });
      })(this)((function(_this) {
        return function() {
          return cb(null);
        };
      })(this));
    };

    return KeyUpgrade;

  })();

}).call(this);