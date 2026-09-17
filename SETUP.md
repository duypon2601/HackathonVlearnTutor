# SETUP — Cài đặt & chạy VLearn Ready (cho cả team)

> Tổng thời gian setup máy mới: ~10 phút. Đường chạy chính **không cần
> `pip install` gì** (`server.py`, `ai_call.py`, `run_eval.py` chỉ dùng
> thư viện chuẩn Python). Key **không bao giờ** bỏ vào file/repo.

## 1. Yêu cầu

- Python 3.10+ (`python --version` để kiểm tra, tải tại python.org nếu thiếu)
- Git (để clone)
- Chrome (khuyến nghị để demo; bắt buộc chỉ khi dùng đường NotebookLM dự phòng)

```bash
git clone -b tutor https://github.com/duypon2601/HackathonVlearnTutor.git
cd HackathonVlearnTutor
```

## 2. Lấy API key (mỗi người tự lấy key riêng)

**Chính — DeepSeek** (đường chạy mặc định):
1. Mở `platform.deepseek.com` → đăng nhập → **API keys** → **Create new API key** → copy.
2. Nạp key **vào biến môi trường của phiên cmd** (tắt cmd là mất, an toàn nhất):

```cmd
set DEEPSEEK_API_KEY=dán-key-vào-đây
```

Nếu dùng PowerShell thì lệnh tương ứng:

```powershell
$env:DEEPSEEK_API_KEY='dán-key-vào-đây'
```

**Dự phòng — Gemini free tier** (không cần thẻ): `aistudio.google.com` →
**Get API key** → biến `GOOGLE_API_KEY`, cách set tương tự.

> ⚠️ **Tuyệt đối không:** paste key vào file `.py`/`.md`/`.bat`, không
> `setx` (lưu vĩnh viễn vào máy), không commit key. Repo đã chặn `.env`
> trong `.gitignore` — nhưng cách đúng vẫn là `set` theo phiên như trên.
> Key nào đã lộ lên chat/file chung thì revoke/rotate sau hackathon.

## 3. Kiểm tra key (không tốn tiền)

```cmd
python ai\ai_call.py --provider deepseek --only C01
```

Thấy `validation=PASS` + file mới trong `eval\traces\api-C01.json` là được.

## 4. Chạy demo LIVE (AI thật end-to-end)

```cmd
:: Cửa sổ 1 — giữ nguyên suốt demo
set DEEPSEEK_API_KEY=dán-key-vào-đây
python server.py
```

- Web: `http://localhost:3000` (dashboard), `/reader.html`, `/vlearn_ready_mock.html`
- Kiểm tra trước giờ demo: `http://localhost:3000/api/health` phải báo
  `"key_present": true, "cases": 20`
- Đổi port nếu bận: `python server.py --port 3001`

```cmd
:: Cửa sổ 2 — đo số live đúng đường demo (20 case, ~10 phút)
python ai\run_eval.py --all
```

Chấm F/C/R vào `eval\results-run-live.md`, rồi chốt số lên tab Số đo:

```cmd
python ai\run_eval.py --metrics 100 75 95 --run run-live-1
```

## 5. Chạy tĩnh (không cần key/mạng)

```cmd
python -m http.server 3000
```

Modal dùng Prep mẫu, tab Số đo ẩn. Dùng khi mạng chết lúc demo.

## 6. Kiểm tra nhanh khi hỏng

| Triệu chứng | Cách xử |
|---|---|
| `THIEU KEY` | Chưa `set` key ở **đúng cửa sổ cmd** đang chạy (mỗi cửa sổ riêng) |
| `/api/prep` báo 502 | Hết tiền/quota key, hoặc mất mạng → kiểm tra `/api/health`, UI tự fallback cache |
| Port 3000 bận | `run.bat` tự kill process cũ trên port rồi dựng mới. Muốn giữ server cũ thì `run.bat 3001` |
| Muốn check JS sau khi sửa | `node --check vlearn_ready.js` (cần Node, không bắt buộc) |
| Đường NotebookLM (dự phòng) | Chỉ dùng qua **web UI** hoặc login lại (xem §8) — CLI hay hết hạn giữa chừng |

## 8. Đường dự phòng NotebookLM (khi DeepSeek chết)

Notebook `VLearn Ready CP3` (9 nguồn: 4 fixture + transcript/slide thật) vẫn giữ để:
- demo tay trên web `notebooklm.google.com` (luôn chạy được khi trình duyệt còn đăng nhập),
- làm evidence so sánh: `eval/traces/ask-02*` (PASS), `api-C11.json` (NotebookLM bịa BM25),
  dilution false-refusal (hỏi all-sources bị từ chối oan).

Lưu ý thực tế vừa gặp: cookie CLI hay hết hạn giữa batch (`UNEXPECTED_ERROR`
dù `auth check` vẫn ok) — nên **đừng** dùng CLI cho đợt đo chính. Nếu cần gọi lại:

```cmd
:: 1. Tắt hẳn Chrome rồi login lại (khóa file cookie khi Chrome mở)
taskkill /F /IM chrome.exe
"C:\Users\gtvbe\AppData\Local\Temp\opencode\nblm-venv\Scripts\python.exe" -c "from notebooklm.notebooklm_cli import main; main()" login --browser-cookies chrome

:: 2. Hỏi 1 case (NHỚ giới hạn -s đúng 4 fixture, không hỏi all-sources)
"C:\Users\gtvbe\AppData\Local\Temp\opencode\nblm-venv\Scripts\python.exe" -c "from notebooklm.notebooklm_cli import main; main()" ask -n dec25533 --new -y -s 8ba0b78d-65b5-4b1f-8107-767426ec1f4a -s 0728fb48-a29b-43b4-9027-a62c7245cfb7 -s 901a319c-bf33-4d36-a506-cbcf2af75f00 -s b6b02d81-acee-4a9d-b2e9-ce4fb4628f5f --json "câu hỏi..."
```

## 7. Thư viện nào cần cài? (tóm tắt)

| Việc | Cần cài gì |
|---|---|
| Demo live + đo số (đường chính) | **Không gì cả** — stdlib Python |
| Check cú pháp JS | Node (tùy chọn) |
| Đường NotebookLM dự phòng | `pip install notebooklm-py` (tùy chọn) |
