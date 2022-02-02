# wanted_pre_onboarding

✅ 구현 기능: Toggle, Modal, Tab, Tag, AutoComplete, ClickToEdit
<br />

## 1. Toggle

#### 구현한 방법과 이유 🚀

1. 토글 버튼은 on/off 방식으로 작동 합니다. 따라서 on/off 동작 상태를 `boolean` 값으로 계획하여 `isOn` state 활용하고 이를 `useState` 훅을 사용하여 관리합니다.
2. 버튼이 on이 되어있는 상태를 표현하기 위해 삼항연산자로 on/off 조건에 따라 `color-on, btn-on`클래스를 추가합니다.
3. on/off 조건에 맞춰 css로 버튼을 이동시키고, 색상을 변화시킵니다. 이때 어려운 점이 발생하는데 바로 밑에서 설명을 드리겠습니다.
   <br />

#### 어려웠던 점과 해결 방법 ❓

- on 조건에 따라 부여된 클래스 이름인 `color-on, btn-on`을 활용하는데 있어 보라색 색상이 오른쪽으로 차오르는 과정에서 문제가 발생합니다. 원래는 `div` 박스를 `width:0%` 으로 시작해서 `width: 60px; transform: translateX(30px); `을 활용한 애니메이션으로 색이 차는 것을 표현하려고 했습니다. 하지만 `border-radius`로 인하여 그 과정이 부자연스러지는 문제가 발생했습니다. 여러 시도 후, `background` 가 먼저 색이 덮혀있었으면 좋겠다는 생각이 들어, `background: linear-gradient(to right, RGB(76, 17, 209) 50%, #c5c5c5 50%)`(색상은 원본 파일의 색을 color picker로 추출해왔습니다. )를 이용하였습니다. 미리 배경을 두 가지 색상으로 반반 덮은 후 `background-size: 200%;`로 설정하여 회색 색상만 보이게 확대하고, on 상태가 되면 천천히 보라색으로 시점이 넘어가는 방법으로 문제를 해결했습니다.
  <br />
  <br /><br /><br /><br />

## 2. Modal

#### 구현한 방법과 이유 🚀

1. 버튼을 누르면 모달창이 생성되고, 모달창이 생성된 후, 여백을 클릭하거나 &times; 를 클릭하면 모달이 닫히는 것을 계획합니다.
2. `open modal` 버튼의 클릭에 따라 모달창이 보여지는 것을 제어해야 하므로 `isAppeared` state를 활용하여 `boolean` 값을 가지도록 합니다. 즉, `const [isAppeared, setIsAppeared] = useState(false);` 을 이용합니다.
3. 모달창은 화면 전체를 감싸므로, 모달창 설정을 `position: absolute; width: 100%; height: 100%;` 를 이용해서, 화면 전체를 감쌉니다.
4. 메세지 창의 여백을 클릭하거나 &times; 를 클릭하면 모달이 닫혀야 하므로, 각각에 `onClick` 이벤트를 주어서 `IsAppeared`를 `handleIsAppeared`를 이용해 제어합니다. 여기서 어려운 점이 나오는데 밑에서 자세히 설명드리겠습니다.
   <br />

#### 어려웠던 점과 해결 방법 ❓

- 메세지 창의 여백을 클릭하거나 &times; 를 클릭하면 모달이 닫히는 것을 위해 각각의 `div` 태그에 `onClick={handleIsAppeared}` 을 설정하니, 이벤트 버블링에 의해서 메세지 창을 클릭해도 모달창이 닫히는 문제가 발생합니다. 따라서 `event.stoppropagation()`를 메세지 창에 사용하려고 했습니다. 하지만 해당 메소드는 협업할 때 다른 누군가의 이벤트 사용을 저지하는 좋지 않은 메소드라고 배웠습니다. 따라서 대체할 수 있는 방법을 고민하다가, `if (event.target === event.currentTarget)` 을 이용해서 이벤트의 실제 발생지역에서만 모달창이 사라지게 하게끔 해서 문제를 해결하였습니다.
  <br />

## 3. Tab

#### 구현한 방법과 이유 🚀

