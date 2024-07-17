//문자열(String) 심화과정
let myStrimg = 'HI Codeit';

//문자열의 길이를 나타냄
console.log(myStrimg.length); 

//요소 접근
console.log(myStrimg[3]);  // 대문자 표기법
console.log(myStrimg.charAt(3)); //charAt 매소드

//요소 탐색
console.log(myStrimg.indexOf('i')); // 앞 부터
console.log(myStrimg.lastIndexOf('i')); // 뒤 부터


//대문자 변환
console.log(myStrimg.toUpperCase()); // 대문자
console.log(myStrimg.toLowerCase()); // 소문자

//양 끝 공백 제거
console.log(myStrimg.trim()); //trim 매소드

// 부분 문자열 접근 sliceK(stert. end);
console.log(myStrimg.slice(0,2))
//0번 부터 1번 까지 리턴
console.log(myStrimg.slice(3))
//2번째 파라미터 생략
console.log(myStrimg.slice())
//문자열 전체