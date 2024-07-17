// js <br>ON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): js <br>ON
// parse(js <br>ON): object
const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const js <br>on = js <br>ON.stringify(ellie);
console.log(ellie);
console.log(js <br>on);

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = js <br>ON.parse(js <br>on);
console.log(obj);
