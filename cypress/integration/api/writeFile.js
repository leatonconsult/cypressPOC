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
 * Function - Create engine
 * @param {*} userData - User Data used to Create
**/
function create(userData) {
    const userDataParsed = userData.split(',');
    const username = userDataParsed[0];
    cy.log("**Attemping to Create user:** " + username);
    // DO STUFF WITH API
    createUser(username, userData);                 // API - Initial Create user
    addUserGroups(username, userDataParsed[1]);         // API - Add User to Groups
    addUserRoles(username, userDataParsed[2]);          // API - Add Roles to User
    addUserNationalities(username, userDataParsed.splice(4,5,6,7,8));  // API - Add Nationalities to User       // .splice() gets from array
};

/**
 * ODS API - Function sets up User in O
 * @param {*} user - String - Username
 * @param {*} userData - String - User data from .csv
**/
function createUser(user, userData) {
    cy.wait(200).then(() => {   // TEST PURPOSES - Replace with API call .then
        logger(user, "CREATE", response, Date().split("GMT")[0]);
        cy.log("**User Created:** **" + user + "** - " + userData);
    });                  
};

/**
 * ODS API - Function Adds User to Groups
 * @param {*} user - String - Username
 * @param {*} groups - String - Groups to add User to
 */
function addUserGroups(user, groups) {
    cy.wait(200).then(() => {   // TEST PURPOSES - Replace with API call .then
        logger(user, "GROUPS - " + groups, response, Date().split("GMT")[0]);
        cy.log("**" + user + " added to Groups:** " + groups);
    });
};

/**
 * ODS API - Function Adds Roles to User
 * @param {*} user - String - Username
 * @param {*} roles - String - Roles to add User to
**/
function addUserRoles(user, roles) {
    cy.wait(200).then(() => {   // TEST PURPOSES - Replace with API call .then
        logger(user, "ROLES - " + roles, response, Date().split("GMT")[0]);
        cy.log("**" + user + " Roles added:** " + roles);
    });
};

/**
 * ODS API - Function Adds Nationalities to User
 * @param {*} user - String - Username
 * @param {*} nationalities - String - Nationalities to add User to
**/
function addUserNationalities(user, nationalities) {  
    const natsParsed = nationalities.filter(Boolean);   // Removes nulls / blanks
    cy.wait(200).then(() => {   // TEST PURPOSES - Replace with API call .then
        logger(user, "NATS - " + natsParsed, response, Date().split("GMT")[0]);
        cy.log("**" + user + " Nationalities added:** " + natsParsed);    
    })
};

/**
 * Function - Log User Creation to File (runLog.csv)
 * @param {*} user - username
 * @param {*} action - API action
 * @param {*} response - response from create
 * @param {*} timestamp - timestamp for log entry
**/
function logger(user, action, response, timestamp) {
    cy.writeFile(runLog, `${user},${action},${response},${timestamp}\n`, { flag: 'a+' });   // flag appends
};