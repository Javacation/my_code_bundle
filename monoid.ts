type Monoid<T> = {
    identity: ()=>T;
    concat: (a: T, b: T)=>T;
};

const stringMonoid: Monoid<string> = {
    identity: ()=>'',
    concat: (a, b)=>a+b
};

const numberMonoid: Monoid<number> = {
    identity: ()=>0,
    concat: (a, b)=>a+b
};
