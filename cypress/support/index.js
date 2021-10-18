// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

var url = 'http://automationpractice.com/index.php'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(function() {
	// runs once before all tests in the block
		cy.log('===== STARTING SCRIPT =====')
	})
	
beforeEach(function() {
	// runs before each test in the block
		cy.log('===== Script Start: ' + url)
		cy.visit(url)
	})

after(function() {
	// runs once after all tests in the block
		cy.log('===== STOPPING SCRIPT =====')
	})

afterEach(function() {
	// runs after each test in the block
		cy.log('===== FINISHED =====')
	})