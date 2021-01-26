# @cdeath's same breakpoint iframes

javascript solution with postMessage

the trick:
- all iframes must have `width: 100vw` and a wrapper with `overflow: hidden` that clips the iframe
- every iframe shares the same javascript code with an onMessage event listener
- body width is sent from the app index to each iframe via postMessage

the caveat:
- you'll have to add the event listener to each iframe, but it's more generic this way.

have fun!