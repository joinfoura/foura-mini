module.exports = {
  NotFound: class extends Error {
    constructor(message) {
      super(message);
      this.name = 'NotFound';
    }
  }
};
