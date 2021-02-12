const averageStatus = require('./averageStatus');

test('um aluno com a média 5 = prova final', () => {
    expect(averageStatus(5)).toBe("final exam")
})