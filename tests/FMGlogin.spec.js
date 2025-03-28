import { test, expect } from '@playwright/test';
// Define a test case named 'FMG Login Page'
test('FMG Login Page', async ({page}) => {
     // Navigate to the login page
    await page.goto('https://test.fmj.group/login');

     // Fill in the valid credentials
    await page.fill('#email', 'kekas11396@nausard.com');
    await page.fill('#password', 'kekas11396@nausard.com');

    // Click the login button
    await page.click("//button[normalize-space()='Login']");

    // Wait for the page to load
    await page.waitForTimeout(5000);

    // Verify that the page title
    const pageTitel = await page.title();
    
    // Print the page title to the console
    console.log("Page title is :", pageTitel);

    // Verify that the page title is correct
    await expect(pageTitel).toBe("FMJ Marketing");

    // await page.waitForTimeout(2000);

    // Verify URL after login
    const pageUrl = await page.url();

    // Print the page URL to the console
    console.log("Page URL is :", pageUrl);

    // Verify that the page URL is correct
    await expect(pageUrl).toBe("https://test.fmj.group/dashboard");


    
})