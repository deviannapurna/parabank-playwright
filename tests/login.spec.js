import { test, expect } from '@playwright/test';

test('valid user can log in and see accounts overview', async ({ page }) => {
  await page.goto('http://localhost:8080/parabank/index.htm');

  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').fill('demo');
  await page.getByRole('button', { name: 'Log In' }).click();

  await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();

  await page.getByRole('link', { name: 'Accounts Overview' }).click();
});