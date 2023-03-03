## optional chaining ?.
```js	
let user = {}; // user has no address

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
alert( user?.address.street.anything ); // undefined
```


## object shorthand
```js
let name = 'John';
let age = 30;

let user = {
  name,
  age
};
```

> is the same as
```js
let user = {
  name: name,
  age: age
};
```
## Defer
```html
<head>
  <script defer src="script.js"></script>
</head>
```
> The defer attribute ensures that the function runs after the document is loaded, but before window.onload. That is: the function is deferred to run after the document is ready, but before other onload handlers.

## Spread operator
```js
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
```
> The spread operator can be used to merge arrays:
```js
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

// merge arr2 into arr
arr.push(...arr2);

alert(arr); // 3,5,1,8,9,15
```
> The spread operator can be used to turn the string into array of characters:
```js
let str = "Hello";

alert( [...str] ); // H,e,l,l,o
```
## Rest parameters
```js
function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3

let arr = [1, 2, 3];

alert( sumAll(...arr) ); // 6 (spread turns array into a list of arguments)
```
## Destructuring assignment
```js
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

## Nullish coalescing operator
```js
let firstName = null;
let lastName = null;
let nickName = "Super_Coder";

// shows the first truthy value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Super_Coder
```
> instead using || operator which doesn't work with 0, false, null, undefined, NaN, empty string
```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

let stringValue = "0";

alert(stringValue || "default"); // "default"
alert(stringValue ?? "default"); // "0"

let emptyString = "";

alert(emptyString || "default"); // "default"
alert(emptyString ?? "default"); // ""
```

## Styling Console logs
```js
console.log('%c My styled log', 'color: blue; font-size: 30px');
```
> %c is a placeholder for the style string. The style string is a list of CSS properties separated by semicolons. The list of CSS properties is the same as in the style attribute of an HTML element.



