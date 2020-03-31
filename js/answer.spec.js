describe('Answer', () => {
    let employees = [];
    let ceoIndex;

    it('should find the CEO', () => {
        const actual = findCEOIndex(employees);
        const expected = ceoIndex;
        console.log(expected, actual);

        chai.expect(expected).to.equal(actual);
    });

    it('should pluck the CEO', () => {
        const expected = employees[ceoIndex];
        const actual = pluckCEO(employees, ceoIndex);

        chai.expect(expected.id).to.equal(actual.person.id);
    });

    it('should map direct reports', () => {
        const expected = new PersonTreeNode(employees[ceoIndex]);
        expected.directReports = [
            new PersonTreeNode(employees[0]),
            new PersonTreeNode(employees[2])
        ];

        const ceo = pluckCEO(employees, ceoIndex);
        const actual = mapDirectReports(ceo, employees);

        chai.expect(expected.person.name).to.equal(actual.person.name);
        chai.expect(expected.directReports[0].person.name).to.equal(actual.directReports[0].person.name);
        chai.expect(expected.directReports[1].person.name).to.equal(actual.directReports[1].person.name);
    });

    beforeEach(() => {
        const _kirk = new Person(1, 'Kirk', null);
        const _tim = new Person(2, 'Tim', _kirk);
        const _roger = new Person(3, 'Roger', _kirk);

        employees = [
            _tim,
            _kirk,
            _roger
        ];

        ceoIndex = 1;
    });
});