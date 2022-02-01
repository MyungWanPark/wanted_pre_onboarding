# wanted_pre_onboarding

구현 기능: Toggle, Modal, Tab, Tag, AutoComplete, ClickToEdit

## 1. Toggle

#### 구현한 방법과 이유

1. 토글 버튼과 on/off 표시 문구가 세로축 방향으로 정렬이 되어있습니다.
   따라서 flex box(flex-direction: column) 사용을 계획하고, 전체 wrapper를 `div`로 감싸 만듭니다.
2. 토글 버튼은 on/off로 작동이 되므로, on/off 동작 상태를 `boolean` 으로 ` const [isOn, setisOn] = useState(false)`를 사용하여 상태를 관리합니다.
3. 버튼이 on이 되어있는 상태를 표현하기 위해 삼항연산자로 on/off 조건에 따라 `color-on, btn-on`클래스를 추가합니다.
4. on/off 조건에 맞춰 css로 버튼을 이동시키고, 색상을 변화시킵니다. 이때 어려운 점이 발생하는데 바로 밑에서 설명을 드리겠습니다.

#### 어려웠던 점과 해결 방법

- on 조건에 따라 부여된 클래스 이름: `color-on, btn-on`을 활용하는데 있어 보라색 색상이 오른쪽으로 차오르는 과정에서 문제가 발생합니다. 원래는 `div` 박스를 `width:0%` 으로 시작해서 `width: 60px; transform: translateX(30px); ` 으로 애니메이션을 이용하여 색이 차는 것을 표현하려고 했습니다. 하지만 `border-radius`로 인하여 그 과정이 부자연스러지는 문제가 발생했습니다. <br />
  고민 후 `background: linear-gradient(to right, RGB(76, 17, 209) 50%, #c5c5c5 50%)`(색상은 원본 파일의 색을 color picker로 추출해왔습니다. )를 이용해서 미리 배경을 두 가지 색상으로 반반 나눕니다. 이후 `background-size: 200%;`로 설정하여, 회색 색상만 보이게 확대하고, on 상태가 되면 천천히 보라색으로 시점이 넘어가는 방법으로 문제를 해결했습니다.

## 2. Modal

#### 구현한 방법과 이유

1. 버튼을 누르면 모달창이 생성되고, 모달창이 생성된 후, 여백을 클릭하거나 &times; 를 클릭하면 모달이 닫히는 것을 계획한다.
2. 모달버튼의 유무에 따라 실제 모달이 보여지는 것을 조절해야 하므로 `isAppeared` 변수를 활용하여 `boolean` 값을 가지도록 한다. 즉, `const [isAppeared, setIsAppeared] = useState(false);` 을 이용한다.
3. 모달창은 화면 전체를 감싸므로, 모달창 설정을 `position: absolute; width: 100%; height: 100%;` 를 이용해서, 화면 전체를 감싼다.
4. 메세지 창의 여백을 클릭하거나 &times; 를 클릭하면 모달이 닫혀야 하므로, 각각에 `onClick` 이벤트를 주어서 `IsAppeared`를 `handleIsAppeared`를 이용해 제어한다. 여기서 어려운 점이 나오는데 밑에서 자세히 설명드리겠습니다.

#### 어려웠던 점과 해결 방법

- 메세지 창의 여백을 클릭하거나 &times; 를 클릭하면 모달이 닫히는 것을 위해 각각의 `div` 태그에 `onClick={handleIsAppeared}` 을 설정하니, 이벤트 버블링에 의해서 메세지 창을 클릭해도 모달창이 닫히는 문제가 발생합니다. 따라서 `event.stoppropagation()`를 메세지 창에 사용하려고 했습니다. 하지만 해당 메소드는 협업할 때 다른 누군가의 이벤트 사용을 저지하는 좋지 않은 메소드라고 배웠습니다. 따라서 대체할 수 있는 방법을 고민하다가, `if (event.target === event.currentTarget)` 을 이용해서 이벤트의 실제 발생지역에서만 모달창이 사라지게 하게끔 해서 문제를 해결하였습니다.

