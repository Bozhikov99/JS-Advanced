const { chromium } = require('playwright-chromium');
const { assert } = require('chai');

let browser, page;
let url = 'http://127.0.0.1:5500/01.Messenger/index.html';

function mockResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

let testMessages = {
    1: {
        author: 'RvP',
        content: 'Message (fake)'
    },
    2: {
        author: 'Daska',
        content: 'Message Daska'
    }
}

let testCreateMessage = {
    3: {
        author: 'Pesho',
        content: 'Message of the Petar'
    }
}

describe('Tests', () => {
    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 1000 })
    });
    after(async () => await browser.close());
    beforeEach(async () => page = await browser.newPage());
    afterEach(async () => await page.close());

    describe('refresh', () => {
        it('makes a request', async () => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(mockResponse(testMessages))
            });
            await page.goto(url);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);

            let result = await response.json();

            assert.deepEqual(testMessages, result);
        })

        it('text is correct', async () => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(mockResponse(testMessages))
            });
            await page.goto(url);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);

            let text = await page.$eval('#messages', (textElement) => textElement.value);
            let testMessagesText = Object.values(testMessages)
                .map(x => `${x.author}: ${x.content}`)
                .join('\n');

            assert.equal(testMessagesText, text);
        })
    });

    describe('send', () => {
        it('makes request', async () => {
            let req = undefined;

            await page.route('**/jsonstore/messenger', (route, request) => {
                if (request.method().toLowerCase() == 'post') {
                    req = request.postData();
                    route.fulfill(mockResponse(testCreateMessage));
                }
                route.fulfill(mockResponse(testMessages));
            });

            await page.goto(url);
            await page.fill('#author', 'Pesho');
            await page.fill('#content', 'Message of the Petar');

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);

            let result = await response.json();

            assert.deepEqual(testCreateMessage, result);
        })
        it('form is reset', async () => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(mockResponse(testMessages))
            });
            await page.goto(url);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#submit')
            ]);

            let authorValue = await page.$eval('#author', author => author.value);
            let messageValue = await page.$eval('#content', message => message.value);

            let testMessagesText = Object.values(testMessages)
                .map(x => `${x.author}: ${x.content}`)
                .join('\n');

            assert.equal(authorValue, '');
            assert.equal(messageValue, '');
        })
    });
});