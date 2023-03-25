/// <reference types="cypress" />

import homePage, { selectDropdwon } from "../homePage/homePage.cy"
import validatorsPage from "../validatorsPage/validatorsPage.cy"

describe('Evaluacion Automation', () =>{
beforeEach(() =>{
    cy.visit('https://the-internet.herokuapp.com/dropdown')
    cy.title().should('eq','The Internet')

})

    it('Dropdown test', () =>{
        homePage.screenSize('iphone-6')
        homePage.selectDropdwon("Option 1")
        cy.wait(2000)
        homePage.selectDropdwon("Option 2")

    })

})