/**
 * Função que deve retornar a média simples dos
 * números passados como parâmetro.
 */

function getAverage(grades) {
  let total = 0;
  let count = 0;

  grades.forEach((grade) => {
    count++;
    total += grade;
  });
  return total / count;
}

module.exports = getAverage;
