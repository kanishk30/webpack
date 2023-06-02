# Topics
## JS modules
- Reusable
- Organised
- Encapsulated
Eg. CommonJS, AMD, ESM - (module.md)
### issues earlier
- order was important for imports
- globals / scoping 

Not sure, how it works on browser. Compatibility with other file types.

## webpack
- Let us write modules that work in browser
- Code splitting, lazy loading
- tree shaking with esm
- source map
- plugins
- hot reload

-- config
-- CLI ; uses node api.

### core concepts
1. Entry
- Tells webpack what to load for the browser.
- First file to load

2. Output
- Tells webpack where and how to distribute complied files.

3. Loaders
- Tells webpack how to load non-JS after its been resolved files.
- JS modules that takes source and returns changed/modified state.
- function, that a source and returns a new source

4. Plugins
- ES5 class, which implements apply function 
- gives access to webpack compiler api.
- 80% of webpack is nuilt within its own plugins
- use "Tapable" library. backbone of plugins in webpack.

## webpack setup
- covered step by step in `ch* branches`
