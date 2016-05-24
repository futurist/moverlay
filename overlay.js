(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory) // define(['jquery'], factory)
  } else if (typeof exports === 'object') {
    exports = module.exports = factory() // factory(require('jquery'))
  } else {
    root.mOverlay = factory() // should return obj in factory
  }
}(this, function () {
  'use strict'

  /**
   * @fileOverview Popup toolkit using mithril
   * @name overlay.js
   * @author micheal.yang
   * @license MIT
   */

  // require js/broswerutil.js file

  var overlay = {
    controller: function (arg) {
      var root = arg.root
      var ctrl = this
      root.style.position = 'absolute'
      root.style.left = 0
      root.style.top = 0
      root.style.zIndex = 99999
      var onresize = function (e) {
        ctrl.width = _getWindowSize()[0]
        ctrl.height = _getWindowSize()[1]
        root.style.width = ctrl.width + 'px'
        root.style.height = ctrl.height + 'px'
        m.redraw()
      }
      window.addEventListener('resize', onresize)
      onresize()
    },
    view: function (ctrl, arg) {
      var popup = arg.popup
      popup = popup || {}
      popup.style = popup.style || {}

      /* below line for debug purpose */
      // popup.style.border = '1px solid red'

      return [
        m('.overlay-bg',
          {
            config:function(e) {
              ctrl.root = e.parentElement
              console.log(ctrl)
            },
            style: {
              'display': 'block',
              'height': '100%',
              'width': '100%',

              /* below try to fix IE8 render problem, but not work:(  */
              // backgroundColor: '#000000',
              // filter: 'none !important',
              // filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)',
              // filter: 'alpha(opacity=50)',
              // 'zoom':1
            }
          }
         ),
        m('table.overlay',
          {
            style: {
              'position': 'absolute',
              top: 0,
              left: 0,
              // 'z-index': 99999,
              // 'border': 1 + 'px',
              'padding': 0 + 'px',
              'margin': 0 + 'px',
              'width': '100%',
              'height': '100%'
              // using below format to supress error in IE8, rgba color
              // 'background-color': 'rgba(0,0,0,0.5)'
            }
          },
          m('tr',
            m('td',
              {
                'align': 'center',
                'valign': 'middle',
                'style': {
                  'position': 'relative',
                  'vertical-align': 'middle'
                }
              },
              [
                m('div.overlay-content',
                  {
                    onclick: function (e) {
                      ctrl.close = true
                    },
                    style: popup.style
                  },
                  popup.com
                  ? m.component(popup.com, ctrl)
                  : popup.text || m.trust(popup.html)
                 )
              ]
             )
           )
         )]
    }
  }

  function closeOverlay (root) {
    root = typeof root=='string' ? document.querySelector(root) : root
    m.mount(root, null)
    root.style.display = 'none'
  }
  function popupOverlay (root, popupObj) {
    root = typeof root=='string' ? document.querySelector(root) : root
    m.mount(root, m.component(overlay, {root: root, popup: popupObj}))
  }

  // export function

  return {pop: popupOverlay, close: closeOverlay}
}))
