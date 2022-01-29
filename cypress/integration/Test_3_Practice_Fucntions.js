/// <reference types="cypress" />

describe('My 2nd Test_Cypress', function() {
    it('Try to slove Functions Problem',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(500)

        //Checkbox Example
        cy.get('#checkbox-example > fieldset').as('pick')
        cy.get('#checkbox-example > fieldset').find('#checkBoxOption1').click()
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        //cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3']) //check more 1 in single time
    })

    //it('Try to slove Checkbox Example',function(){


    //})




  })