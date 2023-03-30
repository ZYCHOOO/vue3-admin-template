/**
 * 用于点击下外部以关闭下拉框或菜单
 * v-clickOutside="function"
 */
const clickOutside = {
  mounted (el, binding) {
    const handler = (e) => {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.value && typeof binding.value === 'function') {
        binding.value(e)
      }
    }
    el._vClickOutside_ = handler
    document.addEventListener('click', handler)
  },
  unmounted (el, binding) {
    document.removeEventListener('click', el._vClickOutside_)
  }
}

const longpress = {
  mounted: function (el, binding, vNode) {
    console.log(el)
    // Make sure expression provided is a function
    if (typeof binding.value !== 'function') {
      // Fetch name of component
      const compName = vNode.context.name
      // pass warning to console
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) {
        warn += `Found in component '${compName}' `
      }

      console.warn(warn)
    }

    // Define variable
    let pressTimer = null

    // Define funtion handlers
    // Create timeout ( run function after 1s )
    const start = (e) => {
      if (e.type === 'click' && e.button !== 0) {
        return
      }

      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          // Run function
          handler()
        }, 1000)
      }
    }

    // Cancel Timeout
    const cancel = (e) => {
      // Check if timer has a value or not
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }
    // Run Function
    const handler = (e) => {
      binding.value(e)
    }

    // Add Event listeners
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    // Cancel timeouts if this events happen
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  }
}

export default {
  clickOutside,
  longpress
}
