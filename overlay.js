

/**
 * @fileOverview
 * @name overlay.js
 * @author micheal.yang
 * @license MIT
 */

// require js/broswerutil.js file

var overlay = {
  controller: function () {
    var ctrl = this
    var onresize = function (e) {
      ctrl.width = _getWindowSize()[0]
      ctrl.height = _getWindowSize()[1]
      m.redraw()
    }
    window.addEventListener('resize', onresize)
    onresize()
  },
  view: function (ctrl) {
    // return m('div', 'content of abc')
    console.log("oisdjfioj", _getWindowSize())
    return m('table.overlay',
             {
               style: {
                 border: 0+'px',
                 padding: 0+'px',
                 margin: 0+'px',
                 width: ctrl.width + 'px',
                 height: ctrl.height + 'px',
                 // using below format to supress error in IE8
                 'background-color': 'rgba(0,0,0,0.5)'
               }
             },
             m('tr',
               m('td',
                 {
                   align: 'center',
                   style: {
                     verticalAlign: 'middle'
                   }
                 },
                 m('div',
                   {
                     style: {
                       width: '200px'
                     }
                   },
                   'soidjfoj\nosdijf<br>sodj23423foij'
                  )
                )
              )
            )
  }
}

m.mount(document.getElementById('abc'), overlay)
