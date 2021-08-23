/// <reference types="cypress" />

describe('ebay product search', () => {
    
    it('should search a product on ebay', () => {
     
      cy.visit('https://www.ebay.com/');

      const searchField='#gh-ac';

      const button='#gh-btn';
      cy.get(searchField).type('Mobile Phone');

      cy.get(button).click();

      cy.get(searchField).should('have.value', 'mobile phone');




    });
});
  
    