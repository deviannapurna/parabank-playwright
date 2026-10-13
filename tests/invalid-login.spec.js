import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('invalid password shows an error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('john','qwerty');

  await expect(page.getByText('The username and password could not be verified.')).toBeVisible();
});