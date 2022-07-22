const runLog = 'cypress/fixtures/runtime/runlog.csv';
const response = 200;                // TEST PURPOSES

/**
 * Create users via ODS
**/
describe('JMeter', () => {
    it('Create Users via OTDS', () => {
        cy.log("**-=-=- Start of Create Script -=-=-**");   // Start Logging
        cy.log("**Start time:** " + Date().split("GMT")[0]);
        cy.log("**Log location:** " + runLog);
        cy.writeFile(runLog, `Start: ${Date().split("GMT")[0]}\nUSER,ACTION,RESPONSE,TIMESTAMP\n`); // Write Headers to log
        cy.fixture('users/userCSV.csv').then((userData) => {    // Load User .csv
            userData.split('\n').forEach(create);   // Split by line and Create User per line
        }).then(() => {
            cy.writeFile(runLog, `Finish: ${Date().split("GMT")[0]}`, { flag: 'a+' });  // End Logging
            cy.log("**Finish time:** " + Date().split("GMT")[0]);
            cy.log("**-=-=- End of Create Script -=-=-**");
        });
    });
});

/**
 * Function - ODS API - Create engine
 * @param {*} userData - User Data used to Create
**/
function create(userData) {
    const userParsed = userData.split(',');
    const username = userParsed[0];
    cy.log("**Attemping to Create user:** " + username);
    // DO STUFF WITH API
    createUser(username, userData);             // API - Initial Create user
    addUserGroups(username, userParsed[1]);     // API - Add User to Groups
    addUserRoles(username, userParsed[2]);      // API - Add Roles to User
};

/**
 * Function sets up user in O
 * @param {*} user - String - Username
 * @param {*} userData - String - User data from .csv
**/
function createUser(user, userData) {
    cy.wait(350).then(() => {   // TEST PURPOSES - Replace with API call
        logger(user, "CREATE", response, Date().split("GMT")[0]);
        cy.log("**User Created:** **" + user + "** - " + userData);
    });                  
};

/**
 * Function Adds User to Groups
 * @param {*} user - String - Username
 * @param {*} groups - String - Groups to add User to
 */
function addUserGroups(user, groups) {
    cy.wait(350).then(() => {   // TEST PURPOSES - Replace with API call
        logger(user, "GROUPS", response, Date().split("GMT")[0]);
        cy.log("**User Added to Groups:** **" + user + "** - " + groups);
    });
};

/**
 * Function Adds Roles to User
 * @param {*} user - String - Username
 * @param {*} roles - String - Roles to add User to
**/
function addUserRoles(user, roles) {
    cy.wait(350).then(() => {   // TEST PURPOSES - Replace with API call
        logger(user, "ROLES", response, Date().split("GMT")[0]);
        cy.log("**User Roles Added:** **" + user + "** - " + roles);
    });
};

/**
 * Function - Log User Creation to File (runLog.csv)
 * @param {*} user - username
 * @param {*} action - API action
 * @param {*} response - response from create
 * @param {*} timestamp - timestamp for log entry
**/
function logger(user, action, response, timestamp) {
    cy.writeFile(runLog, `${user},${action},${response},${timestamp}\n`, { flag: 'a+' });
};