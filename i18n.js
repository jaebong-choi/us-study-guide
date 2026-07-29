/* ═══════════════════════════════════════════════════════════
 * US Study Guide — i18n (한국어 ko / English en)
 * ═══════════════════════════════════════════════════════════
 * 영국·호주·캐나다 사이트와 같은 설계다.
 *  - 데이터(UG_UNIS·UNI_INFO·질문 배열)와 currentState는 한글 원문을 유지하고,
 *    화면에 그리는 순간에만 tr()로 번역한다. 결과 공유 링크(#p=)는 원문 값을 담으므로
 *    언어와 무관하게 복원된다.
 *  - 정적 HTML 문구는 data-i18n + I18N 사전(t)으로 처리한다.
 *
 * 영어 문구 톤: 2인칭, 담백한 사실 전달.
 * 선택 언어는 localStorage("sgh-lang")에 저장되며 허브·타 국가 사이트와 공유된다.
 * ═══════════════════════════════════════════════════════════ */

const I18N = {
    ko: {
        docTitle: "미국 대학 진학 가이드 - Direct·패스웨이·2+2 편입 AI 진단 | US Study Guide",
        docDesc: "US News 2026 데이터 기반 미국 대학 진학 AI 진단. Direct 입학·패스웨이(조건부입학)·커뮤니티칼리지 2+2 편입까지, 특정 유학원과 무관한 무료 정보 가이드.",

        navTagline: "미국 진학 AI",
        navUg: "진학 진단",
        navRoutes: "3가지 경로",
        navHub: "국가 선택",
        themeDark: "다크", themeLight: "라이트",
        themeAria: "화면 모드 전환", themeTitle: "밝게 / 어둡게",
        langAria: "언어 선택",

        /* ---------- 히어로 · 홈 ---------- */
        heroTitle: "미국 대학 진학,<br>AI로 설계하다.",
        heroSub: 'Direct · 패스웨이 · 2+2 편입 중 내게 맞는 미국 입학 루트를<br class="hidden sm:block"><strong class="text-white font-semibold">3분 만에</strong> 추천받으세요.',
        heroUgBtn: '진학 경로 진단 <span class="text-sm font-medium opacity-70">Direct · 패스웨이 · 2+2</span>',
        heroRoutesBtn: '3가지 경로 살펴보기 <i class="fa-solid fa-arrow-down text-sm opacity-80"></i>',
        homeImgAlt1: "미국 대학 캠퍼스 건물",
        homeTitle: "누구에게나 열린,<br>중립적인 진학 가이드.",
        homeDesc: "이 페이지는 특정 유학원과 무관한 무료 정보 가이드입니다. US News 2026 순위와 각 대학·기관 공시 정보를 기반으로, 성적·영어·예산에 맞는 미국 진학 경로를 스스로 확인할 수 있도록 만들었습니다.",
        homeLi1: "<strong>US News 2026 순위 · 26/27 학비 데이터</strong> 기반의 학교별 안내",
        homeLi2: "Direct · 패스웨이 · 2+2 편입 <strong>경로별 장단점 비교</strong>",
        homeLi3: "진단 결과를 <strong>링크 하나로 저장·공유</strong>, 대학 공식 페이지로 바로 연결",
        homeUgStart: "진학 진단 시작",
        homeRoutesStart: "경로 한눈에 보기",

        rSumTitle: '미국 대학으로 가는<br class="sm:hidden"> 세 가지 길.',
        rSumSub: "성적·영어·예산 조합에 따라 최적 경로가 달라집니다. 진단을 시작하면 아래 세 경로 중 내 상황에 맞는 루트를 추천해 드립니다.",
        rSumDirTitle: "Direct 입학",
        rSumDirSub: "고교 졸업 → 바로 1학년",
        rSumDirDesc: "내신 1~2등급대 + TOEFL 80~100 이상이 기본. 최상위권은 SAT/ACT 필수화 추세입니다. 에세이·활동까지 준비량이 가장 많지만 소속감이 확실한 정공법입니다.",
        rSumPwTitle: "패스웨이 (조건부입학)",
        rSumPwSub: "1년 과정 → 2학년 진학",
        rSumPwDesc: "SAT 없이 내신 3~6등급대·영어 중위권도 주립 명문에 진입하는 경로. 1년간 영어+학점 과목을 듣고 조건 충족 시 2학년으로 올라가 총 기간 연장이 없습니다.",
        rSumTfTitle: "2+2 편입 (커뮤니티칼리지)",
        rSumTfSub: "CC 2년 → 4년제 3학년",
        rSumTfDesc: "학비를 절반 이하로 줄이면서 UC 계열 등 명문 편입을 노리는 루트. UC TAG(6개 캠퍼스 편입 보장)는 국제학생도 활용할 수 있습니다. 편입 GPA 관리가 핵심입니다.",
        rSumCta: '내 경로 진단받기 <i class="fa-solid fa-arrow-right text-xs"></i>',

        srcTitle: "정보는 언제나,<br>공식 출처에서 확인하세요.",
        srcDesc: "이 가이드의 진단 결과는 방향을 잡기 위한 1차 자료입니다. 입학요건·학비·비자 규정은 수시로 바뀌므로, 최종 결정 전에는 반드시 아래 공식 채널에서 최신 정보를 확인하세요.",
        srcLink1: "<strong>EducationUSA</strong> — 미 국무부 공식 유학 안내",
        srcLink2: "<strong>Common App</strong> — 미국 대학 공통 지원 시스템",
        srcLink3: "<strong>Study in the States</strong> — 국토안보부 F-1 비자 공식 안내",
        homeImgAlt2: "미국 도심의 성조기",
        footerCopy: "ⓒ US Study Guide. 정보 제공 목적으로 제작된 페이지입니다.",
        footerDisclaimer: "본 사이트는 특정 유학원·기관과 무관한 무료 정보 페이지입니다. 대학 순위는 US News Best Colleges 2026(2025년 9월 발표), 과정·요건·학비는 각 대학 및 운영 기관 공시 기준이며 학기마다 변동될 수 있습니다. 최종 지원 전 반드시 각 대학·기관 공식 페이지에서 최신 요강을 확인하세요.",

        /* ---------- 진단 대화 ---------- */
        introUg: '안녕하세요, US Study Guide AI 진단입니다.<br>US News 2026 데이터 기반으로 <strong>미국 학부 진학(Direct · 패스웨이 · 2+2 편입)</strong> 경로 분석을 시작합니다.',
        analyzing: '정보 입력이 완료되었습니다. 최신 26/27 미국 입시 데이터를 바탕으로 결과를 분석 중입니다...',
        backPrev: '<i class="fa-solid fa-arrow-left text-[11px]"></i> 이전 질문으로',
        otherTestPrompt: '보유하신 시험 종류를 선택해주세요. 입력하신 점수를 TOEFL iBT 기준으로 환산해 드립니다.',
        customPrompt: '희망하시는 전공명을 자세히 입력해주세요. 가장 가까운 계열로 매칭해 분석해 드립니다.<br><span class="block mt-2 text-[13px] text-gray-500">예) 스포츠 매니지먼트, 게임 디자인, 물리치료학, 항공운항학</span>',
        customPlaceholder: '전공명을 입력하세요 (예: 스포츠 매니지먼트)',
        customEmpty: '전공명을 입력해주세요',
        customAnalyze: '이 전공으로 분석하기',
        backShort: '← 뒤로',
        customMatched: (raw, label) => `'<strong>${raw}</strong>' 전공은 <strong>${label}</strong> 계열과 가장 가깝습니다. 이 계열 기준으로 분석을 진행하니, 실제 개설 대학과 세부 전공명은 각 대학 공식 페이지에서 확인하세요.`,
        backToScores: '← 성적 선택으로 돌아가기',
        scorePh: (type, min, max) => `${type} 점수를 입력하세요 (${min}~${max})`,
        convertBtn: 'TOEFL 기준으로 환산하기',
        scoreInvalid: (min, max) => `유효한 점수를 입력하세요 (${min}~${max})`,
        scoreUser: (type, s) => `${type} ${s}점`,
        scoreConverted: (type, s, toefl, bandLabel) => `${type} ${s}점은 <strong>TOEFL iBT 약 ${toefl}점</strong>에 해당합니다. "${bandLabel}" 구간으로 분석을 진행할게요.`,
        copied: '<i class="fa-solid fa-check"></i> 복사 완료!',

        /* ---------- 공유 · CTA ---------- */
        resultCta: '이 결과로 무료 상담 받기',
        resultCopy: '결과 링크 복사',
        resultRestart: '다시 진단하기',
        shareHint: '무료 상담 신청 시 이 진단 결과가 자동으로 첨부됩니다. 링크를 복사해 카카오톡 · 문자로 전달하면 같은 결과 페이지가 열립니다.',
        ctaTitle: '이 결과, 저장해 두세요.',
        ctaSubUg: '위 결과는 US News 2026 데이터 기반의 1차 진단입니다.<br class="hidden sm:block">링크 하나로 저장·공유할 수 있으니, 함께 고민하는 가족 · 친구에게도 전달해 보세요.',
        ctaFoot: '최종 지원 전에는 <a href="https://educationusa.state.gov/" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-white">EducationUSA</a> · <a href="https://studyinthestates.dhs.gov/" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-white">F-1 비자 공식 안내</a>와 각 대학 입학처에서 최신 요강을 확인하세요.',

        /* ---------- 공식 링크 게시판 ---------- */
        boardTitle: '공식 정보 링크',
        boardSubUg: '입학 요건 · 지원 시스템 · 비자는 아래 공식 채널이 가장 정확합니다.',
        boardBtn: 'EducationUSA 바로가기',

        /* ---------- 결과 공통 ---------- */
        ugBadge: '학부 진학 진단 결과',
        resultHeadUg: (title) => `당신에게 추천하는 경로는<br><span class="text-gold">"${title}"</span> 입니다.`,
        diagReason: '진단 근거:',
        recChip: '내 추천 경로',
        infoChip: '참고 경로',
        chipInput: '직접 입력 전공',
        chipField: '선택 계열',
        fmTitleCustom: (cm, label) => `'${cm}' → ${label} 계열 분석`,
        fmTitleField: (label) => `${label} 계열 추천 전공`,
        fmDescCustom: (cm, label) => `입력하신 '${cm}' 전공은 ${label} 계열 기준으로 분석했습니다. 아래는 이 계열에서 한국 학생이 많이 선택하는 전공들입니다. 세부 개설 여부는 대학마다 다르니 공식 페이지에서 확인하세요.`,
        fmDescField: '선택하신 계열에서 한국 학생이 많이 선택하는 전공들입니다. 학교 목록의 학교별 강세 전공과 함께 비교해 보세요.',

        /* ---------- 경로 타이틀 · 사유 ---------- */
        dirTitle: 'Direct 입학 (신입학)',
        pwTitle: '패스웨이 (조건부입학)',
        tfTitle: '2+2 편입 (커뮤니티칼리지)',
        mixTitle: '패스웨이 + 2+2 병행 검토',
        dirSubR: '준비된 성적으로 1학년에 바로 입학하는 정공법입니다. 지원 대학 선택과 에세이 완성도에 집중하세요.',
        pwSubR: 'SAT 없이 주립 명문에 진입해 1년 후 2학년으로 올라가는 경로입니다. 총 학위 기간 연장이 없습니다.',
        tfSubR: '커뮤니티칼리지에서 2년간 학비를 아끼고 GPA를 만들어 4년제 3학년으로 편입하는 경로입니다.',
        mixSubR: '현재 조건에서는 패스웨이와 2+2 편입 두 경로 모두 열려 있습니다. 예산과 목표 대학에 따라 저울질해 보세요.',
        rDirect: '내신 상위권과 영어 성적을 갖추고 있어 Direct 전형 경쟁력이 충분합니다. SAT/ACT까지 확보하면 지원 폭이 최상위권까지 넓어집니다.',
        rTfBudget: '학비 절감을 우선하셨기에 연 $10,000대의 커뮤니티칼리지에서 시작하는 2+2 루트가 가장 합리적입니다. UC TAG를 활용하면 편입 보장까지 받을 수 있습니다.',
        rTfTop: 'SAT 없이 최상위권을 노리신다면, 신입 전형보다 편입 전형이 유리합니다. UCLA·버클리 편입은 SAT가 필요 없고 CC GPA로 승부합니다.',
        rPwFast: '빠르고 안정적인 진학을 원하셔서 합격 예측이 쉬운 패스웨이를 추천합니다. 조건 충족 시 진학이 보장되고 첫 해부터 대학 캠퍼스에서 생활합니다.',
        rPwFit: '현재 내신·영어 조합에서는 SAT 없이 지원 가능한 패스웨이가 가장 승산 높은 경로입니다. 1년 후 2학년으로 진학해 기간 손해도 없습니다.',
        rMix: '내신·영어 조건상 Direct보다는 단계적 진입이 유리합니다. 캠퍼스 생활을 바로 시작하는 패스웨이와 비용을 아끼는 2+2 중 우선순위를 정해 보세요.',
        hs2Add: '고2라면 남은 기간 TOEFL·SAT를 준비해 Direct까지 노려볼 시간이 충분하다는 점도 참고하세요.',
        engNoneAdd: '공인 영어 성적이 아직 없으므로, 어떤 경로든 TOEFL(또는 IELTS·Duolingo) 확보가 첫 단계입니다.',
        satNoneAdd: '단, SAT 필수 대학(아이비리그·MIT 등)에 지원하려면 SAT 준비가 필요합니다.',

        /* ---------- 3개 경로 비교 카드 ---------- */
        routes3Title: '미국 학부 진학 3가지 경로',
        routes3Sub: '같은 졸업장을 받는 길이 세 가지입니다. 진입 장벽 · 비용 · 기간을 비교해 보세요.',
        dirCardTitle: 'Direct 입학',
        dirCardSub: '고교 졸업 → 1학년 입학 · 4년',
        dirLi1: '내신 1~2등급대 + TOEFL 80~100+ 기본',
        dirLi2: '에세이 · 추천서 · 활동 종합 평가 (Common App)',
        dirLi3: '1학년부터 소속감 있게 시작하는 정공법',
        dirLi4: '최상위권은 SAT/ACT 필수화 추세 (하버드 · MIT 등)',
        dirMeta: '지원 시기: ED/EA 11월 초 · RD 12~1월 마감, 9월 입학. 상위권일수록 준비 기간을 길게 잡아야 합니다.',
        pwCardTitle: '패스웨이 (조건부입학)',
        pwCardSub: '패스웨이 1년 → 2학년 진학 · 총 4년',
        pwLi1: 'SAT 불필요 · 내신 3~6등급대 지원 가능',
        pwLi2: 'TOEFL 55~79 수준부터 시작 (학교별 상이)',
        pwLi3: '영어 + 학점 인정 과목 이수 → 기간 연장 없음',
        pwLi4: '진학 조건(GPA · 영어) 미충족 시 지연 가능',
        pwMeta: '운영: 대학 직영 또는 Shorelight · INTO · Kaplan 제휴. 입학 시기가 연 2~3회로 유연한 편입니다.',
        tfCardTitle: '2+2 편입 (커뮤니티칼리지)',
        tfCardSub: 'CC 2년 → 4년제 3학년 편입 · 총 4년',
        tfLi1: '입학 장벽 낮음 · 고교 성적 부담 적음',
        tfLi2: 'CC 학비 연 $10,000~15,000로 비용 최소화',
        tfLi3: 'UC TAG로 6개 캠퍼스 편입 보장 (국제학생 가능)',
        tfLi4: 'UCLA · 버클리급은 편입 GPA 3.7+ 경쟁',
        tfMeta: '편입 합격의 열쇠는 CC에서의 GPA와 전공 선수과목 이수입니다. UCLA 편입생의 93%가 캘리포니아 CC 출신입니다.',

        /* ---------- 비용 ---------- */
        costTitle: '연간 비용 한눈에 보기',
        costSub: '2026-27 기준 국제학생 연간 학비입니다. 경로 선택의 가장 현실적인 변수입니다.',
        costPrivate: '사립대 학비',
        costPrivateNote: '아이비리그 · NYU 등. 명문 · 특정 전공은 $70K 이상',
        costPublic: '주립대 학비 (비거주자)',
        costPublicNote: 'UC · 미시간 · UW 등 주립 명문 기준',
        costCc: '커뮤니티칼리지 학비',
        costCcNote: '2년간 다니며 4년제 대비 절반 이하로 절감',
        costLiving: '생활비 (연간)',
        costLivingNote: '기숙사 · 식비 · 보험 포함, 도시별 차이 큼',
        costNote: '※ 학교·전공·환율에 따라 달라집니다. 정확한 금액은 각 대학 Cost of Attendance 페이지에서 확인하세요.',

        /* ---------- 준비 서류 · 타이밍 ---------- */
        ugPrepTitle: '무엇을 준비해야 하나요?',
        ugDocsTitle: '공통 준비 서류',
        ugDocsSub: '경로와 무관하게 기본이 되는 서류들',
        ugDoc1: '고교 성적증명서 · 졸업(예정)증명서 (영문)',
        ugDoc2: '공인 영어 성적 (TOEFL · IELTS · Duolingo)',
        ugDoc3: 'SAT/ACT 성적 (Direct 상위권 지원 시)',
        ugDoc4: '에세이(Personal Statement) · 추천서 (Direct)',
        ugDoc5: '재정증명서 (은행잔고) — I-20 발급에 필수',
        ugTimingTitle: '지원 타이밍',
        ugTimingSub: '9월 가을학기 기준 일정입니다',
        ugTime1: 'Direct: 전년도 11월(ED/EA) ~ 1월(RD) 마감',
        ugTime2: '패스웨이: 연 2~3회 개강, 개강 3~6개월 전 지원',
        ugTime3: 'CC: 지원 마감이 느슨한 편, 3~6개월 전 준비 권장',
        ugTime4: 'F-1 비자: 개강 6개월 전부터 신청 가능, I-20 수령 후 진행',
        visaF1: 'F-1 학생비자',
        visaF1Note: 'I-20 발급 → SEVIS $350 → DS-160 → 인터뷰(수수료 $185)',
        visaOpt: 'OPT (졸업 후 취업)',
        visaOptNote: '전공 관련 분야에서 최대 12개월 합법 취업',
        visaStem: 'STEM OPT 연장',
        visaStemNote: 'STEM 전공은 24개월 추가, 총 36개월 근무 가능',

        /* ---------- 패스웨이 운영 기관 ---------- */
        pwSecTitle: '패스웨이, 누가 운영하나요?',
        pwSecSub: '같은 "조건부입학"이라도 운영 주체가 다릅니다. 지원 전 어떤 기관이 운영하는 과정인지 확인하세요.',
        pwStep1: '패스웨이 지원 (SAT 불필요)',
        pwStep2: '1년: 영어 + 학점 과목 이수',
        pwStep3: '조건 충족 → 2학년 진학',
        pwSecNote: '※ 제휴 대학 목록은 수시로 바뀝니다. 각 운영사 공식 페이지에서 최신 목록을 확인하세요.',

        /* ---------- 커뮤니티칼리지 ---------- */
        ccSecTitle: '2+2 출발점, 주요 커뮤니티칼리지',
        ccSecSub: '편입 실적과 유학생 지원으로 검증된 대표 CC들입니다. 캘리포니아는 UC 편입, 워싱턴은 UW 편입 루트가 강합니다.',
        ccTagLabel: 'UC TAG(편입 보장)란?',
        ccTagDesc: '캘리포니아 CC에서 요건(지정 과목 + GPA)을 채우면 UC 데이비스 · 어바인 · 머세드 · 리버사이드 · 샌타바버라 · 샌타크루즈 6개 캠퍼스 중 한 곳의 편입이 보장되는 제도입니다. 국제학생도 대상이며, UCLA · 버클리 · 샌디에이고는 TAG 미참여로 일반 편입 경쟁을 거칩니다.',

        /* ---------- 대학 목록 ---------- */
        listTitle: (label) => label ? `${label} 계열, 어느 학교로?` : '주요 대학 한눈에 보기',
        listSub: (label) => label ? `경로 배지와 함께 ${label} 계열 강세 학교를 확인해 보세요. 학교명을 누르면 상세 정보가 열립니다.` : '경로 배지(Direct · 패스웨이 · 편입)와 함께 학교를 비교해 보세요. 학교명을 누르면 상세 정보가 열립니다.',
        filterAll: '전체',
        filterPw: '패스웨이 운영',
        filterTf: '편입 인기',
        filterDirect: 'Direct 중심',
        sortLabel: '정렬:',
        sortRank: 'US News 순',
        sortAz: '알파벳순',
        sortKo: '한글순',
        countNote: '순위는 US News Best Colleges 2026 기준',
        countLine: (n, p, ps) => `${n}개 대학 · ${p}/${ps} 페이지`,
        prevPage: '이전 페이지',
        nextPage: '다음 페이지',
        uniSub: (k, rank) => `${k} · 전미 ${rank}위`,
        schoolInfo: '학교 소개',
        officialView: '공식 페이지',
        routeDirect: 'Direct 전형',
        routeTf: '편입 인기',
        routeTf2: 'CC 편입 루트 활발',
        rankBadge: (rank) => `US News 2026 · 전미 ${rank}위`,
        modalSubName: (k) => k,
        statFounded: '설립',
        statCity: '위치',
        statStudents: '학생 수',
        topMajors: '강세 전공',
        ugRoutesLabel: '진입 경로',
        visitOfficial: '공식 입학 페이지 방문'
    },

    en: {
        docTitle: "US University Pathway Guide — Direct, Pathway & 2+2 Transfer | US Study Guide",
        docDesc: "A free, agency-neutral guide to US university entry built on US News 2026 data. Compare direct admission, pathway (conditional admission) and community-college 2+2 transfer routes.",

        navTagline: "US admissions AI",
        navUg: "Get my route",
        navRoutes: "Three routes",
        navHub: "Change country",
        themeDark: "Dark", themeLight: "Light",
        themeAria: "Toggle colour scheme", themeTitle: "Light / dark",
        langAria: "Choose language",

        heroTitle: "Your US degree,<br>planned by AI.",
        heroSub: 'Direct entry, pathway or 2+2 transfer — find the route that fits you<br class="hidden sm:block">in <strong class="text-white font-semibold">three minutes</strong>.',
        heroUgBtn: 'Find my route <span class="text-sm font-medium opacity-70">Direct · Pathway · 2+2</span>',
        heroRoutesBtn: 'See the three routes <i class="fa-solid fa-arrow-down text-sm opacity-80"></i>',
        homeImgAlt1: "A university campus building in the United States",
        homeTitle: "An impartial guide,<br>open to everyone.",
        homeDesc: "This is a free information page with no ties to any agency. Built on US News 2026 rankings and each university's published information, it helps you see for yourself which US route fits your grades, English and budget.",
        homeLi1: "School-by-school guidance built on <strong>US News 2026 rankings and 26/27 tuition data</strong>",
        homeLi2: "<strong>Side-by-side comparison</strong> of direct entry, pathways and 2+2 transfer",
        homeLi3: "<strong>Save and share your result with one link</strong>, with direct links to official pages",
        homeUgStart: "Start the assessment",
        homeRoutesStart: "See the routes",

        rSumTitle: 'Three roads to<br class="sm:hidden"> a US degree.',
        rSumSub: "The best route depends on your mix of grades, English and budget. Take the assessment and we'll point you to the one that fits.",
        rSumDirTitle: "Direct entry",
        rSumDirSub: "School → straight into year 1",
        rSumDirDesc: "Top school grades plus TOEFL 80–100+ are the baseline, and the most selective universities now require the SAT/ACT again. The heaviest preparation, but the most straightforward path.",
        rSumPwTitle: "Pathway (conditional admission)",
        rSumPwSub: "One year → into year 2",
        rSumPwDesc: "A route into good state universities without the SAT, open to mid-band grades and mid-level English. A year of English plus credit courses leads into year 2 — no time lost overall.",
        rSumTfTitle: "2+2 transfer (community college)",
        rSumTfSub: "2 years at a CC → junior year",
        rSumTfDesc: "Cut tuition to less than half while working toward a transfer into the UC system and other big names. UC TAG (guaranteed transfer to six campuses) is open to international students too. It all comes down to GPA.",
        rSumCta: 'Find my route <i class="fa-solid fa-arrow-right text-xs"></i>',

        srcTitle: "Always check<br>the official sources.",
        srcDesc: "This guide is a first step for setting direction. Entry requirements, tuition and visa rules change often — before any final decision, confirm the latest information through the official channels below.",
        srcLink1: "<strong>EducationUSA</strong> — official US Department of State study advising",
        srcLink2: "<strong>Common App</strong> — the shared US application system",
        srcLink3: "<strong>Study in the States</strong> — official DHS guidance on the F-1 visa",
        homeImgAlt2: "The American flag in a city street",
        footerCopy: "ⓒ US Study Guide. Built for information purposes.",
        footerDisclaimer: "This is a free information page with no ties to any agency or institution. Rankings follow US News Best Colleges 2026 (published September 2025); programme details, requirements and tuition follow each university's and provider's published information and can change each term. Always confirm the latest requirements on official pages before applying.",

        introUg: "Hello — this is the US Study Guide assessment.<br>Using US News 2026 data, let's find your route into a US bachelor's degree: <strong>direct entry, pathway or 2+2 transfer</strong>.",
        analyzing: "All set. Analysing your answers against the latest 26/27 US admissions data...",
        backPrev: '<i class="fa-solid fa-arrow-left text-[11px]"></i> Previous question',
        otherTestPrompt: "Choose the test you've taken. We'll convert your score to its TOEFL iBT equivalent.",
        customPrompt: 'Type the subject you have in mind and we\'ll match it to the closest field.<br><span class="block mt-2 text-[13px] text-gray-500">e.g. sport management, game design, physiotherapy, aviation</span>',
        customPlaceholder: "Type a subject (e.g. sport management)",
        customEmpty: "Please type a subject",
        customAnalyze: "Analyse this subject",
        backShort: "← Back",
        customMatched: (raw, label) => `'<strong>${raw}</strong>' sits closest to <strong>${label}</strong>. We'll analyse on that basis — check each university's official pages for exact programme names and availability.`,
        backToScores: "← Back to score options",
        scorePh: (type, min, max) => `Enter your ${type} score (${min}–${max})`,
        convertBtn: "Convert to TOEFL equivalent",
        scoreInvalid: (min, max) => `Enter a valid score (${min}–${max})`,
        scoreUser: (type, s) => `${type} ${s}`,
        scoreConverted: (type, s, toefl, bandLabel) => `${type} ${s} converts to roughly <strong>TOEFL iBT ${toefl}</strong>. We'll continue with the "${bandLabel}" band.`,
        copied: '<i class="fa-solid fa-check"></i> Copied!',

        resultCta: "Get free advice on this result",
        resultCopy: "Copy result link",
        resultRestart: "Start over",
        shareHint: "Your result is attached automatically when you request free advice. Copy the link to share the same result page by KakaoTalk or text.",
        ctaTitle: "Keep this result.",
        ctaSubUg: 'This is a first assessment built on US News 2026 data.<br class="hidden sm:block">It lives in a single link — share it with the family and friends thinking it through with you.',
        ctaFoot: 'Before applying, confirm the latest requirements via <a href="https://educationusa.state.gov/" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-white">EducationUSA</a>, the <a href="https://studyinthestates.dhs.gov/" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-white">official F-1 visa guidance</a> and each university\'s admissions office.',

        boardTitle: "Official links",
        boardSubUg: "For requirements, applications and visas, these official channels are the most accurate.",
        boardBtn: "Open EducationUSA",

        ugBadge: "Undergraduate route result",
        resultHeadUg: (title) => `Your recommended route is<br><span class="text-gold">"${title}"</span>.`,
        diagReason: "Why:",
        recChip: "Recommended for you",
        infoChip: "For reference",
        chipInput: "Your subject",
        chipField: "Chosen field",
        fmTitleCustom: (cm, label) => `'${cm}' → analysed as ${label}`,
        fmTitleField: (label) => `Popular majors in ${label}`,
        fmDescCustom: (cm, label) => `We analysed '${cm}' under the ${label} field. Below are the majors Korean students most often choose in this field — availability differs by university, so check official pages.`,
        fmDescField: "The majors Korean students most often choose in your field. Compare them against each school's strengths in the list below.",

        dirTitle: "Direct entry (freshman admission)",
        pwTitle: "Pathway (conditional admission)",
        tfTitle: "2+2 transfer (community college)",
        mixTitle: "Pathway or 2+2 — compare both",
        dirSubR: "With your grades you can go straight into year 1. Focus on choosing the right list of universities and polishing your essays.",
        pwSubR: "Enter a good state university without the SAT and move into year 2 after one year — no time lost overall.",
        tfSubR: "Spend two years at a community college building GPA at a fraction of the cost, then transfer into junior year at a four-year university.",
        mixSubR: "Both the pathway and the 2+2 route are open to you. Weigh them against your budget and target universities.",
        rDirect: "Your school grades and English scores make you competitive for direct entry. Add the SAT/ACT and the very top universities come into range.",
        rTfBudget: "Since keeping costs down matters most, starting at a community college (around $10,000 a year) is the rational route — and UC TAG can guarantee your transfer.",
        rTfTop: "Aiming high without the SAT, the transfer route beats freshman admission: UCLA and Berkeley transfers need no SAT — your CC GPA does the talking.",
        rPwFast: "You wanted a fast, predictable start, so we recommend a pathway: progression is guaranteed once you meet the conditions, and you live on the university campus from day one.",
        rPwFit: "With your current grades and English, a pathway — no SAT required — is your highest-probability route, moving into year 2 after one year with no time lost.",
        rMix: "Given your grades and English, a staged entry beats direct application. Choose between a pathway (campus life from day one) and 2+2 (lowest cost).",
        hs2Add: "With more than a year of school left, you also have time to prepare TOEFL and SAT and keep direct entry in play.",
        engNoneAdd: "You don't yet have an English score, so whichever route you choose, TOEFL (or IELTS/Duolingo) is step one.",
        satNoneAdd: "Note: universities that require testing (the Ivy League, MIT and others) will need SAT preparation.",

        routes3Title: "Three routes to a US bachelor's",
        routes3Sub: "Three roads to the same degree. Compare the entry bar, the cost and the timeline.",
        dirCardTitle: "Direct entry",
        dirCardSub: "School → year 1 · 4 years",
        dirLi1: "Top school grades + TOEFL 80–100+ as a baseline",
        dirLi2: "Essays, references and activities all assessed (Common App)",
        dirLi3: "Start as a freshman with full belonging from day one",
        dirLi4: "The most selective now require SAT/ACT (Harvard, MIT...)",
        dirMeta: "Timeline: ED/EA in early November, RD closing December–January for September entry. The higher you aim, the earlier you start.",
        pwCardTitle: "Pathway (conditional admission)",
        pwCardSub: "1-year pathway → year 2 · 4 years total",
        pwLi1: "No SAT · open to mid-band school grades",
        pwLi2: "Start from TOEFL 55–79 (varies by school)",
        pwLi3: "English + credit-bearing courses → no time lost",
        pwLi4: "Progression can slip if GPA/English conditions aren't met",
        pwMeta: "Run by universities themselves or by Shorelight, INTO and Kaplan. Intakes run two to three times a year.",
        tfCardTitle: "2+2 transfer (community college)",
        tfCardSub: "2 years at a CC → junior year · 4 years total",
        tfLi1: "Low entry bar · little weight on school grades",
        tfLi2: "CC tuition of $10,000–15,000 a year keeps costs minimal",
        tfLi3: "UC TAG guarantees transfer to six campuses (international students too)",
        tfLi4: "UCLA/Berkeley-level transfers compete at GPA 3.7+",
        tfMeta: "Transfer success rests on your CC GPA and major prerequisites. 93% of UCLA's admitted transfers come from California community colleges.",

        costTitle: "Annual costs at a glance",
        costSub: "International tuition for 2026-27 — the most practical variable in choosing a route.",
        costPrivate: "Private tuition",
        costPrivateNote: "Ivy League, NYU and peers; top names and some majors exceed $70K",
        costPublic: "Public tuition (non-resident)",
        costPublicNote: "Benchmarked on UC, Michigan, UW and other flagship publics",
        costCc: "Community college tuition",
        costCcNote: "Two years at less than half the four-year cost",
        costLiving: "Living costs (per year)",
        costLivingNote: "Housing, food and insurance; varies widely by city",
        costNote: "※ Figures vary by school, major and exchange rate. Confirm exact amounts on each university's Cost of Attendance page.",

        ugPrepTitle: "What do I need to prepare?",
        ugDocsTitle: "Core documents",
        ugDocsSub: "The basics, whichever route you take",
        ugDoc1: "School transcript and (expected) graduation certificate, in English",
        ugDoc2: "An English test score (TOEFL, IELTS or Duolingo)",
        ugDoc3: "SAT/ACT scores (for selective direct entry)",
        ugDoc4: "Personal statement and references (direct entry)",
        ugDoc5: "Proof of funds (bank statement) — required for the I-20",
        ugTimingTitle: "When to apply",
        ugTimingSub: "Timeline for September (fall) entry",
        ugTime1: "Direct: ED/EA the November before, RD closes December–January",
        ugTime2: "Pathway: two to three intakes a year; apply 3–6 months ahead",
        ugTime3: "CC: deadlines are forgiving — allow 3–6 months",
        ugTime4: "F-1 visa: apply up to 6 months before your course, once the I-20 arrives",
        visaF1: "F-1 student visa",
        visaF1Note: "I-20 → SEVIS fee $350 → DS-160 → interview (fee $185)",
        visaOpt: "OPT (post-study work)",
        visaOptNote: "Up to 12 months of work in your field after graduating",
        visaStem: "STEM OPT extension",
        visaStemNote: "STEM majors add 24 months — up to 36 months in total",

        pwSecTitle: "Who runs the pathways?",
        pwSecSub: "The same 'conditional admission' can be run by very different operators. Check who runs a programme before you apply.",
        pwStep1: "Apply to a pathway (no SAT)",
        pwStep2: "Year 1: English + credit courses",
        pwStep3: "Meet the conditions → year 2",
        pwSecNote: "※ Partner lists change often. Confirm the current list on each provider's official pages.",

        ccSecTitle: "Where 2+2 starts: the key community colleges",
        ccSecSub: "Colleges proven by transfer results and international support. California feeds the UC system; Washington feeds UW.",
        ccTagLabel: "What is UC TAG?",
        ccTagDesc: "Complete the required courses and GPA at a California community college and your transfer is guaranteed to one of six UC campuses — Davis, Irvine, Merced, Riverside, Santa Barbara or Santa Cruz. International students qualify too. UCLA, Berkeley and San Diego sit outside TAG, so those transfers stay competitive.",

        listTitle: (label) => label ? `${label}: which school?` : "The key universities at a glance",
        listSub: (label) => label ? `Compare schools strong in ${label}, with route badges. Tap a school name for details.` : "Compare schools with their route badges (direct, pathway, transfer). Tap a school name for details.",
        filterAll: "All",
        filterPw: "Runs a pathway",
        filterTf: "Transfer favourite",
        filterDirect: "Direct-focused",
        sortLabel: "Sort:",
        sortRank: "US News rank",
        sortAz: "A–Z",
        sortKo: "Korean name",
        countNote: "Rankings follow US News Best Colleges 2026",
        countLine: (n, p, ps) => `${n} universities · page ${p}/${ps}`,
        prevPage: "Previous page",
        nextPage: "Next page",
        uniSub: (k, rank) => `US #${rank}`,
        schoolInfo: "About",
        officialView: "Official page",
        routeDirect: "Direct entry",
        routeTf: "Transfer favourite",
        routeTf2: "Active CC transfer route",
        rankBadge: (rank) => `US News 2026 · #${rank} national`,
        modalSubName: (k) => tr(k),
        statFounded: "Founded",
        statCity: "Location",
        statStudents: "Students",
        topMajors: "Strong majors",
        ugRoutesLabel: "Entry routes",
        visitOfficial: "Visit official admissions page"
    }
};

