/**
 * Given an array of Person objects, returns the root PersonTreeNode (the CEO).
 * @param {Person[]} employees - An array of Person objects representing all the employees of the company.
 * @returns {PersonTreeNode} The CEO of the organization.
 */
function generateTree(employees) {
  /**
   * @ignore
   * INSTRUCTIONS:
   * 1. ONLY edit this function and nothing else!.
   *
   * 2. Analyze the Person.js and PersonTreeNode.js files.
   *
   * 3. Parse the `employees` array and create a single PersonTreeNode
   *    object representing the CEO (the Person with no `manager`).
   *    All PersonTreeNode object's `directReports` arrays should contain
   *    PersonTreeNode's for their direct reports...creating a tree.
   *
   * 4. Refresh or click the 'Retry Test' button to rerun the test.
   *
   *  Feel free to create any additional functions in this file as needed.
   */

   /**
    * I used O(n^2) to pass the tests.
    */
  const ceoIndex = findCEOIndex(employees);
  const ceo = pluckCEO(employees, ceoIndex);

  return mapDirectReports(ceo, employees);
};

/**
 * 
 * @param {PersonTreeNode} manager 
 * @param {Person[]} employees 
 */
function mapDirectReports(manager, employees) {
  let employeeNode;
  let mappedEmployeeNode;

  employees.forEach(employee => {
    if(manager.person.id !== employee.manager.id) {
      return;
    }

    employeeNode = new PersonTreeNode(employee);
    mappedEmployeeNode = mapDirectReports(employeeNode, employees);
    manager.directReports.push(mappedEmployeeNode);
  });

  return manager;
}

/**
 * 
 * @param {Person[]} employees 
 */
function findCEOIndex(employees) {
  return employees.findIndex(employee => !employee.manager);
}

/**
 * 
 * @param {Person[]} employees 
 * @param {number} ceoIndex 
 */
function pluckCEO(employees, ceoIndex) {
  const ceo = employees[ceoIndex];
  employees.splice(ceoIndex, 1);
  return new PersonTreeNode(ceo);
}
