const config = {
    tests: './e2e/*_test.js',
    output: './output',
    helpers: {
        WebDriver: {
            host: 'localhost',
            protocol: 'http',
            port: 4445,
            restart: false,
            keepCookies: false,
            keepBrowserState: false,
            url: process.env.URL_BASE || 'http://localhost',
            browser: process.env.BROWSER || 'chrome',
            waitForTimeout: process.env.WAIT_FOR_TIMEOUT || 20000,
            timeouts: {
                script: parseInt(process.env.SCRIPT_TIMEOUT) || 20000,
                pageLoad: parseInt(process.env.PAGELOAD_TIMEOUT) || 20000
            },
            uniqueScreenshotNames: true,
            desiredCapabilities: (() => {
                let capabilities = {
                    browserName: process.env.BROWSER || 'chrome',
                    "selenoid:options": {
                        enableVNC: JSON.parse(
                            process.env.ENABLE_VNC || true
                        ),
                        videoName: process.env.VIDEO_NAME || 'video-name.mp4',
                        logName: process.env.LOG_NAME || 'logs-name-log',
                        name: process.env.TEST_NAME || 'test-name'
                    }
                };
                if (JSON.parse(process.env.HEADLESS || false)) {
                    capabilities = Object.assign({}, capabilities, {
                        chromeOptions: {
                            args: [
                                '--headless',
                                '--disable-gpu',
                                '--ignore-certificate-errors'
                            ]
                        }
                    });
                }

                return capabilities;
            })()
        },
    },
    include: {},
    bootstrap: null,
    mocha: {},
    name: 'tests'
};

console.log("CodeceptJs Config");
console.log("---------------------------------------------------");
console.log(JSON.stringify(config));
console.log("---------------------------------------------------");

module.exports = {
    config
};