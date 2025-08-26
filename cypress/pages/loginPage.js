class LoginPage {
    selectorsList() {
        const selectorsList = {
            usernameField: "[name='username']",
            passwordField: "[name='password']", 
            loginButton: "[type='submit']",
            wrongCredentialsAlert: "[role='alert']",
       }

       return selectorsList;
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        const selectors = this.selectorsList();
        cy.get(selectors.usernameField).type(username)
        cy.get(selectors.passwordField).type(password)
        cy.get(selectors.loginButton).click()

    }

}

export default LoginPage;