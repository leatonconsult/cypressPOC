
describe("auth", () => {
  it("get auth ticket", () => {
	  const gatewayId = "93246";
	  const catAttDefs = { "56791_1": {
			        	"data": "blah",
			        	"name": "Nationality",
			        	"key": "56791_1"
			        	},
			        "56791_2": {
			        	"data": "blah",
			        	"name": "Community",
			        	"key": "56791_2"
			        },
			        "56791_3": {
			        	"data": "blah",
				        "name": "Security",
				        "key": "56791_3"
				        }
			    	};	

	  cy.log(getKey(catAttDefs, "Security"));
	  cy.log(getKey(catAttDefs, "Nationality"));
	  cy.log(getKey(catAttDefs, "Community"));

	  // combined with Gateway ID
	  const securityKey = gatewayId + "_" + getKey(catAttDefs, "Security");
	  const nationalityKey = gatewayId + "_" + getKey(catAttDefs, "Nationality");
	  const communityKey = gatewayId + "_" + getKey(catAttDefs, "Community");
	  cy.log(securityKey);
	  cy.log(nationalityKey);
	  cy.log(communityKey);
	
	const attMap = JSON.stringify(mapCategoryAttributes(catAttDefs));
	cy.log(attMap);

	const communityK = Object.values(JSON.parse(attMap).find((elem) => elem.Community));
	cy.log(gatewayId + "_" + communityK + ": WSSCC");
			
	  
  });
});

/**
 * Map Category Attributes - Name: Key
 * @param {*} catAtt - Object containing Category Attributes
 * @returns Attributes names and keys mapped - eg. [{nationality: 56791_1}, {community: 56791_2}, {security: 56791_3}]
 */
function mapCategoryAttributes(catAtt) {
	const attMap = Object.values(catAtt).map(elem => {
		return { [elem.name]: elem.key }
	});
	return(attMap);
} export { mapCategoryAttributes };

/**
 * Get Attribute Key
 * @param {*} attributes - Object - Containing Category Definitions
 * @param {*} name - String - Name of the Attribute we require the key for
 * @returns - Attribute Key - eg. 56791_3
 */
 function getKey(attributes, name) {
	const key = Object.values(attributes).find((elem) => elem.name === `${name}`)?.key;
	return(key);
}