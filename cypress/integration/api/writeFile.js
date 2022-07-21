
const response = 200;
const users = ["user1", "user2", "user3"]
const runLog = 'cypress/fixtures/runtime/runlog.csv'

describe('Write to CSV', () => {
    it('Setup File', () => {
        cy.writeFile(runLog, 'user,response\n');
        cy.log("**Run Log Created:** " + runLog);
    });
    it('Create Users', () => {
        cy.log("**-=-=- Start of Create Script -=-=-**");
        cy.fixture('users/userCSV.csv').then((userData) => {
            userData.split('\n').forEach(create);
        });
        cy.log("**-=-=- End of Create Script -=-=-**");
    });
});

/**
 * Function to Log User Create
 * @param {*} user - User to Create
**/
function create(userData) {
    const user = userData.split(',')[0];
    cy.log("**Attemping to Create user:** " + user);
    cy.writeFile('cypress/fixtures/runtime/runlog.csv', `${user},${response}\n`,{flag: 'a+'});
    cy.log("**User Created:** **" + user + "** - " + userData);
};