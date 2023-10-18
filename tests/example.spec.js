// @ts-check
const { test, expect } = require('@playwright/test');

test('a hello world check that we have the right page', async ({ page }) => {
  await page.goto('https://www.roh.org.uk/tickets-and-events/dance-with-the-royal-ballet-dates');
  await expect(page).toHaveTitle(/Dance with The Royal Ballet/);
});

test('check for sold out items', async ({ page }) => {
  await page.goto('https://www.roh.org.uk/tickets-and-events/dance-with-the-royal-ballet-dates');
  const soldOutItems = await page.getByRole('heading', { name: 'Sold out' });

  // Expects page to have three Sold out items.
  // If there are not 4 sold out items, there may be returns for sale!
  await expect(soldOutItems).toHaveCount(4);
});
