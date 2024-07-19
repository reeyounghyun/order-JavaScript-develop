// myFrind는 객체 
// 1)속성과 메소드를 묶어 놓은 것 
// 2)여러 정보를 하나로 묶고 싶을 때 사용
// 필요한 이유
// 1) 관련된 정보를 깔끔하게 정리할 수 있음.

let myFrind = {
  // 속성
  // 1)객체 안에 있는 각각의 데이터 값들을 말함.
  // 2)어떤한 것들의 특징을 나열하고 싶을 때 사용.
  // 필요한 이유
  // 1)특정 정보를 쉽게 저장하고 불러올 수 있음.
  // 2)중요한 정보를 붙여둘 수 있음 

  name:'영현',
  age:29,
  address:'경기도 군포시',
  phone: '아이폰',

//메소드 :
// 1) 객체에 포함된 함수로, 객체가 수행할 수 있는 동작이나 기능
// 2) 어떠한 동작이나 기능을 만들 때 사용
// 3) 예시) 친구의 나이를 계산하는 기능, 등..

  Holle: function(){
    console.log("안녕, 나는" + this.name + '이야!');
  },

  Birth: function(){
    this.age = this.age + 1;
    console.log("생일 축하해! 이제" + this.age +"살이 되었네!");
  },

  Iphone: function(){
    this.phone = this.phone + 16;
    console.log("축하해 새로운" + this.phone +"이 생겼네!");
  },
};

//결과 값
console.log(myFrind.name); //영현
console.log(myFrind.age); //29
console.log(myFrind.address) // 경기도 군포시
myFrind.Holle();
myFrind.Birth();
myFrind.Iphone();
