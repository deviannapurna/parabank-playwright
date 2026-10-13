export class AccountsOverviewPage {
  constructor(page) {
    this.page = page;
    this.logOutLink = page.getByRole('link', { name: 'Log Out' });
    this.accountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
  }
}