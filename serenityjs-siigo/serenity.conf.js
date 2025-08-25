exports.config = {
  runner: 'cucumber',
  serenity: {
    dialect: 'mocha', 
  },
  capabilities: {
    browserName: 'chromium', 
    'serenity:options': {
      headless: false         
    }
  }
};
