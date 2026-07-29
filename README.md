# US Study Guide — 미국 대학 진학 가이드

미국 학부 진학 3개 경로(Direct 입학 · 패스웨이(조건부입학) · 커뮤니티칼리지 2+2 편입)를
질문 몇 개로 진단해 추천하는 무료 정보 페이지. [uk-study-guide](https://github.com/jaebong-choi/uk-study-guide)와
같은 구조의 정적 사이트다 (허브: [study-guide-hub](https://github.com/jaebong-choi/study-guide-hub)).

- **데이터 기준**: US News Best Colleges 2026 (2025-09 발표), 2026-27 학비 공시
- **경로 판정**: 내신 · SAT · 영어 · 예산 · 목표 조합 → Direct / 패스웨이 / 2+2 / 병행
- **콘텐츠**: 대학 28곳(경로 배지 · 상세 모달), 커뮤니티칼리지 8곳, 패스웨이 운영사 4곳,
  비용 비교, F-1 · OPT 안내, UC TAG 설명
- **i18n**: 한국어/English (`i18n.js`), 언어·테마 선택은 같은 도메인의 다른 가이드와 공유
- **공유**: 진단 결과를 URL 해시(`#p=`)로 저장 · 복원
- **리서치 근거**: [docs/RESEARCH.md](docs/RESEARCH.md)

## 로컬 실행

정적 사이트라 아무 HTTP 서버로 열면 된다:

```bash
python -m http.server 8123
```

## 배포

GitHub Pages (main 브랜치 루트). `.nojekyll` 포함.
