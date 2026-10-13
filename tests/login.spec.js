import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage';

test('valid user can log in and see accounts overview', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountsOverviewPage = new AccountsOverviewPage(page);

  await loginPage.goto();
  await loginPage.login('john','demo');

  await expect(accountsOverviewPage.logOutLink).toBeVisible();

  await page.getByRole('link', { name: 'Accounts Overview' }).click();
});