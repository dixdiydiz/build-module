'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
const path_1 = __importDefault(require('path'))
const module_1 = __importDefault(require('module'))
function buildModule(code, fileName) {
  if (!fileName) {
    fileName = 'default.unknow'
  }
  const { ext } = path_1.default.parse(fileName)
  if (['.js', '.json', '.node'].includes(ext)) {
    return require(fileName)
  } else {
    const mod = new module_1.default(fileName, null)
    mod.filename = fileName
    mod._compile(code, fileName)
    return mod.exports
  }
}
module.exports = buildModule
//# sourceMappingURL=index.js.map
