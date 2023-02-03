import dpi from './dpi';

function pt2px(pt, precision = 2) {
  return {
    x: Number(((pt / 72) * dpi[0]).toFixed(precision, 10)),
    y: Number(((pt / 72) * dpi[1]).toFixed(precision, 10)),
  };
}

export default pt2px;
