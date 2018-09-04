### Usage
1. install
```bash
$ yarn
```
2. run `yarn start` with original `ExtendedAPIPlugin.js`
```bash
$ yarn start
# ...
ERROR in chunk main [entry]
[name].[chunkhash].js
Cannot use [chunkhash] or [contenthash] for chunk in '[name].[chunkhash].js' (use [hash] instead)
```
3. run `yarn build` with custom `ExtendedAPIPlugin.js`(only remove `globalHash` hooks)
```bash
$ yarn build
# ...
Hash: 4357922aae6c8d1e35b1
Version: webpack 4.17.2
Time: 96ms
Built at: 2018-09-04 11:54:56
                       Asset       Size  Chunks             Chunk Names
main.a35625c4a02a0a22d06a.js  997 bytes       0  [emitted]  main
Entrypoint main = main.a35625c4a02a0a22d06a.js
[0] ./index.js 64 bytes {0} [built]
```
4. The `Hash: 4357922aae6c8d1e35b1`
```bash
$ node ./dist/main.a35625c4a02a0a22d06a.js
4357922aae6c8d1e35b1
```