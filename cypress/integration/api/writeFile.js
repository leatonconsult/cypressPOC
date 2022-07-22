const runLog = 'cypress/fixtures/runtime/runlog.csv';

/**
 * Create users via ODS
**/
describe('JMeter', () => {
    it('Create Users via OTDS', () => {
        cy.log("**-=-=- Start of Create Script -=-=-**");
        cy.log("**Start time:** " + Date().split("GMT")[0]);
        cy.log("**Log location:** " + runLog);
        cy.writeFile(runLog, `Start: ${Date().split("GMT")[0]}\nUSER,RESPONSE,TIMESTAMP\n`);    
        cy.fixture('users/userCSV.csv').then((userData) => {
            userData.split('\n').forEach(create);
        }).then(() => {
            cy.writeFile(runLog, `Finish: ${Date().split("GMT")[0]}`, { flag: 'a+' });          
            cy.log("**Finish time:** " + Date().split("GMT")[0]);
            cy.log("**-=-=- End of Create Script -=-=-**");
        });
    });
});

/**
 * Function - ODS API - Create User
 * @param {*} userData - User Data used to Create
**/
function create(userData) {
    const user = userData.split(',')[0];
    cy.log("**Attemping to Create user:** " + user);
    // DO STUFF WITH API
    const response = 200        // TEST PURPOSES
    const apiAction = "CREATE"; // Assumption - multiple API calls 
    cy.log("**User Created:** **" + user + "** - " + userData).then(() => {  
        logger(user,apiAction,response,Date().split("GMT")[0]);  // Call after each API action, eg. Create, Roles, Groups etc
        cy.wait(500);           // TEST PURPOSES                                                           
    });
};

/**
 * Function - Log User Creation to File (runLog)
 * @param {*} user - username
 * @param {*} action - API action
 * @param {*} response - response from create
**/
function logger(user, action, response, timestamp){
    cy.writeFile(runLog, `${user},${action},${response},${timestamp}\n`,{flag: 'a+'});
};