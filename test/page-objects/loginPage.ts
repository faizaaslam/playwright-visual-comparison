import { Page } from "@playwright/test";
const yaml = require('js-yaml');
const fs = require('fs');
let config = yaml.load(fs.readFileSync('./test-data/config.yml', 'utf8'));

export default class LoginPage {

    // Page objects
    username = "#user-name";
    password = "#password";
    login = "#login-button";
    productPage = "div span.title"

    // Actions
    async navigateToWebsite(page: Page){
        await page.setDefaultNavigationTimeout(60000);
        await page.goto(config['BaseUrl']['url']);
    }

    async enterCredentials(page:Page){
        const workspace = await page.locator(this.username);
        await workspace.fill(config['Credentials']['username']);
        const passwordField = await page.locator(this.password);
        await passwordField.fill(config['Credentials']['password'])
    }

    async clickOnLoginBtn(page){
        await page.locator(this.login).click();
        await page.waitForLoadState('networkidle');
    }

    async productPageIsDisplayed(page){
        return await page.locator(this.productPage).isVisible();
    }
}