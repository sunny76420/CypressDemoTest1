
describe('Verify Login', () => {
    it('User enter incorrect login ID and Password and see an error message', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('[name="username"]').type('jsadjadg');
        cy.get('[name="password"]').type('ajdasjdhkahd');
        cy.get('[value="Log In"]').click();
        cy.get('.error').should('have.text', 'The username and password could not be verified.');

    });
});