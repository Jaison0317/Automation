/// <reference types="cypress" />
require('cypress-xpath');

import homePage from "../homePage/homePage.cy"
import "cypress-real-events/support"

describe("Evaluacion Automatizacion", () => {
    beforeEach(() =>{
        cy.visit('https://the-internet.herokuapp.com/hovers')
        cy.title().should('eq','The Internet')
    
    })

    it('Hover and Validate Text using realHover', function () {
        cy.get('div:nth-child(3) > img').realHover()
        cy.get('div:nth-child(3) > div > h5').should('be.visible')
        cy.get('div:nth-child(4) > img').realHover('mouse')
        cy.get('div:nth-child(4) > div > h5').should('be.visible')
        cy.get('div:nth-child(5) > img').realHover('mouse')
        cy.get('div:nth-child(5) > div > h5').should('be.visible')
    })
 
})

