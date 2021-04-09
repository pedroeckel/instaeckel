/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/loginScreen.pageObject';

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
    // Interceptamos a chamada da API
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');

      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'pedro01012', password: 'senhasegura' })
        .submitLoginForm();

      // o que esperamos? Ir para "/app/profile/"
      cy.url().should('include', '/app/profile');
      // Temos o token?
      cy.wait('@userLogin')
        .then((intercept) => {
        // token do servidor
          const { token } = intercept.response.body.data;
          // token da página
          cy.getCookie('APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
});
