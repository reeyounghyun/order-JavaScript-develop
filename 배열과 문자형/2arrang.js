/**
//배열 사용하기
let members = ['쿤갈래', 'Zerrard66', '우리생각해써', '흙토끼','End Miracle'];
console.log(members)

//배열의 첫 요소를 삭제: shift();
members.shift();
console.log(members);

//배열의 마지막 요소를 삭제 pop()
members.pop();
console.log(members);

//배열의 첫 요소로 값 추가 members.unshift("Value");
members.unshift("Nice");
console.log(members)

//배열의 마지막 요소로 값 추가 members.push("Value");
members.push('Hi');
console.log(members)

//배열의 특정 값을 찾으려면 indexOF
console.log(members.indexOf("특정값"));

//배열에서 특정 값이 있는지 확인하기 includes
console.log(members.includes("특정값"));

//배열 뒤집기 reverse
members.reverse();
console.log(members)

//자바스크립트가 미리 가지고 있는 객체?
// 내장 객체

//- Date 객체

//new date 숫자형
let myDate = new Date(1000);
console.log(myDate)

//new date 문자형

//new date('YYYY-MM-DD)
let myDate1 = new Date('2020-05-18');
console.log(myDate1)

//new date('YYYY-MM-DDThh:mm:ss)
let myDate2 = new Date('2020-05-18T19:11:16');
console.log(myDate2)


// new Date(값, 값, 값 ...);

// YYYY - 연도 / 필수값
// MM -월 (시작은 1월은 0) / 필수값
// DD -월
// HH -일
// SS -시
// MS -분

new Date(YYY,MM.DD.HH.MM.SS.MS);
console.log(myDate.getTime());

// myDate객체가 
// 1970년 1월 1일 00:00:00: UTC 부터
// 몇 밀리초 지났는지? 계산해 줌 
// 이것을 타임스탬프(time stamp) 라고 한다


let myDate1 = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = today.getTime() - myDate1.getTime();

console.log(timeDiff + ' 밀리초');
console.log(timeDiff / 1000 + ' 초');
console.log(timeDiff / 1000 / 60 + ' 분');
console.log(timeDiff / 1000 / 60 / 60 + ' 시간');

let today2 = new Date();
console.log(today2.getDay());
**/
