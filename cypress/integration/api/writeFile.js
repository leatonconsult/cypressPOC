const runLog = 'cypress/fixtures/runtime/runlog.csv';

/**
 * Create users via OTDS
**/
describe('JMeter', () => {
    it('Create Users via OTDS', () => {
        cy.log("**-=-=- Start of Create Script -=-=-**");
        cy.log("**Start time:** " + Date().split("GMT")[0]);
        cy.log("**Log location:** " + runLog);
        cy.writeFile(runLog, `Start: ${Date().split("GMT")[0]}\nUSER,RESPONSE,TIMESTAMP\n`);    // Write Header to log file
        cy.fixture('users/userCSV.csv').then((userData) => {                                    // Read user data
            userData.split('\n').forEach(create);                                               // For each line, create(userData)
        }).then(() => {
            cy.writeFile(runLog, `Finish: ${Date().split("GMT")[0]}`, { flag: 'a+' });          // Write finish time to log file
            cy.log("**Finish time:** " + Date().split("GMT")[0]);
            cy.log("**-=-=- End of Create Script -=-=-**");
        });
    });
});

/**
 * Function - Create User
 * @param {*} userData - User Data used to Create
**/
function create(userData) {
    const user = userData.split(',')[0];
    cy.log("**Attemping to Create user:** " + user);
    // DO STUFF WITH API
    const response = 200                                                                        // mimics API response
    cy.log("**User Created:** **" + user + "** - " + userData).then(() => {                     // .then after API calls
        cy.writeFile(runLog, `${user},${response},${Date().split("GMT")[0]}\n`, { flag: 'a+' });// Write to log file
        cy.wait(500);                                                                           // TEST PURPOSES
    });
};