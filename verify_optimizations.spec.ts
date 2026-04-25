import { test, expect } from '@playwright/test';

test('verify performance optimizations', async ({ page }) => {
  await page.goto('http://localhost:8000/modelacaps/index.html');

  // Verify preconnect link
  const preconnect = await page.locator('link[rel="preconnect"][href="https://i.imgur.com"]');
  await expect(preconnect).toBeAttached();

  // Verify image attributes
  const images = await page.locator('img');
  const count = await images.count();
  console.log(`Found ${count} images`);

  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const decoding = await img.getAttribute('decoding');
    expect(decoding).toBe('async');
  }

  // Verify lazy loading on specific images (the ones that are not hero images)
  const heroImage = await page.locator('#image');
  await expect(heroImage).not.toHaveAttribute('loading', 'lazy');

  const scientificImages = await page.locator('.img-cientific');
  for (let i = 0; i < await scientificImages.count(); i++) {
    await expect(scientificImages.nth(i)).toHaveAttribute('loading', 'lazy');
  }

  const approvedImage = await page.locator('.img-stars');
  await expect(approvedImage).toHaveAttribute('loading', 'lazy');

  const guaranteeImage = await page.locator('.img-selos').last();
  await expect(guaranteeImage).toHaveAttribute('loading', 'lazy');

  await page.screenshot({ path: 'verification-screenshot.png', fullPage: true });
});
