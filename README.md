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

console.log(output);
document.body.innerHTML = output;
```

https://jsfiddle.net/olian04/msd3gwfr/7/
