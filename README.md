# Automation Test

Download zip File

Pre-conditions
1. Install NodeJS

2. Install Cypress

----------------------

1. Run Cypress

1.1. Excute the following command:
  node_modules/.bin/cypress open

or

  npx cypress open


2. Execute the test suite
npx cypress run --env SUITE=smoke

3. When you want execute with different screen size
screenSize : () => cy.viewport('iphone-6+')
