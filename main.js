document.addEventListener('DOMContentLoaded', () => {
    // 예시 데이터
    const data = {
        'search-trends': [
            "K-팝 글로벌 인기 비결",
            "2026년 봄 패션 트렌드",
            "서울 야간 경관 명소 10선",
            "비빔밥의 현대적 재해석",
            "한국 IT 기술의 미래"
        ],
        'restaurant-rankings': [
            "성수동 카페거리 힙플",
            "연남동 줄 서는 파스타",
            "광장시장 원조 육회",
            "강남역 루프탑 다이닝",
            "제주도 현지인 추천 맛집"
        ],
        'media-rankings': [
            "화제의 드라마 '서울의 달'",
            "박찬욱 감독 신작 소식",
            "이번 주 넷플릭스 1위",
            "전 세계가 주목하는 K-예능",
            "독립영화제 수상작 목록"
        ]
    };

    const categoryMeta = {
        'intro': { title: '홈', desc: '한국의 최신 트렌드를 실시간으로 만나보세요!' },
        'search-trends': { title: '실시간 검색어', desc: '지금 가장 많이 검색되고 있는 키워드입니다.' },
        'restaurant-rankings': { title: '맛집 랭킹', desc: 'SNS에서 가장 핫한 웨이팅 맛집 순위입니다.' },
        'media-rankings': { title: '인기 미디어', desc: '현재 화제가 되고 있는 드라마와 영화입니다.' },
        'featured-articles': { title: '트렌드 인사이트', desc: '전문가가 분석한 심층 트렌드 리포트입니다.' }
    };

    // DOM Elements
    const sidebarItems = document.querySelectorAll('.sidebar-nav li');
    const viewSections = document.querySelectorAll('.view-section');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');

    // Navigation Logic
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            
            // 1. Update Sidebar Active State
            sidebarItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');

            // 2. Update Header Content
            if (categoryMeta[target]) {
                categoryTitle.textContent = categoryMeta[target].title;
                categoryDescription.textContent = categoryMeta[target].desc;
            }

            // 3. Switch View
            viewSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === target) {
                    section.classList.add('active');
                }
            });

            // 4. Load Data if needed
            if (data[target]) {
                loadData(target);
            }
        });
    });

    function loadData(target) {
        let listId = '';
        if (target === 'search-trends') listId = 'search-list';
        else if (target === 'restaurant-rankings') listId = 'restaurant-list';
        else if (target === 'media-rankings') listId = 'media-list';

        const listElement = document.getElementById(listId);
        if (!listElement || listElement.children.length > 0) return; // Already loaded or no element

        // Remove placeholder
        const placeholder = listElement.previousElementSibling;
        if (placeholder && placeholder.classList.contains('content-placeholder')) {
            placeholder.style.display = 'none';
        }

        // Render Data
        data[target].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listElement.appendChild(li);
        });
    }
});
