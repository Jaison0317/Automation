/// <reference types="cypress" />

import homePage from "../homePage/homePage.cy"
import validatorsPage from "../validatorsPage/validatorsPage.cy"

function userID_Alpha_Numeric() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

describe('Evaluacion Automation', () =>{
beforeEach(() =>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.title().should('eq','The Internet')

})

    it('Login USER', () =>{
        
        homePage.typeUsername("tomsmith")
        cy.wait(3000)
        homePage.typePassword("SuperSecretPassword!")
        homePage.clickLogin();
        validatorsPage.loginSuccess("You logged into a secure area!")
        cy.screenshot()

    })

    it.only('Login USER Incorrect ', () =>{
        
        homePage.typeUsername(userID_Alpha_Numeric())
        cy.wait(3000)
        homePage.typePassword("contrasena!")
        homePage.clickLogin();
        validatorsPage.loginIncorrect(" Your username is invalid!")
        cy.screenshot()


    })

})