## 3. Tab

#### 구현한 방법과 이유

1. 탭이 총 3개가 있으므로, 어떤 탭이 선택되었는지 알기 위해 `currentTab` 이라는 변수를 사용합니다. `const [currentTab, setCurrentTab] = useState(0);`
2. 탭들은 서로 연관이 있으므로 탭을 구현할 때 의미없는 `div` 나 `span` 태그보다 `ul` 태그를 활용합니다.
3. 선택된 탭을 알기 위해 각 탭(ex. 세 번째 탭)이 선택되면, ` onClick={() => changeTab(2)` 을 이용합니다.
4. css를 이용하여 선택된 탭의 색상을 변경하기 위해(ex. 세 번째 탭), 선택된 `li`태그에 `active` 클래스를 넣어줍니다. 그 방법으로는 삼항연산자를 이용하여 `${currentTab === 2 ? "active" : ""}` 를 활용합니다.
5. 전체 css 처리를 하고, `active` 클래스만 색상을 넣어주고 애니메이션을 넣어줍니다.

#### 어려웠던 점과 해결 방법

- 처음 아이디어를 구상할 때, 탭들을 구분짓지만, 공통된 속성을 갖게 나타내는 방법에 대한 고민을 했습니다. `const tabSequence = {"First", "Second", "Third"}` 도 고려했지만, 각각의 탭들을 번호로 맵핑하여 구분하는것이 더 간단해 보였으므로, 번호를 붙여 구분하였습니다.<br />
  이 외에는 어려웠던 점이 없었습니다.

## 4. Tag

#### 구현한 방법과 이유

1. 태그가 보여지는 공간(`ul li`태그) 과 새로운 태그를 입력할 수 있는 (`form input`태그) 를 분리한다.
2. 모든 태그의 정보는 `hashTagArr` 라는 배열에 저장한다. 한 개의 태그는 중복 태그를 구별해 내기 위한 `id`와 태그의 값인 `value` 를 가진 `object` 로 설정한다.
3. 태그가 보여지는 것은 `ul li` 를, `hashTagArr`의 크기 만큼 보여져야 하기 때문에 배열의 `map` 함수를 이용해서 태그를 만들어 낸다.
4. 새로운 태그를 입력할 수 있는 공간은 `form input`태그 를 이용했는데, `enter`를 치면 `submit` 이 되는 속성을 이용하였다.
5. 태그가 보여지는 공간과 새로운 태그를 입력할 수 있는 공간을 포함하는 포함하는 `div` 태그를 만들어 css 처리를 해주어 마치 `input` 태그 안에 태그들이 있게끔 보여지게 한다.

#### 어려웠던 점과 해결 방법

- 처음에 아이디어를 구상하는게 어려웠다. 해쉬태그가 `input` 태그 안에서 만들어지는 것 처럼 생겨서 `input` 의 결과로 생긴 `ul li`태그를 `input` 태그 안으로 넣는 방법을 계속 고민하고 구글링 하며 찾아보았다. 하지만 그 방법을 못찾았다. 대신 태그가 보여지는 공간과 새로운 태그를 입력하는 공간을 분리하는 방식으로 마치 `input` 태그 안에서 생긴 것으로 보여지게끔 하는 방식으로 해결하였다.
- 처음에 `hashTagArr` 를 `value` 만 가지는 `array` 로 설정하였고, 이를 활용한 `array`의 `map` 함수에서 `li key`를 unique 한 값으로 `Date.now()` 를 주었는데 이상하게 문제가 발생했다. unique한 값을 준 이유는 만약 `hashTagArr` 안에 같은 값인 `['123', '123']`이 있을 경우 이를 구분하기 위해서 인데 `hashTagArr`에 같은 값을 입력해 보니, `li key`로 설정한 `Date.now()`에 문제가 있다는 에러메세지를 받게 되었다. 이를 해결하기 위해 `hashTagArr` 를 unique 한 `id`를 갖고, `value` 도 가질 수 있도록 `{id:id, value:value}`를 갖는 배열로 재설정 하였고 `li key={tag.id}` 로 설정하여 같은 값을 넣을때 발생하는 문제를 해결 하였다.