1. 탭이 총 3개 있으므로, 어떤 탭이 선택되었는지 알기 위해 `currentTab` 이라는 state를 사용합니다. 이를 관리하기 위해 `useState`훅을 사용합니다.
2. 탭들은 서로 연관이 있으므로 탭을 구현할 때 의미없는 `div` 나 `span` 태그보다 `ul` 태그를 활용합니다.
3. 선택된 탭을 알기 위해 각 탭(ex. 세 번째 탭)이 선택되면, `onClick` 이벤트 리스너를 주어 `currentTab`을 변경합니다.
4. 선택된 탭의 색상을 변경하기 위해(ex. 세 번째 탭), 선택된 `li`태그에 `active` 클래스를 넣어줍니다. 즉, 삼항연산자를 이용하여 `${currentTab === 2 ? "active" : ""}` 를 활용합니다.
5. 전체 css 처리를 하고, `active` 클래스만 색상을 보라색으로 넣어주고 애니메이션을 처리해줍니다.
   <br />

#### 어려웠던 점과 해결 방법 ❓

- 처음 아이디어를 구상할 때, 탭들을 구분짓지만, 공통된 속성을 갖게 나타내는 방법에 대한 고민을 했습니다. `const tabSequence = {"First", "Second", "Third"}` 도 고려했지만, 각각의 탭들을 번호로 맵핑하여 구분하는것이 더 간단해 보였으므로, 번호를 붙여 구분하였습니다.
  <br />

## 4. Tag

#### 구현한 방법과 이유 🚀

1. 태그가 보여지는 공간(`ul li`태그) 과 새로운 태그를 입력할 수 있는 공간 (`form input`태그) 을 분리합니다.
2. 모든 태그의 정보를 관리하는 `state`가 필요하므로 `tagsArr` 라는 `state`를 활용하고 `useState`훅을 활용합니다.
3. 값이 중복되는 태그를 구별해 내기 위해 `tagsArr`는 `id`와 `value` 를 가진 `object` 를 담는 배열로 설정합니다.
4. 태그가 보여지는 것은 `ul li` 를 활용하고, `tagsArr`의 크기 만큼 보여져야 하기 때문에 배열의 `map` 함수를 이용해서 태그를 만들어 냅니다.
5. 새로운 태그를 만들 수 있는 공간은 `form input`태그 를 이용했는데, `enter`를 치면 `submit` 이 되는 속성을 이용하였습니다.
6. 태그가 보여지는 공간과 새로운 태그를 입력할 수 있는 공간을 포함하는 `div` 태그를 만들어 css 처리를 해주어 마치 `input` 태그 안에 태그들이 있게끔 보여지게 합니다.
   <br />

#### 어려웠던 점과 해결 방법 ❓

- 처음 아이디어를 구상하는게 어려웠습니다. 태그가 `input` 태그 안에서 만들어지는 것 처럼 생겨서 `input` 의 결과로 생긴 `ul li`태그를 `input` 태그 안으로 넣는 방법을 고민하고 구글링 하며 찾아보았습니다. 하지만 그 방법을 찾지 못했습니다. 대신 태그가 보여지는 공간과 새로운 태그를 입력하는 공간을 분리하는 방식으로 마치 `input` 태그 안에서 생긴 것으로 '보여지게끔' 하는 방식으로 해결하였습니다.
- 처음에 `tagsArr` 를 `value` 만 가지는 `array` 로 설정하였고, 이를 활용한 `array`의 `map` 함수에서 `li key`를 unique 한 값으로 `Date.now()` 를 주었습니다. 하지만 unique한 키를 주었음에도 불구하고 같은 값을 입력해보니 'li에는 unique 한 key를 주어야 한다' 는 에러메세지가 발생했습니다. 이를 해결하기 위해 `tagsArr` 를 `{id:id, value:value}`를 갖는 배열로 재설정 하였고 `li key={tag.id}` 로 설정하여 같은 값을 넣을때 발생하는 문제를 해결 하였습니다.
  <br />

## 5. AutoComplete

#### 구현한 방법과 이유 🚀

