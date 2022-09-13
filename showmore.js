//컨텐츠 로딩 완료 후 클래스 처리
window.addEventListener('load', function () {
    let contentHeight = document.querySelector('.someContainer > .content').offsetHeight; //컨텐츠 높이 얻기
    if (contentHeight <= 300) {
        document.querySelector('.someContainer').classList.remove('show-contents-origin'); // 초기값보다 작으면 전체 컨텐츠 표시
        document.querySelector('.btn_open').classList.add('hide'); // 버튼 감춤
    }
});

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

    // 감추기 버튼 이벤트 리스너
    document.querySelector('.btn_close').addEventListener('click', function (e) {
        e.target.classList.add('hide'); // 타켓에 hide 클래스를 추가하여 감추는 클래스 생성
        document.querySelector('.btn_open').classList.remove('hide'); // 더보기 버튼 감춤
        document.querySelector('.someContainer').classList.add('show-contents-origin'); // 초기 상태로 되돌림
        document.querySelector('.someContainer').classList.remove('show-contents-max'); // 최대 높이 클래스를 감춤
    });
});
