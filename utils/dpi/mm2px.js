import dpi from './dpi';

function mm2px(mm, precision = 2) {
  return {
    x: Number(((mm / 25.4) * dpi[0]).toFixed(precision, 10)),
    y: Number(((mm / 25.4) * dpi[1]).toFixed(precision, 10)),
  };
}

export default mm2px;
