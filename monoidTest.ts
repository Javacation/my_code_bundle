// 모노이드 => 일련의 연산들이 주어진 집합
// 범주(카테고리) => 대상(Object)과 사상(Morphism)의 모음
//    대상 => 문자 그대로의 어떤 대상
//    사상 => 함수 개념을 추상화한 것으로 프로그래밍에서는 함수가 이에 속한다.
//
//    범주의 조건
//        1. 각 대상 A에 대해 항등 사상(id_A)가 존재해야 합니다. 이 사상은 A에서 A로 가는 사상입니다.
//            - 대상 A에 대해 자기 자신을 돌려받을 수 있는 항등원이 존재해야 한다. (identity or pure)
//        2. 사상 f: A -> B와 g: B -> C가 주어졌을 때, 이 두 사상의 합성 g ∘ f: A -> C가 존재해야 합니다. 즉, 두 사상을 연결하여 하나의 사상으로 만들 수 있어야 합니다.
//            - 각 사상은 합성할 수 있어야 한다. (composeable)
//        3. 3개의 사상 f, g, h 가 주어졌을 때 [ (f g) h === f (g h) ] 을 만족해야 한다.
//            - 사상간 결합 법칙이 성립해야 한다. (순수 함수여야 한다.)

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