/* ───────── 데이터 문자열 번역 (tr) ─────────
 * JS 데이터(질문·대학·CC·기관)는 한글 원문이 키. 영어 모드에서만 치환한다. */
const DATA_EN = {
    /* --- 질문 · 선택지 --- */
    "현재 학업 상태를 알려주세요.": "Where are you in school right now?",
    "고등학교 2학년 재학 · 수료 예정": "Second-to-last school year, finishing soon",
    "고3 재학 · 졸업 예정": "In the final year, graduating soon",
    "고교 졸업 (검정고시 포함)": "Finished school (incl. equivalency exam)",
    "해외고 · 국제학교 (AP · IB 등)": "International school / school abroad (AP, IB...)",
    "고교 내신 성적대는 어느 정도인가요?": "Roughly where do your school grades sit?",
    "상위권 (1 ~ 2등급대)": "Top band (grades 1–2)",
    "중상위권 (3 ~ 4등급대)": "Upper-middle band (grades 3–4)",
    "중위권 이하 (5등급대~)": "Middle band or below (grade 5+)",
    "검정고시 · 산출 어려움": "Equivalency exam / hard to certify",
    "※ Direct는 내신·에세이·활동을 종합 평가하고, 패스웨이·CC는 성적 기준이 상대적으로 낮습니다.":
        "Direct entry weighs grades, essays and activities together; pathways and CCs set a lower bar.",
    'SAT · ACT 준비 상황을 알려주세요.<br><span class="block mt-3 text-[13px] text-gray-500 leading-relaxed">※ 2026-27 기준 아이비리그·MIT·스탠퍼드 등 최상위권은 SAT/ACT 필수입니다. 패스웨이·CC 편입은 필요하지 않습니다.</span>':
        'Where are you with the SAT/ACT?<br><span class="block mt-3 text-[13px] text-gray-500 leading-relaxed">For 2026-27 the most selective universities — the Ivy League, MIT, Stanford — require the SAT/ACT. Pathways and CC transfer do not.</span>',
    "SAT 1400+ · ACT 30+ 보유": "SAT 1400+ / ACT 30+ in hand",
    "SAT 1200~1390대 보유": "SAT in the 1200–1390 range",
    "준비 중 · 응시 예정": "Preparing / planning to sit it",
    "없음 · 계획 없음": "None, and not planning to",
    '공인 영어 성적(TOEFL 등)이 있으신가요?<br><span class="block mt-3 text-[13px] text-gray-500 leading-relaxed">※ Direct는 보통 TOEFL 80~100+, 패스웨이는 55~79 수준부터 지원 가능합니다. 세부 기준은 학교마다 다릅니다.</span>':
        'Do you hold an English test result (TOEFL or similar)?<br><span class="block mt-3 text-[13px] text-gray-500 leading-relaxed">Direct entry usually asks TOEFL 80–100+; pathways open from around 55–79. Exact requirements differ by school.</span>',
    "TOEFL 80+ (IELTS 6.5+)": "TOEFL 80+ (IELTS 6.5+)",
    "TOEFL 60 ~ 79 (IELTS 5.5 ~ 6.0)": "TOEFL 60–79 (IELTS 5.5–6.0)",
    "아직 없음 / 준비 전": "Not yet",
    "기타 (IELTS · Duolingo · PTE 환산)": "Other (convert IELTS · Duolingo · PTE)",
    "희망하는 전공 계열을 선택해주세요.": "Which subject area are you aiming for?",
    "경영 · 경제 · 금융": "Business · Economics · Finance",
    "공학 (기계 · 전자 · 토목 등)": "Engineering (mechanical, electrical, civil...)",
    "컴퓨터 · 데이터 · AI": "Computing · Data · AI",
    "사회과학 · 미디어 · 국제관계": "Social sciences · Media · International relations",
    "자연과학 · 수학": "Natural sciences · Mathematics",
    "인문 · 어학 · 예술": "Humanities · Languages · Arts",
    "찾는 계열이 없어요 · 특수 전공 직접 입력": "My subject isn't listed — type it in",
    "연간 유학 예산(학비+생활비)은 어느 정도인가요?": "What's your annual budget (tuition + living)?",
    "연 $70,000 이상 (사립 포함 자유)": "$70,000+ a year (privates included)",
    "연 $45,000 ~ 70,000 (주립 중심)": "$45,000–70,000 a year (mainly publics)",
    "학비 절감이 중요 (연 $45,000 이하)": "Keeping costs down (under $45,000)",
    "※ 사립 학비 연 $55,000~68,000+, 주립 $30,000~50,000, CC $10,000~15,000 수준입니다 (생활비 별도).":
        "Roughly: privates $55,000–68,000+, publics $30,000–50,000, CCs $10,000–15,000 a year (living costs on top).",
    "진학에서 가장 중요하게 생각하는 기준은 무엇인가요?": "What matters most in your choice?",
    "최상위권 도전 (Top 30)": "Aiming for the very top (Top 30)",
    "랭킹과 합격 안정성의 균형": "A balance of ranking and a safe offer",
    "빠른 적응 · 안정적인 진학": "Settling in fast, with a sure route",

    /* --- 계열 라벨 · 추천 전공 --- */
    "경영학 (Business Administration)": "Business Administration",
    "경제학 (Economics)": "Economics",
    "회계학 (Accounting)": "Accounting",
    "재무 (Finance)": "Finance",
    "마케팅 (Marketing)": "Marketing",
    "기계공학 (Mechanical Eng.)": "Mechanical Engineering",
    "전기 · 전자공학 (Electrical Eng.)": "Electrical Engineering",
    "토목공학 (Civil Eng.)": "Civil Engineering",
    "항공우주공학 (Aerospace Eng.)": "Aerospace Engineering",
    "화학공학 (Chemical Eng.)": "Chemical Engineering",
    "컴퓨터과학 (Computer Science)": "Computer Science",
    "인공지능 (Artificial Intelligence)": "Artificial Intelligence",
    "데이터사이언스 (Data Science)": "Data Science",
    "소프트웨어공학 (Software Eng.)": "Software Engineering",
    "사이버보안 (Cybersecurity)": "Cybersecurity",
    "국제관계학 (International Relations)": "International Relations",
    "정치학 (Political Science)": "Political Science",
    "커뮤니케이션 (Communication)": "Communication",
    "사회학 (Sociology)": "Sociology",
    "심리학 (Psychology)": "Psychology",
    "수학 (Mathematics)": "Mathematics",
    "물리학 (Physics)": "Physics",
    "화학 (Chemistry)": "Chemistry",
    "생명과학 (Biology)": "Biology",
    "통계학 (Statistics)": "Statistics",
    "영문학 (English)": "English",
    "역사학 (History)": "History",
    "철학 (Philosophy)": "Philosophy",
    "건축학 (Architecture)": "Architecture",
    "디자인 (Design)": "Design",
    "영화 (Film Studies)": "Film Studies",

    /* --- 공식 링크 --- */
    "EducationUSA — 미 국무부 공식 유학 안내 (장학금 · 준비 절차)": "EducationUSA — official US State Department study advising (scholarships, planning)",
    "Study in the States — 국토안보부 F-1 학생비자 공식 안내": "Study in the States — official DHS guidance on the F-1 student visa",
    "US News Best Colleges — 최신 대학 순위 확인": "US News Best Colleges — check the latest rankings",
    "Common App — 미국 대학 공통 지원 시스템": "Common App — the shared US application system",
    "University of California — 편입(Transfer) 공식 안내 · TAG": "University of California — official transfer guidance · TAG",

    /* --- 패스웨이 운영 기관 --- */
    "전미 최대급 · 20여 개 제휴": "US-wide network · 20+ partners",
    "캠퍼스 내 센터 운영": "On-campus centres",
    "글로벌 패스웨이 운영사": "Global pathway operator",
    "대학이 직접 운영": "Run by the university itself",
    "American · Auburn · UIC · FIU · Gonzaga · LSU · UCF · U of South Carolina · Utah · UMass Boston · UTSA 등":
        "American · Auburn · UIC · FIU · Gonzaga · LSU · UCF · U of South Carolina · Utah · UMass Boston · UTSA and more",
    "Oregon State · George Mason · Hofstra · Suffolk · Drew · UAB (버밍엄 앨라배마)":
        "Oregon State · George Mason · Hofstra · Suffolk · Drew · UAB (Alabama at Birmingham)",
    "Arizona State(ASU) · Pace · Simmons · UConn · Tulsa":
        "Arizona State (ASU) · Pace · Simmons · UConn · Tulsa",
    "UC Davis GAP(편입 준비형) · UCSB IUPP · San Francisco State IY1 등":
        "UC Davis GAP (transfer-prep) · UCSB IUPP · San Francisco State IY1 and more",
    "대학 직영 패스웨이": "University-run pathways",

    /* --- 커뮤니티칼리지 --- */
    "샌타모니카 칼리지": "Santa Monica College",
    "디앤자 칼리지": "De Anza College",
    "디아블로 밸리 칼리지": "Diablo Valley College",
    "어바인 밸리 칼리지": "Irvine Valley College",
    "벨뷰 칼리지": "Bellevue College",
    "에드먼즈 칼리지": "Edmonds College",
    "시애틀 센트럴 칼리지": "Seattle Central College",
    "그린리버 칼리지": "Green River College",
    "캘리포니아 · LA": "California · Los Angeles",
    "캘리포니아 · 실리콘밸리": "California · Silicon Valley",
    "캘리포니아 · 베이에리어": "California · Bay Area",
    "캘리포니아 · 어바인": "California · Irvine",
    "워싱턴 · 시애틀 동부": "Washington · east of Seattle",
    "워싱턴 · 시애틀 북부": "Washington · north of Seattle",
    "워싱턴 · 시애틀 도심": "Washington · central Seattle",
    "워싱턴 · 오번": "Washington · Auburn",
    "UCLA 편입 전미 최다 배출로 유명한 대표 CC. UC TAG 지원.": "Famous for sending more transfers to UCLA than any other college. Supports UC TAG.",
    "UC 편입 실적 최상위권. 쿠퍼티노 위치로 CS 계열 인기.": "Among the very best UC transfer records; its Cupertino location makes computing subjects popular.",
    "UC Berkeley 인접 지역. 버클리 편입 다수 배출.": "In the Berkeley area, with a strong record of transfers into UC Berkeley.",
    "UC Irvine 인접. 안전한 도시 환경으로 유학생 선호.": "Next to UC Irvine, in a safe planned city that international students favour.",
    "UW 시애틀 편입 1위 CC. 2026년 WWU 편입 보장(GPA 2.5+) 협약.": "The #1 feeder into UW Seattle; a 2026 agreement guarantees transfer to Western Washington at GPA 2.5+.",
    "캠퍼스 기숙사 보유. 고교 미졸업자 대상 프로그램도 운영.": "Has on-campus housing and runs programmes for students who haven't finished high school.",
    "도심 캠퍼스로 접근성 우수. 편입 준비 과정이 체계적.": "A central-city campus with well-organised transfer preparation.",
    "유학생 지원이 두터운 CC. 대학 편입 트랙 운영 오랜 역사.": "Strong international-student support and a long-running university transfer track.",

    /* --- 대학 한글명 --- */
    "매사추세츠공과대학교": "MIT",
    "하버드대학교": "Harvard",
    "스탠퍼드대학교": "Stanford",
    "UC 버클리": "UC Berkeley",
    "UCLA": "UCLA",
    "미시간대학교 (앤아버)": "Michigan (Ann Arbor)",
    "UC 샌디에이고": "UC San Diego",
    "뉴욕대학교": "NYU",
    "UC 데이비스": "UC Davis",
    "UC 어바인": "UC Irvine",
    "일리노이대학교 어배너-섐페인": "Illinois Urbana-Champaign",
    "위스콘신대학교 매디슨": "Wisconsin–Madison",
    "UC 샌타바버라": "UC Santa Barbara",
    "오하이오주립대학교": "Ohio State",
    "워싱턴대학교 (시애틀)": "Washington (Seattle)",
    "럿거스대학교 뉴브런즈윅": "Rutgers–New Brunswick",
    "퍼듀대학교": "Purdue",
    "코네티컷대학교": "UConn",
    "스토니브룩대학교 (뉴욕주립대)": "Stony Brook (SUNY)",
    "스토니브룩대학교": "Stony Brook",
    "일리노이대학교 시카고": "Illinois Chicago",
    "아메리칸대학교": "American University",
    "플로리다국제대학교": "Florida International",
    "오번대학교": "Auburn",
    "조지메이슨대학교": "George Mason",
    "애리조나주립대학교": "Arizona State",
    "유타대학교": "Utah",
    "오리건주립대학교": "Oregon State",
    "매사추세츠대학교 보스턴": "UMass Boston",

    /* --- 패스웨이 과정명 --- */
    "UC Davis GAP (직영 · 편입 준비형)": "UC Davis GAP (university-run, transfer-prep)",
    "UCSB IUPP (직영 패스웨이)": "UCSB IUPP (university-run pathway)",
    "UConn 패스웨이 (Kaplan 운영)": "UConn pathway (run by Kaplan)",
    "국제학생 프로그램 (Shorelight 지원)": "International programme (with Shorelight)",
    "UIC Global (Shorelight)": "UIC Global (Shorelight)",
    "AU Pathway (Shorelight)": "AU Pathway (Shorelight)",
    "FIU Global First Year (Shorelight)": "FIU Global First Year (Shorelight)",
    "Auburn Global (Shorelight)": "Auburn Global (Shorelight)",
    "INTO Mason (캠퍼스 내)": "INTO Mason (on campus)",
    "ASU-USA Pathways (Kaplan)": "ASU-USA Pathways (Kaplan)",
    "Utah Global (Shorelight)": "Utah Global (Shorelight)",
    "INTO OSU (캠퍼스 내)": "INTO OSU (on campus)",
    "UMass Boston 패스웨이 (Shorelight)": "UMass Boston pathway (Shorelight)",

    /* --- 대학 노트 (목록 행 · 모달) --- */
    "패스웨이·편입 문이 사실상 닫혀 있는 세계 최상위 공대. SAT/ACT 필수이며 Direct 전형으로만 승부합니다.":
        "The world's top engineering school, with pathway and transfer doors effectively closed. SAT/ACT required — direct entry is the only game.",
    "2026-27 사이클부터 SAT/ACT 필수. 내신 최상위 + 에세이·활동까지 갖춘 Direct 전형만 운영합니다.":
        "Requires the SAT/ACT from the 2026-27 cycle. Direct entry only, demanding top grades plus essays and activities.",
    "실리콘밸리 중심의 최상위 명문. SAT/ACT 필수화, 편입 정원도 극소수라 Direct 준비가 기본입니다.":
        "The elite of Silicon Valley. SAT/ACT required and transfer places are scarce — prepare for direct entry.",
    "신입 경쟁이 극심하지만 캘리포니아 CC 출신 편입생을 대규모로 선발합니다. TAG 미참여라 편입 GPA 3.7+ 관리가 관건입니다.":
        "Freshman entry is brutal, but it admits transfers from California CCs at scale. Outside TAG, so a 3.7+ transfer GPA is the key.",
    "편입 합격자의 93%가 캘리포니아 CC 출신. 샌타모니카·디앤자 등에서 2+2로 진입하는 대표 명문입니다.":
        "93% of admitted transfers come from California CCs — the classic 2+2 destination from Santa Monica, De Anza and peers.",
    "공대·경영 모두 최상위권 주립 명문. Direct가 기본이며 타주 CC 출신 편입도 받지만 경쟁이 높습니다.":
        "A flagship public elite in both engineering and business. Direct entry is standard; transfers are possible but competitive.",
    "이공계 강세 UC. TAG 미참여이지만 CC 편입 루트가 활발해 2+2 목적지로 인기가 높습니다.":
        "A STEM-strong UC. Outside TAG, but its active CC transfer route makes it a popular 2+2 destination.",
    "맨해튼 도심 캠퍼스의 글로벌 사립. 편입생 선발 규모가 큰 편이라 CC·타 대학 경유 진입도 현실적입니다.":
        "A global private in the heart of Manhattan. It admits transfers in volume, so arriving via a CC or another university is realistic.",
    "UC TAG 참여 캠퍼스. 대학이 직접 운영하는 GAP 과정에서 영어·학점을 쌓아 UC 편입을 준비할 수 있습니다.":
        "A UC TAG campus. Its own GAP programme builds English and credits toward a UC transfer.",
    "UC TAG 참여 캠퍼스로 CC에서 요건 충족 시 편입이 보장됩니다. 한인 인프라가 잘 갖춰진 지역입니다.":
        "A UC TAG campus — meet the requirements at a CC and your transfer is guaranteed. The area has a well-established Korean community.",
    "CS·공학 최상위권 주립. Direct 전형이 기본이며 국제학생 지원 규모가 큰 대학입니다.":
        "A top public for CS and engineering. Direct entry is the norm, with a large international applicant pool.",
    "연구 중심 명문 주립. 국내 유학원 통계에서도 국제전형 합격 사례가 꾸준한 학교입니다.":
        "A research-driven flagship public with a steady record of international admits from Korea.",
    "UC TAG 참여 + 대학 직영 패스웨이(IUPP: GPA 2.7, TOEFL 75)까지 보유한 드문 UC 캠퍼스입니다.":
        "A rare UC campus with both TAG membership and its own pathway (IUPP: GPA 2.7, TOEFL 75).",
    "미국 최대급 규모의 주립 명문. 신입생 학비 동결 보장(Tuition Guarantee) 제도가 특징입니다.":
        "One of America's largest publics, known for its Tuition Guarantee freezing costs at entry rates.",
    "CS·의생명 강세. 벨뷰 칼리지 등 워싱턴주 CC에서의 편입 루트가 가장 활발한 학교 중 하나입니다.":
        "Strong in CS and biomedicine, and one of the most active transfer destinations from Washington CCs such as Bellevue College.",
    "뉴욕 생활권의 대형 주립. 국제학생 전형 문호가 넓어 합격 사례가 많은 학교입니다.":
        "A big public within reach of New York, with a wide door for international applicants.",
    "공학 명문 주립. 학비가 합리적이었으나 26-27부터 공대·CS 국제학생 추가 비용이 도입됐습니다.":
        "An engineering-famous public. Long affordable, though 26-27 introduces surcharges for international engineering and CS students.",
    "동부 명문 주립. Kaplan 운영 패스웨이로 SAT 없이 진입해 2학년으로 진학할 수 있습니다.":
        "A respected eastern public. Its Kaplan-run pathway leads into year 2 without the SAT.",
    "SUNY 플래그십급 연구 중심 대학. 국내 패스웨이 합격 사례가 많은 대표 학교입니다.":
        "A flagship-calibre SUNY research university, and a staple of Korean pathway admits.",
    "시카고 도심의 연구 중심 주립. Shorelight 운영 패스웨이로 영어 성적 부담을 낮춰 진입합니다.":
        "A research public in central Chicago; its Shorelight pathway lowers the English-score bar for entry.",
    "국제관계·정치 특화 명문. 워싱턴 D.C. 소재로 인턴십 기회가 풍부합니다.":
        "A specialist in international relations and politics, rich in internships thanks to its Washington, D.C. address.",
    "마이애미 소재 대형 주립. 경영·호스피탈리티 강세로 패스웨이 진입 장벽이 낮은 편입니다.":
        "A large Miami public, strong in business and hospitality, with a comparatively low pathway bar.",
    "남부 전통 명문 주립. Auburn Global 패스웨이로 공학·경영 전공 진입이 활발합니다.":
        "A traditional southern public; the Auburn Global pathway feeds actively into engineering and business.",
    "워싱턴 D.C. 생활권 주립. INTO 캠퍼스 센터에서 패스웨이 수료 후 2학년 진학이 표준 루트입니다.":
        "A public in the D.C. orbit; completing the on-campus INTO pathway and entering year 2 is the standard route.",
    "혁신 대학 평가 전미 1위 단골. 유연한 국제전형과 Kaplan 패스웨이(IELTS 5.5~)를 함께 운영합니다.":
        "A perennial #1 for innovation. Runs flexible international admission alongside a Kaplan pathway from IELTS 5.5.",
    "유타주 플래그십. 아시아 캠퍼스(송도) 연계로 한국 학생에게 익숙한 주립 명문입니다.":
        "Utah's flagship, familiar to Korean students through its Asia campus in Songdo, Incheon.",
    "INTO 미국 1호 캠퍼스 센터. 공학·컴퓨터 전공의 패스웨이 진입 사례가 오래 축적돼 있습니다.":
        "Home to INTO's first US campus centre, with a long record of pathway entries into engineering and computing.",
    "보스턴 도심 주립. 진입 장벽이 낮고 보스턴 생활권에서 편입·대학원 진학의 발판으로 활용됩니다.":
        "A central-Boston public with a low entry bar, often used as a stepping stone to transfers and graduate study in Boston.",

    /* --- 대학 상세 (모달) --- */
    "1861년": "1861", "1636년": "1636", "1885년": "1885", "1868년": "1868", "1919년": "1919",
    "1817년": "1817", "1960년": "1960", "1831년": "1831", "1905년": "1905", "1965년": "1965",
    "1867년": "1867", "1848년": "1848", "1909년": "1909", "1870년": "1870", "1766년": "1766",
    "1869년": "1869", "1881년": "1881", "1957년": "1957", "1982년": "1982", "1893년": "1893",
    "1856년": "1856", "1949년": "1949", "1850년": "1850", "1964년": "1964",
    "매사추세츠 케임브리지": "Cambridge, Massachusetts",
    "캘리포니아 스탠퍼드": "Stanford, California",
    "캘리포니아 버클리": "Berkeley, California",
    "캘리포니아 로스앤젤레스": "Los Angeles, California",
    "미시간 앤아버": "Ann Arbor, Michigan",
    "캘리포니아 샌디에이고 라호이아": "La Jolla, San Diego, California",
    "뉴욕 맨해튼": "Manhattan, New York",
    "캘리포니아 데이비스": "Davis, California",
    "캘리포니아 어바인": "Irvine, California",
    "일리노이 어배너-섐페인": "Urbana-Champaign, Illinois",
    "위스콘신 매디슨": "Madison, Wisconsin",
    "캘리포니아 샌타바버라": "Santa Barbara, California",
    "오하이오 콜럼버스": "Columbus, Ohio",
    "워싱턴 시애틀": "Seattle, Washington",
    "뉴저지 뉴브런즈윅": "New Brunswick, New Jersey",
    "인디애나 웨스트라피엣": "West Lafayette, Indiana",
    "코네티컷 스토어스": "Storrs, Connecticut",
    "뉴욕 스토니브룩": "Stony Brook, New York",
    "일리노이 시카고": "Chicago, Illinois",
    "워싱턴 D.C.": "Washington, D.C.",
    "플로리다 마이애미": "Miami, Florida",
    "앨라배마 오번": "Auburn, Alabama",
    "버지니아 페어팩스": "Fairfax, Virginia",
    "애리조나 템피": "Tempe, Arizona",
    "유타 솔트레이크시티": "Salt Lake City, Utah",
    "오리건 코밸리스": "Corvallis, Oregon",
    "매사추세츠 보스턴": "Boston, Massachusetts",
    "약 11,900명": "c. 11,900", "약 25,000명": "c. 25,000", "약 17,000명": "c. 17,000",
    "약 45,000명": "c. 45,000", "약 46,000명": "c. 46,000", "약 52,000명": "c. 52,000",
    "약 42,000명": "c. 42,000", "약 59,000명": "c. 59,000", "약 40,000명": "c. 40,000",
    "약 36,000명": "c. 36,000", "약 56,000명": "c. 56,000", "약 50,000명": "c. 50,000",
    "약 26,000명": "c. 26,000", "약 66,000명": "c. 66,000", "약 32,000명": "c. 32,000",
    "약 34,000명": "c. 34,000", "약 14,000명": "c. 14,000", "약 58,000명": "c. 58,000",
    "약 30,000명": "c. 30,000", "약 39,000명": "c. 39,000", "약 80,000명": "c. 80,000",
    "약 33,000명": "c. 33,000", "약 16,000명": "c. 16,000",

    /* --- 강세 전공 배지 --- */
    "컴퓨터과학": "Computer Science", "전기공학": "Electrical Engineering", "기계공학": "Mechanical Engineering",
    "수학": "Mathematics", "물리학": "Physics", "경제학": "Economics", "정치학": "Political Science",
    "생명과학": "Biological Sciences", "역사학": "History", "심리학": "Psychology", "공학": "Engineering",
    "경영과학": "Management Science", "EECS(전기·컴퓨터)": "EECS", "데이터사이언스": "Data Science",
    "화학": "Chemistry", "영화·미디어": "Film & Media", "경영학(Ross)": "Business (Ross)",
    "인지과학": "Cognitive Science", "바이오공학": "Bioengineering", "경영학(Stern)": "Business (Stern)",
    "영화(Tisch)": "Film (Tisch)", "미디어": "Media", "농업·환경": "Agriculture & Environment",
    "수의예과": "Pre-Veterinary", "경영학": "Business", "공중보건": "Public Health", "회계학": "Accounting",
    "통계학": "Statistics", "교육학": "Education", "언론학": "Journalism", "화학공학": "Chemical Engineering",
    "커뮤니케이션": "Communication", "환경과학": "Environmental Science", "보건과학": "Health Sciences",
    "의생명과학": "Biomedical Sciences", "간호학": "Nursing", "항공우주공학": "Aerospace Engineering",
    "약학": "Pharmacy", "스포츠매니지먼트": "Sport Management", "응용수학": "Applied Mathematics",
    "의예 트랙": "Pre-Med Track", "건축학": "Architecture", "국제관계학": "International Relations",
    "저널리즘": "Journalism", "공공정책": "Public Policy", "호스피탈리티": "Hospitality",
    "국제경영": "International Business", "항공학": "Aviation", "정보기술": "Information Technology",
    "정책학": "Policy Studies", "디자인": "Design", "게임개발": "Game Development",
    "의생명": "Biomedicine", "무용·영화": "Dance & Film", "임학·해양": "Forestry & Ocean Sciences",
    "농업과학": "Agricultural Sciences",

    /* --- 대학 소개 (모달 본문) --- */
    "공학·과학 분야 세계 최정상 연구 대학. 노벨상 수상자를 100명 가까이 배출했으며, 국제학생도 SAT/ACT와 최상위 성적으로만 선발하는 Direct 전형의 정점입니다.":
        "The world's summit for engineering and science, with close to a hundred Nobel laureates. International students, too, are selected purely on top scores and the SAT/ACT — direct entry at its purest.",
    "미국에서 가장 오래된 대학이자 세계 최고 수준의 종합 명문. 학부는 리버럴아츠 중심으로 운영되며 재정보조가 필요 기반(need-based)으로 제공됩니다.":
        "America's oldest university and a global benchmark. The college runs on a liberal-arts model, and financial aid is need-based.",
    "실리콘밸리 한가운데 자리한 혁신의 산실. 창업·테크 생태계와의 연결이 압도적이며 CS·공학 전공의 세계적 정점으로 꼽힙니다.":
        "The cradle of innovation in the middle of Silicon Valley, unmatched in its links to the startup and tech world and a global peak for CS and engineering.",
    "공립대학 세계 1위를 다투는 UC 시스템의 간판. 신입 국제전형은 극도로 치열하지만, 캘리포니아 CC에서 GPA를 만든 편입생에게는 상대적으로 넓은 문이 열립니다.":
        "The face of the UC system, trading blows for the world's best public. Freshman international entry is ferocious, but the door opens wider for transfers who built a GPA at a California CC.",
    "미국에서 지원자가 가장 많은 대학. 편입 합격자의 93%가 캘리포니아 CC 출신으로, 2+2 루트의 최종 목적지로 가장 사랑받는 명문입니다.":
        "America's most-applied-to university. With 93% of admitted transfers coming from California CCs, it is the best-loved final destination of the 2+2 route.",
    "'퍼블릭 아이비'의 대표주자. 공대와 로스 경영대가 모두 최상위권이며 대학 스포츠·동문 네트워크 등 미국 대학 문화의 정수를 경험할 수 있습니다.":
        "The archetypal Public Ivy. Engineering and the Ross business school both sit at the top, and campus sports and the alumni network deliver American college culture at full strength.",
    "바이오·의공학 연구 클러스터와 맞닿은 이공계 강세 UC. 태평양이 보이는 라호이아 캠퍼스와 안정적인 연구 인프라가 강점입니다.":
        "A STEM-strong UC beside a biotech and bioengineering research cluster, with a Pacific-view campus in La Jolla and deep research infrastructure.",
    "맨해튼 그리니치빌리지가 곧 캠퍼스인 글로벌 사립. Stern 경영대와 Tisch 예술대가 간판이며 국제학생 비율이 미국 최상위권입니다.":
        "A global private whose campus is Greenwich Village itself. Stern (business) and Tisch (arts) are the flagships, and its share of international students is among America's highest.",
    "수의학·농생명 분야 세계 최상위권 UC. TAG 참여 캠퍼스인 데다 직영 패스웨이(GAP)까지 운영해 국제학생의 단계적 진입로가 가장 잘 갖춰져 있습니다.":
        "A UC at the world's top in veterinary and agricultural life sciences. A TAG campus that also runs its own pathway (GAP), giving international students the best-paved staged entry.",
    "계획도시 어바인의 안전한 환경과 한인 인프라로 유학 생활 만족도가 높은 UC. TAG 참여 캠퍼스라 CC 편입 보장 루트의 대표 목적지입니다.":
        "A UC prized for the safety of planned-city Irvine and its Korean community. As a TAG campus, it is the signature destination of the guaranteed CC transfer route.",
    "CS 전공 세계 최상위권의 연구 중심 주립. 그레인저 공대의 위상이 압도적이며 한국 유학생 커뮤니티도 오래 자리 잡혀 있습니다.":
        "A research public whose CS programme ranks with the world's best. The Grainger College of Engineering towers over the field, and the Korean student community is long established.",
    "호수를 낀 대학도시 매디슨의 연구 명문. 사회과학부터 공학까지 고르게 강하며 국제전형 합격 사례가 꾸준한 학교입니다.":
        "A research name in the lakeside college town of Madison, evenly strong from social sciences to engineering, with a steady record of international admits.",
    "노벨상 수상 교수진과 해변 캠퍼스로 유명한 UC. TAG 참여에 직영 패스웨이(IUPP)까지 갖춰 성적대별 진입 선택지가 넓습니다.":
        "A UC famous for Nobel-winning faculty and a beachside campus. With TAG membership plus its own pathway (IUPP), it offers entry options across the grade range.",
    "단일 캠퍼스 기준 미국 최대급 주립. 입학 연도 학비를 졸업까지 동결하는 Tuition Guarantee로 재정 계획을 세우기 좋습니다.":
        "One of America's largest single-campus publics. Its Tuition Guarantee freezes entry-year rates through graduation, making financial planning easier.",
    "아마존·마이크로소프트 생활권의 연구 명문. 신입 국제전형 경쟁이 높아, 벨뷰 등 지역 CC에서 2년 후 편입하는 루트가 한국 학생의 단골 전략입니다.":
        "A research power in the Amazon–Microsoft corridor. Freshman international entry is fierce, so two years at a local CC such as Bellevue before transferring is the classic Korean strategy.",
    "미국 독립 이전에 세워진 유서 깊은 주립. 뉴욕 맨해튼까지 기차로 접근 가능한 위치와 폭넓은 전공 선택지가 강점입니다.":
        "A storied public founded before American independence, within train reach of Manhattan and broad in its choice of majors.",
    "닐 암스트롱을 배출한 공학 명문. 오랜 학비 동결 정책으로 주립 중 가성비가 뛰어났으며, 공학 계열 국제학생 선호도가 매우 높습니다.":
        "The engineering school of Neil Armstrong. Years of frozen tuition made it the value pick among publics, and international demand for its engineering remains very high.",
    "뉴잉글랜드의 대표 주립. 농구 명문으로도 유명하며 Kaplan 패스웨이를 통해 SAT 없이 단계적으로 진입할 수 있습니다.":
        "New England's flagship public, famous for basketball, with a Kaplan pathway offering staged entry without the SAT.",
    "뉴욕주립대(SUNY) 시스템의 연구 간판. 이공계 위상 대비 학비가 합리적이라 국제학생 패스웨이 합격 사례가 많습니다.":
        "The research face of the SUNY system. Its STEM standing outruns its price, which keeps international pathway admits coming.",
    "시카고 도심의 연구 중심 주립. 대도시 인턴십 접근성이 좋고 Shorelight 패스웨이로 영어 부담을 낮춰 시작할 수 있습니다.":
        "A research public in central Chicago with big-city internships close at hand; its Shorelight pathway softens the English requirement at the start.",
    "국제관계·정치 분야 특화 사립. 백악관·국제기구가 이웃인 워싱턴 D.C. 입지 덕분에 재학 중 인턴십 기회가 풍부합니다.":
        "A private specialising in international affairs and politics. With the White House and international bodies as neighbours, internships come with the territory.",
    "마이애미의 대형 주립. 호텔·관광 계열이 전미 최상위권이며 중남미 비즈니스 허브라는 지역 특성을 살린 전공이 강합니다.":
        "Miami's big public. Hospitality ranks among America's best, and its majors draw on the city's role as the business hub of Latin America.",
    "미국 남부의 전통 명문 주립. 안전한 대학 도시와 탄탄한 공학 커리큘럼으로 패스웨이 경유 진학 만족도가 높습니다.":
        "A traditional public of the American South. A safe college town and solid engineering keep pathway students satisfied.",
    "워싱턴 D.C. 근교의 성장형 주립. 경제학과가 유명하고 INTO 캠퍼스 센터가 안정적으로 운영되는 대표 패스웨이 학교입니다.":
        "A fast-growing public near Washington, D.C. Known for economics, with a stable on-campus INTO centre — a flagship pathway school.",
    "US News '가장 혁신적인 대학' 1위에 수년 연속 오른 초대형 주립. 국제학생 문호가 넓고 온라인·패스웨이 등 진입 방식이 다양합니다.":
        "A mega-public ranked US News's most innovative university year after year. The door is wide for international students, with online, pathway and other ways in.",
    "게임 개발 전공 전미 최상위권으로 유명한 유타주 플래그십. 인천 송도에 아시아 캠퍼스를 운영해 한국 학생에게 친숙합니다.":
        "Utah's flagship, nationally famous for game development, and familiar to Koreans through its Asia campus in Songdo, Incheon.",
    "미국 INTO 패스웨이의 출발점이 된 학교. 캠퍼스 내 INTO 센터의 오랜 운영 노하우로 국제학생 정착 지원이 체계적입니다.":
        "Where INTO's US pathways began. Years of running the on-campus centre show in its well-drilled support for arriving international students.",
    "보스턴 항이 내려다보이는 도심 주립. 미국 최대 대학 도시 보스턴에서 학비 부담을 낮춰 시작할 수 있는 실속형 선택지입니다.":
        "A city public overlooking Boston Harbor — the value way to start out in America's biggest college town.",

    /* --- 경로 라벨 (대조 완전성용) --- */
    "Direct 전형 중심": "Direct-entry focused",
    "Shorelight 제휴": "Shorelight partner",
    "INTO 제휴": "INTO partner",
    "Kaplan 제휴": "Kaplan partner"
};

