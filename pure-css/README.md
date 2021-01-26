# same breakpoint iframes

## pure css solution

the trick:
- all iframes must have `width: 100vw` and a wrapper with `overflow: hidden` that clips the iframe
- as the iframe document has the same width as the viewport it will have the same breakpoint

the caveat:
- you have to limit the body width in each iframe subtracting other elements in your app layout (e.g. `width: calc(100w - 360px)`)

have fun!
