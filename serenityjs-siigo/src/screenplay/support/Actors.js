const { Cast } = require('@serenity-js/core');
const { BrowseTheWebWithPlaywright } = require('@serenity-js/playwright');

class Actors extends Cast {
  constructor(browser) {
    super();
    this.browser = browser;
  }

  prepare(actor) {
    return actor.whoCan(
      BrowseTheWebWithPlaywright.using(this.browser)
    );
  }
}

module.exports = { Actors };
