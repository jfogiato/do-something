describe('Not Found', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should redirect for any page that doesn\'t exist', () => {
    cy.visit('http://localhost:3000/pppppppp');
    cy.get('h1').should('contain', 'Dang. The page you\'re looking for has either moved or doesn\'t exist.');
    cy.visit('http://localhost:3000/you-can-also-do');
    cy.get('h1').should('contain', 'Dang. The page you\'re looking for has either moved or doesn\'t exist.');
    cy.visit('http://localhost:3000/how-about-this-one');
    cy.get('h1').should('contain', 'Dang. The page you\'re looking for has either moved or doesn\'t exist.');
  });
})