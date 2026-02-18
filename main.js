document.addEventListener('DOMContentLoaded', () => {
    // 실시간 검색어 예시 데이터 (실제 서비스에서는 API로 교체)
    const searchTrends = [
        "K-팝 글로벌 인기 비결",
        "2026년 봄 패션 트렌드",
        "서울 야간 경관 명소 10선",
        "비빔밥의 현대적 재해석",
        "한국 IT 기술의 미래"
    ];

    // 맛집 예시 데이터
    const restaurants = [
        "성수동 카페거리 힙플",
        "연남동 줄 서는 파스타",
        "광장시장 원조 육회",
        "강남역 루프탑 다이닝",
        "제주도 현지인 추천 맛집"
    ];

    // 미디어 예시 데이터
    const media = [
        "화제의 드라마 '서울의 달'",
        "박찬욱 감독 신작 소식",
        "이번 주 넷플릭스 1위",
        "전 세계가 주목하는 K-예능",
        "독립영화제 수상작 목록"
    ];

    function renderList(elementId, data) {
        const listElement = document.getElementById(elementId);
        if (!listElement) return;

        // 로딩 메시지 제거 (부모 노드에서 placeholder 제거)
        const placeholder = listElement.previousElementSibling;
        if (placeholder && placeholder.classList.contains('content-placeholder')) {
            placeholder.style.display = 'none';
        }

        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listElement.appendChild(li);
        });
    }

    // 약간의 지연을 주어 로딩 효과 시뮬레이션
    setTimeout(() => {
        renderList('search-list', searchTrends);
        renderList('restaurant-list', restaurants);
        renderList('media-list', media);
    }, 500);
});
