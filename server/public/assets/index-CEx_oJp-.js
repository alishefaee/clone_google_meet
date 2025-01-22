var b0 = Object.defineProperty
var E0 = (e, t, n) => (t in e ? b0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n))
var $o = (e, t, n) => E0(e, typeof t != 'symbol' ? t + '' : t, n)
function R0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o)
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
function Ih(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var Ah = { exports: {} },
  Pl = {},
  Mh = { exports: {} },
  ee = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Di = Symbol.for('react.element'),
  T0 = Symbol.for('react.portal'),
  P0 = Symbol.for('react.fragment'),
  _0 = Symbol.for('react.strict_mode'),
  O0 = Symbol.for('react.profiler'),
  I0 = Symbol.for('react.provider'),
  A0 = Symbol.for('react.context'),
  M0 = Symbol.for('react.forward_ref'),
  $0 = Symbol.for('react.suspense'),
  N0 = Symbol.for('react.memo'),
  L0 = Symbol.for('react.lazy'),
  vf = Symbol.iterator
function B0(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (vf && e[vf]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var $h = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Nh = Object.assign,
  Lh = {}
function Ro(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Lh), (this.updater = n || $h)
}
Ro.prototype.isReactComponent = {}
Ro.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Ro.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Bh() {}
Bh.prototype = Ro.prototype
function Mc(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Lh), (this.updater = n || $h)
}
var $c = (Mc.prototype = new Bh())
$c.constructor = Mc
Nh($c, Ro.prototype)
$c.isPureReactComponent = !0
var Sf = Array.isArray,
  zh = Object.prototype.hasOwnProperty,
  Nc = { current: null },
  jh = { key: !0, ref: !0, __self: !0, __source: !0 }
function Dh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      zh.call(t, r) && !jh.hasOwnProperty(r) && (o[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) o.children = n
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
    o.children = a
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r])
  return { $$typeof: Di, type: e, key: i, ref: s, props: o, _owner: Nc.current }
}
function z0(e, t) {
  return { $$typeof: Di, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Lc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Di
}
function j0(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var xf = /\/+/g
function Ma(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? j0('' + e.key) : t.toString(36)
}
function Cs(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Di:
          case T0:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + Ma(s, 0) : r),
      Sf(o)
        ? ((n = ''),
          e != null && (n = e.replace(xf, '$&/') + '/'),
          Cs(o, t, n, '', function (u) {
            return u
          }))
        : o != null &&
          (Lc(o) &&
            (o = z0(o, n + (!o.key || (s && s.key === o.key) ? '' : ('' + o.key).replace(xf, '$&/') + '/') + e)),
          t.push(o)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Sf(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l]
      var a = r + Ma(i, l)
      s += Cs(i, t, n, a, o)
    }
  else if (((a = B0(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(i = e.next()).done; ) (i = i.value), (a = r + Ma(i, l++)), (s += Cs(i, t, n, a, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return s
}
function Qi(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Cs(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function D0(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var ht = { current: null },
  ks = { transition: null },
  F0 = { ReactCurrentDispatcher: ht, ReactCurrentBatchConfig: ks, ReactCurrentOwner: Nc }
function Fh() {
  throw Error('act(...) is not supported in production builds of React.')
}
ee.Children = {
  map: Qi,
  forEach: function (e, t, n) {
    Qi(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      Qi(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Qi(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Lc(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  }
}
ee.Component = Ro
ee.Fragment = P0
ee.Profiler = O0
ee.PureComponent = Mc
ee.StrictMode = _0
ee.Suspense = $0
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F0
ee.act = Fh
ee.cloneElement = function (e, t, n) {
  if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.')
  var r = Nh({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Nc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (a in t) zh.call(t, a) && !jh.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    l = Array(a)
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: Di, type: e.type, key: o, ref: i, props: r, _owner: s }
}
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: A0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: I0, _context: e }),
    (e.Consumer = e)
  )
}
ee.createElement = Dh
ee.createFactory = function (e) {
  var t = Dh.bind(null, e)
  return (t.type = e), t
}
ee.createRef = function () {
  return { current: null }
}
ee.forwardRef = function (e) {
  return { $$typeof: M0, render: e }
}
ee.isValidElement = Lc
ee.lazy = function (e) {
  return { $$typeof: L0, _payload: { _status: -1, _result: e }, _init: D0 }
}
ee.memo = function (e, t) {
  return { $$typeof: N0, type: e, compare: t === void 0 ? null : t }
}
ee.startTransition = function (e) {
  var t = ks.transition
  ks.transition = {}
  try {
    e()
  } finally {
    ks.transition = t
  }
}
ee.unstable_act = Fh
ee.useCallback = function (e, t) {
  return ht.current.useCallback(e, t)
}
ee.useContext = function (e) {
  return ht.current.useContext(e)
}
ee.useDebugValue = function () {}
ee.useDeferredValue = function (e) {
  return ht.current.useDeferredValue(e)
}
ee.useEffect = function (e, t) {
  return ht.current.useEffect(e, t)
}
ee.useId = function () {
  return ht.current.useId()
}
ee.useImperativeHandle = function (e, t, n) {
  return ht.current.useImperativeHandle(e, t, n)
}
ee.useInsertionEffect = function (e, t) {
  return ht.current.useInsertionEffect(e, t)
}
ee.useLayoutEffect = function (e, t) {
  return ht.current.useLayoutEffect(e, t)
}
ee.useMemo = function (e, t) {
  return ht.current.useMemo(e, t)
}
ee.useReducer = function (e, t, n) {
  return ht.current.useReducer(e, t, n)
}
ee.useRef = function (e) {
  return ht.current.useRef(e)
}
ee.useState = function (e) {
  return ht.current.useState(e)
}
ee.useSyncExternalStore = function (e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n)
}
ee.useTransition = function () {
  return ht.current.useTransition()
}
ee.version = '18.3.1'
Mh.exports = ee
var S = Mh.exports
const xn = Ih(S),
  Su = R0({ __proto__: null, default: xn }, [S])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var W0 = S,
  U0 = Symbol.for('react.element'),
  V0 = Symbol.for('react.fragment'),
  H0 = Object.prototype.hasOwnProperty,
  K0 = W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  G0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function Wh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (s = t.ref)
  for (r in t) H0.call(t, r) && !G0.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: U0, type: e, key: i, ref: s, props: o, _owner: K0.current }
}
Pl.Fragment = V0
Pl.jsx = Wh
Pl.jsxs = Wh
Ah.exports = Pl
var k = Ah.exports,
  Uh = { exports: {} },
  Mt = {},
  Vh = { exports: {} },
  Hh = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(P, M) {
    var j = P.length
    P.push(M)
    e: for (; 0 < j; ) {
      var K = (j - 1) >>> 1,
        q = P[K]
      if (0 < o(q, M)) (P[K] = M), (P[j] = q), (j = K)
      else break e
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0]
  }
  function r(P) {
    if (P.length === 0) return null
    var M = P[0],
      j = P.pop()
    if (j !== M) {
      P[0] = j
      e: for (var K = 0, q = P.length, X = q >>> 1; K < X; ) {
        var Q = 2 * (K + 1) - 1,
          ve = P[Q],
          Se = Q + 1,
          Ie = P[Se]
        if (0 > o(ve, j))
          Se < q && 0 > o(Ie, ve) ? ((P[K] = Ie), (P[Se] = j), (K = Se)) : ((P[K] = ve), (P[Q] = j), (K = Q))
        else if (Se < q && 0 > o(Ie, j)) (P[K] = Ie), (P[Se] = j), (K = Se)
        else break e
      }
    }
    return M
  }
  function o(P, M) {
    var j = P.sortIndex - M.sortIndex
    return j !== 0 ? j : P.id - M.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var s = Date,
      l = s.now()
    e.unstable_now = function () {
      return s.now() - l
    }
  }
  var a = [],
    u = [],
    d = 1,
    f = null,
    p = 3,
    x = !1,
    v = !1,
    w = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function c(P) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u)
      else if (M.startTime <= P) r(u), (M.sortIndex = M.expirationTime), t(a, M)
      else break
      M = n(u)
    }
  }
  function y(P) {
    if (((w = !1), c(P), !v))
      if (n(a) !== null) (v = !0), z(C)
      else {
        var M = n(u)
        M !== null && D(y, M.startTime - P)
      }
  }
  function C(P, M) {
    ;(v = !1), w && ((w = !1), m(T), (T = -1)), (x = !0)
    var j = p
    try {
      for (c(M), f = n(a); f !== null && (!(f.expirationTime > M) || (P && !_())); ) {
        var K = f.callback
        if (typeof K == 'function') {
          ;(f.callback = null), (p = f.priorityLevel)
          var q = K(f.expirationTime <= M)
          ;(M = e.unstable_now()), typeof q == 'function' ? (f.callback = q) : f === n(a) && r(a), c(M)
        } else r(a)
        f = n(a)
      }
      if (f !== null) var X = !0
      else {
        var Q = n(u)
        Q !== null && D(y, Q.startTime - M), (X = !1)
      }
      return X
    } finally {
      ;(f = null), (p = j), (x = !1)
    }
  }
  var E = !1,
    b = null,
    T = -1,
    I = 5,
    h = -1
  function _() {
    return !(e.unstable_now() - h < I)
  }
  function $() {
    if (b !== null) {
      var P = e.unstable_now()
      h = P
      var M = !0
      try {
        M = b(!0, P)
      } finally {
        M ? N() : ((E = !1), (b = null))
      }
    } else E = !1
  }
  var N
  if (typeof g == 'function')
    N = function () {
      g($)
    }
  else if (typeof MessageChannel < 'u') {
    var B = new MessageChannel(),
      A = B.port2
    ;(B.port1.onmessage = $),
      (N = function () {
        A.postMessage(null)
      })
  } else
    N = function () {
      R($, 0)
    }
  function z(P) {
    ;(b = P), E || ((E = !0), N())
  }
  function D(P, M) {
    T = R(function () {
      P(e.unstable_now())
    }, M)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), z(C))
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (I = 0 < P ? Math.floor(1e3 / P) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (P) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var M = 3
          break
        default:
          M = p
      }
      var j = p
      p = M
      try {
        return P()
      } finally {
        p = j
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, M) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          P = 3
      }
      var j = p
      p = P
      try {
        return M()
      } finally {
        p = j
      }
    }),
    (e.unstable_scheduleCallback = function (P, M, j) {
      var K = e.unstable_now()
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? K + j : K))
          : (j = K),
        P)
      ) {
        case 1:
          var q = -1
          break
        case 2:
          q = 250
          break
        case 5:
          q = 1073741823
          break
        case 4:
          q = 1e4
          break
        default:
          q = 5e3
      }
      return (
        (q = j + q),
        (P = { id: d++, callback: M, priorityLevel: P, startTime: j, expirationTime: q, sortIndex: -1 }),
        j > K
          ? ((P.sortIndex = j), t(u, P), n(a) === null && P === n(u) && (w ? (m(T), (T = -1)) : (w = !0), D(y, j - K)))
          : ((P.sortIndex = q), t(a, P), v || x || ((v = !0), z(C))),
        P
      )
    }),
    (e.unstable_shouldYield = _),
    (e.unstable_wrapCallback = function (P) {
      var M = p
      return function () {
        var j = p
        p = M
        try {
          return P.apply(this, arguments)
        } finally {
          p = j
        }
      }
    })
})(Hh)
Vh.exports = Hh
var q0 = Vh.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Q0 = S,
  At = q0
function L(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Kh = new Set(),
  gi = {}
function $r(e, t) {
  go(e, t), go(e + 'Capture', t)
}
function go(e, t) {
  for (gi[e] = t, e = 0; e < t.length; e++) Kh.add(t[e])
}
var Nn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  xu = Object.prototype.hasOwnProperty,
  Y0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wf = {},
  Cf = {}
function X0(e) {
  return xu.call(Cf, e) ? !0 : xu.call(wf, e) ? !1 : Y0.test(e) ? (Cf[e] = !0) : ((wf[e] = !0), !1)
}
function J0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Z0(e, t, n, r) {
  if (t === null || typeof t > 'u' || J0(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function mt(e, t, n, r, o, i, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s)
}
var st = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    st[e] = new mt(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  st[t] = new mt(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  st[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  st[e] = new mt(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    st[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  st[e] = new mt(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  st[e] = new mt(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  st[e] = new mt(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  st[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Bc = /[\-:]([a-z])/g
function zc(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Bc, zc)
    st[t] = new mt(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(Bc, zc)
  st[t] = new mt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Bc, zc)
  st[t] = new mt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  st[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
st.xlinkHref = new mt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  st[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function jc(e, t, n, r) {
  var o = st.hasOwnProperty(t) ? st[t] : null
  ;(o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Z0(t, n, o, r) && (n = null),
    r || o === null
      ? X0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Dn = Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Yi = Symbol.for('react.element'),
  Qr = Symbol.for('react.portal'),
  Yr = Symbol.for('react.fragment'),
  Dc = Symbol.for('react.strict_mode'),
  wu = Symbol.for('react.profiler'),
  Gh = Symbol.for('react.provider'),
  qh = Symbol.for('react.context'),
  Fc = Symbol.for('react.forward_ref'),
  Cu = Symbol.for('react.suspense'),
  ku = Symbol.for('react.suspense_list'),
  Wc = Symbol.for('react.memo'),
  Un = Symbol.for('react.lazy'),
  Qh = Symbol.for('react.offscreen'),
  kf = Symbol.iterator
function No(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (kf && e[kf]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var Ne = Object.assign,
  $a
function Qo(e) {
  if ($a === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      $a = (t && t[1]) || ''
    }
  return (
    `
` +
    $a +
    e
  )
}
var Na = !1
function La(e, t) {
  if (!e || Na) return ''
  Na = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(' at new ', ' at ')
                return e.displayName && a.includes('<anonymous>') && (a = a.replace('<anonymous>', e.displayName)), a
              }
            while (1 <= s && 0 <= l)
          break
        }
    }
  } finally {
    ;(Na = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Qo(e) : ''
}
function ev(e) {
  switch (e.tag) {
    case 5:
      return Qo(e.type)
    case 16:
      return Qo('Lazy')
    case 13:
      return Qo('Suspense')
    case 19:
      return Qo('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = La(e.type, !1)), e
    case 11:
      return (e = La(e.type.render, !1)), e
    case 1:
      return (e = La(e.type, !0)), e
    default:
      return ''
  }
}
function bu(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Yr:
      return 'Fragment'
    case Qr:
      return 'Portal'
    case wu:
      return 'Profiler'
    case Dc:
      return 'StrictMode'
    case Cu:
      return 'Suspense'
    case ku:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case qh:
        return (e.displayName || 'Context') + '.Consumer'
      case Gh:
        return (e._context.displayName || 'Context') + '.Provider'
      case Fc:
        var t = e.render
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Wc:
        return (t = e.displayName || null), t !== null ? t : bu(e.type) || 'Memo'
      case Un:
        ;(t = e._payload), (e = e._init)
        try {
          return bu(e(t))
        } catch {}
    }
  return null
}
function tv(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return bu(t)
    case 8:
      return t === Dc ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function ir(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Yh(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function nv(e) {
  var t = Yh(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (s) {
          ;(r = '' + s), i.call(this, s)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          r = '' + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function Xi(e) {
  e._valueTracker || (e._valueTracker = nv(e))
}
function Xh(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return e && (r = Yh(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1
}
function Vs(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Eu(e, t) {
  var n = t.checked
  return Ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function bf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = ir(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function Jh(e, t) {
  ;(t = t.checked), t != null && jc(e, 'checked', t, !1)
}
function Ru(e, t) {
  Jh(e, t)
  var n = ir(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value') ? Tu(e, t.type, n) : t.hasOwnProperty('defaultValue') && Tu(e, t.type, ir(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ef(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Tu(e, t, n) {
  ;(t !== 'number' || Vs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Yo = Array.isArray
function lo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + ir(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Pu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91))
  return Ne({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
}
function Rf(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92))
      if (Yo(n)) {
        if (1 < n.length) throw Error(L(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: ir(n) }
}
function Zh(e, t) {
  var n = ir(t.value),
    r = ir(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Tf(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function em(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function _u(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? em(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Ji,
  tm = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        Ji = Ji || document.createElement('div'),
          Ji.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ji.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function yi(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ri = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  rv = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ri).forEach(function (e) {
  rv.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ri[t] = ri[e])
  })
})
function nm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ri.hasOwnProperty(e) && ri[e])
      ? ('' + t).trim()
      : t + 'px'
}
function rm(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = nm(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var ov = Ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function Ou(e, t) {
  if (t) {
    if (ov[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(L(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(L(62))
  }
}
function Iu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Au = null
function Uc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Mu = null,
  ao = null,
  uo = null
function Pf(e) {
  if ((e = Ui(e))) {
    if (typeof Mu != 'function') throw Error(L(280))
    var t = e.stateNode
    t && ((t = Ml(t)), Mu(e.stateNode, e.type, t))
  }
}
function om(e) {
  ao ? (uo ? uo.push(e) : (uo = [e])) : (ao = e)
}
function im() {
  if (ao) {
    var e = ao,
      t = uo
    if (((uo = ao = null), Pf(e), t)) for (e = 0; e < t.length; e++) Pf(t[e])
  }
}
function sm(e, t) {
  return e(t)
}
function lm() {}
var Ba = !1
function am(e, t, n) {
  if (Ba) return e(t, n)
  Ba = !0
  try {
    return sm(e, t, n)
  } finally {
    ;(Ba = !1), (ao !== null || uo !== null) && (lm(), im())
  }
}
function vi(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Ml(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(L(231, t, typeof n))
  return n
}
var $u = !1
if (Nn)
  try {
    var Lo = {}
    Object.defineProperty(Lo, 'passive', {
      get: function () {
        $u = !0
      }
    }),
      window.addEventListener('test', Lo, Lo),
      window.removeEventListener('test', Lo, Lo)
  } catch {
    $u = !1
  }
function iv(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var oi = !1,
  Hs = null,
  Ks = !1,
  Nu = null,
  sv = {
    onError: function (e) {
      ;(oi = !0), (Hs = e)
    }
  }
function lv(e, t, n, r, o, i, s, l, a) {
  ;(oi = !1), (Hs = null), iv.apply(sv, arguments)
}
function av(e, t, n, r, o, i, s, l, a) {
  if ((lv.apply(this, arguments), oi)) {
    if (oi) {
      var u = Hs
      ;(oi = !1), (Hs = null)
    } else throw Error(L(198))
    Ks || ((Ks = !0), (Nu = u))
  }
}
function Nr(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function um(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
  }
  return null
}
function _f(e) {
  if (Nr(e) !== e) throw Error(L(188))
}
function uv(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Nr(e)), t === null)) throw Error(L(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return _f(o), e
        if (i === r) return _f(o), t
        i = i.sibling
      }
      throw Error(L(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          ;(s = !0), (n = o), (r = i)
          break
        }
        if (l === r) {
          ;(s = !0), (r = o), (n = i)
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            ;(s = !0), (n = i), (r = o)
            break
          }
          if (l === r) {
            ;(s = !0), (r = i), (n = o)
            break
          }
          l = l.sibling
        }
        if (!s) throw Error(L(189))
      }
    }
    if (n.alternate !== r) throw Error(L(190))
  }
  if (n.tag !== 3) throw Error(L(188))
  return n.stateNode.current === n ? e : t
}
function cm(e) {
  return (e = uv(e)), e !== null ? dm(e) : null
}
function dm(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = dm(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var fm = At.unstable_scheduleCallback,
  Of = At.unstable_cancelCallback,
  cv = At.unstable_shouldYield,
  dv = At.unstable_requestPaint,
  Fe = At.unstable_now,
  fv = At.unstable_getCurrentPriorityLevel,
  Vc = At.unstable_ImmediatePriority,
  pm = At.unstable_UserBlockingPriority,
  Gs = At.unstable_NormalPriority,
  pv = At.unstable_LowPriority,
  hm = At.unstable_IdlePriority,
  _l = null,
  wn = null
function hv(e) {
  if (wn && typeof wn.onCommitFiberRoot == 'function')
    try {
      wn.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var sn = Math.clz32 ? Math.clz32 : yv,
  mv = Math.log,
  gv = Math.LN2
function yv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mv(e) / gv) | 0)) | 0
}
var Zi = 64,
  es = 4194304
function Xo(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function qs(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var l = s & ~o
    l !== 0 ? (r = Xo(l)) : ((i &= s), i !== 0 && (r = Xo(i)))
  } else (s = n & ~o), s !== 0 ? (r = Xo(s)) : i !== 0 && (r = Xo(i))
  if (r === 0) return 0
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - sn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function vv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Sv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - sn(i),
      l = 1 << s,
      a = o[s]
    a === -1 ? (!(l & n) || l & r) && (o[s] = vv(l, t)) : a <= t && (e.expiredLanes |= l), (i &= ~l)
  }
}
function Lu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function mm() {
  var e = Zi
  return (Zi <<= 1), !(Zi & 4194240) && (Zi = 64), e
}
function za(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Fi(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - sn(t)),
    (e[t] = n)
}
function xv(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - sn(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function Hc(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - sn(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var de = 0
function gm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var ym,
  Kc,
  vm,
  Sm,
  xm,
  Bu = !1,
  ts = [],
  Qn = null,
  Yn = null,
  Xn = null,
  Si = new Map(),
  xi = new Map(),
  Hn = [],
  wv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function If(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Qn = null
      break
    case 'dragenter':
    case 'dragleave':
      Yn = null
      break
    case 'mouseover':
    case 'mouseout':
      Xn = null
      break
    case 'pointerover':
    case 'pointerout':
      Si.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      xi.delete(t.pointerId)
  }
}
function Bo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = Ui(t)), t !== null && Kc(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e)
}
function Cv(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Qn = Bo(Qn, e, t, n, r, o)), !0
    case 'dragenter':
      return (Yn = Bo(Yn, e, t, n, r, o)), !0
    case 'mouseover':
      return (Xn = Bo(Xn, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Si.set(i, Bo(Si.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), xi.set(i, Bo(xi.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}
function wm(e) {
  var t = Sr(e.target)
  if (t !== null) {
    var n = Nr(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = um(n)), t !== null)) {
          ;(e.blockedOn = t),
            xm(e.priority, function () {
              vm(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function bs(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Au = r), n.target.dispatchEvent(r), (Au = null)
    } else return (t = Ui(n)), t !== null && Kc(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Af(e, t, n) {
  bs(e) && n.delete(t)
}
function kv() {
  ;(Bu = !1),
    Qn !== null && bs(Qn) && (Qn = null),
    Yn !== null && bs(Yn) && (Yn = null),
    Xn !== null && bs(Xn) && (Xn = null),
    Si.forEach(Af),
    xi.forEach(Af)
}
function zo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Bu || ((Bu = !0), At.unstable_scheduleCallback(At.unstable_NormalPriority, kv)))
}
function wi(e) {
  function t(o) {
    return zo(o, e)
  }
  if (0 < ts.length) {
    zo(ts[0], e)
    for (var n = 1; n < ts.length; n++) {
      var r = ts[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Qn !== null && zo(Qn, e), Yn !== null && zo(Yn, e), Xn !== null && zo(Xn, e), Si.forEach(t), xi.forEach(t), n = 0;
    n < Hn.length;
    n++
  )
    (r = Hn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Hn.length && ((n = Hn[0]), n.blockedOn === null); ) wm(n), n.blockedOn === null && Hn.shift()
}
var co = Dn.ReactCurrentBatchConfig,
  Qs = !0
function bv(e, t, n, r) {
  var o = de,
    i = co.transition
  co.transition = null
  try {
    ;(de = 1), Gc(e, t, n, r)
  } finally {
    ;(de = o), (co.transition = i)
  }
}
function Ev(e, t, n, r) {
  var o = de,
    i = co.transition
  co.transition = null
  try {
    ;(de = 4), Gc(e, t, n, r)
  } finally {
    ;(de = o), (co.transition = i)
  }
}
function Gc(e, t, n, r) {
  if (Qs) {
    var o = zu(e, t, n, r)
    if (o === null) qa(e, t, r, Ys, n), If(e, r)
    else if (Cv(o, e, t, n, r)) r.stopPropagation()
    else if ((If(e, r), t & 4 && -1 < wv.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ui(o)
        if ((i !== null && ym(i), (i = zu(e, t, n, r)), i === null && qa(e, t, r, Ys, n), i === o)) break
        o = i
      }
      o !== null && r.stopPropagation()
    } else qa(e, t, r, null, n)
  }
}
var Ys = null
function zu(e, t, n, r) {
  if (((Ys = null), (e = Uc(r)), (e = Sr(e)), e !== null))
    if (((t = Nr(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = um(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Ys = e), null
}
function Cm(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (fv()) {
        case Vc:
          return 1
        case pm:
          return 4
        case Gs:
        case pv:
          return 16
        case hm:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Gn = null,
  qc = null,
  Es = null
function km() {
  if (Es) return Es
  var e,
    t = qc,
    n = t.length,
    r,
    o = 'value' in Gn ? Gn.value : Gn.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Es = o.slice(e, 1 < r ? 1 - r : void 0))
}
function Rs(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function ns() {
  return !0
}
function Mf() {
  return !1
}
function $t(e) {
  function t(n, r, o, i, s) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null)
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]))
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ns : Mf),
      (this.isPropagationStopped = Mf),
      this
    )
  }
  return (
    Ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ns))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ns))
      },
      persist: function () {},
      isPersistent: ns
    }),
    t
  )
}
var To = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Qc = $t(To),
  Wi = Ne({}, To, { view: 0, detail: 0 }),
  Rv = $t(Wi),
  ja,
  Da,
  jo,
  Ol = Ne({}, Wi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== jo &&
            (jo && e.type === 'mousemove'
              ? ((ja = e.screenX - jo.screenX), (Da = e.screenY - jo.screenY))
              : (Da = ja = 0),
            (jo = e)),
          ja)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Da
    }
  }),
  $f = $t(Ol),
  Tv = Ne({}, Ol, { dataTransfer: 0 }),
  Pv = $t(Tv),
  _v = Ne({}, Wi, { relatedTarget: 0 }),
  Fa = $t(_v),
  Ov = Ne({}, To, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Iv = $t(Ov),
  Av = Ne({}, To, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  Mv = $t(Av),
  $v = Ne({}, To, { data: 0 }),
  Nf = $t($v),
  Nv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  Lv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  Bv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function zv(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Bv[e]) ? !!t[e] : !1
}
function Yc() {
  return zv
}
var jv = Ne({}, Wi, {
    key: function (e) {
      if (e.key) {
        var t = Nv[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Rs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Lv[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yc,
    charCode: function (e) {
      return e.type === 'keypress' ? Rs(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress' ? Rs(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    }
  }),
  Dv = $t(jv),
  Fv = Ne({}, Ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Lf = $t(Fv),
  Wv = Ne({}, Wi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yc
  }),
  Uv = $t(Wv),
  Vv = Ne({}, To, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hv = $t(Vv),
  Kv = Ne({}, Ol, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Gv = $t(Kv),
  qv = [9, 13, 27, 32],
  Xc = Nn && 'CompositionEvent' in window,
  ii = null
Nn && 'documentMode' in document && (ii = document.documentMode)
var Qv = Nn && 'TextEvent' in window && !ii,
  bm = Nn && (!Xc || (ii && 8 < ii && 11 >= ii)),
  Bf = ' ',
  zf = !1
function Em(e, t) {
  switch (e) {
    case 'keyup':
      return qv.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Rm(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Xr = !1
function Yv(e, t) {
  switch (e) {
    case 'compositionend':
      return Rm(t)
    case 'keypress':
      return t.which !== 32 ? null : ((zf = !0), Bf)
    case 'textInput':
      return (e = t.data), e === Bf && zf ? null : e
    default:
      return null
  }
}
function Xv(e, t) {
  if (Xr) return e === 'compositionend' || (!Xc && Em(e, t)) ? ((e = km()), (Es = qc = Gn = null), (Xr = !1), e) : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return bm && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Jv = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Jv[e.type] : t === 'textarea'
}
function Tm(e, t, n, r) {
  om(r),
    (t = Xs(t, 'onChange')),
    0 < t.length && ((n = new Qc('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
}
var si = null,
  Ci = null
function Zv(e) {
  zm(e, 0)
}
function Il(e) {
  var t = eo(e)
  if (Xh(t)) return e
}
function e1(e, t) {
  if (e === 'change') return t
}
var Pm = !1
if (Nn) {
  var Wa
  if (Nn) {
    var Ua = 'oninput' in document
    if (!Ua) {
      var Df = document.createElement('div')
      Df.setAttribute('oninput', 'return;'), (Ua = typeof Df.oninput == 'function')
    }
    Wa = Ua
  } else Wa = !1
  Pm = Wa && (!document.documentMode || 9 < document.documentMode)
}
function Ff() {
  si && (si.detachEvent('onpropertychange', _m), (Ci = si = null))
}
function _m(e) {
  if (e.propertyName === 'value' && Il(Ci)) {
    var t = []
    Tm(t, Ci, e, Uc(e)), am(Zv, t)
  }
}
function t1(e, t, n) {
  e === 'focusin' ? (Ff(), (si = t), (Ci = n), si.attachEvent('onpropertychange', _m)) : e === 'focusout' && Ff()
}
function n1(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Il(Ci)
}
function r1(e, t) {
  if (e === 'click') return Il(t)
}
function o1(e, t) {
  if (e === 'input' || e === 'change') return Il(t)
}
function i1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var an = typeof Object.is == 'function' ? Object.is : i1
function ki(e, t) {
  if (an(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!xu.call(t, o) || !an(e[o], t[o])) return !1
  }
  return !0
}
function Wf(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Uf(e, t) {
  var n = Wf(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Wf(n)
  }
}
function Om(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Om(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function Im() {
  for (var e = window, t = Vs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Vs(e.document)
  }
  return t
}
function Jc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function s1(e) {
  var t = Im(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && Om(n.ownerDocument.documentElement, n)) {
    if (r !== null && Jc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Uf(n, i))
        var s = Uf(n, r)
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var l1 = Nn && 'documentMode' in document && 11 >= document.documentMode,
  Jr = null,
  ju = null,
  li = null,
  Du = !1
function Vf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Du ||
    Jr == null ||
    Jr !== Vs(r) ||
    ((r = Jr),
    'selectionStart' in r && Jc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (li && ki(li, r)) ||
      ((li = r),
      (r = Xs(ju, 'onSelect')),
      0 < r.length &&
        ((t = new Qc('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Jr))))
}
function rs(e, t) {
  var n = {}
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n
}
var Zr = {
    animationend: rs('Animation', 'AnimationEnd'),
    animationiteration: rs('Animation', 'AnimationIteration'),
    animationstart: rs('Animation', 'AnimationStart'),
    transitionend: rs('Transition', 'TransitionEnd')
  },
  Va = {},
  Am = {}
Nn &&
  ((Am = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Zr.animationend.animation, delete Zr.animationiteration.animation, delete Zr.animationstart.animation),
  'TransitionEvent' in window || delete Zr.transitionend.transition)
function Al(e) {
  if (Va[e]) return Va[e]
  if (!Zr[e]) return e
  var t = Zr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Am) return (Va[e] = t[n])
  return e
}
var Mm = Al('animationend'),
  $m = Al('animationiteration'),
  Nm = Al('animationstart'),
  Lm = Al('transitionend'),
  Bm = new Map(),
  Hf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function cr(e, t) {
  Bm.set(e, t), $r(t, [e])
}
for (var Ha = 0; Ha < Hf.length; Ha++) {
  var Ka = Hf[Ha],
    a1 = Ka.toLowerCase(),
    u1 = Ka[0].toUpperCase() + Ka.slice(1)
  cr(a1, 'on' + u1)
}
cr(Mm, 'onAnimationEnd')
cr($m, 'onAnimationIteration')
cr(Nm, 'onAnimationStart')
cr('dblclick', 'onDoubleClick')
cr('focusin', 'onFocus')
cr('focusout', 'onBlur')
cr(Lm, 'onTransitionEnd')
go('onMouseEnter', ['mouseout', 'mouseover'])
go('onMouseLeave', ['mouseout', 'mouseover'])
go('onPointerEnter', ['pointerout', 'pointerover'])
go('onPointerLeave', ['pointerout', 'pointerover'])
$r('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
$r('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
$r('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
$r('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
$r('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
$r('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var Jo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  c1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Jo))
function Kf(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), av(r, t, void 0, e), (e.currentTarget = null)
}
function zm(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e
          Kf(o, l, u), (i = a)
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== i && o.isPropagationStopped())
          )
            break e
          Kf(o, l, u), (i = a)
        }
    }
  }
  if (Ks) throw ((e = Nu), (Ks = !1), (Nu = null), e)
}
function Ee(e, t) {
  var n = t[Hu]
  n === void 0 && (n = t[Hu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (jm(t, e, 2, !1), n.add(r))
}
function Ga(e, t, n) {
  var r = 0
  t && (r |= 4), jm(n, e, r, t)
}
var os = '_reactListening' + Math.random().toString(36).slice(2)
function bi(e) {
  if (!e[os]) {
    ;(e[os] = !0),
      Kh.forEach(function (n) {
        n !== 'selectionchange' && (c1.has(n) || Ga(n, !1, e), Ga(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[os] || ((t[os] = !0), Ga('selectionchange', !1, t))
  }
}
function jm(e, t, n, r) {
  switch (Cm(t)) {
    case 1:
      var o = bv
      break
    case 4:
      o = Ev
      break
    default:
      o = Gc
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !$u || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
}
function qa(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return
            s = s.return
          }
        for (; l !== null; ) {
          if (((s = Sr(l)), s === null)) return
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  am(function () {
    var u = i,
      d = Uc(n),
      f = []
    e: {
      var p = Bm.get(e)
      if (p !== void 0) {
        var x = Qc,
          v = e
        switch (e) {
          case 'keypress':
            if (Rs(n) === 0) break e
          case 'keydown':
          case 'keyup':
            x = Dv
            break
          case 'focusin':
            ;(v = 'focus'), (x = Fa)
            break
          case 'focusout':
            ;(v = 'blur'), (x = Fa)
            break
          case 'beforeblur':
          case 'afterblur':
            x = Fa
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = $f
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = Pv
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = Uv
            break
          case Mm:
          case $m:
          case Nm:
            x = Iv
            break
          case Lm:
            x = Hv
            break
          case 'scroll':
            x = Rv
            break
          case 'wheel':
            x = Gv
            break
          case 'copy':
          case 'cut':
          case 'paste':
            x = Mv
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = Lf
        }
        var w = (t & 4) !== 0,
          R = !w && e === 'scroll',
          m = w ? (p !== null ? p + 'Capture' : null) : p
        w = []
        for (var g = u, c; g !== null; ) {
          c = g
          var y = c.stateNode
          if (
            (c.tag === 5 && y !== null && ((c = y), m !== null && ((y = vi(g, m)), y != null && w.push(Ei(g, y, c)))),
            R)
          )
            break
          g = g.return
        }
        0 < w.length && ((p = new x(p, v, null, n, d)), f.push({ event: p, listeners: w }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          p && n !== Au && (v = n.relatedTarget || n.fromElement) && (Sr(v) || v[Ln]))
        )
          break e
        if (
          (x || p) &&
          ((p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = u),
              (v = v ? Sr(v) : null),
              v !== null && ((R = Nr(v)), v !== R || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((w = $f),
            (y = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Lf), (y = 'onPointerLeave'), (m = 'onPointerEnter'), (g = 'pointer')),
            (R = x == null ? p : eo(x)),
            (c = v == null ? p : eo(v)),
            (p = new w(y, g + 'leave', x, n, d)),
            (p.target = R),
            (p.relatedTarget = c),
            (y = null),
            Sr(d) === u && ((w = new w(m, g + 'enter', v, n, d)), (w.target = c), (w.relatedTarget = R), (y = w)),
            (R = y),
            x && v)
          )
            t: {
              for (w = x, m = v, g = 0, c = w; c; c = Dr(c)) g++
              for (c = 0, y = m; y; y = Dr(y)) c++
              for (; 0 < g - c; ) (w = Dr(w)), g--
              for (; 0 < c - g; ) (m = Dr(m)), c--
              for (; g--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t
                ;(w = Dr(w)), (m = Dr(m))
              }
              w = null
            }
          else w = null
          x !== null && Gf(f, p, x, w, !1), v !== null && R !== null && Gf(f, R, v, w, !0)
        }
      }
      e: {
        if (
          ((p = u ? eo(u) : window),
          (x = p.nodeName && p.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && p.type === 'file'))
        )
          var C = e1
        else if (jf(p))
          if (Pm) C = o1
          else {
            C = n1
            var E = t1
          }
        else
          (x = p.nodeName) && x.toLowerCase() === 'input' && (p.type === 'checkbox' || p.type === 'radio') && (C = r1)
        if (C && (C = C(e, u))) {
          Tm(f, C, n, d)
          break e
        }
        E && E(e, p, u),
          e === 'focusout' && (E = p._wrapperState) && E.controlled && p.type === 'number' && Tu(p, 'number', p.value)
      }
      switch (((E = u ? eo(u) : window), e)) {
        case 'focusin':
          ;(jf(E) || E.contentEditable === 'true') && ((Jr = E), (ju = u), (li = null))
          break
        case 'focusout':
          li = ju = Jr = null
          break
        case 'mousedown':
          Du = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Du = !1), Vf(f, n, d)
          break
        case 'selectionchange':
          if (l1) break
        case 'keydown':
        case 'keyup':
          Vf(f, n, d)
      }
      var b
      if (Xc)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        Xr ? Em(e, n) && (T = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (bm &&
          n.locale !== 'ko' &&
          (Xr || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Xr && (b = km())
            : ((Gn = d), (qc = 'value' in Gn ? Gn.value : Gn.textContent), (Xr = !0))),
        (E = Xs(u, T)),
        0 < E.length &&
          ((T = new Nf(T, e, null, n, d)),
          f.push({ event: T, listeners: E }),
          b ? (T.data = b) : ((b = Rm(n)), b !== null && (T.data = b)))),
        (b = Qv ? Yv(e, n) : Xv(e, n)) &&
          ((u = Xs(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new Nf('onBeforeInput', 'beforeinput', null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = b)))
    }
    zm(f, t)
  })
}
function Ei(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Xs(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = vi(e, n)), i != null && r.unshift(Ei(e, i, o)), (i = vi(e, t)), i != null && r.push(Ei(e, i, o))),
      (e = e.return)
  }
  return r
}
function Dr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Gf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode
    if (a !== null && a === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = vi(n, i)), a != null && s.unshift(Ei(n, a, l)))
        : o || ((a = vi(n, i)), a != null && s.push(Ei(n, a, l)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var d1 = /\r\n?/g,
  f1 = /\u0000|\uFFFD/g
function qf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      d1,
      `
`
    )
    .replace(f1, '')
}
function is(e, t, n) {
  if (((t = qf(t)), qf(e) !== t && n)) throw Error(L(425))
}
function Js() {}
var Fu = null,
  Wu = null
function Uu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Vu = typeof setTimeout == 'function' ? setTimeout : void 0,
  p1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Qf = typeof Promise == 'function' ? Promise : void 0,
  h1 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Qf < 'u'
        ? function (e) {
            return Qf.resolve(null).then(e).catch(m1)
          }
        : Vu
function m1(e) {
  setTimeout(function () {
    throw e
  })
}
function Qa(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), wi(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  wi(t)
}
function Jn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Yf(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Po = Math.random().toString(36).slice(2),
  vn = '__reactFiber$' + Po,
  Ri = '__reactProps$' + Po,
  Ln = '__reactContainer$' + Po,
  Hu = '__reactEvents$' + Po,
  g1 = '__reactListeners$' + Po,
  y1 = '__reactHandles$' + Po
function Sr(e) {
  var t = e[vn]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ln] || n[vn])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Yf(e); e !== null; ) {
          if ((n = e[vn])) return n
          e = Yf(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Ui(e) {
  return (e = e[vn] || e[Ln]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
}
function eo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(L(33))
}
function Ml(e) {
  return e[Ri] || null
}
var Ku = [],
  to = -1
function dr(e) {
  return { current: e }
}
function Re(e) {
  0 > to || ((e.current = Ku[to]), (Ku[to] = null), to--)
}
function ke(e, t) {
  to++, (Ku[to] = e.current), (e.current = t)
}
var sr = {},
  dt = dr(sr),
  St = dr(!1),
  Rr = sr
function yo(e, t) {
  var n = e.type.contextTypes
  if (!n) return sr
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function xt(e) {
  return (e = e.childContextTypes), e != null
}
function Zs() {
  Re(St), Re(dt)
}
function Xf(e, t, n) {
  if (dt.current !== sr) throw Error(L(168))
  ke(dt, t), ke(St, n)
}
function Dm(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(L(108, tv(e) || 'Unknown', o))
  return Ne({}, n, r)
}
function el(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sr),
    (Rr = dt.current),
    ke(dt, e),
    ke(St, St.current),
    !0
  )
}
function Jf(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(L(169))
  n ? ((e = Dm(e, t, Rr)), (r.__reactInternalMemoizedMergedChildContext = e), Re(St), Re(dt), ke(dt, e)) : Re(St),
    ke(St, n)
}
var On = null,
  $l = !1,
  Ya = !1
function Fm(e) {
  On === null ? (On = [e]) : On.push(e)
}
function v1(e) {
  ;($l = !0), Fm(e)
}
function fr() {
  if (!Ya && On !== null) {
    Ya = !0
    var e = 0,
      t = de
    try {
      var n = On
      for (de = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(On = null), ($l = !1)
    } catch (o) {
      throw (On !== null && (On = On.slice(e + 1)), fm(Vc, fr), o)
    } finally {
      ;(de = t), (Ya = !1)
    }
  }
  return null
}
var no = [],
  ro = 0,
  tl = null,
  nl = 0,
  jt = [],
  Dt = 0,
  Tr = null,
  In = 1,
  An = ''
function mr(e, t) {
  ;(no[ro++] = nl), (no[ro++] = tl), (tl = e), (nl = t)
}
function Wm(e, t, n) {
  ;(jt[Dt++] = In), (jt[Dt++] = An), (jt[Dt++] = Tr), (Tr = e)
  var r = In
  e = An
  var o = 32 - sn(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - sn(t) + o
  if (30 < i) {
    var s = o - (o % 5)
    ;(i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (In = (1 << (32 - sn(t) + o)) | (n << o) | r),
      (An = i + e)
  } else (In = (1 << i) | (n << o) | r), (An = e)
}
function Zc(e) {
  e.return !== null && (mr(e, 1), Wm(e, 1, 0))
}
function ed(e) {
  for (; e === tl; ) (tl = no[--ro]), (no[ro] = null), (nl = no[--ro]), (no[ro] = null)
  for (; e === Tr; )
    (Tr = jt[--Dt]), (jt[Dt] = null), (An = jt[--Dt]), (jt[Dt] = null), (In = jt[--Dt]), (jt[Dt] = null)
}
var Ot = null,
  _t = null,
  Oe = !1,
  tn = null
function Um(e, t) {
  var n = Ut(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ot = e), (_t = Jn(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ot = e), (_t = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tr !== null ? { id: In, overflow: An } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ot = e),
            (_t = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Gu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function qu(e) {
  if (Oe) {
    var t = _t
    if (t) {
      var n = t
      if (!Zf(e, t)) {
        if (Gu(e)) throw Error(L(418))
        t = Jn(n.nextSibling)
        var r = Ot
        t && Zf(e, t) ? Um(r, n) : ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (Ot = e))
      }
    } else {
      if (Gu(e)) throw Error(L(418))
      ;(e.flags = (e.flags & -4097) | 2), (Oe = !1), (Ot = e)
    }
  }
}
function ep(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  Ot = e
}
function ss(e) {
  if (e !== Ot) return !1
  if (!Oe) return ep(e), (Oe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Uu(e.type, e.memoizedProps))),
    t && (t = _t))
  ) {
    if (Gu(e)) throw (Vm(), Error(L(418)))
    for (; t; ) Um(e, t), (t = Jn(t.nextSibling))
  }
  if ((ep(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(L(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              _t = Jn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      _t = null
    }
  } else _t = Ot ? Jn(e.stateNode.nextSibling) : null
  return !0
}
function Vm() {
  for (var e = _t; e; ) e = Jn(e.nextSibling)
}
function vo() {
  ;(_t = Ot = null), (Oe = !1)
}
function td(e) {
  tn === null ? (tn = [e]) : tn.push(e)
}
var S1 = Dn.ReactCurrentBatchConfig
function Do(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309))
        var r = n.stateNode
      }
      if (!r) throw Error(L(147, e))
      var o = r,
        i = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs
            s === null ? delete l[i] : (l[i] = s)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(L(284))
    if (!n._owner) throw Error(L(290, e))
  }
  return e
}
function ls(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(L(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  )
}
function tp(e) {
  var t = e._init
  return t(e._payload)
}
function Hm(e) {
  function t(m, g) {
    if (e) {
      var c = m.deletions
      c === null ? ((m.deletions = [g]), (m.flags |= 16)) : c.push(g)
    }
  }
  function n(m, g) {
    if (!e) return null
    for (; g !== null; ) t(m, g), (g = g.sibling)
    return null
  }
  function r(m, g) {
    for (m = new Map(); g !== null; ) g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling)
    return m
  }
  function o(m, g) {
    return (m = nr(m, g)), (m.index = 0), (m.sibling = null), m
  }
  function i(m, g, c) {
    return (
      (m.index = c),
      e
        ? ((c = m.alternate), c !== null ? ((c = c.index), c < g ? ((m.flags |= 2), g) : c) : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    )
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function l(m, g, c, y) {
    return g === null || g.tag !== 6 ? ((g = ru(c, m.mode, y)), (g.return = m), g) : ((g = o(g, c)), (g.return = m), g)
  }
  function a(m, g, c, y) {
    var C = c.type
    return C === Yr
      ? d(m, g, c.props.children, y, c.key)
      : g !== null &&
          (g.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === Un && tp(C) === g.type))
        ? ((y = o(g, c.props)), (y.ref = Do(m, g, c)), (y.return = m), y)
        : ((y = Ms(c.type, c.key, c.props, null, m.mode, y)), (y.ref = Do(m, g, c)), (y.return = m), y)
  }
  function u(m, g, c, y) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== c.containerInfo ||
      g.stateNode.implementation !== c.implementation
      ? ((g = ou(c, m.mode, y)), (g.return = m), g)
      : ((g = o(g, c.children || [])), (g.return = m), g)
  }
  function d(m, g, c, y, C) {
    return g === null || g.tag !== 7
      ? ((g = br(c, m.mode, y, C)), (g.return = m), g)
      : ((g = o(g, c)), (g.return = m), g)
  }
  function f(m, g, c) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = ru('' + g, m.mode, c)), (g.return = m), g
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Yi:
          return (c = Ms(g.type, g.key, g.props, null, m.mode, c)), (c.ref = Do(m, null, g)), (c.return = m), c
        case Qr:
          return (g = ou(g, m.mode, c)), (g.return = m), g
        case Un:
          var y = g._init
          return f(m, y(g._payload), c)
      }
      if (Yo(g) || No(g)) return (g = br(g, m.mode, c, null)), (g.return = m), g
      ls(m, g)
    }
    return null
  }
  function p(m, g, c, y) {
    var C = g !== null ? g.key : null
    if ((typeof c == 'string' && c !== '') || typeof c == 'number') return C !== null ? null : l(m, g, '' + c, y)
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case Yi:
          return c.key === C ? a(m, g, c, y) : null
        case Qr:
          return c.key === C ? u(m, g, c, y) : null
        case Un:
          return (C = c._init), p(m, g, C(c._payload), y)
      }
      if (Yo(c) || No(c)) return C !== null ? null : d(m, g, c, y, null)
      ls(m, c)
    }
    return null
  }
  function x(m, g, c, y, C) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number') return (m = m.get(c) || null), l(g, m, '' + y, C)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case Yi:
          return (m = m.get(y.key === null ? c : y.key) || null), a(g, m, y, C)
        case Qr:
          return (m = m.get(y.key === null ? c : y.key) || null), u(g, m, y, C)
        case Un:
          var E = y._init
          return x(m, g, c, E(y._payload), C)
      }
      if (Yo(y) || No(y)) return (m = m.get(c) || null), d(g, m, y, C, null)
      ls(g, y)
    }
    return null
  }
  function v(m, g, c, y) {
    for (var C = null, E = null, b = g, T = (g = 0), I = null; b !== null && T < c.length; T++) {
      b.index > T ? ((I = b), (b = null)) : (I = b.sibling)
      var h = p(m, b, c[T], y)
      if (h === null) {
        b === null && (b = I)
        break
      }
      e && b && h.alternate === null && t(m, b),
        (g = i(h, g, T)),
        E === null ? (C = h) : (E.sibling = h),
        (E = h),
        (b = I)
    }
    if (T === c.length) return n(m, b), Oe && mr(m, T), C
    if (b === null) {
      for (; T < c.length; T++)
        (b = f(m, c[T], y)), b !== null && ((g = i(b, g, T)), E === null ? (C = b) : (E.sibling = b), (E = b))
      return Oe && mr(m, T), C
    }
    for (b = r(m, b); T < c.length; T++)
      (I = x(b, m, T, c[T], y)),
        I !== null &&
          (e && I.alternate !== null && b.delete(I.key === null ? T : I.key),
          (g = i(I, g, T)),
          E === null ? (C = I) : (E.sibling = I),
          (E = I))
    return (
      e &&
        b.forEach(function (_) {
          return t(m, _)
        }),
      Oe && mr(m, T),
      C
    )
  }
  function w(m, g, c, y) {
    var C = No(c)
    if (typeof C != 'function') throw Error(L(150))
    if (((c = C.call(c)), c == null)) throw Error(L(151))
    for (var E = (C = null), b = g, T = (g = 0), I = null, h = c.next(); b !== null && !h.done; T++, h = c.next()) {
      b.index > T ? ((I = b), (b = null)) : (I = b.sibling)
      var _ = p(m, b, h.value, y)
      if (_ === null) {
        b === null && (b = I)
        break
      }
      e && b && _.alternate === null && t(m, b),
        (g = i(_, g, T)),
        E === null ? (C = _) : (E.sibling = _),
        (E = _),
        (b = I)
    }
    if (h.done) return n(m, b), Oe && mr(m, T), C
    if (b === null) {
      for (; !h.done; T++, h = c.next())
        (h = f(m, h.value, y)), h !== null && ((g = i(h, g, T)), E === null ? (C = h) : (E.sibling = h), (E = h))
      return Oe && mr(m, T), C
    }
    for (b = r(m, b); !h.done; T++, h = c.next())
      (h = x(b, m, T, h.value, y)),
        h !== null &&
          (e && h.alternate !== null && b.delete(h.key === null ? T : h.key),
          (g = i(h, g, T)),
          E === null ? (C = h) : (E.sibling = h),
          (E = h))
    return (
      e &&
        b.forEach(function ($) {
          return t(m, $)
        }),
      Oe && mr(m, T),
      C
    )
  }
  function R(m, g, c, y) {
    if (
      (typeof c == 'object' && c !== null && c.type === Yr && c.key === null && (c = c.props.children),
      typeof c == 'object' && c !== null)
    ) {
      switch (c.$$typeof) {
        case Yi:
          e: {
            for (var C = c.key, E = g; E !== null; ) {
              if (E.key === C) {
                if (((C = c.type), C === Yr)) {
                  if (E.tag === 7) {
                    n(m, E.sibling), (g = o(E, c.props.children)), (g.return = m), (m = g)
                    break e
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === Un && tp(C) === E.type)
                ) {
                  n(m, E.sibling), (g = o(E, c.props)), (g.ref = Do(m, E, c)), (g.return = m), (m = g)
                  break e
                }
                n(m, E)
                break
              } else t(m, E)
              E = E.sibling
            }
            c.type === Yr
              ? ((g = br(c.props.children, m.mode, y, c.key)), (g.return = m), (m = g))
              : ((y = Ms(c.type, c.key, c.props, null, m.mode, y)), (y.ref = Do(m, g, c)), (y.return = m), (m = y))
          }
          return s(m)
        case Qr:
          e: {
            for (E = c.key; g !== null; ) {
              if (g.key === E)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === c.containerInfo &&
                  g.stateNode.implementation === c.implementation
                ) {
                  n(m, g.sibling), (g = o(g, c.children || [])), (g.return = m), (m = g)
                  break e
                } else {
                  n(m, g)
                  break
                }
              else t(m, g)
              g = g.sibling
            }
            ;(g = ou(c, m.mode, y)), (g.return = m), (m = g)
          }
          return s(m)
        case Un:
          return (E = c._init), R(m, g, E(c._payload), y)
      }
      if (Yo(c)) return v(m, g, c, y)
      if (No(c)) return w(m, g, c, y)
      ls(m, c)
    }
    return (typeof c == 'string' && c !== '') || typeof c == 'number'
      ? ((c = '' + c),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = o(g, c)), (g.return = m), (m = g))
          : (n(m, g), (g = ru(c, m.mode, y)), (g.return = m), (m = g)),
        s(m))
      : n(m, g)
  }
  return R
}
var So = Hm(!0),
  Km = Hm(!1),
  rl = dr(null),
  ol = null,
  oo = null,
  nd = null
function rd() {
  nd = oo = ol = null
}
function od(e) {
  var t = rl.current
  Re(rl), (e._currentValue = t)
}
function Qu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function fo(e, t) {
  ;(ol = e),
    (nd = oo = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (vt = !0), (e.firstContext = null))
}
function Ht(e) {
  var t = e._currentValue
  if (nd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), oo === null)) {
      if (ol === null) throw Error(L(308))
      ;(oo = e), (ol.dependencies = { lanes: 0, firstContext: e })
    } else oo = oo.next = e
  return t
}
var xr = null
function id(e) {
  xr === null ? (xr = [e]) : xr.push(e)
}
function Gm(e, t, n, r) {
  var o = t.interleaved
  return o === null ? ((n.next = n), id(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), Bn(e, r)
}
function Bn(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Vn = !1
function sd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function qm(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function $n(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function Zn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), ie & 2)) {
    var o = r.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Bn(e, n)
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), id(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Bn(e, n)
  )
}
function Ts(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Hc(e, n)
  }
}
function np(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
}
function il(e, t, n, r) {
  var o = e.updateQueue
  Vn = !1
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending
  if (l !== null) {
    o.shared.pending = null
    var a = l,
      u = a.next
    ;(a.next = null), s === null ? (i = u) : (s.next = u), (s = a)
    var d = e.alternate
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s && (l === null ? (d.firstBaseUpdate = u) : (l.next = u), (d.lastBaseUpdate = a)))
  }
  if (i !== null) {
    var f = o.baseState
    ;(s = 0), (d = u = a = null), (l = i)
    do {
      var p = l.lane,
        x = l.eventTime
      if ((r & p) === p) {
        d !== null &&
          (d = d.next = { eventTime: x, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null })
        e: {
          var v = e,
            w = l
          switch (((p = t), (x = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == 'function')) {
                f = v.call(x, f, p)
                break e
              }
              f = v
              break e
            case 3:
              v.flags = (v.flags & -65537) | 128
            case 0:
              if (((v = w.payload), (p = typeof v == 'function' ? v.call(x, f, p) : v), p == null)) break e
              f = Ne({}, f, p)
              break e
            case 2:
              Vn = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (p = o.effects), p === null ? (o.effects = [l]) : p.push(l))
      } else
        (x = { eventTime: x, lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          d === null ? ((u = d = x), (a = f)) : (d = d.next = x),
          (s |= p)
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break
        ;(p = l), (l = p.next), (p.next = null), (o.lastBaseUpdate = p), (o.shared.pending = null)
      }
    } while (!0)
    if (
      (d === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (s |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(_r |= s), (e.lanes = s), (e.memoizedState = f)
  }
}
function rp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(L(191, o))
        o.call(r)
      }
    }
}
var Vi = {},
  Cn = dr(Vi),
  Ti = dr(Vi),
  Pi = dr(Vi)
function wr(e) {
  if (e === Vi) throw Error(L(174))
  return e
}
function ld(e, t) {
  switch ((ke(Pi, t), ke(Ti, e), ke(Cn, Vi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _u(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = _u(t, e))
  }
  Re(Cn), ke(Cn, t)
}
function xo() {
  Re(Cn), Re(Ti), Re(Pi)
}
function Qm(e) {
  wr(Pi.current)
  var t = wr(Cn.current),
    n = _u(t, e.type)
  t !== n && (ke(Ti, e), ke(Cn, n))
}
function ad(e) {
  Ti.current === e && (Re(Cn), Re(Ti))
}
var Me = dr(0)
function sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Xa = []
function ud() {
  for (var e = 0; e < Xa.length; e++) Xa[e]._workInProgressVersionPrimary = null
  Xa.length = 0
}
var Ps = Dn.ReactCurrentDispatcher,
  Ja = Dn.ReactCurrentBatchConfig,
  Pr = 0,
  $e = null,
  qe = null,
  Xe = null,
  ll = !1,
  ai = !1,
  _i = 0,
  x1 = 0
function lt() {
  throw Error(L(321))
}
function cd(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!an(e[n], t[n])) return !1
  return !0
}
function dd(e, t, n, r, o, i) {
  if (
    ((Pr = i),
    ($e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ps.current = e === null || e.memoizedState === null ? b1 : E1),
    (e = n(r, o)),
    ai)
  ) {
    i = 0
    do {
      if (((ai = !1), (_i = 0), 25 <= i)) throw Error(L(301))
      ;(i += 1), (Xe = qe = null), (t.updateQueue = null), (Ps.current = R1), (e = n(r, o))
    } while (ai)
  }
  if (((Ps.current = al), (t = qe !== null && qe.next !== null), (Pr = 0), (Xe = qe = $e = null), (ll = !1), t))
    throw Error(L(300))
  return e
}
function fd() {
  var e = _i !== 0
  return (_i = 0), e
}
function mn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return Xe === null ? ($e.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe
}
function Kt() {
  if (qe === null) {
    var e = $e.alternate
    e = e !== null ? e.memoizedState : null
  } else e = qe.next
  var t = Xe === null ? $e.memoizedState : Xe.next
  if (t !== null) (Xe = t), (qe = e)
  else {
    if (e === null) throw Error(L(310))
    ;(qe = e),
      (e = {
        memoizedState: qe.memoizedState,
        baseState: qe.baseState,
        baseQueue: qe.baseQueue,
        queue: qe.queue,
        next: null
      }),
      Xe === null ? ($e.memoizedState = Xe = e) : (Xe = Xe.next = e)
  }
  return Xe
}
function Oi(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Za(e) {
  var t = Kt(),
    n = t.queue
  if (n === null) throw Error(L(311))
  n.lastRenderedReducer = e
  var r = qe,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var s = o.next
      ;(o.next = i.next), (i.next = s)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var l = (s = null),
      a = null,
      u = i
    do {
      var d = u.lane
      if ((Pr & d) === d)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var f = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f), ($e.lanes |= d), (_r |= d)
      }
      u = u.next
    } while (u !== null && u !== i)
    a === null ? (s = r) : (a.next = l),
      an(r, t.memoizedState) || (vt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), ($e.lanes |= i), (_r |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function eu(e) {
  var t = Kt(),
    n = t.queue
  if (n === null) throw Error(L(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var s = (o = o.next)
    do (i = e(i, s.action)), (s = s.next)
    while (s !== o)
    an(i, t.memoizedState) || (vt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function Ym() {}
function Xm(e, t) {
  var n = $e,
    r = Kt(),
    o = t(),
    i = !an(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (vt = !0)),
    (r = r.queue),
    pd(eg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Xe !== null && Xe.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Ii(9, Zm.bind(null, n, r, o, t), void 0, null), Je === null)) throw Error(L(349))
    Pr & 30 || Jm(n, t, o)
  }
  return o
}
function Jm(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), ($e.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Zm(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), tg(t) && ng(e)
}
function eg(e, t, n) {
  return n(function () {
    tg(t) && ng(e)
  })
}
function tg(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !an(e, n)
  } catch {
    return !0
  }
}
function ng(e) {
  var t = Bn(e, 1)
  t !== null && ln(t, e, 1, -1)
}
function op(e) {
  var t = mn()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Oi, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = k1.bind(null, $e, e)),
    [t.memoizedState, e]
  )
}
function Ii(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), ($e.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function rg() {
  return Kt().memoizedState
}
function _s(e, t, n, r) {
  var o = mn()
  ;($e.flags |= e), (o.memoizedState = Ii(1 | t, n, void 0, r === void 0 ? null : r))
}
function Nl(e, t, n, r) {
  var o = Kt()
  r = r === void 0 ? null : r
  var i = void 0
  if (qe !== null) {
    var s = qe.memoizedState
    if (((i = s.destroy), r !== null && cd(r, s.deps))) {
      o.memoizedState = Ii(t, n, i, r)
      return
    }
  }
  ;($e.flags |= e), (o.memoizedState = Ii(1 | t, n, i, r))
}
function ip(e, t) {
  return _s(8390656, 8, e, t)
}
function pd(e, t) {
  return Nl(2048, 8, e, t)
}
function og(e, t) {
  return Nl(4, 2, e, t)
}
function ig(e, t) {
  return Nl(4, 4, e, t)
}
function sg(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function lg(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Nl(4, 4, sg.bind(null, t, e), n)
}
function hd() {}
function ag(e, t) {
  var n = Kt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && cd(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function ug(e, t) {
  var n = Kt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && cd(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function cg(e, t, n) {
  return Pr & 21
    ? (an(n, t) || ((n = mm()), ($e.lanes |= n), (_r |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (vt = !0)), (e.memoizedState = n))
}
function w1(e, t) {
  var n = de
  ;(de = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Ja.transition
  Ja.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(de = n), (Ja.transition = r)
  }
}
function dg() {
  return Kt().memoizedState
}
function C1(e, t, n) {
  var r = tr(e)
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), fg(e))) pg(t, n)
  else if (((n = Gm(e, t, n, r)), n !== null)) {
    var o = pt()
    ln(n, e, r, o), hg(n, t, r)
  }
}
function k1(e, t, n) {
  var r = tr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (fg(e)) pg(t, o)
  else {
    var i = e.alternate
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          l = i(s, n)
        if (((o.hasEagerState = !0), (o.eagerState = l), an(l, s))) {
          var a = t.interleaved
          a === null ? ((o.next = o), id(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Gm(e, t, o, r)), n !== null && ((o = pt()), ln(n, e, r, o), hg(n, t, r))
  }
}
function fg(e) {
  var t = e.alternate
  return e === $e || (t !== null && t === $e)
}
function pg(e, t) {
  ai = ll = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function hg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Hc(e, n)
  }
}
var al = {
    readContext: Ht,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1
  },
  b1 = {
    readContext: Ht,
    useCallback: function (e, t) {
      return (mn().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Ht,
    useEffect: ip,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), _s(4194308, 4, sg.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return _s(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return _s(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = mn()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = mn()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = C1.bind(null, $e, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = mn()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: op,
    useDebugValue: hd,
    useDeferredValue: function (e) {
      return (mn().memoizedState = e)
    },
    useTransition: function () {
      var e = op(!1),
        t = e[0]
      return (e = w1.bind(null, e[1])), (mn().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $e,
        o = mn()
      if (Oe) {
        if (n === void 0) throw Error(L(407))
        n = n()
      } else {
        if (((n = t()), Je === null)) throw Error(L(349))
        Pr & 30 || Jm(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        ip(eg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ii(9, Zm.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = mn(),
        t = Je.identifierPrefix
      if (Oe) {
        var n = An,
          r = In
        ;(n = (r & ~(1 << (32 - sn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = _i++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = x1++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  E1 = {
    readContext: Ht,
    useCallback: ag,
    useContext: Ht,
    useEffect: pd,
    useImperativeHandle: lg,
    useInsertionEffect: og,
    useLayoutEffect: ig,
    useMemo: ug,
    useReducer: Za,
    useRef: rg,
    useState: function () {
      return Za(Oi)
    },
    useDebugValue: hd,
    useDeferredValue: function (e) {
      var t = Kt()
      return cg(t, qe.memoizedState, e)
    },
    useTransition: function () {
      var e = Za(Oi)[0],
        t = Kt().memoizedState
      return [e, t]
    },
    useMutableSource: Ym,
    useSyncExternalStore: Xm,
    useId: dg,
    unstable_isNewReconciler: !1
  },
  R1 = {
    readContext: Ht,
    useCallback: ag,
    useContext: Ht,
    useEffect: pd,
    useImperativeHandle: lg,
    useInsertionEffect: og,
    useLayoutEffect: ig,
    useMemo: ug,
    useReducer: eu,
    useRef: rg,
    useState: function () {
      return eu(Oi)
    },
    useDebugValue: hd,
    useDeferredValue: function (e) {
      var t = Kt()
      return qe === null ? (t.memoizedState = e) : cg(t, qe.memoizedState, e)
    },
    useTransition: function () {
      var e = eu(Oi)[0],
        t = Kt().memoizedState
      return [e, t]
    },
    useMutableSource: Ym,
    useSyncExternalStore: Xm,
    useId: dg,
    unstable_isNewReconciler: !1
  }
function Jt(e, t) {
  if (e && e.defaultProps) {
    ;(t = Ne({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Yu(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nr(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = pt(),
      o = tr(e),
      i = $n(r, o)
    ;(i.payload = t), n != null && (i.callback = n), (t = Zn(e, i, o)), t !== null && (ln(t, e, o, r), Ts(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = pt(),
      o = tr(e),
      i = $n(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Zn(e, i, o)),
      t !== null && (ln(t, e, o, r), Ts(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = pt(),
      r = tr(e),
      o = $n(n, r)
    ;(o.tag = 2), t != null && (o.callback = t), (t = Zn(e, o, r)), t !== null && (ln(t, e, r, n), Ts(t, e, r))
  }
}
function sp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ki(n, r) || !ki(o, i)
        : !0
  )
}
function mg(e, t, n) {
  var r = !1,
    o = sr,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Ht(i))
      : ((o = xt(t) ? Rr : dt.current), (r = t.contextTypes), (i = (r = r != null) ? yo(e, o) : sr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ll),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function lp(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null)
}
function Xu(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = {}), sd(e)
  var i = t.contextType
  typeof i == 'object' && i !== null ? (o.context = Ht(i)) : ((i = xt(t) ? Rr : dt.current), (o.context = yo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Yu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && Ll.enqueueReplaceState(o, o.state, null),
      il(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function wo(e, t) {
  try {
    var n = '',
      r = t
    do (n += ev(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function tu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Ju(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var T1 = typeof WeakMap == 'function' ? WeakMap : Map
function gg(e, t, n) {
  ;(n = $n(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      cl || ((cl = !0), (ac = r)), Ju(e, t)
    }),
    n
  )
}
function yg(e, t, n) {
  ;(n = $n(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Ju(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ju(e, t), typeof r != 'function' && (er === null ? (er = new Set([this])) : er.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function ap(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new T1()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = F1.bind(null, e, t, n)), t.then(e, e))
}
function up(e) {
  do {
    var t
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
    e = e.return
  } while (e !== null)
  return null
}
function cp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = $n(-1, 1)), (t.tag = 2), Zn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var P1 = Dn.ReactCurrentOwner,
  vt = !1
function ft(e, t, n, r) {
  t.child = e === null ? Km(t, null, n, r) : So(t, e.child, n, r)
}
function dp(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    fo(t, o),
    (r = dd(e, t, n, r, i, o)),
    (n = fd()),
    e !== null && !vt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), zn(e, t, o))
      : (Oe && n && Zc(t), (t.flags |= 1), ft(e, t, r, o), t.child)
  )
}
function fp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !Cd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vg(e, t, i, r, o))
      : ((e = Ms(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : ki), n(s, r) && e.ref === t.ref)) return zn(e, t, o)
  }
  return (t.flags |= 1), (e = nr(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function vg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (ki(i, r) && e.ref === t.ref)
      if (((vt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (vt = !0)
      else return (t.lanes = e.lanes), zn(e, t, o)
  }
  return Zu(e, t, n, r, o)
}
function Sg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ke(so, Rt), (Rt |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ke(so, Rt),
          (Rt |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ke(so, Rt),
        (Rt |= r)
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ke(so, Rt), (Rt |= r)
  return ft(e, t, o, n), t.child
}
function xg(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
}
function Zu(e, t, n, r, o) {
  var i = xt(n) ? Rr : dt.current
  return (
    (i = yo(t, i)),
    fo(t, o),
    (n = dd(e, t, n, r, i, o)),
    (r = fd()),
    e !== null && !vt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), zn(e, t, o))
      : (Oe && r && Zc(t), (t.flags |= 1), ft(e, t, n, o), t.child)
  )
}
function pp(e, t, n, r, o) {
  if (xt(n)) {
    var i = !0
    el(t)
  } else i = !1
  if ((fo(t, o), t.stateNode === null)) Os(e, t), mg(t, n, r), Xu(t, n, r, o), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps
    s.props = l
    var a = s.context,
      u = n.contextType
    typeof u == 'object' && u !== null ? (u = Ht(u)) : ((u = xt(n) ? Rr : dt.current), (u = yo(t, u)))
    var d = n.getDerivedStateFromProps,
      f = typeof d == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && lp(t, s, r, u)),
      (Vn = !1)
    var p = t.memoizedState
    ;(s.state = p),
      il(t, r, s, o),
      (a = t.memoizedState),
      l !== r || p !== a || St.current || Vn
        ? (typeof d == 'function' && (Yu(t, n, d, r), (a = t.memoizedState)),
          (l = Vn || sp(t, n, l, r, p, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
  } else {
    ;(s = t.stateNode),
      qm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Jt(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (p = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null ? (a = Ht(a)) : ((a = xt(n) ? Rr : dt.current), (a = yo(t, a)))
    var x = n.getDerivedStateFromProps
    ;(d = typeof x == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
      ((l !== f || p !== a) && lp(t, s, r, a)),
      (Vn = !1),
      (p = t.memoizedState),
      (s.state = p),
      il(t, r, s, o)
    var v = t.memoizedState
    l !== f || p !== v || St.current || Vn
      ? (typeof x == 'function' && (Yu(t, n, x, r), (v = t.memoizedState)),
        (u = Vn || sp(t, n, u, r, p, v, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ec(e, t, n, r, i, o)
}
function ec(e, t, n, r, o, i) {
  xg(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return o && Jf(t, n, !1), zn(e, t, i)
  ;(r = t.stateNode), (P1.current = t)
  var l = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = So(t, e.child, null, i)), (t.child = So(t, null, l, i))) : ft(e, t, l, i),
    (t.memoizedState = r.state),
    o && Jf(t, n, !0),
    t.child
  )
}
function wg(e) {
  var t = e.stateNode
  t.pendingContext ? Xf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xf(e, t.context, !1),
    ld(e, t.containerInfo)
}
function hp(e, t, n, r, o) {
  return vo(), td(o), (t.flags |= 256), ft(e, t, n, r), t.child
}
var tc = { dehydrated: null, treeContext: null, retryLane: 0 }
function nc(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Cg(e, t, n) {
  var r = t.pendingProps,
    o = Me.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l
  if (
    ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    ke(Me, o & 1),
    e === null)
  )
    return (
      qu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = jl(s, r, 0, null)),
              (e = br(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = nc(n)),
              (t.memoizedState = tc),
              e)
            : md(t, s))
    )
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return _1(e, t, s, r, l, o, n)
  if (i) {
    ;(i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = nr(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = nr(l, i)) : ((i = br(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? nc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = tc),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = nr(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function md(e, t) {
  return (t = jl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function as(e, t, n, r) {
  return (
    r !== null && td(r),
    So(t, e.child, null, n),
    (e = md(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function _1(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = tu(Error(L(422)))), as(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = jl({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = br(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && So(t, e.child, null, s),
          (t.child.memoizedState = nc(s)),
          (t.memoizedState = tc),
          i)
  if (!(t.mode & 1)) return as(e, t, s, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (i = Error(L(419))), (r = tu(i, r, void 0)), as(e, t, s, r)
  }
  if (((l = (s & e.childLanes) !== 0), vt || l)) {
    if (((r = Je), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Bn(e, o), ln(r, e, o, -1))
    }
    return wd(), (r = tu(Error(L(421)))), as(e, t, s, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = W1.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (_t = Jn(o.nextSibling)),
      (Ot = t),
      (Oe = !0),
      (tn = null),
      e !== null && ((jt[Dt++] = In), (jt[Dt++] = An), (jt[Dt++] = Tr), (In = e.id), (An = e.overflow), (Tr = t)),
      (t = md(t, r.children)),
      (t.flags |= 4096),
      t)
}
function mp(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Qu(e.return, t, n)
}
function nu(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function kg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((ft(e, t, r.children, n), (r = Me.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mp(e, n, t)
        else if (e.tag === 19) mp(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((ke(Me, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && sl(e) === null && (o = n), (n = n.sibling)
        ;(n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          nu(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && sl(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        nu(t, !0, n, null, i)
        break
      case 'together':
        nu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Os(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function zn(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (_r |= t.lanes), !(n & t.childLanes))) return null
  if (e !== null && t.child !== e.child) throw Error(L(153))
  if (t.child !== null) {
    for (e = t.child, n = nr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = nr(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function O1(e, t, n) {
  switch (t.tag) {
    case 3:
      wg(t), vo()
      break
    case 5:
      Qm(t)
      break
    case 1:
      xt(t.type) && el(t)
      break
    case 4:
      ld(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      ke(rl, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ke(Me, Me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Cg(e, t, n)
            : (ke(Me, Me.current & 1), (e = zn(e, t, n)), e !== null ? e.sibling : null)
      ke(Me, Me.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kg(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ke(Me, Me.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Sg(e, t, n)
  }
  return zn(e, t, n)
}
var bg, rc, Eg, Rg
bg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
rc = function () {}
Eg = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), wr(Cn.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = Eu(e, o)), (r = Eu(e, r)), (i = [])
        break
      case 'select':
        ;(o = Ne({}, o, { value: void 0 })), (r = Ne({}, r, { value: void 0 })), (i = [])
        break
      case 'textarea':
        ;(o = Pu(e, o)), (r = Pu(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Js)
    }
    Ou(n, r)
    var s
    n = null
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u]
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (gi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (((l = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
        if (u === 'style')
          if (l) {
            for (s in l) !l.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''))
            for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]))
          } else n || (i || (i = []), i.push(u, n)), (n = a)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') || (i = i || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (gi.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && Ee('scroll', e), i || l === a || (i = []))
                  : (i = i || []).push(u, a))
    }
    n && (i = i || []).push('style', n)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Rg = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Fo(e, t) {
  if (!Oe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
    }
}
function at(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function I1(e, t, n) {
  var r = t.pendingProps
  switch ((ed(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return at(t), null
    case 1:
      return xt(t.type) && Zs(), at(t), null
    case 3:
      return (
        (r = t.stateNode),
        xo(),
        Re(St),
        Re(dt),
        ud(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ss(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tn !== null && (dc(tn), (tn = null)))),
        rc(e, t),
        at(t),
        null
      )
    case 5:
      ad(t)
      var o = wr(Pi.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Eg(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166))
          return at(t), null
        }
        if (((e = wr(Cn.current)), ss(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[vn] = t), (r[Ri] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ee('cancel', r), Ee('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Ee('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Jo.length; o++) Ee(Jo[o], r)
              break
            case 'source':
              Ee('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              Ee('error', r), Ee('load', r)
              break
            case 'details':
              Ee('toggle', r)
              break
            case 'input':
              bf(r, i), Ee('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }), Ee('invalid', r)
              break
            case 'textarea':
              Rf(r, i), Ee('invalid', r)
          }
          Ou(n, i), (o = null)
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s]
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 && is(r.textContent, l, e), (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 && is(r.textContent, l, e), (o = ['children', '' + l]))
                : gi.hasOwnProperty(s) && l != null && s === 'onScroll' && Ee('scroll', r)
            }
          switch (n) {
            case 'input':
              Xi(r), Ef(r, i, !0)
              break
            case 'textarea':
              Xi(r), Tf(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Js)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = em(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[vn] = t),
            (e[Ri] = r),
            bg(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = Iu(n, r)), n)) {
              case 'dialog':
                Ee('cancel', e), Ee('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Ee('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Jo.length; o++) Ee(Jo[o], e)
                o = r
                break
              case 'source':
                Ee('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                Ee('error', e), Ee('load', e), (o = r)
                break
              case 'details':
                Ee('toggle', e), (o = r)
                break
              case 'input':
                bf(e, r), (o = Eu(e, r)), Ee('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }), (o = Ne({}, r, { value: void 0 })), Ee('invalid', e)
                break
              case 'textarea':
                Rf(e, r), (o = Pu(e, r)), Ee('invalid', e)
                break
              default:
                o = r
            }
            Ou(n, o), (l = o)
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i]
                i === 'style'
                  ? rm(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && tm(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && yi(e, a)
                        : typeof a == 'number' && yi(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (gi.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && Ee('scroll', e)
                          : a != null && jc(e, i, a, s))
              }
            switch (n) {
              case 'input':
                Xi(e), Ef(e, r, !1)
                break
              case 'textarea':
                Xi(e), Tf(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + ir(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? lo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && lo(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Js)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return at(t), null
    case 6:
      if (e && t.stateNode != null) Rg(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(L(166))
        if (((n = wr(Pi.current)), wr(Cn.current), ss(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[vn] = t), (i = r.nodeValue !== n) && ((e = Ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                is(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && is(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[vn] = t), (t.stateNode = r)
      }
      return at(t), null
    case 13:
      if (
        (Re(Me), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Oe && _t !== null && t.mode & 1 && !(t.flags & 128)) Vm(), vo(), (t.flags |= 98560), (i = !1)
        else if (((i = ss(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(L(317))
            i[vn] = t
          } else vo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          at(t), (i = !1)
        } else tn !== null && (dc(tn), (tn = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || Me.current & 1 ? Qe === 0 && (Qe = 3) : wd())),
          t.updateQueue !== null && (t.flags |= 4),
          at(t),
          null)
    case 4:
      return xo(), rc(e, t), e === null && bi(t.stateNode.containerInfo), at(t), null
    case 10:
      return od(t.type._context), at(t), null
    case 17:
      return xt(t.type) && Zs(), at(t), null
    case 19:
      if ((Re(Me), (i = t.memoizedState), i === null)) return at(t), null
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Fo(i, !1)
        else {
          if (Qe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = sl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Fo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling)
                return ke(Me, (Me.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null && Fe() > Co && ((t.flags |= 128), (r = !0), Fo(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = sl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fo(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !Oe)
            )
              return at(t), null
          } else
            2 * Fe() - i.renderingStartTime > Co &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fo(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Fe()),
          (t.sibling = null),
          (n = Me.current),
          ke(Me, r ? (n & 1) | 2 : n & 1),
          t)
        : (at(t), null)
    case 22:
    case 23:
      return (
        xd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Rt & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(L(156, t.tag))
}
function A1(e, t) {
  switch ((ed(t), t.tag)) {
    case 1:
      return xt(t.type) && Zs(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 3:
      return (
        xo(), Re(St), Re(dt), ud(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return ad(t), null
    case 13:
      if ((Re(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340))
        vo()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return Re(Me), null
    case 4:
      return xo(), null
    case 10:
      return od(t.type._context), null
    case 22:
    case 23:
      return xd(), null
    case 24:
      return null
    default:
      return null
  }
}
var us = !1,
  ct = !1,
  M1 = typeof WeakSet == 'function' ? WeakSet : Set,
  F = null
function io(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        je(e, t, r)
      }
    else n.current = null
}
function oc(e, t, n) {
  try {
    n()
  } catch (r) {
    je(e, t, r)
  }
}
var gp = !1
function $1(e, t) {
  if (((Fu = Qs), (e = Im()), Jc(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            f = e,
            p = null
          t: for (;;) {
            for (
              var x;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (p = f), (f = x)
            for (;;) {
              if (f === e) break t
              if ((p === n && ++u === o && (l = s), p === i && ++d === r && (a = s), (x = f.nextSibling) !== null))
                break
              ;(f = p), (p = f.parentNode)
            }
            f = x
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Wu = { focusedElem: e, selectionRange: n }, Qs = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (F = e)
    else
      for (; F !== null; ) {
        t = F
        try {
          var v = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    R = v.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Jt(t.type, w), R)
                  m.__reactInternalSnapshotBeforeUpdate = g
                }
                break
              case 3:
                var c = t.stateNode.containerInfo
                c.nodeType === 1
                  ? (c.textContent = '')
                  : c.nodeType === 9 && c.documentElement && c.removeChild(c.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(L(163))
            }
        } catch (y) {
          je(t, t.return, y)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (F = e)
          break
        }
        F = t.return
      }
  return (v = gp), (gp = !1), v
}
function ui(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && oc(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function Bl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function ic(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Tg(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Tg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[vn], delete t[Ri], delete t[Hu], delete t[g1], delete t[y1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Pg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function yp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pg(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function sc(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Js))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sc(e, t, n), e = e.sibling; e !== null; ) sc(e, t, n), (e = e.sibling)
}
function lc(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lc(e, t, n), e = e.sibling; e !== null; ) lc(e, t, n), (e = e.sibling)
}
var rt = null,
  Zt = !1
function Wn(e, t, n) {
  for (n = n.child; n !== null; ) _g(e, t, n), (n = n.sibling)
}
function _g(e, t, n) {
  if (wn && typeof wn.onCommitFiberUnmount == 'function')
    try {
      wn.onCommitFiberUnmount(_l, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ct || io(n, t)
    case 6:
      var r = rt,
        o = Zt
      ;(rt = null),
        Wn(e, t, n),
        (rt = r),
        (Zt = o),
        rt !== null &&
          (Zt
            ? ((e = rt), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : rt.removeChild(n.stateNode))
      break
    case 18:
      rt !== null &&
        (Zt
          ? ((e = rt), (n = n.stateNode), e.nodeType === 8 ? Qa(e.parentNode, n) : e.nodeType === 1 && Qa(e, n), wi(e))
          : Qa(rt, n.stateNode))
      break
    case 4:
      ;(r = rt), (o = Zt), (rt = n.stateNode.containerInfo), (Zt = !0), Wn(e, t, n), (rt = r), (Zt = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ct && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next
        do {
          var i = o,
            s = i.destroy
          ;(i = i.tag), s !== void 0 && (i & 2 || i & 4) && oc(n, t, s), (o = o.next)
        } while (o !== r)
      }
      Wn(e, t, n)
      break
    case 1:
      if (!ct && (io(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          ;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
        } catch (l) {
          je(n, t, l)
        }
      Wn(e, t, n)
      break
    case 21:
      Wn(e, t, n)
      break
    case 22:
      n.mode & 1 ? ((ct = (r = ct) || n.memoizedState !== null), Wn(e, t, n), (ct = r)) : Wn(e, t, n)
      break
    default:
      Wn(e, t, n)
  }
}
function vp(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new M1()),
      t.forEach(function (r) {
        var o = U1.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function Xt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          s = t,
          l = s
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(rt = l.stateNode), (Zt = !1)
              break e
            case 3:
              ;(rt = l.stateNode.containerInfo), (Zt = !0)
              break e
            case 4:
              ;(rt = l.stateNode.containerInfo), (Zt = !0)
              break e
          }
          l = l.return
        }
        if (rt === null) throw Error(L(160))
        _g(i, s, o), (rt = null), (Zt = !1)
        var a = o.alternate
        a !== null && (a.return = null), (o.return = null)
      } catch (u) {
        je(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Og(t, e), (t = t.sibling)
}
function Og(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xt(t, e), fn(e), r & 4)) {
        try {
          ui(3, e, e.return), Bl(3, e)
        } catch (w) {
          je(e, e.return, w)
        }
        try {
          ui(5, e, e.return)
        } catch (w) {
          je(e, e.return, w)
        }
      }
      break
    case 1:
      Xt(t, e), fn(e), r & 512 && n !== null && io(n, n.return)
      break
    case 5:
      if ((Xt(t, e), fn(e), r & 512 && n !== null && io(n, n.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          yi(o, '')
        } catch (w) {
          je(e, e.return, w)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && Jh(o, i), Iu(l, s)
            var u = Iu(l, i)
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                f = a[s + 1]
              d === 'style'
                ? rm(o, f)
                : d === 'dangerouslySetInnerHTML'
                  ? tm(o, f)
                  : d === 'children'
                    ? yi(o, f)
                    : jc(o, d, f, u)
            }
            switch (l) {
              case 'input':
                Ru(o, i)
                break
              case 'textarea':
                Zh(o, i)
                break
              case 'select':
                var p = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var x = i.value
                x != null
                  ? lo(o, !!i.multiple, x, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? lo(o, !!i.multiple, i.defaultValue, !0)
                      : lo(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Ri] = i
          } catch (w) {
            je(e, e.return, w)
          }
      }
      break
    case 6:
      if ((Xt(t, e), fn(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (w) {
          je(e, e.return, w)
        }
      }
      break
    case 3:
      if ((Xt(t, e), fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          wi(t.containerInfo)
        } catch (w) {
          je(e, e.return, w)
        }
      break
    case 4:
      Xt(t, e), fn(e)
      break
    case 13:
      Xt(t, e),
        fn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (vd = Fe())),
        r & 4 && vp(e)
      break
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ct = (u = ct) || d), Xt(t, e), (ct = u)) : Xt(t, e),
        fn(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
          for (F = e, d = e.child; d !== null; ) {
            for (f = F = d; F !== null; ) {
              switch (((p = F), (x = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ui(4, p, p.return)
                  break
                case 1:
                  io(p, p.return)
                  var v = p.stateNode
                  if (typeof v.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r), (v.props = t.memoizedProps), (v.state = t.memoizedState), v.componentWillUnmount()
                    } catch (w) {
                      je(r, n, w)
                    }
                  }
                  break
                case 5:
                  io(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    xp(f)
                    continue
                  }
              }
              x !== null ? ((x.return = p), (F = x)) : xp(f)
            }
            d = d.sibling
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f
              try {
                ;(o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s = a != null && a.hasOwnProperty('display') ? a.display : null),
                      (l.style.display = nm('display', s)))
              } catch (w) {
                je(e, e.return, w)
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (w) {
                je(e, e.return, w)
              }
          } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            d === f && (d = null), (f = f.return)
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      Xt(t, e), fn(e), r & 4 && vp(e)
      break
    case 21:
      break
    default:
      Xt(t, e), fn(e)
  }
}
function fn(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pg(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(L(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (yi(o, ''), (r.flags &= -33))
          var i = yp(e)
          lc(e, i, o)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = yp(e)
          sc(e, l, s)
          break
        default:
          throw Error(L(161))
      }
    } catch (a) {
      je(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function N1(e, t, n) {
  ;(F = e), Ig(e)
}
function Ig(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || us
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || ct
        l = us
        var u = ct
        if (((us = s), (ct = a) && !u))
          for (F = o; F !== null; )
            (s = F),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null ? wp(o) : a !== null ? ((a.return = s), (F = a)) : wp(o)
        for (; i !== null; ) (F = i), Ig(i), (i = i.sibling)
        ;(F = o), (us = l), (ct = u)
      }
      Sp(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : Sp(e)
  }
}
function Sp(e) {
  for (; F !== null; ) {
    var t = F
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ct || Bl(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ct)
                if (n === null) r.componentDidMount()
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Jt(t.type, n.memoizedProps)
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue
              i !== null && rp(t, i, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                rp(t, s, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var d = u.memoizedState
                  if (d !== null) {
                    var f = d.dehydrated
                    f !== null && wi(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(L(163))
          }
        ct || (t.flags & 512 && ic(t))
      } catch (p) {
        je(t, t.return, p)
      }
    }
    if (t === e) {
      F = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (F = n)
      break
    }
    F = t.return
  }
}
function xp(e) {
  for (; F !== null; ) {
    var t = F
    if (t === e) {
      F = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (F = n)
      break
    }
    F = t.return
  }
}
function wp(e) {
  for (; F !== null; ) {
    var t = F
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Bl(4, t)
          } catch (a) {
            je(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              je(t, o, a)
            }
          }
          var i = t.return
          try {
            ic(t)
          } catch (a) {
            je(t, i, a)
          }
          break
        case 5:
          var s = t.return
          try {
            ic(t)
          } catch (a) {
            je(t, s, a)
          }
      }
    } catch (a) {
      je(t, t.return, a)
    }
    if (t === e) {
      F = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (F = l)
      break
    }
    F = t.return
  }
}
var L1 = Math.ceil,
  ul = Dn.ReactCurrentDispatcher,
  gd = Dn.ReactCurrentOwner,
  Vt = Dn.ReactCurrentBatchConfig,
  ie = 0,
  Je = null,
  He = null,
  it = 0,
  Rt = 0,
  so = dr(0),
  Qe = 0,
  Ai = null,
  _r = 0,
  zl = 0,
  yd = 0,
  ci = null,
  yt = null,
  vd = 0,
  Co = 1 / 0,
  _n = null,
  cl = !1,
  ac = null,
  er = null,
  cs = !1,
  qn = null,
  dl = 0,
  di = 0,
  uc = null,
  Is = -1,
  As = 0
function pt() {
  return ie & 6 ? Fe() : Is !== -1 ? Is : (Is = Fe())
}
function tr(e) {
  return e.mode & 1
    ? ie & 2 && it !== 0
      ? it & -it
      : S1.transition !== null
        ? (As === 0 && (As = mm()), As)
        : ((e = de), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cm(e.type))), e)
    : 1
}
function ln(e, t, n, r) {
  if (50 < di) throw ((di = 0), (uc = null), Error(L(185)))
  Fi(e, n, r),
    (!(ie & 2) || e !== Je) &&
      (e === Je && (!(ie & 2) && (zl |= n), Qe === 4 && Kn(e, it)),
      wt(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((Co = Fe() + 500), $l && fr()))
}
function wt(e, t) {
  var n = e.callbackNode
  Sv(e, t)
  var r = qs(e, e === Je ? it : 0)
  if (r === 0) n !== null && Of(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Of(n), t === 1))
      e.tag === 0 ? v1(Cp.bind(null, e)) : Fm(Cp.bind(null, e)),
        h1(function () {
          !(ie & 6) && fr()
        }),
        (n = null)
    else {
      switch (gm(r)) {
        case 1:
          n = Vc
          break
        case 4:
          n = pm
          break
        case 16:
          n = Gs
          break
        case 536870912:
          n = hm
          break
        default:
          n = Gs
      }
      n = jg(n, Ag.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Ag(e, t) {
  if (((Is = -1), (As = 0), ie & 6)) throw Error(L(327))
  var n = e.callbackNode
  if (po() && e.callbackNode !== n) return null
  var r = qs(e, e === Je ? it : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r)
  else {
    t = r
    var o = ie
    ie |= 2
    var i = $g()
    ;(Je !== e || it !== t) && ((_n = null), (Co = Fe() + 500), kr(e, t))
    do
      try {
        j1()
        break
      } catch (l) {
        Mg(e, l)
      }
    while (!0)
    rd(), (ul.current = i), (ie = o), He !== null ? (t = 0) : ((Je = null), (it = 0), (t = Qe))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Lu(e)), o !== 0 && ((r = o), (t = cc(e, o)))), t === 1))
      throw ((n = Ai), kr(e, 0), Kn(e, r), wt(e, Fe()), n)
    if (t === 6) Kn(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !B1(o) &&
          ((t = fl(e, r)), t === 2 && ((i = Lu(e)), i !== 0 && ((r = i), (t = cc(e, i)))), t === 1))
      )
        throw ((n = Ai), kr(e, 0), Kn(e, r), wt(e, Fe()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345))
        case 2:
          gr(e, yt, _n)
          break
        case 3:
          if ((Kn(e, r), (r & 130023424) === r && ((t = vd + 500 - Fe()), 10 < t))) {
            if (qs(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              pt(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Vu(gr.bind(null, e, yt, _n), t)
            break
          }
          gr(e, yt, _n)
          break
        case 4:
          if ((Kn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - sn(r)
            ;(i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i)
          }
          if (
            ((r = o),
            (r = Fe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * L1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vu(gr.bind(null, e, yt, _n), r)
            break
          }
          gr(e, yt, _n)
          break
        case 5:
          gr(e, yt, _n)
          break
        default:
          throw Error(L(329))
      }
    }
  }
  return wt(e, Fe()), e.callbackNode === n ? Ag.bind(null, e) : null
}
function cc(e, t) {
  var n = ci
  return (
    e.current.memoizedState.isDehydrated && (kr(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = yt), (yt = n), t !== null && dc(t)),
    e
  )
}
function dc(e) {
  yt === null ? (yt = e) : yt.push.apply(yt, e)
}
function B1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!an(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Kn(e, t) {
  for (t &= ~yd, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - sn(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Cp(e) {
  if (ie & 6) throw Error(L(327))
  po()
  var t = qs(e, 0)
  if (!(t & 1)) return wt(e, Fe()), null
  var n = fl(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Lu(e)
    r !== 0 && ((t = r), (n = cc(e, r)))
  }
  if (n === 1) throw ((n = Ai), kr(e, 0), Kn(e, t), wt(e, Fe()), n)
  if (n === 6) throw Error(L(345))
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), gr(e, yt, _n), wt(e, Fe()), null
}
function Sd(e, t) {
  var n = ie
  ie |= 1
  try {
    return e(t)
  } finally {
    ;(ie = n), ie === 0 && ((Co = Fe() + 500), $l && fr())
  }
}
function Or(e) {
  qn !== null && qn.tag === 0 && !(ie & 6) && po()
  var t = ie
  ie |= 1
  var n = Vt.transition,
    r = de
  try {
    if (((Vt.transition = null), (de = 1), e)) return e()
  } finally {
    ;(de = r), (Vt.transition = n), (ie = t), !(ie & 6) && fr()
  }
}
function xd() {
  ;(Rt = so.current), Re(so)
}
function kr(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), p1(n)), He !== null))
    for (n = He.return; n !== null; ) {
      var r = n
      switch ((ed(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Zs()
          break
        case 3:
          xo(), Re(St), Re(dt), ud()
          break
        case 5:
          ad(r)
          break
        case 4:
          xo()
          break
        case 13:
          Re(Me)
          break
        case 19:
          Re(Me)
          break
        case 10:
          od(r.type._context)
          break
        case 22:
        case 23:
          xd()
      }
      n = n.return
    }
  if (
    ((Je = e),
    (He = e = nr(e.current, null)),
    (it = Rt = t),
    (Qe = 0),
    (Ai = null),
    (yd = zl = _r = 0),
    (yt = ci = null),
    xr !== null)
  ) {
    for (t = 0; t < xr.length; t++)
      if (((n = xr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var s = i.next
          ;(i.next = o), (r.next = s)
        }
        n.pending = r
      }
    xr = null
  }
  return e
}
function Mg(e, t) {
  do {
    var n = He
    try {
      if ((rd(), (Ps.current = al), ll)) {
        for (var r = $e.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        ll = !1
      }
      if (
        ((Pr = 0), (Xe = qe = $e = null), (ai = !1), (_i = 0), (gd.current = null), n === null || n.return === null)
      ) {
        ;(Qe = 1), (Ai = t), (He = null)
        break
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t
        if (((t = it), (l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
          var u = a,
            d = l,
            f = d.tag
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate
            p
              ? ((d.updateQueue = p.updateQueue), (d.memoizedState = p.memoizedState), (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var x = up(s)
          if (x !== null) {
            ;(x.flags &= -257), cp(x, s, l, i, t), x.mode & 1 && ap(i, u, t), (t = x), (a = u)
            var v = t.updateQueue
            if (v === null) {
              var w = new Set()
              w.add(a), (t.updateQueue = w)
            } else v.add(a)
            break e
          } else {
            if (!(t & 1)) {
              ap(i, u, t), wd()
              break e
            }
            a = Error(L(426))
          }
        } else if (Oe && l.mode & 1) {
          var R = up(s)
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), cp(R, s, l, i, t), td(wo(a, l))
            break e
          }
        }
        ;(i = a = wo(a, l)), Qe !== 4 && (Qe = 2), ci === null ? (ci = [i]) : ci.push(i), (i = s)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var m = gg(i, a, t)
              np(i, m)
              break e
            case 1:
              l = a
              var g = i.type,
                c = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (c !== null && typeof c.componentDidCatch == 'function' && (er === null || !er.has(c))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var y = yg(i, l, t)
                np(i, y)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Lg(n)
    } catch (C) {
      ;(t = C), He === n && n !== null && (He = n = n.return)
      continue
    }
    break
  } while (!0)
}
function $g() {
  var e = ul.current
  return (ul.current = al), e === null ? al : e
}
function wd() {
  ;(Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4), Je === null || (!(_r & 268435455) && !(zl & 268435455)) || Kn(Je, it)
}
function fl(e, t) {
  var n = ie
  ie |= 2
  var r = $g()
  ;(Je !== e || it !== t) && ((_n = null), kr(e, t))
  do
    try {
      z1()
      break
    } catch (o) {
      Mg(e, o)
    }
  while (!0)
  if ((rd(), (ie = n), (ul.current = r), He !== null)) throw Error(L(261))
  return (Je = null), (it = 0), Qe
}
function z1() {
  for (; He !== null; ) Ng(He)
}
function j1() {
  for (; He !== null && !cv(); ) Ng(He)
}
function Ng(e) {
  var t = zg(e.alternate, e, Rt)
  ;(e.memoizedProps = e.pendingProps), t === null ? Lg(e) : (He = t), (gd.current = null)
}
function Lg(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = A1(n, t)), n !== null)) {
        ;(n.flags &= 32767), (He = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Qe = 6), (He = null)
        return
      }
    } else if (((n = I1(n, t, Rt)), n !== null)) {
      He = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      He = t
      return
    }
    He = t = e
  } while (t !== null)
  Qe === 0 && (Qe = 5)
}
function gr(e, t, n) {
  var r = de,
    o = Vt.transition
  try {
    ;(Vt.transition = null), (de = 1), D1(e, t, n, r)
  } finally {
    ;(Vt.transition = o), (de = r)
  }
  return null
}
function D1(e, t, n, r) {
  do po()
  while (qn !== null)
  if (ie & 6) throw Error(L(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(L(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (xv(e, i),
    e === Je && ((He = Je = null), (it = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      cs ||
      ((cs = !0),
      jg(Gs, function () {
        return po(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Vt.transition), (Vt.transition = null)
    var s = de
    de = 1
    var l = ie
    ;(ie |= 4),
      (gd.current = null),
      $1(e, n),
      Og(n, e),
      s1(Wu),
      (Qs = !!Fu),
      (Wu = Fu = null),
      (e.current = n),
      N1(n),
      dv(),
      (ie = l),
      (de = s),
      (Vt.transition = i)
  } else e.current = n
  if (
    (cs && ((cs = !1), (qn = e), (dl = o)),
    (i = e.pendingLanes),
    i === 0 && (er = null),
    hv(n.stateNode),
    wt(e, Fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (cl) throw ((cl = !1), (e = ac), (ac = null), e)
  return (
    dl & 1 && e.tag !== 0 && po(),
    (i = e.pendingLanes),
    i & 1 ? (e === uc ? di++ : ((di = 0), (uc = e))) : (di = 0),
    fr(),
    null
  )
}
function po() {
  if (qn !== null) {
    var e = gm(dl),
      t = Vt.transition,
      n = de
    try {
      if (((Vt.transition = null), (de = 16 > e ? 16 : e), qn === null)) var r = !1
      else {
        if (((e = qn), (qn = null), (dl = 0), ie & 6)) throw Error(L(331))
        var o = ie
        for (ie |= 4, F = e.current; F !== null; ) {
          var i = F,
            s = i.child
          if (F.flags & 16) {
            var l = i.deletions
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a]
                for (F = u; F !== null; ) {
                  var d = F
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ui(8, d, i)
                  }
                  var f = d.child
                  if (f !== null) (f.return = d), (F = f)
                  else
                    for (; F !== null; ) {
                      d = F
                      var p = d.sibling,
                        x = d.return
                      if ((Tg(d), d === u)) {
                        F = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = x), (F = p)
                        break
                      }
                      F = x
                    }
                }
              }
              var v = i.alternate
              if (v !== null) {
                var w = v.child
                if (w !== null) {
                  v.child = null
                  do {
                    var R = w.sibling
                    ;(w.sibling = null), (w = R)
                  } while (w !== null)
                }
              }
              F = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (F = s)
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ui(9, i, i.return)
                }
              var m = i.sibling
              if (m !== null) {
                ;(m.return = i.return), (F = m)
                break e
              }
              F = i.return
            }
        }
        var g = e.current
        for (F = g; F !== null; ) {
          s = F
          var c = s.child
          if (s.subtreeFlags & 2064 && c !== null) (c.return = s), (F = c)
          else
            e: for (s = g; F !== null; ) {
              if (((l = F), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bl(9, l)
                  }
                } catch (C) {
                  je(l, l.return, C)
                }
              if (l === s) {
                F = null
                break e
              }
              var y = l.sibling
              if (y !== null) {
                ;(y.return = l.return), (F = y)
                break e
              }
              F = l.return
            }
        }
        if (((ie = o), fr(), wn && typeof wn.onPostCommitFiberRoot == 'function'))
          try {
            wn.onPostCommitFiberRoot(_l, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(de = n), (Vt.transition = t)
    }
  }
  return !1
}
function kp(e, t, n) {
  ;(t = wo(n, t)), (t = gg(e, t, 1)), (e = Zn(e, t, 1)), (t = pt()), e !== null && (Fi(e, 1, t), wt(e, t))
}
function je(e, t, n) {
  if (e.tag === 3) kp(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kp(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (er === null || !er.has(r)))
        ) {
          ;(e = wo(n, e)), (e = yg(t, e, 1)), (t = Zn(t, e, 1)), (e = pt()), t !== null && (Fi(t, 1, e), wt(t, e))
          break
        }
      }
      t = t.return
    }
}
function F1(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Je === e &&
      (it & n) === n &&
      (Qe === 4 || (Qe === 3 && (it & 130023424) === it && 500 > Fe() - vd) ? kr(e, 0) : (yd |= n)),
    wt(e, t)
}
function Bg(e, t) {
  t === 0 && (e.mode & 1 ? ((t = es), (es <<= 1), !(es & 130023424) && (es = 4194304)) : (t = 1))
  var n = pt()
  ;(e = Bn(e, t)), e !== null && (Fi(e, t, n), wt(e, n))
}
function W1(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Bg(e, n)
}
function U1(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(L(314))
  }
  r !== null && r.delete(t), Bg(e, n)
}
var zg
zg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || St.current) vt = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (vt = !1), O1(e, t, n)
      vt = !!(e.flags & 131072)
    }
  else (vt = !1), Oe && t.flags & 1048576 && Wm(t, nl, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Os(e, t), (e = t.pendingProps)
      var o = yo(t, dt.current)
      fo(t, n), (o = dd(null, t, r, e, o, n))
      var i = fd()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(r) ? ((i = !0), el(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            sd(t),
            (o.updater = Ll),
            (t.stateNode = o),
            (o._reactInternals = t),
            Xu(t, r, e, n),
            (t = ec(null, t, r, !0, i, n)))
          : ((t.tag = 0), Oe && i && Zc(t), ft(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Os(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = H1(r)),
          (e = Jt(r, e)),
          o)
        ) {
          case 0:
            t = Zu(null, t, r, e, n)
            break e
          case 1:
            t = pp(null, t, r, e, n)
            break e
          case 11:
            t = dp(null, t, r, e, n)
            break e
          case 14:
            t = fp(null, t, r, Jt(r.type, e), n)
            break e
        }
        throw Error(L(306, r, ''))
      }
      return t
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Jt(r, o)), Zu(e, t, r, o, n)
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Jt(r, o)), pp(e, t, r, o, n)
    case 3:
      e: {
        if ((wg(t), e === null)) throw Error(L(387))
        ;(r = t.pendingProps), (i = t.memoizedState), (o = i.element), qm(e, t), il(t, r, null, n)
        var s = t.memoizedState
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = wo(Error(L(423)), t)), (t = hp(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = wo(Error(L(424)), t)), (t = hp(e, t, r, n, o))
            break e
          } else
            for (
              _t = Jn(t.stateNode.containerInfo.firstChild),
                Ot = t,
                Oe = !0,
                tn = null,
                n = Km(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((vo(), r === o)) {
            t = zn(e, t, n)
            break e
          }
          ft(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Qm(t),
        e === null && qu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Uu(r, o) ? (s = null) : i !== null && Uu(r, i) && (t.flags |= 32),
        xg(e, t),
        ft(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && qu(t), null
    case 13:
      return Cg(e, t, n)
    case 4:
      return (
        ld(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = So(t, null, r, n)) : ft(e, t, r, n),
        t.child
      )
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Jt(r, o)), dp(e, t, r, o, n)
    case 7:
      return ft(e, t, t.pendingProps, n), t.child
    case 8:
      return ft(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ft(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ke(rl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (an(i.value, s)) {
            if (i.children === o.children && !St.current) {
              t = zn(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies
              if (l !== null) {
                s = i.child
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ;(a = $n(-1, n & -n)), (a.tag = 2)
                      var u = i.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var d = u.pending
                        d === null ? (a.next = a) : ((a.next = d.next), (d.next = a)), (u.pending = a)
                      }
                    }
                    ;(i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), Qu(i.return, n, t), (l.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(L(341))
                ;(s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), Qu(s, n, t), (s = i.sibling)
              } else s = i.child
              if (s !== null) s.return = i
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((i = s.sibling), i !== null)) {
                    ;(i.return = s.return), (s = i)
                    break
                  }
                  s = s.return
                }
              i = s
            }
        ft(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        fo(t, n),
        (o = Ht(o)),
        (r = r(o)),
        (t.flags |= 1),
        ft(e, t, r, n),
        t.child
      )
    case 14:
      return (r = t.type), (o = Jt(r, t.pendingProps)), (o = Jt(r.type, o)), fp(e, t, r, o, n)
    case 15:
      return vg(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Jt(r, o)),
        Os(e, t),
        (t.tag = 1),
        xt(r) ? ((e = !0), el(t)) : (e = !1),
        fo(t, n),
        mg(t, r, o),
        Xu(t, r, o, n),
        ec(null, t, r, !0, e, n)
      )
    case 19:
      return kg(e, t, n)
    case 22:
      return Sg(e, t, n)
  }
  throw Error(L(156, t.tag))
}
function jg(e, t) {
  return fm(e, t)
}
function V1(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Ut(e, t, n, r) {
  return new V1(e, t, n, r)
}
function Cd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function H1(e) {
  if (typeof e == 'function') return Cd(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Fc)) return 11
    if (e === Wc) return 14
  }
  return 2
}
function nr(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Ms(e, t, n, r, o, i) {
  var s = 2
  if (((r = e), typeof e == 'function')) Cd(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case Yr:
        return br(n.children, o, i, t)
      case Dc:
        ;(s = 8), (o |= 8)
        break
      case wu:
        return (e = Ut(12, n, t, o | 2)), (e.elementType = wu), (e.lanes = i), e
      case Cu:
        return (e = Ut(13, n, t, o)), (e.elementType = Cu), (e.lanes = i), e
      case ku:
        return (e = Ut(19, n, t, o)), (e.elementType = ku), (e.lanes = i), e
      case Qh:
        return jl(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Gh:
              s = 10
              break e
            case qh:
              s = 9
              break e
            case Fc:
              s = 11
              break e
            case Wc:
              s = 14
              break e
            case Un:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(L(130, e == null ? e : typeof e, ''))
    }
  return (t = Ut(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
}
function br(e, t, n, r) {
  return (e = Ut(7, e, r, t)), (e.lanes = n), e
}
function jl(e, t, n, r) {
  return (e = Ut(22, e, r, t)), (e.elementType = Qh), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
}
function ru(e, t, n) {
  return (e = Ut(6, e, null, t)), (e.lanes = n), e
}
function ou(e, t, n) {
  return (
    (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  )
}
function K1(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = za(0)),
    (this.expirationTimes = za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = za(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function kd(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new K1(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ut(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    sd(i),
    e
  )
}
function G1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return { $$typeof: Qr, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n }
}
function Dg(e) {
  if (!e) return sr
  e = e._reactInternals
  e: {
    if (Nr(e) !== e || e.tag !== 1) throw Error(L(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(L(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (xt(n)) return Dm(e, n, t)
  }
  return t
}
function Fg(e, t, n, r, o, i, s, l, a) {
  return (
    (e = kd(n, r, !0, e, o, i, s, l, a)),
    (e.context = Dg(null)),
    (n = e.current),
    (r = pt()),
    (o = tr(n)),
    (i = $n(r, o)),
    (i.callback = t ?? null),
    Zn(n, i, o),
    (e.current.lanes = o),
    Fi(e, o, r),
    wt(e, r),
    e
  )
}
function Dl(e, t, n, r) {
  var o = t.current,
    i = pt(),
    s = tr(o)
  return (
    (n = Dg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $n(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zn(o, t, s)),
    e !== null && (ln(e, o, s, i), Ts(e, o, s)),
    s
  )
}
function pl(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function bp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function bd(e, t) {
  bp(e, t), (e = e.alternate) && bp(e, t)
}
function q1() {
  return null
}
var Wg =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Ed(e) {
  this._internalRoot = e
}
Fl.prototype.render = Ed.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(L(409))
  Dl(e, t, null, null)
}
Fl.prototype.unmount = Ed.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Or(function () {
      Dl(null, e, null, null)
    }),
      (t[Ln] = null)
  }
}
function Fl(e) {
  this._internalRoot = e
}
Fl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sm()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Hn.length && t !== 0 && t < Hn[n].priority; n++);
    Hn.splice(n, 0, e), n === 0 && wm(e)
  }
}
function Rd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Wl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Ep() {}
function Q1(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var u = pl(s)
        i.call(u)
      }
    }
    var s = Fg(t, r, e, 0, null, !1, !1, '', Ep)
    return (e._reactRootContainer = s), (e[Ln] = s.current), bi(e.nodeType === 8 ? e.parentNode : e), Or(), s
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = pl(a)
      l.call(u)
    }
  }
  var a = kd(e, 0, !1, null, null, !1, !1, '', Ep)
  return (
    (e._reactRootContainer = a),
    (e[Ln] = a.current),
    bi(e.nodeType === 8 ? e.parentNode : e),
    Or(function () {
      Dl(t, a, n, r)
    }),
    a
  )
}
function Ul(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var s = i
    if (typeof o == 'function') {
      var l = o
      o = function () {
        var a = pl(s)
        l.call(a)
      }
    }
    Dl(t, s, e, o)
  } else s = Q1(n, t, e, o, r)
  return pl(s)
}
ym = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Xo(t.pendingLanes)
        n !== 0 && (Hc(t, n | 1), wt(t, Fe()), !(ie & 6) && ((Co = Fe() + 500), fr()))
      }
      break
    case 13:
      Or(function () {
        var r = Bn(e, 1)
        if (r !== null) {
          var o = pt()
          ln(r, e, 1, o)
        }
      }),
        bd(e, 1)
  }
}
Kc = function (e) {
  if (e.tag === 13) {
    var t = Bn(e, 134217728)
    if (t !== null) {
      var n = pt()
      ln(t, e, 134217728, n)
    }
    bd(e, 134217728)
  }
}
vm = function (e) {
  if (e.tag === 13) {
    var t = tr(e),
      n = Bn(e, t)
    if (n !== null) {
      var r = pt()
      ln(n, e, t, r)
    }
    bd(e, t)
  }
}
Sm = function () {
  return de
}
xm = function (e, t) {
  var n = de
  try {
    return (de = e), t()
  } finally {
    de = n
  }
}
Mu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ru(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = Ml(r)
            if (!o) throw Error(L(90))
            Xh(r), Ru(r, o)
          }
        }
      }
      break
    case 'textarea':
      Zh(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && lo(e, !!n.multiple, t, !1)
  }
}
sm = Sd
lm = Or
var Y1 = { usingClientEntryPoint: !1, Events: [Ui, eo, Ml, om, im, Sd] },
  Wo = { findFiberByHostInstance: Sr, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
  X1 = {
    bundleType: Wo.bundleType,
    version: Wo.version,
    rendererPackageName: Wo.rendererPackageName,
    rendererConfig: Wo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cm(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Wo.findFiberByHostInstance || q1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ds = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!ds.isDisabled && ds.supportsFiber)
    try {
      ;(_l = ds.inject(X1)), (wn = ds)
    } catch {}
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y1
Mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Rd(t)) throw Error(L(200))
  return G1(e, t, null, n)
}
Mt.createRoot = function (e, t) {
  if (!Rd(e)) throw Error(L(299))
  var n = !1,
    r = '',
    o = Wg
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = kd(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ln] = t.current),
    bi(e.nodeType === 8 ? e.parentNode : e),
    new Ed(t)
  )
}
Mt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(L(188)) : ((e = Object.keys(e).join(',')), Error(L(268, e)))
  return (e = cm(t)), (e = e === null ? null : e.stateNode), e
}
Mt.flushSync = function (e) {
  return Or(e)
}
Mt.hydrate = function (e, t, n) {
  if (!Wl(t)) throw Error(L(200))
  return Ul(null, e, t, !0, n)
}
Mt.hydrateRoot = function (e, t, n) {
  if (!Rd(e)) throw Error(L(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Wg
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Fg(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Ln] = t.current),
    bi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Fl(t)
}
Mt.render = function (e, t, n) {
  if (!Wl(t)) throw Error(L(200))
  return Ul(null, e, t, !1, n)
}
Mt.unmountComponentAtNode = function (e) {
  if (!Wl(e)) throw Error(L(40))
  return e._reactRootContainer
    ? (Or(function () {
        Ul(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Ln] = null)
        })
      }),
      !0)
    : !1
}
Mt.unstable_batchedUpdates = Sd
Mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Wl(n)) throw Error(L(200))
  if (e == null || e._reactInternals === void 0) throw Error(L(38))
  return Ul(e, t, n, !1, r)
}
Mt.version = '18.3.1-next-f1338f8080-20240426'
function Ug() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)
    } catch (e) {
      console.error(e)
    }
}
Ug(), (Uh.exports = Mt)
var Td = Uh.exports
const fs = Ih(Td)
var Vg,
  Rp = Td
;(Vg = Rp.createRoot), Rp.hydrateRoot
function jn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`)
  return (
    t.forEach((r) => n.searchParams.append('args[]', r)), `Minified MUI error #${e}; visit ${n} for the full message.`
  )
}
const kn = '$$material'
function hl() {
  return (
    (hl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    hl.apply(null, arguments)
  )
}
function Hg(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var J1 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Z1 = Hg(function (e) {
    return J1.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  }),
  eS = !1
function tS(e) {
  if (e.sheet) return e.sheet
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}
function nS(e) {
  var t = document.createElement('style')
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  )
}
var rS = (function () {
    function e(n) {
      var r = this
      ;(this._insertTag = function (o) {
        var i
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o)
      }),
        (this.isSpeedy = n.speedy === void 0 ? !eS : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null)
    }
    var t = e.prototype
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag)
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(nS(this))
        var o = this.tags[this.tags.length - 1]
        if (this.isSpeedy) {
          var i = tS(o)
          try {
            i.insertRule(r, i.cssRules.length)
          } catch {}
        } else o.appendChild(document.createTextNode(r))
        this.ctr++
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r)
        }),
          (this.tags = []),
          (this.ctr = 0)
      }),
      e
    )
  })(),
  ut = '-ms-',
  ml = '-moz-',
  ae = '-webkit-',
  Kg = 'comm',
  Pd = 'rule',
  _d = 'decl',
  oS = '@import',
  Gg = '@keyframes',
  iS = '@layer',
  sS = Math.abs,
  Vl = String.fromCharCode,
  lS = Object.assign
function aS(e, t) {
  return ot(e, 0) ^ 45 ? (((((((t << 2) ^ ot(e, 0)) << 2) ^ ot(e, 1)) << 2) ^ ot(e, 2)) << 2) ^ ot(e, 3) : 0
}
function qg(e) {
  return e.trim()
}
function uS(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function ue(e, t, n) {
  return e.replace(t, n)
}
function fc(e, t) {
  return e.indexOf(t)
}
function ot(e, t) {
  return e.charCodeAt(t) | 0
}
function Mi(e, t, n) {
  return e.slice(t, n)
}
function gn(e) {
  return e.length
}
function Od(e) {
  return e.length
}
function ps(e, t) {
  return t.push(e), e
}
function cS(e, t) {
  return e.map(t).join('')
}
var Hl = 1,
  ko = 1,
  Qg = 0,
  kt = 0,
  Ve = 0,
  _o = ''
function Kl(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Hl, column: ko, length: s, return: '' }
}
function Uo(e, t) {
  return lS(Kl('', null, null, '', null, null, 0), e, { length: -e.length }, t)
}
function dS() {
  return Ve
}
function fS() {
  return (Ve = kt > 0 ? ot(_o, --kt) : 0), ko--, Ve === 10 && ((ko = 1), Hl--), Ve
}
function It() {
  return (Ve = kt < Qg ? ot(_o, kt++) : 0), ko++, Ve === 10 && ((ko = 1), Hl++), Ve
}
function bn() {
  return ot(_o, kt)
}
function $s() {
  return kt
}
function Hi(e, t) {
  return Mi(_o, e, t)
}
function $i(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function Yg(e) {
  return (Hl = ko = 1), (Qg = gn((_o = e))), (kt = 0), []
}
function Xg(e) {
  return (_o = ''), e
}
function Ns(e) {
  return qg(Hi(kt - 1, pc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function pS(e) {
  for (; (Ve = bn()) && Ve < 33; ) It()
  return $i(e) > 2 || $i(Ve) > 3 ? '' : ' '
}
function hS(e, t) {
  for (; --t && It() && !(Ve < 48 || Ve > 102 || (Ve > 57 && Ve < 65) || (Ve > 70 && Ve < 97)); );
  return Hi(e, $s() + (t < 6 && bn() == 32 && It() == 32))
}
function pc(e) {
  for (; It(); )
    switch (Ve) {
      case e:
        return kt
      case 34:
      case 39:
        e !== 34 && e !== 39 && pc(Ve)
        break
      case 40:
        e === 41 && pc(e)
        break
      case 92:
        It()
        break
    }
  return kt
}
function mS(e, t) {
  for (; It() && e + Ve !== 57; ) if (e + Ve === 84 && bn() === 47) break
  return '/*' + Hi(t, kt - 1) + '*' + Vl(e === 47 ? e : It())
}
function gS(e) {
  for (; !$i(bn()); ) It()
  return Hi(e, kt)
}
function yS(e) {
  return Xg(Ls('', null, null, null, [''], (e = Yg(e)), 0, [0], e))
}
function Ls(e, t, n, r, o, i, s, l, a) {
  for (
    var u = 0, d = 0, f = s, p = 0, x = 0, v = 0, w = 1, R = 1, m = 1, g = 0, c = '', y = o, C = i, E = r, b = c;
    R;

  )
    switch (((v = g), (g = It()))) {
      case 40:
        if (v != 108 && ot(b, f - 1) == 58) {
          fc((b += ue(Ns(g), '&', '&\f')), '&\f') != -1 && (m = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        b += Ns(g)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        b += pS(v)
        break
      case 92:
        b += hS($s() - 1, 7)
        continue
      case 47:
        switch (bn()) {
          case 42:
          case 47:
            ps(vS(mS(It(), $s()), t, n), a)
            break
          default:
            b += '/'
        }
        break
      case 123 * w:
        l[u++] = gn(b) * m
      case 125 * w:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            R = 0
          case 59 + d:
            m == -1 && (b = ue(b, /\f/g, '')),
              x > 0 && gn(b) - f && ps(x > 32 ? Pp(b + ';', r, n, f - 1) : Pp(ue(b, ' ', '') + ';', r, n, f - 2), a)
            break
          case 59:
            b += ';'
          default:
            if ((ps((E = Tp(b, t, n, u, d, o, l, c, (y = []), (C = []), f)), i), g === 123))
              if (d === 0) Ls(b, t, E, E, y, i, f, l, C)
              else
                switch (p === 99 && ot(b, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ls(e, E, E, r && ps(Tp(e, E, E, 0, 0, o, l, c, o, (y = []), f), C), o, C, f, l, r ? y : C)
                    break
                  default:
                    Ls(b, E, E, E, [''], C, 0, l, C)
                }
        }
        ;(u = d = x = 0), (w = m = 1), (c = b = ''), (f = s)
        break
      case 58:
        ;(f = 1 + gn(b)), (x = v)
      default:
        if (w < 1) {
          if (g == 123) --w
          else if (g == 125 && w++ == 0 && fS() == 125) continue
        }
        switch (((b += Vl(g)), g * w)) {
          case 38:
            m = d > 0 ? 1 : ((b += '\f'), -1)
            break
          case 44:
            ;(l[u++] = (gn(b) - 1) * m), (m = 1)
            break
          case 64:
            bn() === 45 && (b += Ns(It())), (p = bn()), (d = f = gn((c = b += gS($s())))), g++
            break
          case 45:
            v === 45 && gn(b) == 2 && (w = 0)
        }
    }
  return i
}
function Tp(e, t, n, r, o, i, s, l, a, u, d) {
  for (var f = o - 1, p = o === 0 ? i : [''], x = Od(p), v = 0, w = 0, R = 0; v < r; ++v)
    for (var m = 0, g = Mi(e, f + 1, (f = sS((w = s[v])))), c = e; m < x; ++m)
      (c = qg(w > 0 ? p[m] + ' ' + g : ue(g, /&\f/g, p[m]))) && (a[R++] = c)
  return Kl(e, t, n, o === 0 ? Pd : l, a, u, d)
}
function vS(e, t, n) {
  return Kl(e, t, n, Kg, Vl(dS()), Mi(e, 2, -2), 0)
}
function Pp(e, t, n, r) {
  return Kl(e, t, n, _d, Mi(e, 0, r), Mi(e, r + 1, -1), r)
}
function ho(e, t) {
  for (var n = '', r = Od(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || ''
  return n
}
function SS(e, t, n, r) {
  switch (e.type) {
    case iS:
      if (e.children.length) break
    case oS:
    case _d:
      return (e.return = e.return || e.value)
    case Kg:
      return ''
    case Gg:
      return (e.return = e.value + '{' + ho(e.children, r) + '}')
    case Pd:
      e.value = e.props.join(',')
  }
  return gn((n = ho(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
function xS(e) {
  var t = Od(e)
  return function (n, r, o, i) {
    for (var s = '', l = 0; l < t; l++) s += e[l](n, r, o, i) || ''
    return s
  }
}
function wS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t))
  }
}
var CS = function (t, n, r) {
    for (var o = 0, i = 0; (o = i), (i = bn()), o === 38 && i === 12 && (n[r] = 1), !$i(i); ) It()
    return Hi(t, kt)
  },
  kS = function (t, n) {
    var r = -1,
      o = 44
    do
      switch ($i(o)) {
        case 0:
          o === 38 && bn() === 12 && (n[r] = 1), (t[r] += CS(kt - 1, n, r))
          break
        case 2:
          t[r] += Ns(o)
          break
        case 4:
          if (o === 44) {
            ;(t[++r] = bn() === 58 ? '&\f' : ''), (n[r] = t[r].length)
            break
          }
        default:
          t[r] += Vl(o)
      }
    while ((o = It()))
    return t
  },
  bS = function (t, n) {
    return Xg(kS(Yg(t), n))
  },
  _p = new WeakMap(),
  ES = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== 'rule'; )
        if (((r = r.parent), !r)) return
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !_p.get(r)) && !o) {
        _p.set(t, !0)
        for (var i = [], s = bS(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
          for (var d = 0; d < l.length; d++, u++) t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + ' ' + s[a]
      }
    }
  },
  RS = function (t) {
    if (t.type === 'decl') {
      var n = t.value
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''))
    }
  }
function Jg(e, t) {
  switch (aS(e, t)) {
    case 5103:
      return ae + 'print-' + e + e
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + e + e
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + ml + e + ut + e + e
    case 6828:
    case 4268:
      return ae + e + ut + e + e
    case 6165:
      return ae + e + ut + 'flex-' + e + e
    case 5187:
      return ae + e + ue(e, /(\w+).+(:[^]+)/, ae + 'box-$1$2' + ut + 'flex-$1$2') + e
    case 5443:
      return ae + e + ut + 'flex-item-' + ue(e, /flex-|-self/, '') + e
    case 4675:
      return ae + e + ut + 'flex-line-pack' + ue(e, /align-content|flex-|-self/, '') + e
    case 5548:
      return ae + e + ut + ue(e, 'shrink', 'negative') + e
    case 5292:
      return ae + e + ut + ue(e, 'basis', 'preferred-size') + e
    case 6060:
      return ae + 'box-' + ue(e, '-grow', '') + ae + e + ut + ue(e, 'grow', 'positive') + e
    case 4554:
      return ae + ue(e, /([^-])(transform)/g, '$1' + ae + '$2') + e
    case 6187:
      return ue(ue(ue(e, /(zoom-|grab)/, ae + '$1'), /(image-set)/, ae + '$1'), e, '') + e
    case 5495:
    case 3959:
      return ue(e, /(image-set\([^]*)/, ae + '$1$`$1')
    case 4968:
      return (
        ue(ue(e, /(.+:)(flex-)?(.*)/, ae + 'box-pack:$3' + ut + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + ae + e + e
      )
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ue(e, /(.+)-inline(.+)/, ae + '$1$2') + e
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (gn(e) - 1 - t > 6)
        switch (ot(e, t + 1)) {
          case 109:
            if (ot(e, t + 4) !== 45) break
          case 102:
            return ue(e, /(.+:)(.+)-([^]+)/, '$1' + ae + '$2-$3$1' + ml + (ot(e, t + 3) == 108 ? '$3' : '$2-$3')) + e
          case 115:
            return ~fc(e, 'stretch') ? Jg(ue(e, 'stretch', 'fill-available'), t) + e : e
        }
      break
    case 4949:
      if (ot(e, t + 1) !== 115) break
    case 6444:
      switch (ot(e, gn(e) - 3 - (~fc(e, '!important') && 10))) {
        case 107:
          return ue(e, ':', ':' + ae) + e
        case 101:
          return (
            ue(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' + ae + (ot(e, 14) === 45 ? 'inline-' : '') + 'box$3$1' + ae + '$2$3$1' + ut + '$2box$3'
            ) + e
          )
      }
      break
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return ae + e + ut + ue(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
        case 108:
          return ae + e + ut + ue(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
        case 45:
          return ae + e + ut + ue(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
      }
      return ae + e + ut + e + e
  }
  return e
}
var TS = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case _d:
          t.return = Jg(t.value, t.length)
          break
        case Gg:
          return ho([Uo(t, { value: ue(t.value, '@', '@' + ae) })], o)
        case Pd:
          if (t.length)
            return cS(t.props, function (i) {
              switch (uS(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return ho([Uo(t, { props: [ue(i, /:(read-\w+)/, ':' + ml + '$1')] })], o)
                case '::placeholder':
                  return ho(
                    [
                      Uo(t, { props: [ue(i, /:(plac\w+)/, ':' + ae + 'input-$1')] }),
                      Uo(t, { props: [ue(i, /:(plac\w+)/, ':' + ml + '$1')] }),
                      Uo(t, { props: [ue(i, /:(plac\w+)/, ut + 'input-$1')] })
                    ],
                    o
                  )
              }
              return ''
            })
      }
  },
  PS = [TS],
  _S = function (t) {
    var n = t.key
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])')
      Array.prototype.forEach.call(r, function (w) {
        var R = w.getAttribute('data-emotion')
        R.indexOf(' ') !== -1 && (document.head.appendChild(w), w.setAttribute('data-s', ''))
      })
    }
    var o = t.stylisPlugins || PS,
      i = {},
      s,
      l = []
    ;(s = t.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (w) {
        for (var R = w.getAttribute('data-emotion').split(' '), m = 1; m < R.length; m++) i[R[m]] = !0
        l.push(w)
      })
    var a,
      u = [ES, RS]
    {
      var d,
        f = [
          SS,
          wS(function (w) {
            d.insert(w)
          })
        ],
        p = xS(u.concat(o, f)),
        x = function (R) {
          return ho(yS(R), p)
        }
      a = function (R, m, g, c) {
        ;(d = g), x(R ? R + '{' + m.styles + '}' : m.styles), c && (v.inserted[m.name] = !0)
      }
    }
    var v = {
      key: n,
      sheet: new rS({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a
    }
    return v.sheet.hydrate(l), v
  },
  Zg = { exports: {} },
  pe = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var et = typeof Symbol == 'function' && Symbol.for,
  Id = et ? Symbol.for('react.element') : 60103,
  Ad = et ? Symbol.for('react.portal') : 60106,
  Gl = et ? Symbol.for('react.fragment') : 60107,
  ql = et ? Symbol.for('react.strict_mode') : 60108,
  Ql = et ? Symbol.for('react.profiler') : 60114,
  Yl = et ? Symbol.for('react.provider') : 60109,
  Xl = et ? Symbol.for('react.context') : 60110,
  Md = et ? Symbol.for('react.async_mode') : 60111,
  Jl = et ? Symbol.for('react.concurrent_mode') : 60111,
  Zl = et ? Symbol.for('react.forward_ref') : 60112,
  ea = et ? Symbol.for('react.suspense') : 60113,
  OS = et ? Symbol.for('react.suspense_list') : 60120,
  ta = et ? Symbol.for('react.memo') : 60115,
  na = et ? Symbol.for('react.lazy') : 60116,
  IS = et ? Symbol.for('react.block') : 60121,
  AS = et ? Symbol.for('react.fundamental') : 60117,
  MS = et ? Symbol.for('react.responder') : 60118,
  $S = et ? Symbol.for('react.scope') : 60119
function Nt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Id:
        switch (((e = e.type), e)) {
          case Md:
          case Jl:
          case Gl:
          case Ql:
          case ql:
          case ea:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Xl:
              case Zl:
              case na:
              case ta:
              case Yl:
                return e
              default:
                return t
            }
        }
      case Ad:
        return t
    }
  }
}
function ey(e) {
  return Nt(e) === Jl
}
pe.AsyncMode = Md
pe.ConcurrentMode = Jl
pe.ContextConsumer = Xl
pe.ContextProvider = Yl
pe.Element = Id
pe.ForwardRef = Zl
pe.Fragment = Gl
pe.Lazy = na
pe.Memo = ta
pe.Portal = Ad
pe.Profiler = Ql
pe.StrictMode = ql
pe.Suspense = ea
pe.isAsyncMode = function (e) {
  return ey(e) || Nt(e) === Md
}
pe.isConcurrentMode = ey
pe.isContextConsumer = function (e) {
  return Nt(e) === Xl
}
pe.isContextProvider = function (e) {
  return Nt(e) === Yl
}
pe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Id
}
pe.isForwardRef = function (e) {
  return Nt(e) === Zl
}
pe.isFragment = function (e) {
  return Nt(e) === Gl
}
pe.isLazy = function (e) {
  return Nt(e) === na
}
pe.isMemo = function (e) {
  return Nt(e) === ta
}
pe.isPortal = function (e) {
  return Nt(e) === Ad
}
pe.isProfiler = function (e) {
  return Nt(e) === Ql
}
pe.isStrictMode = function (e) {
  return Nt(e) === ql
}
pe.isSuspense = function (e) {
  return Nt(e) === ea
}
pe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Gl ||
    e === Jl ||
    e === Ql ||
    e === ql ||
    e === ea ||
    e === OS ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === na ||
        e.$$typeof === ta ||
        e.$$typeof === Yl ||
        e.$$typeof === Xl ||
        e.$$typeof === Zl ||
        e.$$typeof === AS ||
        e.$$typeof === MS ||
        e.$$typeof === $S ||
        e.$$typeof === IS))
  )
}
pe.typeOf = Nt
Zg.exports = pe
var NS = Zg.exports,
  ty = NS,
  LS = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  BS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  ny = {}
ny[ty.ForwardRef] = LS
ny[ty.Memo] = BS
var zS = !0
function jS(e, t, n) {
  var r = ''
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : o && (r += o + ' ')
    }),
    r
  )
}
var ry = function (t, n, r) {
    var o = t.key + '-' + n.name
    ;(r === !1 || zS === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
  },
  oy = function (t, n, r) {
    ry(t, n, r)
    var o = t.key + '-' + n.name
    if (t.inserted[n.name] === void 0) {
      var i = n
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next)
      while (i !== void 0)
    }
  }
function DS(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
var FS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  WS = !1,
  US = /[A-Z]|^ms/g,
  VS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  iy = function (t) {
    return t.charCodeAt(1) === 45
  },
  Op = function (t) {
    return t != null && typeof t != 'boolean'
  },
  iu = Hg(function (e) {
    return iy(e) ? e : e.replace(US, '-$&').toLowerCase()
  }),
  Ip = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(VS, function (r, o, i) {
            return (yn = { name: o, styles: i, next: yn }), o
          })
    }
    return FS[t] !== 1 && !iy(t) && typeof n == 'number' && n !== 0 ? n + 'px' : n
  },
  HS =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.'
function Ni(e, t, n) {
  if (n == null) return ''
  var r = n
  if (r.__emotion_styles !== void 0) return r
  switch (typeof n) {
    case 'boolean':
      return ''
    case 'object': {
      var o = n
      if (o.anim === 1) return (yn = { name: o.name, styles: o.styles, next: yn }), o.name
      var i = n
      if (i.styles !== void 0) {
        var s = i.next
        if (s !== void 0) for (; s !== void 0; ) (yn = { name: s.name, styles: s.styles, next: yn }), (s = s.next)
        var l = i.styles + ';'
        return l
      }
      return KS(e, t, n)
    }
    case 'function': {
      if (e !== void 0) {
        var a = yn,
          u = n(e)
        return (yn = a), Ni(e, t, u)
      }
      break
    }
  }
  var d = n
  if (t == null) return d
  var f = t[d]
  return f !== void 0 ? f : d
}
function KS(e, t, n) {
  var r = ''
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += Ni(e, t, n[o]) + ';'
  else
    for (var i in n) {
      var s = n[i]
      if (typeof s != 'object') {
        var l = s
        t != null && t[l] !== void 0 ? (r += i + '{' + t[l] + '}') : Op(l) && (r += iu(i) + ':' + Ip(i, l) + ';')
      } else {
        if (i === 'NO_COMPONENT_SELECTOR' && WS) throw new Error(HS)
        if (Array.isArray(s) && typeof s[0] == 'string' && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++) Op(s[a]) && (r += iu(i) + ':' + Ip(i, s[a]) + ';')
        else {
          var u = Ni(e, t, s)
          switch (i) {
            case 'animation':
            case 'animationName': {
              r += iu(i) + ':' + u + ';'
              break
            }
            default:
              r += i + '{' + u + '}'
          }
        }
      }
    }
  return r
}
var Ap = /label:\s*([^\s;{]+)\s*(;|$)/g,
  yn
function ra(e, t, n) {
  if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0) return e[0]
  var r = !0,
    o = ''
  yn = void 0
  var i = e[0]
  if (i == null || i.raw === void 0) (r = !1), (o += Ni(n, t, i))
  else {
    var s = i
    o += s[0]
  }
  for (var l = 1; l < e.length; l++)
    if (((o += Ni(n, t, e[l])), r)) {
      var a = i
      o += a[l]
    }
  Ap.lastIndex = 0
  for (var u = '', d; (d = Ap.exec(o)) !== null; ) u += '-' + d[1]
  var f = DS(o) + u
  return { name: f, styles: o, next: yn }
}
var GS = function (t) {
    return t()
  },
  sy = Su.useInsertionEffect ? Su.useInsertionEffect : !1,
  qS = sy || GS,
  Mp = sy || S.useLayoutEffect,
  ly = S.createContext(typeof HTMLElement < 'u' ? _S({ key: 'css' }) : null)
ly.Provider
var ay = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(ly)
      return t(n, o, r)
    })
  },
  oa = S.createContext({}),
  QS = ay(function (e, t) {
    var n = e.styles,
      r = ra([n], void 0, S.useContext(oa)),
      o = S.useRef()
    return (
      Mp(
        function () {
          var i = t.key + '-global',
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy
            }),
            l = !1,
            a = document.querySelector('style[data-emotion="' + i + ' ' + r.name + '"]')
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            a !== null && ((l = !0), a.setAttribute('data-emotion', i), s.hydrate([a])),
            (o.current = [s, l]),
            function () {
              s.flush()
            }
          )
        },
        [t]
      ),
      Mp(
        function () {
          var i = o.current,
            s = i[0],
            l = i[1]
          if (l) {
            i[1] = !1
            return
          }
          if ((r.next !== void 0 && oy(t, r.next, !0), s.tags.length)) {
            var a = s.tags[s.tags.length - 1].nextElementSibling
            ;(s.before = a), s.flush()
          }
          t.insert('', r, s, !1)
        },
        [t, r.name]
      ),
      null
    )
  })
function YS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return ra(t)
}
var $d = function () {
    var t = YS.apply(void 0, arguments),
      n = 'animation-' + t.name
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
      }
    }
  },
  XS = Z1,
  JS = function (t) {
    return t !== 'theme'
  },
  $p = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? XS : JS
  },
  Np = function (t, n, r) {
    var o
    if (n) {
      var i = n.shouldForwardProp
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s)
            }
          : i
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o
  },
  ZS = !1,
  ex = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag
    return (
      ry(n, r, o),
      qS(function () {
        return oy(n, r, o)
      }),
      null
    )
  },
  tx = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s
    n !== void 0 && ((i = n.label), (s = n.target))
    var l = Np(t, n, r),
      a = l || $p(o),
      u = !a('as')
    return function () {
      var d = arguments,
        f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : []
      if ((i !== void 0 && f.push('label:' + i + ';'), d[0] == null || d[0].raw === void 0)) f.push.apply(f, d)
      else {
        f.push(d[0][0])
        for (var p = d.length, x = 1; x < p; x++) f.push(d[x], d[0][x])
      }
      var v = ay(function (w, R, m) {
        var g = (u && w.as) || o,
          c = '',
          y = [],
          C = w
        if (w.theme == null) {
          C = {}
          for (var E in w) C[E] = w[E]
          C.theme = S.useContext(oa)
        }
        typeof w.className == 'string'
          ? (c = jS(R.registered, y, w.className))
          : w.className != null && (c = w.className + ' ')
        var b = ra(f.concat(y), R.registered, C)
        ;(c += R.key + '-' + b.name), s !== void 0 && (c += ' ' + s)
        var T = u && l === void 0 ? $p(g) : a,
          I = {}
        for (var h in w) (u && h === 'as') || (T(h) && (I[h] = w[h]))
        return (
          (I.className = c),
          m && (I.ref = m),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(ex, { cache: R, serialized: b, isStringTag: typeof g == 'string' }),
            S.createElement(g, I)
          )
        )
      })
      return (
        (v.displayName =
          i !== void 0 ? i : 'Styled(' + (typeof o == 'string' ? o : o.displayName || o.name || 'Component') + ')'),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = f),
        (v.__emotion_forwardProp = l),
        Object.defineProperty(v, 'toString', {
          value: function () {
            return s === void 0 && ZS ? 'NO_COMPONENT_SELECTOR' : '.' + s
          }
        }),
        (v.withComponent = function (w, R) {
          return e(w, hl({}, n, R, { shouldForwardProp: Np(v, R, !0) })).apply(void 0, f)
        }),
        v
      )
    }
  },
  nx = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
  ],
  hc = tx.bind()
nx.forEach(function (e) {
  hc[e] = hc(e)
})
function rx(e) {
  return e == null || Object.keys(e).length === 0
}
function uy(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? (o) => t(rx(o) ? n : o) : t
  return k.jsx(QS, { styles: r })
}
/**
 * @mui/styled-engine v6.1.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function cy(e, t) {
  return hc(e, t)
}
function ox(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
}
const Lp = []
function Bp(e) {
  return (Lp[0] = e), ra(Lp)
}
function Sn(e) {
  if (typeof e != 'object' || e === null) return !1
  const t = Object.getPrototypeOf(e)
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  )
}
function dy(e) {
  if (!Sn(e)) return e
  const t = {}
  return (
    Object.keys(e).forEach((n) => {
      t[n] = dy(e[n])
    }),
    t
  )
}
function Ze(e, t, n = { clone: !0 }) {
  const r = n.clone ? { ...e } : e
  return (
    Sn(e) &&
      Sn(t) &&
      Object.keys(t).forEach((o) => {
        Sn(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && Sn(e[o])
          ? (r[o] = Ze(e[o], t[o], n))
          : n.clone
            ? (r[o] = Sn(t[o]) ? dy(t[o]) : t[o])
            : (r[o] = t[o])
      }),
    r
  )
}
const ix = (e) => {
  const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || []
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
}
function sx(e) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n = 'px', step: r = 5, ...o } = e,
    i = ix(t),
    s = Object.keys(i)
  function l(p) {
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n})`
  }
  function a(p) {
    return `@media (max-width:${(typeof t[p] == 'number' ? t[p] : p) - r / 100}${n})`
  }
  function u(p, x) {
    const v = s.indexOf(x)
    return `@media (min-width:${typeof t[p] == 'number' ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[s[v]] == 'number' ? t[s[v]] : x) - r / 100}${n})`
  }
  function d(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : l(p)
  }
  function f(p) {
    const x = s.indexOf(p)
    return x === 0
      ? l(s[1])
      : x === s.length - 1
        ? a(s[x])
        : u(p, s[s.indexOf(p) + 1]).replace('@media', '@media not all and')
  }
  return { keys: s, values: i, up: l, down: a, between: u, only: d, not: f, unit: n, ...o }
}
function lx(e, t) {
  if (!e.containerQueries) return t
  const n = Object.keys(t)
    .filter((r) => r.startsWith('@container'))
    .sort((r, o) => {
      var s, l
      const i = /min-width:\s*([0-9.]+)/
      return +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) - +(((l = o.match(i)) == null ? void 0 : l[1]) || 0)
    })
  return n.length
    ? n.reduce(
        (r, o) => {
          const i = t[o]
          return delete r[o], (r[o] = i), r
        },
        { ...t }
      )
    : t
}
function ax(e, t) {
  return t === '@' || (t.startsWith('@') && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
}
function ux(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/)
  if (!n) return null
  const [, r, o] = n,
    i = Number.isNaN(+r) ? r || 0 : +r
  return e.containerQueries(o).up(i)
}
function cx(e) {
  const t = (i, s) => i.replace('@media', s ? `@container ${s}` : '@container')
  function n(i, s) {
    ;(i.up = (...l) => t(e.breakpoints.up(...l), s)),
      (i.down = (...l) => t(e.breakpoints.down(...l), s)),
      (i.between = (...l) => t(e.breakpoints.between(...l), s)),
      (i.only = (...l) => t(e.breakpoints.only(...l), s)),
      (i.not = (...l) => {
        const a = t(e.breakpoints.not(...l), s)
        return a.includes('not all and')
          ? a
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : a
      })
  }
  const r = {},
    o = (i) => (n(r, i), r)
  return n(o), { ...e, containerQueries: o }
}
const dx = { borderRadius: 4 }
function fi(e, t) {
  return t ? Ze(e, t, { clone: !1 }) : e
}
const ia = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  zp = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (e) => `@media (min-width:${ia[e]}px)` },
  fx = {
    containerQueries: (e) => ({
      up: (t) => {
        let n = typeof t == 'number' ? t : ia[t] || t
        return (
          typeof n == 'number' && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        )
      }
    })
  }
function un(e, t, n) {
  const r = e.theme || {}
  if (Array.isArray(t)) {
    const i = r.breakpoints || zp
    return t.reduce((s, l, a) => ((s[i.up(i.keys[a])] = n(t[a])), s), {})
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || zp
    return Object.keys(t).reduce((s, l) => {
      if (ax(i.keys, l)) {
        const a = ux(r.containerQueries ? r : fx, l)
        a && (s[a] = n(t[l], l))
      } else if (Object.keys(i.values || ia).includes(l)) {
        const a = i.up(l)
        s[a] = n(t[l], l)
      } else {
        const a = l
        s[a] = t[a]
      }
      return s
    }, {})
  }
  return n(t)
}
function fy(e = {}) {
  var n
  return (
    ((n = e.keys) == null
      ? void 0
      : n.reduce((r, o) => {
          const i = e.up(o)
          return (r[i] = {}), r
        }, {})) || {}
  )
}
function py(e, t) {
  return e.reduce((n, r) => {
    const o = n[r]
    return (!o || Object.keys(o).length === 0) && delete n[r], n
  }, t)
}
function px(e, ...t) {
  const n = fy(e),
    r = [n, ...t].reduce((o, i) => Ze(o, i), {})
  return py(Object.keys(n), r)
}
function hx(e, t) {
  if (typeof e != 'object') return {}
  const n = {},
    r = Object.keys(t)
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0)
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0)
        }),
    n
  )
}
function su({ values: e, breakpoints: t, base: n }) {
  const r = n || hx(e, t),
    o = Object.keys(r)
  if (o.length === 0) return e
  let i
  return o.reduce(
    (s, l, a) => (
      Array.isArray(e)
        ? ((s[l] = e[a] != null ? e[a] : e[i]), (i = a))
        : typeof e == 'object'
          ? ((s[l] = e[l] != null ? e[l] : e[i]), (i = l))
          : (s[l] = e),
      s
    ),
    {}
  )
}
function U(e) {
  if (typeof e != 'string') throw new Error(jn(7))
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function sa(e, t, n = !0) {
  if (!t || typeof t != 'string') return null
  if (e && e.vars && n) {
    const r = `vars.${t}`.split('.').reduce((o, i) => (o && o[i] ? o[i] : null), e)
    if (r != null) return r
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e)
}
function gl(e, t, n, r = n) {
  let o
  return (
    typeof e == 'function' ? (o = e(n)) : Array.isArray(e) ? (o = e[n] || r) : (o = sa(e, n) || r),
    t && (o = t(o, r, e)),
    o
  )
}
function We(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null
      const l = s[t],
        a = s.theme,
        u = sa(a, r) || {}
      return un(s, l, (f) => {
        let p = gl(u, o, f)
        return (
          f === p && typeof f == 'string' && (p = gl(u, o, `${t}${f === 'default' ? '' : U(f)}`, f)),
          n === !1 ? p : { [n]: p }
        )
      })
    }
  return (i.propTypes = {}), (i.filterProps = [t]), i
}
function mx(e) {
  const t = {}
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const gx = { m: 'margin', p: 'padding' },
  yx = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  jp = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  vx = mx((e) => {
    if (e.length > 2)
      if (jp[e]) e = jp[e]
      else return [e]
    const [t, n] = e.split(''),
      r = gx[t],
      o = yx[n] || ''
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o]
  }),
  Nd = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd'
  ],
  Ld = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd'
  ]
;[...Nd, ...Ld]
function Ki(e, t, n, r) {
  const o = sa(e, t, !0) ?? n
  return typeof o == 'number' || typeof o == 'string'
    ? (i) => (typeof i == 'string' ? i : typeof o == 'string' ? `calc(${i} * ${o})` : o * i)
    : Array.isArray(o)
      ? (i) => {
          if (typeof i == 'string') return i
          const s = Math.abs(i),
            l = o[s]
          return i >= 0 ? l : typeof l == 'number' ? -l : `-${l}`
        }
      : typeof o == 'function'
        ? o
        : () => {}
}
function la(e) {
  return Ki(e, 'spacing', 8)
}
function Ir(e, t) {
  return typeof t == 'string' || t == null ? t : e(t)
}
function Sx(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Ir(t, n)), r), {})
}
function xx(e, t, n, r) {
  if (!t.includes(n)) return null
  const o = vx(n),
    i = Sx(o, r),
    s = e[n]
  return un(e, s, i)
}
function hy(e, t) {
  const n = la(e.theme)
  return Object.keys(e)
    .map((r) => xx(e, t, r, n))
    .reduce(fi, {})
}
function Le(e) {
  return hy(e, Nd)
}
Le.propTypes = {}
Le.filterProps = Nd
function Be(e) {
  return hy(e, Ld)
}
Be.propTypes = {}
Be.filterProps = Ld
function my(e = 8, t = la({ spacing: e })) {
  if (e.mui) return e
  const n = (...r) =>
    (r.length === 0 ? [1] : r)
      .map((i) => {
        const s = t(i)
        return typeof s == 'number' ? `${s}px` : s
      })
      .join(' ')
  return (n.mui = !0), n
}
function aa(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? fi(o, t[i](r)) : o), {})
  return (n.propTypes = {}), (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])), n
}
function Ft(e) {
  return typeof e != 'number' ? e : `${e}px solid`
}
function Gt(e, t) {
  return We({ prop: e, themeKey: 'borders', transform: t })
}
const wx = Gt('border', Ft),
  Cx = Gt('borderTop', Ft),
  kx = Gt('borderRight', Ft),
  bx = Gt('borderBottom', Ft),
  Ex = Gt('borderLeft', Ft),
  Rx = Gt('borderColor'),
  Tx = Gt('borderTopColor'),
  Px = Gt('borderRightColor'),
  _x = Gt('borderBottomColor'),
  Ox = Gt('borderLeftColor'),
  Ix = Gt('outline', Ft),
  Ax = Gt('outlineColor'),
  ua = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Ki(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: Ir(t, r) })
      return un(e, e.borderRadius, n)
    }
    return null
  }
ua.propTypes = {}
ua.filterProps = ['borderRadius']
aa(wx, Cx, kx, bx, Ex, Rx, Tx, Px, _x, Ox, ua, Ix, Ax)
const ca = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ki(e.theme, 'spacing', 8),
      n = (r) => ({ gap: Ir(t, r) })
    return un(e, e.gap, n)
  }
  return null
}
ca.propTypes = {}
ca.filterProps = ['gap']
const da = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ki(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: Ir(t, r) })
    return un(e, e.columnGap, n)
  }
  return null
}
da.propTypes = {}
da.filterProps = ['columnGap']
const fa = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ki(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: Ir(t, r) })
    return un(e, e.rowGap, n)
  }
  return null
}
fa.propTypes = {}
fa.filterProps = ['rowGap']
const Mx = We({ prop: 'gridColumn' }),
  $x = We({ prop: 'gridRow' }),
  Nx = We({ prop: 'gridAutoFlow' }),
  Lx = We({ prop: 'gridAutoColumns' }),
  Bx = We({ prop: 'gridAutoRows' }),
  zx = We({ prop: 'gridTemplateColumns' }),
  jx = We({ prop: 'gridTemplateRows' }),
  Dx = We({ prop: 'gridTemplateAreas' }),
  Fx = We({ prop: 'gridArea' })
aa(ca, da, fa, Mx, $x, Nx, Lx, Bx, zx, jx, Dx, Fx)
function mo(e, t) {
  return t === 'grey' ? t : e
}
const Wx = We({ prop: 'color', themeKey: 'palette', transform: mo }),
  Ux = We({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: mo }),
  Vx = We({ prop: 'backgroundColor', themeKey: 'palette', transform: mo })
aa(Wx, Ux, Vx)
function Pt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const Hx = We({ prop: 'width', transform: Pt }),
  Bd = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var o, i, s, l, a
        const r =
          ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null
            ? void 0
            : s[n]) || ia[n]
        return r
          ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== 'px'
            ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
            : { maxWidth: r }
          : { maxWidth: Pt(n) }
      }
      return un(e, e.maxWidth, t)
    }
    return null
  }
Bd.filterProps = ['maxWidth']
const Kx = We({ prop: 'minWidth', transform: Pt }),
  Gx = We({ prop: 'height', transform: Pt }),
  qx = We({ prop: 'maxHeight', transform: Pt }),
  Qx = We({ prop: 'minHeight', transform: Pt })
We({ prop: 'size', cssProperty: 'width', transform: Pt })
We({ prop: 'size', cssProperty: 'height', transform: Pt })
const Yx = We({ prop: 'boxSizing' })
aa(Hx, Bd, Kx, Gx, qx, Qx, Yx)
const Gi = {
  border: { themeKey: 'borders', transform: Ft },
  borderTop: { themeKey: 'borders', transform: Ft },
  borderRight: { themeKey: 'borders', transform: Ft },
  borderBottom: { themeKey: 'borders', transform: Ft },
  borderLeft: { themeKey: 'borders', transform: Ft },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: Ft },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: ua },
  color: { themeKey: 'palette', transform: mo },
  bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: mo },
  backgroundColor: { themeKey: 'palette', transform: mo },
  p: { style: Be },
  pt: { style: Be },
  pr: { style: Be },
  pb: { style: Be },
  pl: { style: Be },
  px: { style: Be },
  py: { style: Be },
  padding: { style: Be },
  paddingTop: { style: Be },
  paddingRight: { style: Be },
  paddingBottom: { style: Be },
  paddingLeft: { style: Be },
  paddingX: { style: Be },
  paddingY: { style: Be },
  paddingInline: { style: Be },
  paddingInlineStart: { style: Be },
  paddingInlineEnd: { style: Be },
  paddingBlock: { style: Be },
  paddingBlockStart: { style: Be },
  paddingBlockEnd: { style: Be },
  m: { style: Le },
  mt: { style: Le },
  mr: { style: Le },
  mb: { style: Le },
  ml: { style: Le },
  mx: { style: Le },
  my: { style: Le },
  margin: { style: Le },
  marginTop: { style: Le },
  marginRight: { style: Le },
  marginBottom: { style: Le },
  marginLeft: { style: Le },
  marginX: { style: Le },
  marginY: { style: Le },
  marginInline: { style: Le },
  marginInlineStart: { style: Le },
  marginInlineEnd: { style: Le },
  marginBlock: { style: Le },
  marginBlockStart: { style: Le },
  marginBlockEnd: { style: Le },
  displayPrint: { cssProperty: !1, transform: (e) => ({ '@media print': { display: e } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: ca },
  rowGap: { style: fa },
  columnGap: { style: da },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: Pt },
  maxWidth: { style: Bd },
  minWidth: { transform: Pt },
  height: { transform: Pt },
  maxHeight: { transform: Pt },
  minHeight: { transform: Pt },
  boxSizing: {},
  font: { themeKey: 'font' },
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' }
}
function Xx(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t)
  return e.every((r) => n.size === Object.keys(r).length)
}
function Jx(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function Zx() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      l = i[n]
    if (!l) return { [n]: r }
    const { cssProperty: a = n, themeKey: u, transform: d, style: f } = l
    if (r == null) return null
    if (u === 'typography' && r === 'inherit') return { [n]: r }
    const p = sa(o, u) || {}
    return f
      ? f(s)
      : un(s, r, (v) => {
          let w = gl(p, d, v)
          return (
            v === w && typeof v == 'string' && (w = gl(p, d, `${n}${v === 'default' ? '' : U(v)}`, v)),
            a === !1 ? w : { [a]: w }
          )
        })
  }
  function t(n) {
    const { sx: r, theme: o = {} } = n || {}
    if (!r) return null
    const i = o.unstable_sxConfig ?? Gi
    function s(l) {
      let a = l
      if (typeof l == 'function') a = l(o)
      else if (typeof l != 'object') return l
      if (!a) return null
      const u = fy(o.breakpoints),
        d = Object.keys(u)
      let f = u
      return (
        Object.keys(a).forEach((p) => {
          const x = Jx(a[p], o)
          if (x != null)
            if (typeof x == 'object')
              if (i[p]) f = fi(f, e(p, x, o, i))
              else {
                const v = un({ theme: o }, x, (w) => ({ [p]: w }))
                Xx(v, x) ? (f[p] = t({ sx: x, theme: o })) : (f = fi(f, v))
              }
            else f = fi(f, e(p, x, o, i))
        }),
        lx(o, py(d, f))
      )
    }
    return Array.isArray(r) ? r.map(s) : s(r)
  }
  return t
}
const lr = Zx()
lr.filterProps = ['sx']
function ew(e, t) {
  var r
  const n = this
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != 'function') return {}
    let o = n.getColorSchemeSelector(e)
    return o === '&'
      ? t
      : ((o.includes('data-') || o.includes('.')) && (o = `*:where(${o.replace(/\s*&$/, '')}) &`), { [o]: t })
  }
  return n.palette.mode === e ? t : {}
}
function pa(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {}, ...s } = e,
    l = sx(n),
    a = my(o)
  let u = Ze(
    {
      breakpoints: l,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...r },
      spacing: a,
      shape: { ...dx, ...i }
    },
    s
  )
  return (
    (u = cx(u)),
    (u.applyStyles = ew),
    (u = t.reduce((d, f) => Ze(d, f), u)),
    (u.unstable_sxConfig = { ...Gi, ...(s == null ? void 0 : s.unstable_sxConfig) }),
    (u.unstable_sx = function (f) {
      return lr({ sx: f, theme: this })
    }),
    u
  )
}
function tw(e) {
  return Object.keys(e).length === 0
}
function gy(e = null) {
  const t = S.useContext(oa)
  return !t || tw(t) ? e : t
}
const nw = pa()
function ha(e = nw) {
  return gy(e)
}
function rw({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = ha(n),
    o = typeof e == 'function' ? e((t && r[t]) || r) : e
  return k.jsx(uy, { styles: o })
}
const ow = (e) => {
  var r
  const t = { systemProps: {}, otherProps: {} },
    n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Gi
  return (
    Object.keys(e).forEach((o) => {
      n[o] ? (t.systemProps[o] = e[o]) : (t.otherProps[o] = e[o])
    }),
    t
  )
}
function zd(e) {
  const { sx: t, ...n } = e,
    { systemProps: r, otherProps: o } = ow(n)
  let i
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == 'function'
        ? (i = (...s) => {
            const l = t(...s)
            return Sn(l) ? { ...r, ...l } : r
          })
        : (i = { ...r, ...t }),
    { ...o, sx: i }
  )
}
const Dp = (e) => e,
  iw = () => {
    let e = Dp
    return {
      configure(t) {
        e = t
      },
      generate(t) {
        return e(t)
      },
      reset() {
        e = Dp
      }
    }
  },
  yy = iw()
function vy(e) {
  var t,
    n,
    r = ''
  if (typeof e == 'string' || typeof e == 'number') r += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length
      for (t = 0; t < o; t++) e[t] && (n = vy(e[t])) && (r && (r += ' '), (r += n))
    } else for (n in e) e[n] && (r && (r += ' '), (r += n))
  return r
}
function H() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = vy(e)) && (r && (r += ' '), (r += t))
  return r
}
function sw(e = {}) {
  const { themeId: t, defaultTheme: n, defaultClassName: r = 'MuiBox-root', generateClassName: o } = e,
    i = cy('div', { shouldForwardProp: (l) => l !== 'theme' && l !== 'sx' && l !== 'as' })(lr)
  return S.forwardRef(function (a, u) {
    const d = ha(n),
      { className: f, component: p = 'div', ...x } = zd(a)
    return k.jsx(i, { as: p, ref: u, className: H(f, o ? o(r) : r), theme: (t && d[t]) || d, ...x })
  })
}
const lw = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
}
function re(e, t, n = 'Mui') {
  const r = lw[t]
  return r ? `${n}-${r}` : `${yy.generate(e)}-${t}`
}
function ne(e, t, n = 'Mui') {
  const r = {}
  return (
    t.forEach((o) => {
      r[o] = re(e, o, n)
    }),
    r
  )
}
function Sy(e) {
  const { variants: t, ...n } = e,
    r = { variants: t, style: Bp(n), isProcessed: !0 }
  return (
    r.style === n ||
      (t &&
        t.forEach((o) => {
          typeof o.style != 'function' && (o.style = Bp(o.style))
        })),
    r
  )
}
const aw = pa()
function lu(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
function uw(e) {
  return e ? (t, n) => n[e] : null
}
function cw(e, t, n) {
  e.theme = fw(e.theme) ? n : e.theme[t] || e.theme
}
function Bs(e, t) {
  const n = typeof t == 'function' ? t(e) : t
  if (Array.isArray(n)) return n.flatMap((r) => Bs(e, r))
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r
    if (n.isProcessed) r = n.style
    else {
      const { variants: o, ...i } = n
      r = i
    }
    return xy(e, n.variants, [r])
  }
  return n != null && n.isProcessed ? n.style : n
}
function xy(e, t, n = []) {
  var o
  let r
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i]
    if (typeof s.props == 'function') {
      if ((r ?? (r = { ...e, ...e.ownerState, ownerState: e.ownerState }), !s.props(r))) continue
    } else
      for (const l in s.props)
        if (e[l] !== s.props[l] && ((o = e.ownerState) == null ? void 0 : o[l]) !== s.props[l]) continue e
    typeof s.style == 'function'
      ? (r ?? (r = { ...e, ...e.ownerState, ownerState: e.ownerState }), n.push(s.style(r)))
      : n.push(s.style)
  }
  return n
}
function wy(e = {}) {
  const { themeId: t, defaultTheme: n = aw, rootShouldForwardProp: r = lu, slotShouldForwardProp: o = lu } = e
  function i(l) {
    cw(l, t, n)
  }
  return (l, a = {}) => {
    ox(l, (C) => C.filter((E) => E !== lr))
    const { name: u, slot: d, skipVariantsResolver: f, skipSx: p, overridesResolver: x = uw(hw(d)), ...v } = a,
      w = f !== void 0 ? f : (d && d !== 'Root' && d !== 'root') || !1,
      R = p || !1
    let m = lu
    d === 'Root' || d === 'root' ? (m = r) : d ? (m = o) : pw(l) && (m = void 0)
    const g = cy(l, { shouldForwardProp: m, label: dw(), ...v }),
      c = (C) => {
        if (typeof C == 'function' && C.__emotion_real !== C)
          return function (b) {
            return Bs(b, C)
          }
        if (Sn(C)) {
          const E = Sy(C)
          return E.variants
            ? function (T) {
                return Bs(T, E)
              }
            : E.style
        }
        return C
      },
      y = (...C) => {
        const E = [],
          b = C.map(c),
          T = []
        if (
          (E.push(i),
          u &&
            x &&
            T.push(function ($) {
              var z, D
              const B = (D = (z = $.theme.components) == null ? void 0 : z[u]) == null ? void 0 : D.styleOverrides
              if (!B) return null
              const A = {}
              for (const P in B) A[P] = Bs($, B[P])
              return x($, A)
            }),
          u &&
            !w &&
            T.push(function ($) {
              var A, z
              const N = $.theme,
                B = (z = (A = N == null ? void 0 : N.components) == null ? void 0 : A[u]) == null ? void 0 : z.variants
              return B ? xy($, B) : null
            }),
          R || T.push(lr),
          Array.isArray(b[0]))
        ) {
          const _ = b.shift(),
            $ = new Array(E.length).fill(''),
            N = new Array(T.length).fill('')
          let B
          ;(B = [...$, ..._, ...N]), (B.raw = [...$, ..._.raw, ...N]), E.unshift(B)
        }
        const I = [...E, ...b, ...T],
          h = g(...I)
        return l.muiName && (h.muiName = l.muiName), h
      }
    return g.withConfig && (y.withConfig = g.withConfig), y
  }
}
function dw(e, t) {
  return void 0
}
function fw(e) {
  for (const t in e) return !1
  return !0
}
function pw(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96
}
function hw(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1)
}
const mw = wy()
function Li(e, t) {
  const n = { ...t }
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r
      if (o === 'components' || o === 'slots') n[o] = { ...e[o], ...n[o] }
      else if (o === 'componentsProps' || o === 'slotProps') {
        const i = e[o],
          s = t[o]
        if (!s) n[o] = i || {}
        else if (!i) n[o] = s
        else {
          n[o] = { ...s }
          for (const l in i)
            if (Object.prototype.hasOwnProperty.call(i, l)) {
              const a = l
              n[o][a] = Li(i[a], s[a])
            }
        }
      } else n[o] === void 0 && (n[o] = e[o])
    }
  return n
}
function gw(e) {
  const { theme: t, name: n, props: r } = e
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps
    ? r
    : Li(t.components[n].defaultProps, r)
}
function yw({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = ha(n)
  return r && (o = o[r] || o), gw({ theme: o, name: t, props: e })
}
const Ar = typeof window < 'u' ? S.useLayoutEffect : S.useEffect
function vw(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n))
}
function jd(e, t = 0, n = 1) {
  return vw(e, t, n)
}
function Sw(e) {
  e = e.slice(1)
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g')
  let n = e.match(t)
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n.map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  )
}
function ar(e) {
  if (e.type) return e
  if (e.charAt(0) === '#') return ar(Sw(e))
  const t = e.indexOf('('),
    n = e.substring(0, t)
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(n)) throw new Error(jn(9, e))
  let r = e.substring(t + 1, e.length - 1),
    o
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(o))
    )
      throw new Error(jn(10, o))
  } else r = r.split(',')
  return (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
}
const xw = (e) => {
    const t = ar(e)
    return t.values
      .slice(0, 3)
      .map((n, r) => (t.type.includes('hsl') && r !== 0 ? `${n}%` : n))
      .join(' ')
  },
  Zo = (e, t) => {
    try {
      return xw(e)
    } catch {
      return e
    }
  }
function ma(e) {
  const { type: t, colorSpace: n } = e
  let { values: r } = e
  return (
    t.includes('rgb')
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.includes('hsl') && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.includes('color') ? (r = `${n} ${r.join(' ')}`) : (r = `${r.join(', ')}`),
    `${t}(${r})`
  )
}
function Cy(e) {
  e = ar(e)
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1)
  let l = 'rgb'
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)]
  return e.type === 'hsla' && ((l += 'a'), a.push(t[3])), ma({ type: l, values: a })
}
function mc(e) {
  e = ar(e)
  let t = e.type === 'hsl' || e.type === 'hsla' ? ar(Cy(e)).values : e.values
  return (
    (t = t.map((n) => (e.type !== 'color' && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4))),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  )
}
function ww(e, t) {
  const n = mc(e),
    r = mc(t)
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05)
}
function nn(e, t) {
  return (
    (e = ar(e)),
    (t = jd(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    ma(e)
  )
}
function hs(e, t, n) {
  try {
    return nn(e, t)
  } catch {
    return e
  }
}
function Dd(e, t) {
  if (((e = ar(e)), (t = jd(t)), e.type.includes('hsl'))) e.values[2] *= 1 - t
  else if (e.type.includes('rgb') || e.type.includes('color')) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t
  return ma(e)
}
function xe(e, t, n) {
  try {
    return Dd(e, t)
  } catch {
    return e
  }
}
function Fd(e, t) {
  if (((e = ar(e)), (t = jd(t)), e.type.includes('hsl'))) e.values[2] += (100 - e.values[2]) * t
  else if (e.type.includes('rgb')) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t
  else if (e.type.includes('color')) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t
  return ma(e)
}
function we(e, t, n) {
  try {
    return Fd(e, t)
  } catch {
    return e
  }
}
function ky(e, t = 0.15) {
  return mc(e) > 0.5 ? Dd(e, t) : Fd(e, t)
}
function ms(e, t, n) {
  try {
    return ky(e, t)
  } catch {
    return e
  }
}
function Fp(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o)
          },
    () => {}
  )
}
function Wd(e, t = 166) {
  let n
  function r(...o) {
    const i = () => {
      e.apply(this, o)
    }
    clearTimeout(n), (n = setTimeout(i, t))
  }
  return (
    (r.clear = () => {
      clearTimeout(n)
    }),
    r
  )
}
function zs(e, t) {
  var n, r, o
  return (
    S.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
    ) !== -1
  )
}
function Ct(e) {
  return (e && e.ownerDocument) || document
}
function cn(e) {
  return Ct(e).defaultView || window
}
function gc(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t)
}
let Wp = 0
function Cw(e) {
  const [t, n] = S.useState(e),
    r = e || t
  return (
    S.useEffect(() => {
      t == null && ((Wp += 1), n(`mui-${Wp}`))
    }, [t]),
    r
  )
}
const kw = { ...Su },
  Up = kw.useId
function Ud(e) {
  if (Up !== void 0) {
    const t = Up()
    return e ?? t
  }
  return Cw(e)
}
function Vp({ controlled: e, default: t, name: n, state: r = 'value' }) {
  const { current: o } = S.useRef(e !== void 0),
    [i, s] = S.useState(t),
    l = o ? e : i,
    a = S.useCallback((u) => {
      o || s(u)
    }, [])
  return [l, a]
}
function Mn(e) {
  const t = S.useRef(e)
  return (
    Ar(() => {
      t.current = e
    }),
    S.useRef((...n) => (0, t.current)(...n)).current
  )
}
function Ye(...e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              gc(n, t)
            })
          },
    e
  )
}
const Hp = {}
function by(e, t) {
  const n = S.useRef(Hp)
  return n.current === Hp && (n.current = e(t)), n
}
const bw = []
function Ew(e) {
  S.useEffect(e, bw)
}
class Vd {
  constructor() {
    $o(this, 'currentId', null)
    $o(this, 'clear', () => {
      this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null))
    })
    $o(this, 'disposeEffect', () => this.clear)
  }
  static create() {
    return new Vd()
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        ;(this.currentId = null), n()
      }, t))
  }
}
function Hd() {
  const e = by(Vd.create).current
  return Ew(e.disposeEffect), e
}
function Kp(e) {
  try {
    return e.matches(':focus-visible')
  } catch {}
  return !1
}
function Ey(e = window) {
  const t = e.document.documentElement.clientWidth
  return e.innerWidth - t
}
function se(e, t, n = void 0) {
  const r = {}
  for (const o in e) {
    const i = e[o]
    let s = '',
      l = !0
    for (let a = 0; a < i.length; a += 1) {
      const u = i[a]
      u && ((s += (l === !0 ? '' : ' ') + t(u)), (l = !1), n && n[u] && (s += ' ' + n[u]))
    }
    r[o] = s
  }
  return r
}
function Rw(e) {
  return typeof e == 'string'
}
function Ry(e, t, n) {
  return e === void 0 || Rw(e) ? t : { ...t, ownerState: { ...t.ownerState, ...n } }
}
function yl(e, t = []) {
  if (e === void 0) return {}
  const n = {}
  return (
    Object.keys(e)
      .filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == 'function' && !t.includes(r))
      .forEach((r) => {
        n[r] = e[r]
      }),
    n
  )
}
function Gp(e) {
  if (e === void 0) return {}
  const t = {}
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == 'function'))
      .forEach((n) => {
        t[n] = e[n]
      }),
    t
  )
}
function Ty(e) {
  const { getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: o, className: i } = e
  if (!t) {
    const x = H(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      v = { ...(n == null ? void 0 : n.style), ...(o == null ? void 0 : o.style), ...(r == null ? void 0 : r.style) },
      w = { ...n, ...o, ...r }
    return (
      x.length > 0 && (w.className = x), Object.keys(v).length > 0 && (w.style = v), { props: w, internalRef: void 0 }
    )
  }
  const s = yl({ ...o, ...r }),
    l = Gp(r),
    a = Gp(o),
    u = t(s),
    d = H(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    f = {
      ...(u == null ? void 0 : u.style),
      ...(n == null ? void 0 : n.style),
      ...(o == null ? void 0 : o.style),
      ...(r == null ? void 0 : r.style)
    },
    p = { ...u, ...n, ...a, ...l }
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), { props: p, internalRef: u.ref }
}
function Py(e, t, n) {
  return typeof e == 'function' ? e(t, n) : e
}
function yc(e) {
  var f
  const { elementType: t, externalSlotProps: n, ownerState: r, skipResolvingSlotProps: o = !1, ...i } = e,
    s = o ? {} : Py(n, r),
    { props: l, internalRef: a } = Ty({ ...i, externalSlotProps: s }),
    u = Ye(a, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref)
  return Ry(t, { ...l, ref: u }, r)
}
function Lr(e) {
  var t
  return parseInt(S.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null
}
const _y = S.createContext(null)
function Kd() {
  return S.useContext(_y)
}
const Tw = typeof Symbol == 'function' && Symbol.for,
  Pw = Tw ? Symbol.for('mui.nested') : '__THEME_NESTED__'
function _w(e, t) {
  return typeof t == 'function' ? t(e) : { ...e, ...t }
}
function Ow(e) {
  const { children: t, theme: n } = e,
    r = Kd(),
    o = S.useMemo(() => {
      const i = r === null ? { ...n } : _w(r, n)
      return i != null && (i[Pw] = r !== null), i
    }, [n, r])
  return k.jsx(_y.Provider, { value: o, children: t })
}
const Oy = S.createContext()
function Iw({ value: e, ...t }) {
  return k.jsx(Oy.Provider, { value: e ?? !0, ...t })
}
const Iy = () => S.useContext(Oy) ?? !1,
  Ay = S.createContext(void 0)
function Aw({ value: e, children: t }) {
  return k.jsx(Ay.Provider, { value: e, children: t })
}
function Mw(e) {
  const { theme: t, name: n, props: r } = e
  if (!t || !t.components || !t.components[n]) return r
  const o = t.components[n]
  return o.defaultProps ? Li(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Li(o, r) : r
}
function $w({ props: e, name: t }) {
  const n = S.useContext(Ay)
  return Mw({ props: e, name: t, theme: { components: n } })
}
const qp = {}
function Qp(e, t, n, r = !1) {
  return S.useMemo(() => {
    const o = (e && t[e]) || t
    if (typeof n == 'function') {
      const i = n(o),
        s = e ? { ...t, [e]: i } : i
      return r ? () => s : s
    }
    return e ? { ...t, [e]: n } : { ...t, ...n }
  }, [e, t, n, r])
}
function My(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = gy(qp),
    i = Kd() || qp,
    s = Qp(r, o, n),
    l = Qp(r, i, n, !0),
    a = s.direction === 'rtl'
  return k.jsx(Ow, {
    theme: l,
    children: k.jsx(oa.Provider, {
      value: s,
      children: k.jsx(Iw, { value: a, children: k.jsx(Aw, { value: s == null ? void 0 : s.components, children: t }) })
    })
  })
}
const Yp = { theme: void 0 }
function Nw(e) {
  let t, n
  return function (o) {
    let i = t
    return (i === void 0 || o.theme !== n) && ((Yp.theme = o.theme), (i = Sy(e(Yp))), (t = i), (n = o.theme)), i
  }
}
const Gd = 'mode',
  qd = 'color-scheme',
  Lw = 'data-color-scheme'
function Bw(e) {
  const {
    defaultMode: t = 'system',
    defaultLightColorScheme: n = 'light',
    defaultDarkColorScheme: r = 'dark',
    modeStorageKey: o = Gd,
    colorSchemeStorageKey: i = qd,
    attribute: s = Lw,
    colorSchemeNode: l = 'document.documentElement',
    nonce: a
  } = e || {}
  let u = '',
    d = s
  if ((s === 'class' && (d = '.%s'), s === 'data' && (d = '[data-%s]'), d.startsWith('.'))) {
    const p = d.substring(1)
    u += `${l}.classList.remove('${p}'.replace('%s', light), '${p}'.replace('%s', dark));
      ${l}.classList.add('${p}'.replace('%s', colorScheme));`
  }
  const f = d.match(/\[([^\]]+)\]/)
  if (f) {
    const [p, x] = f[1].split('=')
    x ||
      (u += `${l}.removeAttribute('${p}'.replace('%s', light));
      ${l}.removeAttribute('${p}'.replace('%s', dark));`),
      (u += `
      ${l}.setAttribute('${p}'.replace('%s', colorScheme), ${x ? `${x}.replace('%s', colorScheme)` : '""'});`)
  } else u += `${l}.setAttribute('${d}', colorScheme);`
  return k.jsx(
    'script',
    {
      suppressHydrationWarning: !0,
      nonce: typeof window > 'u' ? a : '',
      dangerouslySetInnerHTML: {
        __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`
      }
    },
    'mui-color-scheme-init'
  )
}
function Xp(e) {
  if (typeof window < 'u' && typeof window.matchMedia == 'function' && e === 'system')
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
function $y(e, t) {
  if (e.mode === 'light' || (e.mode === 'system' && e.systemMode === 'light')) return t('light')
  if (e.mode === 'dark' || (e.mode === 'system' && e.systemMode === 'dark')) return t('dark')
}
function zw(e) {
  return $y(e, (t) => {
    if (t === 'light') return e.lightColorScheme
    if (t === 'dark') return e.darkColorScheme
  })
}
function au(e, t) {
  if (typeof window > 'u') return
  let n
  try {
    ;(n = localStorage.getItem(e) || void 0), n || localStorage.setItem(e, t)
  } catch {}
  return n || t
}
function jw(e) {
  const {
      defaultMode: t = 'light',
      defaultLightColorScheme: n,
      defaultDarkColorScheme: r,
      supportedColorSchemes: o = [],
      modeStorageKey: i = Gd,
      colorSchemeStorageKey: s = qd,
      storageWindow: l = typeof window > 'u' ? void 0 : window
    } = e,
    a = o.join(','),
    u = o.length > 1,
    [d, f] = S.useState(() => {
      const c = au(i, t),
        y = au(`${s}-light`, n),
        C = au(`${s}-dark`, r)
      return { mode: c, systemMode: Xp(c), lightColorScheme: y, darkColorScheme: C }
    }),
    [, p] = S.useState(!1),
    x = S.useRef(!1)
  S.useEffect(() => {
    u && p(!0), (x.current = !0)
  }, [u])
  const v = zw(d),
    w = S.useCallback(
      (c) => {
        f((y) => {
          if (c === y.mode) return y
          const C = c ?? t
          try {
            localStorage.setItem(i, C)
          } catch {}
          return { ...y, mode: C, systemMode: Xp(C) }
        })
      },
      [i, t]
    ),
    R = S.useCallback(
      (c) => {
        c
          ? typeof c == 'string'
            ? c && !a.includes(c)
              ? console.error(`\`${c}\` does not exist in \`theme.colorSchemes\`.`)
              : f((y) => {
                  const C = { ...y }
                  return (
                    $y(y, (E) => {
                      try {
                        localStorage.setItem(`${s}-${E}`, c)
                      } catch {}
                      E === 'light' && (C.lightColorScheme = c), E === 'dark' && (C.darkColorScheme = c)
                    }),
                    C
                  )
                })
            : f((y) => {
                const C = { ...y },
                  E = c.light === null ? n : c.light,
                  b = c.dark === null ? r : c.dark
                if (E)
                  if (!a.includes(E)) console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`)
                  else {
                    C.lightColorScheme = E
                    try {
                      localStorage.setItem(`${s}-light`, E)
                    } catch {}
                  }
                if (b)
                  if (!a.includes(b)) console.error(`\`${b}\` does not exist in \`theme.colorSchemes\`.`)
                  else {
                    C.darkColorScheme = b
                    try {
                      localStorage.setItem(`${s}-dark`, b)
                    } catch {}
                  }
                return C
              })
          : f((y) => {
              try {
                localStorage.setItem(`${s}-light`, n), localStorage.setItem(`${s}-dark`, r)
              } catch {}
              return { ...y, lightColorScheme: n, darkColorScheme: r }
            })
      },
      [a, s, n, r]
    ),
    m = S.useCallback(
      (c) => {
        d.mode === 'system' &&
          f((y) => {
            const C = c != null && c.matches ? 'dark' : 'light'
            return y.systemMode === C ? y : { ...y, systemMode: C }
          })
      },
      [d.mode]
    ),
    g = S.useRef(m)
  return (
    (g.current = m),
    S.useEffect(() => {
      if (typeof window.matchMedia != 'function' || !u) return
      const c = (...C) => g.current(...C),
        y = window.matchMedia('(prefers-color-scheme: dark)')
      return (
        y.addListener(c),
        c(y),
        () => {
          y.removeListener(c)
        }
      )
    }, [u]),
    S.useEffect(() => {
      if (l && u) {
        const c = (y) => {
          const C = y.newValue
          typeof y.key == 'string' &&
            y.key.startsWith(s) &&
            (!C || a.match(C)) &&
            (y.key.endsWith('light') && R({ light: C }), y.key.endsWith('dark') && R({ dark: C })),
            y.key === i && (!C || ['light', 'dark', 'system'].includes(C)) && w(C || t)
        }
        return (
          l.addEventListener('storage', c),
          () => {
            l.removeEventListener('storage', c)
          }
        )
      }
    }, [R, w, i, s, a, t, l, u]),
    {
      ...d,
      mode: x.current || !u ? d.mode : void 0,
      systemMode: x.current || !u ? d.systemMode : void 0,
      colorScheme: x.current || !u ? v : void 0,
      setMode: w,
      setColorScheme: R
    }
  )
}
const Dw =
  '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
function Fw(e) {
  const {
      themeId: t,
      theme: n = {},
      modeStorageKey: r = Gd,
      colorSchemeStorageKey: o = qd,
      disableTransitionOnChange: i = !1,
      defaultColorScheme: s,
      resolveTheme: l
    } = e,
    a = {
      allColorSchemes: [],
      colorScheme: void 0,
      darkColorScheme: void 0,
      lightColorScheme: void 0,
      mode: void 0,
      setColorScheme: () => {},
      setMode: () => {},
      systemMode: void 0
    },
    u = S.createContext(void 0),
    d = () => S.useContext(u) || a
  function f(w) {
    var Lt, V, Ue, Fn, Bt
    const {
        children: R,
        theme: m,
        modeStorageKey: g = r,
        colorSchemeStorageKey: c = o,
        disableTransitionOnChange: y = i,
        storageWindow: C = typeof window > 'u' ? void 0 : window,
        documentNode: E = typeof document > 'u' ? void 0 : document,
        colorSchemeNode: b = typeof document > 'u' ? void 0 : document.documentElement,
        disableNestedContext: T = !1,
        disableStyleSheetGeneration: I = !1,
        defaultMode: h = 'system'
      } = w,
      _ = S.useRef(!1),
      $ = Kd(),
      N = S.useContext(u),
      B = !!N && !T,
      A = S.useMemo(() => m || (typeof n == 'function' ? n() : n), [m]),
      z = A[t],
      { colorSchemes: D = {}, components: P = {}, cssVarPrefix: M, ...j } = z || A,
      K = Object.keys(D)
        .filter((me) => !!D[me])
        .join(','),
      q = S.useMemo(() => K.split(','), [K]),
      X = typeof s == 'string' ? s : s.light,
      Q = typeof s == 'string' ? s : s.dark,
      ve =
        D[X] && D[Q]
          ? h
          : ((V = (Lt = D[j.defaultColorScheme]) == null ? void 0 : Lt.palette) == null ? void 0 : V.mode) ||
            ((Ue = j.palette) == null ? void 0 : Ue.mode),
      {
        mode: Se,
        setMode: Ie,
        systemMode: tt,
        lightColorScheme: Te,
        darkColorScheme: J,
        colorScheme: le,
        setColorScheme: Z
      } = jw({
        supportedColorSchemes: q,
        defaultLightColorScheme: X,
        defaultDarkColorScheme: Q,
        modeStorageKey: g,
        colorSchemeStorageKey: c,
        defaultMode: ve,
        storageWindow: C
      })
    let De = Se,
      Y = le
    B && ((De = N.mode), (Y = N.colorScheme))
    const ce = Y || j.defaultColorScheme,
      gt = ((Fn = j.generateThemeVars) == null ? void 0 : Fn.call(j)) || j.vars,
      Pe = { ...j, components: P, colorSchemes: D, cssVarPrefix: M, vars: gt }
    if ((typeof Pe.generateSpacing == 'function' && (Pe.spacing = Pe.generateSpacing()), ce)) {
      const me = D[ce]
      me &&
        typeof me == 'object' &&
        Object.keys(me).forEach((Ce) => {
          me[Ce] && typeof me[Ce] == 'object' ? (Pe[Ce] = { ...Pe[Ce], ...me[Ce] }) : (Pe[Ce] = me[Ce])
        })
    }
    const Ae = j.colorSchemeSelector
    S.useEffect(() => {
      if (Y && b && Ae && Ae !== 'media') {
        const me = Ae
        let Ce = Ae
        if (
          (me === 'class' && (Ce = '.%s'),
          me === 'data' && (Ce = '[data-%s]'),
          me != null && me.startsWith('data-') && !me.includes('%s') && (Ce = `[${me}="%s"]`),
          Ce.startsWith('.'))
        )
          b.classList.remove(...q.map((Et) => Ce.substring(1).replace('%s', Et))),
            b.classList.add(Ce.substring(1).replace('%s', Y))
        else {
          const Et = Ce.replace('%s', Y).match(/\[([^\]]+)\]/)
          if (Et) {
            const [Tn, ge] = Et[1].split('=')
            ge ||
              q.forEach((pr) => {
                b.removeAttribute(Tn.replace(Y, pr))
              }),
              b.setAttribute(Tn, ge ? ge.replace(/"|'/g, '') : '')
          } else b.setAttribute(Ce, Y)
        }
      }
    }, [Y, Ae, b, q]),
      S.useEffect(() => {
        let me
        if (y && _.current && E) {
          const Ce = E.createElement('style')
          Ce.appendChild(E.createTextNode(Dw)),
            E.head.appendChild(Ce),
            window.getComputedStyle(E.body),
            (me = setTimeout(() => {
              E.head.removeChild(Ce)
            }, 1))
        }
        return () => {
          clearTimeout(me)
        }
      }, [Y, y, E]),
      S.useEffect(
        () => (
          (_.current = !0),
          () => {
            _.current = !1
          }
        ),
        []
      )
    const Ge = S.useMemo(
      () => ({
        allColorSchemes: q,
        colorScheme: Y,
        darkColorScheme: J,
        lightColorScheme: Te,
        mode: De,
        setColorScheme: Z,
        setMode: Ie,
        systemMode: tt
      }),
      [q, Y, J, Te, De, Z, Ie, tt]
    )
    let bt = !0
    ;(I || j.cssVariables === !1 || (B && ($ == null ? void 0 : $.cssVarPrefix) === M)) && (bt = !1)
    const he = k.jsxs(S.Fragment, {
      children: [
        k.jsx(My, { themeId: z ? t : void 0, theme: l ? l(Pe) : Pe, children: R }),
        bt && k.jsx(uy, { styles: ((Bt = Pe.generateStyleSheets) == null ? void 0 : Bt.call(Pe)) || [] })
      ]
    })
    return B ? he : k.jsx(u.Provider, { value: Ge, children: he })
  }
  const p = typeof s == 'string' ? s : s.light,
    x = typeof s == 'string' ? s : s.dark
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (w) =>
      Bw({ colorSchemeStorageKey: o, defaultLightColorScheme: p, defaultDarkColorScheme: x, modeStorageKey: r, ...w })
  }
}
function Ww(e = '') {
  function t(...r) {
    if (!r.length) return ''
    const o = r[0]
    return typeof o == 'string' &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ''}${o}${t(...r.slice(1))})`
      : `, ${o}`
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ''}${r}${t(...o)})`
}
const Jp = (e, t, n, r = []) => {
    let o = e
    t.forEach((i, s) => {
      s === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(i)] = n)
          : o && typeof o == 'object' && (o[i] = n)
        : o && typeof o == 'object' && (o[i] || (o[i] = r.includes(i) ? [] : {}), (o = o[i]))
    })
  },
  Uw = (e, t, n) => {
    function r(o, i = [], s = []) {
      Object.entries(o).forEach(([l, a]) => {
        ;(!n || (n && !n([...i, l]))) &&
          a != null &&
          (typeof a == 'object' && Object.keys(a).length > 0
            ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s)
            : t([...i, l], a, s))
      })
    }
    r(e)
  },
  Vw = (e, t) =>
    typeof t == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((r) => e.includes(r)) ||
        e[e.length - 1].toLowerCase().includes('opacity')
        ? t
        : `${t}px`
      : t
function uu(e, t) {
  const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
    o = {},
    i = {},
    s = {}
  return (
    Uw(
      e,
      (l, a, u) => {
        if ((typeof a == 'string' || typeof a == 'number') && (!r || !r(l, a))) {
          const d = `--${n ? `${n}-` : ''}${l.join('-')}`,
            f = Vw(l, a)
          Object.assign(o, { [d]: f }), Jp(i, l, `var(${d})`, u), Jp(s, l, `var(${d}, ${f})`, u)
        }
      },
      (l) => l[0] === 'vars'
    ),
    { css: o, vars: i, varsWithDefaults: s }
  )
}
function Hw(e, t = {}) {
  const { getSelector: n = R, disableCssColorScheme: r, colorSchemeSelector: o } = t,
    { colorSchemes: i = {}, components: s, defaultColorScheme: l = 'light', ...a } = e,
    { vars: u, css: d, varsWithDefaults: f } = uu(a, t)
  let p = f
  const x = {},
    { [l]: v, ...w } = i
  if (
    (Object.entries(w || {}).forEach(([c, y]) => {
      const { vars: C, css: E, varsWithDefaults: b } = uu(y, t)
      ;(p = Ze(p, b)), (x[c] = { css: E, vars: C })
    }),
    v)
  ) {
    const { css: c, vars: y, varsWithDefaults: C } = uu(v, t)
    ;(p = Ze(p, C)), (x[l] = { css: c, vars: y })
  }
  function R(c, y) {
    var E, b
    let C = o
    if (
      (o === 'class' && (C = '.%s'),
      o === 'data' && (C = '[data-%s]'),
      o != null && o.startsWith('data-') && !o.includes('%s') && (C = `[${o}="%s"]`),
      c)
    ) {
      if (C === 'media')
        return e.defaultColorScheme === c
          ? ':root'
          : {
              [`@media (prefers-color-scheme: ${((b = (E = i[c]) == null ? void 0 : E.palette) == null ? void 0 : b.mode) || c})`]:
                { ':root': y }
            }
      if (C) return e.defaultColorScheme === c ? `:root, ${C.replace('%s', String(c))}` : C.replace('%s', String(c))
    }
    return ':root'
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let c = { ...u }
      return (
        Object.entries(x).forEach(([, { vars: y }]) => {
          c = Ze(c, y)
        }),
        c
      )
    },
    generateStyleSheets: () => {
      var T, I
      const c = [],
        y = e.defaultColorScheme || 'light'
      function C(h, _) {
        Object.keys(_).length && c.push(typeof h == 'string' ? { [h]: { ..._ } } : h)
      }
      C(n(void 0, { ...d }), d)
      const { [y]: E, ...b } = x
      if (E) {
        const { css: h } = E,
          _ = (I = (T = i[y]) == null ? void 0 : T.palette) == null ? void 0 : I.mode,
          $ = !r && _ ? { colorScheme: _, ...h } : { ...h }
        C(n(y, { ...$ }), $)
      }
      return (
        Object.entries(b).forEach(([h, { css: _ }]) => {
          var B, A
          const $ = (A = (B = i[h]) == null ? void 0 : B.palette) == null ? void 0 : A.mode,
            N = !r && $ ? { colorScheme: $, ..._ } : { ..._ }
          C(n(h, { ...N }), N)
        }),
        c
      )
    }
  }
}
function Kw(e) {
  return function (n) {
    return e === 'media'
      ? `@media (prefers-color-scheme: ${n})`
      : e
        ? e.startsWith('data-') && !e.includes('%s')
          ? `[${e}="${n}"] &`
          : e === 'class'
            ? `.${n} &`
            : e === 'data'
              ? `[data-${n}] &`
              : `${e.replace('%s', n)} &`
        : '&'
  }
}
const Gw = pa(),
  qw = mw('div', { name: 'MuiStack', slot: 'Root', overridesResolver: (e, t) => t.root })
function Qw(e) {
  return yw({ props: e, name: 'MuiStack', defaultTheme: Gw })
}
function Yw(e, t) {
  const n = S.Children.toArray(e).filter(Boolean)
  return n.reduce(
    (r, o, i) => (r.push(o), i < n.length - 1 && r.push(S.cloneElement(t, { key: `separator-${i}` })), r),
    []
  )
}
const Xw = (e) => ({ row: 'Left', 'row-reverse': 'Right', column: 'Top', 'column-reverse': 'Bottom' })[e],
  Jw = ({ ownerState: e, theme: t }) => {
    let n = {
      display: 'flex',
      flexDirection: 'column',
      ...un({ theme: t }, su({ values: e.direction, breakpoints: t.breakpoints.values }), (r) => ({ flexDirection: r }))
    }
    if (e.spacing) {
      const r = la(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (a, u) => (
            ((typeof e.spacing == 'object' && e.spacing[u] != null) ||
              (typeof e.direction == 'object' && e.direction[u] != null)) &&
              (a[u] = !0),
            a
          ),
          {}
        ),
        i = su({ values: e.direction, base: o }),
        s = su({ values: e.spacing, base: o })
      typeof i == 'object' &&
        Object.keys(i).forEach((a, u, d) => {
          if (!i[a]) {
            const p = u > 0 ? i[d[u - 1]] : 'column'
            i[a] = p
          }
        }),
        (n = Ze(
          n,
          un({ theme: t }, s, (a, u) =>
            e.useFlexGap
              ? { gap: Ir(r, a) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': { [`margin${Xw(u ? i[u] : e.direction)}`]: Ir(r, a) }
                }
          )
        ))
    }
    return (n = px(t.breakpoints, n)), n
  }
function Zw(e = {}) {
  const { createStyledComponent: t = qw, useThemeProps: n = Qw, componentName: r = 'MuiStack' } = e,
    o = () => se({ root: ['root'] }, (a) => re(r, a), {}),
    i = t(Jw)
  return S.forwardRef(function (a, u) {
    const d = n(a),
      f = zd(d),
      {
        component: p = 'div',
        direction: x = 'column',
        spacing: v = 0,
        divider: w,
        children: R,
        className: m,
        useFlexGap: g = !1,
        ...c
      } = f,
      y = { direction: x, spacing: v, useFlexGap: g },
      C = o()
    return k.jsx(i, { as: p, ownerState: y, ref: u, className: H(C.root, m), ...c, children: w ? Yw(R, w) : R })
  })
}
const Bi = { black: '#000', white: '#fff' },
  eC = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
  },
  Fr = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  },
  Wr = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  },
  Vo = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  },
  Ur = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  },
  Vr = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  },
  Hr = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  }
function Ny() {
  return {
    text: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)' },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Bi.white, default: Bi.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  }
}
const tC = Ny()
function Ly() {
  return {
    text: {
      primary: Bi.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Bi.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  }
}
const Zp = Ly()
function eh(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
        ? (e.light = Fd(e.main, o))
        : t === 'dark' && (e.dark = Dd(e.main, i)))
}
function nC(e = 'light') {
  return e === 'dark'
    ? { main: Ur[200], light: Ur[50], dark: Ur[400] }
    : { main: Ur[700], light: Ur[400], dark: Ur[800] }
}
function rC(e = 'light') {
  return e === 'dark'
    ? { main: Fr[200], light: Fr[50], dark: Fr[400] }
    : { main: Fr[500], light: Fr[300], dark: Fr[700] }
}
function oC(e = 'light') {
  return e === 'dark'
    ? { main: Wr[500], light: Wr[300], dark: Wr[700] }
    : { main: Wr[700], light: Wr[400], dark: Wr[800] }
}
function iC(e = 'light') {
  return e === 'dark'
    ? { main: Vr[400], light: Vr[300], dark: Vr[700] }
    : { main: Vr[700], light: Vr[500], dark: Vr[900] }
}
function sC(e = 'light') {
  return e === 'dark'
    ? { main: Hr[400], light: Hr[300], dark: Hr[700] }
    : { main: Hr[800], light: Hr[500], dark: Hr[900] }
}
function lC(e = 'light') {
  return e === 'dark'
    ? { main: Vo[400], light: Vo[300], dark: Vo[700] }
    : { main: '#ed6c02', light: Vo[500], dark: Vo[900] }
}
function Qd(e) {
  const { mode: t = 'light', contrastThreshold: n = 3, tonalOffset: r = 0.2, ...o } = e,
    i = e.primary || nC(t),
    s = e.secondary || rC(t),
    l = e.error || oC(t),
    a = e.info || iC(t),
    u = e.success || sC(t),
    d = e.warning || lC(t)
  function f(w) {
    return ww(w, Zp.text.primary) >= n ? Zp.text.primary : tC.text.primary
  }
  const p = ({ color: w, name: R, mainShade: m = 500, lightShade: g = 300, darkShade: c = 700 }) => {
    if (((w = { ...w }), !w.main && w[m] && (w.main = w[m]), !w.hasOwnProperty('main')))
      throw new Error(jn(11, R ? ` (${R})` : '', m))
    if (typeof w.main != 'string') throw new Error(jn(12, R ? ` (${R})` : '', JSON.stringify(w.main)))
    return eh(w, 'light', g, r), eh(w, 'dark', c, r), w.contrastText || (w.contrastText = f(w.main)), w
  }
  let x
  return (
    t === 'light' ? (x = Ny()) : t === 'dark' && (x = Ly()),
    Ze(
      {
        common: { ...Bi },
        mode: t,
        primary: p({ color: i, name: 'primary' }),
        secondary: p({ color: s, name: 'secondary', mainShade: 'A400', lightShade: 'A200', darkShade: 'A700' }),
        error: p({ color: l, name: 'error' }),
        warning: p({ color: d, name: 'warning' }),
        info: p({ color: a, name: 'info' }),
        success: p({ color: u, name: 'success' }),
        grey: eC,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: p,
        tonalOffset: r,
        ...x
      },
      o
    )
  )
}
function aC(e) {
  const t = {}
  return (
    Object.entries(e).forEach((r) => {
      const [o, i] = r
      typeof i == 'object' &&
        (t[o] =
          `${i.fontStyle ? `${i.fontStyle} ` : ''}${i.fontVariant ? `${i.fontVariant} ` : ''}${i.fontWeight ? `${i.fontWeight} ` : ''}${i.fontStretch ? `${i.fontStretch} ` : ''}${i.fontSize || ''}${i.lineHeight ? `/${i.lineHeight} ` : ''}${i.fontFamily || ''}`)
    }),
    t
  )
}
function uC(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [e.up('sm')]: { minHeight: 64 }
    },
    ...t
  }
}
function cC(e) {
  return Math.round(e * 1e5) / 1e5
}
const th = { textTransform: 'uppercase' },
  nh = '"Roboto", "Helvetica", "Arial", sans-serif'
function By(e, t) {
  const {
      fontFamily: n = nh,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: l = 700,
      htmlFontSize: a = 16,
      allVariants: u,
      pxToRem: d,
      ...f
    } = typeof t == 'function' ? t(e) : t,
    p = r / 14,
    x = d || ((R) => `${(R / a) * p}rem`),
    v = (R, m, g, c, y) => ({
      fontFamily: n,
      fontWeight: R,
      fontSize: x(m),
      lineHeight: g,
      ...(n === nh ? { letterSpacing: `${cC(c / m)}em` } : {}),
      ...y,
      ...u
    }),
    w = {
      h1: v(o, 96, 1.167, -1.5),
      h2: v(o, 60, 1.2, -0.5),
      h3: v(i, 48, 1.167, 0),
      h4: v(i, 34, 1.235, 0.25),
      h5: v(i, 24, 1.334, 0),
      h6: v(s, 20, 1.6, 0.15),
      subtitle1: v(i, 16, 1.75, 0.15),
      subtitle2: v(s, 14, 1.57, 0.1),
      body1: v(i, 16, 1.5, 0.15),
      body2: v(i, 14, 1.43, 0.15),
      button: v(s, 14, 1.75, 0.4, th),
      caption: v(i, 12, 1.66, 0.4),
      overline: v(i, 12, 2.66, 1, th),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      }
    }
  return Ze(
    {
      htmlFontSize: a,
      pxToRem: x,
      fontFamily: n,
      fontSize: r,
      fontWeightLight: o,
      fontWeightRegular: i,
      fontWeightMedium: s,
      fontWeightBold: l,
      ...w
    },
    f,
    { clone: !1 }
  )
}
const dC = 0.2,
  fC = 0.14,
  pC = 0.12
function _e(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${dC})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${fC})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${pC})`
  ].join(',')
}
const hC = [
    'none',
    _e(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    _e(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    _e(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    _e(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    _e(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    _e(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    _e(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    _e(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    _e(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    _e(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    _e(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    _e(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    _e(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    _e(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    _e(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    _e(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    _e(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    _e(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    _e(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    _e(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    _e(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    _e(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    _e(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    _e(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ],
  mC = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  },
  gC = { shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195 }
function rh(e) {
  return `${Math.round(e)}ms`
}
function yC(e) {
  if (!e) return 0
  const t = e / 36
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3)
}
function vC(e) {
  const t = { ...mC, ...e.easing },
    n = { ...gC, ...e.duration }
  return {
    getAutoHeightDuration: yC,
    create: (o = ['all'], i = {}) => {
      const { duration: s = n.standard, easing: l = t.easeInOut, delay: a = 0, ...u } = i
      return (Array.isArray(o) ? o : [o])
        .map((d) => `${d} ${typeof s == 'string' ? s : rh(s)} ${l} ${typeof a == 'string' ? a : rh(a)}`)
        .join(',')
    },
    ...e,
    easing: t,
    duration: n
  }
}
const SC = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}
function xC(e) {
  return (
    Sn(e) || typeof e > 'u' || typeof e == 'string' || typeof e == 'boolean' || typeof e == 'number' || Array.isArray(e)
  )
}
function zy(e = {}) {
  const t = { ...e }
  function n(r) {
    const o = Object.entries(r)
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i]
      !xC(l) || s.startsWith('unstable_') ? delete r[s] : Sn(l) && ((r[s] = { ...l }), n(r[s]))
    }
  }
  return (
    n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  )
}
function vc(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: l = {},
    shape: a,
    ...u
  } = e
  if (e.vars) throw new Error(jn(20))
  const d = Qd(i),
    f = pa(e)
  let p = Ze(f, {
    mixins: uC(f.breakpoints, r),
    palette: d,
    shadows: hC.slice(),
    typography: By(d, l),
    transitions: vC(s),
    zIndex: { ...SC }
  })
  return (
    (p = Ze(p, u)),
    (p = t.reduce((x, v) => Ze(x, v), p)),
    (p.unstable_sxConfig = { ...Gi, ...(u == null ? void 0 : u.unstable_sxConfig) }),
    (p.unstable_sx = function (v) {
      return lr({ sx: v, theme: this })
    }),
    (p.toRuntimeSource = zy),
    p
  )
}
function Sc(e) {
  let t
  return e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2), Math.round(t * 10) / 1e3
}
const wC = [...Array(25)].map((e, t) => {
  if (t === 0) return 'none'
  const n = Sc(t)
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`
})
function jy(e) {
  return {
    inputPlaceholder: e === 'dark' ? 0.5 : 0.42,
    inputUnderline: e === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: e === 'dark' ? 0.2 : 0.12,
    switchTrack: e === 'dark' ? 0.3 : 0.38
  }
}
function Dy(e) {
  return e === 'dark' ? wC : []
}
function CC(e) {
  const { palette: t = { mode: 'light' }, opacity: n, overlays: r, ...o } = e,
    i = Qd(t)
  return { palette: i, opacity: { ...jy(i.mode), ...n }, overlays: r || Dy(i.mode), ...o }
}
function kC(e) {
  var t
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === 'palette' && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  )
}
const bC = (e) => [
    ...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ''}overlays-${n}`),
    `--${e ? `${e}-` : ''}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ''}palette-AppBar-darkColor`
  ],
  EC = (e) => (t, n) => {
    const r = e.rootSelector || ':root',
      o = e.colorSchemeSelector
    let i = o
    if (
      (o === 'class' && (i = '.%s'),
      o === 'data' && (i = '[data-%s]'),
      o != null && o.startsWith('data-') && !o.includes('%s') && (i = `[${o}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === 'dark') {
        const s = {}
        return (
          bC(e.cssVarPrefix).forEach((l) => {
            ;(s[l] = n[l]), delete n[l]
          }),
          i === 'media'
            ? { [r]: n, '@media (prefers-color-scheme: dark)': { [r]: s } }
            : i
              ? { [i.replace('%s', t)]: s, [`${r}, ${i.replace('%s', t)}`]: n }
              : { [r]: { ...n, ...s } }
        )
      }
      if (i && i !== 'media') return `${r}, ${i.replace('%s', String(t))}`
    } else if (t) {
      if (i === 'media') return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } }
      if (i) return i.replace('%s', String(t))
    }
    return r
  }
function RC(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {})
  })
}
function O(e, t, n) {
  !e[t] && n && (e[t] = n)
}
function ei(e) {
  return !e || !e.startsWith('hsl') ? e : Cy(e)
}
function Pn(e, t) {
  ;`${t}Channel` in e ||
    (e[`${t}Channel`] = Zo(
      ei(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ))
}
function TC(e) {
  return typeof e == 'number'
    ? `${e}px`
    : typeof e == 'string' || typeof e == 'function' || Array.isArray(e)
      ? e
      : '8px'
}
const pn = (e) => {
    try {
      return e()
    } catch {}
  },
  PC = (e = 'mui') => Ww(e)
function cu(e, t, n, r) {
  if (!t) return
  t = t === !0 ? {} : t
  const o = r === 'dark' ? 'dark' : 'light'
  if (!n) {
    e[r] = CC({ ...t, palette: { mode: o, ...(t == null ? void 0 : t.palette) } })
    return
  }
  const { palette: i, ...s } = vc({ ...n, palette: { mode: o, ...(t == null ? void 0 : t.palette) } })
  return (
    (e[r] = {
      ...t,
      palette: i,
      opacity: { ...jy(o), ...(t == null ? void 0 : t.opacity) },
      overlays: (t == null ? void 0 : t.overlays) || Dy(o)
    }),
    s
  )
}
function _C(e = {}, ...t) {
  const {
      colorSchemes: n = { light: !0 },
      defaultColorScheme: r,
      disableCssColorScheme: o = !1,
      cssVarPrefix: i = 'mui',
      shouldSkipGeneratingVar: s = kC,
      colorSchemeSelector: l = n.light && n.dark ? 'media' : void 0,
      rootSelector: a = ':root',
      ...u
    } = e,
    d = Object.keys(n)[0],
    f = r || (n.light && d !== 'light' ? 'light' : d),
    p = PC(i),
    { [f]: x, light: v, dark: w, ...R } = n,
    m = { ...R }
  let g = x
  if ((((f === 'dark' && !('dark' in n)) || (f === 'light' && !('light' in n))) && (g = !0), !g))
    throw new Error(jn(21, f))
  const c = cu(m, g, u, f)
  v && !m.light && cu(m, v, void 0, 'light'), w && !m.dark && cu(m, w, void 0, 'dark')
  let y = {
    defaultColorScheme: f,
    ...c,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: a,
    getCssVar: p,
    colorSchemes: m,
    font: { ...aC(c.typography), ...c.font },
    spacing: TC(u.spacing)
  }
  Object.keys(y.colorSchemes).forEach((I) => {
    const h = y.colorSchemes[I].palette,
      _ = ($) => {
        const N = $.split('-'),
          B = N[1],
          A = N[2]
        return p($, h[B][A])
      }
    if (
      (h.mode === 'light' && (O(h.common, 'background', '#fff'), O(h.common, 'onBackground', '#000')),
      h.mode === 'dark' && (O(h.common, 'background', '#000'), O(h.common, 'onBackground', '#fff')),
      RC(h, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip'
      ]),
      h.mode === 'light')
    ) {
      O(h.Alert, 'errorColor', xe(h.error.light, 0.6)),
        O(h.Alert, 'infoColor', xe(h.info.light, 0.6)),
        O(h.Alert, 'successColor', xe(h.success.light, 0.6)),
        O(h.Alert, 'warningColor', xe(h.warning.light, 0.6)),
        O(h.Alert, 'errorFilledBg', _('palette-error-main')),
        O(h.Alert, 'infoFilledBg', _('palette-info-main')),
        O(h.Alert, 'successFilledBg', _('palette-success-main')),
        O(h.Alert, 'warningFilledBg', _('palette-warning-main')),
        O(
          h.Alert,
          'errorFilledColor',
          pn(() => h.getContrastText(h.error.main))
        ),
        O(
          h.Alert,
          'infoFilledColor',
          pn(() => h.getContrastText(h.info.main))
        ),
        O(
          h.Alert,
          'successFilledColor',
          pn(() => h.getContrastText(h.success.main))
        ),
        O(
          h.Alert,
          'warningFilledColor',
          pn(() => h.getContrastText(h.warning.main))
        ),
        O(h.Alert, 'errorStandardBg', we(h.error.light, 0.9)),
        O(h.Alert, 'infoStandardBg', we(h.info.light, 0.9)),
        O(h.Alert, 'successStandardBg', we(h.success.light, 0.9)),
        O(h.Alert, 'warningStandardBg', we(h.warning.light, 0.9)),
        O(h.Alert, 'errorIconColor', _('palette-error-main')),
        O(h.Alert, 'infoIconColor', _('palette-info-main')),
        O(h.Alert, 'successIconColor', _('palette-success-main')),
        O(h.Alert, 'warningIconColor', _('palette-warning-main')),
        O(h.AppBar, 'defaultBg', _('palette-grey-100')),
        O(h.Avatar, 'defaultBg', _('palette-grey-400')),
        O(h.Button, 'inheritContainedBg', _('palette-grey-300')),
        O(h.Button, 'inheritContainedHoverBg', _('palette-grey-A100')),
        O(h.Chip, 'defaultBorder', _('palette-grey-400')),
        O(h.Chip, 'defaultAvatarColor', _('palette-grey-700')),
        O(h.Chip, 'defaultIconColor', _('palette-grey-700')),
        O(h.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        O(h.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        O(h.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        O(h.LinearProgress, 'primaryBg', we(h.primary.main, 0.62)),
        O(h.LinearProgress, 'secondaryBg', we(h.secondary.main, 0.62)),
        O(h.LinearProgress, 'errorBg', we(h.error.main, 0.62)),
        O(h.LinearProgress, 'infoBg', we(h.info.main, 0.62)),
        O(h.LinearProgress, 'successBg', we(h.success.main, 0.62)),
        O(h.LinearProgress, 'warningBg', we(h.warning.main, 0.62)),
        O(h.Skeleton, 'bg', `rgba(${_('palette-text-primaryChannel')} / 0.11)`),
        O(h.Slider, 'primaryTrack', we(h.primary.main, 0.62)),
        O(h.Slider, 'secondaryTrack', we(h.secondary.main, 0.62)),
        O(h.Slider, 'errorTrack', we(h.error.main, 0.62)),
        O(h.Slider, 'infoTrack', we(h.info.main, 0.62)),
        O(h.Slider, 'successTrack', we(h.success.main, 0.62)),
        O(h.Slider, 'warningTrack', we(h.warning.main, 0.62))
      const $ = ms(h.background.default, 0.8)
      O(h.SnackbarContent, 'bg', $),
        O(
          h.SnackbarContent,
          'color',
          pn(() => h.getContrastText($))
        ),
        O(h.SpeedDialAction, 'fabHoverBg', ms(h.background.paper, 0.15)),
        O(h.StepConnector, 'border', _('palette-grey-400')),
        O(h.StepContent, 'border', _('palette-grey-400')),
        O(h.Switch, 'defaultColor', _('palette-common-white')),
        O(h.Switch, 'defaultDisabledColor', _('palette-grey-100')),
        O(h.Switch, 'primaryDisabledColor', we(h.primary.main, 0.62)),
        O(h.Switch, 'secondaryDisabledColor', we(h.secondary.main, 0.62)),
        O(h.Switch, 'errorDisabledColor', we(h.error.main, 0.62)),
        O(h.Switch, 'infoDisabledColor', we(h.info.main, 0.62)),
        O(h.Switch, 'successDisabledColor', we(h.success.main, 0.62)),
        O(h.Switch, 'warningDisabledColor', we(h.warning.main, 0.62)),
        O(h.TableCell, 'border', we(hs(h.divider, 1), 0.88)),
        O(h.Tooltip, 'bg', hs(h.grey[700], 0.92))
    }
    if (h.mode === 'dark') {
      O(h.Alert, 'errorColor', we(h.error.light, 0.6)),
        O(h.Alert, 'infoColor', we(h.info.light, 0.6)),
        O(h.Alert, 'successColor', we(h.success.light, 0.6)),
        O(h.Alert, 'warningColor', we(h.warning.light, 0.6)),
        O(h.Alert, 'errorFilledBg', _('palette-error-dark')),
        O(h.Alert, 'infoFilledBg', _('palette-info-dark')),
        O(h.Alert, 'successFilledBg', _('palette-success-dark')),
        O(h.Alert, 'warningFilledBg', _('palette-warning-dark')),
        O(
          h.Alert,
          'errorFilledColor',
          pn(() => h.getContrastText(h.error.dark))
        ),
        O(
          h.Alert,
          'infoFilledColor',
          pn(() => h.getContrastText(h.info.dark))
        ),
        O(
          h.Alert,
          'successFilledColor',
          pn(() => h.getContrastText(h.success.dark))
        ),
        O(
          h.Alert,
          'warningFilledColor',
          pn(() => h.getContrastText(h.warning.dark))
        ),
        O(h.Alert, 'errorStandardBg', xe(h.error.light, 0.9)),
        O(h.Alert, 'infoStandardBg', xe(h.info.light, 0.9)),
        O(h.Alert, 'successStandardBg', xe(h.success.light, 0.9)),
        O(h.Alert, 'warningStandardBg', xe(h.warning.light, 0.9)),
        O(h.Alert, 'errorIconColor', _('palette-error-main')),
        O(h.Alert, 'infoIconColor', _('palette-info-main')),
        O(h.Alert, 'successIconColor', _('palette-success-main')),
        O(h.Alert, 'warningIconColor', _('palette-warning-main')),
        O(h.AppBar, 'defaultBg', _('palette-grey-900')),
        O(h.AppBar, 'darkBg', _('palette-background-paper')),
        O(h.AppBar, 'darkColor', _('palette-text-primary')),
        O(h.Avatar, 'defaultBg', _('palette-grey-600')),
        O(h.Button, 'inheritContainedBg', _('palette-grey-800')),
        O(h.Button, 'inheritContainedHoverBg', _('palette-grey-700')),
        O(h.Chip, 'defaultBorder', _('palette-grey-700')),
        O(h.Chip, 'defaultAvatarColor', _('palette-grey-300')),
        O(h.Chip, 'defaultIconColor', _('palette-grey-300')),
        O(h.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        O(h.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        O(h.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        O(h.LinearProgress, 'primaryBg', xe(h.primary.main, 0.5)),
        O(h.LinearProgress, 'secondaryBg', xe(h.secondary.main, 0.5)),
        O(h.LinearProgress, 'errorBg', xe(h.error.main, 0.5)),
        O(h.LinearProgress, 'infoBg', xe(h.info.main, 0.5)),
        O(h.LinearProgress, 'successBg', xe(h.success.main, 0.5)),
        O(h.LinearProgress, 'warningBg', xe(h.warning.main, 0.5)),
        O(h.Skeleton, 'bg', `rgba(${_('palette-text-primaryChannel')} / 0.13)`),
        O(h.Slider, 'primaryTrack', xe(h.primary.main, 0.5)),
        O(h.Slider, 'secondaryTrack', xe(h.secondary.main, 0.5)),
        O(h.Slider, 'errorTrack', xe(h.error.main, 0.5)),
        O(h.Slider, 'infoTrack', xe(h.info.main, 0.5)),
        O(h.Slider, 'successTrack', xe(h.success.main, 0.5)),
        O(h.Slider, 'warningTrack', xe(h.warning.main, 0.5))
      const $ = ms(h.background.default, 0.98)
      O(h.SnackbarContent, 'bg', $),
        O(
          h.SnackbarContent,
          'color',
          pn(() => h.getContrastText($))
        ),
        O(h.SpeedDialAction, 'fabHoverBg', ms(h.background.paper, 0.15)),
        O(h.StepConnector, 'border', _('palette-grey-600')),
        O(h.StepContent, 'border', _('palette-grey-600')),
        O(h.Switch, 'defaultColor', _('palette-grey-300')),
        O(h.Switch, 'defaultDisabledColor', _('palette-grey-600')),
        O(h.Switch, 'primaryDisabledColor', xe(h.primary.main, 0.55)),
        O(h.Switch, 'secondaryDisabledColor', xe(h.secondary.main, 0.55)),
        O(h.Switch, 'errorDisabledColor', xe(h.error.main, 0.55)),
        O(h.Switch, 'infoDisabledColor', xe(h.info.main, 0.55)),
        O(h.Switch, 'successDisabledColor', xe(h.success.main, 0.55)),
        O(h.Switch, 'warningDisabledColor', xe(h.warning.main, 0.55)),
        O(h.TableCell, 'border', xe(hs(h.divider, 1), 0.68)),
        O(h.Tooltip, 'bg', hs(h.grey[700], 0.92))
    }
    Pn(h.background, 'default'),
      Pn(h.background, 'paper'),
      Pn(h.common, 'background'),
      Pn(h.common, 'onBackground'),
      Pn(h, 'divider'),
      Object.keys(h).forEach(($) => {
        const N = h[$]
        N &&
          typeof N == 'object' &&
          (N.main && O(h[$], 'mainChannel', Zo(ei(N.main))),
          N.light && O(h[$], 'lightChannel', Zo(ei(N.light))),
          N.dark && O(h[$], 'darkChannel', Zo(ei(N.dark))),
          N.contrastText && O(h[$], 'contrastTextChannel', Zo(ei(N.contrastText))),
          $ === 'text' && (Pn(h[$], 'primary'), Pn(h[$], 'secondary')),
          $ === 'action' && (N.active && Pn(h[$], 'active'), N.selected && Pn(h[$], 'selected')))
      })
  }),
    (y = t.reduce((I, h) => Ze(I, h), y))
  const C = { prefix: i, disableCssColorScheme: o, shouldSkipGeneratingVar: s, getSelector: EC(y) },
    { vars: E, generateThemeVars: b, generateStyleSheets: T } = Hw(y, C)
  return (
    (y.vars = E),
    Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([I, h]) => {
      y[I] = h
    }),
    (y.generateThemeVars = b),
    (y.generateStyleSheets = T),
    (y.generateSpacing = function () {
      return my(u.spacing, la(this))
    }),
    (y.getColorSchemeSelector = Kw(l)),
    (y.spacing = y.generateSpacing()),
    (y.shouldSkipGeneratingVar = s),
    (y.unstable_sxConfig = { ...Gi, ...(u == null ? void 0 : u.unstable_sxConfig) }),
    (y.unstable_sx = function (h) {
      return lr({ sx: h, theme: this })
    }),
    (y.toRuntimeSource = zy),
    y
  )
}
function oh(e, t, n) {
  e.colorSchemes &&
    n &&
    (e.colorSchemes[t] = { ...(n !== !0 && n), palette: Qd({ ...(n === !0 ? {} : n.palette), mode: t }) })
}
function ga(e = {}, ...t) {
  const {
      palette: n,
      cssVariables: r = !1,
      colorSchemes: o = n ? void 0 : { light: !0 },
      defaultColorScheme: i = n == null ? void 0 : n.mode,
      ...s
    } = e,
    l = i || 'light',
    a = o == null ? void 0 : o[l],
    u = { ...o, ...(n ? { [l]: { ...(typeof a != 'boolean' && a), palette: n } } : void 0) }
  if (r === !1) {
    if (!('colorSchemes' in e)) return vc(e, ...t)
    let d = n
    'palette' in e || (u[l] && (u[l] !== !0 ? (d = u[l].palette) : l === 'dark' && (d = { mode: 'dark' })))
    const f = vc({ ...e, palette: d }, ...t)
    return (
      (f.defaultColorScheme = l),
      (f.colorSchemes = u),
      f.palette.mode === 'light' &&
        ((f.colorSchemes.light = { ...(u.light !== !0 && u.light), palette: f.palette }), oh(f, 'dark', u.dark)),
      f.palette.mode === 'dark' &&
        ((f.colorSchemes.dark = { ...(u.dark !== !0 && u.dark), palette: f.palette }), oh(f, 'light', u.light)),
      f
    )
  }
  return (
    !n && !('light' in u) && l === 'light' && (u.light = !0),
    _C({ ...s, colorSchemes: u, defaultColorScheme: l, ...(typeof r != 'boolean' && r) }, ...t)
  )
}
const Yd = ga()
function Br() {
  const e = ha(Yd)
  return e[kn] || e
}
function Fy(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as'
}
const qt = (e) => Fy(e) && e !== 'classes',
  W = wy({ themeId: kn, defaultTheme: Yd, rootShouldForwardProp: qt })
function ih({ theme: e, ...t }) {
  const n = kn in e ? e[kn] : void 0
  return k.jsx(My, { ...t, themeId: n ? kn : void 0, theme: n || e })
}
const gs = {
    attribute: 'data-mui-color-scheme',
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultLightColorScheme: 'light',
    defaultDarkColorScheme: 'dark',
    modeStorageKey: 'mui-mode'
  },
  {
    CssVarsProvider: OC,
    useColorScheme: KR,
    getInitColorSchemeScript: GR
  } = Fw({
    themeId: kn,
    theme: () => ga({ cssVariables: !0 }),
    colorSchemeStorageKey: gs.colorSchemeStorageKey,
    modeStorageKey: gs.modeStorageKey,
    defaultColorScheme: { light: gs.defaultLightColorScheme, dark: gs.defaultDarkColorScheme },
    resolveTheme: (e) => {
      const t = { ...e, typography: By(e.palette, e.typography) }
      return (
        (t.unstable_sx = function (r) {
          return lr({ sx: r, theme: this })
        }),
        t
      )
    }
  }),
  IC = OC
function AC({ theme: e, ...t }) {
  return typeof e == 'function'
    ? k.jsx(ih, { theme: e, ...t })
    : 'colorSchemes' in (kn in e ? e[kn] : e)
      ? k.jsx(IC, { theme: e, ...t })
      : k.jsx(ih, { theme: e, ...t })
}
function MC(e) {
  return k.jsx(rw, { ...e, defaultTheme: Yd, themeId: kn })
}
function Xd(e) {
  return function (n) {
    return k.jsx(MC, { styles: typeof e == 'function' ? (r) => e({ theme: r, ...n }) : e })
  }
}
function $C() {
  return zd
}
function oe(e) {
  return $w(e)
}
const xc = typeof Xd({}) == 'function',
  NC = (e, t) => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    WebkitTextSizeAdjust: '100%',
    ...(t && !e.vars && { colorScheme: e.palette.mode })
  }),
  LC = (e) => ({
    color: (e.vars || e).palette.text.primary,
    ...e.typography.body1,
    backgroundColor: (e.vars || e).palette.background.default,
    '@media print': { backgroundColor: (e.vars || e).palette.common.white }
  }),
  Wy = (e, t = !1) => {
    var i, s
    const n = {}
    t &&
      e.colorSchemes &&
      typeof e.getColorSchemeSelector == 'function' &&
      Object.entries(e.colorSchemes).forEach(([l, a]) => {
        var d, f
        const u = e.getColorSchemeSelector(l)
        u.startsWith('@')
          ? (n[u] = { ':root': { colorScheme: (d = a.palette) == null ? void 0 : d.mode } })
          : (n[u.replace(/\s*&/, '')] = { colorScheme: (f = a.palette) == null ? void 0 : f.mode })
      })
    let r = {
      html: NC(e, t),
      '*, *::before, *::after': { boxSizing: 'inherit' },
      'strong, b': { fontWeight: e.typography.fontWeightBold },
      body: { margin: 0, ...LC(e), '&::backdrop': { backgroundColor: (e.vars || e).palette.background.default } },
      ...n
    }
    const o = (s = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null ? void 0 : s.styleOverrides
    return o && (r = [r, o]), r
  },
  js = 'mui-ecs',
  BC = (e) => {
    const t = Wy(e, !1),
      n = Array.isArray(t) ? t[0] : t
    return (
      !e.vars && n && (n.html[`:root:has(${js})`] = { colorScheme: e.palette.mode }),
      e.colorSchemes &&
        Object.entries(e.colorSchemes).forEach(([r, o]) => {
          var s, l
          const i = e.getColorSchemeSelector(r)
          i.startsWith('@')
            ? (n[i] = { [`:root:not(:has(.${js}))`]: { colorScheme: (s = o.palette) == null ? void 0 : s.mode } })
            : (n[i.replace(/\s*&/, '')] = {
                [`&:not(:has(.${js}))`]: { colorScheme: (l = o.palette) == null ? void 0 : l.mode }
              })
        }),
      t
    )
  },
  zC = Xd(xc ? ({ theme: e, enableColorScheme: t }) => Wy(e, t) : ({ theme: e }) => BC(e))
function jC(e) {
  const t = oe({ props: e, name: 'MuiCssBaseline' }),
    { children: n, enableColorScheme: r = !1 } = t
  return k.jsxs(S.Fragment, {
    children: [
      xc && k.jsx(zC, { enableColorScheme: r }),
      !xc && !r && k.jsx('span', { className: js, style: { display: 'none' } }),
      n
    ]
  })
}
const Uy = { participants: [], creator: '', messages: [], roomId: '' }
function DC(e, t) {
  switch (t.type) {
    case 'ADD_PARTICIPANT':
      return { ...e, participants: [...e.participants, t.payload] }
    case 'EDIT_PARTICIPANT':
      return {
        ...e,
        participants: e.participants.map((n) => (n.username === t.payload.username ? { ...n, ...t.payload } : n))
      }
    case 'REMOVE_PERSON':
      return { ...e, participants: e.participants.filter((n) => n.username !== t.payload) }
    case 'ADD_MESSAGE':
      return { ...e, messages: [...e.messages, t.payload] }
    case 'SET_ROOM':
      return { ...e, roomId: t.payload }
    case 'SET_PARTICIPANTS':
      return { ...e, participants: t.payload }
    case 'SET_CREATOR':
      return { ...e, creator: t.payload }
    default:
      return e
  }
}
const FC = { ...Uy, localStream: { current: void 0 }, streams: { current: new Map() }, pcs: { current: new Map() } },
  Vy = S.createContext(FC),
  Hy = S.createContext(() => {})
function WC({ children: e }) {
  const [t, n] = S.useReducer(DC, Uy),
    r = S.useRef(),
    o = S.useRef(new Map()),
    i = S.useRef(new Map())
  return k.jsx(Vy.Provider, {
    value: { ...t, streams: o, pcs: i, localStream: r },
    children: k.jsx(Hy.Provider, { value: n, children: e })
  })
}
const zr = () => {
  const e = S.useContext(Vy)
  if (e === void 0) throw new Error('useRoomContext must be used within a RoomProvider')
  return e
}
function Ky() {
  const e = S.useContext(Hy)
  if (e === void 0) throw new Error('useRoomDispatch must be used within a RoomProvider')
  return e
}
const Rn = Object.create(null)
Rn.open = '0'
Rn.close = '1'
Rn.ping = '2'
Rn.pong = '3'
Rn.message = '4'
Rn.upgrade = '5'
Rn.noop = '6'
const Ds = Object.create(null)
Object.keys(Rn).forEach((e) => {
  Ds[Rn[e]] = e
})
const wc = { type: 'error', data: 'parser error' },
  Gy =
    typeof Blob == 'function' ||
    (typeof Blob < 'u' && Object.prototype.toString.call(Blob) === '[object BlobConstructor]'),
  qy = typeof ArrayBuffer == 'function',
  Qy = (e) => (typeof ArrayBuffer.isView == 'function' ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer),
  Jd = ({ type: e, data: t }, n, r) =>
    Gy && t instanceof Blob
      ? n
        ? r(t)
        : sh(t, r)
      : qy && (t instanceof ArrayBuffer || Qy(t))
        ? n
          ? r(t)
          : sh(new Blob([t]), r)
        : r(Rn[e] + (t || '')),
  sh = (e, t) => {
    const n = new FileReader()
    return (
      (n.onload = function () {
        const r = n.result.split(',')[1]
        t('b' + (r || ''))
      }),
      n.readAsDataURL(e)
    )
  }
function lh(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}
let du
function UC(e, t) {
  if (Gy && e.data instanceof Blob) return e.data.arrayBuffer().then(lh).then(t)
  if (qy && (e.data instanceof ArrayBuffer || Qy(e.data))) return t(lh(e.data))
  Jd(e, !1, (n) => {
    du || (du = new TextEncoder()), t(du.encode(n))
  })
}
const ah = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  ti = typeof Uint8Array > 'u' ? [] : new Uint8Array(256)
for (let e = 0; e < ah.length; e++) ti[ah.charCodeAt(e)] = e
const VC = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      o = 0,
      i,
      s,
      l,
      a
    e[e.length - 1] === '=' && (t--, e[e.length - 2] === '=' && t--)
    const u = new ArrayBuffer(t),
      d = new Uint8Array(u)
    for (r = 0; r < n; r += 4)
      (i = ti[e.charCodeAt(r)]),
        (s = ti[e.charCodeAt(r + 1)]),
        (l = ti[e.charCodeAt(r + 2)]),
        (a = ti[e.charCodeAt(r + 3)]),
        (d[o++] = (i << 2) | (s >> 4)),
        (d[o++] = ((s & 15) << 4) | (l >> 2)),
        (d[o++] = ((l & 3) << 6) | (a & 63))
    return u
  },
  HC = typeof ArrayBuffer == 'function',
  Zd = (e, t) => {
    if (typeof e != 'string') return { type: 'message', data: Yy(e, t) }
    const n = e.charAt(0)
    return n === 'b'
      ? { type: 'message', data: KC(e.substring(1), t) }
      : Ds[n]
        ? e.length > 1
          ? { type: Ds[n], data: e.substring(1) }
          : { type: Ds[n] }
        : wc
  },
  KC = (e, t) => {
    if (HC) {
      const n = VC(e)
      return Yy(n, t)
    } else return { base64: !0, data: e }
  },
  Yy = (e, t) => {
    switch (t) {
      case 'blob':
        return e instanceof Blob ? e : new Blob([e])
      case 'arraybuffer':
      default:
        return e instanceof ArrayBuffer ? e : e.buffer
    }
  },
  Xy = '',
  GC = (e, t) => {
    const n = e.length,
      r = new Array(n)
    let o = 0
    e.forEach((i, s) => {
      Jd(i, !1, (l) => {
        ;(r[s] = l), ++o === n && t(r.join(Xy))
      })
    })
  },
  qC = (e, t) => {
    const n = e.split(Xy),
      r = []
    for (let o = 0; o < n.length; o++) {
      const i = Zd(n[o], t)
      if ((r.push(i), i.type === 'error')) break
    }
    return r
  }
function QC() {
  return new TransformStream({
    transform(e, t) {
      UC(e, (n) => {
        const r = n.length
        let o
        if (r < 126) (o = new Uint8Array(1)), new DataView(o.buffer).setUint8(0, r)
        else if (r < 65536) {
          o = new Uint8Array(3)
          const i = new DataView(o.buffer)
          i.setUint8(0, 126), i.setUint16(1, r)
        } else {
          o = new Uint8Array(9)
          const i = new DataView(o.buffer)
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(r))
        }
        e.data && typeof e.data != 'string' && (o[0] |= 128), t.enqueue(o), t.enqueue(n)
      })
    }
  })
}
let fu
function ys(e) {
  return e.reduce((t, n) => t + n.length, 0)
}
function vs(e, t) {
  if (e[0].length === t) return e.shift()
  const n = new Uint8Array(t)
  let r = 0
  for (let o = 0; o < t; o++) (n[o] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0))
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
}
function YC(e, t) {
  fu || (fu = new TextDecoder())
  const n = []
  let r = 0,
    o = -1,
    i = !1
  return new TransformStream({
    transform(s, l) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (ys(n) < 1) break
          const a = vs(n, 1)
          ;(i = (a[0] & 128) === 128), (o = a[0] & 127), o < 126 ? (r = 3) : o === 126 ? (r = 1) : (r = 2)
        } else if (r === 1) {
          if (ys(n) < 2) break
          const a = vs(n, 2)
          ;(o = new DataView(a.buffer, a.byteOffset, a.length).getUint16(0)), (r = 3)
        } else if (r === 2) {
          if (ys(n) < 8) break
          const a = vs(n, 8),
            u = new DataView(a.buffer, a.byteOffset, a.length),
            d = u.getUint32(0)
          if (d > Math.pow(2, 21) - 1) {
            l.enqueue(wc)
            break
          }
          ;(o = d * Math.pow(2, 32) + u.getUint32(4)), (r = 3)
        } else {
          if (ys(n) < o) break
          const a = vs(n, o)
          l.enqueue(Zd(i ? a : fu.decode(a), t)), (r = 0)
        }
        if (o === 0 || o > e) {
          l.enqueue(wc)
          break
        }
      }
    }
  })
}
const Jy = 4
function Ke(e) {
  if (e) return XC(e)
}
function XC(e) {
  for (var t in Ke.prototype) e[t] = Ke.prototype[t]
  return e
}
Ke.prototype.on = Ke.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}), (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(t), this
  )
}
Ke.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments)
  }
  return (n.fn = t), this.on(e, n), this
}
Ke.prototype.off =
  Ke.prototype.removeListener =
  Ke.prototype.removeAllListeners =
  Ke.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0)) return (this._callbacks = {}), this
      var n = this._callbacks['$' + e]
      if (!n) return this
      if (arguments.length == 1) return delete this._callbacks['$' + e], this
      for (var r, o = 0; o < n.length; o++)
        if (((r = n[o]), r === t || r.fn === t)) {
          n.splice(o, 1)
          break
        }
      return n.length === 0 && delete this._callbacks['$' + e], this
    }
Ke.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {}
  for (var t = new Array(arguments.length - 1), n = this._callbacks['$' + e], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r]
  if (n) {
    n = n.slice(0)
    for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t)
  }
  return this
}
Ke.prototype.emitReserved = Ke.prototype.emit
Ke.prototype.listeners = function (e) {
  return (this._callbacks = this._callbacks || {}), this._callbacks['$' + e] || []
}
Ke.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length
}
const ya =
    typeof Promise == 'function' && typeof Promise.resolve == 'function'
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  Wt = typeof self < 'u' ? self : typeof window < 'u' ? window : Function('return this')(),
  JC = 'arraybuffer'
function Zy(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {})
}
const ZC = Wt.setTimeout,
  ek = Wt.clearTimeout
function va(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = ZC.bind(Wt)), (e.clearTimeoutFn = ek.bind(Wt)))
    : ((e.setTimeoutFn = Wt.setTimeout.bind(Wt)), (e.clearTimeoutFn = Wt.clearTimeout.bind(Wt)))
}
const tk = 1.33
function nk(e) {
  return typeof e == 'string' ? rk(e) : Math.ceil((e.byteLength || e.size) * tk)
}
function rk(e) {
  let t = 0,
    n = 0
  for (let r = 0, o = e.length; r < o; r++)
    (t = e.charCodeAt(r)),
      t < 128 ? (n += 1) : t < 2048 ? (n += 2) : t < 55296 || t >= 57344 ? (n += 3) : (r++, (n += 4))
  return n
}
function e0() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function ok(e) {
  let t = ''
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += '&'), (t += encodeURIComponent(n) + '=' + encodeURIComponent(e[n])))
  return t
}
function ik(e) {
  let t = {},
    n = e.split('&')
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split('=')
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
  }
  return t
}
class sk extends Error {
  constructor(t, n, r) {
    super(t), (this.description = n), (this.context = r), (this.type = 'TransportError')
  }
}
class ef extends Ke {
  constructor(t) {
    super(),
      (this.writable = !1),
      va(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket),
      (this.supportsBinary = !t.forceBase64)
  }
  onError(t, n, r) {
    return super.emitReserved('error', new sk(t, n, r)), this
  }
  open() {
    return (this.readyState = 'opening'), this.doOpen(), this
  }
  close() {
    return (this.readyState === 'opening' || this.readyState === 'open') && (this.doClose(), this.onClose()), this
  }
  send(t) {
    this.readyState === 'open' && this.write(t)
  }
  onOpen() {
    ;(this.readyState = 'open'), (this.writable = !0), super.emitReserved('open')
  }
  onData(t) {
    const n = Zd(t, this.socket.binaryType)
    this.onPacket(n)
  }
  onPacket(t) {
    super.emitReserved('packet', t)
  }
  onClose(t) {
    ;(this.readyState = 'closed'), super.emitReserved('close', t)
  }
  pause(t) {}
  createUri(t, n = {}) {
    return t + '://' + this._hostname() + this._port() + this.opts.path + this._query(n)
  }
  _hostname() {
    const t = this.opts.hostname
    return t.indexOf(':') === -1 ? t : '[' + t + ']'
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) || (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ':' + this.opts.port
      : ''
  }
  _query(t) {
    const n = ok(t)
    return n.length ? '?' + n : ''
  }
}
class lk extends ef {
  constructor() {
    super(...arguments), (this._polling = !1)
  }
  get name() {
    return 'polling'
  }
  doOpen() {
    this._poll()
  }
  pause(t) {
    this.readyState = 'pausing'
    const n = () => {
      ;(this.readyState = 'paused'), t()
    }
    if (this._polling || !this.writable) {
      let r = 0
      this._polling &&
        (r++,
        this.once('pollComplete', function () {
          --r || n()
        })),
        this.writable ||
          (r++,
          this.once('drain', function () {
            --r || n()
          }))
    } else n()
  }
  _poll() {
    ;(this._polling = !0), this.doPoll(), this.emitReserved('poll')
  }
  onData(t) {
    const n = (r) => {
      if ((this.readyState === 'opening' && r.type === 'open' && this.onOpen(), r.type === 'close'))
        return this.onClose({ description: 'transport closed by the server' }), !1
      this.onPacket(r)
    }
    qC(t, this.socket.binaryType).forEach(n),
      this.readyState !== 'closed' &&
        ((this._polling = !1), this.emitReserved('pollComplete'), this.readyState === 'open' && this._poll())
  }
  doClose() {
    const t = () => {
      this.write([{ type: 'close' }])
    }
    this.readyState === 'open' ? t() : this.once('open', t)
  }
  write(t) {
    ;(this.writable = !1),
      GC(t, (n) => {
        this.doWrite(n, () => {
          ;(this.writable = !0), this.emitReserved('drain')
        })
      })
  }
  uri() {
    const t = this.opts.secure ? 'https' : 'http',
      n = this.query || {}
    return (
      this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = e0()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    )
  }
}
let t0 = !1
try {
  t0 = typeof XMLHttpRequest < 'u' && 'withCredentials' in new XMLHttpRequest()
} catch {}
const ak = t0
function uk() {}
class ck extends lk {
  constructor(t) {
    if ((super(t), typeof location < 'u')) {
      const n = location.protocol === 'https:'
      let r = location.port
      r || (r = n ? '443' : '80'),
        (this.xd = (typeof location < 'u' && t.hostname !== location.hostname) || r !== t.port)
    }
  }
  doWrite(t, n) {
    const r = this.request({ method: 'POST', data: t })
    r.on('success', n),
      r.on('error', (o, i) => {
        this.onError('xhr post error', o, i)
      })
  }
  doPoll() {
    const t = this.request()
    t.on('data', this.onData.bind(this)),
      t.on('error', (n, r) => {
        this.onError('xhr poll error', n, r)
      }),
      (this.pollXhr = t)
  }
}
class En extends Ke {
  constructor(t, n, r) {
    super(),
      (this.createRequest = t),
      va(this, r),
      (this._opts = r),
      (this._method = r.method || 'GET'),
      (this._uri = n),
      (this._data = r.data !== void 0 ? r.data : null),
      this._create()
  }
  _create() {
    var t
    const n = Zy(
      this._opts,
      'agent',
      'pfx',
      'key',
      'passphrase',
      'cert',
      'ca',
      'ciphers',
      'rejectUnauthorized',
      'autoUnref'
    )
    n.xdomain = !!this._opts.xd
    const r = (this._xhr = this.createRequest(n))
    try {
      r.open(this._method, this._uri, !0)
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0)
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this._opts.extraHeaders[o])
        }
      } catch {}
      if (this._method === 'POST')
        try {
          r.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
        } catch {}
      try {
        r.setRequestHeader('Accept', '*/*')
      } catch {}
      ;(t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        'withCredentials' in r && (r.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
        (r.onreadystatechange = () => {
          var o
          r.readyState === 3 &&
            ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(r.getResponseHeader('set-cookie'))),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof r.status == 'number' ? r.status : 0)
                  }, 0))
        }),
        r.send(this._data)
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o)
      }, 0)
      return
    }
    typeof document < 'u' && ((this._index = En.requestsCount++), (En.requests[this._index] = this))
  }
  _onError(t) {
    this.emitReserved('error', t, this._xhr), this._cleanup(!0)
  }
  _cleanup(t) {
    if (!(typeof this._xhr > 'u' || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = uk), t))
        try {
          this._xhr.abort()
        } catch {}
      typeof document < 'u' && delete En.requests[this._index], (this._xhr = null)
    }
  }
  _onLoad() {
    const t = this._xhr.responseText
    t !== null && (this.emitReserved('data', t), this.emitReserved('success'), this._cleanup())
  }
  abort() {
    this._cleanup()
  }
}
En.requestsCount = 0
En.requests = {}
if (typeof document < 'u') {
  if (typeof attachEvent == 'function') attachEvent('onunload', uh)
  else if (typeof addEventListener == 'function') {
    const e = 'onpagehide' in Wt ? 'pagehide' : 'unload'
    addEventListener(e, uh, !1)
  }
}
function uh() {
  for (let e in En.requests) En.requests.hasOwnProperty(e) && En.requests[e].abort()
}
const dk = (function () {
  const e = n0({ xdomain: !1 })
  return e && e.responseType !== null
})()
class fk extends ck {
  constructor(t) {
    super(t)
    const n = t && t.forceBase64
    this.supportsBinary = dk && !n
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new En(n0, this.uri(), t)
  }
}
function n0(e) {
  const t = e.xdomain
  try {
    if (typeof XMLHttpRequest < 'u' && (!t || ak)) return new XMLHttpRequest()
  } catch {}
  if (!t)
    try {
      return new Wt[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP')
    } catch {}
}
const r0 =
  typeof navigator < 'u' && typeof navigator.product == 'string' && navigator.product.toLowerCase() === 'reactnative'
class pk extends ef {
  get name() {
    return 'websocket'
  }
  doOpen() {
    const t = this.uri(),
      n = this.opts.protocols,
      r = r0
        ? {}
        : Zy(
            this.opts,
            'agent',
            'perMessageDeflate',
            'pfx',
            'key',
            'passphrase',
            'cert',
            'ca',
            'ciphers',
            'rejectUnauthorized',
            'localAddress',
            'protocolVersion',
            'origin',
            'maxPayload',
            'family',
            'checkServerIdentity'
          )
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders)
    try {
      this.ws = this.createSocket(t, n, r)
    } catch (o) {
      return this.emitReserved('error', o)
    }
    ;(this.ws.binaryType = this.socket.binaryType), this.addEventListeners()
  }
  addEventListeners() {
    ;(this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
    }),
      (this.ws.onclose = (t) => this.onClose({ description: 'websocket connection closed', context: t })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError('websocket error', t))
  }
  write(t) {
    this.writable = !1
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        o = n === t.length - 1
      Jd(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i)
        } catch {}
        o &&
          ya(() => {
            ;(this.writable = !0), this.emitReserved('drain')
          }, this.setTimeoutFn)
      })
    }
  }
  doClose() {
    typeof this.ws < 'u' && ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null))
  }
  uri() {
    const t = this.opts.secure ? 'wss' : 'ws',
      n = this.query || {}
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = e0()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    )
  }
}
const pu = Wt.WebSocket || Wt.MozWebSocket
class hk extends pk {
  createSocket(t, n, r) {
    return r0 ? new pu(t, n, r) : n ? new pu(t, n) : new pu(t)
  }
  doWrite(t, n) {
    this.ws.send(n)
  }
}
class mk extends ef {
  get name() {
    return 'webtransport'
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri('https'), this.opts.transportOptions[this.name])
    } catch (t) {
      return this.emitReserved('error', t)
    }
    this._transport.closed
      .then(() => {
        this.onClose()
      })
      .catch((t) => {
        this.onError('webtransport error', t)
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((t) => {
          const n = YC(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            o = QC()
          o.readable.pipeTo(t.writable), (this._writer = o.writable.getWriter())
          const i = () => {
            r.read()
              .then(({ done: l, value: a }) => {
                l || (this.onPacket(a), i())
              })
              .catch((l) => {})
          }
          i()
          const s = { type: 'open' }
          this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`), this._writer.write(s).then(() => this.onOpen())
        })
      })
  }
  write(t) {
    this.writable = !1
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        o = n === t.length - 1
      this._writer.write(r).then(() => {
        o &&
          ya(() => {
            ;(this.writable = !0), this.emitReserved('drain')
          }, this.setTimeoutFn)
      })
    }
  }
  doClose() {
    var t
    ;(t = this._transport) === null || t === void 0 || t.close()
  }
}
const gk = { websocket: hk, webtransport: mk, polling: fk },
  yk =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  vk = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
  ]
function Cc(e) {
  if (e.length > 8e3) throw 'URI too long'
  const t = e,
    n = e.indexOf('['),
    r = e.indexOf(']')
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ';') + e.substring(r, e.length))
  let o = yk.exec(e || ''),
    i = {},
    s = 14
  for (; s--; ) i[vk[s]] = o[s] || ''
  return (
    n != -1 &&
      r != -1 &&
      ((i.source = t),
      (i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ':')),
      (i.authority = i.authority.replace('[', '').replace(']', '').replace(/;/g, ':')),
      (i.ipv6uri = !0)),
    (i.pathNames = Sk(i, i.path)),
    (i.queryKey = xk(i, i.query)),
    i
  )
}
function Sk(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, '/').split('/')
  return (t.slice(0, 1) == '/' || t.length === 0) && r.splice(0, 1), t.slice(-1) == '/' && r.splice(r.length - 1, 1), r
}
function xk(e, t) {
  const n = {}
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, i) {
      o && (n[o] = i)
    }),
    n
  )
}
const kc = typeof addEventListener == 'function' && typeof removeEventListener == 'function',
  Fs = []
kc &&
  addEventListener(
    'offline',
    () => {
      Fs.forEach((e) => e())
    },
    !1
  )
class rr extends Ke {
  constructor(t, n) {
    if (
      (super(),
      (this.binaryType = JC),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      t && typeof t == 'object' && ((n = t), (t = null)),
      t)
    ) {
      const r = Cc(t)
      ;(n.hostname = r.host),
        (n.secure = r.protocol === 'https' || r.protocol === 'wss'),
        (n.port = r.port),
        r.query && (n.query = r.query)
    } else n.host && (n.hostname = Cc(n.host).host)
    va(this, n),
      (this.secure = n.secure != null ? n.secure : typeof location < 'u' && location.protocol === 'https:'),
      n.hostname && !n.port && (n.port = this.secure ? '443' : '80'),
      (this.hostname = n.hostname || (typeof location < 'u' ? location.hostname : 'localhost')),
      (this.port = n.port || (typeof location < 'u' && location.port ? location.port : this.secure ? '443' : '80')),
      (this.transports = []),
      (this._transportsByName = {}),
      n.transports.forEach((r) => {
        const o = r.prototype.name
        this.transports.push(o), (this._transportsByName[o] = r)
      }),
      (this.opts = Object.assign(
        {
          path: '/engine.io',
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: 't',
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1
        },
        n
      )),
      (this.opts.path = this.opts.path.replace(/\/$/, '') + (this.opts.addTrailingSlash ? '/' : '')),
      typeof this.opts.query == 'string' && (this.opts.query = ik(this.opts.query)),
      kc &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
          }),
          addEventListener('beforeunload', this._beforeunloadEventListener, !1)),
        this.hostname !== 'localhost' &&
          ((this._offlineEventListener = () => {
            this._onClose('transport close', { description: 'network connection lost' })
          }),
          Fs.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open()
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query)
    ;(n.EIO = Jy), (n.transport = t), this.id && (n.sid = this.id)
    const r = Object.assign(
      {},
      this.opts,
      { query: n, socket: this, hostname: this.hostname, secure: this.secure, port: this.port },
      this.opts.transportOptions[t]
    )
    return new this._transportsByName[t](r)
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved('error', 'No transports available')
      }, 0)
      return
    }
    const t =
      this.opts.rememberUpgrade && rr.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1
        ? 'websocket'
        : this.transports[0]
    this.readyState = 'opening'
    const n = this.createTransport(t)
    n.open(), this.setTransport(n)
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on('drain', this._onDrain.bind(this))
        .on('packet', this._onPacket.bind(this))
        .on('error', this._onError.bind(this))
        .on('close', (n) => this._onClose('transport close', n))
  }
  onOpen() {
    ;(this.readyState = 'open'),
      (rr.priorWebsocketSuccess = this.transport.name === 'websocket'),
      this.emitReserved('open'),
      this.flush()
  }
  _onPacket(t) {
    if (this.readyState === 'opening' || this.readyState === 'open' || this.readyState === 'closing')
      switch ((this.emitReserved('packet', t), this.emitReserved('heartbeat'), t.type)) {
        case 'open':
          this.onHandshake(JSON.parse(t.data))
          break
        case 'ping':
          this._sendPacket('pong'), this.emitReserved('ping'), this.emitReserved('pong'), this._resetPingTimeout()
          break
        case 'error':
          const n = new Error('server error')
          ;(n.code = t.data), this._onError(n)
          break
        case 'message':
          this.emitReserved('data', t.data), this.emitReserved('message', t.data)
          break
      }
  }
  onHandshake(t) {
    this.emitReserved('handshake', t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this._pingInterval = t.pingInterval),
      (this._pingTimeout = t.pingTimeout),
      (this._maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== 'closed' && this._resetPingTimeout()
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer)
    const t = this._pingInterval + this._pingTimeout
    ;(this._pingTimeoutTime = Date.now() + t),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose('ping timeout')
      }, t)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref()
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved('drain') : this.flush()
  }
  flush() {
    if (this.readyState !== 'closed' && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this._getWritablePackets()
      this.transport.send(t), (this._prevBufferLen = t.length), this.emitReserved('flush')
    }
  }
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === 'polling' && this.writeBuffer.length > 1)) return this.writeBuffer
    let n = 1
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data
      if ((o && (n += nk(o)), r > 0 && n > this._maxPayload)) return this.writeBuffer.slice(0, r)
      n += 2
    }
    return this.writeBuffer
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0
    const t = Date.now() > this._pingTimeoutTime
    return (
      t &&
        ((this._pingTimeoutTime = 0),
        ya(() => {
          this._onClose('ping timeout')
        }, this.setTimeoutFn)),
      t
    )
  }
  write(t, n, r) {
    return this._sendPacket('message', t, n, r), this
  }
  send(t, n, r) {
    return this._sendPacket('message', t, n, r), this
  }
  _sendPacket(t, n, r, o) {
    if (
      (typeof n == 'function' && ((o = n), (n = void 0)),
      typeof r == 'function' && ((o = r), (r = null)),
      this.readyState === 'closing' || this.readyState === 'closed')
    )
      return
    ;(r = r || {}), (r.compress = r.compress !== !1)
    const i = { type: t, data: n, options: r }
    this.emitReserved('packetCreate', i), this.writeBuffer.push(i), o && this.once('flush', o), this.flush()
  }
  close() {
    const t = () => {
        this._onClose('forced close'), this.transport.close()
      },
      n = () => {
        this.off('upgrade', n), this.off('upgradeError', n), t()
      },
      r = () => {
        this.once('upgrade', n), this.once('upgradeError', n)
      }
    return (
      (this.readyState === 'opening' || this.readyState === 'open') &&
        ((this.readyState = 'closing'),
        this.writeBuffer.length
          ? this.once('drain', () => {
              this.upgrading ? r() : t()
            })
          : this.upgrading
            ? r()
            : t()),
      this
    )
  }
  _onError(t) {
    if (
      ((rr.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === 'opening')
    )
      return this.transports.shift(), this._open()
    this.emitReserved('error', t), this._onClose('transport error', t)
  }
  _onClose(t, n) {
    if (this.readyState === 'opening' || this.readyState === 'open' || this.readyState === 'closing') {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners('close'),
        this.transport.close(),
        this.transport.removeAllListeners(),
        kc &&
          (this._beforeunloadEventListener && removeEventListener('beforeunload', this._beforeunloadEventListener, !1),
          this._offlineEventListener))
      ) {
        const r = Fs.indexOf(this._offlineEventListener)
        r !== -1 && Fs.splice(r, 1)
      }
      ;(this.readyState = 'closed'),
        (this.id = null),
        this.emitReserved('close', t, n),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0)
    }
  }
}
rr.protocol = Jy
class wk extends rr {
  constructor() {
    super(...arguments), (this._upgrades = [])
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === 'open' && this.opts.upgrade))
      for (let t = 0; t < this._upgrades.length; t++) this._probe(this._upgrades[t])
  }
  _probe(t) {
    let n = this.createTransport(t),
      r = !1
    rr.priorWebsocketSuccess = !1
    const o = () => {
      r ||
        (n.send([{ type: 'ping', data: 'probe' }]),
        n.once('packet', (f) => {
          if (!r)
            if (f.type === 'pong' && f.data === 'probe') {
              if (((this.upgrading = !0), this.emitReserved('upgrading', n), !n)) return
              ;(rr.priorWebsocketSuccess = n.name === 'websocket'),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== 'closed' &&
                      (d(),
                      this.setTransport(n),
                      n.send([{ type: 'upgrade' }]),
                      this.emitReserved('upgrade', n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()))
                })
            } else {
              const p = new Error('probe error')
              ;(p.transport = n.name), this.emitReserved('upgradeError', p)
            }
        }))
    }
    function i() {
      r || ((r = !0), d(), n.close(), (n = null))
    }
    const s = (f) => {
      const p = new Error('probe error: ' + f)
      ;(p.transport = n.name), i(), this.emitReserved('upgradeError', p)
    }
    function l() {
      s('transport closed')
    }
    function a() {
      s('socket closed')
    }
    function u(f) {
      n && f.name !== n.name && i()
    }
    const d = () => {
      n.removeListener('open', o),
        n.removeListener('error', s),
        n.removeListener('close', l),
        this.off('close', a),
        this.off('upgrading', u)
    }
    n.once('open', o),
      n.once('error', s),
      n.once('close', l),
      this.once('close', a),
      this.once('upgrading', u),
      this._upgrades.indexOf('webtransport') !== -1 && t !== 'webtransport'
        ? this.setTimeoutFn(() => {
            r || n.open()
          }, 200)
        : n.open()
  }
  onHandshake(t) {
    ;(this._upgrades = this._filterUpgrades(t.upgrades)), super.onHandshake(t)
  }
  _filterUpgrades(t) {
    const n = []
    for (let r = 0; r < t.length; r++) ~this.transports.indexOf(t[r]) && n.push(t[r])
    return n
  }
}
let Ck = class extends wk {
  constructor(t, n = {}) {
    const r = typeof t == 'object' ? t : n
    ;(!r.transports || (r.transports && typeof r.transports[0] == 'string')) &&
      (r.transports = (r.transports || ['polling', 'websocket', 'webtransport']).map((o) => gk[o]).filter((o) => !!o)),
      super(t, r)
  }
}
function kk(e, t = '', n) {
  let r = e
  ;(n = n || (typeof location < 'u' && location)),
    e == null && (e = n.protocol + '//' + n.host),
    typeof e == 'string' &&
      (e.charAt(0) === '/' && (e.charAt(1) === '/' ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) || (typeof n < 'u' ? (e = n.protocol + '//' + e) : (e = 'https://' + e)),
      (r = Cc(e))),
    r.port || (/^(http|ws)$/.test(r.protocol) ? (r.port = '80') : /^(http|ws)s$/.test(r.protocol) && (r.port = '443')),
    (r.path = r.path || '/')
  const i = r.host.indexOf(':') !== -1 ? '[' + r.host + ']' : r.host
  return (
    (r.id = r.protocol + '://' + i + ':' + r.port + t),
    (r.href = r.protocol + '://' + i + (n && n.port === r.port ? '' : ':' + r.port)),
    r
  )
}
const bk = typeof ArrayBuffer == 'function',
  Ek = (e) => (typeof ArrayBuffer.isView == 'function' ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer),
  o0 = Object.prototype.toString,
  Rk = typeof Blob == 'function' || (typeof Blob < 'u' && o0.call(Blob) === '[object BlobConstructor]'),
  Tk = typeof File == 'function' || (typeof File < 'u' && o0.call(File) === '[object FileConstructor]')
function tf(e) {
  return (bk && (e instanceof ArrayBuffer || Ek(e))) || (Rk && e instanceof Blob) || (Tk && e instanceof File)
}
function Ws(e, t) {
  if (!e || typeof e != 'object') return !1
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (Ws(e[n])) return !0
    return !1
  }
  if (tf(e)) return !0
  if (e.toJSON && typeof e.toJSON == 'function' && arguments.length === 1) return Ws(e.toJSON(), !0)
  for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && Ws(e[n])) return !0
  return !1
}
function Pk(e) {
  const t = [],
    n = e.data,
    r = e
  return (r.data = bc(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
}
function bc(e, t) {
  if (!e) return e
  if (tf(e)) {
    const n = { _placeholder: !0, num: t.length }
    return t.push(e), n
  } else if (Array.isArray(e)) {
    const n = new Array(e.length)
    for (let r = 0; r < e.length; r++) n[r] = bc(e[r], t)
    return n
  } else if (typeof e == 'object' && !(e instanceof Date)) {
    const n = {}
    for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = bc(e[r], t))
    return n
  }
  return e
}
function _k(e, t) {
  return (e.data = Ec(e.data, t)), delete e.attachments, e
}
function Ec(e, t) {
  if (!e) return e
  if (e && e._placeholder === !0) {
    if (typeof e.num == 'number' && e.num >= 0 && e.num < t.length) return t[e.num]
    throw new Error('illegal attachments')
  } else if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = Ec(e[n], t)
  else if (typeof e == 'object') for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Ec(e[n], t))
  return e
}
const Ok = ['connect', 'connect_error', 'disconnect', 'disconnecting', 'newListener', 'removeListener'],
  Ik = 5
var te
;(function (e) {
  ;(e[(e.CONNECT = 0)] = 'CONNECT'),
    (e[(e.DISCONNECT = 1)] = 'DISCONNECT'),
    (e[(e.EVENT = 2)] = 'EVENT'),
    (e[(e.ACK = 3)] = 'ACK'),
    (e[(e.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
    (e[(e.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
    (e[(e.BINARY_ACK = 6)] = 'BINARY_ACK')
})(te || (te = {}))
class Ak {
  constructor(t) {
    this.replacer = t
  }
  encode(t) {
    return (t.type === te.EVENT || t.type === te.ACK) && Ws(t)
      ? this.encodeAsBinary({
          type: t.type === te.EVENT ? te.BINARY_EVENT : te.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id
        })
      : [this.encodeAsString(t)]
  }
  encodeAsString(t) {
    let n = '' + t.type
    return (
      (t.type === te.BINARY_EVENT || t.type === te.BINARY_ACK) && (n += t.attachments + '-'),
      t.nsp && t.nsp !== '/' && (n += t.nsp + ','),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    )
  }
  encodeAsBinary(t) {
    const n = Pk(t),
      r = this.encodeAsString(n.packet),
      o = n.buffers
    return o.unshift(r), o
  }
}
function ch(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
class nf extends Ke {
  constructor(t) {
    super(), (this.reviver = t)
  }
  add(t) {
    let n
    if (typeof t == 'string') {
      if (this.reconstructor) throw new Error('got plaintext data when reconstructing a packet')
      n = this.decodeString(t)
      const r = n.type === te.BINARY_EVENT
      r || n.type === te.BINARY_ACK
        ? ((n.type = r ? te.EVENT : te.ACK),
          (this.reconstructor = new Mk(n)),
          n.attachments === 0 && super.emitReserved('decoded', n))
        : super.emitReserved('decoded', n)
    } else if (tf(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)), n && ((this.reconstructor = null), super.emitReserved('decoded', n))
      else throw new Error('got binary data when not reconstructing a packet')
    else throw new Error('Unknown type: ' + t)
  }
  decodeString(t) {
    let n = 0
    const r = { type: Number(t.charAt(0)) }
    if (te[r.type] === void 0) throw new Error('unknown packet type ' + r.type)
    if (r.type === te.BINARY_EVENT || r.type === te.BINARY_ACK) {
      const i = n + 1
      for (; t.charAt(++n) !== '-' && n != t.length; );
      const s = t.substring(i, n)
      if (s != Number(s) || t.charAt(n) !== '-') throw new Error('Illegal attachments')
      r.attachments = Number(s)
    }
    if (t.charAt(n + 1) === '/') {
      const i = n + 1
      for (; ++n && !(t.charAt(n) === ',' || n === t.length); );
      r.nsp = t.substring(i, n)
    } else r.nsp = '/'
    const o = t.charAt(n + 1)
    if (o !== '' && Number(o) == o) {
      const i = n + 1
      for (; ++n; ) {
        const s = t.charAt(n)
        if (s == null || Number(s) != s) {
          --n
          break
        }
        if (n === t.length) break
      }
      r.id = Number(t.substring(i, n + 1))
    }
    if (t.charAt(++n)) {
      const i = this.tryParse(t.substr(n))
      if (nf.isPayloadValid(r.type, i)) r.data = i
      else throw new Error('invalid payload')
    }
    return r
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver)
    } catch {
      return !1
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case te.CONNECT:
        return ch(n)
      case te.DISCONNECT:
        return n === void 0
      case te.CONNECT_ERROR:
        return typeof n == 'string' || ch(n)
      case te.EVENT:
      case te.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == 'number' || (typeof n[0] == 'string' && Ok.indexOf(n[0]) === -1))
      case te.ACK:
      case te.BINARY_ACK:
        return Array.isArray(n)
    }
  }
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), (this.reconstructor = null))
  }
}
class Mk {
  constructor(t) {
    ;(this.packet = t), (this.buffers = []), (this.reconPack = t)
  }
  takeBinaryData(t) {
    if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
      const n = _k(this.reconPack, this.buffers)
      return this.finishedReconstruction(), n
    }
    return null
  }
  finishedReconstruction() {
    ;(this.reconPack = null), (this.buffers = [])
  }
}
const $k = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: nf,
      Encoder: Ak,
      get PacketType() {
        return te
      },
      protocol: Ik
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
function en(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n)
    }
  )
}
const Nk = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
})
class i0 extends Ke {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open()
  }
  get disconnected() {
    return !this.connected
  }
  subEvents() {
    if (this.subs) return
    const t = this.io
    this.subs = [
      en(t, 'open', this.onopen.bind(this)),
      en(t, 'packet', this.onpacket.bind(this)),
      en(t, 'error', this.onerror.bind(this)),
      en(t, 'close', this.onclose.bind(this))
    ]
  }
  get active() {
    return !!this.subs
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === 'open' && this.onopen(),
        this)
  }
  open() {
    return this.connect()
  }
  send(...t) {
    return t.unshift('message'), this.emit.apply(this, t), this
  }
  emit(t, ...n) {
    var r, o, i
    if (Nk.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name')
    if ((n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile))
      return this._addToQueue(n), this
    const s = { type: te.EVENT, data: n }
    if (((s.options = {}), (s.options.compress = this.flags.compress !== !1), typeof n[n.length - 1] == 'function')) {
      const d = this.ids++,
        f = n.pop()
      this._registerAckCallback(d, f), (s.id = d)
    }
    const l =
        (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0
          ? void 0
          : o.writable,
      a = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired())
    return (
      (this.flags.volatile && !l) || (a ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)),
      (this.flags = {}),
      this
    )
  }
  _registerAckCallback(t, n) {
    var r
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout
    if (o === void 0) {
      this.acks[t] = n
      return
    }
    const i = this.io.setTimeoutFn(() => {
        delete this.acks[t]
        for (let l = 0; l < this.sendBuffer.length; l++) this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1)
        n.call(this, new Error('operation has timed out'))
      }, o),
      s = (...l) => {
        this.io.clearTimeoutFn(i), n.apply(this, l)
      }
    ;(s.withError = !0), (this.acks[t] = s)
  }
  emitWithAck(t, ...n) {
    return new Promise((r, o) => {
      const i = (s, l) => (s ? o(s) : r(l))
      ;(i.withError = !0), n.push(i), this.emit(t, ...n)
    })
  }
  _addToQueue(t) {
    let n
    typeof t[t.length - 1] == 'function' && (n = t.pop())
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    }
    t.push((o, ...i) =>
      r !== this._queue[0]
        ? void 0
        : (o !== null
            ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(o))
            : (this._queue.shift(), n && n(null, ...i)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue()
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return
    const n = this._queue[0]
    ;(n.pending && !t) || ((n.pending = !0), n.tryCount++, (this.flags = n.flags), this.emit.apply(this, n.args))
  }
  packet(t) {
    ;(t.nsp = this.nsp), this.io._packet(t)
  }
  onopen() {
    typeof this.auth == 'function'
      ? this.auth((t) => {
          this._sendConnectPacket(t)
        })
      : this._sendConnectPacket(this.auth)
  }
  _sendConnectPacket(t) {
    this.packet({
      type: te.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    })
  }
  onerror(t) {
    this.connected || this.emitReserved('connect_error', t)
  }
  onclose(t, n) {
    ;(this.connected = !1), delete this.id, this.emitReserved('disconnect', t, n), this._clearAcks()
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t]
        delete this.acks[t], r.withError && r.call(this, new Error('socket has been disconnected'))
      }
    })
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case te.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                'connect_error',
                new Error(
                  'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)'
                )
              )
          break
        case te.EVENT:
        case te.BINARY_EVENT:
          this.onevent(t)
          break
        case te.ACK:
        case te.BINARY_ACK:
          this.onack(t)
          break
        case te.DISCONNECT:
          this.ondisconnect()
          break
        case te.CONNECT_ERROR:
          this.destroy()
          const r = new Error(t.data.message)
          ;(r.data = t.data.data), this.emitReserved('connect_error', r)
          break
      }
  }
  onevent(t) {
    const n = t.data || []
    t.id != null && n.push(this.ack(t.id)),
      this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice()
      for (const r of n) r.apply(this, t)
    }
    super.emit.apply(this, t),
      this._pid && t.length && typeof t[t.length - 1] == 'string' && (this._lastOffset = t[t.length - 1])
  }
  ack(t) {
    const n = this
    let r = !1
    return function (...o) {
      r || ((r = !0), n.packet({ type: te.ACK, id: t, data: o }))
    }
  }
  onack(t) {
    const n = this.acks[t.id]
    typeof n == 'function' && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data))
  }
  onconnect(t, n) {
    ;(this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved('connect'),
      this._drainQueue(!0)
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t)
      }),
      (this.sendBuffer = [])
  }
  ondisconnect() {
    this.destroy(), this.onclose('io server disconnect')
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)), this.io._destroy(this)
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: te.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose('io client disconnect'),
      this
    )
  }
  close() {
    return this.disconnect()
  }
  compress(t) {
    return (this.flags.compress = t), this
  }
  get volatile() {
    return (this.flags.volatile = !0), this
  }
  timeout(t) {
    return (this.flags.timeout = t), this
  }
  onAny(t) {
    return (this._anyListeners = this._anyListeners || []), this._anyListeners.push(t), this
  }
  prependAny(t) {
    return (this._anyListeners = this._anyListeners || []), this._anyListeners.unshift(t), this
  }
  offAny(t) {
    if (!this._anyListeners) return this
    if (t) {
      const n = this._anyListeners
      for (let r = 0; r < n.length; r++) if (t === n[r]) return n.splice(r, 1), this
    } else this._anyListeners = []
    return this
  }
  listenersAny() {
    return this._anyListeners || []
  }
  onAnyOutgoing(t) {
    return (this._anyOutgoingListeners = this._anyOutgoingListeners || []), this._anyOutgoingListeners.push(t), this
  }
  prependAnyOutgoing(t) {
    return (this._anyOutgoingListeners = this._anyOutgoingListeners || []), this._anyOutgoingListeners.unshift(t), this
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this
    if (t) {
      const n = this._anyOutgoingListeners
      for (let r = 0; r < n.length; r++) if (t === n[r]) return n.splice(r, 1), this
    } else this._anyOutgoingListeners = []
    return this
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || []
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice()
      for (const r of n) r.apply(this, t.data)
    }
  }
}
function Oo(e) {
  ;(e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0)
}
Oo.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++)
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e)
    e = Math.floor(t * 10) & 1 ? e + n : e - n
  }
  return Math.min(e, this.max) | 0
}
Oo.prototype.reset = function () {
  this.attempts = 0
}
Oo.prototype.setMin = function (e) {
  this.ms = e
}
Oo.prototype.setMax = function (e) {
  this.max = e
}
Oo.prototype.setJitter = function (e) {
  this.jitter = e
}
class Rc extends Ke {
  constructor(t, n) {
    var r
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == 'object' && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || '/socket.io'),
      (this.opts = n),
      va(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5),
      (this.backoff = new Oo({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = 'closed'),
      (this.uri = t)
    const o = n.parser || $k
    ;(this.encoder = new o.Encoder()),
      (this.decoder = new o.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open()
  }
  reconnection(t) {
    return arguments.length ? ((this._reconnection = !!t), t || (this.skipReconnect = !0), this) : this._reconnection
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : ((this._reconnectionAttempts = t), this)
  }
  reconnectionDelay(t) {
    var n
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t), (n = this.backoff) === null || n === void 0 || n.setMin(t), this)
  }
  randomizationFactor(t) {
    var n
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t), (n = this.backoff) === null || n === void 0 || n.setJitter(t), this)
  }
  reconnectionDelayMax(t) {
    var n
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t), (n = this.backoff) === null || n === void 0 || n.setMax(t), this)
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout
  }
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
  }
  open(t) {
    if (~this._readyState.indexOf('open')) return this
    this.engine = new Ck(this.uri, this.opts)
    const n = this.engine,
      r = this
    ;(this._readyState = 'opening'), (this.skipReconnect = !1)
    const o = en(n, 'open', function () {
        r.onopen(), t && t()
      }),
      i = (l) => {
        this.cleanup(),
          (this._readyState = 'closed'),
          this.emitReserved('error', l),
          t ? t(l) : this.maybeReconnectOnOpen()
      },
      s = en(n, 'error', i)
    if (this._timeout !== !1) {
      const l = this._timeout,
        a = this.setTimeoutFn(() => {
          o(), i(new Error('timeout')), n.close()
        }, l)
      this.opts.autoUnref && a.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(a)
        })
    }
    return this.subs.push(o), this.subs.push(s), this
  }
  connect(t) {
    return this.open(t)
  }
  onopen() {
    this.cleanup(), (this._readyState = 'open'), this.emitReserved('open')
    const t = this.engine
    this.subs.push(
      en(t, 'ping', this.onping.bind(this)),
      en(t, 'data', this.ondata.bind(this)),
      en(t, 'error', this.onerror.bind(this)),
      en(t, 'close', this.onclose.bind(this)),
      en(this.decoder, 'decoded', this.ondecoded.bind(this))
    )
  }
  onping() {
    this.emitReserved('ping')
  }
  ondata(t) {
    try {
      this.decoder.add(t)
    } catch (n) {
      this.onclose('parse error', n)
    }
  }
  ondecoded(t) {
    ya(() => {
      this.emitReserved('packet', t)
    }, this.setTimeoutFn)
  }
  onerror(t) {
    this.emitReserved('error', t)
  }
  socket(t, n) {
    let r = this.nsps[t]
    return r ? this._autoConnect && !r.active && r.connect() : ((r = new i0(this, t, n)), (this.nsps[t] = r)), r
  }
  _destroy(t) {
    const n = Object.keys(this.nsps)
    for (const r of n) if (this.nsps[r].active) return
    this._close()
  }
  _packet(t) {
    const n = this.encoder.encode(t)
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options)
  }
  cleanup() {
    this.subs.forEach((t) => t()), (this.subs.length = 0), this.decoder.destroy()
  }
  _close() {
    ;(this.skipReconnect = !0), (this._reconnecting = !1), this.onclose('forced close')
  }
  disconnect() {
    return this._close()
  }
  onclose(t, n) {
    var r
    this.cleanup(),
      (r = this.engine) === null || r === void 0 || r.close(),
      this.backoff.reset(),
      (this._readyState = 'closed'),
      this.emitReserved('close', t, n),
      this._reconnection && !this.skipReconnect && this.reconnect()
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this
    const t = this
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved('reconnect_failed'), (this._reconnecting = !1)
    else {
      const n = this.backoff.duration()
      this._reconnecting = !0
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved('reconnect_attempt', t.backoff.attempts),
          !t.skipReconnect &&
            t.open((o) => {
              o ? ((t._reconnecting = !1), t.reconnect(), this.emitReserved('reconnect_error', o)) : t.onreconnect()
            }))
      }, n)
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r)
        })
    }
  }
  onreconnect() {
    const t = this.backoff.attempts
    ;(this._reconnecting = !1), this.backoff.reset(), this.emitReserved('reconnect', t)
  }
}
const Ho = {}
function Us(e, t) {
  typeof e == 'object' && ((t = e), (e = void 0)), (t = t || {})
  const n = kk(e, t.path || '/socket.io'),
    r = n.source,
    o = n.id,
    i = n.path,
    s = Ho[o] && i in Ho[o].nsps,
    l = t.forceNew || t['force new connection'] || t.multiplex === !1 || s
  let a
  return (
    l ? (a = new Rc(r, t)) : (Ho[o] || (Ho[o] = new Rc(r, t)), (a = Ho[o])),
    n.query && !t.query && (t.query = n.queryKey),
    a.socket(n.path, t)
  )
}
Object.assign(Us, { Manager: Rc, Socket: i0, io: Us, connect: Us })
const Lk = '/',
  ze = Us(Lk, {
    autoConnect: !1,
    secure: !0,
    rejectUnauthorized: !1,
    auth: { username: localStorage.getItem('username') }
  }),
  Tc = (e) => {
    ze.auth = { username: e }
  },
  fe = Nw
function Bk(e) {
  return re('MuiSvgIcon', e)
}
ne('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge'
])
const zk = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = { root: ['root', t !== 'inherit' && `color${U(t)}`, `fontSize${U(n)}`] }
    return se(o, Bk, r)
  },
  jk = W('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.color !== 'inherit' && t[`color${U(n.color)}`], t[`fontSize${U(n.fontSize)}`]]
    }
  })(
    fe(({ theme: e }) => {
      var t, n, r, o, i, s, l, a, u, d, f, p, x, v
      return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition:
          (o = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : o.call(t, 'fill', {
                duration:
                  (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
              }),
        variants: [
          { props: (w) => !w.hasSvgAsChild, style: { fill: 'currentColor' } },
          { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
          {
            props: { fontSize: 'small' },
            style: {
              fontSize:
                ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 20)) || '1.25rem'
            }
          },
          {
            props: { fontSize: 'medium' },
            style: {
              fontSize:
                ((a = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : a.call(l, 24)) || '1.5rem'
            }
          },
          {
            props: { fontSize: 'large' },
            style: {
              fontSize:
                ((d = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : d.call(u, 35)) || '2.1875rem'
            }
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, w]) => w && w.main)
            .map(([w]) => {
              var R, m
              return {
                props: { color: w },
                style: { color: (m = (R = (e.vars ?? e).palette) == null ? void 0 : R[w]) == null ? void 0 : m.main }
              }
            }),
          {
            props: { color: 'action' },
            style: { color: (p = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : p.active }
          },
          {
            props: { color: 'disabled' },
            style: {
              color: (v = (x = (e.vars ?? e).palette) == null ? void 0 : x.action) == null ? void 0 : v.disabled
            }
          },
          { props: { color: 'inherit' }, style: { color: void 0 } }
        ]
      }
    })
  ),
  vl = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiSvgIcon' }),
      {
        children: o,
        className: i,
        color: s = 'inherit',
        component: l = 'svg',
        fontSize: a = 'medium',
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: f,
        viewBox: p = '0 0 24 24',
        ...x
      } = r,
      v = S.isValidElement(o) && o.type === 'svg',
      w = {
        ...r,
        color: s,
        component: l,
        fontSize: a,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: p,
        hasSvgAsChild: v
      },
      R = {}
    d || (R.viewBox = p)
    const m = zk(w)
    return k.jsxs(jk, {
      as: l,
      className: H(m.root, i),
      focusable: 'false',
      color: u,
      'aria-hidden': f ? void 0 : !0,
      role: f ? 'img' : void 0,
      ref: n,
      ...R,
      ...x,
      ...(v && o.props),
      ownerState: w,
      children: [v ? o.props.children : o, f ? k.jsx('title', { children: f }) : null]
    })
  })
vl && (vl.muiName = 'SvgIcon')
function Qt(e, t) {
  function n(r, o) {
    return k.jsx(vl, { 'data-testid': `${t}Icon`, ref: o, ...r, children: e })
  }
  return (n.muiName = vl.muiName), S.memo(S.forwardRef(n))
}
var ye = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rf = Symbol.for('react.element'),
  of = Symbol.for('react.portal'),
  Sa = Symbol.for('react.fragment'),
  xa = Symbol.for('react.strict_mode'),
  wa = Symbol.for('react.profiler'),
  Ca = Symbol.for('react.provider'),
  ka = Symbol.for('react.context'),
  Dk = Symbol.for('react.server_context'),
  ba = Symbol.for('react.forward_ref'),
  Ea = Symbol.for('react.suspense'),
  Ra = Symbol.for('react.suspense_list'),
  Ta = Symbol.for('react.memo'),
  Pa = Symbol.for('react.lazy'),
  Fk = Symbol.for('react.offscreen'),
  s0
s0 = Symbol.for('react.module.reference')
function Yt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case rf:
        switch (((e = e.type), e)) {
          case Sa:
          case wa:
          case xa:
          case Ea:
          case Ra:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Dk:
              case ka:
              case ba:
              case Pa:
              case Ta:
              case Ca:
                return e
              default:
                return t
            }
        }
      case of:
        return t
    }
  }
}
ye.ContextConsumer = ka
ye.ContextProvider = Ca
ye.Element = rf
ye.ForwardRef = ba
ye.Fragment = Sa
ye.Lazy = Pa
ye.Memo = Ta
ye.Portal = of
ye.Profiler = wa
ye.StrictMode = xa
ye.Suspense = Ea
ye.SuspenseList = Ra
ye.isAsyncMode = function () {
  return !1
}
ye.isConcurrentMode = function () {
  return !1
}
ye.isContextConsumer = function (e) {
  return Yt(e) === ka
}
ye.isContextProvider = function (e) {
  return Yt(e) === Ca
}
ye.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === rf
}
ye.isForwardRef = function (e) {
  return Yt(e) === ba
}
ye.isFragment = function (e) {
  return Yt(e) === Sa
}
ye.isLazy = function (e) {
  return Yt(e) === Pa
}
ye.isMemo = function (e) {
  return Yt(e) === Ta
}
ye.isPortal = function (e) {
  return Yt(e) === of
}
ye.isProfiler = function (e) {
  return Yt(e) === wa
}
ye.isStrictMode = function (e) {
  return Yt(e) === xa
}
ye.isSuspense = function (e) {
  return Yt(e) === Ea
}
ye.isSuspenseList = function (e) {
  return Yt(e) === Ra
}
ye.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Sa ||
    e === wa ||
    e === xa ||
    e === Ea ||
    e === Ra ||
    e === Fk ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Pa ||
        e.$$typeof === Ta ||
        e.$$typeof === Ca ||
        e.$$typeof === ka ||
        e.$$typeof === ba ||
        e.$$typeof === s0 ||
        e.getModuleId !== void 0))
  )
}
ye.typeOf = Yt
function l0(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue
      n[r] = e[r]
    }
  return n
}
function Pc(e, t) {
  return (
    (Pc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n
        }),
    Pc(e, t)
  )
}
function a0(e, t) {
  ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Pc(e, t)
}
const dh = { disabled: !1 },
  Sl = xn.createContext(null)
var Wk = function (t) {
    return t.scrollTop
  },
  ni = 'unmounted',
  yr = 'exited',
  vr = 'entering',
  qr = 'entered',
  _c = 'exiting',
  dn = (function (e) {
    a0(t, e)
    function t(r, o) {
      var i
      i = e.call(this, r, o) || this
      var s = o,
        l = s && !s.isMounting ? r.enter : r.appear,
        a
      return (
        (i.appearStatus = null),
        r.in
          ? l
            ? ((a = yr), (i.appearStatus = vr))
            : (a = qr)
          : r.unmountOnExit || r.mountOnEnter
            ? (a = ni)
            : (a = yr),
        (i.state = { status: a }),
        (i.nextCallback = null),
        i
      )
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in
      return s && i.status === ni ? { status: yr } : null
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }),
      (n.componentDidUpdate = function (o) {
        var i = null
        if (o !== this.props) {
          var s = this.state.status
          this.props.in ? s !== vr && s !== qr && (i = vr) : (s === vr || s === qr) && (i = _c)
        }
        this.updateStatus(!1, i)
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback()
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          l
        return (
          (i = s = l = o),
          o != null && typeof o != 'number' && ((i = o.exit), (s = o.enter), (l = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: l }
        )
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === vr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef ? this.props.nodeRef.current : fs.findDOMNode(this)
              s && Wk(s)
            }
            this.performEnter(o)
          } else this.performExit()
        else this.props.unmountOnExit && this.state.status === yr && this.setState({ status: ni })
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          l = this.context ? this.context.isMounting : o,
          a = this.props.nodeRef ? [l] : [fs.findDOMNode(this), l],
          u = a[0],
          d = a[1],
          f = this.getTimeouts(),
          p = l ? f.appear : f.enter
        if ((!o && !s) || dh.disabled) {
          this.safeSetState({ status: qr }, function () {
            i.props.onEntered(u)
          })
          return
        }
        this.props.onEnter(u, d),
          this.safeSetState({ status: vr }, function () {
            i.props.onEntering(u, d),
              i.onTransitionEnd(p, function () {
                i.safeSetState({ status: qr }, function () {
                  i.props.onEntered(u, d)
                })
              })
          })
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : fs.findDOMNode(this)
        if (!i || dh.disabled) {
          this.safeSetState({ status: yr }, function () {
            o.props.onExited(l)
          })
          return
        }
        this.props.onExit(l),
          this.safeSetState({ status: _c }, function () {
            o.props.onExiting(l),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: yr }, function () {
                  o.props.onExited(l)
                })
              })
          })
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (n.safeSetState = function (o, i) {
        ;(i = this.setNextCallback(i)), this.setState(o, i)
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0
        return (
          (this.nextCallback = function (l) {
            s && ((s = !1), (i.nextCallback = null), o(l))
          }),
          (this.nextCallback.cancel = function () {
            s = !1
          }),
          this.nextCallback
        )
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i)
        var s = this.props.nodeRef ? this.props.nodeRef.current : fs.findDOMNode(this),
          l = o == null && !this.props.addEndListener
        if (!s || l) {
          setTimeout(this.nextCallback, 0)
          return
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
            u = a[0],
            d = a[1]
          this.props.addEndListener(u, d)
        }
        o != null && setTimeout(this.nextCallback, o)
      }),
      (n.render = function () {
        var o = this.state.status
        if (o === ni) return null
        var i = this.props,
          s = i.children
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef
        var l = l0(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef'
        ])
        return xn.createElement(
          Sl.Provider,
          { value: null },
          typeof s == 'function' ? s(o, l) : xn.cloneElement(xn.Children.only(s), l)
        )
      }),
      t
    )
  })(xn.Component)
dn.contextType = Sl
dn.propTypes = {}
function Kr() {}
dn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Kr,
  onEntering: Kr,
  onEntered: Kr,
  onExit: Kr,
  onExiting: Kr,
  onExited: Kr
}
dn.UNMOUNTED = ni
dn.EXITED = yr
dn.ENTERING = vr
dn.ENTERED = qr
dn.EXITING = _c
function Uk(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
  return e
}
function sf(e, t) {
  var n = function (i) {
      return t && S.isValidElement(i) ? t(i) : i
    },
    r = Object.create(null)
  return (
    e &&
      S.Children.map(e, function (o) {
        return o
      }).forEach(function (o) {
        r[o.key] = n(o)
      }),
    r
  )
}
function Vk(e, t) {
  ;(e = e || {}), (t = t || {})
  function n(d) {
    return d in t ? t[d] : e[d]
  }
  var r = Object.create(null),
    o = []
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i)
  var s,
    l = {}
  for (var a in t) {
    if (r[a])
      for (s = 0; s < r[a].length; s++) {
        var u = r[a][s]
        l[r[a][s]] = n(u)
      }
    l[a] = n(a)
  }
  for (s = 0; s < o.length; s++) l[o[s]] = n(o[s])
  return l
}
function Cr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t]
}
function Hk(e, t) {
  return sf(e.children, function (n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Cr(n, 'appear', e),
      enter: Cr(n, 'enter', e),
      exit: Cr(n, 'exit', e)
    })
  })
}
function Kk(e, t, n) {
  var r = sf(e.children),
    o = Vk(t, r)
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i]
      if (S.isValidElement(s)) {
        var l = i in t,
          a = i in r,
          u = t[i],
          d = S.isValidElement(u) && !u.props.in
        a && (!l || d)
          ? (o[i] = S.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: Cr(s, 'exit', e),
              enter: Cr(s, 'enter', e)
            }))
          : !a && l && !d
            ? (o[i] = S.cloneElement(s, { in: !1 }))
            : a &&
              l &&
              S.isValidElement(u) &&
              (o[i] = S.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: Cr(s, 'exit', e),
                enter: Cr(s, 'enter', e)
              }))
      }
    }),
    o
  )
}
var Gk =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t]
      })
    },
  qk = {
    component: 'div',
    childFactory: function (t) {
      return t
    }
  },
  lf = (function (e) {
    a0(t, e)
    function t(r, o) {
      var i
      i = e.call(this, r, o) || this
      var s = i.handleExited.bind(Uk(i))
      return (i.state = { contextValue: { isMounting: !0 }, handleExited: s, firstRender: !0 }), i
    }
    var n = t.prototype
    return (
      (n.componentDidMount = function () {
        ;(this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } })
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          l = i.handleExited,
          a = i.firstRender
        return { children: a ? Hk(o, l) : Kk(o, s, l), firstRender: !1 }
      }),
      (n.handleExited = function (o, i) {
        var s = sf(this.props.children)
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (l) {
              var a = hl({}, l.children)
              return delete a[o.key], { children: a }
            }))
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          l = l0(o, ['component', 'childFactory']),
          a = this.state.contextValue,
          u = Gk(this.state.children).map(s)
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          i === null
            ? xn.createElement(Sl.Provider, { value: a }, u)
            : xn.createElement(Sl.Provider, { value: a }, xn.createElement(i, l, u))
        )
      }),
      t
    )
  })(xn.Component)
lf.propTypes = {}
lf.defaultProps = qk
const af = (e) => e.scrollTop
function bo(e, t) {
  const { timeout: n, easing: r, style: o = {} } = e
  return {
    duration: o.transitionDuration ?? (typeof n == 'number' ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == 'object' ? r[t.mode] : r),
    delay: o.transitionDelay
  }
}
function Qk(e) {
  return re('MuiPaper', e)
}
ne('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24'
])
const Yk = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = { root: ['root', r, !t && 'rounded', r === 'elevation' && `elevation${n}`] }
    return se(i, Qk, o)
  },
  Xk = W('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, t[n.variant], !n.square && t.rounded, n.variant === 'elevation' && t[`elevation${n.elevation}`]]
    }
  })(
    fe(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create('box-shadow'),
      variants: [
        { props: ({ ownerState: t }) => !t.square, style: { borderRadius: e.shape.borderRadius } },
        { props: { variant: 'outlined' }, style: { border: `1px solid ${(e.vars || e).palette.divider}` } },
        {
          props: { variant: 'elevation' },
          style: { boxShadow: 'var(--Paper-shadow)', backgroundImage: 'var(--Paper-overlay)' }
        }
      ]
    }))
  ),
  qi = S.forwardRef(function (t, n) {
    var x
    const r = oe({ props: t, name: 'MuiPaper' }),
      o = Br(),
      { className: i, component: s = 'div', elevation: l = 1, square: a = !1, variant: u = 'elevation', ...d } = r,
      f = { ...r, component: s, elevation: l, square: a, variant: u },
      p = Yk(f)
    return k.jsx(Xk, {
      as: s,
      ownerState: f,
      className: H(p.root, i),
      ref: n,
      ...d,
      style: {
        ...(u === 'elevation' && {
          '--Paper-shadow': (o.vars || o).shadows[l],
          ...(o.vars && { '--Paper-overlay': (x = o.vars.overlays) == null ? void 0 : x[l] }),
          ...(!o.vars &&
            o.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${nn('#fff', Sc(l))}, ${nn('#fff', Sc(l))})`
            })
        }),
        ...d.style
      }
    })
  })
function rn(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: l,
      ...a
    } = t,
    { component: u, slots: d = { [e]: void 0 }, slotProps: f = { [e]: void 0 }, ...p } = i,
    x = d[e] || r,
    v = Py(f[e], o),
    {
      props: { component: w, ...R },
      internalRef: m
    } = Ty({ className: n, ...a, externalForwardedProps: e === 'root' ? p : void 0, externalSlotProps: v }),
    g = Ye(m, v == null ? void 0 : v.ref, t.ref),
    c = s ? s(R) : {},
    y = { ...o, ...c },
    C = e === 'root' ? w || u : w,
    E = Ry(
      x,
      { ...(e === 'root' && !u && !d[e] && l), ...(e !== 'root' && !d[e] && l), ...R, ...(C && { as: C }), ref: g },
      y
    )
  return (
    Object.keys(c).forEach((b) => {
      delete E[b]
    }),
    [x, E]
  )
}
class xl {
  constructor() {
    $o(this, 'mountEffect', () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && ((this.didMount = !0), this.mounted.resolve())
    })
    ;(this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null)
  }
  static create() {
    return new xl()
  }
  static use() {
    const t = by(xl.create).current,
      [n, r] = S.useState(!1)
    return (t.shouldMount = n), (t.setShouldMount = r), S.useEffect(t.mountEffect, [n]), t
  }
  mount() {
    return (
      this.mounted || ((this.mounted = Zk()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
      this.mounted
    )
  }
  start(...t) {
    this.mount().then(() => {
      var n
      return (n = this.ref.current) == null ? void 0 : n.start(...t)
    })
  }
  stop(...t) {
    this.mount().then(() => {
      var n
      return (n = this.ref.current) == null ? void 0 : n.stop(...t)
    })
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t)
    })
  }
}
function Jk() {
  return xl.use()
}
function Zk() {
  let e, t
  const n = new Promise((r, o) => {
    ;(e = r), (t = o)
  })
  return (n.resolve = e), (n.reject = t), n
}
function eb(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: l,
      onExited: a,
      timeout: u
    } = e,
    [d, f] = S.useState(!1),
    p = H(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    x = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    v = H(n.child, d && n.childLeaving, r && n.childPulsate)
  return (
    !l && !d && f(!0),
    S.useEffect(() => {
      if (!l && a != null) {
        const w = setTimeout(a, u)
        return () => {
          clearTimeout(w)
        }
      }
    }, [a, l, u]),
    k.jsx('span', { className: p, style: x, children: k.jsx('span', { className: v }) })
  )
}
const zt = ne('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
  ]),
  Oc = 550,
  tb = 80,
  nb = $d`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  rb = $d`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  ob = $d`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  ib = W('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
  }),
  sb = W(eb, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${zt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${nb};
    animation-duration: ${Oc}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${zt.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${zt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${zt.childLeaving} {
    opacity: 0;
    animation-name: ${rb};
    animation-duration: ${Oc}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${zt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ob};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  lb = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: s, ...l } = r,
      [a, u] = S.useState([]),
      d = S.useRef(0),
      f = S.useRef(null)
    S.useEffect(() => {
      f.current && (f.current(), (f.current = null))
    }, [a])
    const p = S.useRef(!1),
      x = Hd(),
      v = S.useRef(null),
      w = S.useRef(null),
      R = S.useCallback(
        (y) => {
          const { pulsate: C, rippleX: E, rippleY: b, rippleSize: T, cb: I } = y
          u((h) => [
            ...h,
            k.jsx(
              sb,
              {
                classes: {
                  ripple: H(i.ripple, zt.ripple),
                  rippleVisible: H(i.rippleVisible, zt.rippleVisible),
                  ripplePulsate: H(i.ripplePulsate, zt.ripplePulsate),
                  child: H(i.child, zt.child),
                  childLeaving: H(i.childLeaving, zt.childLeaving),
                  childPulsate: H(i.childPulsate, zt.childPulsate)
                },
                timeout: Oc,
                pulsate: C,
                rippleX: E,
                rippleY: b,
                rippleSize: T
              },
              d.current
            )
          ]),
            (d.current += 1),
            (f.current = I)
        },
        [i]
      ),
      m = S.useCallback(
        (y = {}, C = {}, E = () => {}) => {
          const { pulsate: b = !1, center: T = o || C.pulsate, fakeElement: I = !1 } = C
          if ((y == null ? void 0 : y.type) === 'mousedown' && p.current) {
            p.current = !1
            return
          }
          ;(y == null ? void 0 : y.type) === 'touchstart' && (p.current = !0)
          const h = I ? null : w.current,
            _ = h ? h.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 }
          let $, N, B
          if (T || y === void 0 || (y.clientX === 0 && y.clientY === 0) || (!y.clientX && !y.touches))
            ($ = Math.round(_.width / 2)), (N = Math.round(_.height / 2))
          else {
            const { clientX: A, clientY: z } = y.touches && y.touches.length > 0 ? y.touches[0] : y
            ;($ = Math.round(A - _.left)), (N = Math.round(z - _.top))
          }
          if (T) (B = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3)), B % 2 === 0 && (B += 1)
          else {
            const A = Math.max(Math.abs((h ? h.clientWidth : 0) - $), $) * 2 + 2,
              z = Math.max(Math.abs((h ? h.clientHeight : 0) - N), N) * 2 + 2
            B = Math.sqrt(A ** 2 + z ** 2)
          }
          y != null && y.touches
            ? v.current === null &&
              ((v.current = () => {
                R({ pulsate: b, rippleX: $, rippleY: N, rippleSize: B, cb: E })
              }),
              x.start(tb, () => {
                v.current && (v.current(), (v.current = null))
              }))
            : R({ pulsate: b, rippleX: $, rippleY: N, rippleSize: B, cb: E })
        },
        [o, R, x]
      ),
      g = S.useCallback(() => {
        m({}, { pulsate: !0 })
      }, [m]),
      c = S.useCallback(
        (y, C) => {
          if ((x.clear(), (y == null ? void 0 : y.type) === 'touchend' && v.current)) {
            v.current(),
              (v.current = null),
              x.start(0, () => {
                c(y, C)
              })
            return
          }
          ;(v.current = null), u((E) => (E.length > 0 ? E.slice(1) : E)), (f.current = C)
        },
        [x]
      )
    return (
      S.useImperativeHandle(n, () => ({ pulsate: g, start: m, stop: c }), [g, m, c]),
      k.jsx(ib, {
        className: H(zt.root, i.root, s),
        ref: w,
        ...l,
        children: k.jsx(lf, { component: null, exit: !0, children: a })
      })
    )
  })
function ab(e) {
  return re('MuiButtonBase', e)
}
const ub = ne('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  cb = (e) => {
    const { disabled: t, focusVisible: n, focusVisibleClassName: r, classes: o } = e,
      s = se({ root: ['root', t && 'disabled', n && 'focusVisible'] }, ab, o)
    return n && r && (s.root += ` ${r}`), s
  },
  db = W('button', { name: 'MuiButtonBase', slot: 'Root', overridesResolver: (e, t) => t.root })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${ub.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' }
  }),
  u0 = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: l,
        component: a = 'button',
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: f = !1,
        focusRipple: p = !1,
        focusVisibleClassName: x,
        LinkComponent: v = 'a',
        onBlur: w,
        onClick: R,
        onContextMenu: m,
        onDragLeave: g,
        onFocus: c,
        onFocusVisible: y,
        onKeyDown: C,
        onKeyUp: E,
        onMouseDown: b,
        onMouseLeave: T,
        onMouseUp: I,
        onTouchEnd: h,
        onTouchMove: _,
        onTouchStart: $,
        tabIndex: N = 0,
        TouchRippleProps: B,
        touchRippleRef: A,
        type: z,
        ...D
      } = r,
      P = S.useRef(null),
      M = Jk(),
      j = Ye(M.ref, A),
      [K, q] = S.useState(!1)
    u && K && q(!1),
      S.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            q(!0), P.current.focus()
          }
        }),
        []
      )
    const X = M.shouldMount && !d && !u
    S.useEffect(() => {
      K && p && !d && M.pulsate()
    }, [d, p, K, M])
    function Q(V, Ue, Fn = f) {
      return Mn((Bt) => (Ue && Ue(Bt), Fn || M[V](Bt), !0))
    }
    const ve = Q('start', b),
      Se = Q('stop', m),
      Ie = Q('stop', g),
      tt = Q('stop', I),
      Te = Q('stop', (V) => {
        K && V.preventDefault(), T && T(V)
      }),
      J = Q('start', $),
      le = Q('stop', h),
      Z = Q('stop', _),
      De = Q(
        'stop',
        (V) => {
          Kp(V.target) || q(!1), w && w(V)
        },
        !1
      ),
      Y = Mn((V) => {
        P.current || (P.current = V.currentTarget), Kp(V.target) && (q(!0), y && y(V)), c && c(V)
      }),
      ce = () => {
        const V = P.current
        return a && a !== 'button' && !(V.tagName === 'A' && V.href)
      },
      gt = Mn((V) => {
        p &&
          !V.repeat &&
          K &&
          V.key === ' ' &&
          M.stop(V, () => {
            M.start(V)
          }),
          V.target === V.currentTarget && ce() && V.key === ' ' && V.preventDefault(),
          C && C(V),
          V.target === V.currentTarget && ce() && V.key === 'Enter' && !u && (V.preventDefault(), R && R(V))
      }),
      Pe = Mn((V) => {
        p &&
          V.key === ' ' &&
          K &&
          !V.defaultPrevented &&
          M.stop(V, () => {
            M.pulsate(V)
          }),
          E && E(V),
          R && V.target === V.currentTarget && ce() && V.key === ' ' && !V.defaultPrevented && R(V)
      })
    let Ae = a
    Ae === 'button' && (D.href || D.to) && (Ae = v)
    const Ge = {}
    Ae === 'button'
      ? ((Ge.type = z === void 0 ? 'button' : z), (Ge.disabled = u))
      : (!D.href && !D.to && (Ge.role = 'button'), u && (Ge['aria-disabled'] = u))
    const bt = Ye(n, P),
      he = {
        ...r,
        centerRipple: i,
        component: a,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: f,
        focusRipple: p,
        tabIndex: N,
        focusVisible: K
      },
      Lt = cb(he)
    return k.jsxs(db, {
      as: Ae,
      className: H(Lt.root, l),
      ownerState: he,
      onBlur: De,
      onClick: R,
      onContextMenu: Se,
      onFocus: Y,
      onKeyDown: gt,
      onKeyUp: Pe,
      onMouseDown: ve,
      onMouseLeave: Te,
      onMouseUp: tt,
      onDragLeave: Ie,
      onTouchEnd: le,
      onTouchMove: Z,
      onTouchStart: J,
      ref: bt,
      tabIndex: u ? -1 : N,
      type: z,
      ...Ge,
      ...D,
      children: [s, X ? k.jsx(lb, { ref: j, center: i, ...B }) : null]
    })
  })
function fb(e) {
  return typeof e.main == 'string'
}
function pb(e, t = []) {
  if (!fb(e)) return !1
  for (const n of t) if (!e.hasOwnProperty(n) || typeof e[n] != 'string') return !1
  return !0
}
function ur(e = []) {
  return ([, t]) => t && pb(t, e)
}
function hb(e) {
  return re('MuiIconButton', e)
}
const mb = ne('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge'
  ]),
  gb = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = { root: ['root', n && 'disabled', r !== 'default' && `color${U(r)}`, o && `edge${U(o)}`, `size${U(i)}`] }
    return se(s, hb, t)
  },
  yb = W(u0, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.color !== 'default' && t[`color${U(n.color)}`],
        n.edge && t[`edge${U(n.edge)}`],
        t[`size${U(n.size)}`]
      ]
    }
  })(
    fe(({ theme: e }) => ({
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: '50%',
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create('background-color', { duration: e.transitions.duration.shortest }),
      variants: [
        {
          props: (t) => !t.disableRipple,
          style: {
            '--IconButton-hoverBg': e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : nn(e.palette.action.active, e.palette.action.hoverOpacity),
            '&:hover': {
              backgroundColor: 'var(--IconButton-hoverBg)',
              '@media (hover: none)': { backgroundColor: 'transparent' }
            }
          }
        },
        { props: { edge: 'start' }, style: { marginLeft: -12 } },
        { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
        { props: { edge: 'end' }, style: { marginRight: -12 } },
        { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } }
      ]
    })),
    fe(({ theme: e }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(e.palette)
          .filter(ur())
          .map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })),
        ...Object.entries(e.palette)
          .filter(ur())
          .map(([t]) => ({
            props: { color: t },
            style: {
              '--IconButton-hoverBg': e.vars
                ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : nn((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
            }
          })),
        { props: { size: 'small' }, style: { padding: 5, fontSize: e.typography.pxToRem(18) } },
        { props: { size: 'large' }, style: { padding: 12, fontSize: e.typography.pxToRem(28) } }
      ],
      [`&.${mb.disabled}`]: { backgroundColor: 'transparent', color: (e.vars || e).palette.action.disabled }
    }))
  ),
  Tt = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiIconButton' }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: l = 'default',
        disabled: a = !1,
        disableFocusRipple: u = !1,
        size: d = 'medium',
        ...f
      } = r,
      p = { ...r, edge: o, color: l, disabled: a, disableFocusRipple: u, size: d },
      x = gb(p)
    return k.jsx(yb, {
      className: H(x.root, s),
      centerRipple: !0,
      focusRipple: !u,
      disabled: a,
      ref: n,
      ...f,
      ownerState: p,
      children: i
    })
  })
function vb(e) {
  return re('MuiTypography', e)
}
ne('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph'
])
const Sb = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0
  },
  xb = $C(),
  wb = (e) => {
    const { align: t, gutterBottom: n, noWrap: r, paragraph: o, variant: i, classes: s } = e,
      l = {
        root: ['root', i, e.align !== 'inherit' && `align${U(t)}`, n && 'gutterBottom', r && 'noWrap', o && 'paragraph']
      }
    return se(l, vb, s)
  },
  Cb = W('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${U(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph
      ]
    }
  })(
    fe(({ theme: e }) => {
      var t
      return {
        margin: 0,
        variants: [
          {
            props: { variant: 'inherit' },
            style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }
          },
          ...Object.entries(e.typography)
            .filter(([n, r]) => n !== 'inherit' && r && typeof r == 'object')
            .map(([n, r]) => ({ props: { variant: n }, style: r })),
          ...Object.entries(e.palette)
            .filter(ur())
            .map(([n]) => ({ props: { color: n }, style: { color: (e.vars || e).palette[n].main } })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, n]) => typeof n == 'string')
            .map(([n]) => ({ props: { color: `text${U(n)}` }, style: { color: (e.vars || e).palette.text[n] } })),
          { props: ({ ownerState: n }) => n.align !== 'inherit', style: { textAlign: 'var(--Typography-textAlign)' } },
          {
            props: ({ ownerState: n }) => n.noWrap,
            style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
          },
          { props: ({ ownerState: n }) => n.gutterBottom, style: { marginBottom: '0.35em' } },
          { props: ({ ownerState: n }) => n.paragraph, style: { marginBottom: 16 } }
        ]
      }
    })
  ),
  fh = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
  },
  Er = S.forwardRef(function (t, n) {
    const { color: r, ...o } = oe({ props: t, name: 'MuiTypography' }),
      i = !Sb[r],
      s = xb({ ...o, ...(i && { color: r }) }),
      {
        align: l = 'inherit',
        className: a,
        component: u,
        gutterBottom: d = !1,
        noWrap: f = !1,
        paragraph: p = !1,
        variant: x = 'body1',
        variantMapping: v = fh,
        ...w
      } = s,
      R = {
        ...s,
        align: l,
        color: r,
        className: a,
        component: u,
        gutterBottom: d,
        noWrap: f,
        paragraph: p,
        variant: x,
        variantMapping: v
      },
      m = u || (p ? 'p' : v[x] || fh[x]) || 'span',
      g = wb(R)
    return k.jsx(Cb, {
      as: m,
      ref: n,
      className: H(g.root, a),
      ...w,
      ownerState: R,
      style: { ...(l !== 'inherit' && { '--Typography-textAlign': l }), ...w.style }
    })
  })
function kb(e) {
  return typeof e == 'function' ? e() : e
}
const bb = S.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [s, l] = S.useState(null),
    a = Ye(S.isValidElement(r) ? Lr(r) : null, n)
  if (
    (Ar(() => {
      i || l(kb(o) || document.body)
    }, [o, i]),
    Ar(() => {
      if (s && !i)
        return (
          gc(n, s),
          () => {
            gc(n, null)
          }
        )
    }, [n, s, i]),
    i)
  ) {
    if (S.isValidElement(r)) {
      const u = { ref: a }
      return S.cloneElement(r, u)
    }
    return k.jsx(S.Fragment, { children: r })
  }
  return k.jsx(S.Fragment, { children: s && Td.createPortal(r, s) })
})
function Ss(e) {
  return parseInt(e, 10) || 0
}
const Eb = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)'
  }
}
function Rb(e) {
  return e == null || Object.keys(e).length === 0 || (e.outerHeightStyle === 0 && !e.overflowing)
}
const Tb = S.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: l, ...a } = t,
    { current: u } = S.useRef(l != null),
    d = S.useRef(null),
    f = Ye(n, d),
    p = S.useRef(null),
    x = S.useRef(null),
    v = S.useCallback(() => {
      const m = d.current,
        c = cn(m).getComputedStyle(m)
      if (c.width === '0px') return { outerHeightStyle: 0, overflowing: !1 }
      const y = x.current
      ;(y.style.width = c.width),
        (y.value = m.value || t.placeholder || 'x'),
        y.value.slice(-1) ===
          `
` && (y.value += ' ')
      const C = c.boxSizing,
        E = Ss(c.paddingBottom) + Ss(c.paddingTop),
        b = Ss(c.borderBottomWidth) + Ss(c.borderTopWidth),
        T = y.scrollHeight
      y.value = 'x'
      const I = y.scrollHeight
      let h = T
      i && (h = Math.max(Number(i) * I, h)), o && (h = Math.min(Number(o) * I, h)), (h = Math.max(h, I))
      const _ = h + (C === 'border-box' ? E + b : 0),
        $ = Math.abs(h - T) <= 1
      return { outerHeightStyle: _, overflowing: $ }
    }, [o, i, t.placeholder]),
    w = S.useCallback(() => {
      const m = v()
      if (Rb(m)) return
      const g = m.outerHeightStyle,
        c = d.current
      p.current !== g && ((p.current = g), (c.style.height = `${g}px`)),
        (c.style.overflow = m.overflowing ? 'hidden' : '')
    }, [v])
  Ar(() => {
    const m = () => {
      w()
    }
    let g
    const c = Wd(m),
      y = d.current,
      C = cn(y)
    C.addEventListener('resize', c)
    let E
    return (
      typeof ResizeObserver < 'u' && ((E = new ResizeObserver(m)), E.observe(y)),
      () => {
        c.clear(), cancelAnimationFrame(g), C.removeEventListener('resize', c), E && E.disconnect()
      }
    )
  }, [v, w]),
    Ar(() => {
      w()
    })
  const R = (m) => {
    u || w(), r && r(m)
  }
  return k.jsxs(S.Fragment, {
    children: [
      k.jsx('textarea', { value: l, onChange: R, ref: f, rows: i, style: s, ...a }),
      k.jsx('textarea', {
        'aria-hidden': !0,
        className: t.className,
        readOnly: !0,
        ref: x,
        tabIndex: -1,
        style: { ...Eb.shadow, ...s, paddingTop: 0, paddingBottom: 0 }
      })
    ]
  })
})
function zi(e) {
  return typeof e == 'string'
}
function Io({ props: e, states: t, muiFormControl: n }) {
  return t.reduce((r, o) => ((r[o] = e[o]), n && typeof e[o] > 'u' && (r[o] = n[o]), r), {})
}
const uf = S.createContext(void 0)
function Ao() {
  return S.useContext(uf)
}
function ph(e) {
  return e != null && !(Array.isArray(e) && e.length === 0)
}
function wl(e, t = !1) {
  return e && ((ph(e.value) && e.value !== '') || (t && ph(e.defaultValue) && e.defaultValue !== ''))
}
function Pb(e) {
  return e.startAdornment
}
function _b(e) {
  return re('MuiInputBase', e)
}
const Eo = ne('MuiInputBase', [
  'root',
  'formControl',
  'focused',
  'disabled',
  'adornedStart',
  'adornedEnd',
  'error',
  'sizeSmall',
  'multiline',
  'colorSecondary',
  'fullWidth',
  'hiddenLabel',
  'readOnly',
  'input',
  'inputSizeSmall',
  'inputMultiline',
  'inputTypeSearch',
  'inputAdornedStart',
  'inputAdornedEnd',
  'inputHiddenLabel'
])
var hh
const _a = (e, t) => {
    const { ownerState: n } = e
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === 'small' && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${U(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel
    ]
  },
  Oa = (e, t) => {
    const { ownerState: n } = e
    return [
      t.input,
      n.size === 'small' && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === 'search' && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel
    ]
  },
  Ob = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: l,
        fullWidth: a,
        hiddenLabel: u,
        multiline: d,
        readOnly: f,
        size: p,
        startAdornment: x,
        type: v
      } = e,
      w = {
        root: [
          'root',
          `color${U(n)}`,
          r && 'disabled',
          o && 'error',
          a && 'fullWidth',
          s && 'focused',
          l && 'formControl',
          p && p !== 'medium' && `size${U(p)}`,
          d && 'multiline',
          x && 'adornedStart',
          i && 'adornedEnd',
          u && 'hiddenLabel',
          f && 'readOnly'
        ],
        input: [
          'input',
          r && 'disabled',
          v === 'search' && 'inputTypeSearch',
          d && 'inputMultiline',
          p === 'small' && 'inputSizeSmall',
          u && 'inputHiddenLabel',
          x && 'inputAdornedStart',
          i && 'inputAdornedEnd',
          f && 'readOnly'
        ]
      }
    return se(w, _b, t)
  },
  Ia = W('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: _a })(
    fe(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${Eo.disabled}`]: { color: (e.vars || e).palette.text.disabled, cursor: 'default' },
      variants: [
        { props: ({ ownerState: t }) => t.multiline, style: { padding: '4px 0 5px' } },
        { props: ({ ownerState: t, size: n }) => t.multiline && n === 'small', style: { paddingTop: 1 } },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: '100%' } }
      ]
    }))
  ),
  Aa = W('input', { name: 'MuiInputBase', slot: 'Input', overridesResolver: Oa })(
    fe(({ theme: e }) => {
      const t = e.palette.mode === 'light',
        n = {
          color: 'currentColor',
          ...(e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create('opacity', { duration: e.transitions.duration.shorter })
        },
        r = { opacity: '0 !important' },
        o = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? 0.42 : 0.5 }
      return {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        margin: 0,
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        minWidth: 0,
        width: '100%',
        '&::-webkit-input-placeholder': n,
        '&::-moz-placeholder': n,
        '&::-ms-input-placeholder': n,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${Eo.formControl} &`]: {
          '&::-webkit-input-placeholder': r,
          '&::-moz-placeholder': r,
          '&::-ms-input-placeholder': r,
          '&:focus::-webkit-input-placeholder': o,
          '&:focus::-moz-placeholder': o,
          '&:focus::-ms-input-placeholder': o
        },
        [`&.${Eo.disabled}`]: { opacity: 1, WebkitTextFillColor: (e.vars || e).palette.text.disabled },
        variants: [
          {
            props: ({ ownerState: i }) => !i.disableInjectingGlobalStyles,
            style: {
              animationName: 'mui-auto-fill-cancel',
              animationDuration: '10ms',
              '&:-webkit-autofill': { animationDuration: '5000s', animationName: 'mui-auto-fill' }
            }
          },
          { props: { size: 'small' }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: { height: 'auto', resize: 'none', padding: 0, paddingTop: 0 }
          },
          { props: { type: 'search' }, style: { MozAppearance: 'textfield' } }
        ]
      }
    })
  ),
  mh = Xd({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } }
  }),
  cf = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiInputBase' }),
      {
        'aria-describedby': o,
        autoComplete: i,
        autoFocus: s,
        className: l,
        color: a,
        components: u = {},
        componentsProps: d = {},
        defaultValue: f,
        disabled: p,
        disableInjectingGlobalStyles: x,
        endAdornment: v,
        error: w,
        fullWidth: R = !1,
        id: m,
        inputComponent: g = 'input',
        inputProps: c = {},
        inputRef: y,
        margin: C,
        maxRows: E,
        minRows: b,
        multiline: T = !1,
        name: I,
        onBlur: h,
        onChange: _,
        onClick: $,
        onFocus: N,
        onKeyDown: B,
        onKeyUp: A,
        placeholder: z,
        readOnly: D,
        renderSuffix: P,
        rows: M,
        size: j,
        slotProps: K = {},
        slots: q = {},
        startAdornment: X,
        type: Q = 'text',
        value: ve,
        ...Se
      } = r,
      Ie = c.value != null ? c.value : ve,
      { current: tt } = S.useRef(Ie != null),
      Te = S.useRef(),
      J = S.useCallback((ge) => {}, []),
      le = Ye(Te, y, c.ref, J),
      [Z, De] = S.useState(!1),
      Y = Ao(),
      ce = Io({
        props: r,
        muiFormControl: Y,
        states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
      })
    ;(ce.focused = Y ? Y.focused : Z),
      S.useEffect(() => {
        !Y && p && Z && (De(!1), h && h())
      }, [Y, p, Z, h])
    const gt = Y && Y.onFilled,
      Pe = Y && Y.onEmpty,
      Ae = S.useCallback(
        (ge) => {
          wl(ge) ? gt && gt() : Pe && Pe()
        },
        [gt, Pe]
      )
    Ar(() => {
      tt && Ae({ value: Ie })
    }, [Ie, Ae, tt])
    const Ge = (ge) => {
        N && N(ge), c.onFocus && c.onFocus(ge), Y && Y.onFocus ? Y.onFocus(ge) : De(!0)
      },
      bt = (ge) => {
        h && h(ge), c.onBlur && c.onBlur(ge), Y && Y.onBlur ? Y.onBlur(ge) : De(!1)
      },
      he = (ge, ...pr) => {
        if (!tt) {
          const Mo = ge.target || Te.current
          if (Mo == null) throw new Error(jn(1))
          Ae({ value: Mo.value })
        }
        c.onChange && c.onChange(ge, ...pr), _ && _(ge, ...pr)
      }
    S.useEffect(() => {
      Ae(Te.current)
    }, [])
    const Lt = (ge) => {
      Te.current && ge.currentTarget === ge.target && Te.current.focus(), $ && $(ge)
    }
    let V = g,
      Ue = c
    T &&
      V === 'input' &&
      (M
        ? (Ue = { type: void 0, minRows: M, maxRows: M, ...Ue })
        : (Ue = { type: void 0, maxRows: E, minRows: b, ...Ue }),
      (V = Tb))
    const Fn = (ge) => {
      Ae(ge.animationName === 'mui-auto-fill-cancel' ? Te.current : { value: 'x' })
    }
    S.useEffect(() => {
      Y && Y.setAdornedStart(!!X)
    }, [Y, X])
    const Bt = {
        ...r,
        color: ce.color || 'primary',
        disabled: ce.disabled,
        endAdornment: v,
        error: ce.error,
        focused: ce.focused,
        formControl: Y,
        fullWidth: R,
        hiddenLabel: ce.hiddenLabel,
        multiline: T,
        size: ce.size,
        startAdornment: X,
        type: Q
      },
      me = Ob(Bt),
      Ce = q.root || u.Root || Ia,
      Et = K.root || d.root || {},
      Tn = q.input || u.Input || Aa
    return (
      (Ue = { ...Ue, ...(K.input ?? d.input) }),
      k.jsxs(S.Fragment, {
        children: [
          !x && typeof mh == 'function' && (hh || (hh = k.jsx(mh, {}))),
          k.jsxs(Ce, {
            ...Et,
            ref: n,
            onClick: Lt,
            ...Se,
            ...(!zi(Ce) && { ownerState: { ...Bt, ...Et.ownerState } }),
            className: H(me.root, Et.className, l, D && 'MuiInputBase-readOnly'),
            children: [
              X,
              k.jsx(uf.Provider, {
                value: null,
                children: k.jsx(Tn, {
                  'aria-invalid': ce.error,
                  'aria-describedby': o,
                  autoComplete: i,
                  autoFocus: s,
                  defaultValue: f,
                  disabled: ce.disabled,
                  id: m,
                  onAnimationStart: Fn,
                  name: I,
                  placeholder: z,
                  readOnly: D,
                  required: ce.required,
                  rows: M,
                  value: Ie,
                  onKeyDown: B,
                  onKeyUp: A,
                  type: Q,
                  ...Ue,
                  ...(!zi(Tn) && { as: V, ownerState: { ...Bt, ...Ue.ownerState } }),
                  ref: le,
                  className: H(me.input, Ue.className, D && 'MuiInputBase-readOnly'),
                  onBlur: bt,
                  onChange: he,
                  onFocus: Ge
                })
              }),
              v,
              P ? P({ ...ce, startAdornment: X }) : null
            ]
          })
        ]
      })
    )
  })
function Ib(e) {
  return re('MuiInput', e)
}
const Ko = { ...Eo, ...ne('MuiInput', ['root', 'underline', 'input']) }
function Ab(e) {
  return re('MuiOutlinedInput', e)
}
const hn = { ...Eo, ...ne('MuiOutlinedInput', ['root', 'notchedOutline', 'input']) }
function Mb(e) {
  return re('MuiFilledInput', e)
}
const hr = {
    ...Eo,
    ...ne('MuiFilledInput', [
      'root',
      'underline',
      'input',
      'adornedStart',
      'adornedEnd',
      'sizeSmall',
      'multiline',
      'hiddenLabel'
    ])
  },
  $b = Qt(k.jsx('path', { d: 'M7 10l5 5 5-5z' }), 'ArrowDropDown'),
  Nb = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  c0 = S.forwardRef(function (t, n) {
    const r = Br(),
      o = { enter: r.transitions.duration.enteringScreen, exit: r.transitions.duration.leavingScreen },
      {
        addEndListener: i,
        appear: s = !0,
        children: l,
        easing: a,
        in: u,
        onEnter: d,
        onEntered: f,
        onEntering: p,
        onExit: x,
        onExited: v,
        onExiting: w,
        style: R,
        timeout: m = o,
        TransitionComponent: g = dn,
        ...c
      } = t,
      y = S.useRef(null),
      C = Ye(y, Lr(l), n),
      E = (B) => (A) => {
        if (B) {
          const z = y.current
          A === void 0 ? B(z) : B(z, A)
        }
      },
      b = E(p),
      T = E((B, A) => {
        af(B)
        const z = bo({ style: R, timeout: m, easing: a }, { mode: 'enter' })
        ;(B.style.webkitTransition = r.transitions.create('opacity', z)),
          (B.style.transition = r.transitions.create('opacity', z)),
          d && d(B, A)
      }),
      I = E(f),
      h = E(w),
      _ = E((B) => {
        const A = bo({ style: R, timeout: m, easing: a }, { mode: 'exit' })
        ;(B.style.webkitTransition = r.transitions.create('opacity', A)),
          (B.style.transition = r.transitions.create('opacity', A)),
          x && x(B)
      }),
      $ = E(v),
      N = (B) => {
        i && i(y.current, B)
      }
    return k.jsx(g, {
      appear: s,
      in: u,
      nodeRef: y,
      onEnter: T,
      onEntered: I,
      onEntering: b,
      onExit: _,
      onExited: $,
      onExiting: h,
      addEndListener: N,
      timeout: m,
      ...c,
      children: (B, A) =>
        S.cloneElement(l, {
          style: { opacity: 0, visibility: B === 'exited' && !u ? 'hidden' : void 0, ...Nb[B], ...R, ...l.props.style },
          ref: C,
          ...A
        })
    })
  })
function Lb(e) {
  return re('MuiBackdrop', e)
}
ne('MuiBackdrop', ['root', 'invisible'])
const Bb = (e) => {
    const { ownerState: t, ...n } = e
    return n
  },
  zb = (e) => {
    const { classes: t, invisible: n } = e
    return se({ root: ['root', n && 'invisible'] }, Lb, t)
  },
  jb = W('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.invisible && t.invisible]
    }
  })({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [{ props: { invisible: !0 }, style: { backgroundColor: 'transparent' } }]
  }),
  d0 = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiBackdrop' }),
      {
        children: o,
        className: i,
        component: s = 'div',
        invisible: l = !1,
        open: a,
        components: u = {},
        componentsProps: d = {},
        slotProps: f = {},
        slots: p = {},
        TransitionComponent: x,
        transitionDuration: v,
        ...w
      } = r,
      R = { ...r, component: s, invisible: l },
      m = zb(R),
      g = { transition: x, root: u.Root, ...p },
      c = { ...d, ...f },
      y = { slots: g, slotProps: c },
      [C, E] = rn('root', { elementType: jb, externalForwardedProps: y, className: H(m.root, i), ownerState: R }),
      [b, T] = rn('transition', { elementType: c0, externalForwardedProps: y, ownerState: R }),
      I = Bb(T)
    return k.jsx(b, {
      in: a,
      timeout: v,
      ...w,
      ...I,
      children: k.jsx(C, { 'aria-hidden': !0, ...E, classes: m, ref: n, children: o })
    })
  }),
  Db = ne('MuiBox', ['root']),
  Fb = ga(),
  Mr = sw({ themeId: kn, defaultTheme: Fb, defaultClassName: Db.root, generateClassName: yy.generate })
function Wb(e) {
  return re('MuiButton', e)
}
const Gr = ne('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge'
  ]),
  Ub = S.createContext({}),
  Vb = S.createContext(void 0),
  Hb = (e) => {
    const { color: t, disableElevation: n, fullWidth: r, size: o, variant: i, classes: s } = e,
      l = {
        root: [
          'root',
          i,
          `${i}${U(t)}`,
          `size${U(o)}`,
          `${i}Size${U(o)}`,
          `color${U(t)}`,
          n && 'disableElevation',
          r && 'fullWidth'
        ],
        label: ['label'],
        startIcon: ['icon', 'startIcon', `iconSize${U(o)}`],
        endIcon: ['icon', 'endIcon', `iconSize${U(o)}`]
      },
      a = se(l, Wb, s)
    return { ...s, ...a }
  },
  f0 = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } }
  ],
  Kb = W(u0, {
    shouldForwardProp: (e) => qt(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${U(n.color)}`],
        t[`size${U(n.size)}`],
        t[`${n.variant}Size${U(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth
      ]
    }
  })(
    fe(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? e.palette.grey[300] : e.palette.grey[800],
        n = e.palette.mode === 'light' ? e.palette.grey.A100 : e.palette.grey[700]
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
          duration: e.transitions.duration.short
        }),
        '&:hover': { textDecoration: 'none' },
        [`&.${Gr.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (e.vars || e).shadows[2],
              '&:hover': {
                boxShadow: (e.vars || e).shadows[4],
                '@media (hover: none)': { boxShadow: (e.vars || e).shadows[2] }
              },
              '&:active': { boxShadow: (e.vars || e).shadows[8] },
              [`&.${Gr.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${Gr.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action.disabledBackground
              }
            }
          },
          {
            props: { variant: 'outlined' },
            style: {
              padding: '5px 15px',
              border: '1px solid currentColor',
              borderColor: 'var(--variant-outlinedBorder, currentColor)',
              backgroundColor: 'var(--variant-outlinedBg)',
              color: 'var(--variant-outlinedColor)',
              [`&.${Gr.disabled}`]: { border: `1px solid ${(e.vars || e).palette.action.disabledBackground}` }
            }
          },
          {
            props: { variant: 'text' },
            style: { padding: '6px 8px', color: 'var(--variant-textColor)', backgroundColor: 'var(--variant-textBg)' }
          },
          ...Object.entries(e.palette)
            .filter(ur())
            .map(([r]) => ({
              props: { color: r },
              style: {
                '--variant-textColor': (e.vars || e).palette[r].main,
                '--variant-outlinedColor': (e.vars || e).palette[r].main,
                '--variant-outlinedBorder': e.vars
                  ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)`
                  : nn(e.palette[r].main, 0.5),
                '--variant-containedColor': (e.vars || e).palette[r].contrastText,
                '--variant-containedBg': (e.vars || e).palette[r].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (e.vars || e).palette[r].dark,
                    '--variant-textBg': e.vars
                      ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : nn(e.palette[r].main, e.palette.action.hoverOpacity),
                    '--variant-outlinedBorder': (e.vars || e).palette[r].main,
                    '--variant-outlinedBg': e.vars
                      ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : nn(e.palette[r].main, e.palette.action.hoverOpacity)
                  }
                }
              }
            })),
          {
            props: { color: 'inherit' },
            style: {
              color: 'inherit',
              borderColor: 'currentColor',
              '--variant-containedBg': e.vars ? e.vars.palette.Button.inheritContainedBg : t,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
                  '--variant-textBg': e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : nn(e.palette.text.primary, e.palette.action.hoverOpacity),
                  '--variant-outlinedBg': e.vars
                    ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : nn(e.palette.text.primary, e.palette.action.hoverOpacity)
                }
              }
            }
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: e.typography.pxToRem(13) }
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: e.typography.pxToRem(15) }
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: e.typography.pxToRem(13) }
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: e.typography.pxToRem(15) }
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: e.typography.pxToRem(13) }
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: e.typography.pxToRem(15) }
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${Gr.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${Gr.disabled}`]: { boxShadow: 'none' }
            }
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } }
        ]
      }
    })
  ),
  Gb = W('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.startIcon, t[`iconSize${U(n.size)}`]]
    }
  })({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [{ props: { size: 'small' }, style: { marginLeft: -2 } }, ...f0]
  }),
  qb = W('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.endIcon, t[`iconSize${U(n.size)}`]]
    }
  })({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [{ props: { size: 'small' }, style: { marginRight: -2 } }, ...f0]
  }),
  Cl = S.forwardRef(function (t, n) {
    const r = S.useContext(Ub),
      o = S.useContext(Vb),
      i = Li(r, t),
      s = oe({ props: i, name: 'MuiButton' }),
      {
        children: l,
        color: a = 'primary',
        component: u = 'button',
        className: d,
        disabled: f = !1,
        disableElevation: p = !1,
        disableFocusRipple: x = !1,
        endIcon: v,
        focusVisibleClassName: w,
        fullWidth: R = !1,
        size: m = 'medium',
        startIcon: g,
        type: c,
        variant: y = 'text',
        ...C
      } = s,
      E = {
        ...s,
        color: a,
        component: u,
        disabled: f,
        disableElevation: p,
        disableFocusRipple: x,
        fullWidth: R,
        size: m,
        type: c,
        variant: y
      },
      b = Hb(E),
      T = g && k.jsx(Gb, { className: b.startIcon, ownerState: E, children: g }),
      I = v && k.jsx(qb, { className: b.endIcon, ownerState: E, children: v }),
      h = o || ''
    return k.jsxs(Kb, {
      ownerState: E,
      className: H(r.className, b.root, d, h),
      component: u,
      disabled: f,
      focusRipple: !x,
      focusVisibleClassName: H(b.focusVisible, w),
      ref: n,
      type: c,
      ...C,
      classes: b,
      children: [T, l, I]
    })
  })
function gh(e) {
  return e.substring(2).toLowerCase()
}
function Qb(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY
}
function Yb(e) {
  const {
      children: t,
      disableReactTree: n = !1,
      mouseEvent: r = 'onClick',
      onClickAway: o,
      touchEvent: i = 'onTouchEnd'
    } = e,
    s = S.useRef(!1),
    l = S.useRef(null),
    a = S.useRef(!1),
    u = S.useRef(!1)
  S.useEffect(
    () => (
      setTimeout(() => {
        a.current = !0
      }, 0),
      () => {
        a.current = !1
      }
    ),
    []
  )
  const d = Ye(Lr(t), l),
    f = Mn((v) => {
      const w = u.current
      u.current = !1
      const R = Ct(l.current)
      if (!a.current || !l.current || ('clientX' in v && Qb(v, R))) return
      if (s.current) {
        s.current = !1
        return
      }
      let m
      v.composedPath
        ? (m = v.composedPath().includes(l.current))
        : (m = !R.documentElement.contains(v.target) || l.current.contains(v.target)),
        !m && (n || !w) && o(v)
    }),
    p = (v) => (w) => {
      u.current = !0
      const R = t.props[v]
      R && R(w)
    },
    x = { ref: d }
  return (
    i !== !1 && (x[i] = p(i)),
    S.useEffect(() => {
      if (i !== !1) {
        const v = gh(i),
          w = Ct(l.current),
          R = () => {
            s.current = !0
          }
        return (
          w.addEventListener(v, f),
          w.addEventListener('touchmove', R),
          () => {
            w.removeEventListener(v, f), w.removeEventListener('touchmove', R)
          }
        )
      }
    }, [f, i]),
    r !== !1 && (x[r] = p(r)),
    S.useEffect(() => {
      if (r !== !1) {
        const v = gh(r),
          w = Ct(l.current)
        return (
          w.addEventListener(v, f),
          () => {
            w.removeEventListener(v, f)
          }
        )
      }
    }, [f, r]),
    k.jsx(S.Fragment, { children: S.cloneElement(t, x) })
  )
}
function Xb(e) {
  const t = Ct(e)
  return t.body === e ? cn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
}
function pi(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden')
}
function yh(e) {
  return parseInt(cn(e).getComputedStyle(e).paddingRight, 10) || 0
}
function Jb(e) {
  const n = [
      'TEMPLATE',
      'SCRIPT',
      'STYLE',
      'LINK',
      'MAP',
      'META',
      'NOSCRIPT',
      'PICTURE',
      'COL',
      'COLGROUP',
      'PARAM',
      'SLOT',
      'SOURCE',
      'TRACK'
    ].includes(e.tagName),
    r = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden'
  return n || r
}
function vh(e, t, n, r, o) {
  const i = [t, n, ...r]
  ;[].forEach.call(e.children, (s) => {
    const l = !i.includes(s),
      a = !Jb(s)
    l && a && pi(s, o)
  })
}
function hu(e, t) {
  let n = -1
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n
}
function Zb(e, t) {
  const n = [],
    r = e.container
  if (!t.disableScrollLock) {
    if (Xb(r)) {
      const s = Ey(cn(r))
      n.push({ value: r.style.paddingRight, property: 'padding-right', el: r }),
        (r.style.paddingRight = `${yh(r) + s}px`)
      const l = Ct(r).querySelectorAll('.mui-fixed')
      ;[].forEach.call(l, (a) => {
        n.push({ value: a.style.paddingRight, property: 'padding-right', el: a }),
          (a.style.paddingRight = `${yh(a) + s}px`)
      })
    }
    let i
    if (r.parentNode instanceof DocumentFragment) i = Ct(r).body
    else {
      const s = r.parentElement,
        l = cn(r)
      i = (s == null ? void 0 : s.nodeName) === 'HTML' && l.getComputedStyle(s).overflowY === 'scroll' ? s : r
    }
    n.push(
      { value: i.style.overflow, property: 'overflow', el: i },
      { value: i.style.overflowX, property: 'overflow-x', el: i },
      { value: i.style.overflowY, property: 'overflow-y', el: i }
    ),
      (i.style.overflow = 'hidden')
  }
  return () => {
    n.forEach(({ value: i, el: s, property: l }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l)
    })
  }
}
function e2(e) {
  const t = []
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute('aria-hidden') === 'true' && t.push(n)
    }),
    t
  )
}
class t2 {
  constructor() {
    ;(this.modals = []), (this.containers = [])
  }
  add(t, n) {
    let r = this.modals.indexOf(t)
    if (r !== -1) return r
    ;(r = this.modals.length), this.modals.push(t), t.modalRef && pi(t.modalRef, !1)
    const o = e2(n)
    vh(n, t.mount, t.modalRef, o, !0)
    const i = hu(this.containers, (s) => s.container === n)
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({ modals: [t], container: n, restore: null, hiddenSiblings: o }), r)
  }
  mount(t, n) {
    const r = hu(this.containers, (i) => i.modals.includes(t)),
      o = this.containers[r]
    o.restore || (o.restore = Zb(o, n))
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t)
    if (r === -1) return r
    const o = hu(this.containers, (s) => s.modals.includes(t)),
      i = this.containers[o]
    if ((i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0))
      i.restore && i.restore(),
        t.modalRef && pi(t.modalRef, n),
        vh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1)
    else {
      const s = i.modals[i.modals.length - 1]
      s.modalRef && pi(s.modalRef, !1)
    }
    return r
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
  }
}
const n2 = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])'
].join(',')
function r2(e) {
  const t = parseInt(e.getAttribute('tabindex') || '', 10)
  return Number.isNaN(t)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' || e.nodeName === 'VIDEO' || e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : t
}
function o2(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`)
  let n = t(`[name="${e.name}"]:checked`)
  return n || (n = t(`[name="${e.name}"]`)), n !== e
}
function i2(e) {
  return !(e.disabled || (e.tagName === 'INPUT' && e.type === 'hidden') || o2(e))
}
function s2(e) {
  const t = [],
    n = []
  return (
    Array.from(e.querySelectorAll(n2)).forEach((r, o) => {
      const i = r2(r)
      i === -1 || !i2(r) || (i === 0 ? t.push(r) : n.push({ documentOrder: o, tabIndex: i, node: r }))
    }),
    n
      .sort((r, o) => (r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex))
      .map((r) => r.node)
      .concat(t)
  )
}
function l2() {
  return !0
}
function a2(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = s2,
      isEnabled: s = l2,
      open: l
    } = e,
    a = S.useRef(!1),
    u = S.useRef(null),
    d = S.useRef(null),
    f = S.useRef(null),
    p = S.useRef(null),
    x = S.useRef(!1),
    v = S.useRef(null),
    w = Ye(Lr(t), v),
    R = S.useRef(null)
  S.useEffect(() => {
    !l || !v.current || (x.current = !n)
  }, [n, l]),
    S.useEffect(() => {
      if (!l || !v.current) return
      const c = Ct(v.current)
      return (
        v.current.contains(c.activeElement) ||
          (v.current.hasAttribute('tabIndex') || v.current.setAttribute('tabIndex', '-1'),
          x.current && v.current.focus()),
        () => {
          o || (f.current && f.current.focus && ((a.current = !0), f.current.focus()), (f.current = null))
        }
      )
    }, [l]),
    S.useEffect(() => {
      if (!l || !v.current) return
      const c = Ct(v.current),
        y = (b) => {
          ;(R.current = b),
            !(r || !s() || b.key !== 'Tab') &&
              c.activeElement === v.current &&
              b.shiftKey &&
              ((a.current = !0), d.current && d.current.focus())
        },
        C = () => {
          var I, h
          const b = v.current
          if (b === null) return
          if (!c.hasFocus() || !s() || a.current) {
            a.current = !1
            return
          }
          if (b.contains(c.activeElement) || (r && c.activeElement !== u.current && c.activeElement !== d.current))
            return
          if (c.activeElement !== p.current) p.current = null
          else if (p.current !== null) return
          if (!x.current) return
          let T = []
          if (((c.activeElement === u.current || c.activeElement === d.current) && (T = i(v.current)), T.length > 0)) {
            const _ = !!((I = R.current) != null && I.shiftKey && ((h = R.current) == null ? void 0 : h.key) === 'Tab'),
              $ = T[0],
              N = T[T.length - 1]
            typeof $ != 'string' && typeof N != 'string' && (_ ? N.focus() : $.focus())
          } else b.focus()
        }
      c.addEventListener('focusin', C), c.addEventListener('keydown', y, !0)
      const E = setInterval(() => {
        c.activeElement && c.activeElement.tagName === 'BODY' && C()
      }, 50)
      return () => {
        clearInterval(E), c.removeEventListener('focusin', C), c.removeEventListener('keydown', y, !0)
      }
    }, [n, r, o, s, l, i])
  const m = (c) => {
      f.current === null && (f.current = c.relatedTarget), (x.current = !0), (p.current = c.target)
      const y = t.props.onFocus
      y && y(c)
    },
    g = (c) => {
      f.current === null && (f.current = c.relatedTarget), (x.current = !0)
    }
  return k.jsxs(S.Fragment, {
    children: [
      k.jsx('div', { tabIndex: l ? 0 : -1, onFocus: g, ref: u, 'data-testid': 'sentinelStart' }),
      S.cloneElement(t, { ref: w, onFocus: m }),
      k.jsx('div', { tabIndex: l ? 0 : -1, onFocus: g, ref: d, 'data-testid': 'sentinelEnd' })
    ]
  })
}
function u2(e) {
  return typeof e == 'function' ? e() : e
}
function c2(e) {
  return e ? e.props.hasOwnProperty('in') : !1
}
const xs = new t2()
function d2(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      closeAfterTransition: o = !1,
      onTransitionEnter: i,
      onTransitionExited: s,
      children: l,
      onClose: a,
      open: u,
      rootRef: d
    } = e,
    f = S.useRef({}),
    p = S.useRef(null),
    x = S.useRef(null),
    v = Ye(x, d),
    [w, R] = S.useState(!u),
    m = c2(l)
  let g = !0
  ;(e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (g = !1)
  const c = () => Ct(p.current),
    y = () => ((f.current.modalRef = x.current), (f.current.mount = p.current), f.current),
    C = () => {
      xs.mount(y(), { disableScrollLock: r }), x.current && (x.current.scrollTop = 0)
    },
    E = Mn(() => {
      const A = u2(t) || c().body
      xs.add(y(), A), x.current && C()
    }),
    b = () => xs.isTopModal(y()),
    T = Mn((A) => {
      ;(p.current = A), A && (u && b() ? C() : x.current && pi(x.current, g))
    }),
    I = S.useCallback(() => {
      xs.remove(y(), g)
    }, [g])
  S.useEffect(
    () => () => {
      I()
    },
    [I]
  ),
    S.useEffect(() => {
      u ? E() : (!m || !o) && I()
    }, [u, I, m, o, E])
  const h = (A) => (z) => {
      var D
      ;(D = A.onKeyDown) == null || D.call(A, z),
        !(z.key !== 'Escape' || z.which === 229 || !b()) && (n || (z.stopPropagation(), a && a(z, 'escapeKeyDown')))
    },
    _ = (A) => (z) => {
      var D
      ;(D = A.onClick) == null || D.call(A, z), z.target === z.currentTarget && a && a(z, 'backdropClick')
    }
  return {
    getRootProps: (A = {}) => {
      const z = yl(e)
      delete z.onTransitionEnter, delete z.onTransitionExited
      const D = { ...z, ...A }
      return { role: 'presentation', ...D, onKeyDown: h(D), ref: v }
    },
    getBackdropProps: (A = {}) => {
      const z = A
      return { 'aria-hidden': !0, ...z, onClick: _(z), open: u }
    },
    getTransitionProps: () => {
      const A = () => {
          R(!1), i && i()
        },
        z = () => {
          R(!0), s && s(), o && I()
        }
      return {
        onEnter: Fp(A, l == null ? void 0 : l.props.onEnter),
        onExited: Fp(z, l == null ? void 0 : l.props.onExited)
      }
    },
    rootRef: v,
    portalRef: T,
    isTopModal: b,
    exited: w,
    hasTransition: m
  }
}
function f2(e) {
  return re('MuiModal', e)
}
ne('MuiModal', ['root', 'hidden', 'backdrop'])
const p2 = (e) => {
    const { open: t, exited: n, classes: r } = e
    return se({ root: ['root', !t && n && 'hidden'], backdrop: ['backdrop'] }, f2, r)
  },
  h2 = W('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, !n.open && n.exited && t.hidden]
    }
  })(
    fe(({ theme: e }) => ({
      position: 'fixed',
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [{ props: ({ ownerState: t }) => !t.open && t.exited, style: { visibility: 'hidden' } }]
    }))
  ),
  m2 = W(d0, { name: 'MuiModal', slot: 'Backdrop', overridesResolver: (e, t) => t.backdrop })({ zIndex: -1 }),
  df = S.forwardRef(function (t, n) {
    const r = oe({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: o = m2,
        BackdropProps: i,
        classes: s,
        className: l,
        closeAfterTransition: a = !1,
        children: u,
        container: d,
        component: f,
        components: p = {},
        componentsProps: x = {},
        disableAutoFocus: v = !1,
        disableEnforceFocus: w = !1,
        disableEscapeKeyDown: R = !1,
        disablePortal: m = !1,
        disableRestoreFocus: g = !1,
        disableScrollLock: c = !1,
        hideBackdrop: y = !1,
        keepMounted: C = !1,
        onBackdropClick: E,
        onClose: b,
        onTransitionEnter: T,
        onTransitionExited: I,
        open: h,
        slotProps: _ = {},
        slots: $ = {},
        theme: N,
        ...B
      } = r,
      A = {
        ...r,
        closeAfterTransition: a,
        disableAutoFocus: v,
        disableEnforceFocus: w,
        disableEscapeKeyDown: R,
        disablePortal: m,
        disableRestoreFocus: g,
        disableScrollLock: c,
        hideBackdrop: y,
        keepMounted: C
      },
      {
        getRootProps: z,
        getBackdropProps: D,
        getTransitionProps: P,
        portalRef: M,
        isTopModal: j,
        exited: K,
        hasTransition: q
      } = d2({ ...A, rootRef: n }),
      X = { ...A, exited: K },
      Q = p2(X),
      ve = {}
    if ((u.props.tabIndex === void 0 && (ve.tabIndex = '-1'), q)) {
      const { onEnter: Z, onExited: De } = P()
      ;(ve.onEnter = Z), (ve.onExited = De)
    }
    const Se = { ...B, slots: { root: p.Root, backdrop: p.Backdrop, ...$ }, slotProps: { ...x, ..._ } },
      [Ie, tt] = rn('root', {
        elementType: h2,
        externalForwardedProps: Se,
        getSlotProps: z,
        additionalProps: { ref: n, as: f },
        ownerState: X,
        className: H(l, Q == null ? void 0 : Q.root, !X.open && X.exited && (Q == null ? void 0 : Q.hidden))
      }),
      [Te, J] = rn('backdrop', {
        elementType: o,
        externalForwardedProps: Se,
        additionalProps: i,
        getSlotProps: (Z) =>
          D({
            ...Z,
            onClick: (De) => {
              E && E(De), Z != null && Z.onClick && Z.onClick(De)
            }
          }),
        className: H(i == null ? void 0 : i.className, Q == null ? void 0 : Q.backdrop),
        ownerState: X
      }),
      le = Ye(i == null ? void 0 : i.ref, J.ref)
    return !C && !h && (!q || K)
      ? null
      : k.jsx(bb, {
          ref: M,
          container: d,
          disablePortal: m,
          children: k.jsxs(Ie, {
            ...tt,
            children: [
              !y && o ? k.jsx(Te, { ...J, ref: le }) : null,
              k.jsx(a2, {
                disableEnforceFocus: w,
                disableAutoFocus: v,
                disableRestoreFocus: g,
                isEnabled: j,
                open: h,
                children: S.cloneElement(u, ve)
              })
            ]
          })
        })
  })
function g2(e) {
  return re('MuiDialog', e)
}
const mu = ne('MuiDialog', [
    'root',
    'scrollPaper',
    'scrollBody',
    'container',
    'paper',
    'paperScrollPaper',
    'paperScrollBody',
    'paperWidthFalse',
    'paperWidthXs',
    'paperWidthSm',
    'paperWidthMd',
    'paperWidthLg',
    'paperWidthXl',
    'paperFullWidth',
    'paperFullScreen'
  ]),
  p0 = S.createContext({}),
  y2 = W(d0, { name: 'MuiDialog', slot: 'Backdrop', overrides: (e, t) => t.backdrop })({ zIndex: -1 }),
  v2 = (e) => {
    const { classes: t, scroll: n, maxWidth: r, fullWidth: o, fullScreen: i } = e,
      s = {
        root: ['root'],
        container: ['container', `scroll${U(n)}`],
        paper: [
          'paper',
          `paperScroll${U(n)}`,
          `paperWidth${U(String(r))}`,
          o && 'paperFullWidth',
          i && 'paperFullScreen'
        ]
      }
    return se(s, g2, t)
  },
  S2 = W(df, { name: 'MuiDialog', slot: 'Root', overridesResolver: (e, t) => t.root })({
    '@media print': { position: 'absolute !important' }
  }),
  x2 = W('div', {
    name: 'MuiDialog',
    slot: 'Container',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.container, t[`scroll${U(n.scroll)}`]]
    }
  })({
    height: '100%',
    '@media print': { height: 'auto' },
    outline: 0,
    variants: [
      { props: { scroll: 'paper' }, style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
      {
        props: { scroll: 'body' },
        style: {
          overflowY: 'auto',
          overflowX: 'hidden',
          textAlign: 'center',
          '&::after': { content: '""', display: 'inline-block', verticalAlign: 'middle', height: '100%', width: '0' }
        }
      }
    ]
  }),
  w2 = W(qi, {
    name: 'MuiDialog',
    slot: 'Paper',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.paper,
        t[`scrollPaper${U(n.scroll)}`],
        t[`paperWidth${U(String(n.maxWidth))}`],
        n.fullWidth && t.paperFullWidth,
        n.fullScreen && t.paperFullScreen
      ]
    }
  })(
    fe(({ theme: e }) => ({
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      '@media print': { overflowY: 'visible', boxShadow: 'none' },
      variants: [
        {
          props: { scroll: 'paper' },
          style: { display: 'flex', flexDirection: 'column', maxHeight: 'calc(100% - 64px)' }
        },
        {
          props: { scroll: 'body' },
          style: { display: 'inline-block', verticalAlign: 'middle', textAlign: 'initial' }
        },
        { props: ({ ownerState: t }) => !t.maxWidth, style: { maxWidth: 'calc(100% - 64px)' } },
        {
          props: { maxWidth: 'xs' },
          style: {
            maxWidth:
              e.breakpoints.unit === 'px'
                ? Math.max(e.breakpoints.values.xs, 444)
                : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
            [`&.${mu.paperScrollBody}`]: {
              [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: { maxWidth: 'calc(100% - 64px)' }
            }
          }
        },
        ...Object.keys(e.breakpoints.values)
          .filter((t) => t !== 'xs')
          .map((t) => ({
            props: { maxWidth: t },
            style: {
              maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
              [`&.${mu.paperScrollBody}`]: {
                [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: { maxWidth: 'calc(100% - 64px)' }
              }
            }
          })),
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: 'calc(100% - 64px)' } },
        {
          props: ({ ownerState: t }) => t.fullScreen,
          style: {
            margin: 0,
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            maxHeight: 'none',
            borderRadius: 0,
            [`&.${mu.paperScrollBody}`]: { margin: 0, maxWidth: '100%' }
          }
        }
      ]
    }))
  ),
  C2 = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiDialog' }),
      o = Br(),
      i = { enter: o.transitions.duration.enteringScreen, exit: o.transitions.duration.leavingScreen },
      {
        'aria-describedby': s,
        'aria-labelledby': l,
        'aria-modal': a = !0,
        BackdropComponent: u,
        BackdropProps: d,
        children: f,
        className: p,
        disableEscapeKeyDown: x = !1,
        fullScreen: v = !1,
        fullWidth: w = !1,
        maxWidth: R = 'sm',
        onBackdropClick: m,
        onClick: g,
        onClose: c,
        open: y,
        PaperComponent: C = qi,
        PaperProps: E = {},
        scroll: b = 'paper',
        TransitionComponent: T = c0,
        transitionDuration: I = i,
        TransitionProps: h,
        ..._
      } = r,
      $ = { ...r, disableEscapeKeyDown: x, fullScreen: v, fullWidth: w, maxWidth: R, scroll: b },
      N = v2($),
      B = S.useRef(),
      A = (M) => {
        B.current = M.target === M.currentTarget
      },
      z = (M) => {
        g && g(M), B.current && ((B.current = null), m && m(M), c && c(M, 'backdropClick'))
      },
      D = Ud(l),
      P = S.useMemo(() => ({ titleId: D }), [D])
    return k.jsx(S2, {
      className: H(N.root, p),
      closeAfterTransition: !0,
      components: { Backdrop: y2 },
      componentsProps: { backdrop: { transitionDuration: I, as: u, ...d } },
      disableEscapeKeyDown: x,
      onClose: c,
      open: y,
      ref: n,
      onClick: z,
      ownerState: $,
      ..._,
      children: k.jsx(T, {
        appear: !0,
        in: y,
        timeout: I,
        role: 'presentation',
        ...h,
        children: k.jsx(x2, {
          className: H(N.container),
          onMouseDown: A,
          ownerState: $,
          children: k.jsx(w2, {
            as: C,
            elevation: 24,
            role: 'dialog',
            'aria-describedby': s,
            'aria-labelledby': D,
            'aria-modal': a,
            ...E,
            className: H(N.paper, E.className),
            ownerState: $,
            children: k.jsx(p0.Provider, { value: P, children: f })
          })
        })
      })
    })
  })
function k2(e) {
  return re('MuiDialogActions', e)
}
ne('MuiDialogActions', ['root', 'spacing'])
const b2 = (e) => {
    const { classes: t, disableSpacing: n } = e
    return se({ root: ['root', !n && 'spacing'] }, k2, t)
  },
  E2 = W('div', {
    name: 'MuiDialogActions',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, !n.disableSpacing && t.spacing]
    }
  })({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto',
    variants: [
      { props: ({ ownerState: e }) => !e.disableSpacing, style: { '& > :not(style) ~ :not(style)': { marginLeft: 8 } } }
    ]
  }),
  R2 = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiDialogActions' }),
      { className: o, disableSpacing: i = !1, ...s } = r,
      l = { ...r, disableSpacing: i },
      a = b2(l)
    return k.jsx(E2, { className: H(a.root, o), ownerState: l, ref: n, ...s })
  })
function T2(e) {
  return re('MuiDialogContent', e)
}
ne('MuiDialogContent', ['root', 'dividers'])
function P2(e) {
  return re('MuiDialogTitle', e)
}
const _2 = ne('MuiDialogTitle', ['root']),
  O2 = (e) => {
    const { classes: t, dividers: n } = e
    return se({ root: ['root', n && 'dividers'] }, T2, t)
  },
  I2 = W('div', {
    name: 'MuiDialogContent',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.dividers && t.dividers]
    }
  })(
    fe(({ theme: e }) => ({
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      overflowY: 'auto',
      padding: '20px 24px',
      variants: [
        {
          props: ({ ownerState: t }) => t.dividers,
          style: {
            padding: '16px 24px',
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`
          }
        },
        { props: ({ ownerState: t }) => !t.dividers, style: { [`.${_2.root} + &`]: { paddingTop: 0 } } }
      ]
    }))
  ),
  A2 = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiDialogContent' }),
      { className: o, dividers: i = !1, ...s } = r,
      l = { ...r, dividers: i },
      a = O2(l)
    return k.jsx(I2, { className: H(a.root, o), ownerState: l, ref: n, ...s })
  }),
  M2 = (e) => {
    const { classes: t } = e
    return se({ root: ['root'] }, P2, t)
  },
  $2 = W(Er, { name: 'MuiDialogTitle', slot: 'Root', overridesResolver: (e, t) => t.root })({
    padding: '16px 24px',
    flex: '0 0 auto'
  }),
  N2 = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiDialogTitle' }),
      { className: o, id: i, ...s } = r,
      l = r,
      a = M2(l),
      { titleId: u = i } = S.useContext(p0)
    return k.jsx($2, {
      component: 'h2',
      className: H(a.root, o),
      ownerState: l,
      ref: n,
      variant: 'h6',
      id: i ?? u,
      ...s
    })
  })
function L2(e) {
  return re('MuiDivider', e)
}
ne('MuiDivider', [
  'root',
  'absolute',
  'fullWidth',
  'inset',
  'middle',
  'flexItem',
  'light',
  'vertical',
  'withChildren',
  'withChildrenVertical',
  'textAlignRight',
  'textAlignLeft',
  'wrapper',
  'wrapperVertical'
])
const B2 = (e) => {
    const { absolute: t, children: n, classes: r, flexItem: o, light: i, orientation: s, textAlign: l, variant: a } = e
    return se(
      {
        root: [
          'root',
          t && 'absolute',
          a,
          i && 'light',
          s === 'vertical' && 'vertical',
          o && 'flexItem',
          n && 'withChildren',
          n && s === 'vertical' && 'withChildrenVertical',
          l === 'right' && s !== 'vertical' && 'textAlignRight',
          l === 'left' && s !== 'vertical' && 'textAlignLeft'
        ],
        wrapper: ['wrapper', s === 'vertical' && 'wrapperVertical']
      },
      L2,
      r
    )
  },
  z2 = W('div', {
    name: 'MuiDivider',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.root,
        n.absolute && t.absolute,
        t[n.variant],
        n.light && t.light,
        n.orientation === 'vertical' && t.vertical,
        n.flexItem && t.flexItem,
        n.children && t.withChildren,
        n.children && n.orientation === 'vertical' && t.withChildrenVertical,
        n.textAlign === 'right' && n.orientation !== 'vertical' && t.textAlignRight,
        n.textAlign === 'left' && n.orientation !== 'vertical' && t.textAlignLeft
      ]
    }
  })(
    fe(({ theme: e }) => ({
      margin: 0,
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: (e.vars || e).palette.divider,
      borderBottomWidth: 'thin',
      variants: [
        { props: { absolute: !0 }, style: { position: 'absolute', bottom: 0, left: 0, width: '100%' } },
        {
          props: { light: !0 },
          style: { borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : nn(e.palette.divider, 0.08) }
        },
        { props: { variant: 'inset' }, style: { marginLeft: 72 } },
        {
          props: { variant: 'middle', orientation: 'horizontal' },
          style: { marginLeft: e.spacing(2), marginRight: e.spacing(2) }
        },
        {
          props: { variant: 'middle', orientation: 'vertical' },
          style: { marginTop: e.spacing(1), marginBottom: e.spacing(1) }
        },
        {
          props: { orientation: 'vertical' },
          style: { height: '100%', borderBottomWidth: 0, borderRightWidth: 'thin' }
        },
        { props: { flexItem: !0 }, style: { alignSelf: 'stretch', height: 'auto' } },
        {
          props: ({ ownerState: t }) => !!t.children,
          style: {
            display: 'flex',
            textAlign: 'center',
            border: 0,
            borderTopStyle: 'solid',
            borderLeftStyle: 'solid',
            '&::before, &::after': { content: '""', alignSelf: 'center' }
          }
        },
        {
          props: ({ ownerState: t }) => t.children && t.orientation !== 'vertical',
          style: {
            '&::before, &::after': {
              width: '100%',
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
              borderTopStyle: 'inherit'
            }
          }
        },
        {
          props: ({ ownerState: t }) => t.orientation === 'vertical' && t.children,
          style: {
            flexDirection: 'column',
            '&::before, &::after': {
              height: '100%',
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              borderLeftStyle: 'inherit'
            }
          }
        },
        {
          props: ({ ownerState: t }) => t.textAlign === 'right' && t.orientation !== 'vertical',
          style: { '&::before': { width: '90%' }, '&::after': { width: '10%' } }
        },
        {
          props: ({ ownerState: t }) => t.textAlign === 'left' && t.orientation !== 'vertical',
          style: { '&::before': { width: '10%' }, '&::after': { width: '90%' } }
        }
      ]
    }))
  ),
  j2 = W('span', {
    name: 'MuiDivider',
    slot: 'Wrapper',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.wrapper, n.orientation === 'vertical' && t.wrapperVertical]
    }
  })(
    fe(({ theme: e }) => ({
      display: 'inline-block',
      paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
      paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      whiteSpace: 'nowrap',
      variants: [
        {
          props: { orientation: 'vertical' },
          style: { paddingTop: `calc(${e.spacing(1)} * 1.2)`, paddingBottom: `calc(${e.spacing(1)} * 1.2)` }
        }
      ]
    }))
  ),
  ji = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiDivider' }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        orientation: l = 'horizontal',
        component: a = i || l === 'vertical' ? 'div' : 'hr',
        flexItem: u = !1,
        light: d = !1,
        role: f = a !== 'hr' ? 'separator' : void 0,
        textAlign: p = 'center',
        variant: x = 'fullWidth',
        ...v
      } = r,
      w = { ...r, absolute: o, component: a, flexItem: u, light: d, orientation: l, role: f, textAlign: p, variant: x },
      R = B2(w)
    return k.jsx(z2, {
      as: a,
      className: H(R.root, s),
      role: f,
      ref: n,
      ownerState: w,
      'aria-orientation': f === 'separator' && (a !== 'hr' || l === 'vertical') ? l : void 0,
      ...v,
      children: i ? k.jsx(j2, { className: R.wrapper, ownerState: w, children: i }) : null
    })
  })
ji && (ji.muiSkipListHighlight = !0)
function D2(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = cn(t)
  let s
  if (t.fakeTransform) s = t.fakeTransform
  else {
    const u = i.getComputedStyle(t)
    s = u.getPropertyValue('-webkit-transform') || u.getPropertyValue('transform')
  }
  let l = 0,
    a = 0
  if (s && s !== 'none' && typeof s == 'string') {
    const u = s.split('(')[1].split(')')[0].split(',')
    ;(l = parseInt(u[4], 10)), (a = parseInt(u[5], 10))
  }
  return e === 'left'
    ? o
      ? `translateX(${o.right + l - r.left}px)`
      : `translateX(${i.innerWidth + l - r.left}px)`
    : e === 'right'
      ? o
        ? `translateX(-${r.right - o.left - l}px)`
        : `translateX(-${r.left + r.width - l}px)`
      : e === 'up'
        ? o
          ? `translateY(${o.bottom + a - r.top}px)`
          : `translateY(${i.innerHeight + a - r.top}px)`
        : o
          ? `translateY(-${r.top - o.top + r.height - a}px)`
          : `translateY(-${r.top + r.height - a}px)`
}
function F2(e) {
  return typeof e == 'function' ? e() : e
}
function ws(e, t, n) {
  const r = F2(n),
    o = D2(e, t, r)
  o && ((t.style.webkitTransform = o), (t.style.transform = o))
}
const W2 = S.forwardRef(function (t, n) {
  const r = Br(),
    o = { enter: r.transitions.easing.easeOut, exit: r.transitions.easing.sharp },
    i = { enter: r.transitions.duration.enteringScreen, exit: r.transitions.duration.leavingScreen },
    {
      addEndListener: s,
      appear: l = !0,
      children: a,
      container: u,
      direction: d = 'down',
      easing: f = o,
      in: p,
      onEnter: x,
      onEntered: v,
      onEntering: w,
      onExit: R,
      onExited: m,
      onExiting: g,
      style: c,
      timeout: y = i,
      TransitionComponent: C = dn,
      ...E
    } = t,
    b = S.useRef(null),
    T = Ye(Lr(a), b, n),
    I = (P) => (M) => {
      P && (M === void 0 ? P(b.current) : P(b.current, M))
    },
    h = I((P, M) => {
      ws(d, P, u), af(P), x && x(P, M)
    }),
    _ = I((P, M) => {
      const j = bo({ timeout: y, style: c, easing: f }, { mode: 'enter' })
      ;(P.style.webkitTransition = r.transitions.create('-webkit-transform', { ...j })),
        (P.style.transition = r.transitions.create('transform', { ...j })),
        (P.style.webkitTransform = 'none'),
        (P.style.transform = 'none'),
        w && w(P, M)
    }),
    $ = I(v),
    N = I(g),
    B = I((P) => {
      const M = bo({ timeout: y, style: c, easing: f }, { mode: 'exit' })
      ;(P.style.webkitTransition = r.transitions.create('-webkit-transform', M)),
        (P.style.transition = r.transitions.create('transform', M)),
        ws(d, P, u),
        R && R(P)
    }),
    A = I((P) => {
      ;(P.style.webkitTransition = ''), (P.style.transition = ''), m && m(P)
    }),
    z = (P) => {
      s && s(b.current, P)
    },
    D = S.useCallback(() => {
      b.current && ws(d, b.current, u)
    }, [d, u])
  return (
    S.useEffect(() => {
      if (p || d === 'down' || d === 'right') return
      const P = Wd(() => {
          b.current && ws(d, b.current, u)
        }),
        M = cn(b.current)
      return (
        M.addEventListener('resize', P),
        () => {
          P.clear(), M.removeEventListener('resize', P)
        }
      )
    }, [d, p, u]),
    S.useEffect(() => {
      p || D()
    }, [p, D]),
    k.jsx(C, {
      nodeRef: b,
      onEnter: h,
      onEntered: $,
      onEntering: _,
      onExit: B,
      onExited: A,
      onExiting: N,
      addEndListener: z,
      appear: l,
      in: p,
      timeout: y,
      ...E,
      children: (P, M) =>
        S.cloneElement(a, {
          ref: T,
          style: { visibility: P === 'exited' && !p ? 'hidden' : void 0, ...c, ...a.props.style },
          ...M
        })
    })
  )
})
function U2(e) {
  return re('MuiDrawer', e)
}
ne('MuiDrawer', [
  'root',
  'docked',
  'paper',
  'paperAnchorLeft',
  'paperAnchorRight',
  'paperAnchorTop',
  'paperAnchorBottom',
  'paperAnchorDockedLeft',
  'paperAnchorDockedRight',
  'paperAnchorDockedTop',
  'paperAnchorDockedBottom',
  'modal'
])
const h0 = (e, t) => {
    const { ownerState: n } = e
    return [t.root, (n.variant === 'permanent' || n.variant === 'persistent') && t.docked, t.modal]
  },
  V2 = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      o = {
        root: ['root'],
        docked: [(r === 'permanent' || r === 'persistent') && 'docked'],
        modal: ['modal'],
        paper: ['paper', `paperAnchor${U(n)}`, r !== 'temporary' && `paperAnchorDocked${U(n)}`]
      }
    return se(o, U2, t)
  },
  H2 = W(df, { name: 'MuiDrawer', slot: 'Root', overridesResolver: h0 })(
    fe(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer }))
  ),
  Sh = W('div', {
    shouldForwardProp: qt,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: h0
  })({ flex: '0 0 auto' }),
  K2 = W(qi, {
    name: 'MuiDrawer',
    slot: 'Paper',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        t.paper,
        t[`paperAnchor${U(n.anchor)}`],
        n.variant !== 'temporary' && t[`paperAnchorDocked${U(n.anchor)}`]
      ]
    }
  })(
    fe(({ theme: e }) => ({
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: (e.vars || e).zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      position: 'fixed',
      top: 0,
      outline: 0,
      variants: [
        { props: { anchor: 'left' }, style: { left: 0 } },
        { props: { anchor: 'top' }, style: { top: 0, left: 0, right: 0, height: 'auto', maxHeight: '100%' } },
        { props: { anchor: 'right' }, style: { right: 0 } },
        {
          props: { anchor: 'bottom' },
          style: { top: 'auto', left: 0, bottom: 0, right: 0, height: 'auto', maxHeight: '100%' }
        },
        {
          props: ({ ownerState: t }) => t.anchor === 'left' && t.variant !== 'temporary',
          style: { borderRight: `1px solid ${(e.vars || e).palette.divider}` }
        },
        {
          props: ({ ownerState: t }) => t.anchor === 'top' && t.variant !== 'temporary',
          style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}` }
        },
        {
          props: ({ ownerState: t }) => t.anchor === 'right' && t.variant !== 'temporary',
          style: { borderLeft: `1px solid ${(e.vars || e).palette.divider}` }
        },
        {
          props: ({ ownerState: t }) => t.anchor === 'bottom' && t.variant !== 'temporary',
          style: { borderTop: `1px solid ${(e.vars || e).palette.divider}` }
        }
      ]
    }))
  ),
  m0 = { left: 'right', right: 'left', top: 'down', bottom: 'up' }
function G2(e) {
  return ['left', 'right'].includes(e)
}
function q2({ direction: e }, t) {
  return e === 'rtl' && G2(t) ? m0[t] : t
}
const Q2 = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiDrawer' }),
      o = Br(),
      i = Iy(),
      s = { enter: o.transitions.duration.enteringScreen, exit: o.transitions.duration.leavingScreen },
      {
        anchor: l = 'left',
        BackdropProps: a,
        children: u,
        className: d,
        elevation: f = 16,
        hideBackdrop: p = !1,
        ModalProps: { BackdropProps: x, ...v } = {},
        onClose: w,
        open: R = !1,
        PaperProps: m = {},
        SlideProps: g,
        TransitionComponent: c = W2,
        transitionDuration: y = s,
        variant: C = 'temporary',
        ...E
      } = r,
      b = S.useRef(!1)
    S.useEffect(() => {
      b.current = !0
    }, [])
    const T = q2({ direction: i ? 'rtl' : 'ltr' }, l),
      h = { ...r, anchor: l, elevation: f, open: R, variant: C, ...E },
      _ = V2(h),
      $ = k.jsx(K2, {
        elevation: C === 'temporary' ? f : 0,
        square: !0,
        ...m,
        className: H(_.paper, m.className),
        ownerState: h,
        children: u
      })
    if (C === 'permanent')
      return k.jsx(Sh, { className: H(_.root, _.docked, d), ownerState: h, ref: n, ...E, children: $ })
    const N = k.jsx(c, { in: R, direction: m0[T], timeout: y, appear: b.current, ...g, children: $ })
    return C === 'persistent'
      ? k.jsx(Sh, { className: H(_.root, _.docked, d), ownerState: h, ref: n, ...E, children: N })
      : k.jsx(H2, {
          BackdropProps: { ...a, ...x, transitionDuration: y },
          className: H(_.root, _.modal, d),
          open: R,
          ownerState: h,
          onClose: w,
          hideBackdrop: p,
          ref: n,
          ...E,
          ...v,
          children: N
        })
  }),
  Y2 = (e) => {
    const {
        classes: t,
        disableUnderline: n,
        startAdornment: r,
        endAdornment: o,
        size: i,
        hiddenLabel: s,
        multiline: l
      } = e,
      a = {
        root: [
          'root',
          !n && 'underline',
          r && 'adornedStart',
          o && 'adornedEnd',
          i === 'small' && `size${U(i)}`,
          s && 'hiddenLabel',
          l && 'multiline'
        ],
        input: ['input']
      },
      u = se(a, Mb, t)
    return { ...t, ...u }
  },
  X2 = W(Ia, {
    shouldForwardProp: (e) => qt(e) || e === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [..._a(e, t), !n.disableUnderline && t.underline]
    }
  })(
    fe(({ theme: e }) => {
      const t = e.palette.mode === 'light',
        n = t ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
        r = t ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
        o = t ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
        i = t ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      return {
        position: 'relative',
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut
        }),
        '&:hover': {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
          '@media (hover: none)': { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r }
        },
        [`&.${hr.focused}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r },
        [`&.${hr.disabled}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i },
        variants: [
          {
            props: ({ ownerState: s }) => !s.disableUnderline,
            style: {
              '&::after': {
                left: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: 0,
                transform: 'scaleX(0)',
                transition: e.transitions.create('transform', {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut
                }),
                pointerEvents: 'none'
              },
              [`&.${hr.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
              [`&.${hr.error}`]: { '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main } },
              '&::before': {
                borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: 'absolute',
                right: 0,
                transition: e.transitions.create('border-bottom-color', { duration: e.transitions.duration.shorter }),
                pointerEvents: 'none'
              },
              [`&:hover:not(.${hr.disabled}, .${hr.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
              },
              [`&.${hr.disabled}:before`]: { borderBottomStyle: 'dotted' }
            }
          },
          ...Object.entries(e.palette)
            .filter(ur())
            .map(([s]) => {
              var l
              return {
                props: { disableUnderline: !1, color: s },
                style: {
                  '&::after': { borderBottom: `2px solid ${(l = (e.vars || e).palette[s]) == null ? void 0 : l.main}` }
                }
              }
            }),
          { props: ({ ownerState: s }) => s.startAdornment, style: { paddingLeft: 12 } },
          { props: ({ ownerState: s }) => s.endAdornment, style: { paddingRight: 12 } },
          { props: ({ ownerState: s }) => s.multiline, style: { padding: '25px 12px 8px' } },
          {
            props: ({ ownerState: s, size: l }) => s.multiline && l === 'small',
            style: { paddingTop: 21, paddingBottom: 4 }
          },
          { props: ({ ownerState: s }) => s.multiline && s.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } },
          {
            props: ({ ownerState: s }) => s.multiline && s.hiddenLabel && s.size === 'small',
            style: { paddingTop: 8, paddingBottom: 9 }
          }
        ]
      }
    })
  ),
  J2 = W(Aa, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: Oa })(
    fe(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit'
        }
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff'
          }
        }
      }),
      variants: [
        { props: { size: 'small' }, style: { paddingTop: 21, paddingBottom: 4 } },
        { props: ({ ownerState: t }) => t.hiddenLabel, style: { paddingTop: 16, paddingBottom: 17 } },
        { props: ({ ownerState: t }) => t.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: t }) => t.endAdornment, style: { paddingRight: 0 } },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === 'small',
          style: { paddingTop: 8, paddingBottom: 9 }
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }
        }
      ]
    }))
  ),
  kl = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiFilledInput' }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: l = !1,
        hiddenLabel: a,
        inputComponent: u = 'input',
        multiline: d = !1,
        slotProps: f,
        slots: p = {},
        type: x = 'text',
        ...v
      } = r,
      w = { ...r, disableUnderline: o, fullWidth: l, inputComponent: u, multiline: d, type: x },
      R = Y2(r),
      m = { root: { ownerState: w }, input: { ownerState: w } },
      g = (f ?? s) ? Ze(m, f ?? s) : m,
      c = p.root ?? i.Root ?? X2,
      y = p.input ?? i.Input ?? J2
    return k.jsx(cf, {
      slots: { root: c, input: y },
      componentsProps: g,
      fullWidth: l,
      inputComponent: u,
      multiline: d,
      ref: n,
      type: x,
      ...v,
      classes: R
    })
  })
kl && (kl.muiName = 'Input')
function Z2(e) {
  return re('MuiFormControl', e)
}
ne('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled'])
const eE = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ['root', n !== 'none' && `margin${U(n)}`, r && 'fullWidth'] }
    return se(o, Z2, t)
  },
  tE = W('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: ({ ownerState: e }, t) => ({
      ...t.root,
      ...t[`margin${U(e.margin)}`],
      ...(e.fullWidth && t.fullWidth)
    })
  })({
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top',
    variants: [
      { props: { margin: 'normal' }, style: { marginTop: 16, marginBottom: 8 } },
      { props: { margin: 'dense' }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: '100%' } }
    ]
  }),
  nE = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiFormControl' }),
      {
        children: o,
        className: i,
        color: s = 'primary',
        component: l = 'div',
        disabled: a = !1,
        error: u = !1,
        focused: d,
        fullWidth: f = !1,
        hiddenLabel: p = !1,
        margin: x = 'none',
        required: v = !1,
        size: w = 'medium',
        variant: R = 'outlined',
        ...m
      } = r,
      g = {
        ...r,
        color: s,
        component: l,
        disabled: a,
        error: u,
        fullWidth: f,
        hiddenLabel: p,
        margin: x,
        required: v,
        size: w,
        variant: R
      },
      c = eE(g),
      [y, C] = S.useState(() => {
        let N = !1
        return (
          o &&
            S.Children.forEach(o, (B) => {
              if (!zs(B, ['Input', 'Select'])) return
              const A = zs(B, ['Select']) ? B.props.input : B
              A && Pb(A.props) && (N = !0)
            }),
          N
        )
      }),
      [E, b] = S.useState(() => {
        let N = !1
        return (
          o &&
            S.Children.forEach(o, (B) => {
              zs(B, ['Input', 'Select']) && (wl(B.props, !0) || wl(B.props.inputProps, !0)) && (N = !0)
            }),
          N
        )
      }),
      [T, I] = S.useState(!1)
    a && T && I(!1)
    const h = d !== void 0 && !a ? d : T
    let _
    S.useRef(!1)
    const $ = S.useMemo(
      () => ({
        adornedStart: y,
        setAdornedStart: C,
        color: s,
        disabled: a,
        error: u,
        filled: E,
        focused: h,
        fullWidth: f,
        hiddenLabel: p,
        size: w,
        onBlur: () => {
          I(!1)
        },
        onEmpty: () => {
          b(!1)
        },
        onFilled: () => {
          b(!0)
        },
        onFocus: () => {
          I(!0)
        },
        registerEffect: _,
        required: v,
        variant: R
      }),
      [y, s, a, u, E, h, f, p, _, v, w, R]
    )
    return k.jsx(uf.Provider, {
      value: $,
      children: k.jsx(tE, { as: l, ownerState: g, className: H(c.root, i), ref: n, ...m, children: o })
    })
  })
function rE(e) {
  return re('MuiFormHelperText', e)
}
const xh = ne('MuiFormHelperText', [
  'root',
  'error',
  'disabled',
  'sizeSmall',
  'sizeMedium',
  'contained',
  'focused',
  'filled',
  'required'
])
var wh
const oE = (e) => {
    const { classes: t, contained: n, size: r, disabled: o, error: i, filled: s, focused: l, required: a } = e,
      u = {
        root: [
          'root',
          o && 'disabled',
          i && 'error',
          r && `size${U(r)}`,
          n && 'contained',
          l && 'focused',
          s && 'filled',
          a && 'required'
        ]
      }
    return se(u, rE, t)
  },
  iE = W('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.size && t[`size${U(n.size)}`], n.contained && t.contained, n.filled && t.filled]
    }
  })(
    fe(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${xh.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${xh.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        { props: ({ ownerState: t }) => t.contained, style: { marginLeft: 14, marginRight: 14 } }
      ]
    }))
  ),
  sE = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiFormHelperText' }),
      {
        children: o,
        className: i,
        component: s = 'p',
        disabled: l,
        error: a,
        filled: u,
        focused: d,
        margin: f,
        required: p,
        variant: x,
        ...v
      } = r,
      w = Ao(),
      R = Io({
        props: r,
        muiFormControl: w,
        states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required']
      }),
      m = {
        ...r,
        component: s,
        contained: R.variant === 'filled' || R.variant === 'outlined',
        variant: R.variant,
        size: R.size,
        disabled: R.disabled,
        error: R.error,
        filled: R.filled,
        focused: R.focused,
        required: R.required
      }
    delete m.ownerState
    const g = oE(m)
    return k.jsx(iE, {
      as: s,
      className: H(g.root, i),
      ref: n,
      ...v,
      ownerState: m,
      children: o === ' ' ? wh || (wh = k.jsx('span', { className: 'notranslate', children: '​' })) : o
    })
  })
function lE(e) {
  return re('MuiFormLabel', e)
}
const hi = ne('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk'
  ]),
  aE = (e) => {
    const { classes: t, color: n, focused: r, disabled: o, error: i, filled: s, required: l } = e,
      a = {
        root: ['root', `color${U(n)}`, o && 'disabled', i && 'error', s && 'filled', r && 'focused', l && 'required'],
        asterisk: ['asterisk', i && 'error']
      }
    return se(a, lE, t)
  },
  uE = W('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: ({ ownerState: e }, t) => ({
      ...t.root,
      ...(e.color === 'secondary' && t.colorSecondary),
      ...(e.filled && t.filled)
    })
  })(
    fe(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(e.palette)
          .filter(ur())
          .map(([t]) => ({
            props: { color: t },
            style: { [`&.${hi.focused}`]: { color: (e.vars || e).palette[t].main } }
          })),
        {
          props: {},
          style: {
            [`&.${hi.disabled}`]: { color: (e.vars || e).palette.text.disabled },
            [`&.${hi.error}`]: { color: (e.vars || e).palette.error.main }
          }
        }
      ]
    }))
  ),
  cE = W('span', { name: 'MuiFormLabel', slot: 'Asterisk', overridesResolver: (e, t) => t.asterisk })(
    fe(({ theme: e }) => ({ [`&.${hi.error}`]: { color: (e.vars || e).palette.error.main } }))
  ),
  dE = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiFormLabel' }),
      {
        children: o,
        className: i,
        color: s,
        component: l = 'label',
        disabled: a,
        error: u,
        filled: d,
        focused: f,
        required: p,
        ...x
      } = r,
      v = Ao(),
      w = Io({ props: r, muiFormControl: v, states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'] }),
      R = {
        ...r,
        color: w.color || 'primary',
        component: l,
        disabled: w.disabled,
        error: w.error,
        filled: w.filled,
        focused: w.focused,
        required: w.required
      },
      m = aE(R)
    return k.jsxs(uE, {
      as: l,
      ownerState: R,
      className: H(m.root, i),
      ref: n,
      ...x,
      children: [
        o,
        w.required && k.jsxs(cE, { ownerState: R, 'aria-hidden': !0, className: m.asterisk, children: [' ', '*'] })
      ]
    })
  })
function Ic(e) {
  return `scale(${e}, ${e ** 2})`
}
const fE = { entering: { opacity: 1, transform: Ic(1) }, entered: { opacity: 1, transform: 'none' } },
  gu =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  bl = S.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: l,
        onEnter: a,
        onEntered: u,
        onEntering: d,
        onExit: f,
        onExited: p,
        onExiting: x,
        style: v,
        timeout: w = 'auto',
        TransitionComponent: R = dn,
        ...m
      } = t,
      g = Hd(),
      c = S.useRef(),
      y = Br(),
      C = S.useRef(null),
      E = Ye(C, Lr(i), n),
      b = (A) => (z) => {
        if (A) {
          const D = C.current
          z === void 0 ? A(D) : A(D, z)
        }
      },
      T = b(d),
      I = b((A, z) => {
        af(A)
        const { duration: D, delay: P, easing: M } = bo({ style: v, timeout: w, easing: s }, { mode: 'enter' })
        let j
        w === 'auto' ? ((j = y.transitions.getAutoHeightDuration(A.clientHeight)), (c.current = j)) : (j = D),
          (A.style.transition = [
            y.transitions.create('opacity', { duration: j, delay: P }),
            y.transitions.create('transform', { duration: gu ? j : j * 0.666, delay: P, easing: M })
          ].join(',')),
          a && a(A, z)
      }),
      h = b(u),
      _ = b(x),
      $ = b((A) => {
        const { duration: z, delay: D, easing: P } = bo({ style: v, timeout: w, easing: s }, { mode: 'exit' })
        let M
        w === 'auto' ? ((M = y.transitions.getAutoHeightDuration(A.clientHeight)), (c.current = M)) : (M = z),
          (A.style.transition = [
            y.transitions.create('opacity', { duration: M, delay: D }),
            y.transitions.create('transform', {
              duration: gu ? M : M * 0.666,
              delay: gu ? D : D || M * 0.333,
              easing: P
            })
          ].join(',')),
          (A.style.opacity = 0),
          (A.style.transform = Ic(0.75)),
          f && f(A)
      }),
      N = b(p),
      B = (A) => {
        w === 'auto' && g.start(c.current || 0, A), r && r(C.current, A)
      }
    return k.jsx(R, {
      appear: o,
      in: l,
      nodeRef: C,
      onEnter: I,
      onEntered: h,
      onEntering: T,
      onExit: $,
      onExited: N,
      onExiting: _,
      addEndListener: B,
      timeout: w === 'auto' ? null : w,
      ...m,
      children: (A, z) =>
        S.cloneElement(i, {
          style: {
            opacity: 0,
            transform: Ic(0.75),
            visibility: A === 'exited' && !l ? 'hidden' : void 0,
            ...fE[A],
            ...v,
            ...i.props.style
          },
          ref: E,
          ...z
        })
    })
  })
bl && (bl.muiSupportAuto = !0)
const pE = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = se({ root: ['root', !n && 'underline'], input: ['input'] }, Ib, t)
    return { ...t, ...o }
  },
  hE = W(Ia, {
    shouldForwardProp: (e) => qt(e) || e === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [..._a(e, t), !n.disableUnderline && t.underline]
    }
  })(
    fe(({ theme: e }) => {
      let n = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)'
      return (
        e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
        {
          position: 'relative',
          variants: [
            { props: ({ ownerState: r }) => r.formControl, style: { 'label + &': { marginTop: 16 } } },
            {
              props: ({ ownerState: r }) => !r.disableUnderline,
              style: {
                '&::after': {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  transform: 'scaleX(0)',
                  transition: e.transitions.create('transform', {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut
                  }),
                  pointerEvents: 'none'
                },
                [`&.${Ko.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
                [`&.${Ko.error}`]: { '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main } },
                '&::before': {
                  borderBottom: `1px solid ${n}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: 'absolute',
                  right: 0,
                  transition: e.transitions.create('border-bottom-color', { duration: e.transitions.duration.shorter }),
                  pointerEvents: 'none'
                },
                [`&:hover:not(.${Ko.disabled}, .${Ko.error}):before`]: {
                  borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                  '@media (hover: none)': { borderBottom: `1px solid ${n}` }
                },
                [`&.${Ko.disabled}:before`]: { borderBottomStyle: 'dotted' }
              }
            },
            ...Object.entries(e.palette)
              .filter(ur())
              .map(([r]) => ({
                props: { color: r, disableUnderline: !1 },
                style: { '&::after': { borderBottom: `2px solid ${(e.vars || e).palette[r].main}` } }
              }))
          ]
        }
      )
    })
  ),
  mE = W(Aa, { name: 'MuiInput', slot: 'Input', overridesResolver: Oa })({}),
  El = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiInput' }),
      {
        disableUnderline: o = !1,
        components: i = {},
        componentsProps: s,
        fullWidth: l = !1,
        inputComponent: a = 'input',
        multiline: u = !1,
        slotProps: d,
        slots: f = {},
        type: p = 'text',
        ...x
      } = r,
      v = pE(r),
      R = { root: { ownerState: { disableUnderline: o } } },
      m = (d ?? s) ? Ze(d ?? s, R) : R,
      g = f.root ?? i.Root ?? hE,
      c = f.input ?? i.Input ?? mE
    return k.jsx(cf, {
      slots: { root: g, input: c },
      slotProps: m,
      fullWidth: l,
      inputComponent: a,
      multiline: u,
      ref: n,
      type: p,
      ...x,
      classes: v
    })
  })
El && (El.muiName = 'Input')
function gE(e) {
  return re('MuiInputLabel', e)
}
ne('MuiInputLabel', [
  'root',
  'focused',
  'disabled',
  'error',
  'required',
  'asterisk',
  'formControl',
  'sizeSmall',
  'shrink',
  'animated',
  'standard',
  'filled',
  'outlined'
])
const yE = (e) => {
    const { classes: t, formControl: n, size: r, shrink: o, disableAnimation: i, variant: s, required: l } = e,
      a = {
        root: ['root', n && 'formControl', !i && 'animated', o && 'shrink', r && r !== 'normal' && `size${U(r)}`, s],
        asterisk: [l && 'asterisk']
      },
      u = se(a, gE, t)
    return { ...t, ...u }
  },
  vE = W(dE, {
    shouldForwardProp: (e) => qt(e) || e === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`& .${hi.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === 'small' && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant]
      ]
    }
  })(
    fe(({ theme: e }) => ({
      display: 'block',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: { position: 'absolute', left: 0, top: 0, transform: 'translate(0, 20px) scale(1)' }
        },
        { props: { size: 'small' }, style: { transform: 'translate(0, 17px) scale(1)' } },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: { transform: 'translate(0, -1.5px) scale(0.75)', transformOrigin: 'top left', maxWidth: '133%' }
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(['color', 'transform', 'max-width'], {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut
            })
          }
        },
        {
          props: { variant: 'filled' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)'
          }
        },
        { props: { variant: 'filled', size: 'small' }, style: { transform: 'translate(12px, 13px) scale(1)' } },
        {
          props: ({ variant: t, ownerState: n }) => t === 'filled' && n.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)'
          }
        },
        {
          props: ({ variant: t, ownerState: n, size: r }) => t === 'filled' && n.shrink && r === 'small',
          style: { transform: 'translate(12px, 4px) scale(0.75)' }
        },
        {
          props: { variant: 'outlined' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)'
          }
        },
        { props: { variant: 'outlined', size: 'small' }, style: { transform: 'translate(14px, 9px) scale(1)' } },
        {
          props: ({ variant: t, ownerState: n }) => t === 'outlined' && n.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)'
          }
        }
      ]
    }))
  ),
  SE = S.forwardRef(function (t, n) {
    const r = oe({ name: 'MuiInputLabel', props: t }),
      { disableAnimation: o = !1, margin: i, shrink: s, variant: l, className: a, ...u } = r,
      d = Ao()
    let f = s
    typeof f > 'u' && d && (f = d.filled || d.focused || d.adornedStart)
    const p = Io({ props: r, muiFormControl: d, states: ['size', 'variant', 'required', 'focused'] }),
      x = {
        ...r,
        disableAnimation: o,
        formControl: d,
        shrink: f,
        size: p.size,
        variant: p.variant,
        required: p.required,
        focused: p.focused
      },
      v = yE(x)
    return k.jsx(vE, { 'data-shrink': f, ref: n, className: H(v.root, a), ...u, ownerState: x, classes: v })
  }),
  mi = S.createContext({})
function xE(e) {
  return re('MuiList', e)
}
ne('MuiList', ['root', 'padding', 'dense', 'subheader'])
const wE = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e
    return se({ root: ['root', !n && 'padding', r && 'dense', o && 'subheader'] }, xE, t)
  },
  CE = W('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader]
    }
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
      { props: ({ ownerState: e }) => !e.disablePadding, style: { paddingTop: 8, paddingBottom: 8 } },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } }
    ]
  }),
  Rl = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiList' }),
      { children: o, className: i, component: s = 'ul', dense: l = !1, disablePadding: a = !1, subheader: u, ...d } = r,
      f = S.useMemo(() => ({ dense: l }), [l]),
      p = { ...r, component: s, dense: l, disablePadding: a },
      x = wE(p)
    return k.jsx(mi.Provider, {
      value: f,
      children: k.jsxs(CE, { as: s, className: H(x.root, i), ref: n, ownerState: p, ...d, children: [u, o] })
    })
  })
function kE(e) {
  return re('MuiListItem', e)
}
ne('MuiListItem', [
  'root',
  'container',
  'dense',
  'alignItemsFlexStart',
  'divider',
  'gutters',
  'padding',
  'secondaryAction'
])
const bE = ne('MuiListItemButton', [
  'root',
  'focusVisible',
  'dense',
  'alignItemsFlexStart',
  'disabled',
  'divider',
  'gutters',
  'selected'
])
function EE(e) {
  return re('MuiListItemSecondaryAction', e)
}
ne('MuiListItemSecondaryAction', ['root', 'disableGutters'])
const RE = (e) => {
    const { disableGutters: t, classes: n } = e
    return se({ root: ['root', t && 'disableGutters'] }, EE, n)
  },
  TE = W('div', {
    name: 'MuiListItemSecondaryAction',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, n.disableGutters && t.disableGutters]
    }
  })({
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)',
    variants: [{ props: ({ ownerState: e }) => e.disableGutters, style: { right: 0 } }]
  }),
  g0 = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiListItemSecondaryAction' }),
      { className: o, ...i } = r,
      s = S.useContext(mi),
      l = { ...r, disableGutters: s.disableGutters },
      a = RE(l)
    return k.jsx(TE, { className: H(a.root, o), ownerState: l, ref: n, ...i })
  })
g0.muiName = 'ListItemSecondaryAction'
const PE = (e, t) => {
    const { ownerState: n } = e
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === 'flex-start' && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.hasSecondaryAction && t.secondaryAction
    ]
  },
  _E = (e) => {
    const {
      alignItems: t,
      classes: n,
      dense: r,
      disableGutters: o,
      disablePadding: i,
      divider: s,
      hasSecondaryAction: l
    } = e
    return se(
      {
        root: [
          'root',
          r && 'dense',
          !o && 'gutters',
          !i && 'padding',
          s && 'divider',
          t === 'flex-start' && 'alignItemsFlexStart',
          l && 'secondaryAction'
        ],
        container: ['container']
      },
      kE,
      n
    )
  },
  OE = W('div', { name: 'MuiListItem', slot: 'Root', overridesResolver: PE })(
    fe(({ theme: e }) => ({
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      variants: [
        { props: ({ ownerState: t }) => !t.disablePadding, style: { paddingTop: 8, paddingBottom: 8 } },
        { props: ({ ownerState: t }) => !t.disablePadding && t.dense, style: { paddingTop: 4, paddingBottom: 4 } },
        {
          props: ({ ownerState: t }) => !t.disablePadding && !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 }
        },
        { props: ({ ownerState: t }) => !t.disablePadding && !!t.secondaryAction, style: { paddingRight: 48 } },
        { props: ({ ownerState: t }) => !!t.secondaryAction, style: { [`& > .${bE.root}`]: { paddingRight: 48 } } },
        { props: { alignItems: 'flex-start' }, style: { alignItems: 'flex-start' } },
        {
          props: ({ ownerState: t }) => t.divider,
          style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}`, backgroundClip: 'padding-box' }
        },
        {
          props: ({ ownerState: t }) => t.button,
          style: {
            transition: e.transitions.create('background-color', { duration: e.transitions.duration.shortest }),
            '&:hover': {
              textDecoration: 'none',
              backgroundColor: (e.vars || e).palette.action.hover,
              '@media (hover: none)': { backgroundColor: 'transparent' }
            }
          }
        },
        { props: ({ ownerState: t }) => t.hasSecondaryAction, style: { paddingRight: 48 } }
      ]
    }))
  ),
  IE = W('li', { name: 'MuiListItem', slot: 'Container', overridesResolver: (e, t) => t.container })({
    position: 'relative'
  }),
  Ac = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiListItem' }),
      {
        alignItems: o = 'center',
        children: i,
        className: s,
        component: l,
        components: a = {},
        componentsProps: u = {},
        ContainerComponent: d = 'li',
        ContainerProps: { className: f, ...p } = {},
        dense: x = !1,
        disableGutters: v = !1,
        disablePadding: w = !1,
        divider: R = !1,
        secondaryAction: m,
        slotProps: g = {},
        slots: c = {},
        ...y
      } = r,
      C = S.useContext(mi),
      E = S.useMemo(() => ({ dense: x || C.dense || !1, alignItems: o, disableGutters: v }), [o, C.dense, x, v]),
      b = S.useRef(null),
      T = S.Children.toArray(i),
      I = T.length && zs(T[T.length - 1], ['ListItemSecondaryAction']),
      h = {
        ...r,
        alignItems: o,
        dense: E.dense,
        disableGutters: v,
        disablePadding: w,
        divider: R,
        hasSecondaryAction: I
      },
      _ = _E(h),
      $ = Ye(b, n),
      N = c.root || a.Root || OE,
      B = g.root || u.root || {},
      A = { className: H(_.root, B.className, s), ...y }
    let z = l || 'li'
    return I
      ? ((z = !A.component && !l ? 'div' : z),
        d === 'li' && (z === 'li' ? (z = 'div') : A.component === 'li' && (A.component = 'div')),
        k.jsx(mi.Provider, {
          value: E,
          children: k.jsxs(IE, {
            as: d,
            className: H(_.container, f),
            ref: $,
            ownerState: h,
            ...p,
            children: [
              k.jsx(N, { ...B, ...(!zi(N) && { as: z, ownerState: { ...h, ...B.ownerState } }), ...A, children: T }),
              T.pop()
            ]
          })
        }))
      : k.jsx(mi.Provider, {
          value: E,
          children: k.jsxs(N, {
            ...B,
            as: z,
            ref: $,
            ...(!zi(N) && { ownerState: { ...h, ...B.ownerState } }),
            ...A,
            children: [T, m && k.jsx(g0, { children: m })]
          })
        })
  })
function yu(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild
}
function Ch(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
        ? null
        : e.lastChild
}
function y0(e, t) {
  if (t === void 0) return !0
  let n = e.innerText
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(''))
  )
}
function Go(e, t, n, r, o, i) {
  let s = !1,
    l = o(e, t, t ? n : !1)
  for (; l; ) {
    if (l === e.firstChild) {
      if (s) return !1
      s = !0
    }
    const a = r ? !1 : l.disabled || l.getAttribute('aria-disabled') === 'true'
    if (!l.hasAttribute('tabindex') || !y0(l, i) || a) l = o(e, l, n)
    else return l.focus(), !0
  }
  return !1
}
const AE = S.forwardRef(function (t, n) {
  const {
      actions: r,
      autoFocus: o = !1,
      autoFocusItem: i = !1,
      children: s,
      className: l,
      disabledItemsFocusable: a = !1,
      disableListWrap: u = !1,
      onKeyDown: d,
      variant: f = 'selectedMenu',
      ...p
    } = t,
    x = S.useRef(null),
    v = S.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null })
  Ar(() => {
    o && x.current.focus()
  }, [o]),
    S.useImperativeHandle(
      r,
      () => ({
        adjustStyleForScrollbar: (c, { direction: y }) => {
          const C = !x.current.style.width
          if (c.clientHeight < x.current.clientHeight && C) {
            const E = `${Ey(cn(c))}px`
            ;(x.current.style[y === 'rtl' ? 'paddingLeft' : 'paddingRight'] = E),
              (x.current.style.width = `calc(100% + ${E})`)
          }
          return x.current
        }
      }),
      []
    )
  const w = (c) => {
      const y = x.current,
        C = c.key
      if (c.ctrlKey || c.metaKey || c.altKey) {
        d && d(c)
        return
      }
      const b = Ct(y).activeElement
      if (C === 'ArrowDown') c.preventDefault(), Go(y, b, u, a, yu)
      else if (C === 'ArrowUp') c.preventDefault(), Go(y, b, u, a, Ch)
      else if (C === 'Home') c.preventDefault(), Go(y, null, u, a, yu)
      else if (C === 'End') c.preventDefault(), Go(y, null, u, a, Ch)
      else if (C.length === 1) {
        const T = v.current,
          I = C.toLowerCase(),
          h = performance.now()
        T.keys.length > 0 &&
          (h - T.lastTime > 500
            ? ((T.keys = []), (T.repeating = !0), (T.previousKeyMatched = !0))
            : T.repeating && I !== T.keys[0] && (T.repeating = !1)),
          (T.lastTime = h),
          T.keys.push(I)
        const _ = b && !T.repeating && y0(b, T)
        T.previousKeyMatched && (_ || Go(y, b, !1, a, yu, T)) ? c.preventDefault() : (T.previousKeyMatched = !1)
      }
      d && d(c)
    },
    R = Ye(x, n)
  let m = -1
  S.Children.forEach(s, (c, y) => {
    if (!S.isValidElement(c)) {
      m === y && ((m += 1), m >= s.length && (m = -1))
      return
    }
    c.props.disabled || (((f === 'selectedMenu' && c.props.selected) || m === -1) && (m = y)),
      m === y &&
        (c.props.disabled || c.props.muiSkipListHighlight || c.type.muiSkipListHighlight) &&
        ((m += 1), m >= s.length && (m = -1))
  })
  const g = S.Children.map(s, (c, y) => {
    if (y === m) {
      const C = {}
      return (
        i && (C.autoFocus = !0),
        c.props.tabIndex === void 0 && f === 'selectedMenu' && (C.tabIndex = 0),
        S.cloneElement(c, C)
      )
    }
    return c
  })
  return k.jsx(Rl, { role: 'menu', ref: R, className: l, onKeyDown: w, tabIndex: o ? 0 : -1, ...p, children: g })
})
function ME(e) {
  return re('MuiPopover', e)
}
ne('MuiPopover', ['root', 'paper'])
function kh(e, t) {
  let n = 0
  return typeof t == 'number' ? (n = t) : t === 'center' ? (n = e.height / 2) : t === 'bottom' && (n = e.height), n
}
function bh(e, t) {
  let n = 0
  return typeof t == 'number' ? (n = t) : t === 'center' ? (n = e.width / 2) : t === 'right' && (n = e.width), n
}
function Eh(e) {
  return [e.horizontal, e.vertical].map((t) => (typeof t == 'number' ? `${t}px` : t)).join(' ')
}
function vu(e) {
  return typeof e == 'function' ? e() : e
}
const $E = (e) => {
    const { classes: t } = e
    return se({ root: ['root'], paper: ['paper'] }, ME, t)
  },
  NE = W(df, { name: 'MuiPopover', slot: 'Root', overridesResolver: (e, t) => t.root })({}),
  v0 = W(qi, { name: 'MuiPopover', slot: 'Paper', overridesResolver: (e, t) => t.paper })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0
  }),
  LE = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiPopover' }),
      {
        action: o,
        anchorEl: i,
        anchorOrigin: s = { vertical: 'top', horizontal: 'left' },
        anchorPosition: l,
        anchorReference: a = 'anchorEl',
        children: u,
        className: d,
        container: f,
        elevation: p = 8,
        marginThreshold: x = 16,
        open: v,
        PaperProps: w = {},
        slots: R = {},
        slotProps: m = {},
        transformOrigin: g = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: c = bl,
        transitionDuration: y = 'auto',
        TransitionProps: { onEntering: C, ...E } = {},
        disableScrollLock: b = !1,
        ...T
      } = r,
      I = (m == null ? void 0 : m.paper) ?? w,
      h = S.useRef(),
      _ = {
        ...r,
        anchorOrigin: s,
        anchorReference: a,
        elevation: p,
        marginThreshold: x,
        externalPaperSlotProps: I,
        transformOrigin: g,
        TransitionComponent: c,
        transitionDuration: y,
        TransitionProps: E
      },
      $ = $E(_),
      N = S.useCallback(() => {
        if (a === 'anchorPosition') return l
        const J = vu(i),
          Z = (J && J.nodeType === 1 ? J : Ct(h.current).body).getBoundingClientRect()
        return { top: Z.top + kh(Z, s.vertical), left: Z.left + bh(Z, s.horizontal) }
      }, [i, s.horizontal, s.vertical, l, a]),
      B = S.useCallback(
        (J) => ({ vertical: kh(J, g.vertical), horizontal: bh(J, g.horizontal) }),
        [g.horizontal, g.vertical]
      ),
      A = S.useCallback(
        (J) => {
          const le = { width: J.offsetWidth, height: J.offsetHeight },
            Z = B(le)
          if (a === 'none') return { top: null, left: null, transformOrigin: Eh(Z) }
          const De = N()
          let Y = De.top - Z.vertical,
            ce = De.left - Z.horizontal
          const gt = Y + le.height,
            Pe = ce + le.width,
            Ae = cn(vu(i)),
            Ge = Ae.innerHeight - x,
            bt = Ae.innerWidth - x
          if (x !== null && Y < x) {
            const he = Y - x
            ;(Y -= he), (Z.vertical += he)
          } else if (x !== null && gt > Ge) {
            const he = gt - Ge
            ;(Y -= he), (Z.vertical += he)
          }
          if (x !== null && ce < x) {
            const he = ce - x
            ;(ce -= he), (Z.horizontal += he)
          } else if (Pe > bt) {
            const he = Pe - bt
            ;(ce -= he), (Z.horizontal += he)
          }
          return { top: `${Math.round(Y)}px`, left: `${Math.round(ce)}px`, transformOrigin: Eh(Z) }
        },
        [i, a, N, B, x]
      ),
      [z, D] = S.useState(v),
      P = S.useCallback(() => {
        const J = h.current
        if (!J) return
        const le = A(J)
        le.top !== null && J.style.setProperty('top', le.top),
          le.left !== null && (J.style.left = le.left),
          (J.style.transformOrigin = le.transformOrigin),
          D(!0)
      }, [A])
    S.useEffect(
      () => (b && window.addEventListener('scroll', P), () => window.removeEventListener('scroll', P)),
      [i, b, P]
    )
    const M = (J, le) => {
        C && C(J, le), P()
      },
      j = () => {
        D(!1)
      }
    S.useEffect(() => {
      v && P()
    }),
      S.useImperativeHandle(
        o,
        () =>
          v
            ? {
                updatePosition: () => {
                  P()
                }
              }
            : null,
        [v, P]
      ),
      S.useEffect(() => {
        if (!v) return
        const J = Wd(() => {
            P()
          }),
          le = cn(i)
        return (
          le.addEventListener('resize', J),
          () => {
            J.clear(), le.removeEventListener('resize', J)
          }
        )
      }, [i, v, P])
    let K = y
    y === 'auto' && !c.muiSupportAuto && (K = void 0)
    const q = f || (i ? Ct(vu(i)).body : void 0),
      X = { slots: R, slotProps: { ...m, paper: I } },
      [Q, ve] = rn('paper', {
        elementType: v0,
        externalForwardedProps: X,
        additionalProps: {
          elevation: p,
          className: H($.paper, I == null ? void 0 : I.className),
          style: z ? I.style : { ...I.style, opacity: 0 }
        },
        ownerState: _
      }),
      [Se, { slotProps: Ie, ...tt }] = rn('root', {
        elementType: NE,
        externalForwardedProps: X,
        additionalProps: { slotProps: { backdrop: { invisible: !0 } }, container: q, open: v },
        ownerState: _,
        className: H($.root, d)
      }),
      Te = Ye(h, ve.ref)
    return k.jsx(Se, {
      ...tt,
      ...(!zi(Se) && { slotProps: Ie, disableScrollLock: b }),
      ...T,
      ref: n,
      children: k.jsx(c, {
        appear: !0,
        in: v,
        onEntering: M,
        onExited: j,
        timeout: K,
        ...E,
        children: k.jsx(Q, { ...ve, ref: Te, children: u })
      })
    })
  })
function BE(e) {
  return re('MuiMenu', e)
}
ne('MuiMenu', ['root', 'paper', 'list'])
const zE = { vertical: 'top', horizontal: 'right' },
  jE = { vertical: 'top', horizontal: 'left' },
  DE = (e) => {
    const { classes: t } = e
    return se({ root: ['root'], paper: ['paper'], list: ['list'] }, BE, t)
  },
  FE = W(LE, {
    shouldForwardProp: (e) => qt(e) || e === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
    overridesResolver: (e, t) => t.root
  })({}),
  WE = W(v0, { name: 'MuiMenu', slot: 'Paper', overridesResolver: (e, t) => t.paper })({
    maxHeight: 'calc(100% - 96px)',
    WebkitOverflowScrolling: 'touch'
  }),
  UE = W(AE, { name: 'MuiMenu', slot: 'List', overridesResolver: (e, t) => t.list })({ outline: 0 }),
  VE = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiMenu' }),
      {
        autoFocus: o = !0,
        children: i,
        className: s,
        disableAutoFocusItem: l = !1,
        MenuListProps: a = {},
        onClose: u,
        open: d,
        PaperProps: f = {},
        PopoverClasses: p,
        transitionDuration: x = 'auto',
        TransitionProps: { onEntering: v, ...w } = {},
        variant: R = 'selectedMenu',
        slots: m = {},
        slotProps: g = {},
        ...c
      } = r,
      y = Iy(),
      C = {
        ...r,
        autoFocus: o,
        disableAutoFocusItem: l,
        MenuListProps: a,
        onEntering: v,
        PaperProps: f,
        transitionDuration: x,
        TransitionProps: w,
        variant: R
      },
      E = DE(C),
      b = o && !l && d,
      T = S.useRef(null),
      I = (z, D) => {
        T.current && T.current.adjustStyleForScrollbar(z, { direction: y ? 'rtl' : 'ltr' }), v && v(z, D)
      },
      h = (z) => {
        z.key === 'Tab' && (z.preventDefault(), u && u(z, 'tabKeyDown'))
      }
    let _ = -1
    S.Children.map(i, (z, D) => {
      S.isValidElement(z) && (z.props.disabled || (((R === 'selectedMenu' && z.props.selected) || _ === -1) && (_ = D)))
    })
    const $ = m.paper ?? WE,
      N = g.paper ?? f,
      B = yc({ elementType: m.root, externalSlotProps: g.root, ownerState: C, className: [E.root, s] }),
      A = yc({ elementType: $, externalSlotProps: N, ownerState: C, className: E.paper })
    return k.jsx(FE, {
      onClose: u,
      anchorOrigin: { vertical: 'bottom', horizontal: y ? 'right' : 'left' },
      transformOrigin: y ? zE : jE,
      slots: { paper: $, root: m.root },
      slotProps: { root: B, paper: A },
      open: d,
      ref: n,
      transitionDuration: x,
      TransitionProps: { onEntering: I, ...w },
      ownerState: C,
      ...c,
      classes: p,
      children: k.jsx(UE, {
        onKeyDown: h,
        actions: T,
        autoFocus: o && (_ === -1 || l),
        autoFocusItem: b,
        variant: R,
        ...a,
        className: H(E.list, a.className),
        children: i
      })
    })
  })
function HE(e) {
  return re('MuiNativeSelect', e)
}
const ff = ne('MuiNativeSelect', [
    'root',
    'select',
    'multiple',
    'filled',
    'outlined',
    'standard',
    'disabled',
    'icon',
    'iconOpen',
    'iconFilled',
    'iconOutlined',
    'iconStandard',
    'nativeInput',
    'error'
  ]),
  KE = (e) => {
    const { classes: t, variant: n, disabled: r, multiple: o, open: i, error: s } = e,
      l = {
        select: ['select', n, r && 'disabled', o && 'multiple', s && 'error'],
        icon: ['icon', `icon${U(n)}`, i && 'iconOpen', r && 'disabled']
      }
    return se(l, HE, t)
  },
  S0 = W('select')(({ theme: e }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${ff.disabled}`]: { cursor: 'default' },
    '&[multiple]': { height: 'auto' },
    '&:not([multiple]) option, &:not([multiple]) optgroup': { backgroundColor: (e.vars || e).palette.background.paper },
    variants: [
      {
        props: ({ ownerState: t }) => t.variant !== 'filled' && t.variant !== 'outlined',
        style: { '&&&': { paddingRight: 24, minWidth: 16 } }
      },
      { props: { variant: 'filled' }, style: { '&&&': { paddingRight: 32 } } },
      {
        props: { variant: 'outlined' },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          '&:focus': { borderRadius: (e.vars || e).shape.borderRadius },
          '&&&': { paddingRight: 32 }
        }
      }
    ]
  })),
  GE = W(S0, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: qt,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.select, t[n.variant], n.error && t.error, { [`&.${ff.multiple}`]: t.multiple }]
    }
  })({}),
  x0 = W('svg')(({ theme: e }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (e.vars || e).palette.action.active,
    [`&.${ff.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      { props: ({ ownerState: t }) => t.open, style: { transform: 'rotate(180deg)' } },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } }
    ]
  })),
  qE = W(x0, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.icon, n.variant && t[`icon${U(n.variant)}`], n.open && t.iconOpen]
    }
  })({}),
  QE = S.forwardRef(function (t, n) {
    const { className: r, disabled: o, error: i, IconComponent: s, inputRef: l, variant: a = 'standard', ...u } = t,
      d = { ...t, disabled: o, variant: a, error: i },
      f = KE(d)
    return k.jsxs(S.Fragment, {
      children: [
        k.jsx(GE, { ownerState: d, className: H(f.select, r), disabled: o, ref: l || n, ...u }),
        t.multiple ? null : k.jsx(qE, { as: s, ownerState: d, className: f.icon })
      ]
    })
  })
var Rh
const YE = W('fieldset', { shouldForwardProp: qt })({
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%'
  }),
  XE = W('legend', { shouldForwardProp: qt })(
    fe(({ theme: e }) => ({
      float: 'unset',
      width: 'auto',
      overflow: 'hidden',
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: '11px',
            transition: e.transitions.create('width', { duration: 150, easing: e.transitions.easing.easeOut })
          }
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: e.transitions.create('max-width', { duration: 50, easing: e.transitions.easing.easeOut }),
            whiteSpace: 'nowrap',
            '& > span': { paddingLeft: 5, paddingRight: 5, display: 'inline-block', opacity: 0, visibility: 'visible' }
          }
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: '100%',
            transition: e.transitions.create('max-width', {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50
            })
          }
        }
      ]
    }))
  )
function JE(e) {
  const { children: t, classes: n, className: r, label: o, notched: i, ...s } = e,
    l = o != null && o !== '',
    a = { ...e, notched: i, withLabel: l }
  return k.jsx(YE, {
    'aria-hidden': !0,
    className: r,
    ownerState: a,
    ...s,
    children: k.jsx(XE, {
      ownerState: a,
      children: l
        ? k.jsx('span', { children: o })
        : Rh || (Rh = k.jsx('span', { className: 'notranslate', children: '​' }))
    })
  })
}
const ZE = (e) => {
    const { classes: t } = e,
      r = se({ root: ['root'], notchedOutline: ['notchedOutline'], input: ['input'] }, Ab, t)
    return { ...t, ...r }
  },
  eR = W(Ia, {
    shouldForwardProp: (e) => qt(e) || e === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: _a
  })(
    fe(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      return {
        position: 'relative',
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${hn.notchedOutline}`]: { borderColor: (e.vars || e).palette.text.primary },
        '@media (hover: none)': {
          [`&:hover .${hn.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
          }
        },
        [`&.${hn.focused} .${hn.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(ur())
            .map(([n]) => ({
              props: { color: n },
              style: { [`&.${hn.focused} .${hn.notchedOutline}`]: { borderColor: (e.vars || e).palette[n].main } }
            })),
          {
            props: {},
            style: {
              [`&.${hn.error} .${hn.notchedOutline}`]: { borderColor: (e.vars || e).palette.error.main },
              [`&.${hn.disabled} .${hn.notchedOutline}`]: { borderColor: (e.vars || e).palette.action.disabled }
            }
          },
          { props: ({ ownerState: n }) => n.startAdornment, style: { paddingLeft: 14 } },
          { props: ({ ownerState: n }) => n.endAdornment, style: { paddingRight: 14 } },
          { props: ({ ownerState: n }) => n.multiline, style: { padding: '16.5px 14px' } },
          { props: ({ ownerState: n, size: r }) => n.multiline && r === 'small', style: { padding: '8.5px 14px' } }
        ]
      }
    })
  ),
  tR = W(JE, { name: 'MuiOutlinedInput', slot: 'NotchedOutline', overridesResolver: (e, t) => t.notchedOutline })(
    fe(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
      return { borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t }
    })
  ),
  nR = W(Aa, { name: 'MuiOutlinedInput', slot: 'Input', overridesResolver: Oa })(
    fe(({ theme: e }) => ({
      padding: '16.5px 14px',
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit'
        }
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff'
          }
        }
      }),
      variants: [
        { props: { size: 'small' }, style: { padding: '8.5px 14px' } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        { props: ({ ownerState: t }) => t.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: t }) => t.endAdornment, style: { paddingRight: 0 } }
      ]
    }))
  ),
  Tl = S.forwardRef(function (t, n) {
    var r
    const o = oe({ props: t, name: 'MuiOutlinedInput' }),
      {
        components: i = {},
        fullWidth: s = !1,
        inputComponent: l = 'input',
        label: a,
        multiline: u = !1,
        notched: d,
        slots: f = {},
        type: p = 'text',
        ...x
      } = o,
      v = ZE(o),
      w = Ao(),
      R = Io({
        props: o,
        muiFormControl: w,
        states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required']
      }),
      m = {
        ...o,
        color: R.color || 'primary',
        disabled: R.disabled,
        error: R.error,
        focused: R.focused,
        formControl: w,
        fullWidth: s,
        hiddenLabel: R.hiddenLabel,
        multiline: u,
        size: R.size,
        type: p
      },
      g = f.root ?? i.Root ?? eR,
      c = f.input ?? i.Input ?? nR
    return k.jsx(cf, {
      slots: { root: g, input: c },
      renderSuffix: (y) =>
        k.jsx(tR, {
          ownerState: m,
          className: v.notchedOutline,
          label: a != null && a !== '' && R.required ? r || (r = k.jsxs(S.Fragment, { children: [a, ' ', '*'] })) : a,
          notched: typeof d < 'u' ? d : !!(y.startAdornment || y.filled || y.focused)
        }),
      fullWidth: s,
      inputComponent: l,
      multiline: u,
      ref: n,
      type: p,
      ...x,
      classes: { ...v, notchedOutline: null }
    })
  })
Tl && (Tl.muiName = 'Input')
function rR(e) {
  return re('MuiSelect', e)
}
const qo = ne('MuiSelect', [
  'root',
  'select',
  'multiple',
  'filled',
  'outlined',
  'standard',
  'disabled',
  'focused',
  'icon',
  'iconOpen',
  'iconFilled',
  'iconOutlined',
  'iconStandard',
  'nativeInput',
  'error'
])
var Th
const oR = W(S0, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [
        { [`&.${qo.select}`]: t.select },
        { [`&.${qo.select}`]: t[n.variant] },
        { [`&.${qo.error}`]: t.error },
        { [`&.${qo.multiple}`]: t.multiple }
      ]
    }
  })({
    [`&.${qo.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }),
  iR = W(x0, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.icon, n.variant && t[`icon${U(n.variant)}`], n.open && t.iconOpen]
    }
  })({}),
  sR = W('input', {
    shouldForwardProp: (e) => Fy(e) && e !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
    overridesResolver: (e, t) => t.nativeInput
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box'
  })
function Ph(e, t) {
  return typeof t == 'object' && t !== null ? e === t : String(e) === String(t)
}
function lR(e) {
  return e == null || (typeof e == 'string' && !e.trim())
}
const aR = (e) => {
    const { classes: t, variant: n, disabled: r, multiple: o, open: i, error: s } = e,
      l = {
        select: ['select', n, r && 'disabled', o && 'multiple', s && 'error'],
        icon: ['icon', `icon${U(n)}`, i && 'iconOpen', r && 'disabled'],
        nativeInput: ['nativeInput']
      }
    return se(l, rR, t)
  },
  uR = S.forwardRef(function (t, n) {
    var Mo
    const {
        'aria-describedby': r,
        'aria-label': o,
        autoFocus: i,
        autoWidth: s,
        children: l,
        className: a,
        defaultOpen: u,
        defaultValue: d,
        disabled: f,
        displayEmpty: p,
        error: x = !1,
        IconComponent: v,
        inputRef: w,
        labelId: R,
        MenuProps: m = {},
        multiple: g,
        name: c,
        onBlur: y,
        onChange: C,
        onClose: E,
        onFocus: b,
        onOpen: T,
        open: I,
        readOnly: h,
        renderValue: _,
        SelectDisplayProps: $ = {},
        tabIndex: N,
        type: B,
        value: A,
        variant: z = 'standard',
        ...D
      } = t,
      [P, M] = Vp({ controlled: A, default: d, name: 'Select' }),
      [j, K] = Vp({ controlled: I, default: u, name: 'Select' }),
      q = S.useRef(null),
      X = S.useRef(null),
      [Q, ve] = S.useState(null),
      { current: Se } = S.useRef(I != null),
      [Ie, tt] = S.useState(),
      Te = Ye(n, w),
      J = S.useCallback((G) => {
        ;(X.current = G), G && ve(G)
      }, []),
      le = Q == null ? void 0 : Q.parentNode
    S.useImperativeHandle(
      Te,
      () => ({
        focus: () => {
          X.current.focus()
        },
        node: q.current,
        value: P
      }),
      [P]
    ),
      S.useEffect(() => {
        u && j && Q && !Se && (tt(s ? null : le.clientWidth), X.current.focus())
      }, [Q, s]),
      S.useEffect(() => {
        i && X.current.focus()
      }, [i]),
      S.useEffect(() => {
        if (!R) return
        const G = Ct(X.current).getElementById(R)
        if (G) {
          const be = () => {
            getSelection().isCollapsed && X.current.focus()
          }
          return (
            G.addEventListener('click', be),
            () => {
              G.removeEventListener('click', be)
            }
          )
        }
      }, [R])
    const Z = (G, be) => {
        G ? T && T(be) : E && E(be), Se || (tt(s ? null : le.clientWidth), K(G))
      },
      De = (G) => {
        G.button === 0 && (G.preventDefault(), X.current.focus(), Z(!0, G))
      },
      Y = (G) => {
        Z(!1, G)
      },
      ce = S.Children.toArray(l),
      gt = (G) => {
        const be = ce.find((nt) => nt.props.value === G.target.value)
        be !== void 0 && (M(be.props.value), C && C(G, be))
      },
      Pe = (G) => (be) => {
        let nt
        if (be.currentTarget.hasAttribute('tabindex')) {
          if (g) {
            nt = Array.isArray(P) ? P.slice() : []
            const jr = P.indexOf(G.props.value)
            jr === -1 ? nt.push(G.props.value) : nt.splice(jr, 1)
          } else nt = G.props.value
          if ((G.props.onClick && G.props.onClick(be), P !== nt && (M(nt), C))) {
            const jr = be.nativeEvent || be,
              yf = new jr.constructor(jr.type, jr)
            Object.defineProperty(yf, 'target', { writable: !0, value: { value: nt, name: c } }), C(yf, G)
          }
          g || Z(!1, be)
        }
      },
      Ae = (G) => {
        h || ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(G.key) && (G.preventDefault(), Z(!0, G)))
      },
      Ge = Q !== null && j,
      bt = (G) => {
        !Ge && y && (Object.defineProperty(G, 'target', { writable: !0, value: { value: P, name: c } }), y(G))
      }
    delete D['aria-invalid']
    let he, Lt
    const V = []
    let Ue = !1
    ;(wl({ value: P }) || p) && (_ ? (he = _(P)) : (Ue = !0))
    const Fn = ce.map((G) => {
      if (!S.isValidElement(G)) return null
      let be
      if (g) {
        if (!Array.isArray(P)) throw new Error(jn(2))
        ;(be = P.some((nt) => Ph(nt, G.props.value))), be && Ue && V.push(G.props.children)
      } else (be = Ph(P, G.props.value)), be && Ue && (Lt = G.props.children)
      return S.cloneElement(G, {
        'aria-selected': be ? 'true' : 'false',
        onClick: Pe(G),
        onKeyUp: (nt) => {
          nt.key === ' ' && nt.preventDefault(), G.props.onKeyUp && G.props.onKeyUp(nt)
        },
        role: 'option',
        selected: be,
        value: void 0,
        'data-value': G.props.value
      })
    })
    Ue &&
      (g
        ? V.length === 0
          ? (he = null)
          : (he = V.reduce((G, be, nt) => (G.push(be), nt < V.length - 1 && G.push(', '), G), []))
        : (he = Lt))
    let Bt = Ie
    !s && Se && Q && (Bt = le.clientWidth)
    let me
    typeof N < 'u' ? (me = N) : (me = f ? null : 0)
    const Ce = $.id || (c ? `mui-component-select-${c}` : void 0),
      Et = { ...t, variant: z, value: P, open: Ge, error: x },
      Tn = aR(Et),
      ge = { ...m.PaperProps, ...((Mo = m.slotProps) == null ? void 0 : Mo.paper) },
      pr = Ud()
    return k.jsxs(S.Fragment, {
      children: [
        k.jsx(oR, {
          as: 'div',
          ref: J,
          tabIndex: me,
          role: 'combobox',
          'aria-controls': pr,
          'aria-disabled': f ? 'true' : void 0,
          'aria-expanded': Ge ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': o,
          'aria-labelledby': [R, Ce].filter(Boolean).join(' ') || void 0,
          'aria-describedby': r,
          onKeyDown: Ae,
          onMouseDown: f || h ? null : De,
          onBlur: bt,
          onFocus: b,
          ...$,
          ownerState: Et,
          className: H($.className, Tn.select, a),
          id: Ce,
          children: lR(he) ? Th || (Th = k.jsx('span', { className: 'notranslate', children: '​' })) : he
        }),
        k.jsx(sR, {
          'aria-invalid': x,
          value: Array.isArray(P) ? P.join(',') : P,
          name: c,
          ref: q,
          'aria-hidden': !0,
          onChange: gt,
          tabIndex: -1,
          disabled: f,
          className: Tn.nativeInput,
          autoFocus: i,
          ...D,
          ownerState: Et
        }),
        k.jsx(iR, { as: v, className: Tn.icon, ownerState: Et }),
        k.jsx(VE, {
          id: `menu-${c || ''}`,
          anchorEl: le,
          open: Ge,
          onClose: Y,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...m,
          MenuListProps: {
            'aria-labelledby': R,
            role: 'listbox',
            'aria-multiselectable': g ? 'true' : void 0,
            disableListWrap: !0,
            id: pr,
            ...m.MenuListProps
          },
          slotProps: { ...m.slotProps, paper: { ...ge, style: { minWidth: Bt, ...(ge != null ? ge.style : null) } } },
          children: Fn
        })
      ]
    })
  }),
  cR = (e) => {
    const { classes: t } = e
    return t
  },
  pf = {
    name: 'MuiSelect',
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => qt(e) && e !== 'variant',
    slot: 'Root'
  },
  dR = W(El, pf)(''),
  fR = W(Tl, pf)(''),
  pR = W(kl, pf)(''),
  w0 = S.forwardRef(function (t, n) {
    const r = oe({ name: 'MuiSelect', props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: l,
        defaultOpen: a = !1,
        displayEmpty: u = !1,
        IconComponent: d = $b,
        id: f,
        input: p,
        inputProps: x,
        label: v,
        labelId: w,
        MenuProps: R,
        multiple: m = !1,
        native: g = !1,
        onClose: c,
        onOpen: y,
        open: C,
        renderValue: E,
        SelectDisplayProps: b,
        variant: T = 'outlined',
        ...I
      } = r,
      h = g ? QE : uR,
      _ = Ao(),
      $ = Io({ props: r, muiFormControl: _, states: ['variant', 'error'] }),
      N = $.variant || T,
      B = { ...r, variant: N, classes: s },
      A = cR(B),
      { root: z, ...D } = A,
      P =
        p ||
        {
          standard: k.jsx(dR, { ownerState: B }),
          outlined: k.jsx(fR, { label: v, ownerState: B }),
          filled: k.jsx(pR, { ownerState: B })
        }[N],
      M = Ye(n, Lr(P))
    return k.jsx(S.Fragment, {
      children: S.cloneElement(P, {
        inputComponent: h,
        inputProps: {
          children: i,
          error: $.error,
          IconComponent: d,
          variant: N,
          type: void 0,
          multiple: m,
          ...(g
            ? { id: f }
            : {
                autoWidth: o,
                defaultOpen: a,
                displayEmpty: u,
                labelId: w,
                MenuProps: R,
                onClose: c,
                onOpen: y,
                open: C,
                renderValue: E,
                SelectDisplayProps: { id: f, ...b }
              }),
          ...x,
          classes: x ? Ze(D, x.classes) : D,
          ...(p ? p.props.inputProps : {})
        },
        ...(((m && g) || u) && N === 'outlined' ? { notched: !0 } : {}),
        ref: M,
        className: H(P.props.className, l, A.root),
        ...(!p && { variant: N }),
        ...I
      })
    })
  })
w0.muiName = 'Select'
function hR(e = {}) {
  const {
      autoHideDuration: t = null,
      disableWindowBlurListener: n = !1,
      onClose: r,
      open: o,
      resumeHideDuration: i
    } = e,
    s = Hd()
  S.useEffect(() => {
    if (!o) return
    function m(g) {
      g.defaultPrevented || (g.key === 'Escape' && (r == null || r(g, 'escapeKeyDown')))
    }
    return (
      document.addEventListener('keydown', m),
      () => {
        document.removeEventListener('keydown', m)
      }
    )
  }, [o, r])
  const l = Mn((m, g) => {
      r == null || r(m, g)
    }),
    a = Mn((m) => {
      !r ||
        m == null ||
        s.start(m, () => {
          l(null, 'timeout')
        })
    })
  S.useEffect(() => (o && a(t), s.clear), [o, t, a, s])
  const u = (m) => {
      r == null || r(m, 'clickaway')
    },
    d = s.clear,
    f = S.useCallback(() => {
      t != null && a(i ?? t * 0.5)
    }, [t, i, a]),
    p = (m) => (g) => {
      const c = m.onBlur
      c == null || c(g), f()
    },
    x = (m) => (g) => {
      const c = m.onFocus
      c == null || c(g), d()
    },
    v = (m) => (g) => {
      const c = m.onMouseEnter
      c == null || c(g), d()
    },
    w = (m) => (g) => {
      const c = m.onMouseLeave
      c == null || c(g), f()
    }
  return (
    S.useEffect(() => {
      if (!n && o)
        return (
          window.addEventListener('focus', f),
          window.addEventListener('blur', d),
          () => {
            window.removeEventListener('focus', f), window.removeEventListener('blur', d)
          }
        )
    }, [n, o, f, d]),
    {
      getRootProps: (m = {}) => {
        const g = { ...yl(e), ...yl(m) }
        return { role: 'presentation', ...m, ...g, onBlur: p(g), onFocus: x(g), onMouseEnter: v(g), onMouseLeave: w(g) }
      },
      onClickAway: u
    }
  )
}
function mR(e) {
  return re('MuiSnackbarContent', e)
}
ne('MuiSnackbarContent', ['root', 'message', 'action'])
const gR = (e) => {
    const { classes: t } = e
    return se({ root: ['root'], action: ['action'], message: ['message'] }, mR, t)
  },
  yR = W(qi, { name: 'MuiSnackbarContent', slot: 'Root', overridesResolver: (e, t) => t.root })(
    fe(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? 0.8 : 0.98,
        n = ky(e.palette.background.default, t)
      return {
        ...e.typography.body2,
        color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
        backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '6px 16px',
        borderRadius: (e.vars || e).shape.borderRadius,
        flexGrow: 1,
        [e.breakpoints.up('sm')]: { flexGrow: 'initial', minWidth: 288 }
      }
    })
  ),
  vR = W('div', { name: 'MuiSnackbarContent', slot: 'Message', overridesResolver: (e, t) => t.message })({
    padding: '8px 0'
  }),
  SR = W('div', { name: 'MuiSnackbarContent', slot: 'Action', overridesResolver: (e, t) => t.action })({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingLeft: 16,
    marginRight: -8
  }),
  xR = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiSnackbarContent' }),
      { action: o, className: i, message: s, role: l = 'alert', ...a } = r,
      u = r,
      d = gR(u)
    return k.jsxs(yR, {
      role: l,
      square: !0,
      elevation: 6,
      className: H(d.root, i),
      ownerState: u,
      ref: n,
      ...a,
      children: [
        k.jsx(vR, { className: d.message, ownerState: u, children: s }),
        o ? k.jsx(SR, { className: d.action, ownerState: u, children: o }) : null
      ]
    })
  })
function wR(e) {
  return re('MuiSnackbar', e)
}
ne('MuiSnackbar', [
  'root',
  'anchorOriginTopCenter',
  'anchorOriginBottomCenter',
  'anchorOriginTopRight',
  'anchorOriginBottomRight',
  'anchorOriginTopLeft',
  'anchorOriginBottomLeft'
])
const CR = (e) => {
    const { classes: t, anchorOrigin: n } = e,
      r = { root: ['root', `anchorOrigin${U(n.vertical)}${U(n.horizontal)}`] }
    return se(r, wR, t)
  },
  _h = W('div', {
    name: 'MuiSnackbar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e
      return [t.root, t[`anchorOrigin${U(n.anchorOrigin.vertical)}${U(n.anchorOrigin.horizontal)}`]]
    }
  })(
    fe(({ theme: e }) => ({
      zIndex: (e.vars || e).zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 8,
      right: 8,
      justifyContent: 'center',
      alignItems: 'center',
      variants: [
        {
          props: ({ ownerState: t }) => t.anchorOrigin.vertical === 'top',
          style: { top: 8, [e.breakpoints.up('sm')]: { top: 24 } }
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.vertical !== 'top',
          style: { bottom: 8, [e.breakpoints.up('sm')]: { bottom: 24 } }
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === 'left',
          style: { justifyContent: 'flex-start', [e.breakpoints.up('sm')]: { left: 24, right: 'auto' } }
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === 'right',
          style: { justifyContent: 'flex-end', [e.breakpoints.up('sm')]: { right: 24, left: 'auto' } }
        },
        {
          props: ({ ownerState: t }) => t.anchorOrigin.horizontal === 'center',
          style: { [e.breakpoints.up('sm')]: { left: '50%', right: 'auto', transform: 'translateX(-50%)' } }
        }
      ]
    }))
  ),
  kR = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiSnackbar' }),
      o = Br(),
      i = { enter: o.transitions.duration.enteringScreen, exit: o.transitions.duration.leavingScreen },
      {
        action: s,
        anchorOrigin: { vertical: l, horizontal: a } = { vertical: 'bottom', horizontal: 'left' },
        autoHideDuration: u = null,
        children: d,
        className: f,
        ClickAwayListenerProps: p,
        ContentProps: x,
        disableWindowBlurListener: v = !1,
        message: w,
        onBlur: R,
        onClose: m,
        onFocus: g,
        onMouseEnter: c,
        onMouseLeave: y,
        open: C,
        resumeHideDuration: E,
        TransitionComponent: b = bl,
        transitionDuration: T = i,
        TransitionProps: { onEnter: I, onExited: h, ..._ } = {},
        ...$
      } = r,
      N = {
        ...r,
        anchorOrigin: { vertical: l, horizontal: a },
        autoHideDuration: u,
        disableWindowBlurListener: v,
        TransitionComponent: b,
        transitionDuration: T
      },
      B = CR(N),
      { getRootProps: A, onClickAway: z } = hR({ ...N }),
      [D, P] = S.useState(!0),
      M = yc({
        elementType: _h,
        getSlotProps: A,
        externalForwardedProps: $,
        ownerState: N,
        additionalProps: { ref: n },
        className: [B.root, f]
      }),
      j = (q) => {
        P(!0), h && h(q)
      },
      K = (q, X) => {
        P(!1), I && I(q, X)
      }
    return !C && D
      ? null
      : k.jsx(Yb, {
          onClickAway: z,
          ...p,
          children: k.jsx(_h, {
            ...M,
            children: k.jsx(b, {
              appear: !0,
              in: C,
              timeout: T,
              direction: l === 'top' ? 'down' : 'up',
              onEnter: K,
              onExited: j,
              ..._,
              children: d || k.jsx(xR, { message: w, action: s, ...x })
            })
          })
        })
  }),
  on = Zw({
    createStyledComponent: W('div', { name: 'MuiStack', slot: 'Root', overridesResolver: (e, t) => t.root }),
    useThemeProps: (e) => oe({ props: e, name: 'MuiStack' })
  })
function bR(e) {
  return re('MuiTextField', e)
}
ne('MuiTextField', ['root'])
const ER = { standard: El, filled: kl, outlined: Tl },
  RR = (e) => {
    const { classes: t } = e
    return se({ root: ['root'] }, bR, t)
  },
  TR = W(nE, { name: 'MuiTextField', slot: 'Root', overridesResolver: (e, t) => t.root })({}),
  hf = S.forwardRef(function (t, n) {
    const r = oe({ props: t, name: 'MuiTextField' }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: l,
        color: a = 'primary',
        defaultValue: u,
        disabled: d = !1,
        error: f = !1,
        FormHelperTextProps: p,
        fullWidth: x = !1,
        helperText: v,
        id: w,
        InputLabelProps: R,
        inputProps: m,
        InputProps: g,
        inputRef: c,
        label: y,
        maxRows: C,
        minRows: E,
        multiline: b = !1,
        name: T,
        onBlur: I,
        onChange: h,
        onFocus: _,
        placeholder: $,
        required: N = !1,
        rows: B,
        select: A = !1,
        SelectProps: z,
        slots: D = {},
        slotProps: P = {},
        type: M,
        value: j,
        variant: K = 'outlined',
        ...q
      } = r,
      X = {
        ...r,
        autoFocus: i,
        color: a,
        disabled: d,
        error: f,
        fullWidth: x,
        multiline: b,
        required: N,
        select: A,
        variant: K
      },
      Q = RR(X),
      ve = Ud(w),
      Se = v && ve ? `${ve}-helper-text` : void 0,
      Ie = y && ve ? `${ve}-label` : void 0,
      tt = ER[K],
      Te = { slots: D, slotProps: { input: g, inputLabel: R, htmlInput: m, formHelperText: p, select: z, ...P } },
      J = {},
      le = Te.slotProps.inputLabel
    K === 'outlined' && (le && typeof le.shrink < 'u' && (J.notched = le.shrink), (J.label = y)),
      A && ((!z || !z.native) && (J.id = void 0), (J['aria-describedby'] = void 0))
    const [Z, De] = rn('input', { elementType: tt, externalForwardedProps: Te, additionalProps: J, ownerState: X }),
      [Y, ce] = rn('inputLabel', { elementType: SE, externalForwardedProps: Te, ownerState: X }),
      [gt, Pe] = rn('htmlInput', { elementType: 'input', externalForwardedProps: Te, ownerState: X }),
      [Ae, Ge] = rn('formHelperText', { elementType: sE, externalForwardedProps: Te, ownerState: X }),
      [bt, he] = rn('select', { elementType: w0, externalForwardedProps: Te, ownerState: X }),
      Lt = k.jsx(Z, {
        'aria-describedby': Se,
        autoComplete: o,
        autoFocus: i,
        defaultValue: u,
        fullWidth: x,
        multiline: b,
        name: T,
        rows: B,
        maxRows: C,
        minRows: E,
        type: M,
        value: j,
        id: ve,
        inputRef: c,
        onBlur: I,
        onChange: h,
        onFocus: _,
        placeholder: $,
        inputProps: Pe,
        slots: { input: D.htmlInput ? gt : void 0 },
        ...De
      })
    return k.jsxs(TR, {
      className: H(Q.root, l),
      disabled: d,
      error: f,
      fullWidth: x,
      ref: n,
      required: N,
      color: a,
      variant: K,
      ownerState: X,
      ...q,
      children: [
        y != null && y !== '' && k.jsx(Y, { htmlFor: ve, id: Ie, ...ce, children: y }),
        A ? k.jsx(bt, { 'aria-describedby': Se, id: ve, labelId: Ie, value: j, input: Lt, ...he, children: s }) : Lt,
        v && k.jsx(Ae, { id: Se, ...Ge, children: v })
      ]
    })
  }),
  mf = Qt(
    k.jsx('path', {
      d: 'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z'
    }),
    'Mic'
  ),
  gf = Qt(
    k.jsx('path', {
      d: 'M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28m-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73z'
    }),
    'MicOff'
  ),
  C0 = Qt(
    k.jsx('path', {
      d: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z'
    }),
    'Videocam'
  ),
  k0 = Qt(
    k.jsx('path', {
      d: 'm21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18zM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73z'
    }),
    'VideocamOff'
  ),
  PR = ({
    setCode: e,
    code: t,
    myUname: n,
    isAudioEnabled: r,
    setIsAudioEnabled: o,
    isVideoEnabled: i,
    setIsVideoEnabled: s
  }) => {
    const l = Ky(),
      { localStream: a } = zr(),
      u = S.useRef(null)
    S.useEffect(() => {
      a && u.current && (u.current.srcObject = a.current)
    }, [a])
    function d() {
      const p = Math.floor(Math.random() * 1e8).toString()
      if (!n) {
        console.log('No myUname')
        return
      }
      Tc(n),
        l({ type: 'SET_ROOM', payload: p }),
        ze.emit('create-meeting', { id: p, aud: r, vid: i }, ({ status: x, msg: v, data: w }) => {
          if (x == 'ERROR') {
            console.log('error', v)
            return
          }
          e(p),
            l({ type: 'SET_PARTICIPANTS', payload: w.participants }),
            l({ type: 'SET_CREATOR', payload: w.creator }),
            console.log('Meeting created')
        })
    }
    function f() {
      if (!n) {
        console.log('No myUname')
        return
      }
      Tc(n),
        l({ type: 'SET_ROOM', payload: t }),
        ze.emit('join-meeting-req', { roomId: t }, ({ status: p, msg: x, data: v }) => {
          if (p == 'ERROR') {
            console.log('error', x)
            return
          }
          console.log('join request sent')
        })
    }
    return k.jsxs(on, {
      spacing: 2,
      direction: 'row',
      justifyContent: 'center',
      sx: { height: '100%' },
      alignItems: 'center',
      children: [
        k.jsxs(on, {
          spacing: 1,
          children: [
            k.jsx(Cl, { size: 'small', variant: 'contained', onClick: d, children: 'New Meeting' }),
            k.jsx(ji, { children: 'OR' }),
            k.jsx(hf, { placeholder: 'Enter code', label: 'code', size: 'small', onChange: (p) => e(p.target.value) }),
            k.jsx(Cl, { size: 'small', variant: 'outlined', onClick: f, children: 'Join' })
          ]
        }),
        k.jsxs(on, {
          children: [
            k.jsxs(on, {
              spacing: 2,
              direction: 'row',
              children: [
                r
                  ? k.jsx(Tt, {
                      onClick: () => {
                        o(!1)
                      },
                      children: k.jsx(mf, {})
                    })
                  : k.jsx(Tt, {
                      onClick: () => {
                        o(!0)
                      },
                      children: k.jsx(gf, {})
                    }),
                i
                  ? k.jsx(Tt, {
                      onClick: () => {
                        s(!1)
                      },
                      children: k.jsx(C0, {})
                    })
                  : k.jsx(Tt, {
                      onClick: () => {
                        s(!0)
                      },
                      children: k.jsx(k0, {})
                    })
              ]
            }),
            k.jsx('video', { ref: u, autoPlay: !0 })
          ]
        })
      ]
    })
  },
  _R = Qt(
    k.jsx('path', {
      d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2'
    }),
    'MoreVert'
  ),
  OR = Qt(
    k.jsx('path', {
      d: 'M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z'
    }),
    'PresentToAllOutlined'
  ),
  IR = Qt(
    k.jsx('path', {
      d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z'
    }),
    'PeopleAltOutlined'
  ),
  AR = Qt(
    k.jsx('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z' }),
    'ChatBubbleOutlineOutlined'
  )
var or = ((e) => ((e.PEOPLE = 'PEOPLE'), (e.CHAT = 'CHAT'), (e.NONE = 'NONE'), e))(or || {})
function MR({
  code: e,
  setDrawer: t,
  drawer: n,
  myUname: r,
  isAudioEnabled: o,
  isVideoEnabled: i,
  setIsAudioEnabled: s,
  setIsVideoEnabled: l
}) {
  const { localStream: a } = zr()
  function u(p) {
    t(p === n ? or.NONE : p)
  }
  const d = () => {
      const p = a.current.getAudioTracks()[0]
      p && ((p.enabled = !p.enabled), s(p.enabled))
    },
    f = () => {
      const p = a.current.getVideoTracks()[0]
      p && ((p.enabled = !p.enabled), l(p.enabled))
    }
  return k.jsxs(on, {
    direction: 'row',
    sx: {
      zIndex: (p) => p.zIndex.drawer + 1,
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      justifyContent: 'space-between',
      backgroundColor: (p) => p.palette.background.default,
      alignItems: 'center',
      boxSizing: 'border-box',
      pl: 2,
      pr: 2
    },
    children: [
      k.jsx(Er, { variant: 'caption', children: `${e} | ${r}` }),
      k.jsxs(on, {
        direction: 'row',
        sx: { justifyContent: 'center', flex: 1 },
        children: [
          k.jsxs(Tt, { children: [' ', k.jsx(OR, {})] }),
          o ? k.jsx(Tt, { onClick: d, children: k.jsx(mf, {}) }) : k.jsx(Tt, { onClick: d, children: k.jsx(gf, {}) }),
          i ? k.jsx(Tt, { onClick: f, children: k.jsx(C0, {}) }) : k.jsx(Tt, { onClick: f, children: k.jsx(k0, {}) }),
          k.jsxs(Tt, { children: [' ', k.jsx(_R, {})] })
        ]
      }),
      k.jsxs(on, {
        direction: 'row',
        sx: { justifyContent: 'flex-end' },
        children: [
          k.jsx(Tt, { onClick: () => u(or.PEOPLE), children: k.jsx(IR, {}) }),
          k.jsxs(Tt, { onClick: () => u(or.CHAT), children: [' ', k.jsx(AR, {})] })
        ]
      })
    ]
  })
}
const $R = Qt(
    k.jsx('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20'
    }),
    'AccountCircle'
  ),
  NR = () => {
    const { participants: e } = zr()
    return k.jsxs(Mr, {
      sx: { width: 250, padding: 1 },
      children: [
        k.jsx(Er, { variant: 'h6', children: 'People' }),
        k.jsx(ji, {}),
        k.jsx(Rl, {
          children: e.map(({ username: t, vid: n, aud: r }) =>
            k.jsx(
              Ac,
              {
                children: k.jsxs(on, {
                  direction: 'row',
                  spacing: 1,
                  sx: { width: '100%' },
                  children: [
                    k.jsx($R, {}),
                    k.jsx(Er, { sx: { flex: 1 }, children: t }),
                    r ? k.jsx(mf, {}) : k.jsx(gf, {})
                  ]
                })
              },
              t
            )
          )
        })
      ]
    })
  },
  LR = Qt(k.jsx('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }), 'Send'),
  BR = () => {
    const { messages: e, roomId: t } = zr(),
      [n, r] = S.useState('')
    function o() {
      ze.emit('msg-new', { msg: n, roomId: t }, () => {
        console.log('message send:', n), r('')
      })
    }
    function i(s) {
      s.key === 'Enter' && (s.preventDefault(), o())
    }
    return k.jsxs(Mr, {
      sx: { width: 250, padding: 1, height: '93%', display: 'flex', flexDirection: 'column' },
      children: [
        k.jsx(Er, { variant: 'h6', children: 'Chat' }),
        k.jsx(ji, {}),
        k.jsx(Rl, {
          sx: { flexGrow: 1 },
          children: e.map(({ username: s, time: l, content: a }) =>
            k.jsx(
              Ac,
              {
                children: k.jsx(on, {
                  children: k.jsxs(on, {
                    direction: 'row',
                    spacing: 1,
                    sx: { width: '100%' },
                    children: [
                      k.jsx(Er, { children: a }),
                      k.jsx(Er, {
                        children: new Date(l).toLocaleTimeString('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: !1
                        })
                      })
                    ]
                  })
                })
              },
              l
            )
          )
        }),
        k.jsx(Rl, {
          children: k.jsx(Ac, {
            sx: { p: 0 },
            children: k.jsxs(on, {
              direction: 'row',
              alignItems: 'center',
              sx: { p: 1, borderRadius: '20px 20px 20px 20px', textAlign: 'center' },
              children: [
                k.jsx(hf, {
                  size: 'small',
                  placeholder: 'message...',
                  multiline: !0,
                  maxRows: 3,
                  value: n,
                  onChange: (s) => r(s.target.value),
                  onKeyDown: i,
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'transparent' },
                      '&:hover fieldset': { borderColor: 'transparent' },
                      '&.Mui-focused fieldset': { borderColor: 'transparent' }
                    }
                  }
                }),
                k.jsx(Mr, { onClick: o, children: k.jsx(LR, {}) })
              ]
            })
          })
        })
      ]
    })
  }
function zR({ drawer: e }) {
  return k.jsxs(Q2, {
    anchor: 'right',
    open: e != or.NONE,
    children: [e == or.PEOPLE && k.jsx(NR, {}), e == or.CHAT && k.jsx(BR, {})]
  })
}
const jR = Qt(
    k.jsx('path', {
      d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
    }),
    'Close'
  ),
  DR = ({}) => {
    const { roomId: e } = zr(),
      [t, n] = S.useState([])
    S.useEffect(
      () => (
        ze.on('join-req', (s) => {
          console.log('join-req', s), n((l) => l.concat(s))
        }),
        () => {
          ze.off('join-req')
        }
      ),
      []
    )
    const r = (s) => {
        console.log('rooomId:', e),
          ze.emit(
            'join-accept',
            { roomId: e, caller: s.caller, sockId: s.sockId },
            ({ status: l, msg: a, data: u }) => {
              if ((console.log('status:', l, a), l == 'ERROR')) {
                console.log('error', a)
                return
              }
            }
          ),
          n((l) => l.filter((a) => a.caller != s.caller))
      },
      o = (s) => {
        n((l) => l.filter((a) => a.username != s.username))
      },
      i = ({ req: s }) =>
        k.jsxs(k.Fragment, {
          children: [
            k.jsx(Cl, { color: 'secondary', size: 'small', onClick: () => r(s), children: 'ADMIT' }),
            k.jsx(Tt, {
              size: 'small',
              'aria-label': 'close',
              color: 'inherit',
              onClick: () => o(s),
              children: k.jsx(jR, { fontSize: 'small' })
            })
          ]
        })
    return k.jsx(k.Fragment, {
      children: t.map((s) => k.jsx(kR, { open: !!s, message: s.username, action: k.jsx(i, { req: s }) }, s.username))
    })
  },
  FR = ({ code: e, myUname: t, isAudioEnabled: n, isVideoEnabled: r, setIsAudioEnabled: o, setIsVideoEnabled: i }) => {
    const { participants: s, streams: l, localStream: a, pcs: u } = zr(),
      [d, f] = S.useState(or.NONE),
      p = s.length + 1,
      x = Math.ceil(Math.sqrt(p)),
      v = Math.ceil(p / x)
    return k.jsxs(Mr, {
      sx: { overflowY: 'hidden' },
      children: [
        k.jsxs(Mr, {
          sx: {
            display: 'grid',
            gap: '10px',
            gridTemplateColumns: `repeat(${x}, 1fr)`,
            gridTemplateRows: `repeat(${v}, 1fr)`,
            width: '100%',
            height: '100vh',
            padding: '10px',
            paddingBottom: '70px',
            boxSizing: 'border-box',
            overflowY: 'auto'
          },
          children: [
            k.jsx(Oh, { stream: a, username: `${t} (You)` }, t),
            s
              .filter((w) => w.username !== t)
              .map((w) => k.jsx(Oh, { stream: l.current.get(w.username), username: w.username }, w.username))
          ]
        }),
        k.jsx(DR, {}),
        k.jsx(zR, { drawer: d }),
        k.jsx(MR, {
          code: e,
          drawer: d,
          setDrawer: f,
          myUname: t,
          isAudioEnabled: n,
          isVideoEnabled: r,
          setIsAudioEnabled: o,
          setIsVideoEnabled: i
        })
      ]
    })
  },
  Oh = ({ stream: e, username: t }) => {
    const n = S.useRef(null),
      [r, o] = S.useState(!1)
    return (
      S.useEffect(() => {
        n.current &&
          e.current &&
          ((n.current.srcObject = e.current),
          (n.current.onloadedmetadata = () => {
            const i = n.current.videoWidth,
              s = n.current.videoHeight
            o(s > i)
          }))
      }, [e]),
      k.jsxs(Mr, {
        sx: {
          position: 'relative',
          minWidth: '200px',
          minHeight: '200px',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: [
          k.jsx('video', {
            ref: n,
            autoPlay: !0,
            style: {
              maxWidth: '100%',
              maxHeight: '100%',
              width: r ? 'auto' : '100%',
              height: r ? '100%' : 'auto',
              objectFit: 'contain'
            }
          }),
          k.jsx(Mr, {
            sx: {
              position: 'absolute',
              bottom: '10px',
              left: '20px',
              padding: '4px 8px',
              color: '#fff',
              textShadow: '-1px -1px 0 black, 1px -1px 0 black, 1px 1px 0 black, 1px 1px 0 black'
            },
            children: t
          })
        ]
      })
    )
  },
  WR = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }
function UR() {
  const { creator: e, roomId: t, participants: n, pcs: r, streams: o, localStream: i } = zr(),
    s = Ky(),
    [l, a] = S.useState(!0),
    [u, d] = S.useState(!0),
    [f, p] = S.useState(''),
    [x, v] = S.useState(''),
    [w, R] = S.useState(ze.connected)
  S.useEffect(
    () => (
      y(),
      ze.on('connect', m),
      ze.on('disconnect', g),
      ze.on('init-meeting', (C) => {
        s({ type: 'SET_PARTICIPANTS', payload: C.participants }), s({ type: 'SET_CREATOR', payload: C.creator })
      }),
      () => {
        ze.off('init-meeting'), ze.off('participant-new'), ze.off('connect', m), ze.off('disconnect', g)
      }
    ),
    []
  ),
    S.useEffect(
      () => (
        ze.on('participant-new', async (C) => {
          console.log('participant-new', C), await c(C)
        }),
        ze.on('candidate', async ({ candidate: C, sender: E }) => {
          console.log('ICE candidate received', C, E)
          const b = n.find((T) => T.username == E)
          if (!b) {
            console.error('ptc not found')
            return
          }
          await r.current.get(b.username).addIceCandidate(C)
        }),
        () => {
          ze.off('candidate'), ze.off('participant-new')
        }
      ),
      [t, n]
    ),
    S.useEffect(() => {
      if (i.current) {
        const C = i.current.getAudioTracks()[0]
        C.enabled = l
      }
    }, [l]),
    S.useEffect(() => {
      if (i.current) {
        const C = i.current.getVideoTracks()[0]
        C.enabled = u
      }
    }, [u])
  function m() {
    console.log('Connected to server'), R(!0)
  }
  function g() {
    console.log('Disconnected from server'), R(!1)
  }
  async function c(C) {
    const E = new RTCPeerConnection(WR)
    r.current.set(C.username, E),
      i.current.getTracks().forEach((T) => {
        console.log('caller - add local track:', T), E.addTrack(T, i.current)
      }),
      (E.ontrack = (T) => {
        var h, _
        console.log('caller - Remote track received', T)
        const I = new MediaStream()
        I.addTrack(T.track),
          s({
            type: 'EDIT_PARTICIPANT',
            payload: {
              aud: !!((h = I.getAudioTracks()[0]) != null && h.enabled),
              vid: !!((_ = I.getVideoTracks()[0]) != null && _.enabled),
              username: C.username
            }
          }),
          o.current.set(C.username, I)
      }),
      (E.onicecandidate = (T) => {
        console.log('caller - on ice candidate'),
          T.candidate &&
            ze.emit('candidate', { candidate: T.candidate, roomId: t }, () => {
              console.log('ICE sent', T.candidate)
            })
      }),
      (E.oniceconnectionstatechange = () => {
        console.log('caller - ICE state change', E.iceConnectionState)
      }),
      (E.onsignalingstatechange = () => {
        console.log('Signaling state change', E.signalingState)
      }),
      s({ type: 'ADD_PARTICIPANT', payload: C })
    const b = await E.createOffer({ offerToReceiveAudio: !0, offerToReceiveVideo: !0 })
    await E.setLocalDescription(b),
      ze.emit('offer', { offer: b, callee: C.username, roomId: t }, () => {
        console.log('offer sent')
      })
  }
  function y() {
    navigator.mediaDevices
      .getUserMedia({ video: !0, audio: !0 })
      .then(function (C) {
        ;(i.current = C), a(C.getAudioTracks()[0].enabled), console.log('Local stream set')
      })
      .catch(function (C) {
        console.log('Something went wrong!')
      })
  }
  return f
    ? k.jsx(k.Fragment, {
        children: e
          ? k.jsx(FR, {
              code: x,
              myUname: f,
              isAudioEnabled: l,
              setIsAudioEnabled: a,
              isVideoEnabled: u,
              setIsVideoEnabled: d
            })
          : k.jsx(PR, {
              isAudioEnabled: l,
              setIsAudioEnabled: a,
              isVideoEnabled: u,
              setIsVideoEnabled: d,
              setCode: v,
              code: x,
              myUname: f
            })
      })
    : k.jsxs(C2, {
        open: !f,
        PaperProps: {
          component: 'form',
          onSubmit: (C) => {
            C.preventDefault()
            const E = new FormData(C.currentTarget),
              b = Object.fromEntries(E.entries())
            console.log(b.username), p(b.username), Tc(b.username), ze.connect()
          }
        },
        children: [
          k.jsx(N2, { children: 'Login' }),
          ' ',
          k.jsxs(A2, {
            children: [
              k.jsx(hf, {
                autoFocus: !0,
                required: !0,
                margin: 'dense',
                id: 'username',
                name: 'username',
                label: 'Username',
                type: 'text',
                fullWidth: !0,
                variant: 'standard'
              }),
              ' '
            ]
          }),
          ' ',
          k.jsxs(R2, { children: [k.jsx(Cl, { type: 'submit', children: 'Save' }), ' '] }),
          ' '
        ]
      })
}
const VR = ga({ palette: { mode: 'dark' } })
Vg(document.getElementById('root')).render(
  k.jsx(S.StrictMode, {
    children: k.jsxs(AC, { theme: VR, children: [k.jsx(jC, {}), k.jsx(WC, { children: k.jsx(UR, {}) })] })
  })
)
