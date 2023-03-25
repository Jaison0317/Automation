/// <reference types="cypress" />

class homePage{
    
    random = '1' + Math.random().toString().substr(2, 9)

    
    elements = {

        inputUsername : () => cy.get('#username'),
        inputPassword : () => cy.get('#password'),
        loginBtn : () => cy.get(".fa").contains("Login"),
        logOffBtn : () => cy.get("#button").contains("Logout"),
        inputNumber : () => cy.get('input'),
        //hovers1 : () => cy.get(""),
        selectDropdown : () => cy.get('#dropdown'),
        screenSize : () => cy.viewport('iphone-6+')

    }

    clickOnSignin(){
        this.elements.loginBtn().click()
    }

    typeUsername(username){
        this.elements.inputUsername().type(username)

    }

    typePassword(password){
        this.elements.inputPassword().type(password)
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

    logOut(){
        this.elements.logOffBtn().click();
    }

    inputNumber(number){
        this.elements.inputNumber().type(number).type(this.random);
    }

    selectDropdwon(selectUser){
        this.elements.selectDropdown(selectUser).select(selectUser)
    }

    screenSize(){
        this.elements.screenSize()
    }
}



module.exports = new homePage();