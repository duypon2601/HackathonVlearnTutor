# DEMO 30 GIÂY (CP3) + BẢN ĐỒ NÚT BẤM

> Mục đích video: chứng minh **AI chạy thật** (banner xanh PREP AI LIVE + tên trace)
> và flow hoàn chỉnh Prep → Check → Verdict → Vào bài. Quay thô màn hình,
> không cần dựng/lồng tiếng.

## 1. Chuẩn bị trước khi bấm quay (2 phút)

1. Một cửa sổ cmd: `run.bat` → chờ hiện `VLearn Ready LIVE` (giữ nguyên).
2. Trình duyệt: mở `http://localhost:3000/api/health` → phải thấy
   `"key_present": true`. Tắt tab này đi.
3. Chỉ để lại 1 tab `http://localhost:3000`, phóng to 100%, tắt thông báo
   Windows (Focus assist), tắt bookmark bar nếu vướng (`Ctrl+Shift+B`).
4. Mở sẵn modal 1 lần cho nóng (AI lần đầu ~30–60s, lần sau nhanh hơn),
   rồi tải lại trang trước khi quay.
5. Quay bằng Xbox Game Bar (`Win+G` → nút ●) hoặc OBS. Khung 1920×1080.

## 2. Kịch bản 30s (bấm đúng từng giây)

| Giây | Bấm gì | Thấy gì (điểm ăn điểm) |
|---|---|---|
| 0–3 | Dashboard → nút xanh **⚡ Chuẩn bị bài (AI live)** ở dòng *Lesson 6 · RAG + Reranking* | Modal mở, banner `⏳ Đang gọi AI…` |
| 3–12 | Đợi + lia chuột chậm qua Prep | Banner chuyển xanh **`✅ Prep AI LIVE … trace api-live-….json`** (dừng 2s ở đây — đây là bằng chứng AI thật), outcomes + 3 prereq Required/Helpful/Taught |
| 12–18 | **Bắt đầu kiểm tra sẵn sàng** → trả lời 3 câu, **cố tình sai 1 câu** (để ra PARTIALLY cho hay) → **Nộp bài** | Verdict `🟡 PARTIALLY READY` + hộp *Đề xuất ôn tập* đúng nguồn review |
| 18–25 | Bấm **Ôn nhanh / Xem lại** nguồn review | Mở đúng nguồn (L3 18:40 hoặc L4 Slide 14–17) |
| 25–30 | **Bắt đầu bài học ngay** | Vào bài. Hết — dừng quay |

File lưu: `demo-cp3-30s.mp4`. Kiểm tra lại: thấy rõ banner LIVE + verdict là đạt.

## 3. Bản đồ nút (bấm ở đâu → ra gì)

**Dashboard (`index.html`):**
| Nút | Kết quả |
|---|---|
| `⚡ Chuẩn bị bài (AI live)` (dòng L6, viền xanh lá) | Modal Prep AI **live** bài RAG |
| `⚡ Chuẩn bị bài (data thật)` (dòng T06, viền teal) | Modal Prep AI **live** bài Transformer (data thật) |
| `Chuẩn bị bài (Ready)` (các dòng Day01–D16) | Modal bản **mock** + banner xanh dương nói rõ (trung thực) |

**Trong modal:**
| Nút | Kết quả |
|---|---|
| `Bắt đầu kiểm tra sẵn sàng` | Sang 3 câu hỏi |
| `Nộp bài & Đánh giá` | Chấm thật → READY (đúng hết) / PARTIALLY (sai lẻ) / NOT READY (sai cả 2 critical). Thiếu câu → báo chọn nốt, không chấm ẩu |
| `Ôn nhanh / Xem lại ↗` | Mở nguồn review đúng prereq sai |
| `🔄 Kiểm tra lại` / `Làm lại kiểm tra` | Quay lại làm quiz |
| `Bỏ qua & Vào học ngay` / `Bắt đầu bài học ngay` | Vào bài (luôn cho phép, không khóa) |

**Trang mock (`vlearn_ready_mock.html`):** các nút `Chuẩn bị bài` mở quiz gốc của trang
(chấm thật 3 câu Docker/Kafka/Prometheus); nút **L6** nhảy sang dashboard chạy AI live.

**Trang reader (`reader.html`):** nút ⚡ mở modal theo đúng bài đang đọc
(bài có fixture → live, chưa có → mock + banner).

## 4. Lỗi thường gặp lúc quay

| Hiện tượng | Xử lý |
|---|---|
| Banner vàng “Mất mạng/hết key” | Quên chạy `run.bat`, hoặc key hết tiền — kiểm tra `/api/health` |
| Banner xanh dương “chưa có Prep AI” | Đang bấm nhầm nút Day (mock). Bấm lại nút **L6/T06** |
| Mở bài khác vẫn thấy quiz RAG | Tải lại trang (đã fix rò bài, bản cũ cache) — quay lại từ đầu |
| AI live quá 60s | Timeout tự fallback cache + banner vàng — vẫn dùng được, nhưng nên quay lại take khác |