/* ───────── 언어 상태 · 조회 ───────── */
/* 기본값은 한국어(브라우저 언어와 무관하게 항상 동일).
 * 저장된 선택이 없으면 "ko"를 저장까지 해서 다른 사이트에도 그대로 이어지게 한다. */
let LANG = (function () {
    try {
        var saved = localStorage.getItem("sgh-lang");
        if (saved === "ko" || saved === "en") return saved;
        localStorage.setItem("sgh-lang", "ko");
    } catch (e) {}
    return "ko";
})();

function t(key) {
    var dict = I18N[LANG] || I18N.ko;
    return dict[key] !== undefined ? dict[key] : I18N.ko[key];
}

function tr(s) {
    if (LANG !== "en" || typeof s !== "string") return s;
    return DATA_EN[s] !== undefined ? DATA_EN[s] : s;
}

function applyLang() {
    document.documentElement.lang = LANG;
    document.title = t("docTitle");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("docDesc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var v = t(el.dataset.i18n); if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        var v = t(el.dataset.i18nHtml); if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
        var v = t(el.dataset.i18nAria); if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
        var v = t(el.dataset.i18nTitle); if (v !== undefined) el.setAttribute("title", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
        var v = t(el.dataset.i18nAlt); if (v !== undefined) el.setAttribute("alt", v);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
        var on = b.dataset.lang === LANG;
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    if (typeof syncThemeLabel === "function") syncThemeLabel();
    if (typeof refreshDynamicView === "function") refreshDynamicView();
}

function setLang(l) {
    if (l !== "ko" && l !== "en") return;
    LANG = l;
    try { localStorage.setItem("sgh-lang", l); } catch (e) {}
    applyLang();
}

document.addEventListener("DOMContentLoaded", applyLang);
