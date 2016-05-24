

/**
 * @fileOverview
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
    popup.style.border = '1px solid red'

    return [
      m('.overlaybg',
        {
          style: {
            'position': 'absolute',
            'z-index': 999,
            'left': 0,
            'top': 0,
            'background': '#000000',
            'height': '100%',
            'width': '100%',
            'opacity': '0.5',

            /* below try to fix IE8 render problem, but not work:(  */
            // 'background-color': '#000000',
            // 'filter': 'none !important',
            // '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)',
            // 'filter': 'alpha(opacity=50)',
            // 'zoom':1
          }
        }
       ),
      m('table.overlay',
        {
          style: {
            'z-index': 99999,
            'border': 1 + 'px',
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
              m('div',
                {
                  style: popup.style
                },
                m.trust(popup.html)
               )
            ]
           )
         )
       )]
  }
}

function popupOverlay (rootID, popupObj) {
  var root = document.getElementById(rootID)
  m.mount(root, m.component(overlay, {root: root, popup: popupObj}))
}

popupOverlay('overlay', {html: '<b>oisdfjo</b><i>isdofjK</i>', style: {width: 200 + 'px'}})
document.getElementById('abc').onclick = function () {}
