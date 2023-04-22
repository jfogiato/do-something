describe('Form', () => {
  const header = "[data-cy='header']";
  const formPage = "[data-cy='form-page']";
  const form = "[data-cy='form-blurb']";
  const typeDropdown = "[data-cy='type-drop']";
  const participantsDropdown = "[data-cy='participants-drop']";
  const costDropdown = "[data-cy='cost-drop']";
  const goBtn = "[data-cy='get-activity-btn']";  

  beforeEach(() => {
    cy.visit('http://localhost:3000/i-want-to');
  });

  it('Should show a form with dropdown options and the header should be visible', () => {
    cy.get(header).should('be.visible');
    cy.get(formPage).should('be.visible');
    cy.get(form).should('be.visible');
    cy.get(typeDropdown).should('be.visible').should('contain', 'any');
    cy.get(participantsDropdown).should('be.visible').should('contain', 'solo');
    cy.get(costDropdown).should('be.visible').should('contain', 'free');
    cy.get(goBtn).should('be.visible');
  });

  it('Should be able to select an option from each dropdown', () => {
    cy.get(typeDropdown).select('a DIY');
    cy.get(participantsDropdown).select('solo');
    cy.get(costDropdown).select('free');
  });

  it('Should be able to select an option from each dropdown and submit the request', () => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity?type=busywork&participants=1&price=0', {
      status: 200,
      fixture: 'response'
    });

    cy.get(typeDropdown).select('a busywork');
    cy.get(participantsDropdown).select('solo');
    cy.get(costDropdown).select('free');
    cy.get(goBtn).click();
    cy.url().should('include', '/you-could-do');
    cy.get("[data-cy='activity-name']").should('contain', 'Organize your music collection');
  });

  it('Should be able to navigate to YouDid component page', () => {
    cy.get("[data-cy='you-did-btn']").click();
    cy.url().should('contain', '/you-did');
  });

});