## 동기 (Synchronous)
- 모든 일을 순서대로 하나씩 처리하는 것 (직렬적 수행)
## 비동기 (Asynchronous)
- 작업을 시작한 후 결과를 기다리지 않고 다음 작업을 처리하는 것 (병렬적 수행)
- 시간이 필요한 작업들은 요청을 보낸 뒤 응답이 빨리 오는 작업부터 처리
  
비동기로 처리하면 먼저 처리되는 부분부터 보여줄 수 있으므로, '사용자 경험'에 긍정적 효과를 볼 수 있음 -> 비동기를 사용하는 이유

  #

Single Thread 언어 , JavaScript
- JavaScript는 한 번에 하나의 일만 수행할 수 있는 Single Thread 언어로 동시에 여러 작업을 처리할 수 없음
- 비동기 처리를 할 수 있도록 도와주는 환경이 필요
-> JavaScript Runtime
```
JavaScript Runtime
- Runtime : 특정 언어가 동작할 수 있는 환경
- 브라우저 환경에서의 비동기 동작을 구성하는 요소
    ㄴ JavaScript Engine의 Call Stack
        - 요청이 들어올 때 마다 순차적으로 처리하는 Stack
        - 기본적인 JavaScript의 Single Thread 작업 처리
    ㄴ Web API
        - JavaScript 엔진이 아닌 브라우저에서 제공하는 Runtime 환경
        - 시간이 소요되는 작업을 처리 (setTimeout, DOM Event, AJAX 요청 등)
    ㄴ Task Queue
        - 비동기 처리된 Callback 함수가 대기하는 Queue(FIFO)
    ㄴ Event Loop
        - Call Stack과 Task Queue를 지속적으로 모니터링
        - Call Stack이 비어있다면 Task Queue의 대기작업을 Call Stack으로 Push
```

```
# 비동기 처리 동작 방식
1. 모든 작업은 Call Stack (LIFO)으로 들어간 후 처리
2. 오래 걸리는 작업이 Call Stack으로 들어오면 Web API로 보내 별도 처리
3. Web API에서 처리가 끝난 작업들은 곧바로 Call Stack에 들어가지 못하고 Task Queue(FIFO)에 순서대로 들어감
4. Event Loop가 Call Stack이 비어있는 것을 계속 체크하며, 비게 되면 Task Queue의 작업을 Call stack에 넘겨줌
```

```
# 비동기 처리의 단점
- 비동기 처리는 작업이 완료되는 순서에 따라 처리 -> 실행 순서가 불명확 -> 실행결과를 예상하면서 코드를 작성할수 없음

=> 콜백함수 사용으로 해결
```

# Axios
- JavaScript의 HTTP 웹 통신을 위한 라이브러리
- 확장 가능한 인터페이스와 쉽게 사용할 수 있는 비동기 통신 기능을 제공

<img src='./img/axios.jpg'>

# 콜백 함수 (Callback Function)
- 연쇄적으로 발생하는 비동기 작업을 순차적으로 동작할 수 있게 함
- but, 콜백 지옥.. 코드의 가독성 해치고, 유지보수가 어려워 짐

# 프로미스 (Promise)
- Callback hell 해결을 위해 등장한 비동기 처리를 위한 객체
-> '작업이 끝나면 실행 시켜줄게' 라는 약속
- 비동기 작업의 완료 또는 실패를 나타내는 객체
- Promise 기반으로 만들어진 클라이언트 -> Axios 라이브러리
  - then(callback) #성공
  - catch(callback)  #실패
- then과 catch 모두 항상 promise 객체를 반환, 계속해서 chaining 할 수 있음

