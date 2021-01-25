import path from 'path'
import Module from 'module'
function buildModule(code: string, fileName: string): any {
  if (!fileName) {
    fileName = 'default.unknow'
  }
  const { ext } = path.parse(fileName)
  if (!require.extensions[ext]) {
    const mod = new Module(fileName, null)
    mod.filename = fileName
    // @ts-ignore
    mod._compile(code, fileName)
    return mod.exports
  } else {
    return require(fileName)
  }
}
export = buildModule
