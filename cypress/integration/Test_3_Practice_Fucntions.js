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


        //Static Dropdown

        cy.get('select').select('option3').should('have.value','option3')


        //Auto-Complete Dropdown

        cy.get('#autocomplete').type('Thai')
        cy.wait(1500)
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {

                if($el.text() == "Thailand")
                {
                    $el.click()
                }

        })
        cy.get('#autocomplete').should('have.value','Thailand')


        //Display

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
 
        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
        













    }
    )



  })