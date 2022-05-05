/**
 * get lined up chart
 * @param length {number}
 * @param alphabet {string}
 * @returns {string[]}
 */
function getLinedUpChart(length = 4, alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  const len = alphabet.length;
  const alphabetArr = alphabet.split('');
  const result = [];

  for (let i = 0; i < length; i += 1) {
    let res = '';
    let index = i;
    while (index >= 0) {
      if (index < len) {
        res = alphabetArr[index % len] + res;
        index = -1;
      } else {
        res = alphabetArr[index % len] + res;
        index = Math.floor(index / len) - 1;
      }
    }

    result.push(res);
  }

  return result;
}

export default getLinedUpChart;
