//컨텐츠 로딩 완료 후 높이 기준으로 클래스 재처리
window.addEventListener('load', function () {
    let contentHeight = document.querySelector('.someContainer > .content').offsetHeight; //컨텐츠 높이 얻기
    if (contentHeight <= 300) {
        document.querySelector('.someContainer').classList.remove('show-contents-max'); // 초기값보다 작으면 전체 컨텐츠 표시
        document.querySelector('.btn_open').classList.add('hide'); // 버튼 감춤
    }
});

document.addEventListener('DOMContentLoaded', function () {
    //DOM 생성 후 이벤트 리스너 등록
    //더보기 버튼 이벤트 리스너
    document.querySelector('.btn_open').addEventListener('click', function (e) {
        let classList = document.querySelector('.someContainer').classList; // 더보기 프레임의 클래스 정보 얻기
        let contentHeight = document.querySelector('.someContainer > .content').offsetHeight; //컨텐츠 높이 얻기

        // 2단계이면 전체보기로
        if (classList.contains('show-contents-middle')) {
            classList.remove('show-contents-middle');
            classList.add('show-contents-max');
        }
        // 1단계이면 2단계로
        if (classList.contains('show-contents-origin')) {
            classList.remove('show-contents-origin');
            if (contentHeight > 600) {
                classList.add('show-contents-middle');
            } else {
                document.querySelector('.btn_open').classList.add('hide');
            }
        }
        //전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시
        if (!classList.contains('show-contents-origin') && !classList.contains('show-contents-middle')) {
            e.target.classList.add('hide');
            document.querySelector('.btn_close').classList.remove('hide');
        }
    });

    // 감추기 버튼 이벤트 리스너
    document.querySelector('.btn_close').addEventListener('click', function (e) {
        e.target.classList.add('hide');
        document.querySelector('.btn_open').classList.remove('hide'); // 더보기 버튼 감춤
        document.querySelector('.someContainer').classList.add('show-contents-origin'); // 초기 감춤 상태로 복귀
        document.querySelector('.someContainer').classList.remove('show-contents-max'); // 초기 감춤 상태로 복귀
    });
});
