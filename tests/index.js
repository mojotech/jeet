var compare   = require("./util/compare");
var basePath  = __dirname;

describe("span", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/span/span.scss",
        "functions/span/span.styl"
      ]
    });
  });
});

describe("column", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/column/column.scss",
        "functions/column/column.styl"
      ]
    });
  });
});

describe("shift", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/shift/shift.scss",
        "functions/shift/shift.styl"
      ]
    });
  });
});

describe("unshift", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/unshift/unshift.scss",
        "functions/unshift/unshift.styl"
      ]
    });
  });
});

describe("edit", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/edit/edit.scss",
        "functions/edit/edit.styl"
      ]
    });
  });
});

describe("center", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/center/center.scss",
        "functions/center/center.styl"
      ]
    });
  });
});

describe("uncenter", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/uncenter/uncenter.scss",
        "functions/uncenter/uncenter.styl"
      ]
    });
  });
});

describe("stack", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/stack/stack.scss",
        "functions/stack/stack.styl"
      ]
    });
  });
});

describe("unstack", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/unstack/unstack.scss",
        "functions/unstack/unstack.styl"
      ]
    });
  });
});

describe("align", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/align/align.scss",
        "functions/align/align.styl"
      ]
    });
  });
});

describe("cf", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/cf/cf.scss",
        "functions/cf/cf.styl"
      ]
    });
  });
});

describe("column-gutter", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/column-gutter/column-gutter.scss",
        "functions/column-gutter/column-gutter.styl"
      ]
    });
  });
});

describe("column-width", function() {
  it("should match", function() {
    return compare({
      basePath: basePath,
      files: [
        "functions/column-width/column-width.scss",
        "functions/column-width/column-width.styl"
      ]
    });
  });
});
