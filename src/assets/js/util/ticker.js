/**
 * Ticker
 */
class Ticker {
  static _handlers = [];

  constructor() {
    requestAnimationFrame(() => {
      this._update();
    });
  }

  /**
   * Add Function
   * @param {function} f
   */
  add(f) {
    this._handlers.push(f);
  }

  /**
   * Remove Function
   * @param {function} f
   */
  remove(f) {
    this._handlers.map((h, i) => {
      if (h === f) {
        this._handlers.splice(i, 1);
      }
    });
  }

  /**
   * Call _handlers
   */
  _update() {
    for (const handler of this.handlers) {
      if (handler != null) handler();
    }
  }
}

export const Ticker = new Ticker();
