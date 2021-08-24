lispy.js
========

lispy is a lightweight syntax highlighter for embeddind (Common)
Lisp code in HTML web pages, and having it render all pretty-like
in non-monochrome browsers.

To use it, include the `lispy.js` (or, at your option,
`lispy.min.js`) in your page, link in the provided CSS stylesheet,
and register an event handler to fire.

```html
<script>
document.addEventListener('DOMContentLoaded',
  () => lispy(document.querySelectorAll('.lispy code')))
</script>
```

If you use the above code, wrap your Lisp code fragments in
something like this:

```html
<pre class="lispy"><code>(defun hello (who)
  (format nil "Hello, ~a!~%" who)</code></pre>
```
