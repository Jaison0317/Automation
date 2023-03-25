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

    it.only('Login USER', () =>{
        
        homePage.typeUsername("tomsmith")
        cy.wait(3000)
        homePage.typePassword("SuperSecretPassword!")
        homePage.clickLogin();
        validatorsPage.loginSuccess("You logged into a secure area!")
        cy.screenshot()

    })

    it('Login USER Incorrect ', () =>{
        
        homePage.typeUsername(userID_Alpha_Numeric())
        cy.wait(3000)
        homePage.typePassword("contrasena!")
        homePage.clickLogin();
        validatorsPage.loginIncorrect(" Your username is invalid!")
        cy.screenshot()


    })


    it,only('Dropdown test', () =>{
        homePage.screenSize('iphone-6')
        homePage.selectDropdwon("Option 1")
        cy.wait(2000)
        homePage.selectDropdwon("Option 2")

    })

    it("Random numbers", () =>{
        homePage.inputNumber("#number")
       // cy.screenshot()
    })

    it.skip('Hover and Validate Text using realHover', function () {
        cy.get('div:nth-child(3) > img').realHover()
        cy.get('div:nth-child(3) > div > h5').should('be.visible')
        cy.get('div:nth-child(4) > img').realHover('mouse')
        cy.get('div:nth-child(4) > div > h5').should('be.visible')
        cy.get('div:nth-child(5) > img').realHover('mouse')
        cy.get('div:nth-child(5) > div > h5').should('be.visible')
    })

})