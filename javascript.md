자바스크립트 기본!!
- 선택자,이벤트


### instance method [인스턴스 매소드] - querySelector

## 사용
- 객체를 생성한 후에 그 객체를 통해 메서드를 호출할 수 있다.
- 클래스의 구조로 컴퓨터 저장공간에서 할당된 실체를 의미한다. 여기서 클래스는 속성과 행위로 구성된 일종의 설계도이다

## 객체 생성
def start(self):
    print("Starting the car...")

## 객체 사용
my_car.start() 

## addEventListener
- HTML 요소에 이벤트 리스너를 등록하는 매소드 이다.
- 이벤트 리스너를 등록하여 사용자 상호 작용을 처리합니다. 버튼 클릭, 키보드 입력, 스크롤 이벤트 등에 사용하면 좋습니다.

사용예시
// HTML 버튼 요소
<button id="myButton">Click me!</button>

// JavaScript에서 addEventListener 사용
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  console.log('Button was clicked!');
});

## querySelector
- CSS 선택자를 사용하여 HTML 요소를 선택하는 매소드 이다.
- 특정 아이디, 클래스, 태그이름을 가진 요소를 찾는데 사용함.
- DOM(Document Object Model) 요소를 선택하는 데 사용됩니다. 요소의 내용을 읽거나 조작하는 등의 작업에 유용합니다.

사용예시
// HTML 요소
<p class="text-paragraph">This is a paragraph.</p>

// JavaScript에서 querySelector 사용
const paragraph = document.querySelector('.text-paragraph');
console.log(paragraph.textContent); // Output: "This is a paragraph."