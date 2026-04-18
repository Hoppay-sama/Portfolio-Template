import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('has title and sections', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Nexus/);

    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#projects')).toBeVisible();
    await expect(page.locator('#games')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');

    await page.click('a[href="#about"]');
    await expect(page.locator('#about')).toBeInViewport();

    await page.click('a[href="#projects"]');
    await expect(page.locator('#projects')).toBeInViewport();
  });
});

test.describe('Projects Page', () => {
  test('lists projects', async ({ page }) => {
    await page.goto('/projects');

    await expect(page.locator('h1')).toContainText('Projects');
  });

  test('project detail loads', async ({ page }) => {
    await page.goto('/projects/saas-dashboard');

    await expect(page.locator('h1')).toContainText('SaaS');
  });
});

test.describe('Contact API', () => {
  test('validates form submission', async ({ page, request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test',
        email: 'test@test.com',
        subject: 'Test Subject',
        message: 'This is a test message that is long enough to pass validation.',
      },
    });

    expect(response.ok()).toBeTruthy();
  });
});