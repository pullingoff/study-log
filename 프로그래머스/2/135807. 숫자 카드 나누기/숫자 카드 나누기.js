/*
- P: 철수 카드 정수 배열 arrayA, 영희 카드 정수 배열 arrayB
- R: 조건을 만족하는 가장 큰 양의 정수. 없다면 0
- E:
- P: 
    - 1번 조건: 철수 카드들의 최대공약수 && 영희 카드들로 안 나눠짐
    - 2번 조건: 영희 카드들의 최대공약수 && 철수 카드들로 안 나눠짐
*/

function solution(arrayA, arrayB) {
    let answer = 0;
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];
    
    for (let i=1; i<arrayA.length; i++) {
        gcdA = getGCD(arrayA[i], gcdA);
    }
    for (let i=1; i<arrayB.length; i++) {
        gcdB = getGCD(arrayB[i], gcdB);
    }
    
    if(isAllDividable(arrayA, gcdB)) {
        answer = Math.max(answer, gcdB);
    }
    
    if(isAllDividable(arrayB, gcdA)) {
        answer = Math.max(answer, gcdA);
    }
    
    return answer;
}

// 최대공약수 반환
function getGCD(a, b) {
    return (a%b === 0) ? b: getGCD(b, a%b)
}

function isAllDividable(arr, gcd) {
    return arr.every(elem => elem % gcd !== 0);
}