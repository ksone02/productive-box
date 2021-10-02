module.exports = function (e, r) {
    "use strict";
    var t = {};

    function __webpack_require__(r) {
        if (t[r]) {
            return t[r].exports
        }
        var n = t[r] = {
            i: r,
            l: false,
            exports: {}
        };
        e[r].call(n.exports, n, n.exports, __webpack_require__);
        n.l = true;
        return n.exports
    }
    __webpack_require__.ab = __dirname + "/";

    function startup() {
        return __webpack_require__(429)
    }
    return startup()
}({
    2: function (e, r, t) {
        "use strict";
        const n = t(87);
        const s = t(118);
        const o = t(49);
        const i = (e, r) => {
            if (!e && r) {
                throw new Error("You can't specify a `release` without specifying `platform`")
            }
            e = e || n.platform();
            let t;
            if (e === "darwin") {
                if (!r && n.platform() === "darwin") {
                    r = n.release()
                }
                const e = r ? Number(r.split(".")[0]) > 15 ? "macOS" : "OS X" : "macOS";
                t = r ? s(r).name : "";
                return e + (t ? " " + t : "")
            }
            if (e === "linux") {
                if (!r && n.platform() === "linux") {
                    r = n.release()
                }
                t = r ? r.replace(/^(\d+\.\d+).*/, "$1") : "";
                return "Linux" + (t ? " " + t : "")
            }
            if (e === "win32") {
                if (!r && n.platform() === "win32") {
                    r = n.release()
                }
                t = r ? o(r) : "";
                return "Windows" + (t ? " " + t : "")
            }
            return e
        };
        e.exports = i
    },
    9: function (e, r, t) {
        var n = t(969);
        var s = function () {};
        var o = function (e) {
            return e.setHeader && typeof e.abort === "function"
        };
        var i = function (e) {
            return e.stdio && Array.isArray(e.stdio) && e.stdio.length === 3
        };
        var a = function (e, r, t) {
            if (typeof r === "function") return a(e, null, r);
            if (!r) r = {};
            t = n(t || s);
            var c = e._writableState;
            var u = e._readableState;
            var l = r.readable || r.readable !== false && e.readable;
            var p = r.writable || r.writable !== false && e.writable;
            var f = false;
            var d = function () {
                if (!e.writable) m()
            };
            var m = function () {
                p = false;
                if (!l) t.call(e)
            };
            var h = function () {
                l = false;
                if (!p) t.call(e)
            };
            var g = function (r) {
                t.call(e, r ? new Error("exited with error code: " + r) : null)
            };
            var w = function (r) {
                t.call(e, r)
            };
            var T = function () {
                process.nextTick(b)
            };
            var b = function () {
                if (f) return;
                if (l && !(u && (u.ended && !u.destroyed))) return t.call(e, new Error("premature close"));
                if (p && !(c && (c.ended && !c.destroyed))) return t.call(e, new Error("premature close"))
            };
            var E = function () {
                e.req.on("finish", m)
            };
            if (o(e)) {
                e.on("complete", m);
                e.on("abort", T);
                if (e.req) E();
                else e.on("request", E)
            } else if (p && !c) {
                e.on("end", d);
                e.on("close", d)
            }
            if (i(e)) e.on("exit", g);
            e.on("end", h);
            e.on("finish", m);
            if (r.error !== false) e.on("error", w);
            e.on("close", T);
            return function () {
                f = true;
                e.removeListener("complete", m);
                e.removeListener("abort", T);
                e.removeListener("request", E);
                if (e.req) e.req.removeListener("finish", m);
                e.removeListener("end", d);
                e.removeListener("close", d);
                e.removeListener("finish", m);
                e.removeListener("exit", g);
                e.removeListener("end", h);
                e.removeListener("error", w);
                e.removeListener("close", T)
            }
        };
        e.exports = a
    },
    11: function (e) {
        e.exports = wrappy;

        function wrappy(e, r) {
            if (e && r) return wrappy(e)(r);
            if (typeof e !== "function") throw new TypeError("need wrapper function");
            Object.keys(e).forEach(function (r) {
                wrapper[r] = e[r]
            });
            return wrapper;

            function wrapper() {
                var r = new Array(arguments.length);
                for (var t = 0; t < r.length; t++) {
                    r[t] = arguments[t]
                }
                var n = e.apply(this, r);
                var s = r[r.length - 1];
                if (typeof n === "function" && n !== s) {
                    Object.keys(s).forEach(function (e) {
                        n[e] = s[e]
                    })
                }
                return n
            }
        }
    },
    18: function (module) {
        module.exports = eval("require")("encoding")
    },
    20: function (e, r, t) {
        "use strict";
        const n = t(129);
        const s = t(568);
        const o = t(881);

        function spawn(e, r, t) {
            const i = s(e, r, t);
            const a = n.spawn(i.command, i.args, i.options);
            o.hookChildProcess(a, i);
            return a
        }

        function spawnSync(e, r, t) {
            const i = s(e, r, t);
            const a = n.spawnSync(i.command, i.args, i.options);
            a.error = a.error || o.verifyENOENTSync(a.status, i);
            return a
        }
        e.exports = spawn;
        e.exports.spawn = spawn;
        e.exports.sync = spawnSync;
        e.exports._parse = s;
        e.exports._enoent = o
    },
    39: function (e) {
        "use strict";
        e.exports = (e => {
            e = e || {};
            const r = e.env || process.env;
            const t = e.platform || process.platform;
            if (t !== "win32") {
                return "PATH"
            }
            return Object.keys(r).find(e => e.toUpperCase() === "PATH") || "Path"
        })
    },
    49: function (e, r, t) {
        "use strict";
        const n = t(87);
        const s = t(675);
        const o = new Map([
            ["10.0", "10"],
            ["6.3", "8.1"],
            ["6.2", "8"],
            ["6.1", "7"],
            ["6.0", "Vista"],
            ["5.2", "Server 2003"],
            ["5.1", "XP"],
            ["5.0", "2000"],
            ["4.9", "ME"],
            ["4.1", "98"],
            ["4.0", "95"]
        ]);
        const i = e => {
            const r = /\d+\.\d/.exec(e || n.release());
            if (e && !r) {
                throw new Error("`release` argument doesn't match `n.n`")
            }
            const t = (r || [])[0];
            if ((!e || e === n.release()) && ["6.1", "6.2", "6.3", "10.0"].includes(t)) {
                let e;
                try {
                    e = s.sync("powershell", ["(Get-CimInstance -ClassName Win32_OperatingSystem).caption"]).stdout || ""
                } catch (r) {
                    e = s.sync("wmic", ["os", "get", "Caption"]).stdout || ""
                }
                const r = (e.match(/2008|2012|2016|2019/) || [])[0];
                if (r) {
                    return `Server ${r}`
                }
            }
            return o.get(t)
        };
        e.exports = i
    },
    63: function (e, r, t) {
        const n = t(747);
        const s = t(622);

        function log(e) {
            console.log(`[dotenv][DEBUG] ${e}`)
        }
        const o = "\n";
        const i = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
        const a = /\\n/g;
        const c = /\n|\r|\r\n/;

        function parse(e, r) {
            const t = Boolean(r && r.debug);
            const n = {};
            e.toString().split(c).forEach(function (e, r) {
                const s = e.match(i);
                if (s != null) {
                    const e = s[1];
                    let r = s[2] || "";
                    const t = r.length - 1;
                    const i = r[0] === '"' && r[t] === '"';
                    const c = r[0] === "'" && r[t] === "'";
                    if (c || i) {
                        r = r.substring(1, t);
                        if (i) {
                            r = r.replace(a, o)
                        }
                    } else {
                        r = r.trim()
                    }
                    n[e] = r
                } else if (t) {
                    log(`did not match key and value when parsing line ${r+1}: ${e}`)
                }
            });
            return n
        }

        function config(e) {
            let r = s.resolve(process.cwd(), ".env");
            let t = "utf8";
            let o = false;
            if (e) {
                if (e.path != null) {
                    r = e.path
                }
                if (e.encoding != null) {
                    t = e.encoding
                }
                if (e.debug != null) {
                    o = true
                }
            }
            try {
                const e = parse(n.readFileSync(r, {
                    encoding: t
                }), {
                    debug: o
                });
                Object.keys(e).forEach(function (r) {
                    if (!Object.prototype.hasOwnProperty.call(process.env, r)) {
                        process.env[r] = e[r]
                    } else if (o) {
                        log(`"${r}" is already defined in \`process.env\` and will not be overwritten`)
                    }
                });
                return {
                    parsed: e
                }
            } catch (e) {
                return {
                    error: e
                }
            }
        }
        e.exports.config = config;
        e.exports.parse = parse
    },
    87: function (e) {
        e.exports = require("os")
    },
    118: function (e, r, t) {
        "use strict";
        const n = t(87);
        const s = new Map([
            [19, "Catalina"],
            [18, "Mojave"],
            [17, "High Sierra"],
            [16, "Sierra"],
            [15, "El Capitan"],
            [14, "Yosemite"],
            [13, "Mavericks"],
            [12, "Mountain Lion"],
            [11, "Lion"],
            [10, "Snow Leopard"],
            [9, "Leopard"],
            [8, "Tiger"],
            [7, "Panther"],
            [6, "Jaguar"],
            [5, "Puma"]
        ]);
        const o = e => {
            e = Number((e || n.release()).split(".")[0]);
            return {
                name: s.get(e),
                version: "10." + (e - 4)
            }
        };
        e.exports = o;
        e.exports.default = o
    },
    129: function (e) {
        e.exports = require("child_process")
    },
    151: function (e) {
        "use strict";
        const r = ["stdin", "stdout", "stderr"];
        const t = e => r.some(r => Boolean(e[r]));
        e.exports = (e => {
            if (!e) {
                return null
            }
            if (e.stdio && t(e)) {
                throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${r.map(e=>`\`${e}\``).join(", ")}`)
            }
            if (typeof e.stdio === "string") {
                return e.stdio
            }
            const n = e.stdio || [];
            if (!Array.isArray(n)) {
                throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)
            }
            const s = [];
            const o = Math.max(n.length, r.length);
            for (let t = 0; t < o; t++) {
                let o = null;
                if (n[t] !== undefined) {
                    o = n[t]
                } else if (e[r[t]] !== undefined) {
                    o = e[r[t]]
                }
                s[t] = o
            }
            return s
        })
    },
    197: function (e, r, t) {
        e.exports = isexe;
        isexe.sync = sync;
        var n = t(747);

        function isexe(e, r, t) {
            n.stat(e, function (e, n) {
                t(e, e ? false : checkStat(n, r))
            })
        }

        function sync(e, r) {
            return checkStat(n.statSync(e), r)
        }

        function checkStat(e, r) {
            return e.isFile() && checkMode(e, r)
        }

        function checkMode(e, r) {
            var t = e.mode;
            var n = e.uid;
            var s = e.gid;
            var o = r.uid !== undefined ? r.uid : process.getuid && process.getuid();
            var i = r.gid !== undefined ? r.gid : process.getgid && process.getgid();
            var a = parseInt("100", 8);
            var c = parseInt("010", 8);
            var u = parseInt("001", 8);
            var l = a | c;
            var p = t & u || t & c && s === i || t & a && n === o || t & l && o === 0;
            return p
        }
    },
    211: function (e) {
        e.exports = require("https")
    },
    260: function (e, r, t) {
        var n = t(357);
        var s = t(654);
        var o = /^win/i.test(process.platform);
        var i = t(614);
        if (typeof i !== "function") {
            i = i.EventEmitter
        }
        var a;
        if (process.__signal_exit_emitter__) {
            a = process.__signal_exit_emitter__
        } else {
            a = process.__signal_exit_emitter__ = new i;
            a.count = 0;
            a.emitted = {}
        }
        if (!a.infinite) {
            a.setMaxListeners(Infinity);
            a.infinite = true
        }
        e.exports = function (e, r) {
            n.equal(typeof e, "function", "a callback must be provided for exit handler");
            if (u === false) {
                load()
            }
            var t = "exit";
            if (r && r.alwaysLast) {
                t = "afterexit"
            }
            var s = function () {
                a.removeListener(t, e);
                if (a.listeners("exit").length === 0 && a.listeners("afterexit").length === 0) {
                    unload()
                }
            };
            a.on(t, e);
            return s
        };
        e.exports.unload = unload;

        function unload() {
            if (!u) {
                return
            }
            u = false;
            s.forEach(function (e) {
                try {
                    process.removeListener(e, c[e])
                } catch (e) {}
            });
            process.emit = p;
            process.reallyExit = l;
            a.count -= 1
        }

        function emit(e, r, t) {
            if (a.emitted[e]) {
                return
            }
            a.emitted[e] = true;
            a.emit(e, r, t)
        }
        var c = {};
        s.forEach(function (e) {
            c[e] = function listener() {
                var r = process.listeners(e);
                if (r.length === a.count) {
                    unload();
                    emit("exit", null, e);
                    emit("afterexit", null, e);
                    if (o && e === "SIGHUP") {
                        e = "SIGINT"
                    }
                    process.kill(process.pid, e)
                }
            }
        });
        e.exports.signals = function () {
            return s
        };
        e.exports.load = load;
        var u = false;

        function load() {
            if (u) {
                return
            }
            u = true;
            a.count += 1;
            s = s.filter(function (e) {
                try {
                    process.on(e, c[e]);
                    return true
                } catch (e) {
                    return false
                }
            });
            process.emit = processEmit;
            process.reallyExit = processReallyExit
        }
        var l = process.reallyExit;

        function processReallyExit(e) {
            process.exitCode = e || 0;
            emit("exit", process.exitCode, null);
            emit("afterexit", process.exitCode, null);
            l.call(process, process.exitCode)
        }
        var p = process.emit;

        function processEmit(e, r) {
            if (e === "exit") {
                if (r !== undefined) {
                    process.exitCode = r
                }
                var t = p.apply(this, arguments);
                emit("exit", process.exitCode, null);
                emit("afterexit", process.exitCode, null);
                return t
            } else {
                return p.apply(this, arguments)
            }
        }
    },
    276: function (e, r) {
        "use strict";
        r.__esModule = true;
        r.userInfoQuery = "\n  query {\n    viewer {\n      login\n      id\n    }\n  }\n";
        r.createContributedRepoQuery = function (e) {
            return '\n  query {\n    user(login: "' + e + '") {\n      repositoriesContributedTo(last: 100) {\n        nodes {\n          name\n          owner {\n            login\n          }\n        }\n      }\n    }\n  }\n'
        };
        r.createOwnedRepoQuery = function (e) {
            return '\n  query {\n    user(login: "' + e + '") {\n      repositories(last: 100, ownerAffiliations: OWNER, isFork: false) {\n        nodes {\n          name\n          owner {\n            login\n\t  }\n\t}\n      }\n    }\n  }\n'
        };
        r.createCommittedDateQuery = function (e, r, t) {
            return '\n  query {\n    repository(owner: "' + t + '", name: "' + r + '") {\n      ref(qualifiedName: "master") {\n        target {\n          ... on Commit {\n            history(first: 100, author: { id: "' + e + '" }) {\n              edges {\n                node {\n                  committedDate\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'
        }
    },
    280: function (e) {
        e.exports = register;

        function register(e, r, t, n) {
            if (typeof t !== "function") {
                throw new Error("method for before hook must be a function")
            }
            if (!n) {
                n = {}
            }
            if (Array.isArray(r)) {
                return r.reverse().reduce(function (r, t) {
                    return register.bind(null, e, t, r, n)
                }, t)()
            }
            return Promise.resolve().then(function () {
                if (!e.registry[r]) {
                    return t(n)
                }
                return e.registry[r].reduce(function (e, r) {
                    return r.hook.bind(null, e, n)
                }, t)()
            })
        }
    },
    299: function (e, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        const t = "2.0.2";

        function normalizePaginatedListResponse(e, r, t) {
            const n = "total_count" in t.data && !("url" in t.data);
            if (!n) return;
            const s = t.data.incomplete_results;
            const o = t.data.repository_selection;
            const i = t.data.total_count;
            delete t.data.incomplete_results;
            delete t.data.repository_selection;
            delete t.data.total_count;
            const a = Object.keys(t.data)[0];
            const c = t.data[a];
            t.data = c;
            if (typeof s !== "undefined") {
                t.data.incomplete_results = s
            }
            if (typeof o !== "undefined") {
                t.data.repository_selection = o
            }
            t.data.total_count = i
        }

        function iterator(e, r, t) {
            const n = e.request.endpoint(r, t);
            const s = n.method;
            const o = n.headers;
            let i = n.url;
            return {
                [Symbol.asyncIterator]: () => ({
                    next() {
                        if (!i) {
                            return Promise.resolve({
                                done: true
                            })
                        }
                        return e.request({
                            method: s,
                            url: i,
                            headers: o
                        }).then(r => {
                            normalizePaginatedListResponse(e, i, r);
                            i = ((r.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
                            return {
                                value: r
                            }
                        })
                    }
                })
            }
        }

        function paginate(e, r, t, n) {
            if (typeof t === "function") {
                n = t;
                t = undefined
            }
            return gather(e, [], iterator(e, r, t)[Symbol.asyncIterator](), n)
        }

        function gather(e, r, t, n) {
            return t.next().then(s => {
                if (s.done) {
                    return r
                }
                let o = false;

                function done() {
                    o = true
                }
                r = r.concat(n ? n(s.value, done) : s.value.data);
                if (o) {
                    return r
                }
                return gather(e, r, t, n)
            })
        }

        function paginateRest(e) {
            return {
                paginate: Object.assign(paginate.bind(null, e), {
                    iterator: iterator.bind(null, e)
                })
            }
        }
        paginateRest.VERSION = t;
        r.paginateRest = paginateRest
    },
    323: function (e) {
        "use strict";
        var r = e.exports = function (e) {
            return e !== null && typeof e === "object" && typeof e.pipe === "function"
        };
        r.writable = function (e) {
            return r(e) && e.writable !== false && typeof e._write === "function" && typeof e._writableState === "object"
        };
        r.readable = function (e) {
            return r(e) && e.readable !== false && typeof e._read === "function" && typeof e._readableState === "object"
        };
        r.duplex = function (e) {
            return r.writable(e) && r.readable(e)
        };
        r.transform = function (e) {
            return r.duplex(e) && typeof e._transform === "function" && typeof e._transformState === "object"
        }
    },
    331: function (e, r) {
        "use strict";
        r.__esModule = true;

        function generateBarChart(e, r) {
            var t = "░▏▎▍▌▋▊▉█";
            var n = Math.floor(r * 8 * e / 100);
            var s = Math.floor(n / 8);
            if (s >= r) {
                return t.substring(8, 9).repeat(r)
            }
            var o = n % 8;
            return [t.substring(8, 9).repeat(s), t.substring(o, o + 1)].join("").padEnd(r, t.substring(0, 1))
        }
        r["default"] = generateBarChart
    },
    357: function (e) {
        e.exports = require("assert")
    },
    385: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });

        function _interopDefault(e) {
            return e && typeof e === "object" && "default" in e ? e["default"] : e
        }
        var n = _interopDefault(t(696));
        var s = t(796);

        function lowercaseKeys(e) {
            if (!e) {
                return {}
            }
            return Object.keys(e).reduce((r, t) => {
                r[t.toLowerCase()] = e[t];
                return r
            }, {})
        }

        function mergeDeep(e, r) {
            const t = Object.assign({}, e);
            Object.keys(r).forEach(s => {
                if (n(r[s])) {
                    if (!(s in e)) Object.assign(t, {
                        [s]: r[s]
                    });
                    else t[s] = mergeDeep(e[s], r[s])
                } else {
                    Object.assign(t, {
                        [s]: r[s]
                    })
                }
            });
            return t
        }

        function merge(e, r, t) {
            if (typeof r === "string") {
                let [e, n] = r.split(" ");
                t = Object.assign(n ? {
                    method: e,
                    url: n
                } : {
                    url: e
                }, t)
            } else {
                t = Object.assign({}, r)
            }
            t.headers = lowercaseKeys(t.headers);
            const n = mergeDeep(e || {}, t);
            if (e && e.mediaType.previews.length) {
                n.mediaType.previews = e.mediaType.previews.filter(e => !n.mediaType.previews.includes(e)).concat(n.mediaType.previews)
            }
            n.mediaType.previews = n.mediaType.previews.map(e => e.replace(/-preview/, ""));
            return n
        }

        function addQueryParameters(e, r) {
            const t = /\?/.test(e) ? "&" : "?";
            const n = Object.keys(r);
            if (n.length === 0) {
                return e
            }
            return e + t + n.map(e => {
                if (e === "q") {
                    return "q=" + r.q.split("+").map(encodeURIComponent).join("+")
                }
                return `${e}=${encodeURIComponent(r[e])}`
            }).join("&")
        }
        const o = /\{[^}]+\}/g;

        function removeNonChars(e) {
            return e.replace(/^\W+|\W+$/g, "").split(/,/)
        }

        function extractUrlVariableNames(e) {
            const r = e.match(o);
            if (!r) {
                return []
            }
            return r.map(removeNonChars).reduce((e, r) => e.concat(r), [])
        }

        function omit(e, r) {
            return Object.keys(e).filter(e => !r.includes(e)).reduce((r, t) => {
                r[t] = e[t];
                return r
            }, {})
        }

        function encodeReserved(e) {
            return e.split(/(%[0-9A-Fa-f]{2})/g).map(function (e) {
                if (!/%[0-9A-Fa-f]/.test(e)) {
                    e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]")
                }
                return e
            }).join("")
        }

        function encodeUnreserved(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        function encodeValue(e, r, t) {
            r = e === "+" || e === "#" ? encodeReserved(r) : encodeUnreserved(r);
            if (t) {
                return encodeUnreserved(t) + "=" + r
            } else {
                return r
            }
        }

        function isDefined(e) {
            return e !== undefined && e !== null
        }

        function isKeyOperator(e) {
            return e === ";" || e === "&" || e === "?"
        }

        function getValues(e, r, t, n) {
            var s = e[t],
                o = [];
            if (isDefined(s) && s !== "") {
                if (typeof s === "string" || typeof s === "number" || typeof s === "boolean") {
                    s = s.toString();
                    if (n && n !== "*") {
                        s = s.substring(0, parseInt(n, 10))
                    }
                    o.push(encodeValue(r, s, isKeyOperator(r) ? t : ""))
                } else {
                    if (n === "*") {
                        if (Array.isArray(s)) {
                            s.filter(isDefined).forEach(function (e) {
                                o.push(encodeValue(r, e, isKeyOperator(r) ? t : ""))
                            })
                        } else {
                            Object.keys(s).forEach(function (e) {
                                if (isDefined(s[e])) {
                                    o.push(encodeValue(r, s[e], e))
                                }
                            })
                        }
                    } else {
                        const e = [];
                        if (Array.isArray(s)) {
                            s.filter(isDefined).forEach(function (t) {
                                e.push(encodeValue(r, t))
                            })
                        } else {
                            Object.keys(s).forEach(function (t) {
                                if (isDefined(s[t])) {
                                    e.push(encodeUnreserved(t));
                                    e.push(encodeValue(r, s[t].toString()))
                                }
                            })
                        }
                        if (isKeyOperator(r)) {
                            o.push(encodeUnreserved(t) + "=" + e.join(","))
                        } else if (e.length !== 0) {
                            o.push(e.join(","))
                        }
                    }
                }
            } else {
                if (r === ";") {
                    if (isDefined(s)) {
                        o.push(encodeUnreserved(t))
                    }
                } else if (s === "" && (r === "&" || r === "?")) {
                    o.push(encodeUnreserved(t) + "=")
                } else if (s === "") {
                    o.push("")
                }
            }
            return o
        }

        function parseUrl(e) {
            return {
                expand: expand.bind(null, e)
            }
        }

        function expand(e, r) {
            var t = ["+", "#", ".", "/", ";", "?", "&"];
            return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (e, n, s) {
                if (n) {
                    let e = "";
                    const s = [];
                    if (t.indexOf(n.charAt(0)) !== -1) {
                        e = n.charAt(0);
                        n = n.substr(1)
                    }
                    n.split(/,/g).forEach(function (t) {
                        var n = /([^:\*]*)(?::(\d+)|(\*))?/.exec(t);
                        s.push(getValues(r, e, n[1], n[2] || n[3]))
                    });
                    if (e && e !== "+") {
                        var o = ",";
                        if (e === "?") {
                            o = "&"
                        } else if (e !== "#") {
                            o = e
                        }
                        return (s.length !== 0 ? e : "") + s.join(o)
                    } else {
                        return s.join(",")
                    }
                } else {
                    return encodeReserved(s)
                }
            })
        }

        function parse(e) {
            let r = e.method.toUpperCase();
            let t = (e.url || "/").replace(/:([a-z]\w+)/g, "{+$1}");
            let n = Object.assign({}, e.headers);
            let s;
            let o = omit(e, ["method", "baseUrl", "url", "headers", "request", "mediaType"]);
            const i = extractUrlVariableNames(t);
            t = parseUrl(t).expand(o);
            if (!/^http/.test(t)) {
                t = e.baseUrl + t
            }
            const a = Object.keys(e).filter(e => i.includes(e)).concat("baseUrl");
            const c = omit(o, a);
            const u = /application\/octet-stream/i.test(n.accept);
            if (!u) {
                if (e.mediaType.format) {
                    n.accept = n.accept.split(/,/).map(r => r.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${e.mediaType.format}`)).join(",")
                }
                if (e.mediaType.previews.length) {
                    const r = n.accept.match(/[\w-]+(?=-preview)/g) || [];
                    n.accept = r.concat(e.mediaType.previews).map(r => {
                        const t = e.mediaType.format ? `.${e.mediaType.format}` : "+json";
                        return `application/vnd.github.${r}-preview${t}`
                    }).join(",")
                }
            }
            if (["GET", "HEAD"].includes(r)) {
                t = addQueryParameters(t, c)
            } else {
                if ("data" in c) {
                    s = c.data
                } else {
                    if (Object.keys(c).length) {
                        s = c
                    } else {
                        n["content-length"] = 0
                    }
                }
            }
            if (!n["content-type"] && typeof s !== "undefined") {
                n["content-type"] = "application/json; charset=utf-8"
            }
            if (["PATCH", "PUT"].includes(r) && typeof s === "undefined") {
                s = ""
            }
            return Object.assign({
                method: r,
                url: t,
                headers: n
            }, typeof s !== "undefined" ? {
                body: s
            } : null, e.request ? {
                request: e.request
            } : null)
        }

        function endpointWithDefaults(e, r, t) {
            return parse(merge(e, r, t))
        }

        function withDefaults(e, r) {
            const t = merge(e, r);
            const n = endpointWithDefaults.bind(null, t);
            return Object.assign(n, {
                DEFAULTS: t,
                defaults: withDefaults.bind(null, t),
                merge: merge.bind(null, t),
                parse: parse
            })
        }
        const i = "6.0.0";
        const a = `octokit-endpoint.js/${i} ${s.getUserAgent()}`;
        const c = {
            method: "GET",
            baseUrl: "https://api.github.com",
            headers: {
                accept: "application/vnd.github.v3+json",
                "user-agent": a
            },
            mediaType: {
                format: "",
                previews: []
            }
        };
        const u = withDefaults(null, c);
        r.endpoint = u
    },
    389: function (e, r, t) {
        "use strict";
        const n = t(747);
        const s = t(866);

        function readShebang(e) {
            const r = 150;
            let t;
            if (Buffer.alloc) {
                t = Buffer.alloc(r)
            } else {
                t = new Buffer(r);
                t.fill(0)
            }
            let o;
            try {
                o = n.openSync(e, "r");
                n.readSync(o, t, 0, r, 0);
                n.closeSync(o)
            } catch (e) {}
            return s(t.toString())
        }
        e.exports = readShebang
    },
    406: function (e, r, t) {
        "use strict";
        const n = t(622);
        const s = t(39);
        e.exports = (e => {
            e = Object.assign({
                cwd: process.cwd(),
                path: process.env[s()]
            }, e);
            let r;
            let t = n.resolve(e.cwd);
            const o = [];
            while (r !== t) {
                o.push(n.join(t, "node_modules/.bin"));
                r = t;
                t = n.resolve(t, "..")
            }
            o.push(n.dirname(process.execPath));
            return o.concat(e.path).join(n.delimiter)
        });
        e.exports.env = (r => {
            r = Object.assign({
                env: process.env
            }, r);
            const t = Object.assign({}, r.env);
            const n = s({
                env: t
            });
            r.path = t[n];
            t[n] = e.exports(r);
            return t
        })
    },
    413: function (e) {
        e.exports = require("stream")
    },
    418: function (e, r, t) {
        "use strict";
        const n = t(669);
        let s;
        if (typeof n.getSystemErrorName === "function") {
            e.exports = n.getSystemErrorName
        } else {
            try {
                s = process.binding("uv");
                if (typeof s.errname !== "function") {
                    throw new TypeError("uv.errname is not a function")
                }
            } catch (e) {
                console.error("execa/lib/errname: unable to establish process.binding('uv')", e);
                s = null
            }
            e.exports = (e => errname(s, e))
        }
        e.exports.__test__ = errname;

        function errname(e, r) {
            if (e) {
                return e.errname(r)
            }
            if (!(r < 0)) {
                throw new Error("err >= 0")
            }
            return `Unknown system error ${r}`
        }
    },
    429: function (e, r, t) {
        "use strict";
        var n = this && this.__awaiter || function (e, r, t, n) {
            function adopt(e) {
                return e instanceof t ? e : new t(function (r) {
                    r(e)
                })
            }
            return new(t || (t = Promise))(function (t, s) {
                function fulfilled(e) {
                    try {
                        step(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function rejected(e) {
                    try {
                        step(n["throw"](e))
                    } catch (e) {
                        s(e)
                    }
                }

                function step(e) {
                    e.done ? t(e.value) : adopt(e.value).then(fulfilled, rejected)
                }
                step((n = n.apply(e, r || [])).next())
            })
        };
        var s = this && this.__generator || function (e, r) {
            var t = {
                    label: 0,
                    sent: function () {
                        if (o[0] & 1) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                },
                n, s, o, i;
            return i = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, typeof Symbol === "function" && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function verb(e) {
                return function (r) {
                    return step([e, r])
                }
            }

            function step(i) {
                if (n) throw new TypeError("Generator is already executing.");
                while (t) try {
                    if (n = 1, s && (o = i[0] & 2 ? s["return"] : i[0] ? s["throw"] || ((o = s["return"]) && o.call(s), 0) : s.next) && !(o = o.call(s, i[1])).done) return o;
                    if (s = 0, o) i = [i[0] & 2, o.value];
                    switch (i[0]) {
                        case 0:
                        case 1:
                            o = i;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: i[1], done: false
                            };
                        case 5:
                            t.label++;
                            s = i[1];
                            i = [0];
                            continue;
                        case 7:
                            i = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(o = t.trys, o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (i[0] === 3 && (!o || i[1] > o[0] && i[1] < o[3])) {
                                t.label = i[1];
                                break
                            }
                            if (i[0] === 6 && t.label < o[1]) {
                                t.label = o[1];
                                o = i;
                                break
                            }
                            if (o && t.label < o[2]) {
                                t.label = o[2];
                                t.ops.push(i);
                                break
                            }
                            if (o[2]) t.ops.pop();
                            t.trys.pop();
                            continue
                    }
                    i = r.call(e, t)
                } catch (e) {
                    i = [6, e];
                    s = 0
                } finally {
                    n = o = 0
                }
                if (i[0] & 5) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: true
                }
            }
        };
        var o = this && this.__spreadArrays || function () {
            for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;
            for (var n = Array(e), s = 0, r = 0; r < t; r++)
                for (var o = arguments[r], i = 0, a = o.length; i < a; i++, s++) n[s] = o[i];
            return n
        };
        r.__esModule = true;
        var i = t(622);
        var a = t(63);
        var c = t(889);
        var u = t(749);
        var l = t(331);
        var p = t(276);
        a.config({
            path: t.ab + ".env"
        });
        (function () {
            return n(void 0, void 0, void 0, function () {
                var e, r, t, n, i, a, f, d, m, h, g, w, T, b, E, y, v, _, S;
                var P;
                var O, G, C, R, j, A, x;
                return s(this, function (s) {
                    switch (s.label) {
                        case 0:
                            return [4, u["default"](p.userInfoQuery)["catch"](function (e) {
                                return console.error("Unable to get username and id\n" + e)
                            })];
                        case 1:
                            e = s.sent();
                            r = (O = e === null || e === void 0 ? void 0 : e.data) === null || O === void 0 ? void 0 : O.viewer, t = r.login, n = r.id;
                            i = p.createContributedRepoQuery(t);
                            a = p.createOwnedRepoQuery(t);
                            return [4, u["default"](i)["catch"](function (e) {
                                return console.error("Unable to get the contributed repo\n" + e)
                            })];
                        case 2:
                            f = s.sent();
                            d = (R = (C = (G = f === null || f === void 0 ? void 0 : f.data) === null || G === void 0 ? void 0 : G.user) === null || C === void 0 ? void 0 : C.repositoriesContributedTo) === null || R === void 0 ? void 0 : R.nodes.map(function (e) {
                                var r;
                                return {
                                    name: e === null || e === void 0 ? void 0 : e.name,
                                    owner: (r = e === null || e === void 0 ? void 0 : e.owner) === null || r === void 0 ? void 0 : r.login
                                }
                            });
                            return [4, u["default"](a)["catch"](function (e) {
                                return console.error("Unable to get the owned repo\n" + e)
                            })];
                        case 3:
                            f = s.sent();
                            d.push.apply(d, (x = (A = (j = f === null || f === void 0 ? void 0 : f.data) === null || j === void 0 ? void 0 : j.user) === null || A === void 0 ? void 0 : A.repositories) === null || x === void 0 ? void 0 : x.nodes.map(function (e) {
                                var r;
                                return {
                                    name: e === null || e === void 0 ? void 0 : e.name,
                                    owner: (r = e === null || e === void 0 ? void 0 : e.owner) === null || r === void 0 ? void 0 : r.login
                                }
                            }));
                            return [4, Promise.all(d.map(function (e) {
                                var r = e.name,
                                    t = e.owner;
                                return u["default"](p.createCommittedDateQuery(n, r, t))
                            }))["catch"](function (e) {
                                return console.error("Unable to get the commit info\n" + e)
                            })];
                        case 4:
                            m = s.sent();
                            if (!m) return [2];
                            h = 0;
                            g = 0;
                            w = 0;
                            T = 0;
                            m.forEach(function (e) {
                                var r, t, n, s, o;
                                (o = (s = (n = (t = (r = e === null || e === void 0 ? void 0 : e.data) === null || r === void 0 ? void 0 : r.repository) === null || t === void 0 ? void 0 : t.ref) === null || n === void 0 ? void 0 : n.target) === null || s === void 0 ? void 0 : s.history) === null || o === void 0 ? void 0 : o.edges.forEach(function (e) {
                                    var r;
                                    var t = (r = e === null || e === void 0 ? void 0 : e.node) === null || r === void 0 ? void 0 : r.committedDate;
                                    var n = new Date(t).toLocaleTimeString("en-US", {
                                        hour12: false,
                                        timeZone: process.env.TIMEZONE
                                    });
                                    var s = +n.split(":")[0];
                                    if (s >= 6 && s < 12) h++;
                                    if (s >= 12 && s < 18) g++;
                                    if (s >= 18 && s < 24) w++;
                                    if (s >= 0 && s < 6) T++
                                })
                            });
                            b = h + g + w + T;
                            if (!b) return [2];
                            E = [{
                                label: "🌞 1",
                                commits: h
                            }, {
                                label: "🌆 2",
                                commits: g
                            }, {
                                label: "🌃 3",
                                commits: w
                            }, {
                                label: "🌙 4",
                                commits: T
                            }];
                            y = E.reduce(function (e, r) {
                                var t = r.commits / b * 100;
                                var n = [("" + r.label).padEnd(10), (r.commits.toString().padStart(5) + " commits").padEnd(14), l["default"](t, 21), String(t.toFixed(1)).padStart(5) + "%"];
                                return o(e, [n.join(" ")])
                            }, []);
                            v = new c.Octokit({
                                auth: "token " + process.env.GH_TOKEN
                            });
                            return [4, v.gists.get({
                                gist_id: process.env.GIST_ID
                            })["catch"](function (e) {
                                return console.error("Unable to update gist\n" + e)
                            })];
                        case 5:
                            _ = s.sent();
                            if (!_) return [2];
                            S = Object.keys(_.data.files)[0];
                            return [4, v.gists.update({
                                gist_id: process.env.GIST_ID,
                                files: (P = {}, P[S] = {
                                    filename: h + g > w + T ? "I'm an early 🐤" : "I'm a night 🦉",
                                    content: y.join("\n")
                                }, P)
                            })];
                        case 6:
                            s.sent();
                            return [2]
                    }
                })
            })
        })()
    },
    448: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = t(796);
        var s = t(523);
        var o = t(753);
        var i = t(898);
        var a = t(813);
        const c = "2.5.0";
        class Octokit {
            constructor(e = {}) {
                const r = new s.Collection;
                const t = {
                    baseUrl: o.request.endpoint.DEFAULTS.baseUrl,
                    headers: {},
                    request: Object.assign({}, e.request, {
                        hook: r.bind(null, "request")
                    }),
                    mediaType: {
                        previews: [],
                        format: ""
                    }
                };
                t.headers["user-agent"] = [e.userAgent, `octokit-core.js/${c} ${n.getUserAgent()}`].filter(Boolean).join(" ");
                if (e.baseUrl) {
                    t.baseUrl = e.baseUrl
                }
                if (e.previews) {
                    t.mediaType.previews = e.previews
                }
                if (e.timeZone) {
                    t.headers["time-zone"] = e.timeZone
                }
                this.request = o.request.defaults(t);
                this.graphql = i.withCustomRequest(this.request).defaults(t);
                this.log = Object.assign({
                    debug: () => {},
                    info: () => {},
                    warn: console.warn.bind(console),
                    error: console.error.bind(console)
                }, e.log);
                this.hook = r;
                if (!e.authStrategy) {
                    if (!e.auth) {
                        this.auth = (async () => ({
                            type: "unauthenticated"
                        }))
                    } else {
                        const t = a.createTokenAuth(e.auth);
                        r.wrap("request", t.hook);
                        this.auth = t
                    }
                } else {
                    const t = e.authStrategy(Object.assign({
                        request: this.request
                    }, e.auth));
                    r.wrap("request", t.hook);
                    this.auth = t
                }
                const u = this.constructor;
                u.plugins.forEach(r => {
                    Object.assign(this, r(this, e))
                })
            }
            static defaults(e) {
                const r = class extends(this) {
                    constructor(...r) {
                        const t = r[0] || {};
                        super(Object.assign({}, e, t, t.userAgent && e.userAgent ? {
                            userAgent: `${t.userAgent} ${e.userAgent}`
                        } : null))
                    }
                };
                return r
            }
            static plugin(e, ...r) {
                var t;
                if (e instanceof Array) {
                    console.warn(["Passing an array of plugins to Octokit.plugin() has been deprecated.", "Instead of:", "  Octokit.plugin([plugin1, plugin2, ...])", "Use:", "  Octokit.plugin(plugin1, plugin2, ...)"].join("\n"))
                }
                const n = this.plugins;
                let s = [...e instanceof Array ? e : [e], ...r];
                const o = (t = class extends(this) {}, t.plugins = n.concat(s.filter(e => !n.includes(e))), t);
                return o
            }
        }
        Octokit.VERSION = c;
        Octokit.plugins = [];
        r.Octokit = Octokit
    },
    453: function (e, r, t) {
        var n = t(969);
        var s = t(9);
        var o = t(747);
        var i = function () {};
        var a = /^v?\.0/.test(process.version);
        var c = function (e) {
            return typeof e === "function"
        };
        var u = function (e) {
            if (!a) return false;
            if (!o) return false;
            return (e instanceof(o.ReadStream || i) || e instanceof(o.WriteStream || i)) && c(e.close)
        };
        var l = function (e) {
            return e.setHeader && c(e.abort)
        };
        var p = function (e, r, t, o) {
            o = n(o);
            var a = false;
            e.on("close", function () {
                a = true
            });
            s(e, {
                readable: r,
                writable: t
            }, function (e) {
                if (e) return o(e);
                a = true;
                o()
            });
            var p = false;
            return function (r) {
                if (a) return;
                if (p) return;
                p = true;
                if (u(e)) return e.close(i);
                if (l(e)) return e.abort();
                if (c(e.destroy)) return e.destroy();
                o(r || new Error("stream was destroyed"))
            }
        };
        var f = function (e) {
            e()
        };
        var d = function (e, r) {
            return e.pipe(r)
        };
        var m = function () {
            var e = Array.prototype.slice.call(arguments);
            var r = c(e[e.length - 1] || i) && e.pop() || i;
            if (Array.isArray(e[0])) e = e[0];
            if (e.length < 2) throw new Error("pump requires two streams per minimum");
            var t;
            var n = e.map(function (s, o) {
                var i = o < e.length - 1;
                var a = o > 0;
                return p(s, i, a, function (e) {
                    if (!t) t = e;
                    if (e) n.forEach(f);
                    if (i) return;
                    n.forEach(f);
                    r(t)
                })
            });
            return e.reduce(d)
        };
        e.exports = m
    },
    454: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });

        function _interopDefault(e) {
            return e && typeof e === "object" && "default" in e ? e["default"] : e
        }
        var n = _interopDefault(t(413));
        var s = _interopDefault(t(605));
        var o = _interopDefault(t(835));
        var i = _interopDefault(t(211));
        var a = _interopDefault(t(761));
        const c = n.Readable;
        const u = Symbol("buffer");
        const l = Symbol("type");
        class Blob {
            constructor() {
                this[l] = "";
                const e = arguments[0];
                const r = arguments[1];
                const t = [];
                let n = 0;
                if (e) {
                    const r = e;
                    const s = Number(r.length);
                    for (let e = 0; e < s; e++) {
                        const s = r[e];
                        let o;
                        if (s instanceof Buffer) {
                            o = s
                        } else if (ArrayBuffer.isView(s)) {
                            o = Buffer.from(s.buffer, s.byteOffset, s.byteLength)
                        } else if (s instanceof ArrayBuffer) {
                            o = Buffer.from(s)
                        } else if (s instanceof Blob) {
                            o = s[u]
                        } else {
                            o = Buffer.from(typeof s === "string" ? s : String(s))
                        }
                        n += o.length;
                        t.push(o)
                    }
                }
                this[u] = Buffer.concat(t);
                let s = r && r.type !== undefined && String(r.type).toLowerCase();
                if (s && !/[^\u0020-\u007E]/.test(s)) {
                    this[l] = s
                }
            }
            get size() {
                return this[u].length
            }
            get type() {
                return this[l]
            }
            text() {
                return Promise.resolve(this[u].toString())
            }
            arrayBuffer() {
                const e = this[u];
                const r = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                return Promise.resolve(r)
            }
            stream() {
                const e = new c;
                e._read = function () {};
                e.push(this[u]);
                e.push(null);
                return e
            }
            toString() {
                return "[object Blob]"
            }
            slice() {
                const e = this.size;
                const r = arguments[0];
                const t = arguments[1];
                let n, s;
                if (r === undefined) {
                    n = 0
                } else if (r < 0) {
                    n = Math.max(e + r, 0)
                } else {
                    n = Math.min(r, e)
                }
                if (t === undefined) {
                    s = e
                } else if (t < 0) {
                    s = Math.max(e + t, 0)
                } else {
                    s = Math.min(t, e)
                }
                const o = Math.max(s - n, 0);
                const i = this[u];
                const a = i.slice(n, n + o);
                const c = new Blob([], {
                    type: arguments[2]
                });
                c[u] = a;
                return c
            }
        }
        Object.defineProperties(Blob.prototype, {
            size: {
                enumerable: true
            },
            type: {
                enumerable: true
            },
            slice: {
                enumerable: true
            }
        });
        Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
            value: "Blob",
            writable: false,
            enumerable: false,
            configurable: true
        });

        function FetchError(e, r, t) {
            Error.call(this, e);
            this.message = e;
            this.type = r;
            if (t) {
                this.code = this.errno = t.code
            }
            Error.captureStackTrace(this, this.constructor)
        }
        FetchError.prototype = Object.create(Error.prototype);
        FetchError.prototype.constructor = FetchError;
        FetchError.prototype.name = "FetchError";
        let p;
        try {
            p = t(18).convert
        } catch (e) {}
        const f = Symbol("Body internals");
        const d = n.PassThrough;

        function Body(e) {
            var r = this;
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                s = t.size;
            let o = s === undefined ? 0 : s;
            var i = t.timeout;
            let a = i === undefined ? 0 : i;
            if (e == null) {
                e = null
            } else if (isURLSearchParams(e)) {
                e = Buffer.from(e.toString())
            } else if (isBlob(e));
            else if (Buffer.isBuffer(e));
            else if (Object.prototype.toString.call(e) === "[object ArrayBuffer]") {
                e = Buffer.from(e)
            } else if (ArrayBuffer.isView(e)) {
                e = Buffer.from(e.buffer, e.byteOffset, e.byteLength)
            } else if (e instanceof n);
            else {
                e = Buffer.from(String(e))
            }
            this[f] = {
                body: e,
                disturbed: false,
                error: null
            };
            this.size = o;
            this.timeout = a;
            if (e instanceof n) {
                e.on("error", function (e) {
                    const t = e.name === "AbortError" ? e : new FetchError(`Invalid response body while trying to fetch ${r.url}: ${e.message}`, "system", e);
                    r[f].error = t
                })
            }
        }
        Body.prototype = {
            get body() {
                return this[f].body
            },
            get bodyUsed() {
                return this[f].disturbed
            },
            arrayBuffer() {
                return consumeBody.call(this).then(function (e) {
                    return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                })
            },
            blob() {
                let e = this.headers && this.headers.get("content-type") || "";
                return consumeBody.call(this).then(function (r) {
                    return Object.assign(new Blob([], {
                        type: e.toLowerCase()
                    }), {
                        [u]: r
                    })
                })
            },
            json() {
                var e = this;
                return consumeBody.call(this).then(function (r) {
                    try {
                        return JSON.parse(r.toString())
                    } catch (r) {
                        return Body.Promise.reject(new FetchError(`invalid json response body at ${e.url} reason: ${r.message}`, "invalid-json"))
                    }
                })
            },
            text() {
                return consumeBody.call(this).then(function (e) {
                    return e.toString()
                })
            },
            buffer() {
                return consumeBody.call(this)
            },
            textConverted() {
                var e = this;
                return consumeBody.call(this).then(function (r) {
                    return convertBody(r, e.headers)
                })
            }
        };
        Object.defineProperties(Body.prototype, {
            body: {
                enumerable: true
            },
            bodyUsed: {
                enumerable: true
            },
            arrayBuffer: {
                enumerable: true
            },
            blob: {
                enumerable: true
            },
            json: {
                enumerable: true
            },
            text: {
                enumerable: true
            }
        });
        Body.mixIn = function (e) {
            for (const r of Object.getOwnPropertyNames(Body.prototype)) {
                if (!(r in e)) {
                    const t = Object.getOwnPropertyDescriptor(Body.prototype, r);
                    Object.defineProperty(e, r, t)
                }
            }
        };

        function consumeBody() {
            var e = this;
            if (this[f].disturbed) {
                return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`))
            }
            this[f].disturbed = true;
            if (this[f].error) {
                return Body.Promise.reject(this[f].error)
            }
            let r = this.body;
            if (r === null) {
                return Body.Promise.resolve(Buffer.alloc(0))
            }
            if (isBlob(r)) {
                r = r.stream()
            }
            if (Buffer.isBuffer(r)) {
                return Body.Promise.resolve(r)
            }
            if (!(r instanceof n)) {
                return Body.Promise.resolve(Buffer.alloc(0))
            }
            let t = [];
            let s = 0;
            let o = false;
            return new Body.Promise(function (n, i) {
                let a;
                if (e.timeout) {
                    a = setTimeout(function () {
                        o = true;
                        i(new FetchError(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`, "body-timeout"))
                    }, e.timeout)
                }
                r.on("error", function (r) {
                    if (r.name === "AbortError") {
                        o = true;
                        i(r)
                    } else {
                        i(new FetchError(`Invalid response body while trying to fetch ${e.url}: ${r.message}`, "system", r))
                    }
                });
                r.on("data", function (r) {
                    if (o || r === null) {
                        return
                    }
                    if (e.size && s + r.length > e.size) {
                        o = true;
                        i(new FetchError(`content size at ${e.url} over limit: ${e.size}`, "max-size"));
                        return
                    }
                    s += r.length;
                    t.push(r)
                });
                r.on("end", function () {
                    if (o) {
                        return
                    }
                    clearTimeout(a);
                    try {
                        n(Buffer.concat(t, s))
                    } catch (r) {
                        i(new FetchError(`Could not create Buffer from response body for ${e.url}: ${r.message}`, "system", r))
                    }
                })
            })
        }

        function convertBody(e, r) {
            if (typeof p !== "function") {
                throw new Error("The package `encoding` must be installed to use the textConverted() function")
            }
            const t = r.get("content-type");
            let n = "utf-8";
            let s, o;
            if (t) {
                s = /charset=([^;]*)/i.exec(t)
            }
            o = e.slice(0, 1024).toString();
            if (!s && o) {
                s = /<meta.+?charset=(['"])(.+?)\1/i.exec(o)
            }
            if (!s && o) {
                s = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o);
                if (s) {
                    s = /charset=(.*)/i.exec(s.pop())
                }
            }
            if (!s && o) {
                s = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)
            }
            if (s) {
                n = s.pop();
                if (n === "gb2312" || n === "gbk") {
                    n = "gb18030"
                }
            }
            return p(e, "UTF-8", n).toString()
        }

        function isURLSearchParams(e) {
            if (typeof e !== "object" || typeof e.append !== "function" || typeof e.delete !== "function" || typeof e.get !== "function" || typeof e.getAll !== "function" || typeof e.has !== "function" || typeof e.set !== "function") {
                return false
            }
            return e.constructor.name === "URLSearchParams" || Object.prototype.toString.call(e) === "[object URLSearchParams]" || typeof e.sort === "function"
        }

        function isBlob(e) {
            return typeof e === "object" && typeof e.arrayBuffer === "function" && typeof e.type === "string" && typeof e.stream === "function" && typeof e.constructor === "function" && typeof e.constructor.name === "string" && /^(Blob|File)$/.test(e.constructor.name) && /^(Blob|File)$/.test(e[Symbol.toStringTag])
        }

        function clone(e) {
            let r, t;
            let s = e.body;
            if (e.bodyUsed) {
                throw new Error("cannot clone body after it is used")
            }
            if (s instanceof n && typeof s.getBoundary !== "function") {
                r = new d;
                t = new d;
                s.pipe(r);
                s.pipe(t);
                e[f].body = r;
                s = t
            }
            return s
        }

        function extractContentType(e) {
            if (e === null) {
                return null
            } else if (typeof e === "string") {
                return "text/plain;charset=UTF-8"
            } else if (isURLSearchParams(e)) {
                return "application/x-www-form-urlencoded;charset=UTF-8"
            } else if (isBlob(e)) {
                return e.type || null
            } else if (Buffer.isBuffer(e)) {
                return null
            } else if (Object.prototype.toString.call(e) === "[object ArrayBuffer]") {
                return null
            } else if (ArrayBuffer.isView(e)) {
                return null
            } else if (typeof e.getBoundary === "function") {
                return `multipart/form-data;boundary=${e.getBoundary()}`
            } else if (e instanceof n) {
                return null
            } else {
                return "text/plain;charset=UTF-8"
            }
        }

        function getTotalBytes(e) {
            const r = e.body;
            if (r === null) {
                return 0
            } else if (isBlob(r)) {
                return r.size
            } else if (Buffer.isBuffer(r)) {
                return r.length
            } else if (r && typeof r.getLengthSync === "function") {
                if (r._lengthRetrievers && r._lengthRetrievers.length == 0 || r.hasKnownLength && r.hasKnownLength()) {
                    return r.getLengthSync()
                }
                return null
            } else {
                return null
            }
        }

        function writeToStream(e, r) {
            const t = r.body;
            if (t === null) {
                e.end()
            } else if (isBlob(t)) {
                t.stream().pipe(e)
            } else if (Buffer.isBuffer(t)) {
                e.write(t);
                e.end()
            } else {
                t.pipe(e)
            }
        }
        Body.Promise = global.Promise;
        const m = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
        const h = /[^\t\x20-\x7e\x80-\xff]/;

        function validateName(e) {
            e = `${e}`;
            if (m.test(e) || e === "") {
                throw new TypeError(`${e} is not a legal HTTP header name`)
            }
        }

        function validateValue(e) {
            e = `${e}`;
            if (h.test(e)) {
                throw new TypeError(`${e} is not a legal HTTP header value`)
            }
        }

        function find(e, r) {
            r = r.toLowerCase();
            for (const t in e) {
                if (t.toLowerCase() === r) {
                    return t
                }
            }
            return undefined
        }
        const g = Symbol("map");
        class Headers {
            constructor() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
                this[g] = Object.create(null);
                if (e instanceof Headers) {
                    const r = e.raw();
                    const t = Object.keys(r);
                    for (const e of t) {
                        for (const t of r[e]) {
                            this.append(e, t)
                        }
                    }
                    return
                }
                if (e == null);
                else if (typeof e === "object") {
                    const r = e[Symbol.iterator];
                    if (r != null) {
                        if (typeof r !== "function") {
                            throw new TypeError("Header pairs must be iterable")
                        }
                        const t = [];
                        for (const r of e) {
                            if (typeof r !== "object" || typeof r[Symbol.iterator] !== "function") {
                                throw new TypeError("Each header pair must be iterable")
                            }
                            t.push(Array.from(r))
                        }
                        for (const e of t) {
                            if (e.length !== 2) {
                                throw new TypeError("Each header pair must be a name/value tuple")
                            }
                            this.append(e[0], e[1])
                        }
                    } else {
                        for (const r of Object.keys(e)) {
                            const t = e[r];
                            this.append(r, t)
                        }
                    }
                } else {
                    throw new TypeError("Provided initializer must be an object")
                }
            }
            get(e) {
                e = `${e}`;
                validateName(e);
                const r = find(this[g], e);
                if (r === undefined) {
                    return null
                }
                return this[g][r].join(", ")
            }
            forEach(e) {
                let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
                let t = getHeaders(this);
                let n = 0;
                while (n < t.length) {
                    var s = t[n];
                    const o = s[0],
                        i = s[1];
                    e.call(r, i, o, this);
                    t = getHeaders(this);
                    n++
                }
            }
            set(e, r) {
                e = `${e}`;
                r = `${r}`;
                validateName(e);
                validateValue(r);
                const t = find(this[g], e);
                this[g][t !== undefined ? t : e] = [r]
            }
            append(e, r) {
                e = `${e}`;
                r = `${r}`;
                validateName(e);
                validateValue(r);
                const t = find(this[g], e);
                if (t !== undefined) {
                    this[g][t].push(r)
                } else {
                    this[g][e] = [r]
                }
            }
            has(e) {
                e = `${e}`;
                validateName(e);
                return find(this[g], e) !== undefined
            }
            delete(e) {
                e = `${e}`;
                validateName(e);
                const r = find(this[g], e);
                if (r !== undefined) {
                    delete this[g][r]
                }
            }
            raw() {
                return this[g]
            }
            keys() {
                return createHeadersIterator(this, "key")
            }
            values() {
                return createHeadersIterator(this, "value")
            } [Symbol.iterator]() {
                return createHeadersIterator(this, "key+value")
            }
        }
        Headers.prototype.entries = Headers.prototype[Symbol.iterator];
        Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
            value: "Headers",
            writable: false,
            enumerable: false,
            configurable: true
        });
        Object.defineProperties(Headers.prototype, {
            get: {
                enumerable: true
            },
            forEach: {
                enumerable: true
            },
            set: {
                enumerable: true
            },
            append: {
                enumerable: true
            },
            has: {
                enumerable: true
            },
            delete: {
                enumerable: true
            },
            keys: {
                enumerable: true
            },
            values: {
                enumerable: true
            },
            entries: {
                enumerable: true
            }
        });

        function getHeaders(e) {
            let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "key+value";
            const t = Object.keys(e[g]).sort();
            return t.map(r === "key" ? function (e) {
                return e.toLowerCase()
            } : r === "value" ? function (r) {
                return e[g][r].join(", ")
            } : function (r) {
                return [r.toLowerCase(), e[g][r].join(", ")]
            })
        }
        const w = Symbol("internal");

        function createHeadersIterator(e, r) {
            const t = Object.create(T);
            t[w] = {
                target: e,
                kind: r,
                index: 0
            };
            return t
        }
        const T = Object.setPrototypeOf({
            next() {
                if (!this || Object.getPrototypeOf(this) !== T) {
                    throw new TypeError("Value of `this` is not a HeadersIterator")
                }
                var e = this[w];
                const r = e.target,
                    t = e.kind,
                    n = e.index;
                const s = getHeaders(r, t);
                const o = s.length;
                if (n >= o) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                this[w].index = n + 1;
                return {
                    value: s[n],
                    done: false
                }
            }
        }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
        Object.defineProperty(T, Symbol.toStringTag, {
            value: "HeadersIterator",
            writable: false,
            enumerable: false,
            configurable: true
        });

        function exportNodeCompatibleHeaders(e) {
            const r = Object.assign({
                __proto__: null
            }, e[g]);
            const t = find(e[g], "Host");
            if (t !== undefined) {
                r[t] = r[t][0]
            }
            return r
        }

        function createHeadersLenient(e) {
            const r = new Headers;
            for (const t of Object.keys(e)) {
                if (m.test(t)) {
                    continue
                }
                if (Array.isArray(e[t])) {
                    for (const n of e[t]) {
                        if (h.test(n)) {
                            continue
                        }
                        if (r[g][t] === undefined) {
                            r[g][t] = [n]
                        } else {
                            r[g][t].push(n)
                        }
                    }
                } else if (!h.test(e[t])) {
                    r[g][t] = [e[t]]
                }
            }
            return r
        }
        const b = Symbol("Response internals");
        const E = s.STATUS_CODES;
        class Response {
            constructor() {
                let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                Body.call(this, e, r);
                const t = r.status || 200;
                const n = new Headers(r.headers);
                if (e != null && !n.has("Content-Type")) {
                    const r = extractContentType(e);
                    if (r) {
                        n.append("Content-Type", r)
                    }
                }
                this[b] = {
                    url: r.url,
                    status: t,
                    statusText: r.statusText || E[t],
                    headers: n,
                    counter: r.counter
                }
            }
            get url() {
                return this[b].url || ""
            }
            get status() {
                return this[b].status
            }
            get ok() {
                return this[b].status >= 200 && this[b].status < 300
            }
            get redirected() {
                return this[b].counter > 0
            }
            get statusText() {
                return this[b].statusText
            }
            get headers() {
                return this[b].headers
            }
            clone() {
                return new Response(clone(this), {
                    url: this.url,
                    status: this.status,
                    statusText: this.statusText,
                    headers: this.headers,
                    ok: this.ok,
                    redirected: this.redirected
                })
            }
        }
        Body.mixIn(Response.prototype);
        Object.defineProperties(Response.prototype, {
            url: {
                enumerable: true
            },
            status: {
                enumerable: true
            },
            ok: {
                enumerable: true
            },
            redirected: {
                enumerable: true
            },
            statusText: {
                enumerable: true
            },
            headers: {
                enumerable: true
            },
            clone: {
                enumerable: true
            }
        });
        Object.defineProperty(Response.prototype, Symbol.toStringTag, {
            value: "Response",
            writable: false,
            enumerable: false,
            configurable: true
        });
        const y = Symbol("Request internals");
        const v = o.parse;
        const _ = o.format;
        const S = "destroy" in n.Readable.prototype;

        function isRequest(e) {
            return typeof e === "object" && typeof e[y] === "object"
        }

        function isAbortSignal(e) {
            const r = e && typeof e === "object" && Object.getPrototypeOf(e);
            return !!(r && r.constructor.name === "AbortSignal")
        }
        class Request {
            constructor(e) {
                let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                let t;
                if (!isRequest(e)) {
                    if (e && e.href) {
                        t = v(e.href)
                    } else {
                        t = v(`${e}`)
                    }
                    e = {}
                } else {
                    t = v(e.url)
                }
                let n = r.method || e.method || "GET";
                n = n.toUpperCase();
                if ((r.body != null || isRequest(e) && e.body !== null) && (n === "GET" || n === "HEAD")) {
                    throw new TypeError("Request with GET/HEAD method cannot have body")
                }
                let s = r.body != null ? r.body : isRequest(e) && e.body !== null ? clone(e) : null;
                Body.call(this, s, {
                    timeout: r.timeout || e.timeout || 0,
                    size: r.size || e.size || 0
                });
                const o = new Headers(r.headers || e.headers || {});
                if (s != null && !o.has("Content-Type")) {
                    const e = extractContentType(s);
                    if (e) {
                        o.append("Content-Type", e)
                    }
                }
                let i = isRequest(e) ? e.signal : null;
                if ("signal" in r) i = r.signal;
                if (i != null && !isAbortSignal(i)) {
                    throw new TypeError("Expected signal to be an instanceof AbortSignal")
                }
                this[y] = {
                    method: n,
                    redirect: r.redirect || e.redirect || "follow",
                    headers: o,
                    parsedURL: t,
                    signal: i
                };
                this.follow = r.follow !== undefined ? r.follow : e.follow !== undefined ? e.follow : 20;
                this.compress = r.compress !== undefined ? r.compress : e.compress !== undefined ? e.compress : true;
                this.counter = r.counter || e.counter || 0;
                this.agent = r.agent || e.agent
            }
            get method() {
                return this[y].method
            }
            get url() {
                return _(this[y].parsedURL)
            }
            get headers() {
                return this[y].headers
            }
            get redirect() {
                return this[y].redirect
            }
            get signal() {
                return this[y].signal
            }
            clone() {
                return new Request(this)
            }
        }
        Body.mixIn(Request.prototype);
        Object.defineProperty(Request.prototype, Symbol.toStringTag, {
            value: "Request",
            writable: false,
            enumerable: false,
            configurable: true
        });
        Object.defineProperties(Request.prototype, {
            method: {
                enumerable: true
            },
            url: {
                enumerable: true
            },
            headers: {
                enumerable: true
            },
            redirect: {
                enumerable: true
            },
            clone: {
                enumerable: true
            },
            signal: {
                enumerable: true
            }
        });

        function getNodeRequestOptions(e) {
            const r = e[y].parsedURL;
            const t = new Headers(e[y].headers);
            if (!t.has("Accept")) {
                t.set("Accept", "*/*")
            }
            if (!r.protocol || !r.hostname) {
                throw new TypeError("Only absolute URLs are supported")
            }
            if (!/^https?:$/.test(r.protocol)) {
                throw new TypeError("Only HTTP(S) protocols are supported")
            }
            if (e.signal && e.body instanceof n.Readable && !S) {
                throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8")
            }
            let s = null;
            if (e.body == null && /^(POST|PUT)$/i.test(e.method)) {
                s = "0"
            }
            if (e.body != null) {
                const r = getTotalBytes(e);
                if (typeof r === "number") {
                    s = String(r)
                }
            }
            if (s) {
                t.set("Content-Length", s)
            }
            if (!t.has("User-Agent")) {
                t.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)")
            }
            if (e.compress && !t.has("Accept-Encoding")) {
                t.set("Accept-Encoding", "gzip,deflate")
            }
            let o = e.agent;
            if (typeof o === "function") {
                o = o(r)
            }
            if (!t.has("Connection") && !o) {
                t.set("Connection", "close")
            }
            return Object.assign({}, r, {
                method: e.method,
                headers: exportNodeCompatibleHeaders(t),
                agent: o
            })
        }

        function AbortError(e) {
            Error.call(this, e);
            this.type = "aborted";
            this.message = e;
            Error.captureStackTrace(this, this.constructor)
        }
        AbortError.prototype = Object.create(Error.prototype);
        AbortError.prototype.constructor = AbortError;
        AbortError.prototype.name = "AbortError";
        const P = n.PassThrough;
        const O = o.resolve;

        function fetch(e, r) {
            if (!fetch.Promise) {
                throw new Error("native promise missing, set fetch.Promise to your favorite alternative")
            }
            Body.Promise = fetch.Promise;
            return new fetch.Promise(function (t, o) {
                const c = new Request(e, r);
                const u = getNodeRequestOptions(c);
                const l = (u.protocol === "https:" ? i : s).request;
                const p = c.signal;
                let f = null;
                const d = function abort() {
                    let e = new AbortError("The user aborted a request.");
                    o(e);
                    if (c.body && c.body instanceof n.Readable) {
                        c.body.destroy(e)
                    }
                    if (!f || !f.body) return;
                    f.body.emit("error", e)
                };
                if (p && p.aborted) {
                    d();
                    return
                }
                const m = function abortAndFinalize() {
                    d();
                    finalize()
                };
                const h = l(u);
                let g;
                if (p) {
                    p.addEventListener("abort", m)
                }

                function finalize() {
                    h.abort();
                    if (p) p.removeEventListener("abort", m);
                    clearTimeout(g)
                }
                if (c.timeout) {
                    h.once("socket", function (e) {
                        g = setTimeout(function () {
                            o(new FetchError(`network timeout at: ${c.url}`, "request-timeout"));
                            finalize()
                        }, c.timeout)
                    })
                }
                h.on("error", function (e) {
                    o(new FetchError(`request to ${c.url} failed, reason: ${e.message}`, "system", e));
                    finalize()
                });
                h.on("response", function (e) {
                    clearTimeout(g);
                    const r = createHeadersLenient(e.headers);
                    if (fetch.isRedirect(e.statusCode)) {
                        const n = r.get("Location");
                        const s = n === null ? null : O(c.url, n);
                        switch (c.redirect) {
                            case "error":
                                o(new FetchError(`redirect mode is set to error: ${c.url}`, "no-redirect"));
                                finalize();
                                return;
                            case "manual":
                                if (s !== null) {
                                    try {
                                        r.set("Location", s)
                                    } catch (e) {
                                        o(e)
                                    }
                                }
                                break;
                            case "follow":
                                if (s === null) {
                                    break
                                }
                                if (c.counter >= c.follow) {
                                    o(new FetchError(`maximum redirect reached at: ${c.url}`, "max-redirect"));
                                    finalize();
                                    return
                                }
                                const n = {
                                    headers: new Headers(c.headers),
                                    follow: c.follow,
                                    counter: c.counter + 1,
                                    agent: c.agent,
                                    compress: c.compress,
                                    method: c.method,
                                    body: c.body,
                                    signal: c.signal,
                                    timeout: c.timeout
                                };
                                if (e.statusCode !== 303 && c.body && getTotalBytes(c) === null) {
                                    o(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
                                    finalize();
                                    return
                                }
                                if (e.statusCode === 303 || (e.statusCode === 301 || e.statusCode === 302) && c.method === "POST") {
                                    n.method = "GET";
                                    n.body = undefined;
                                    n.headers.delete("content-length")
                                }
                                t(fetch(new Request(s, n)));
                                finalize();
                                return
                        }
                    }
                    e.once("end", function () {
                        if (p) p.removeEventListener("abort", m)
                    });
                    let n = e.pipe(new P);
                    const s = {
                        url: c.url,
                        status: e.statusCode,
                        statusText: e.statusMessage,
                        headers: r,
                        size: c.size,
                        timeout: c.timeout,
                        counter: c.counter
                    };
                    const i = r.get("Content-Encoding");
                    if (!c.compress || c.method === "HEAD" || i === null || e.statusCode === 204 || e.statusCode === 304) {
                        f = new Response(n, s);
                        t(f);
                        return
                    }
                    const u = {
                        flush: a.Z_SYNC_FLUSH,
                        finishFlush: a.Z_SYNC_FLUSH
                    };
                    if (i == "gzip" || i == "x-gzip") {
                        n = n.pipe(a.createGunzip(u));
                        f = new Response(n, s);
                        t(f);
                        return
                    }
                    if (i == "deflate" || i == "x-deflate") {
                        const r = e.pipe(new P);
                        r.once("data", function (e) {
                            if ((e[0] & 15) === 8) {
                                n = n.pipe(a.createInflate())
                            } else {
                                n = n.pipe(a.createInflateRaw())
                            }
                            f = new Response(n, s);
                            t(f)
                        });
                        return
                    }
                    if (i == "br" && typeof a.createBrotliDecompress === "function") {
                        n = n.pipe(a.createBrotliDecompress());
                        f = new Response(n, s);
                        t(f);
                        return
                    }
                    f = new Response(n, s);
                    t(f)
                });
                writeToStream(h, c)
            })
        }
        fetch.isRedirect = function (e) {
            return e === 301 || e === 302 || e === 303 || e === 307 || e === 308
        };
        fetch.Promise = global.Promise;
        e.exports = r = fetch;
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        r.default = r;
        r.Headers = Headers;
        r.Request = Request;
        r.Response = Response;
        r.FetchError = FetchError
    },
    462: function (e) {
        "use strict";
        const r = /([()\][%!^"`<>&|;, *?])/g;

        function escapeCommand(e) {
            e = e.replace(r, "^$1");
            return e
        }

        function escapeArgument(e, t) {
            e = `${e}`;
            e = e.replace(/(\\*)"/g, '$1$1\\"');
            e = e.replace(/(\\*)$/, "$1$1");
            e = `"${e}"`;
            e = e.replace(r, "^$1");
            if (t) {
                e = e.replace(r, "^$1")
            }
            return e
        }
        e.exports.command = escapeCommand;
        e.exports.argument = escapeArgument
    },
    463: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });

        function _interopDefault(e) {
            return e && typeof e === "object" && "default" in e ? e["default"] : e
        }
        var n = t(692);
        var s = _interopDefault(t(969));
        const o = s(e => console.warn(e));
        class RequestError extends Error {
            constructor(e, r, t) {
                super(e);
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, this.constructor)
                }
                this.name = "HttpError";
                this.status = r;
                Object.defineProperty(this, "code", {
                    get() {
                        o(new n.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                        return r
                    }
                });
                this.headers = t.headers || {};
                const s = Object.assign({}, t.request);
                if (t.request.headers.authorization) {
                    s.headers = Object.assign({}, t.request.headers, {
                        authorization: t.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
                    })
                }
                s.url = s.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
                this.request = s
            }
        }
        r.RequestError = RequestError
    },
    470: function (e, r) {
        r = e.exports = SemVer;
        var t;
        if (typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
            t = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                e.unshift("SEMVER");
                console.log.apply(console, e)
            }
        } else {
            t = function () {}
        }
        r.SEMVER_SPEC_VERSION = "2.0.0";
        var n = 256;
        var s = Number.MAX_SAFE_INTEGER || 9007199254740991;
        var o = 16;
        var i = r.re = [];
        var a = r.src = [];
        var c = 0;
        var u = c++;
        a[u] = "0|[1-9]\\d*";
        var l = c++;
        a[l] = "[0-9]+";
        var p = c++;
        a[p] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
        var f = c++;
        a[f] = "(" + a[u] + ")\\." + "(" + a[u] + ")\\." + "(" + a[u] + ")";
        var d = c++;
        a[d] = "(" + a[l] + ")\\." + "(" + a[l] + ")\\." + "(" + a[l] + ")";
        var m = c++;
        a[m] = "(?:" + a[u] + "|" + a[p] + ")";
        var h = c++;
        a[h] = "(?:" + a[l] + "|" + a[p] + ")";
        var g = c++;
        a[g] = "(?:-(" + a[m] + "(?:\\." + a[m] + ")*))";
        var w = c++;
        a[w] = "(?:-?(" + a[h] + "(?:\\." + a[h] + ")*))";
        var T = c++;
        a[T] = "[0-9A-Za-z-]+";
        var b = c++;
        a[b] = "(?:\\+(" + a[T] + "(?:\\." + a[T] + ")*))";
        var E = c++;
        var y = "v?" + a[f] + a[g] + "?" + a[b] + "?";
        a[E] = "^" + y + "$";
        var v = "[v=\\s]*" + a[d] + a[w] + "?" + a[b] + "?";
        var _ = c++;
        a[_] = "^" + v + "$";
        var S = c++;
        a[S] = "((?:<|>)?=?)";
        var P = c++;
        a[P] = a[l] + "|x|X|\\*";
        var O = c++;
        a[O] = a[u] + "|x|X|\\*";
        var G = c++;
        a[G] = "[v=\\s]*(" + a[O] + ")" + "(?:\\.(" + a[O] + ")" + "(?:\\.(" + a[O] + ")" + "(?:" + a[g] + ")?" + a[b] + "?" + ")?)?";
        var C = c++;
        a[C] = "[v=\\s]*(" + a[P] + ")" + "(?:\\.(" + a[P] + ")" + "(?:\\.(" + a[P] + ")" + "(?:" + a[w] + ")?" + a[b] + "?" + ")?)?";
        var R = c++;
        a[R] = "^" + a[S] + "\\s*" + a[G] + "$";
        var j = c++;
        a[j] = "^" + a[S] + "\\s*" + a[C] + "$";
        var A = c++;
        a[A] = "(?:^|[^\\d])" + "(\\d{1," + o + "})" + "(?:\\.(\\d{1," + o + "}))?" + "(?:\\.(\\d{1," + o + "}))?" + "(?:$|[^\\d])";
        var x = c++;
        a[x] = "(?:~>?)";
        var k = c++;
        a[k] = "(\\s*)" + a[x] + "\\s+";
        i[k] = new RegExp(a[k], "g");
        var D = "$1~";
        var F = c++;
        a[F] = "^" + a[x] + a[G] + "$";
        var U = c++;
        a[U] = "^" + a[x] + a[C] + "$";
        var q = c++;
        a[q] = "(?:\\^)";
        var B = c++;
        a[B] = "(\\s*)" + a[q] + "\\s+";
        i[B] = new RegExp(a[B], "g");
        var L = "$1^";
        var I = c++;
        a[I] = "^" + a[q] + a[G] + "$";
        var $ = c++;
        a[$] = "^" + a[q] + a[C] + "$";
        var H = c++;
        a[H] = "^" + a[S] + "\\s*(" + v + ")$|^$";
        var V = c++;
        a[V] = "^" + a[S] + "\\s*(" + y + ")$|^$";
        var N = c++;
        a[N] = "(\\s*)" + a[S] + "\\s*(" + v + "|" + a[G] + ")";
        i[N] = new RegExp(a[N], "g");
        var z = "$1$2$3";
        var X = c++;
        a[X] = "^\\s*(" + a[G] + ")" + "\\s+-\\s+" + "(" + a[G] + ")" + "\\s*$";
        var K = c++;
        a[K] = "^\\s*(" + a[C] + ")" + "\\s+-\\s+" + "(" + a[C] + ")" + "\\s*$";
        var W = c++;
        a[W] = "(<|>)?=?\\s*\\*";
        for (var Z = 0; Z < c; Z++) {
            t(Z, a[Z]);
            if (!i[Z]) {
                i[Z] = new RegExp(a[Z])
            }
        }
        r.parse = parse;

        function parse(e, r) {
            if (!r || typeof r !== "object") {
                r = {
                    loose: !!r,
                    includePrerelease: false
                }
            }
            if (e instanceof SemVer) {
                return e
            }
            if (typeof e !== "string") {
                return null
            }
            if (e.length > n) {
                return null
            }
            var t = r.loose ? i[_] : i[E];
            if (!t.test(e)) {
                return null
            }
            try {
                return new SemVer(e, r)
            } catch (e) {
                return null
            }
        }
        r.valid = valid;

        function valid(e, r) {
            var t = parse(e, r);
            return t ? t.version : null
        }
        r.clean = clean;

        function clean(e, r) {
            var t = parse(e.trim().replace(/^[=v]+/, ""), r);
            return t ? t.version : null
        }
        r.SemVer = SemVer;

        function SemVer(e, r) {
            if (!r || typeof r !== "object") {
                r = {
                    loose: !!r,
                    includePrerelease: false
                }
            }
            if (e instanceof SemVer) {
                if (e.loose === r.loose) {
                    return e
                } else {
                    e = e.version
                }
            } else if (typeof e !== "string") {
                throw new TypeError("Invalid Version: " + e)
            }
            if (e.length > n) {
                throw new TypeError("version is longer than " + n + " characters")
            }
            if (!(this instanceof SemVer)) {
                return new SemVer(e, r)
            }
            t("SemVer", e, r);
            this.options = r;
            this.loose = !!r.loose;
            var o = e.trim().match(r.loose ? i[_] : i[E]);
            if (!o) {
                throw new TypeError("Invalid Version: " + e)
            }
            this.raw = e;
            this.major = +o[1];
            this.minor = +o[2];
            this.patch = +o[3];
            if (this.major > s || this.major < 0) {
                throw new TypeError("Invalid major version")
            }
            if (this.minor > s || this.minor < 0) {
                throw new TypeError("Invalid minor version")
            }
            if (this.patch > s || this.patch < 0) {
                throw new TypeError("Invalid patch version")
            }
            if (!o[4]) {
                this.prerelease = []
            } else {
                this.prerelease = o[4].split(".").map(function (e) {
                    if (/^[0-9]+$/.test(e)) {
                        var r = +e;
                        if (r >= 0 && r < s) {
                            return r
                        }
                    }
                    return e
                })
            }
            this.build = o[5] ? o[5].split(".") : [];
            this.format()
        }
        SemVer.prototype.format = function () {
            this.version = this.major + "." + this.minor + "." + this.patch;
            if (this.prerelease.length) {
                this.version += "-" + this.prerelease.join(".")
            }
            return this.version
        };
        SemVer.prototype.toString = function () {
            return this.version
        };
        SemVer.prototype.compare = function (e) {
            t("SemVer.compare", this.version, this.options, e);
            if (!(e instanceof SemVer)) {
                e = new SemVer(e, this.options)
            }
            return this.compareMain(e) || this.comparePre(e)
        };
        SemVer.prototype.compareMain = function (e) {
            if (!(e instanceof SemVer)) {
                e = new SemVer(e, this.options)
            }
            return compareIdentifiers(this.major, e.major) || compareIdentifiers(this.minor, e.minor) || compareIdentifiers(this.patch, e.patch)
        };
        SemVer.prototype.comparePre = function (e) {
            if (!(e instanceof SemVer)) {
                e = new SemVer(e, this.options)
            }
            if (this.prerelease.length && !e.prerelease.length) {
                return -1
            } else if (!this.prerelease.length && e.prerelease.length) {
                return 1
            } else if (!this.prerelease.length && !e.prerelease.length) {
                return 0
            }
            var r = 0;
            do {
                var n = this.prerelease[r];
                var s = e.prerelease[r];
                t("prerelease compare", r, n, s);
                if (n === undefined && s === undefined) {
                    return 0
                } else if (s === undefined) {
                    return 1
                } else if (n === undefined) {
                    return -1
                } else if (n === s) {
                    continue
                } else {
                    return compareIdentifiers(n, s)
                }
            } while (++r)
        };
        SemVer.prototype.inc = function (e, r) {
            switch (e) {
                case "premajor":
                    this.prerelease.length = 0;
                    this.patch = 0;
                    this.minor = 0;
                    this.major++;
                    this.inc("pre", r);
                    break;
                case "preminor":
                    this.prerelease.length = 0;
                    this.patch = 0;
                    this.minor++;
                    this.inc("pre", r);
                    break;
                case "prepatch":
                    this.prerelease.length = 0;
                    this.inc("patch", r);
                    this.inc("pre", r);
                    break;
                case "prerelease":
                    if (this.prerelease.length === 0) {
                        this.inc("patch", r)
                    }
                    this.inc("pre", r);
                    break;
                case "major":
                    if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                        this.major++
                    }
                    this.minor = 0;
                    this.patch = 0;
                    this.prerelease = [];
                    break;
                case "minor":
                    if (this.patch !== 0 || this.prerelease.length === 0) {
                        this.minor++
                    }
                    this.patch = 0;
                    this.prerelease = [];
                    break;
                case "patch":
                    if (this.prerelease.length === 0) {
                        this.patch++
                    }
                    this.prerelease = [];
                    break;
                case "pre":
                    if (this.prerelease.length === 0) {
                        this.prerelease = [0]
                    } else {
                        var t = this.prerelease.length;
                        while (--t >= 0) {
                            if (typeof this.prerelease[t] === "number") {
                                this.prerelease[t]++;
                                t = -2
                            }
                        }
                        if (t === -1) {
                            this.prerelease.push(0)
                        }
                    }
                    if (r) {
                        if (this.prerelease[0] === r) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = [r, 0]
                            }
                        } else {
                            this.prerelease = [r, 0]
                        }
                    }
                    break;
                default:
                    throw new Error("invalid increment argument: " + e)
            }
            this.format();
            this.raw = this.version;
            return this
        };
        r.inc = inc;

        function inc(e, r, t, n) {
            if (typeof t === "string") {
                n = t;
                t = undefined
            }
            try {
                return new SemVer(e, t).inc(r, n).version
            } catch (e) {
                return null
            }
        }
        r.diff = diff;

        function diff(e, r) {
            if (eq(e, r)) {
                return null
            } else {
                var t = parse(e);
                var n = parse(r);
                var s = "";
                if (t.prerelease.length || n.prerelease.length) {
                    s = "pre";
                    var o = "prerelease"
                }
                for (var i in t) {
                    if (i === "major" || i === "minor" || i === "patch") {
                        if (t[i] !== n[i]) {
                            return s + i
                        }
                    }
                }
                return o
            }
        }
        r.compareIdentifiers = compareIdentifiers;
        var J = /^[0-9]+$/;

        function compareIdentifiers(e, r) {
            var t = J.test(e);
            var n = J.test(r);
            if (t && n) {
                e = +e;
                r = +r
            }
            return e === r ? 0 : t && !n ? -1 : n && !t ? 1 : e < r ? -1 : 1
        }
        r.rcompareIdentifiers = rcompareIdentifiers;

        function rcompareIdentifiers(e, r) {
            return compareIdentifiers(r, e)
        }
        r.major = major;

        function major(e, r) {
            return new SemVer(e, r).major
        }
        r.minor = minor;

        function minor(e, r) {
            return new SemVer(e, r).minor
        }
        r.patch = patch;

        function patch(e, r) {
            return new SemVer(e, r).patch
        }
        r.compare = compare;

        function compare(e, r, t) {
            return new SemVer(e, t).compare(new SemVer(r, t))
        }
        r.compareLoose = compareLoose;

        function compareLoose(e, r) {
            return compare(e, r, true)
        }
        r.rcompare = rcompare;

        function rcompare(e, r, t) {
            return compare(r, e, t)
        }
        r.sort = sort;

        function sort(e, t) {
            return e.sort(function (e, n) {
                return r.compare(e, n, t)
            })
        }
        r.rsort = rsort;

        function rsort(e, t) {
            return e.sort(function (e, n) {
                return r.rcompare(e, n, t)
            })
        }
        r.gt = gt;

        function gt(e, r, t) {
            return compare(e, r, t) > 0
        }
        r.lt = lt;

        function lt(e, r, t) {
            return compare(e, r, t) < 0
        }
        r.eq = eq;

        function eq(e, r, t) {
            return compare(e, r, t) === 0
        }
        r.neq = neq;

        function neq(e, r, t) {
            return compare(e, r, t) !== 0
        }
        r.gte = gte;

        function gte(e, r, t) {
            return compare(e, r, t) >= 0
        }
        r.lte = lte;

        function lte(e, r, t) {
            return compare(e, r, t) <= 0
        }
        r.cmp = cmp;

        function cmp(e, r, t, n) {
            switch (r) {
                case "===":
                    if (typeof e === "object") e = e.version;
                    if (typeof t === "object") t = t.version;
                    return e === t;
                case "!==":
                    if (typeof e === "object") e = e.version;
                    if (typeof t === "object") t = t.version;
                    return e !== t;
                case "":
                case "=":
                case "==":
                    return eq(e, t, n);
                case "!=":
                    return neq(e, t, n);
                case ">":
                    return gt(e, t, n);
                case ">=":
                    return gte(e, t, n);
                case "<":
                    return lt(e, t, n);
                case "<=":
                    return lte(e, t, n);
                default:
                    throw new TypeError("Invalid operator: " + r)
            }
        }
        r.Comparator = Comparator;

        function Comparator(e, r) {
            if (!r || typeof r !== "object") {
                r = {
                    loose: !!r,
                    includePrerelease: false
                }
            }
            if (e instanceof Comparator) {
                if (e.loose === !!r.loose) {
                    return e
                } else {
                    e = e.value
                }
            }
            if (!(this instanceof Comparator)) {
                return new Comparator(e, r)
            }
            t("comparator", e, r);
            this.options = r;
            this.loose = !!r.loose;
            this.parse(e);
            if (this.semver === Y) {
                this.value = ""
            } else {
                this.value = this.operator + this.semver.version
            }
            t("comp", this)
        }
        var Y = {};
        Comparator.prototype.parse = function (e) {
            var r = this.options.loose ? i[H] : i[V];
            var t = e.match(r);
            if (!t) {
                throw new TypeError("Invalid comparator: " + e)
            }
            this.operator = t[1];
            if (this.operator === "=") {
                this.operator = ""
            }
            if (!t[2]) {
                this.semver = Y
            } else {
                this.semver = new SemVer(t[2], this.options.loose)
            }
        };
        Comparator.prototype.toString = function () {
            return this.value
        };
        Comparator.prototype.test = function (e) {
            t("Comparator.test", e, this.options.loose);
            if (this.semver === Y) {
                return true
            }
            if (typeof e === "string") {
                e = new SemVer(e, this.options)
            }
            return cmp(e, this.operator, this.semver, this.options)
        };
        Comparator.prototype.intersects = function (e, r) {
            if (!(e instanceof Comparator)) {
                throw new TypeError("a Comparator is required")
            }
            if (!r || typeof r !== "object") {
                r = {
                    loose: !!r,
                    includePrerelease: false
                }
            }
            var t;
            if (this.operator === "") {
                t = new Range(e.value, r);
                return satisfies(this.value, t, r)
            } else if (e.operator === "") {
                t = new Range(this.value, r);
                return satisfies(e.semver, t, r)
            }
            var n = (this.operator === ">=" || this.operator === ">") && (e.operator === ">=" || e.operator === ">");
            var s = (this.operator === "<=" || this.operator === "<") && (e.operator === "<=" || e.operator === "<");
            var o = this.semver.version === e.semver.version;
            var i = (this.operator === ">=" || this.operator === "<=") && (e.operator === ">=" || e.operator === "<=");
            var a = cmp(this.semver, "<", e.semver, r) && ((this.operator === ">=" || this.operator === ">") && (e.operator === "<=" || e.operator === "<"));
            var c = cmp(this.semver, ">", e.semver, r) && ((this.operator === "<=" || this.operator === "<") && (e.operator === ">=" || e.operator === ">"));
            return n || s || o && i || a || c
        };
        r.Range = Range;

        function Range(e, r) {
            if (!r || typeof r !== "object") {
                r = {
                    loose: !!r,
                    includePrerelease: false
                }
            }
            if (e instanceof Range) {
                if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease) {
                    return e
                } else {
                    return new Range(e.raw, r)
                }
            }
            if (e instanceof Comparator) {
                return new Range(e.value, r)
            }
            if (!(this instanceof Range)) {
                return new Range(e, r)
            }
            this.options = r;
            this.loose = !!r.loose;
            this.includePrerelease = !!r.includePrerelease;
            this.raw = e;
            this.set = e.split(/\s*\|\|\s*/).map(function (e) {
                return this.parseRange(e.trim())
            }, this).filter(function (e) {
                return e.length
            });
            if (!this.set.length) {
                throw new TypeError("Invalid SemVer Range: " + e)
            }
            this.format()
        }
        Range.prototype.format = function () {
            this.range = this.set.map(function (e) {
                return e.join(" ").trim()
            }).join("||").trim();
            return this.range
        };
        Range.prototype.toString = function () {
            return this.range
        };
        Range.prototype.parseRange = function (e) {
            var r = this.options.loose;
            e = e.trim();
            var n = r ? i[K] : i[X];
            e = e.replace(n, hyphenReplace);
            t("hyphen replace", e);
            e = e.replace(i[N], z);
            t("comparator trim", e, i[N]);
            e = e.replace(i[k], D);
            e = e.replace(i[B], L);
            e = e.split(/\s+/).join(" ");
            var s = r ? i[H] : i[V];
            var o = e.split(" ").map(function (e) {
                return parseComparator(e, this.options)
            }, this).join(" ").split(/\s+/);
            if (this.options.loose) {
                o = o.filter(function (e) {
                    return !!e.match(s)
                })
            }
            o = o.map(function (e) {
                return new Comparator(e, this.options)
            }, this);
            return o
        };
        Range.prototype.intersects = function (e, r) {
            if (!(e instanceof Range)) {
                throw new TypeError("a Range is required")
            }
            return this.set.some(function (t) {
                return t.every(function (t) {
                    return e.set.some(function (e) {
                        return e.every(function (e) {
                            return t.intersects(e, r)
                        })
                    })
                })
            })
        };
        r.toComparators = toComparators;

        function toComparators(e, r) {
            return new Range(e, r).set.map(function (e) {
                return e.map(function (e) {
                    return e.value
                }).join(" ").trim().split(" ")
            })
        }

        function parseComparator(e, r) {
            t("comp", e, r);
            e = replaceCarets(e, r);
            t("caret", e);
            e = replaceTildes(e, r);
            t("tildes", e);
            e = replaceXRanges(e, r);
            t("xrange", e);
            e = replaceStars(e, r);
            t("stars", e);
            return e
        }

        function isX(e) {
            return !e || e.toLowerCase() === "x" || e === "*"
        }

        function replaceTildes(e, r) {
            return e.trim().split(/\s+/).map(function (e) {
                return replaceTilde(e, r)
            }).join(" ")
        }

        function replaceTilde(e, r) {
            var n = r.loose ? i[U] : i[F];
            return e.replace(n, function (r, n, s, o, i) {
                t("tilde", e, r, n, s, o, i);
                var a;
                if (isX(n)) {
                    a = ""
                } else if (isX(s)) {
                    a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0"
                } else if (isX(o)) {
                    a = ">=" + n + "." + s + ".0 <" + n + "." + (+s + 1) + ".0"
                } else if (i) {
                    t("replaceTilde pr", i);
                    a = ">=" + n + "." + s + "." + o + "-" + i + " <" + n + "." + (+s + 1) + ".0"
                } else {
                    a = ">=" + n + "." + s + "." + o + " <" + n + "." + (+s + 1) + ".0"
                }
                t("tilde return", a);
                return a
            })
        }

        function replaceCarets(e, r) {
            return e.trim().split(/\s+/).map(function (e) {
                return replaceCaret(e, r)
            }).join(" ")
        }

        function replaceCaret(e, r) {
            t("caret", e, r);
            var n = r.loose ? i[$] : i[I];
            return e.replace(n, function (r, n, s, o, i) {
                t("caret", e, r, n, s, o, i);
                var a;
                if (isX(n)) {
                    a = ""
                } else if (isX(s)) {
                    a = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0"
                } else if (isX(o)) {
                    if (n === "0") {
                        a = ">=" + n + "." + s + ".0 <" + n + "." + (+s + 1) + ".0"
                    } else {
                        a = ">=" + n + "." + s + ".0 <" + (+n + 1) + ".0.0"
                    }
                } else if (i) {
                    t("replaceCaret pr", i);
                    if (n === "0") {
                        if (s === "0") {
                            a = ">=" + n + "." + s + "." + o + "-" + i + " <" + n + "." + s + "." + (+o + 1)
                        } else {
                            a = ">=" + n + "." + s + "." + o + "-" + i + " <" + n + "." + (+s + 1) + ".0"
                        }
                    } else {
                        a = ">=" + n + "." + s + "." + o + "-" + i + " <" + (+n + 1) + ".0.0"
                    }
                } else {
                    t("no pr");
                    if (n === "0") {
                        if (s === "0") {
                            a = ">=" + n + "." + s + "." + o + " <" + n + "." + s + "." + (+o + 1)
                        } else {
                            a = ">=" + n + "." + s + "." + o + " <" + n + "." + (+s + 1) + ".0"
                        }
                    } else {
                        a = ">=" + n + "." + s + "." + o + " <" + (+n + 1) + ".0.0"
                    }
                }
                t("caret return", a);
                return a
            })
        }

        function replaceXRanges(e, r) {
            t("replaceXRanges", e, r);
            return e.split(/\s+/).map(function (e) {
                return replaceXRange(e, r)
            }).join(" ")
        }

        function replaceXRange(e, r) {
            e = e.trim();
            var n = r.loose ? i[j] : i[R];
            return e.replace(n, function (r, n, s, o, i, a) {
                t("xRange", e, r, n, s, o, i, a);
                var c = isX(s);
                var u = c || isX(o);
                var l = u || isX(i);
                var p = l;
                if (n === "=" && p) {
                    n = ""
                }
                if (c) {
                    if (n === ">" || n === "<") {
                        r = "<0.0.0"
                    } else {
                        r = "*"
                    }
                } else if (n && p) {
                    if (u) {
                        o = 0
                    }
                    i = 0;
                    if (n === ">") {
                        n = ">=";
                        if (u) {
                            s = +s + 1;
                            o = 0;
                            i = 0
                        } else {
                            o = +o + 1;
                            i = 0
                        }
                    } else if (n === "<=") {
                        n = "<";
                        if (u) {
                            s = +s + 1
                        } else {
                            o = +o + 1
                        }
                    }
                    r = n + s + "." + o + "." + i
                } else if (u) {
                    r = ">=" + s + ".0.0 <" + (+s + 1) + ".0.0"
                } else if (l) {
                    r = ">=" + s + "." + o + ".0 <" + s + "." + (+o + 1) + ".0"
                }
                t("xRange return", r);
                return r
            })
        }

        function replaceStars(e, r) {
            t("replaceStars", e, r);
            return e.trim().replace(i[W], "")
        }

        function hyphenReplace(e, r, t, n, s, o, i, a, c, u, l, p, f) {
            if (isX(t)) {
                r = ""
            } else if (isX(n)) {
                r = ">=" + t + ".0.0"
            } else if (isX(s)) {
                r = ">=" + t + "." + n + ".0"
            } else {
                r = ">=" + r
            }
            if (isX(c)) {
                a = ""
            } else if (isX(u)) {
                a = "<" + (+c + 1) + ".0.0"
            } else if (isX(l)) {
                a = "<" + c + "." + (+u + 1) + ".0"
            } else if (p) {
                a = "<=" + c + "." + u + "." + l + "-" + p
            } else {
                a = "<=" + a
            }
            return (r + " " + a).trim()
        }
        Range.prototype.test = function (e) {
            if (!e) {
                return false
            }
            if (typeof e === "string") {
                e = new SemVer(e, this.options)
            }
            for (var r = 0; r < this.set.length; r++) {
                if (testSet(this.set[r], e, this.options)) {
                    return true
                }
            }
            return false
        };

        function testSet(e, r, n) {
            for (var s = 0; s < e.length; s++) {
                if (!e[s].test(r)) {
                    return false
                }
            }
            if (r.prerelease.length && !n.includePrerelease) {
                for (s = 0; s < e.length; s++) {
                    t(e[s].semver);
                    if (e[s].semver === Y) {
                        continue
                    }
                    if (e[s].semver.prerelease.length > 0) {
                        var o = e[s].semver;
                        if (o.major === r.major && o.minor === r.minor && o.patch === r.patch) {
                            return true
                        }
                    }
                }
                return false
            }
            return true
        }
        r.satisfies = satisfies;

        function satisfies(e, r, t) {
            try {
                r = new Range(r, t)
            } catch (e) {
                return false
            }
            return r.test(e)
        }
        r.maxSatisfying = maxSatisfying;

        function maxSatisfying(e, r, t) {
            var n = null;
            var s = null;
            try {
                var o = new Range(r, t)
            } catch (e) {
                return null
            }
            e.forEach(function (e) {
                if (o.test(e)) {
                    if (!n || s.compare(e) === -1) {
                        n = e;
                        s = new SemVer(n, t)
                    }
                }
            });
            return n
        }
        r.minSatisfying = minSatisfying;

        function minSatisfying(e, r, t) {
            var n = null;
            var s = null;
            try {
                var o = new Range(r, t)
            } catch (e) {
                return null
            }
            e.forEach(function (e) {
                if (o.test(e)) {
                    if (!n || s.compare(e) === 1) {
                        n = e;
                        s = new SemVer(n, t)
                    }
                }
            });
            return n
        }
        r.minVersion = minVersion;

        function minVersion(e, r) {
            e = new Range(e, r);
            var t = new SemVer("0.0.0");
            if (e.test(t)) {
                return t
            }
            t = new SemVer("0.0.0-0");
            if (e.test(t)) {
                return t
            }
            t = null;
            for (var n = 0; n < e.set.length; ++n) {
                var s = e.set[n];
                s.forEach(function (e) {
                    var r = new SemVer(e.semver.version);
                    switch (e.operator) {
                        case ">":
                            if (r.prerelease.length === 0) {
                                r.patch++
                            } else {
                                r.prerelease.push(0)
                            }
                            r.raw = r.format();
                        case "":
                        case ">=":
                            if (!t || gt(t, r)) {
                                t = r
                            }
                            break;
                        case "<":
                        case "<=":
                            break;
                        default:
                            throw new Error("Unexpected operation: " + e.operator)
                    }
                })
            }
            if (t && e.test(t)) {
                return t
            }
            return null
        }
        r.validRange = validRange;

        function validRange(e, r) {
            try {
                return new Range(e, r).range || "*"
            } catch (e) {
                return null
            }
        }
        r.ltr = ltr;

        function ltr(e, r, t) {
            return outside(e, r, "<", t)
        }
        r.gtr = gtr;

        function gtr(e, r, t) {
            return outside(e, r, ">", t)
        }
        r.outside = outside;

        function outside(e, r, t, n) {
            e = new SemVer(e, n);
            r = new Range(r, n);
            var s, o, i, a, c;
            switch (t) {
                case ">":
                    s = gt;
                    o = lte;
                    i = lt;
                    a = ">";
                    c = ">=";
                    break;
                case "<":
                    s = lt;
                    o = gte;
                    i = gt;
                    a = "<";
                    c = "<=";
                    break;
                default:
                    throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (satisfies(e, r, n)) {
                return false
            }
            for (var u = 0; u < r.set.length; ++u) {
                var l = r.set[u];
                var p = null;
                var f = null;
                l.forEach(function (e) {
                    if (e.semver === Y) {
                        e = new Comparator(">=0.0.0")
                    }
                    p = p || e;
                    f = f || e;
                    if (s(e.semver, p.semver, n)) {
                        p = e
                    } else if (i(e.semver, f.semver, n)) {
                        f = e
                    }
                });
                if (p.operator === a || p.operator === c) {
                    return false
                }
                if ((!f.operator || f.operator === a) && o(e, f.semver)) {
                    return false
                } else if (f.operator === c && i(e, f.semver)) {
                    return false
                }
            }
            return true
        }
        r.prerelease = prerelease;

        function prerelease(e, r) {
            var t = parse(e, r);
            return t && t.prerelease.length ? t.prerelease : null
        }
        r.intersects = intersects;

        function intersects(e, r, t) {
            e = new Range(e, t);
            r = new Range(r, t);
            return e.intersects(r)
        }
        r.coerce = coerce;

        function coerce(e) {
            if (e instanceof SemVer) {
                return e
            }
            if (typeof e !== "string") {
                return null
            }
            var r = e.match(i[A]);
            if (r == null) {
                return null
            }
            return parse(r[1] + "." + (r[2] || "0") + "." + (r[3] || "0"))
        }
    },
    489: function (e, r, t) {
        "use strict";
        const n = t(622);
        const s = t(814);
        const o = t(39)();

        function resolveCommandAttempt(e, r) {
            const t = process.cwd();
            const i = e.options.cwd != null;
            if (i) {
                try {
                    process.chdir(e.options.cwd)
                } catch (e) {}
            }
            let a;
            try {
                a = s.sync(e.command, {
                    path: (e.options.env || process.env)[o],
                    pathExt: r ? n.delimiter : undefined
                })
            } catch (e) {} finally {
                process.chdir(t)
            }
            if (a) {
                a = n.resolve(i ? e.options.cwd : "", a)
            }
            return a
        }

        function resolveCommand(e) {
            return resolveCommandAttempt(e) || resolveCommandAttempt(e, true)
        }
        e.exports = resolveCommand
    },
    510: function (e) {
        e.exports = addHook;

        function addHook(e, r, t, n) {
            var s = n;
            if (!e.registry[t]) {
                e.registry[t] = []
            }
            if (r === "before") {
                n = function (e, r) {
                    return Promise.resolve().then(s.bind(null, r)).then(e.bind(null, r))
                }
            }
            if (r === "after") {
                n = function (e, r) {
                    var t;
                    return Promise.resolve().then(e.bind(null, r)).then(function (e) {
                        t = e;
                        return s(t, r)
                    }).then(function () {
                        return t
                    })
                }
            }
            if (r === "error") {
                n = function (e, r) {
                    return Promise.resolve().then(e.bind(null, r)).catch(function (e) {
                        return s(e, r)
                    })
                }
            }
            e.registry[t].push({
                hook: n,
                orig: s
            })
        }
    },
    523: function (e, r, t) {
        var n = t(280);
        var s = t(510);
        var o = t(763);
        var i = Function.bind;
        var a = i.bind(i);

        function bindApi(e, r, t) {
            var n = a(o, null).apply(null, t ? [r, t] : [r]);
            e.api = {
                remove: n
            };
            e.remove = n;
            ["before", "error", "after", "wrap"].forEach(function (n) {
                var o = t ? [r, n, t] : [r, n];
                e[n] = e.api[n] = a(s, null).apply(null, o)
            })
        }

        function HookSingular() {
            var e = "h";
            var r = {
                registry: {}
            };
            var t = n.bind(null, r, e);
            bindApi(t, r, e);
            return t
        }

        function HookCollection() {
            var e = {
                registry: {}
            };
            var r = n.bind(null, e);
            bindApi(r, e);
            return r
        }
        var c = false;

        function Hook() {
            if (!c) {
                console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
                c = true
            }
            return HookCollection()
        }
        Hook.Singular = HookSingular.bind();
        Hook.Collection = HookCollection.bind();
        e.exports = Hook;
        e.exports.Hook = Hook;
        e.exports.Singular = Hook.Singular;
        e.exports.Collection = Hook.Collection
    },
    568: function (e, r, t) {
        "use strict";
        const n = t(622);
        const s = t(948);
        const o = t(489);
        const i = t(462);
        const a = t(389);
        const c = t(470);
        const u = process.platform === "win32";
        const l = /\.(?:com|exe)$/i;
        const p = /node_modules[\\\/].bin[\\\/][^\\\/]+\.cmd$/i;
        const f = s(() => c.satisfies(process.version, "^4.8.0 || ^5.7.0 || >= 6.0.0", true)) || false;

        function detectShebang(e) {
            e.file = o(e);
            const r = e.file && a(e.file);
            if (r) {
                e.args.unshift(e.file);
                e.command = r;
                return o(e)
            }
            return e.file
        }

        function parseNonShell(e) {
            if (!u) {
                return e
            }
            const r = detectShebang(e);
            const t = !l.test(r);
            if (e.options.forceShell || t) {
                const t = p.test(r);
                e.command = n.normalize(e.command);
                e.command = i.command(e.command);
                e.args = e.args.map(e => i.argument(e, t));
                const s = [e.command].concat(e.args).join(" ");
                e.args = ["/d", "/s", "/c", `"${s}"`];
                e.command = process.env.comspec || "cmd.exe";
                e.options.windowsVerbatimArguments = true
            }
            return e
        }

        function parseShell(e) {
            if (f) {
                return e
            }
            const r = [e.command].concat(e.args).join(" ");
            if (u) {
                e.command = typeof e.options.shell === "string" ? e.options.shell : process.env.comspec || "cmd.exe";
                e.args = ["/d", "/s", "/c", `"${r}"`];
                e.options.windowsVerbatimArguments = true
            } else {
                if (typeof e.options.shell === "string") {
                    e.command = e.options.shell
                } else if (process.platform === "android") {
                    e.command = "/system/bin/sh"
                } else {
                    e.command = "/bin/sh"
                }
                e.args = ["-c", r]
            }
            return e
        }

        function parse(e, r, t) {
            if (r && !Array.isArray(r)) {
                t = r;
                r = null
            }
            r = r ? r.slice(0) : [];
            t = Object.assign({}, t);
            const n = {
                command: e,
                args: r,
                options: t,
                file: undefined,
                original: {
                    command: e,
                    args: r
                }
            };
            return t.shell ? parseShell(n) : parseNonShell(n)
        }
        e.exports = parse
    },
    582: function (e, r, t) {
        "use strict";
        const {
            PassThrough: n
        } = t(413);
        e.exports = (e => {
            e = Object.assign({}, e);
            const {
                array: r
            } = e;
            let {
                encoding: t
            } = e;
            const s = t === "buffer";
            let o = false;
            if (r) {
                o = !(t || s)
            } else {
                t = t || "utf8"
            }
            if (s) {
                t = null
            }
            let i = 0;
            const a = [];
            const c = new n({
                objectMode: o
            });
            if (t) {
                c.setEncoding(t)
            }
            c.on("data", e => {
                a.push(e);
                if (o) {
                    i = a.length
                } else {
                    i += e.length
                }
            });
            c.getBufferedValue = (() => {
                if (r) {
                    return a
                }
                return s ? Buffer.concat(a, i) : a.join("")
            });
            c.getBufferedLength = (() => i);
            return c
        })
    },
    605: function (e) {
        e.exports = require("http")
    },
    614: function (e) {
        e.exports = require("events")
    },
    622: function (e) {
        e.exports = require("path")
    },
    654: function (e) {
        e.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
        if (process.platform !== "win32") {
            e.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT")
        }
        if (process.platform === "linux") {
            e.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED")
        }
    },
    669: function (e) {
        e.exports = require("util")
    },
    675: function (e, r, t) {
        "use strict";
        const n = t(622);
        const s = t(129);
        const o = t(20);
        const i = t(768);
        const a = t(406);
        const c = t(323);
        const u = t(760);
        const l = t(928);
        const p = t(260);
        const f = t(418);
        const d = t(151);
        const m = 1e3 * 1e3 * 10;

        function handleArgs(e, r, t) {
            let s;
            t = Object.assign({
                extendEnv: true,
                env: {}
            }, t);
            if (t.extendEnv) {
                t.env = Object.assign({}, process.env, t.env)
            }
            if (t.__winShell === true) {
                delete t.__winShell;
                s = {
                    command: e,
                    args: r,
                    options: t,
                    file: e,
                    original: {
                        cmd: e,
                        args: r
                    }
                }
            } else {
                s = o._parse(e, r, t)
            }
            t = Object.assign({
                maxBuffer: m,
                buffer: true,
                stripEof: true,
                preferLocal: true,
                localDir: s.options.cwd || process.cwd(),
                encoding: "utf8",
                reject: true,
                cleanup: true
            }, s.options);
            t.stdio = d(t);
            if (t.preferLocal) {
                t.env = a.env(Object.assign({}, t, {
                    cwd: t.localDir
                }))
            }
            if (t.detached) {
                t.cleanup = false
            }
            if (process.platform === "win32" && n.basename(s.command) === "cmd.exe") {
                s.args.unshift("/q")
            }
            return {
                cmd: s.command,
                args: s.args,
                opts: t,
                parsed: s
            }
        }

        function handleInput(e, r) {
            if (r === null || r === undefined) {
                return
            }
            if (c(r)) {
                r.pipe(e.stdin)
            } else {
                e.stdin.end(r)
            }
        }

        function handleOutput(e, r) {
            if (r && e.stripEof) {
                r = i(r)
            }
            return r
        }

        function handleShell(e, r, t) {
            let n = "/bin/sh";
            let s = ["-c", r];
            t = Object.assign({}, t);
            if (process.platform === "win32") {
                t.__winShell = true;
                n = process.env.comspec || "cmd.exe";
                s = ["/s", "/c", `"${r}"`];
                t.windowsVerbatimArguments = true
            }
            if (t.shell) {
                n = t.shell;
                delete t.shell
            }
            return e(n, s, t)
        }

        function getStream(e, r, {
            encoding: t,
            buffer: n,
            maxBuffer: s
        }) {
            if (!e[r]) {
                return null
            }
            let o;
            if (!n) {
                o = new Promise((t, n) => {
                    e[r].once("end", t).once("error", n)
                })
            } else if (t) {
                o = u(e[r], {
                    encoding: t,
                    maxBuffer: s
                })
            } else {
                o = u.buffer(e[r], {
                    maxBuffer: s
                })
            }
            return o.catch(e => {
                e.stream = r;
                e.message = `${r} ${e.message}`;
                throw e
            })
        }

        function makeError(e, r) {
            const {
                stdout: t,
                stderr: n
            } = e;
            let s = e.error;
            const {
                code: o,
                signal: i
            } = e;
            const {
                parsed: a,
                joinedCmd: c
            } = r;
            const u = r.timedOut || false;
            if (!s) {
                let e = "";
                if (Array.isArray(a.opts.stdio)) {
                    if (a.opts.stdio[2] !== "inherit") {
                        e += e.length > 0 ? n : `\n${n}`
                    }
                    if (a.opts.stdio[1] !== "inherit") {
                        e += `\n${t}`
                    }
                } else if (a.opts.stdio !== "inherit") {
                    e = `\n${n}${t}`
                }
                s = new Error(`Command failed: ${c}${e}`);
                s.code = o < 0 ? f(o) : o
            }
            s.stdout = t;
            s.stderr = n;
            s.failed = true;
            s.signal = i || null;
            s.cmd = c;
            s.timedOut = u;
            return s
        }

        function joinCmd(e, r) {
            let t = e;
            if (Array.isArray(r) && r.length > 0) {
                t += " " + r.join(" ")
            }
            return t
        }
        e.exports = ((e, r, t) => {
            const n = handleArgs(e, r, t);
            const {
                encoding: i,
                buffer: a,
                maxBuffer: c
            } = n.opts;
            const u = joinCmd(e, r);
            let f;
            try {
                f = s.spawn(n.cmd, n.args, n.opts)
            } catch (e) {
                return Promise.reject(e)
            }
            let d;
            if (n.opts.cleanup) {
                d = p(() => {
                    f.kill()
                })
            }
            let m = null;
            let h = false;
            const g = () => {
                if (m) {
                    clearTimeout(m);
                    m = null
                }
                if (d) {
                    d()
                }
            };
            if (n.opts.timeout > 0) {
                m = setTimeout(() => {
                    m = null;
                    h = true;
                    f.kill(n.opts.killSignal)
                }, n.opts.timeout)
            }
            const w = new Promise(e => {
                f.on("exit", (r, t) => {
                    g();
                    e({
                        code: r,
                        signal: t
                    })
                });
                f.on("error", r => {
                    g();
                    e({
                        error: r
                    })
                });
                if (f.stdin) {
                    f.stdin.on("error", r => {
                        g();
                        e({
                            error: r
                        })
                    })
                }
            });

            function destroy() {
                if (f.stdout) {
                    f.stdout.destroy()
                }
                if (f.stderr) {
                    f.stderr.destroy()
                }
            }
            const T = () => l(Promise.all([w, getStream(f, "stdout", {
                encoding: i,
                buffer: a,
                maxBuffer: c
            }), getStream(f, "stderr", {
                encoding: i,
                buffer: a,
                maxBuffer: c
            })]).then(e => {
                const r = e[0];
                r.stdout = e[1];
                r.stderr = e[2];
                if (r.error || r.code !== 0 || r.signal !== null) {
                    const e = makeError(r, {
                        joinedCmd: u,
                        parsed: n,
                        timedOut: h
                    });
                    e.killed = e.killed || f.killed;
                    if (!n.opts.reject) {
                        return e
                    }
                    throw e
                }
                return {
                    stdout: handleOutput(n.opts, r.stdout),
                    stderr: handleOutput(n.opts, r.stderr),
                    code: 0,
                    failed: false,
                    killed: false,
                    signal: null,
                    cmd: u,
                    timedOut: false
                }
            }), destroy);
            o._enoent.hookChildProcess(f, n.parsed);
            handleInput(f, n.opts.input);
            f.then = ((e, r) => T().then(e, r));
            f.catch = (e => T().catch(e));
            return f
        });
        e.exports.stdout = ((...r) => e.exports(...r).then(e => e.stdout));
        e.exports.stderr = ((...r) => e.exports(...r).then(e => e.stderr));
        e.exports.shell = ((r, t) => handleShell(e.exports, r, t));
        e.exports.sync = ((e, r, t) => {
            const n = handleArgs(e, r, t);
            const o = joinCmd(e, r);
            if (c(n.opts.input)) {
                throw new TypeError("The `input` option cannot be a stream in sync mode")
            }
            const i = s.spawnSync(n.cmd, n.args, n.opts);
            i.code = i.status;
            if (i.error || i.status !== 0 || i.signal !== null) {
                const e = makeError(i, {
                    joinedCmd: o,
                    parsed: n
                });
                if (!n.opts.reject) {
                    return e
                }
                throw e
            }
            return {
                stdout: handleOutput(n.opts, i.stdout),
                stderr: handleOutput(n.opts, i.stderr),
                code: 0,
                failed: false,
                signal: null,
                cmd: o,
                timedOut: false
            }
        });
        e.exports.shellSync = ((r, t) => handleShell(e.exports.sync, r, t))
    },
    692: function (e, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        class Deprecation extends Error {
            constructor(e) {
                super(e);
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, this.constructor)
                }
                this.name = "Deprecation"
            }
        }
        r.Deprecation = Deprecation
    },
    696: function (e) {
        "use strict";

        function isObject(e) {
            return e != null && typeof e === "object" && Array.isArray(e) === false
        }

        function isObjectObject(e) {
            return isObject(e) === true && Object.prototype.toString.call(e) === "[object Object]"
        }

        function isPlainObject(e) {
            var r, t;
            if (isObjectObject(e) === false) return false;
            r = e.constructor;
            if (typeof r !== "function") return false;
            t = r.prototype;
            if (isObjectObject(t) === false) return false;
            if (t.hasOwnProperty("isPrototypeOf") === false) {
                return false
            }
            return true
        }
        e.exports = isPlainObject
    },
    742: function (e, r, t) {
        var n = t(747);
        var s;
        if (process.platform === "win32" || global.TESTING_WINDOWS) {
            s = t(818)
        } else {
            s = t(197)
        }
        e.exports = isexe;
        isexe.sync = sync;

        function isexe(e, r, t) {
            if (typeof r === "function") {
                t = r;
                r = {}
            }
            if (!t) {
                if (typeof Promise !== "function") {
                    throw new TypeError("callback not provided")
                }
                return new Promise(function (t, n) {
                    isexe(e, r || {}, function (e, r) {
                        if (e) {
                            n(e)
                        } else {
                            t(r)
                        }
                    })
                })
            }
            s(e, r || {}, function (e, n) {
                if (e) {
                    if (e.code === "EACCES" || r && r.ignoreErrors) {
                        e = null;
                        n = false
                    }
                }
                t(e, n)
            })
        }

        function sync(e, r) {
            try {
                return s.sync(e, r || {})
            } catch (e) {
                if (r && r.ignoreErrors || e.code === "EACCES") {
                    return false
                } else {
                    throw e
                }
            }
        }
    },
    747: function (e) {
        e.exports = require("fs")
    },
    749: function (e, r, t) {
        "use strict";
        var n = this && this.__awaiter || function (e, r, t, n) {
            function adopt(e) {
                return e instanceof t ? e : new t(function (r) {
                    r(e)
                })
            }
            return new(t || (t = Promise))(function (t, s) {
                function fulfilled(e) {
                    try {
                        step(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }

                function rejected(e) {
                    try {
                        step(n["throw"](e))
                    } catch (e) {
                        s(e)
                    }
                }

                function step(e) {
                    e.done ? t(e.value) : adopt(e.value).then(fulfilled, rejected)
                }
                step((n = n.apply(e, r || [])).next())
            })
        };
        var s = this && this.__generator || function (e, r) {
            var t = {
                    label: 0,
                    sent: function () {
                        if (o[0] & 1) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                },
                n, s, o, i;
            return i = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, typeof Symbol === "function" && (i[Symbol.iterator] = function () {
                return this
            }), i;

            function verb(e) {
                return function (r) {
                    return step([e, r])
                }
            }

            function step(i) {
                if (n) throw new TypeError("Generator is already executing.");
                while (t) try {
                    if (n = 1, s && (o = i[0] & 2 ? s["return"] : i[0] ? s["throw"] || ((o = s["return"]) && o.call(s), 0) : s.next) && !(o = o.call(s, i[1])).done) return o;
                    if (s = 0, o) i = [i[0] & 2, o.value];
                    switch (i[0]) {
                        case 0:
                        case 1:
                            o = i;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: i[1], done: false
                            };
                        case 5:
                            t.label++;
                            s = i[1];
                            i = [0];
                            continue;
                        case 7:
                            i = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(o = t.trys, o = o.length > 0 && o[o.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (i[0] === 3 && (!o || i[1] > o[0] && i[1] < o[3])) {
                                t.label = i[1];
                                break
                            }
                            if (i[0] === 6 && t.label < o[1]) {
                                t.label = o[1];
                                o = i;
                                break
                            }
                            if (o && t.label < o[2]) {
                                t.label = o[2];
                                t.ops.push(i);
                                break
                            }
                            if (o[2]) t.ops.pop();
                            t.trys.pop();
                            continue
                    }
                    i = r.call(e, t)
                } catch (e) {
                    i = [6, e];
                    s = 0
                } finally {
                    n = o = 0
                }
                if (i[0] & 5) throw i[1];
                return {
                    value: i[0] ? i[1] : void 0,
                    done: true
                }
            }
        };
        r.__esModule = true;
        var o = t(454);

        function default_1(e) {
            return n(this, void 0, void 0, function () {
                var r;
                return s(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, o["default"]("https://api.github.com/graphql", {
                                method: "POST",
                                headers: {
                                    Authorization: "bearer " + process.env.GH_TOKEN
                                },
                                body: JSON.stringify({
                                    query: e
                                }).replace(/\\n/g, "")
                            })];
                        case 1:
                            r = t.sent();
                            return [2, r.json()]
                    }
                })
            })
        }
        r["default"] = default_1
    },
    753: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });

        function _interopDefault(e) {
            return e && typeof e === "object" && "default" in e ? e["default"] : e
        }
        var n = t(385);
        var s = t(796);
        var o = _interopDefault(t(696));
        var i = _interopDefault(t(454));
        var a = t(463);
        const c = "5.4.0";

        function getBufferResponse(e) {
            return e.arrayBuffer()
        }

        function fetchWrapper(e) {
            if (o(e.body) || Array.isArray(e.body)) {
                e.body = JSON.stringify(e.body)
            }
            let r = {};
            let t;
            let n;
            const s = e.request && e.request.fetch || i;
            return s(e.url, Object.assign({
                method: e.method,
                body: e.body,
                headers: e.headers,
                redirect: e.redirect
            }, e.request)).then(s => {
                n = s.url;
                t = s.status;
                for (const e of s.headers) {
                    r[e[0]] = e[1]
                }
                if (t === 204 || t === 205) {
                    return
                }
                if (e.method === "HEAD") {
                    if (t < 400) {
                        return
                    }
                    throw new a.RequestError(s.statusText, t, {
                        headers: r,
                        request: e
                    })
                }
                if (t === 304) {
                    throw new a.RequestError("Not modified", t, {
                        headers: r,
                        request: e
                    })
                }
                if (t >= 400) {
                    return s.text().then(n => {
                        const s = new a.RequestError(n, t, {
                            headers: r,
                            request: e
                        });
                        try {
                            let e = JSON.parse(s.message);
                            Object.assign(s, e);
                            let r = e.errors;
                            s.message = s.message + ": " + r.map(JSON.stringify).join(", ")
                        } catch (e) {}
                        throw s
                    })
                }
                const o = s.headers.get("content-type");
                if (/application\/json/.test(o)) {
                    return s.json()
                }
                if (!o || /^text\/|charset=utf-8$/.test(o)) {
                    return s.text()
                }
                return getBufferResponse(s)
            }).then(e => {
                return {
                    status: t,
                    url: n,
                    headers: r,
                    data: e
                }
            }).catch(t => {
                if (t instanceof a.RequestError) {
                    throw t
                }
                throw new a.RequestError(t.message, 500, {
                    headers: r,
                    request: e
                })
            })
        }

        function withDefaults(e, r) {
            const t = e.defaults(r);
            const n = function (e, r) {
                const n = t.merge(e, r);
                if (!n.request || !n.request.hook) {
                    return fetchWrapper(t.parse(n))
                }
                const s = (e, r) => {
                    return fetchWrapper(t.parse(t.merge(e, r)))
                };
                Object.assign(s, {
                    endpoint: t,
                    defaults: withDefaults.bind(null, t)
                });
                return n.request.hook(s, n)
            };
            return Object.assign(n, {
                endpoint: t,
                defaults: withDefaults.bind(null, t)
            })
        }
        const u = withDefaults(n.endpoint, {
            headers: {
                "user-agent": `octokit-request.js/${c} ${s.getUserAgent()}`
            }
        });
        r.request = u
    },
    760: function (e, r, t) {
        "use strict";
        const n = t(453);
        const s = t(582);
        class MaxBufferError extends Error {
            constructor() {
                super("maxBuffer exceeded");
                this.name = "MaxBufferError"
            }
        }

        function getStream(e, r) {
            if (!e) {
                return Promise.reject(new Error("Expected a stream"))
            }
            r = Object.assign({
                maxBuffer: Infinity
            }, r);
            const {
                maxBuffer: t
            } = r;
            let o;
            return new Promise((i, a) => {
                const c = e => {
                    if (e) {
                        e.bufferedData = o.getBufferedValue()
                    }
                    a(e)
                };
                o = n(e, s(r), e => {
                    if (e) {
                        c(e);
                        return
                    }
                    i()
                });
                o.on("data", () => {
                    if (o.getBufferedLength() > t) {
                        c(new MaxBufferError)
                    }
                })
            }).then(() => o.getBufferedValue())
        }
        e.exports = getStream;
        e.exports.buffer = ((e, r) => getStream(e, Object.assign({}, r, {
            encoding: "buffer"
        })));
        e.exports.array = ((e, r) => getStream(e, Object.assign({}, r, {
            array: true
        })));
        e.exports.MaxBufferError = MaxBufferError
    },
    761: function (e) {
        e.exports = require("zlib")
    },
    763: function (e) {
        e.exports = removeHook;

        function removeHook(e, r, t) {
            if (!e.registry[r]) {
                return
            }
            var n = e.registry[r].map(function (e) {
                return e.orig
            }).indexOf(t);
            if (n === -1) {
                return
            }
            e.registry[r].splice(n, 1)
        }
    },
    768: function (e) {
        "use strict";
        e.exports = function (e) {
            var r = typeof e === "string" ? "\n" : "\n".charCodeAt();
            var t = typeof e === "string" ? "\r" : "\r".charCodeAt();
            if (e[e.length - 1] === r) {
                e = e.slice(0, e.length - 1)
            }
            if (e[e.length - 1] === t) {
                e = e.slice(0, e.length - 1)
            }
            return e
        }
    },
    796: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });

        function _interopDefault(e) {
            return e && typeof e === "object" && "default" in e ? e["default"] : e
        }
        var n = _interopDefault(t(2));

        function getUserAgent() {
            try {
                return `Node.js/${process.version.substr(1)} (${n()}; ${process.arch})`
            } catch (e) {
                if (/wmic os get Caption/.test(e.message)) {
                    return "Windows <version undetectable>"
                }
                return "<environment undetectable>"
            }
        }
        r.getUserAgent = getUserAgent
    },
    813: function (e, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        async function auth(e) {
            const r = e.split(/\./).length === 3 ? "app" : /^v\d+\./.test(e) ? "installation" : "oauth";
            return {
                type: "token",
                token: e,
                tokenType: r
            }
        }

        function withAuthorizationPrefix(e) {
            if (e.split(/\./).length === 3) {
                return `bearer ${e}`
            }
            return `token ${e}`
        }
        async function hook(e, r, t, n) {
            const s = r.endpoint.merge(t, n);
            s.headers.authorization = withAuthorizationPrefix(e);
            return r(s)
        }
        const t = function createTokenAuth(e) {
            if (!e) {
                throw new Error("[@octokit/auth-token] No token passed to createTokenAuth")
            }
            if (typeof e !== "string") {
                throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string")
            }
            e = e.replace(/^(token|bearer) +/i, "");
            return Object.assign(auth.bind(null, e), {
                hook: hook.bind(null, e)
            })
        };
        r.createTokenAuth = t
    },
    814: function (e, r, t) {
        e.exports = which;
        which.sync = whichSync;
        var n = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
        var s = t(622);
        var o = n ? ";" : ":";
        var i = t(742);

        function getNotFoundError(e) {
            var r = new Error("not found: " + e);
            r.code = "ENOENT";
            return r
        }

        function getPathInfo(e, r) {
            var t = r.colon || o;
            var s = r.path || process.env.PATH || "";
            var i = [""];
            s = s.split(t);
            var a = "";
            if (n) {
                s.unshift(process.cwd());
                a = r.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM";
                i = a.split(t);
                if (e.indexOf(".") !== -1 && i[0] !== "") i.unshift("")
            }
            if (e.match(/\//) || n && e.match(/\\/)) s = [""];
            return {
                env: s,
                ext: i,
                extExe: a
            }
        }

        function which(e, r, t) {
            if (typeof r === "function") {
                t = r;
                r = {}
            }
            var n = getPathInfo(e, r);
            var o = n.env;
            var a = n.ext;
            var c = n.extExe;
            var u = [];
            (function F(n, l) {
                if (n === l) {
                    if (r.all && u.length) return t(null, u);
                    else return t(getNotFoundError(e))
                }
                var p = o[n];
                if (p.charAt(0) === '"' && p.slice(-1) === '"') p = p.slice(1, -1);
                var f = s.join(p, e);
                if (!p && /^\.[\\\/]/.test(e)) {
                    f = e.slice(0, 2) + f
                }(function E(e, s) {
                    if (e === s) return F(n + 1, l);
                    var o = a[e];
                    i(f + o, {
                        pathExt: c
                    }, function (n, i) {
                        if (!n && i) {
                            if (r.all) u.push(f + o);
                            else return t(null, f + o)
                        }
                        return E(e + 1, s)
                    })
                })(0, a.length)
            })(0, o.length)
        }

        function whichSync(e, r) {
            r = r || {};
            var t = getPathInfo(e, r);
            var n = t.env;
            var o = t.ext;
            var a = t.extExe;
            var c = [];
            for (var u = 0, l = n.length; u < l; u++) {
                var p = n[u];
                if (p.charAt(0) === '"' && p.slice(-1) === '"') p = p.slice(1, -1);
                var f = s.join(p, e);
                if (!p && /^\.[\\\/]/.test(e)) {
                    f = e.slice(0, 2) + f
                }
                for (var d = 0, m = o.length; d < m; d++) {
                    var h = f + o[d];
                    var g;
                    try {
                        g = i.sync(h, {
                            pathExt: a
                        });
                        if (g) {
                            if (r.all) c.push(h);
                            else return h
                        }
                    } catch (e) {}
                }
            }
            if (r.all && c.length) return c;
            if (r.nothrow) return null;
            throw getNotFoundError(e)
        }
    },
    816: function (e) {
        "use strict";
        e.exports = /^#!.*/
    },
    818: function (e, r, t) {
        e.exports = isexe;
        isexe.sync = sync;
        var n = t(747);

        function checkPathExt(e, r) {
            var t = r.pathExt !== undefined ? r.pathExt : process.env.PATHEXT;
            if (!t) {
                return true
            }
            t = t.split(";");
            if (t.indexOf("") !== -1) {
                return true
            }
            for (var n = 0; n < t.length; n++) {
                var s = t[n].toLowerCase();
                if (s && e.substr(-s.length).toLowerCase() === s) {
                    return true
                }
            }
            return false
        }

        function checkStat(e, r, t) {
            if (!e.isSymbolicLink() && !e.isFile()) {
                return false
            }
            return checkPathExt(r, t)
        }

        function isexe(e, r, t) {
            n.stat(e, function (n, s) {
                t(n, n ? false : checkStat(s, e, r))
            })
        }

        function sync(e, r) {
            return checkStat(n.statSync(e), e, r)
        }
    },
    835: function (e) {
        e.exports = require("url")
    },
    842: function (e, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        const t = {
            actions: {
                cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],
                createOrUpdateSecretForRepo: ["PUT /repos/{owner}/{repo}/actions/secrets/{name}"],
                createRegistrationToken: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"],
                createRemoveToken: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"],
                deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
                deleteSecretFromRepo: ["DELETE /repos/{owner}/{repo}/actions/secrets/{name}"],
                downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"],
                getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
                getPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
                getSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{name}"],
                getSelfHostedRunner: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],
                getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
                getWorkflowJob: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
                getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
                listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
                listDownloadsForSelfHostedRunnerApplication: ["GET /repos/{owner}/{repo}/actions/runners/downloads"],
                listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],
                listRepoWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/runs"],
                listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
                listSecretsForRepo: ["GET /repos/{owner}/{repo}/actions/secrets"],
                listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
                listWorkflowJobLogs: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],
                listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],
                listWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
                listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],
                reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
                removeSelfHostedRunner: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"]
            },
            activity: {
                checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
                checkStarringRepo: ["GET /user/starred/{owner}/{repo}", {}, {
                    renamed: ["activity", "checkRepoIsStarredByAuthenticatedUser"]
                }],
                deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
                deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"],
                getFeeds: ["GET /feeds"],
                getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
                getThread: ["GET /notifications/threads/{thread_id}"],
                getThreadSubscription: ["PUT /notifications", {}, {
                    renamed: ["activity", "getThreadSubscriptionForAuthenticatedUser"]
                }],
                getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"],
                listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
                listEventsForOrg: ["GET /users/{username}/events/orgs/{org}", {}, {
                    renamed: ["activity", "listOrgEventsForAuthenticatedUser"]
                }],
                listEventsForUser: ["GET /users/{username}/events", {}, {
                    renamed: ["activity", "listEventsForAuthenticatedUser"]
                }],
                listFeeds: ["GET /feeds", {}, {
                    renamed: ["activity", "getFeeds"]
                }],
                listNotifications: ["GET /notifications", {}, {
                    renamed: ["activity", "listNotificationsForAuthenticatedUser"]
                }],
                listNotificationsForAuthenticatedUser: ["GET /notifications"],
                listNotificationsForRepo: ["GET /repos/{owner}/{repo}/notifications", {}, {
                    renamed: ["activity", "listRepoNotificationsForAuthenticatedUser"]
                }],
                listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"],
                listPublicEvents: ["GET /events"],
                listPublicEventsForOrg: ["GET /orgs/{org}/events", {}, {
                    renamed: ["activity", "listPublicOrgEvents"]
                }],
                listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
                listPublicEventsForUser: ["GET /users/{username}/events/public"],
                listPublicOrgEvents: ["GET /orgs/{org}/events"],
                listReceivedEventsForUser: ["GET /users/{username}/received_events"],
                listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"],
                listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
                listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"],
                listReposStarredByAuthenticatedUser: ["GET /user/starred"],
                listReposStarredByUser: ["GET /users/{username}/starred"],
                listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
                listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
                listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
                listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
                markAsRead: ["PUT /notifications", {}, {
                    renamed: ["activity", "markNotificationsAsRead"]
                }],
                markNotificationsAsRead: ["PUT /notifications"],
                markNotificationsAsReadForRepo: ["PUT /repos/{owner}/{repo}/notifications", {}, {
                    renamed: ["activity", "markRepoNotificationsAsRead"]
                }],
                markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
                markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
                setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
                setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"],
                starRepo: ["PUT /user/starred/{owner}/{repo}", {}, {
                    renamed: ["activity", "starRepoForAuthenticatedUser"]
                }],
                starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
                unstarRepo: ["DELETE /user/starred/{owner}/{repo}", {}, {
                    renamed: ["activity", "unstarRepoForAuthenticatedUser"]
                }],
                unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
            },
            apps: {
                addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                checkAccountIsAssociatedWithAny: ["GET /marketplace_listing/accounts/{account_id}", {}, {
                    renamed: ["apps", "getSubscriptionPlanForAccount"]
                }],
                checkAccountIsAssociatedWithAnyStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}", {}, {
                    renamed: ["apps", "getSubscriptionPlanForAccountStubbed"]
                }],
                checkToken: ["POST /applications/{client_id}/token"],
                createContentAttachment: ["POST /content_references/{content_reference_id}/attachments", {
                    mediaType: {
                        previews: ["corsair"]
                    }
                }],
                createFromManifest: ["POST /app-manifests/{code}/conversions"],
                createInstallationToken: ["POST /app/installations/{installation_id}/access_tokens", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
                deleteInstallation: ["DELETE /app/installations/{installation_id}", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                deleteToken: ["DELETE /applications/{client_id}/token"],
                getAuthenticated: ["GET /app", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                getBySlug: ["GET /apps/{app_slug}", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                getInstallation: ["GET /app/installations/{installation_id}", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                getOrgInstallation: ["GET /orgs/{org}/installation", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                getRepoInstallation: ["GET /repos/{owner}/{repo}/installation", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"],
                getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"],
                getUserInstallation: ["GET /users/{username}/installation", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
                listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],
                listAccountsUserOrOrgOnPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts", {}, {
                    renamed: ["apps", "listAccountsForPlan"]
                }],
                listAccountsUserOrOrgOnPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts", {}, {
                    renamed: ["apps", "listAccountsForPlanStubbed"]
                }],
                listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                listInstallations: ["GET /app/installations", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                listInstallationsForAuthenticatedUser: ["GET /user/installations", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                listMarketplacePurchasesForAuthenticatedUser: ["GET /user/marketplace_purchases", {}, {
                    renamed: ["apps", "listSubscriptionsForAuthenticatedUser"]
                }],
                listMarketplacePurchasesForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed", {}, {
                    renamed: ["apps", "listSubscriptionsForAuthenticatedUserStubbed"]
                }],
                listPlans: ["GET /marketplace_listing/plans"],
                listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
                listRepos: ["GET /installation/repositories", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
                listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"],
                removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                resetToken: ["PATCH /applications/{client_id}/token"],
                revokeInstallationToken: ["DELETE /installation/token"]
            },
            checks: {
                create: ["POST /repos/{owner}/{repo}/check-runs", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                createSuite: ["POST /repos/{owner}/{repo}/check-suites", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }],
                update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}", {
                    mediaType: {
                        previews: ["antiope"]
                    }
                }]
            },
            codesOfConduct: {
                getAllCodesOfConduct: ["GET /codes_of_conduct", {
                    mediaType: {
                        previews: ["scarlet-witch"]
                    }
                }],
                getConductCode: ["GET /codes_of_conduct/{key}", {
                    mediaType: {
                        previews: ["scarlet-witch"]
                    }
                }],
                getForRepo: ["GET /repos/{owner}/{repo}/community/code_of_conduct", {
                    mediaType: {
                        previews: ["scarlet-witch"]
                    }
                }],
                listConductCodes: ["GET /codes_of_conduct", {
                    mediaType: {
                        previews: ["scarlet-witch"]
                    }
                }, {
                    renamed: ["codesOfConduct", "getAllCodesOfConduct"]
                }]
            },
            emojis: {
                get: ["GET /emojis"]
            },
            gists: {
                checkIsStarred: ["GET /gists/{gist_id}/star"],
                create: ["POST /gists"],
                createComment: ["POST /gists/{gist_id}/comments"],
                delete: ["DELETE /gists/{gist_id}"],
                deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
                fork: ["POST /gists/{gist_id}/forks"],
                get: ["GET /gists/{gist_id}"],
                getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
                getRevision: ["GET /gists/{gist_id}/{sha}"],
                list: ["GET /gists"],
                listComments: ["GET /gists/{gist_id}/comments"],
                listCommits: ["GET /gists/{gist_id}/commits"],
                listForUser: ["GET /users/{username}/gists"],
                listForks: ["GET /gists/{gist_id}/forks"],
                listPublic: ["GET /gists/public"],
                listPublicForUser: ["GET /users/{username}/gists", {}, {
                    renamed: ["gists", "listForUser"]
                }],
                listStarred: ["GET /gists/starred"],
                star: ["PUT /gists/{gist_id}/star"],
                unstar: ["DELETE /gists/{gist_id}/star"],
                update: ["PATCH /gists/{gist_id}"],
                updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
            },
            git: {
                createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
                createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
                createRef: ["POST /repos/{owner}/{repo}/git/refs"],
                createTag: ["POST /repos/{owner}/{repo}/git/tags"],
                createTree: ["POST /repos/{owner}/{repo}/git/trees"],
                deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
                getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
                getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
                getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
                getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
                getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
                listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
                updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
            },
            gitignore: {
                getTemplate: ["GET /gitignore/templates/{name}"],
                listTemplates: ["GET /gitignore/templates"]
            },
            interactions: {
                addOrUpdateRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits", {
                    mediaType: {
                        previews: ["sombra"]
                    }
                }],
                addOrUpdateRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits", {
                    mediaType: {
                        previews: ["sombra"]
                    }
                }],
                getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits", {
                    mediaType: {
                        previews: ["sombra"]
                    }
                }],
                getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits", {
                    mediaType: {
                        previews: ["sombra"]
                    }
                }],
                removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits", {
                    mediaType: {
                        previews: ["sombra"]
                    }
                }],
                removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits", {
                    mediaType: {
                        previews: ["sombra"]
                    }
                }]
            },
            issues: {
                addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
                addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                checkAssignee: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
                create: ["POST /repos/{owner}/{repo}/issues"],
                createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],
                createLabel: ["POST /repos/{owner}/{repo}/labels"],
                createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
                deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
                deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],
                get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
                getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
                getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
                getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
                list: ["GET /issues"],
                listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
                listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
                listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
                listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
                listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
                listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", {
                    mediaType: {
                        previews: ["mockingbird"]
                    }
                }],
                listForAuthenticatedUser: ["GET /user/issues"],
                listForOrg: ["GET /orgs/{org}/issues"],
                listForRepo: ["GET /repos/{owner}/{repo}/issues"],
                listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],
                listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
                listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                listMilestonesForRepo: ["GET /repos/{owner}/{repo}/milestones"],
                lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
                removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
                removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],
                removeLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels", {}, {
                    renamed: ["issues", "removeAllLabels"]
                }],
                replaceAllLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
                replaceLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels", {}, {
                    renamed: ["issues", "replaceAllLabels"]
                }],
                unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
                update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
                updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
                updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
                updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]
            },
            licenses: {
                get: ["GET /licenses/{license}"],
                getForRepo: ["GET /repos/{owner}/{repo}/license"],
                listCommonlyUsed: ["GET /licenses"]
            },
            markdown: {
                render: ["POST /markdown"],
                renderRaw: ["POST /markdown/raw", {
                    headers: {
                        "content-type": "text/plain; charset=utf-8"
                    }
                }]
            },
            meta: {
                get: ["GET /meta"]
            },
            migrations: {
                cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
                deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
                getImportProgress: ["GET /repos/{owner}/{repo}/import"],
                getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
                getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                listForAuthenticatedUser: ["GET /user/migrations", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                listForOrg: ["GET /orgs/{org}/migrations", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                listReposForUser: ["GET /user/{migration_id}/repositories", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
                setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
                startForAuthenticatedUser: ["POST /user/migrations"],
                startForOrg: ["POST /orgs/{org}/migrations"],
                startImport: ["PUT /repos/{owner}/{repo}/import"],
                unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", {
                    mediaType: {
                        previews: ["wyandotte"]
                    }
                }],
                updateImport: ["PATCH /repos/{owner}/{repo}/import"]
            },
            orgs: {
                addOrUpdateMembership: ["PUT /orgs/{org}/memberships/{username}"],
                blockUser: ["PUT /orgs/{org}/blocks/{username}"],
                checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
                checkMembership: ["GET /orgs/{org}/members/{username}"],
                checkPublicMembership: ["GET /orgs/{org}/public_members/{username}"],
                concealMembership: ["DELETE /orgs/{org}/public_members/{username}"],
                convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"],
                createHook: ["POST /orgs/{org}/hooks"],
                createInvitation: ["POST /orgs/{org}/invitations"],
                deleteHook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
                get: ["GET /orgs/{org}"],
                getHook: ["GET /orgs/{org}/hooks/{hook_id}"],
                getMembership: ["GET /orgs/{org}/memberships/{username}"],
                getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
                list: ["GET /organizations"],
                listBlockedUsers: ["GET /orgs/{org}/blocks"],
                listForAuthenticatedUser: ["GET /user/orgs"],
                listForUser: ["GET /users/{username}/orgs"],
                listHooks: ["GET /orgs/{org}/hooks"],
                listInstallations: ["GET /orgs/{org}/installations", {
                    mediaType: {
                        previews: ["machine-man"]
                    }
                }],
                listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
                listMembers: ["GET /orgs/{org}/members"],
                listMemberships: ["GET /user/memberships/orgs"],
                listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
                listPendingInvitations: ["GET /orgs/{org}/invitations"],
                listPublicMembers: ["GET /orgs/{org}/public_members"],
                pingHook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
                publicizeMembership: ["PUT /orgs/{org}/public_members/{username}"],
                removeMember: ["DELETE /orgs/{org}/members/{username}"],
                removeMembership: ["DELETE /orgs/{org}/memberships/{username}"],
                removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"],
                unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
                update: ["PATCH /orgs/{org}"],
                updateHook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
                updateMembership: ["PATCH /user/memberships/orgs/{org}"]
            },
            projects: {
                addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                createCard: ["POST /projects/columns/{column_id}/cards", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                createColumn: ["POST /projects/{project_id}/columns", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                createForAuthenticatedUser: ["POST /user/projects", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                createForOrg: ["POST /orgs/{org}/projects", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                createForRepo: ["POST /repos/{owner}/{repo}/projects", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                delete: ["DELETE /projects/{project_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                deleteCard: ["DELETE /projects/columns/cards/{card_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                deleteColumn: ["DELETE /projects/columns/{column_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                get: ["GET /projects/{project_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                getCard: ["GET /projects/columns/cards/{card_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                getColumn: ["GET /projects/columns/{column_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                listCards: ["GET /projects/columns/{column_id}/cards", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                listCollaborators: ["GET /projects/{project_id}/collaborators", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                listColumns: ["GET /projects/{project_id}/columns", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                listForOrg: ["GET /orgs/{org}/projects", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                listForRepo: ["GET /repos/{owner}/{repo}/projects", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                listForUser: ["GET /users/{username}/projects", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                moveCard: ["POST /projects/columns/cards/{card_id}/moves", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                moveColumn: ["POST /projects/columns/{column_id}/moves", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                reviewUserPermissionLevel: ["GET /projects/{project_id}/collaborators/{username}/permission", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                update: ["PATCH /projects/{project_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                updateCard: ["PATCH /projects/columns/cards/{card_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                updateColumn: ["PATCH /projects/columns/{column_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }]
            },
            pulls: {
                checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
                create: ["POST /repos/{owner}/{repo}/pulls"],
                createComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
                createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
                createReviewCommentReply: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"],
                createReviewRequest: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
                deleteComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
                deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
                deleteReviewRequest: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
                dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"],
                get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
                getComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
                getCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"],
                getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
                list: ["GET /repos/{owner}/{repo}/pulls"],
                listComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
                listCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
                listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
                listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
                listReviewRequests: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
                listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
                merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
                submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],
                update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
                updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch", {
                    mediaType: {
                        previews: ["lydian"]
                    }
                }],
                updateComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
                updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"]
            },
            rateLimit: {
                get: ["GET /rate_limit"]
            },
            reactions: {
                createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                delete: ["DELETE /reactions/{reaction_id}", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }, {
                    renamed: ["reactions", "deleteLegacy"]
                }],
                deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                deleteLegacy: ["DELETE /reactions/{reaction_id}", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }, {
                    deprecated: "octokit.reactions.deleteLegacy() is deprecated, see https://developer.github.com/v3/reactions/#delete-a-reaction-legacy"
                }],
                listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }],
                listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
                    mediaType: {
                        previews: ["squirrel-girl"]
                    }
                }]
            },
            repos: {
                acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
                addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
                addDeployKey: ["POST /repos/{owner}/{repo}/keys"],
                addProtectedBranchAdminEnforcement: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
                addProtectedBranchAppRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
                    mapToData: "apps"
                }],
                addProtectedBranchRequiredSignatures: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
                    mediaType: {
                        previews: ["zzzax"]
                    }
                }],
                addProtectedBranchRequiredStatusChecksContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
                    mapToData: "contexts"
                }],
                addProtectedBranchTeamRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
                    mapToData: "teams"
                }],
                addProtectedBranchUserRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
                    mapToData: "users"
                }],
                checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
                checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts", {
                    mediaType: {
                        previews: ["dorian"]
                    }
                }],
                compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
                createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
                createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
                createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
                createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
                createForAuthenticatedUser: ["POST /user/repos"],
                createFork: ["POST /repos/{owner}/{repo}/forks"],
                createHook: ["POST /repos/{owner}/{repo}/hooks"],
                createInOrg: ["POST /orgs/{org}/repos"],
                createOrUpdateFile: ["PUT /repos/{owner}/{repo}/contents/{path}"],
                createRelease: ["POST /repos/{owner}/{repo}/releases"],
                createStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
                createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate", {
                    mediaType: {
                        previews: ["baptiste"]
                    }
                }],
                declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
                delete: ["DELETE /repos/{owner}/{repo}"],
                deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
                deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],
                deleteDownload: ["DELETE /repos/{owner}/{repo}/downloads/{download_id}"],
                deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
                deleteHook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
                deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],
                deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
                deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes", {
                    mediaType: {
                        previews: ["london"]
                    }
                }],
                disablePagesSite: ["DELETE /repos/{owner}/{repo}/pages", {
                    mediaType: {
                        previews: ["switcheroo"]
                    }
                }],
                disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts", {
                    mediaType: {
                        previews: ["dorian"]
                    }
                }],
                enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes", {
                    mediaType: {
                        previews: ["london"]
                    }
                }],
                enablePagesSite: ["POST /repos/{owner}/{repo}/pages", {
                    mediaType: {
                        previews: ["switcheroo"]
                    }
                }],
                enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts", {
                    mediaType: {
                        previews: ["dorian"]
                    }
                }],
                get: ["GET /repos/{owner}/{repo}"],
                getAllTopics: ["GET /repos/{owner}/{repo}/topics", {
                    mediaType: {
                        previews: ["mercy"]
                    }
                }],
                getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"],
                getArchiveLink: ["GET /repos/{owner}/{repo}/{archive_format}/{ref}"],
                getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
                getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"],
                getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
                getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
                getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"],
                getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
                getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
                getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
                getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
                getContents: ["GET /repos/{owner}/{repo}/contents/{path}"],
                getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
                getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
                getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
                getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"],
                getDownload: ["GET /repos/{owner}/{repo}/downloads/{download_id}"],
                getHook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
                getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
                getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
                getPages: ["GET /repos/{owner}/{repo}/pages"],
                getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
                getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
                getProtectedBranchAdminEnforcement: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
                getProtectedBranchPullRequestReviewEnforcement: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
                getProtectedBranchRequiredSignatures: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
                    mediaType: {
                        previews: ["zzzax"]
                    }
                }],
                getProtectedBranchRequiredStatusChecks: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
                getProtectedBranchRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],
                getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
                getReadme: ["GET /repos/{owner}/{repo}/readme"],
                getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
                getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
                getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"],
                getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
                getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
                getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"],
                getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
                list: ["GET /user/repos", {}, {
                    renamed: ["repos", "listForAuthenticatedUser"]
                }],
                listAssetsForRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],
                listBranches: ["GET /repos/{owner}/{repo}/branches"],
                listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", {
                    mediaType: {
                        previews: ["groot"]
                    }
                }],
                listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
                listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
                listCommitComments: ["GET /repos/{owner}/{repo}/comments"],
                listCommits: ["GET /repos/{owner}/{repo}/commits"],
                listContributors: ["GET /repos/{owner}/{repo}/contributors"],
                listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
                listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
                listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
                listDownloads: ["GET /repos/{owner}/{repo}/downloads"],
                listForAuthenticatedUser: ["GET /user/repos"],
                listForOrg: ["GET /orgs/{org}/repos"],
                listForUser: ["GET /users/{username}/repos"],
                listForks: ["GET /repos/{owner}/{repo}/forks"],
                listHooks: ["GET /repos/{owner}/{repo}/hooks"],
                listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
                listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
                listLanguages: ["GET /repos/{owner}/{repo}/languages"],
                listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
                listProtectedBranchRequiredStatusChecksContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"],
                listPublic: ["GET /repositories"],
                listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", {
                    mediaType: {
                        previews: ["groot"]
                    }
                }],
                listReleases: ["GET /repos/{owner}/{repo}/releases"],
                listStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],
                listTags: ["GET /repos/{owner}/{repo}/tags"],
                listTeams: ["GET /repos/{owner}/{repo}/teams"],
                listTopics: ["GET /repos/{owner}/{repo}/topics", {
                    mediaType: {
                        previews: ["mercy"]
                    }
                }, {
                    renamed: ["repos", "getAllTopics"]
                }],
                merge: ["POST /repos/{owner}/{repo}/merges"],
                pingHook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
                removeBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],
                removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"],
                removeDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
                removeProtectedBranchAdminEnforcement: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
                removeProtectedBranchAppRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
                    mapToData: "apps"
                }],
                removeProtectedBranchPullRequestReviewEnforcement: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
                removeProtectedBranchRequiredSignatures: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
                    mediaType: {
                        previews: ["zzzax"]
                    }
                }],
                removeProtectedBranchRequiredStatusChecks: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
                removeProtectedBranchRequiredStatusChecksContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
                    mapToData: "contexts"
                }],
                removeProtectedBranchRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],
                removeProtectedBranchTeamRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
                    mapToData: "teams"
                }],
                removeProtectedBranchUserRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
                    mapToData: "users"
                }],
                replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics", {
                    mediaType: {
                        previews: ["mercy"]
                    }
                }],
                replaceProtectedBranchAppRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
                    mapToData: "apps"
                }],
                replaceProtectedBranchRequiredStatusChecksContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
                    mapToData: "contexts"
                }],
                replaceProtectedBranchTeamRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
                    mapToData: "teams"
                }],
                replaceProtectedBranchUserRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
                    mapToData: "users"
                }],
                replaceTopics: ["PUT /repos/{owner}/{repo}/topics", {
                    mediaType: {
                        previews: ["mercy"]
                    }
                }, {
                    renamed: ["repos", "replaceAllTopics"]
                }],
                requestPageBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
                retrieveCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
                testPushHook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
                transfer: ["POST /repos/{owner}/{repo}/transfer"],
                update: ["PATCH /repos/{owner}/{repo}"],
                updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],
                updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
                updateHook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
                updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
                updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],
                updateProtectedBranchPullRequestReviewEnforcement: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
                updateProtectedBranchRequiredStatusChecks: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
                updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
                updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],
                uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", {
                    baseUrl: "https://uploads.github.com"
                }]
            },
            search: {
                code: ["GET /search/code"],
                commits: ["GET /search/commits", {
                    mediaType: {
                        previews: ["cloak"]
                    }
                }],
                issuesAndPullRequests: ["GET /search/issues"],
                labels: ["GET /search/labels"],
                repos: ["GET /search/repositories"],
                topics: ["GET /search/topics"],
                users: ["GET /search/users"]
            },
            teams: {
                addOrUpdateMembershipInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"],
                addOrUpdateProjectInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                addOrUpdateRepoInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                checkManagesRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                create: ["POST /orgs/{org}/teams"],
                createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],
                createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
                deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
                deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
                deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
                getByName: ["GET /orgs/{org}/teams/{team_slug}"],
                getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
                getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
                getMembershipInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],
                list: ["GET /orgs/{org}/teams"],
                listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
                listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],
                listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
                listForAuthenticatedUser: ["GET /user/teams"],
                listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
                listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"],
                listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
                removeMembershipInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"],
                removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],
                removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
                reviewProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
                    mediaType: {
                        previews: ["inertia"]
                    }
                }],
                updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
                updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
                updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
            },
            users: {
                addEmails: ["POST /user/emails"],
                block: ["PUT /user/blocks/{username}"],
                checkBlocked: ["GET /user/blocks/{username}"],
                checkFollowing: ["GET /user/following/{username}"],
                checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
                createGpgKey: ["POST /user/gpg_keys"],
                createPublicKey: ["POST /user/keys"],
                deleteEmails: ["DELETE /user/emails"],
                deleteGpgKey: ["DELETE /user/gpg_keys/{gpg_key_id}"],
                deletePublicKey: ["DELETE /user/keys/{key_id}"],
                follow: ["PUT /user/following/{username}"],
                getAuthenticated: ["GET /user"],
                getByUsername: ["GET /users/{username}"],
                getContextForUser: ["GET /users/{username}/hovercard"],
                getGpgKey: ["GET /user/gpg_keys/{gpg_key_id}"],
                getPublicKey: ["GET /user/keys/{key_id}"],
                list: ["GET /users"],
                listBlocked: ["GET /user/blocks"],
                listEmails: ["GET /user/emails"],
                listFollowedByAuthenticated: ["GET /user/following"],
                listFollowersForAuthenticatedUser: ["GET /user/followers"],
                listFollowersForUser: ["GET /users/{username}/followers"],
                listFollowingForAuthenticatedUser: ["GET /user/following", {}, {
                    renamed: ["users", "listFollowedByAuthenticated"]
                }],
                listFollowingForUser: ["GET /users/{username}/following"],
                listGpgKeys: ["GET /user/gpg_keys"],
                listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
                listPublicEmails: ["GET /user/public_emails"],
                listPublicKeys: ["GET /user/keys"],
                listPublicKeysForUser: ["GET /users/{username}/keys"],
                togglePrimaryEmailVisibility: ["PATCH /user/email/visibility"],
                unblock: ["DELETE /user/blocks/{username}"],
                unfollow: ["DELETE /user/following/{username}"],
                updateAuthenticated: ["PATCH /user"]
            }
        };
        const n = "3.5.2";

        function endpointsToMethods(e, r) {
            const t = {};
            for (const [n, s] of Object.entries(r)) {
                for (const [r, o] of Object.entries(s)) {
                    const [s, i, a] = o;
                    const [c, u] = s.split(/ /);
                    const l = Object.assign({
                        method: c,
                        url: u
                    }, i);
                    if (!t[n]) {
                        t[n] = {}
                    }
                    const p = t[n];
                    if (a) {
                        p[r] = decorate(e, n, r, l, a);
                        continue
                    }
                    p[r] = e.request.defaults(l)
                }
            }
            return t
        }

        function decorate(e, r, t, n, s) {
            const o = e.request.defaults(n);

            function withDecorations(...n) {
                let i = o.endpoint.merge(...n);
                if (s.mapToData) {
                    i = Object.assign({}, i, {
                        data: i[s.mapToData],
                        [s.mapToData]: undefined
                    });
                    return o(i)
                }
                if (s.renamed) {
                    const [n, o] = s.renamed;
                    e.log.warn(`octokit.${r}.${t}() has been renamed to octokit.${n}.${o}()`)
                }
                if (s.deprecated) {
                    e.log.warn(s.deprecated)
                }
                return o(...n)
            }
            return Object.assign(withDecorations, o)
        }

        function restEndpointMethods(e) {
            return endpointsToMethods(e, t)
        }
        restEndpointMethods.VERSION = n;
        r.restEndpointMethods = restEndpointMethods
    },
    862: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });

        function _interopDefault(e) {
            return e && typeof e === "object" && "default" in e ? e["default"] : e
        }
        var n = _interopDefault(t(2));

        function getUserAgent() {
            try {
                return `Node.js/${process.version.substr(1)} (${n()}; ${process.arch})`
            } catch (e) {
                if (/wmic os get Caption/.test(e.message)) {
                    return "Windows <version undetectable>"
                }
                throw e
            }
        }
        r.getUserAgent = getUserAgent
    },
    866: function (e, r, t) {
        "use strict";
        var n = t(816);
        e.exports = function (e) {
            var r = e.match(n);
            if (!r) {
                return null
            }
            var t = r[0].replace(/#! ?/, "").split(" ");
            var s = t[0].split("/").pop();
            var o = t[1];
            return s === "env" ? o : s + (o ? " " + o : "")
        }
    },
    881: function (e) {
        "use strict";
        const r = process.platform === "win32";

        function notFoundError(e, r) {
            return Object.assign(new Error(`${r} ${e.command} ENOENT`), {
                code: "ENOENT",
                errno: "ENOENT",
                syscall: `${r} ${e.command}`,
                path: e.command,
                spawnargs: e.args
            })
        }

        function hookChildProcess(e, t) {
            if (!r) {
                return
            }
            const n = e.emit;
            e.emit = function (r, s) {
                if (r === "exit") {
                    const r = verifyENOENT(s, t, "spawn");
                    if (r) {
                        return n.call(e, "error", r)
                    }
                }
                return n.apply(e, arguments)
            }
        }

        function verifyENOENT(e, t) {
            if (r && e === 1 && !t.file) {
                return notFoundError(t.original, "spawn")
            }
            return null
        }

        function verifyENOENTSync(e, t) {
            if (r && e === 1 && !t.file) {
                return notFoundError(t.original, "spawnSync")
            }
            return null
        }
        e.exports = {
            hookChildProcess: hookChildProcess,
            verifyENOENT: verifyENOENT,
            verifyENOENTSync: verifyENOENTSync,
            notFoundError: notFoundError
        }
    },
    889: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = t(448);
        var s = t(916);
        var o = t(299);
        var i = t(842);
        const a = "17.2.1";
        const c = n.Octokit.plugin(s.requestLog, i.restEndpointMethods, o.paginateRest).defaults({
            userAgent: `octokit-rest.js/${a}`
        });
        r.Octokit = c
    },
    898: function (e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = t(753);
        var s = t(862);
        const o = "4.3.1";
        class GraphqlError extends Error {
            constructor(e, r) {
                const t = r.data.errors[0].message;
                super(t);
                Object.assign(this, r.data);
                this.name = "GraphqlError";
                this.request = e;
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, this.constructor)
                }
            }
        }
        const i = ["method", "baseUrl", "url", "headers", "request", "query"];

        function graphql(e, r, t) {
            t = typeof r === "string" ? t = Object.assign({
                query: r
            }, t) : t = r;
            const n = Object.keys(t).reduce((e, r) => {
                if (i.includes(r)) {
                    e[r] = t[r];
                    return e
                }
                if (!e.variables) {
                    e.variables = {}
                }
                e.variables[r] = t[r];
                return e
            }, {});
            return e(n).then(e => {
                if (e.data.errors) {
                    throw new GraphqlError(n, {
                        data: e.data
                    })
                }
                return e.data.data
            })
        }

        function withDefaults(e, r) {
            const t = e.defaults(r);
            const s = (e, r) => {
                return graphql(t, e, r)
            };
            return Object.assign(s, {
                defaults: withDefaults.bind(null, t),
                endpoint: n.request.endpoint
            })
        }
        const a = withDefaults(n.request, {
            headers: {
                "user-agent": `octokit-graphql.js/${o} ${s.getUserAgent()}`
            },
            method: "POST",
            url: "/graphql"
        });

        function withCustomRequest(e) {
            return withDefaults(e, {
                method: "POST",
                url: "/graphql"
            })
        }
        r.graphql = a;
        r.withCustomRequest = withCustomRequest
    },
    916: function (e, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        const t = "1.0.0";

        function requestLog(e) {
            e.hook.wrap("request", (r, t) => {
                e.log.debug("request", t);
                const n = Date.now();
                const s = e.request.endpoint.parse(t);
                const o = s.url.replace(t.baseUrl, "");
                return r(t).then(r => {
                    e.log.info(`${s.method} ${o} - ${r.status} in ${Date.now()-n}ms`);
                    return r
                }).catch(r => {
                    e.log.info(`${s.method} ${o} - ${r.status} in ${Date.now()-n}ms`);
                    throw r
                })
            })
        }
        requestLog.VERSION = t;
        r.requestLog = requestLog
    },
    928: function (e) {
        "use strict";
        e.exports = ((e, r) => {
            r = r || (() => {});
            return e.then(e => new Promise(e => {
                e(r())
            }).then(() => e), e => new Promise(e => {
                e(r())
            }).then(() => {
                throw e
            }))
        })
    },
    948: function (e) {
        "use strict";
        e.exports = function (e) {
            try {
                return e()
            } catch (e) {}
        }
    },
    969: function (e, r, t) {
        var n = t(11);
        e.exports = n(once);
        e.exports.strict = n(onceStrict);
        once.proto = once(function () {
            Object.defineProperty(Function.prototype, "once", {
                value: function () {
                    return once(this)
                },
                configurable: true
            });
            Object.defineProperty(Function.prototype, "onceStrict", {
                value: function () {
                    return onceStrict(this)
                },
                configurable: true
            })
        });

        function once(e) {
            var r = function () {
                if (r.called) return r.value;
                r.called = true;
                return r.value = e.apply(this, arguments)
            };
            r.called = false;
            return r
        }

        function onceStrict(e) {
            var r = function () {
                if (r.called) throw new Error(r.onceError);
                r.called = true;
                return r.value = e.apply(this, arguments)
            };
            var t = e.name || "Function wrapped with `once`";
            r.onceError = t + " shouldn't be called more than once";
            r.called = false;
            return r
        }
    }
});
