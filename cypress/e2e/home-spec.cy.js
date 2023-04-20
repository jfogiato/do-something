describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to see the home page and logo', () => {
    cy.get("[data-cy='home']").should('be.visible');
    cy.get("[data-cy='home-logo']").should('contain', 'Do Something.');
  });

  it('Should be able to click on a button and be redirected to the next page', () => {
    cy.get("[data-cy='go-to-form-btn']").click();
    cy.url().should('include', '/i-want-to');
  });
});