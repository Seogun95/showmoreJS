# SHOW MORE JS

긴 컨텐츠 페이지에 더보기 버튼을 추가하여 컨텐츠를 더 간결하고 보기좋게 만들어 줄 수 있습니다.

이 스크립트를 사용하면 표시되는 실제 컨텐츠 내용은 `<div class="content">` 안에 표시됩니다.

`someContainer` 클래스가 자식클래스 들을 감싸게 되며 높이를 제어하게 됩니다.

`addEventListener`를 등록해 더보기 버튼을 클릭하면 기본 `300px` 높이 > `600px` 로 늘어나고, 한번 더 누르면 모든 콘텐츠가 보여지도록 합니다.

# TECH STACK

[![img](https://camo.githubusercontent.com/1a2432fe733ac4772ad5036bd3f66738d9a9c4471bba0617c8ea93c34d54102a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666c61742d737175617265266c6f676f3d48544d4c35266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/1a2432fe733ac4772ad5036bd3f66738d9a9c4471bba0617c8ea93c34d54102a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666c61742d737175617265266c6f676f3d48544d4c35266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/c9bb78d3bce7cdaaaaecc956736c1f2cf629065a8d02e5fbd6825efa409718d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/c9bb78d3bce7cdaaaaecc956736c1f2cf629065a8d02e5fbd6825efa409718d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d63737333266c6f676f436f6c6f723d7768697465) [![img](https://camo.githubusercontent.com/11ef1cd6ae51b919aec2f830f828c58978217faeb5764967d485e9cf2e4e4a3c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a61766173637269707428455336292d4637444631453f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)](https://camo.githubusercontent.com/11ef1cd6ae51b919aec2f830f828c58978217faeb5764967d485e9cf2e4e4a3c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a61766173637269707428455336292d4637444631453f7374796c653d666c61742d737175617265266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)

# DEMO

[showmoreJS 데모 페이지 - codepen](https://codepen.io/seogun95/pen/oNdzezJ/?target=_blank)

## 기본 CSS 스타일

```css
.content {
    height: max-content;
    background-color: #262626;
    position: relative;
    padding: 2rem;
}

.show-contents-max {
    max-height: 10000px;
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.show-contents-origin {
    max-height: 300px;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
}

.show-contents-middle {
    max-height: 600px;
    overflow: hidden;
    transition: max-height 0.25s ease-in;
}

.btn_open,
.btn_close {
    background: #424242;
    color: #fff;
    font-size: 15px;
    line-height: 18px;
    opacity: 0.5;
    padding: 11px;
    text-align: center;
    text-decoration: none;
    width: auto;
    display: block;
    transition: 0.3s ease;
}

.btn_open:hover,
.btn_close:hover {
    opacity: 1;
}

.hide {
    display: none !important;
}
```

## 더보기 이벤트 리스터

더보기 버튼은 두 번의 높이로 넓어지게 됩니다.

첫 더보기 버튼을 누르게 되면 `600px` 높이만큼 늘어나게 되며, 다시 한 번 누르면 모든 컨텐츠가 보여지게 됩니다.

그리고 실제 컨텐츠의 전체 높이보다 작다면 전체 컨텐츠가 나타날 수 있도록 조건을 체크해줍니다.

```js
document.addEventListener('DOMContentLoaded', function () {
    //더보기 버튼 addEventListener
    document.querySelector('.btn_open').addEventListener('click', function (e) {
        let classList = document.querySelector('.someContainer').classList; // 더보기 프레임의 클래스 정보
        let contentHeight = document.querySelector('.someContainer > .content').offsetHeight; //컨텐츠 높이 가져옴

        // 중간 높이라면 최대 높이로 설정
        if (classList.contains('show-contents-middle')) {
            classList.remove('show-contents-middle');
            classList.add('show-contents-max');
        }
        // 기본 높이라면 중간 높이로 설정. 그게 아니라면 더보기 버튼 감춤.
        if (classList.contains('show-contents-origin')) {
            classList.remove('show-contents-origin');
            if (contentHeight > 600) {
                classList.add('show-contents-middle');
            } else {
                document.querySelector('.btn_open').classList.add('hide');
                classList.add('show-contents-max');
            }
        }

        // 최대 높이시 더보기 버튼 감추기 및 감추기 버튼 표시
        if (!classList.contains('show-contents-origin') && !classList.contains('show-contents-middle')) {
            e.target.classList.add('hide');
            document.querySelector('.btn_close').classList.remove('hide');
        }
    });
```

## 감추기 이벤트 리스너

최대 높이로 펼처진 상태면 더보기 버튼이 사라지고 감추기 버튼이 생성됩니다. 그리고 감추기 버튼을 누르게 되면 다시 첫 높이 상태로 되돌아가게 되고, 최대 높이 일때 추가되었던 클래스가 삭제됩니다.

```javascript
// 감추기 버튼 이벤트 리스너
document.querySelector('.btn_close').addEventListener('click', function (e) {
        e.target.classList.add('hide'); // 타켓에 hide 클래스를 추가하여 감추는 클래스 생성
        document.querySelector('.btn_open').classList.remove('hide'); // 더보기 버튼 감춤
        document.querySelector('.someContainer').classList.add('show-contents-origin'); // 초기 상태로 되돌림
        document.querySelector('.someContainer').classList.remove('show-contents-max'); // 최대 높이 클래스를 감춤
    });
});

```

## 초기 설정 이벤트 리스너

만약, 초기 값인 `300px` 높이보다 컨텐츠의 크기가 작다면, 더보기 버튼이 생성되지 않게 됩니다.

```javascript
//컨텐츠 로딩 완료 후 클래스 처리
window.addEventListener('load', function () {
    let contentHeight = document.querySelector('.someContainer > .content').offsetHeight; //컨텐츠 높이 얻기
    if (contentHeight <= 300) {
        document.querySelector('.someContainer').classList.remove('show-contents-origin'); // 초기값보다 작으면 전체 컨텐츠 표시
        document.querySelector('.btn_open').classList.add('hide'); // 버튼 감춤
    }
});
```
