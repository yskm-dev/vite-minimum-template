/**
 * Resize
 */
class Resize {
  static _handlers = [];
  static _timer;

  constructor() {
    window.addEventListener(
      "resize",
      () => {
        this._onResize();
      },
      false
    );
  }

  /**
   * onRezie
   */
  _onResize() {
    if (this._timer) clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this._call();
    }, 200);
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
  _call() {
    for (const handler of this.handlers) {
      if (handler != null) handler();
    }
  }
}

export const resize = new Resize();
