/// <reference types="cypress" />

describe('Alert Problem', function() {
    it('Try to slove Alert / Tab Problem',function(){

        //Alert
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(500)
        cy.get('#name').type('TESTER COME TO TEST')
        cy.wait(500)
        cy.get('#confirmbtn').click()
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello TESTER COME TO TEST, Are you sure you want to confirm?')
})

        //Tab
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(2000)
        cy.url().should('include','https://www.rahulshettyacademy.com/#/index')
        cy.wait(2000)
        cy.go('back')


    })

})