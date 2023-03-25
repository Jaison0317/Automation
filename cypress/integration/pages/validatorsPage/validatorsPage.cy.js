class validatorsPage{

    elements = {
        loginSuccess : () => cy.get('#flash-messages').should("be.visible"),
        loginIncorrect : () => cy.get('#flash')
    }

    loginSuccess(textVerify){
        this.elements.loginSuccess(textVerify)
    }

    loginIncorrect(textVerify){
        this.elements.loginIncorrect(textVerify)
    }
}

module.exports = new validatorsPage();