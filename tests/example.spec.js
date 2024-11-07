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

// test('check for bod discounts', async ({page}) => {
//   await page.goto('https://www.knightsportswear.com/collections/bowmen-of-darentford/products/bowmen-of-darenteford-white-tech-polo-right');

//   // If the price has changed, it might be on sale!
//   const price = await page.getByRole('heading', { name: '£34.95' });
//   await expect(price).toHaveCount(1);
// });
