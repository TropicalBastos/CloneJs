# CloneJs

`Object.assign()` is sometimes no good because it does not deep clone nested properties.
That's where CloneJs comes in handy! You can deep clone objects with thousands of nested properties and run a deep comparison on them, see below:

## Usage
To deep clone an object you can easily call the utility method deepClone:

```javascript
const util = require('clone');

var obj = {
    a: 'a',
    b: [
        {
            c: 'c'
        }
    ]
}

var clone = util.deepClone(obj)
```

If you wish to do a recursive compare of two different objects you can call deepEqual:

```javascript
const util = require('clone');

var obj = {
    a: 'a',
    b: [
        {
            c: 'c'
        }
    ]
}

var clone = util.deepClone(obj)
console.log(util.deepEqual(obj, clone)) //logs true
```

## Method Reference
| Method             | Summary                                                                                        |
|--------------------|------------------------------------------------------------------------------------------------|
| deepClone          | Takes an object and deep clones it                                                             |
| deepCloneRecursive | A more performant version of deepClone()                                                       |
| deepEqual          | Takes two objects as parameters and does a deep comparison of the two, returning true if equal |