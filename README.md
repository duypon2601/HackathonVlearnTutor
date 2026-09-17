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

## 🚀 Hướng dẫn chạy thử
Bạn có thể mở trực tiếp các file `.html` trên trình duyệt hoặc chạy một HTTP server cục bộ:

```bash
# Sử dụng npx serve
npx serve .

# Hoặc sử dụng Python
python3 -m http.server 3000
```

Truy cập: `http://localhost:3000`
