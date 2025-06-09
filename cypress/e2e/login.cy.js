describe('Orange HRM Tests', () => {
  it('Login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get("header .oxd-topbar-header-breadcrumb-module").contains('Dashboard')
  })
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("TestUser")
    cy.get("[name='password']").type("admin1234")
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
})