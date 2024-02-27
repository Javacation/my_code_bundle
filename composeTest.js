const composeAll = (...fnArgs)=>{
    return (v)=>fnArgs.reduce((acc, cur, idx)=>cur(acc), v);
}

const compose = (f,g)=>{
    return v=>f(g(v));
}

const stringTwice = s=>s.repeat(2);
const stringUpper = s=>s.toUpperCase();
const stringReverse = s=>s.split('').reverse().join('');

const twiceUpper = compose(stringTwice, stringUpper);
const twiceReverseUpper = composeAll(stringTwice, stringReverse, stringUpper);

consoe.log(twiceUpper('foo')); // 'FOOFOO'
console.log(twiceReverseUpper('Hello World')); // 'DLROW OLLEHDLROW OLLEH'
