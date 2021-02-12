const studentStatus = require('./studentStatus');
jest.mock('./gradesAverage');
const gradesAverage = require('./gradesAverage');
jest.mock('./averageStatus');
const averageStatus = require('./averageStatus');

test('um aluno com notas 8 e 5 seja aprovado e tenha média 6.5', () => {
    gradesAverage.mockImplementation(() => 6.5)
    averageStatus.mockImplementation(() => "approved")


    expect(studentStatus([8, 5])).toBe("Grade: 6.5 / Status: approved")
    expect(gradesAverage).toBeCalledTimes(1);
    expect(averageStatus).toBeCalledTimes(1);

})