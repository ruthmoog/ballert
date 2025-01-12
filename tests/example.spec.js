// @ts-check
const { test, expect } = require('@playwright/test');

test('check for Izumis Friday classes', async ({ page }) => {
  await page.goto('https://www.rbo.org.uk/tickets-and-events/dance-with-the-royal-ballet-details');

  // Check we're on the right page
  await expect(page).toHaveTitle(/Dance with The Royal Ballet/);

  // If there are not 4 sold out items, there may be returns for sale or new dates!
  const soldOutItems = await page.getByRole('heading', { name: 'Sold out' });
  await expect(soldOutItems).toHaveCount(4);
});
test('check for family Sunday', async ({ page }) => {
  await page.goto('https://www.rbo.org.uk/tickets-and-events/family-sundays-dates?start-date=27-04-25&end-date=27-04-25&event-time=morning');

  // Check we're on the right page
  await expect(page).toHaveTitle(/Family Sundays/);

  // If there are not 1 sold out item, there may be returns for sale!
  const soldOutItems = await page.getByRole('heading', { name: 'Sold out' });
  await expect(soldOutItems).toHaveCount(1);
});


// test('check for bod discounts', async ({page}) => {
//   await page.goto('https://www.knightsportswear.com/collections/bowmen-of-darentford/products/bowmen-of-darenteford-white-tech-polo-right');

//   // If the price has changed, it might be on sale!
//   const price = await page.getByRole('heading', { name: '£34.95' });
//   await expect(price).toHaveCount(1);
// });