1. `input` 태그에 들어가 있는 `value` 를 바탕으로 autocomplete 기능을 활성화 하므로 먼저 `inputValue`라는 state를 주었고 이를 관리하기 위해 `useState` 훅을 사용하였습니다.
2. autocomplete의 핵심은 `inputValue`에 속한 값을 '포함' 하고 있는 `options` 들을 드랍다운으로 보여주는 것이므로 `string.includes()` 함수를 이용합니다.
3. 예시에 있는 드랍다운 값들(ex. "antique" "vintage" "rustic" etc) 을 포함하는 `possibleOptions` 배열을 만든 후 `options state`에 대입해줍니다.
4. 드랍다운은 `inputValue` 가 변할때 마다 활성화 되어야 하므로 `useEffect` 훅을 사용하고 `dependency`를 `inputValue`로 설정합니다.
5. 드랍다운에 나오는 단어들의 배열은 `inputValue`의 대소문자 구별없이 나타나므로 `inputValue.toLowerCase()`를 포함하고 있는 `option.toLowerCase()` 들을 찾습니다. 이를 `Array filter`를 이용하여 나타냅니다.

6. 4,5번을 코드로 묶어 나타내면 아래 코드와 같습니다.

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

7. 드랍다운에서 `click` 이 발생하면, 해당 `option`으로 `inputValue`를 설정해줍니다.
   <br />

#### 어려웠던 점과 해결 방법 ❓

- `string`의 `includes`함수가 떠오르지 않아 연관된(단어가 포함된) `options` 배열을 어떻게 보여줘야 하나 당황했습니다. 검색 후에 `includes` 함수가 있는 것을 발견하여 `filter` 함수를 통해 `includes` 된 단어를 보여주었습니다.
- `input` 태그에 `border-radius`를 주니 `input` 태그가 화면에 깨져서 나타나는 버그가 발생했습니다. `input` 태그에 `background-color: transparent;`를 주어 해결하였습니다.
- `input` 창에 `space`만 입력하니, `input` 창의 `border-bottom`모습이 처음의 `input`창의 모습과 달라지는 문제가 발생했습니다. `css class`명으로 스페이스만 입력되었을 때 `unProperInput`를 추가하여 원래의 `input` 창이 되도록 설정하여 해결하였습니다.
  <br />

## 6. ClickToEdit

#### 구현한 방법과 이유 🚀

1. 이름과 나이를 변경할 수 있어야 하므로 `name, age` state를 선언하고, 각각을 컨트롤 하기 위해 `useState`훅을 사용합니다.
2. 이름과 나이를 클릭하면 변경 가능한 mode가 되어야 하므로, `isNameEditable, isAgeEditable` state를 선언하고 각각을 컨트롤 하기 위해 `useState`훅을 사용한다.
3. 삼항연산자를 사용하여, 이름과 나이가 변경 가능한 mode가 되면, `input` 태그를 보여주고, 변경 불가능한 mode가 되면 `span` 태그로 이름과 나이를 보여줍니다.
   <br />

#### 어려웠던 점과 해결 방법 ❓

- 처음에 이름과 나이를 변경하면 밑의 결과창에 이름과 나이가 바로 변경되는 방식으로 구현했습니다. 하지만 예시를 보니 `input` 창에서 변경을 해도 바깥을 클릭하지 않는 이상 이름, 나이가 변경되지 않는 점을 발견했습니다. 그래서 고민 후 생각해낸 방법이 임시 state `(tempName, tempAge)`를 두어 `input` 창에서 변경하는대로 임시 state가 변경이 되고, 바깥이 클릭이 되면, 임시state의 값으로 `age, name` 의 값을 변경하는 방식으로 문제를 해결하였습니다.
- 이름과 나이의 `span`이 클릭되면, `span`태그를 `input` 태그로 변경시켜서 바로 수정이 가능할 줄 알았는데, 한번 더 클릭해야 수정이 가능해지는 문제가 발생했습니다. 이 문제는 `useRef` 훅을 이용하여 `isNameEditable = true` 가 되면 `nameInputRef.current.focus();` 을 활용하여 해결했습니다.
  <br />
