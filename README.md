it's a reproduction for blaze issue [#213](https://github.com/meteor/blaze/issues/213)

Steps
 - run project using `meteor`
 - open it in the browser
 - open browser console
 - click on any link from landing page
 - click on `Go back` button
 - following error will appear in browser console

```js
domrange.js:337 Uncaught Error: Must be attached
    at Blaze._DOMRange.DOMRange.containsElement (domrange.js:337:11)
    at Blaze._DOMRange.<anonymous> (view.js:891:25)
    at HTMLButtonElement.<anonymous> (events.js:49:24)
    at HTMLBodyElement.dispatch (modules.js?hash=586364214218d383dd4b144fab9b4bc1a2675724:7769:27)
    at HTMLBodyElement.elemData.handle (modules.js?hash=586364214218d383dd4b144fab9b4bc1a2675724:7573:28)
```
