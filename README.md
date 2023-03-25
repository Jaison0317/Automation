# Automation Test

Download zip File

1. Install NodeJS

2. Install Cypress

3. Run Cypress

4. Excute the following command:
node_modules/.bin/cypress open

or

npx cypress open


5. Execute the test suite
npx cypress run --env SUITE=smoke

6. When you want execute with different screen size
screenSize : () => cy.viewport('iphone-6+')
