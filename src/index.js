function calculate(expression) {
    return eval(expression);
}

const expression = "(1+(4+5+2)-3)+(6+8)";
console.log(calculate(expression));
```

```javascript
function calculate(expression) {
    return new Function('return ' + expression)();
}

const expression = "(1+(4+5+2)-3)+(6+8)";
console.log(calculate(expression));
