# small-EJS-renderer

```js
const template = `
<% if (name) {%><h1>Hello <%= name %>!</h1><%} %>
<p><%= foo.bar %></p>
<p><%= Math.random(1, 10) %></p>

<ul>
<% for (let i of arr) {%>
	<li><%= i %></li>
<%} %>
</ul>
`;
const output = render(template, {
  name: 'world',
  foo: {
  	bar: 10
  },
  arr: [3, 2, 1]
});

console.log(output); /*
<h1>Hello world!</h1>
<p>10</p>
<p>0.5496496332394807</p>
<ul>
  <li>3</li>
  <li>2</li>
  <li>1</li>
</ul>
*/
```

https://jsfiddle.net/olian04/msd3gwfr/7/
