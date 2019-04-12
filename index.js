
/**
 * Scroll hook.
 *
 * @param {Number} start
 * @param {Number} end
 * @param {Function} cb
 * @api public
 */

module.exports = function (start, end, cb) {
  if (typeof end === 'function') {
    cb = end
    end = Infinity
  }
  let ticking = false
  let y = 0
  window.addEventListener('scroll', function (e) {
    y = window.scrollY
    if (!ticking) {
      raf(function () {
        if (y >= start && y <= end) cb(y)
        ticking = false
      })
    }
    ticking = true
  })
}

/**
 * Request animation frame.
 *
 * @param {Function} cb
 * @api private
 */

function raf (cb) {
  (window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame)(cb)
}
