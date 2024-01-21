// @ts-check
const { test, expect } = require('@playwright/test');

test('check for Izumis Friday classes', async ({ page }) => {
  await page.goto('https://www.roh.org.uk/tickets-and-events/dance-with-the-royal-ballet-dates?start-date=01-03-24&end-date=31-12-24');

  // Check we're on the right page
  await expect(page).toHaveTitle(/Dance with The Royal Ballet/);

  // If there are not 3 sold out items, there may be returns for sale or new dates!
  const soldOutItems = await page.getByRole('heading', { name: 'Sold out' });
  await expect(soldOutItems).toHaveCount(3);
});

test('check for Mazs Family Sunday', async ({ page }) => {
  await page.goto('https://www.roh.org.uk/tickets-and-events/family-sundays-dates?start-date=26-05-24&end-date=26-05-24&event-time=afternoon');

  // Check we're on the right page
  await expect(page).toHaveTitle(/Family Sundays/);
  
    // If there are no sold out items, there may be returns for sale!
  const soldOutItems = await page.getByRole('heading', { name: 'Sold out' });
  await expect(soldOutItems).toHaveCount(1);
});
