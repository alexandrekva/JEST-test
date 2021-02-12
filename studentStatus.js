const averageStatus = require('./averageStatus');
const gradesAverage = require('./gradesAverage');

/**
 * Função que deve retornar a situação atual do aluno
 * de acordo com suas notas.
 */

function studentStatus(grades) {
    let average = gradesAverage(grades);
    let status = averageStatus(average);

    return `Grade: ${average} / Status: ${status}`;
}

module.exports = studentStatus;