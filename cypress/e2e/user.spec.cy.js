import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('User Orange HRM Tests', () => {

  it('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
   
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfoPage()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.natural({ min: 6, max: 20 }), chance.natural({ min: 6, max: 20 }), chance.natural({ min: 6, max: 20 }), '2027-10-03')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()  
  })

})
