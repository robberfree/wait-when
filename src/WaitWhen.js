export default class WaitWhen {
  then(conditions, cb) {
    this.conditions = Array.isArray(conditions) ? conditions : [conditions];
    this.cb = cb;

    this.conditions.forEach(condition => {
      condition.addEventListener('verify', this.verify.bind(this));
    });
  }
  verify() {
    for (var i = 0, len = this.conditions.length; i < len; i++) {
      var condition = this.conditions[i];
      if (!condition.fulfill()) {
        return;
      }
    }
    this.cb();
  }
}
