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
 * Function - Create User
 * @param {*} userData - User Data used to Create
**/
function create(userData) {
    const user = userData.split(',')[0];
    cy.log("**Attemping to Create user:** " + user);
    // DO STUFF
    const response = 200;
    cy.log("**User Created:** **" + user + "** - " + userData);
    logCreate(user, response);
};

/**
 * Function - Log User Creation to File (runLog)
 * @param {*} user - username
 * @param {*} response - response from create
**/
function logCreate(user, response){
    cy.writeFile(runLog, `${user},${response}\n`,{flag: 'a+'});
};