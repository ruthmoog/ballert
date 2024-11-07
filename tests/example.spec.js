// @ts-check
const { test, expect } = require('@playwright/test');

test('check for Izumis Friday classes', async ({ page }) => {
  await page.goto('https://www.rbo.org.uk/tickets-and-events/dance-with-the-royal-ballet-dates?start-date=08-11-24&end-date=07-02-25');

  // Check we're on the right page
  await expect(page).toHaveTitle(/Dance with The Royal Ballet/);

  // If there are not 4 sold out items, there may be returns for sale or new dates!
  const soldOutItems = await page.getByRole('heading', { name: 'Sold out' });
  await expect(soldOutItems).toHaveCount(4);
});

// test('check for Mazs Family Sunday', async ({ page }) => {
//   await page.goto('https://www.roh.org.uk/tickets-and-events/family-sundays-dates?start-date=26-05-24&end-date=26-05-24&event-time=afternoon');

//   // Check we're on the right page
//   await expect(page).toHaveTitle(/Family Sundays/);
  
//     // If there are no sold out items, there may be returns for sale!
//   const soldOutItems = await page.getByRole('heading', { name: 'Sold out' });
//   await expect(soldOutItems).toHaveCount(1);
// });

// test('check for bod discounts', async ({page}) => {
//   await page.goto('https://www.knightsportswear.com/collections/bowmen-of-darentford/products/bowmen-of-darenteford-white-tech-polo-right');

//   // If the price has changed, it might be on sale!
//   const price = await page.getByRole('heading', { name: '£34.95' });
//   await expect(price).toHaveCount(1);
// });
