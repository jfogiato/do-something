describe('You Did', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity?type=busywork&participants=1&price=0', {
      status: 200,
      fixture: 'response'
    })
    .visit('http://localhost:3000/i-want-to');
    cy.get("[data-cy='type-drop']").select('a busywork');
    cy.get("[data-cy='participants-drop']").select('solo');
    cy.get("[data-cy='cost-drop']").select('free');
    cy.get("[data-cy='get-activity-btn']").click();
    cy.get("[data-cy='do-it-btn']").click();
  });

  it('Should display the users latest activity choice', () => {
    cy.get('.activities-container > :nth-child(1)').should('contain', 'Organize your music collection');
  });

  it('Should be able to mark an item as done', () => {
    cy.get("[data-cy='pending-button']").first().click({force: true});
    cy.get("[data-cy='done-button']").click({force: true});
    cy.get("[data-cy='activity-name']").first().should('have.class', 'line-style');
  });
  
  it('Should be able to mark an item as un-done', () => {
    cy.get("[data-cy='pending-button']").first().click({force: true});
    cy.get("[data-cy='done-button']").click({force: true});
    cy.get("[data-cy='activity-name']").first().should('have.class', 'line-style');
    cy.get("[data-cy='done-button']").first().click({force: true});
    cy.get("[data-cy='done-button']").should('contain', 'Didn\'t do it.').click({force: true});
  });

  it('Should be able to change their mind about marking something done', () => {
    cy.get("[data-cy='pending-button']").first().click({force: true});
    cy.get("[data-cy='cancel-button']").click({force: true});
    cy.get("[data-cy='pending-button']").first().should('be.visible');
  });

  it('Should be able to visit a link for a given activity', () => {
    cy.get('a.material-symbols-outlined').click();
    // unsure how to test this redirect to Google in a new tab...weird req/res going on and not grabbing URL.
  });

  it('Should be able to delete an activity' , () => {
    cy.get('[data-cy="pending-button"]').click();
    cy.get('[data-cy="delete-button"]').click();
    cy.get("[data-cy='activity-name']").should('not.exist');
  });

  it('Should have data that persists after page refresh', () => {
    cy.reload();
    cy.get('.activities-container > :nth-child(1)').should('contain', 'Organize your music collection');
  });

  it('Should have state that persists after page refresh', () => {
    cy.get("[data-cy='pending-button']").first().click({force: true});
    cy.get("[data-cy='done-button']").click({force: true});
    cy.reload();
    cy.get('.activities-container > :nth-child(1)').should('contain', 'Organize your music collection');
    cy.get("[data-cy='activity-name']").first().should('have.class', 'line-style');
  });
});