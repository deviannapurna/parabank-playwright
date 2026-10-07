import { test, expect } from '@playwright/test';

test('invalid password shows an error message', async ({ page }) => {
  await page.goto('http://localhost:8080/parabank/index.htm');
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').fill('qwerty');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByText('The username and password could not be verified.')).toBeVisible();
});