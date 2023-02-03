/**
 * 获取设备 DPI
 * @returns {*[]}
 */
function getDPI() {
  const dpi = [];

  if (window.screen.deviceXDPI) {
    dpi[0] = window.screen.deviceXDPI;
    dpi[1] = window.screen.deviceYDPI;
  } else {
    const el = document.createElement('DIV');
    el.style.cssText = 'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden';
    document.body.appendChild(el);
    dpi[0] = parseInt(el.offsetWidth, 10);
    dpi[1] = parseInt(el.offsetHeight, 10);
    el.parentNode.removeChild(el);
  }

  return dpi;
}

const dpi = getDPI();

export default dpi;