## 5. AutoComplete

#### 구현한 방법과 이유

1. `input` 태그에 들어가 있는 `value` 를 바탕으로 autocomplete 기능을 활성화 하므로 먼저 `const [inputValue, setInputValue] = useState("");`를 사용한다.
2. autocomplete의 핵심은 `input` 태그의 `value`에 속한 값을 '포함' 하고 있는 `options` 들을 드랍다운으로 보여주는 것이다.
3. 따라서 예시에 있는 값들(ex. "antique" "vintage" "rustic" etc) 들을 포함하는 `possibleOptions` 배열을 만든 후 `const [options, setOptions] = useState(possibleOptions);` 에 대입해준다.
4. `input` 태그에 `onChange={handleInputChange}` 으로 `input` 값이 바뀔때 마다 `inputValue`를 변경 시켜 준다.
5. 드랍다운은 `inputValue` 가 변할때 마다 활성화 되어야 하므로 `useEffect` 훅을 사용하고 `dependency`를 `inputValue`로 설정한다.
6. 드랍다운에 나오는 단어들의 배열은 `inputValue`의 대소문자 구별없이 나타나므로 `inputValue.toLowerCase()`를 포함하고 있는 `option.toLowerCase()` 들을 찾는다. 이를 `Array filter`를 이용하여 나타내면 `possibleOptions.filter((option) => { return option.toLowerCase().includes(inputValue.toLowerCase()); })` 와 같다.

7. 5,6번을 코드로 묶어 나타내면 아래 코드와 같다.

```js
useEffect(() => {
  if (inputValue) {
    setOptions(
      possibleOptions.filter((option) => {
        return option.toLowerCase().includes(inputValue.toLowerCase());
      })
    );
  }
}, [inputValue]);
```

8. 드랍다운 메뉴를 키보드 방향키로 선택하기 위해 `selectedIndex` 를 이용한다.
9. 방향키를 누르기 전에는 드랍다운 메뉴의 리스트를 선택하지 않으므로 `index = -1`로 초기화 한다.
10. 방향키의 방향에 따라 `selectedIndex`의 값을 변화시켜준 후, `enter` 가 입력되면 해당 `selectedIndex`의 값의 `options`를 선택하여
    `inputValue`로 설정해준다.
11. 드랍다운에서 `click` 이 발생하면, 해당 `option`으로 `inputValue`를 설정해준다.

#### 어려웠던 점과 해결 방법

- `string`의 `includes`함수가 떠오르지 않아 연관된(단어가 포함된) `options` 배열을 어떻게 보여줘야 하나 당황했다. 검색 후에 `includes` 함수가 있는 것을 발견하여 `filter` 함수를 통해 `includes` 된 단어를 보여주었다.
- 드랍다운 메뉴 안에서 화살표로 이동하는 법이 떠오르지 않아 막막했다. 여러 시도 뒤 `selectedIndex`라는 변수를 설정하고 방향키에 따라 `selectedIndex`를 변화시켰다. 그리고 그 값에 따라 `css class`를 결정하여 `background-color`를 변화시키는 방법으로 해결하였다.
- `input` 태그에 `border-radius`를 주니 `input` 태그가 화면에 깨져서 나타나는 버그가 발생했다. 버그를 구글링한 뒤, `input` 태그에 `background-color: transparent;`를 주어 해결하였다.
- `input` 창에 `space`만 입력하니, `input` 창의 `border-bottom`모습이 처음의 `input`모습과 달라지는 문제가 발생했다. 아래 그림과 같이, `css class`명을 `properInput unProperInput`를 두어 `option`이 하나도 없을 경우는 원래의 `input` 창이 되도록 설정하여 해결하였다.

```js
className={
              isInputted
                ? options.length !== 0
                  ? `input isInputted properInput`
                  : `input isInputted unProperInput`
                : "input"
            }
```

## 6. ClickToEdit

#### 구현한 방법과 이유

#### 어려웠던 점과 해결 방법
