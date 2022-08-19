import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {

    testDir: './test',
    timeout: 30*1000,
    expect: {
        timeout: 5000
    },
    use: {
        browserName: 'chromium',
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        trace: 'on',
    },
};
export default config;

