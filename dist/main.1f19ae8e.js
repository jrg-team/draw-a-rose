// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var html = document.querySelector("#html-text");
var style = document.querySelector("#styleText");
var originalString = "\u5148\u753B\u82B1\u7684\u830E\n.stem {\n    position: absolute;\n    height: 0;\n    width: 6px;\n    background: var(--dark-green);\n    bottom: 10%;\n    left: 50%;\n    margin-left: -3px;\n    border-radius: 0 0 3px 3px;\n    transition: height 1s;\n}\n.stem {\n  height: 200px;\n}\n.thorns>div{\n    width: 0;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    position: absolute;\n}\n.thorns>div:first-child {\n    border-right: 10px solid var(--dark-green);    \n    position: absolute;\n    left: 44%;\n    top: 50%;\n}\n.thorns>div:nth-child(2) {\n    border-left: 10px solid var(--dark-green);\n    right: 44%;\n    top: 60%;\n}\n.thorns>div:nth-child(3) {\n    border-right: 10px solid var(--dark-green);\n    left: 44%;\n    top: 70%;\n}\n\u518D\u753B\u82B1\u7684\u53F6\n.leaves>div{\n    position: absolute;\n    height: 60px;\n    width: 35px;\n}\n.leaves>div:first-child {\n    border-radius: 0 30px 0 30px;\n    transform: rotate(-20deg);\n    top: 55%;\n    left: 28%;\n    transition: background 1s, box-shadow 1s 1s;\n    background: var(--dark-green);\n    box-shadow: inset 5px 5px var(--light-green);\n}\n.leaves>div:nth-child(2) {\n    border-radius: 30px 0 30px 0;\n    transform: rotate(20deg);\n    top: 45%;\n    right: 28%;\n    transition: background 1s, box-shadow 1s 1s;\n    background: var(--dark-green);\n    box-shadow: inset -5px 5px var(--light-green);\n}\n\u6700\u540E\u753B\u82B1\u74E3\n.petals>div:first-child {\n    position: absolute;\n    height: 100px;\n    width: 50px;\n    border-radius: 10px 10px 20px 20px;\n    transition: background 1s;\n    background: var(--light-pink);\n    top: 15%;\n    left: 50%;\n    margin-left: -25px;\n}\n.petals>div:not(:first-child) {\n    position: absolute;\n    height: 100px;\n    width: 40px;\n}\n.petals>div:nth-child(2) {\n    transform-origin: bottom right;\n    border-radius: 0 35px 0 35px;\n    transition: background 1s, transform 1s 1s;\n    background: var(--medium-pink);\n    transform: rotate(-6deg);\n    top: 15%;\n    left: 30%;\n}\n.petals>div:nth-child(3) {\n    transform-origin: bottom left;\n    border-radius: 35px 0 35px 0;\n    transition: background 1s, transform 1s 1s;\n    background: var(--medium-pink);\n    transform: rotate(6deg);\n    top: 15%;\n    right: 30%;\n}\n.petals>div:nth-child(4) {\n    transform-origin: bottom right;\n    border-radius: 0 35px 0 35px;\n    transition: background 1s, transform 1s 1s;\n    background: var(--dark-pink);\n    transform: rotate(-18deg);\n    top: 15%;\n    left: 30%;\n}\n.petals>div:nth-child(5) {\n    transform-origin: bottom left;\n    border-radius: 35px 0 35px 0;\n    transition: background 1s, transform 1s 1s;\n    background: var(--dark-pink);\n    transform: rotate(18deg);\n    top: 15%;\n    right: 30%;\n}\n.dead-petals>div:first-child {\n    background: var(--medium-pink);\n    left: 35%;\n    transition: transform 8s, top 8s;\n    transform: rotate(-45deg);\n    top: 90%;\n}\n.dead-petals>div:nth-child(2) {\n    background: var(--dark-pink);\n    left: 50%;\n    transition: transform 8s 2s, top 8s 2s;\n    transform: rotate(-20deg);\n    top: 90%;\n}\n.wishes>div:first-child {\n    transform: translate(-80%);\n}\n.wishes>div:nth-child(2) {\n    transform: translate(-35%);\n}\n.wishes>div:nth-child(3) {\n    transform: translate(-95%);\n}\n.wishes>div:nth-child(4) {\n    transform: translate(-45%);\n}";
var showString = "";
var styleString = "";
var tempString = "";
var writeIntoStyle = false;
var n = 0;

var step = function step() {
  html.innerHTML = showString;
  style.innerHTML = styleString;
  setTimeout(function () {
    // 删去无用字符
    if (originalString[n] === "\n") {
      showString += "<br>";
    } else if (originalString[n] === " ") {
      showString += "&nbsp;";
    } else {
      showString += originalString[n];
    } // 判断何时输入到style中


    if (originalString[n] === "#" || originalString[n] === '.') {
      writeIntoStyle = true;
    } else if (originalString[n] === "}") {
      writeIntoStyle = false;
      tempString += "}\n";
      styleString += tempString;
      console.log(tempString);
    }

    if (writeIntoStyle === true) {
      tempString += originalString[n];
    } // 没病滚一下


    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999); // 判断到没到头

    if (n < originalString.length) {
      n += 1;
      step();
    }
  }, 1);
};

step();
},{}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63320" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map