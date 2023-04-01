/// <reference types="cypress" />

import homePage from "../homePage/homePage.cy"


describe("Evaluacion Automatizacion", () => {
    beforeEach(() =>{
        cy.visit('https://the-internet.herokuapp.com/inputs')
        cy.title().should('eq','The Internet')
    
    })

    it("Random numbers", () =>{
        homePage.inputNumber("#number")
    })
})

