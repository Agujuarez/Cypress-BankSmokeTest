// cypress/integration/login_spec.js

describe('Inicio de sesión', () => {
    it('Debería iniciar sesión con credenciales válidas', () => {
      cy.visit('http://zero.webappsecurity.com/');
      cy.get('#signin_button').click(); // Hacer clic en el botón de inicio de sesión
      cy.get('#user_login').type('username');
      cy.get('#user_password').type('password');
      cy.get('.btn').click();
      // Agregar aserciones adicionales después del inicio de sesión
    });
  });