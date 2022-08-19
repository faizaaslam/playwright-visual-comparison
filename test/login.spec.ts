import test, {expect} from "@playwright/test";
import loginPage from "./page-objects/loginPage";
const loginpage = new loginPage();

test('TC-01: Swag-lab website login', async({page})=>{

    await loginpage.navigateToWebsite(page);
    await loginpage.enterCredentials(page);
    await loginpage.clickOnLoginBtn(page);

    await expect(await loginpage.productPageIsDisplayed(page)).toBe(true);

});

test('TC-02: Verify the visual comparison of Login page', async ({page})=>{
    await loginpage.navigateToWebsite(page);
    await expect(await page.screenshot()).toMatchSnapshot('./baseline-images/loginPage.png');
});