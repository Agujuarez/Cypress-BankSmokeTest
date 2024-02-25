describe('Inicio de sesión', () => {
    it('Debería iniciar sesión con credenciales válidas', () => {
      cy.visit('http://zero.webappsecurity.com/');
      cy.get('#signin_button').click(); // Click en el botón de inicio de sesión
      cy.get('#user_login').type('username');
      cy.get('#user_password').type('password');
      cy.get('.btn').click();
      cy.get('#transfer_funds_tab > a').click() // Click en pestaña Transferencia
      cy.get('#tf_fromAccountId').select('1') // Selector cuenta Origen
      cy.get('#tf_toAccountId').select('5') // Selector cuenta Destino
      cy.get('#tf_amount').type('300') // Ingresar monto
      cy.get('#tf_description').type('Transferencia de prueba') // Ingresar descripción
      cy.get('#btn_submit').click() // Click en botón Transferir
      cy.get('#btn_submit').click() // Click para Confirmar
      cy.get('.alert').contains('You successfully submitted your transaction.') // Validar mensaje de confirmación
    });
  });