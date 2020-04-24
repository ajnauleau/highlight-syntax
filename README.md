# highlight-html-syntax

Install the package from NPM:
```node
$ npm install --save highlight-html-syntax
```


Import the CSS for highlighting:

```css
@import 'node_modules/highlight-html-syntax/syntax.css'
```


Require the Highlight package in your project:

```javascript
var Highlight = require('highlight-html-syntax')
```

Then use it in your code!

```javascript
var html = '<p>hello world!</p>';
var result = Highlight(html);

console.log(result);

/* <span class="method">&lt;p</span>
<span class="method">&gt;</span>
hello world!
<span class="method">&lt;/p</span>
<span class="method">&gt;</span> */
```

<h1> EXAMPLE </h1>

In your frontend:

```javascript
var code = document.getElementById('code').value;
var syntax = Highlight(code);
var result = document.getElementById('result');
result.innerText = syntax;
```

This HTML code

```html
<form>
        <input type="text" placeholder="John Doe"/>
</form>
```

Turns into ->

```code
<span class="method">&lt;form<span class="method">&gt;</span></span> <span class="global">
        <span class="method">&lt;input</span> type=<span class="string">"text"</span> placeholder</span>=<span class="string">"John Doe"</span><span class="method">/&gt;</span>
<span class="method">&lt;/form<span class="method">&gt;</span></span>
```

Which looks like  this
<link rel="stylesheet" href="./syntax.css">
<span class="method">&lt;form<span class="method">&gt;</span></span> <span class="global">
        <span class="method">&lt;input</span> type=<span class="string">"text"</span> placeholder</span>=<span class="string">"John Doe"</span><span class="method">/&gt;</span>
<span class="method">&lt;/form<span class="method">&gt;</span></span>
