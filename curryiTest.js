const arrowCurry = fn=>{
    return curried = (...newArgs)=>{
        if(newArgs.length >= fn.length) {
            return fn.call(null, ...newArgs);
        } else {
            return (...newArgs2)=>{
                return curried.apply(null, newArgs.concat(newArgs2));
            }
        }
    }
};

const functionCurry = function(fn) {
    return function curried(){
        if(arguments.length >= fn.length) {
            return fn.apply(null, arguments);
        } else {
            var arg0_0 = arguments;
            var arg0_1 = Object.keys(arguments).map(function(v) { return arg0_0[v];});
            return function() {
                var arg1_0 = arguments;
                var arg1_1 = Object.keys(arguments).map(function(v) { return arg1_0[v];});
                return curried.apply(null, arg0_1.concat(arg1_1));
            }
        }
    };
}

const plusCurrying = arrowCurry(plus);
// const plusCurrying = functionCurry(plus);

console.log(
    '%d, %d, %d, %d',
    plusCurrying(1,2,3),
    plusCurrying(1)(2,3),
    plusCurrying(1,2)(3),
    plusCurrying(1)(2)(3)
); // '6, 6, 6, 6'
