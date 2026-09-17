# Hackathon VLearn Tutor & Lesson Prep

Dự án clone và phát triển tính năng cho nền tảng học tập **VLearn** (VinUni AI Thực Chiến).

## 📌 Các trang & Tính năng
1. **Dashboard Trang chủ (`index.html`)**:
   - Giao diện tổng quan cá nhân hóa VLearn.
   - Theo dõi tiến độ buổi học, Chuỗi ngày học (Streak), Chỗ bạn đang yếu, Hoạt động học tập.
2. **Trình đọc bài học VLearn Reader (`reader.html`)**:
   - Trình duyệt slide bài giảng tương tác (`Buổi 1: Day01`).
   - Tích hợp video bài giảng offline.
   - Mục lục lộ trình bài học và danh sách thumbnail 42 slide.
   - **Trợ lý AI tương tác (VLearn Tutor)**: Trò chuyện, tóm tắt slide, giải thích công thức toán học và câu hỏi Active Recall.
3. **VLearn Ready Prototype (`vlearn_ready_mock.html`)**:
   - Tính năng chuẩn bị trước bài học (Lesson Prep).

## 🚀 Hướng dẫn chạy (bản LIVE — AI thật end-to-end)

```bash
# Cửa sổ 1 — server (giữ nguyên suốt demo; key chỉ ở env, không vào repo)
set DEEPSEEK_API_KEY=...
python server.py
# → http://localhost:3000  (đổi port: python server.py --port 3001)
```

Mở modal VLearn Ready → Prep + Quiz do AI sinh live (banner xanh + tên trace).
Mất mạng/hết key → tự fallback Prep cache + banner vàng, không treo.

```bash
# Cửa sổ 2 — đo số live đúng đường demo (20 case, ~10 phút)
python ai\run_eval.py --all
# Chấm F/C/R vào eval\results-run-live.md rồi chốt số lên tab Số đo:
python ai\run_eval.py --metrics 100 75 95 --run run-live-1
```

Kiểm tra trước giờ demo: mở `http://localhost:3000/api/health` (key + fixtures + cases).

## 🖥️ Chạy tĩnh (không AI live)

Mở trực tiếp `.html` hoặc `python -m http.server 3000` — modal dùng Prep mẫu,
tab Số đo ẩn. Chỉ dùng khi demo mạng chết.

## 🧠 Logic CP3 đã áp dụng (AI thật + chấm deterministic)

**1. Chấm quiz thật** (`vlearn_ready.js` + bản inline trong `index.html`):
- Bỏ đáp án chọn sẵn — học viên phải tự trả lời cả 3 câu.
- `Nộp bài` chấm theo đáp án (Q1=B, Q2=A, Q3=A) và rule: đúng hết → READY ·
  cả 2 critical (Q1 ma trận, Q2 gradient) sai → NOT_READY · sai lẻ → PARTIALLY.
- Breakdown + hộp ôn tập Gradient dựng lại theo đáp án thật. Nút mô phỏng
  READY/PARTIALLY/NOT READY giữ nguyên cho demo.

**2. Pipeline AI thật** (thư mục `ai/`):
- `ai/ai_call.py` — gọi API ngoài (DeepSeek `deepseek-chat` / Gemini free tier),
  paste trọn nguồn Tier-1 vào context, ép JSON, validate citation theo allowlist.
  Key đọc từ biến môi trường (`DEEPSEEK_API_KEY` / `GOOGLE_API_KEY`), không commit key.
- `ai/fixtures/sources.json` + `ai/prompts/lesson-requirement.txt` — nguồn + prompt chốt.
- `ai/convert_trace.py` — kiểm tra trace: không citation → FAIL.
- `ai/prep-cp3.json` — Prep mẫu đã validate từ trace AI thật.

Chạy golden set (20 case, ~6 phút):
```bash
set DEEPSEEK_API_KEY=...
python ai/ai_call.py --provider deepseek --all
```

**3. Đo lường** (thư mục `eval/`): `tests.csv` (22 case) + `results-run1.md`
(F 100% · C 75% · R 95%, failure đau nhất: đảo nhãn Cosine/Chunking) +
`traces/` mẫu (PASS, refusal đúng, fail bịa BM25).
