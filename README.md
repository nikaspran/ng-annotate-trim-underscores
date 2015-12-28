# ng-annotate-trim-underscores

[ng-annotate](https://github.com/olov/ng-annotate) plugin that makes it ignore leading and trailing underscores, like `angular.mock.inject`

```js
function (_$http_, $q, _) {
  // ...
}
```

is annotated as

```js
['$http', '$q', '_', function (_$http_, $q, _) {
  // ...
}]
```

## Run tests

* `npm install`
* `npm test`
