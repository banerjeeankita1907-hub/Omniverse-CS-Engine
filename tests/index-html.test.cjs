const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const html = fs.readFileSync(path.join(__dirname, "..", "Index.HTML"), "utf8");

test("HTML contains one parseable inline JavaScript application", () => {
  const scripts = [...html.matchAll(/<script\\b[^>]*>([\\s\\S]*?)<\\/script>/gi)];
  assert.equal(scripts.length, 1, "expected one inline application script");
  assert.doesNotThrow(() => new vm.Script(scripts[0][1]), "inline JavaScript must parse");
});

test("all HTML IDs are unique", () => {
  const ids = [...html.matchAll(/\\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(ids.length > 0);
  assert.equal(new Set(ids).size, ids.length, "duplicate id attributes found");
});

test("literal DOM ID lookups resolve to elements in the document", () => {
  const ids = new Set([...html.matchAll(/\\bid="([^"]+)"/g)].map((match) => match[1]));
  const references = [...html.matchAll(/getElementById\\(['"]([^'"]+)['"]\\)/g)]
    .map((match) => match[1]);
  const missing = [...new Set(references.filter((id) => !ids.has(id)))];
  assert.deepEqual(missing, []);
});

test("navigation buttons point to existing visualization modules", () => {
  const targets = [...html.matchAll(/showModule\\(['"]([^'"]+)['"]\\)/g)]
    .map((match) => match[1]);
  const modules = new Set([...html.matchAll(/id="module-([^"]+)"/g)]
    .map((match) => match[1]));
  assert.equal(targets.length, 8);
  for (const target of targets) {
    assert.ok(modules.has(target), `missing module for nav target: ${target}`);
  }
  assert.equal(new Set(targets).size, targets.length);
});
