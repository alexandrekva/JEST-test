/**
 * Função que deve retornar os seguintes status
 * de acordo com a média passada como parâmetro:
 *
 *  - repproved caso a média seja maior ou igual que 0 menor que 5
 *  - final exam caso a média seja maior ou igual a 5 e menor que 6
 *  - approved caso a média seja maior ou igual a 6 e menor que 10
 *  - perfect grade caso a média seja menor igual a 10
 */

function averageStatus(averageGrade) {
  if (averageGrade >= 0 && averageGrade < 5) {
    return "repproved";
  } else if (averageGrade >= 5 && averageGrade < 6) {
    return "final exam";
  } else if (averageGrade >= 6 && averageGrade < 10) {
    return "approved";
  } else if (averageGrade == 10) {
    return "perfect grade";
  } else {
    return "grade out of range";
  }
}

module.exports = averageStatus;
