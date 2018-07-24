
/**
 * The Deep cloning utility object
 * 
 * @author Ian Bastos
 * 
 * @var DeepCloneUtil - the underlying module
 */
var DeepCloneUtil = {};

/**
 * @summary Clones the object without any sharing any 
 *  references to the object it clones
 * 
 * @public
 * @method
 * 
 * @param {Object} - the object to clone
 * @return {Object} - a reference to the object that called
 * this method
 */
DeepCloneUtil.deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}


/** 
 * @see DeepCloneUtil.deepClone()
 * @summary Another way to deep clone an object
 * PS this is my preferred way
 * 
 * @public
 * @method
 * 
 * @param {Object} - the object to clone
 * @return {Object} - the clones object
 */
DeepCloneUtil.deepCloneRecursive = (obj) => {
    var clone = {};
    for(var i in obj) {
        if(obj[i] != null &&  typeof(obj[i]) == "object")
            clone[i] = DeepCloneUtil.deepCloneRecursive(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}

/** 
 *  @summary Recursively travels down the props of obj x and obj y
 *  and compares their equality
 * 
 * @public
 * @method
 * 
 * @param {Object} x the first object
 * @param {Object} y the object to compare it with 
 * @return {bool} true/false
 */
DeepCloneUtil.deepEqual = (x, y) => {
    if (x === y) {
        return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
        return false;
    
        for (var prop in x) {
        if (y.hasOwnProperty(prop))
        {  
            if (!DeepCloneUtil.deepEqual(x[prop], y[prop]))
            return false;
        }
        else
            return false;
        }
    
        return true;
    }
    else 
        return false;
}


 module.exports = DeepCloneUtil;