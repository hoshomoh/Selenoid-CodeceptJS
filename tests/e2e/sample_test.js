
Feature('My First Test');

Scenario('test something', (I) => {
    I.amOnPage('https://www.whatsmybrowser.org/');
    I.see('You’re using Chrome.');
});
