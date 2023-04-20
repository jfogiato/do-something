describe('You Could...', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity?type=busywork&participants=1&price=0', {
      status: 200,
      fixture: 'response'
    })
    .visit('http://localhost:3000/i-want-to')
    cy.get("[data-cy='type-drop']").select('a busywork');
    cy.get("[data-cy='participants-drop']").select('solo');
    cy.get("[data-cy='cost-drop']").select('free');
    cy.get("[data-cy='get-activity-btn']").click();
  });

  it('Should have an available option for the user to see', () => {
    cy.get("[data-cy='header']").should('be.visible');
    cy.get("[data-cy='activity-name']").should('contain', 'Organize your music collection');
    cy.get("[data-cy='do-it-btn']").should('be.visible');
    cy.get("[data-cy='nah-btn']").should('be.visible');
  });

  it('Should be able to say "Nah" and go back to the request screen', () => {
    cy.get("[data-cy='nah-btn']").click();
    cy.url().should('contain', '/i-want-to');
    cy.get("[data-cy='get-activity-btn']").should('be.visible');
  });

  it('Should be able to say "Do it.", go to their activities page, and the new activity added', () => {
    cy.get("[data-cy='do-it-btn']").click();
    cy.url().should('contain', '/you-did');
    cy.get("[data-cy='things-header']").should('be.visible');
    cy.get('.activities-container > :nth-child(1)').should('contain', 'Organize your music collection');
  });
});