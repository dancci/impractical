import dpi from './dpi';

function px2mm(px, precision = 2) {
  return {
    x: Number(((px / dpi[0]) * 25.4).toFixed(precision, 10)),
    y: Number(((px / dpi[1]) * 25.4).toFixed(precision, 10)),
  };
}

export default px2mm;
