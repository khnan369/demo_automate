/// <reference types="cypress" />

describe('My 2nd Test_Cypress', function() {
    it('My 2nd Test Case',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('Ca')
        cy.wait(2000)
        //selenium get hit URL in browser, Cypress get acts like findElement of selenium
        cy.get('.product:visible').should('have.length',4)
        //parent child chianing
        cy.get('.products').find('.product').should('have.length',4)
        cy.wait(1000)

        //way 1 to select amount of product then add them to cart
        cy.get(':nth-child(2) > .stepper-input > .increment').as('pickLocator') //Shortcut ur code to make location for miltiple time
        cy.get(':nth-child(2) > .stepper-input > .increment').click() //select item number 2 and Click on button
        cy.wait(1000) //Delay 1000ms
        cy.get('@pickLocator').click()
        cy.get(':nth-child(2) > .product-action > button').click()
        cy.wait(2000)

        //way 2 to select amount of product then add them to cart
        //cy.get()
        //cy.get('.products').find('.product').eq(2).contains('+').click() //select item number 3 with array[2] : [0,1,2,3] and Click on first el containing '+'
        //cy.wait(1000)
        //cy.get('.products').find('.product').eq(2).contains('+').click()
        //cy.wait(1000)
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() // Click on first el containing 'ADD TO CART' to pick items to cart
        //cy.wait(2000)
        
        //way 3 Grabbing the text for validations using cypress
        //cy.get('.products').find('.product').each(($el, index, $list) => {
        //const textVeg = $el.find('h4.product-name').text()
        //   if (textVeg.includes('Cauliflower')) {
              
        //    cy.wrap($el).find('.stepper-input > .increment').click()
        //    cy.wait(1000)  
        //    cy.wrap($el).find('.stepper-input > .increment').click()
        //    cy.wait(1000)
        //    cy.wrap($el).find('button').click()

        //    } else {
              // do something else

        //    }
        //  })

        //Order Items in the cart
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(1000)
        cy.contains('Place Order').click()
        cy.wait(1000)

    })


  })