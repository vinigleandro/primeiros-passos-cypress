class DashboardPage {

    selectorsList(){
        const selectorsList = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return selectorsList;
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible');
    }
}

export default DashboardPage;