describe('Quete 04 - Plugins et reporting', () => {

  it('passes', () => {
    cy.visit('https://example.cypress.io');
  })

  it('go to google.fr', () => {
    cy.visit('https://www.google.com');
    cy.get('[alt="Google"]').should('be.visible');
  });

  it('go to amazon.fr', () => {
    cy.visit('https://www.amazon.fr/');
    cy.wait(1000);
    cy.url().should('contain', 'amazon');
  });


});