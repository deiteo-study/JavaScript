### Broweser APIs
- 웹 브라우저에 내장된 API, 웹 브라우저가 현재 컴퓨터 환경에 관한 데이터를 제공하거나, 오디오를 재생하는 등 여러 유용하고 복잡한 일을 수행
- JavaScript로 Browser API들을 사용햇 여러가지 기능을 사용할 수 있음
  
ex) DOM. Geolocation API, WebGL 등

---

# DOM
- 문서 객체 모델(Document Object Model) 
- 문서의 구조화된 표현을 제공하여 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공
- HTML 문서를 구조화 하여 각 요소를 객체로 취급

## DOM의 기본 구조

### DOM Tree
: DOM에서 모든 것은 Node

**Node**
- Document Node === HTML 문서 전체를 나타내는 노드
- Element Node === HTML 요소를 나타내는 노드 ex)  <'p'>
- Text node === HTML 텍스트, Element node 내의 텍스트 컨텐츠를 나타냄
- Attribute node === HTML 요소의 속성을 나타내는 노드

### DOM 의 주요객체
- window
  - DOM을 표현하는 창
  - 가장 최상위 객체
  - 탭 기능이 있는 브라우저에서는 각가의 탭을 각각의 window 객체로 나타냄
  - **Method** 
    - open() - 새 탭 열기
    - alert() - 경고 대화 상자 표시
    - print() - 인쇄 대화 상자 표시
- document
  - 브라우저가 불러온 웹 페이지
  - document의 속성 **document.title**  
  ! document는 window의 속성
  
- navigator, location, history, screen 등

### DOM 조작 순서   1 선택 -> 2 조작

**선택 관련 메소드**
```javascript
document.querySelecetor(selector)
- 제공한 선택자와 일치하는 element 한 개 선택

document.querySelecetorAll(selector)
- 제공한 선택자와 일치하는 여러 element를 선택
```

**조작 관련 메소드**
```javascript
document.createElement(tagName) // 생성
- 작성한 tagName의 HTML 요소를 생성하여 반환

HTML_Element.innerText // 입력
- Node 객체와 그 자손의 텍스트 컨텐츠(DOMString)를 표현 (해당 요소 내부의 raw text)
- 사람이 읽을 수 있는 요소만 남김 (최종적으로 스타일링이 적용딘 모습으로 표현)

HTML_Element.appendChild()  // 추가
- 한 Node를 특정 부모 Node의 자식 NodeList 중 마지막 자식으로 삽입
- 한번에 오직 하나의 Node만 추가할 수 있음
- 추가된 Node 객체를 반환

HTML_Element.removeChild()  // 삭제
- DOM에서 자식 Node를 제거
- 제거된 Node를 반환

Element.getAttribute(attributeName) // 속성 조회
- 해당 요소의 지정된 값(문자열)을 반환

Element.setAttribute(name, value) // 속성 설정
- 지정된 요소의 값을 설정
- 속성이 이미 존재하면 값을 갱신
-> 그 외에 Element.classList & Element.style 등을 통해 직접적으로 해당 요소의 각 속성들을 제어할 수 있음