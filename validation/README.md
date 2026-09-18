# validation/ — Bằng chứng kiểm thử (branch honpi)

Thư mục này phục vụ form nộp bài: **Link thư mục validation**.

Nguồn: copy nguyên `eval/` từ nhánh `tutor` (commit `df10e85`) để BTC verify trên nhánh `honpi` mà không cần đổi branch.

## Cấu trúc
- `tests.csv` — 22 case golden (C01–C22): prereq Required/Helpful/Taught, evidence timestamp/slide, refusal, injection, routing
- `tests-T06.csv` — bộ T06 data thật (transcript T06/T04 + slide)
- `results-run1.md` — lượt 1 CLI DeepSeek: **F 100% · C 75% · R 95%**, failure đau nhất C18 (đảo Cosine/Chunking)
- `results-run2.md` — lượt 2: **F 100% · C 80% · R 95%**, C18 fail ổn định 2 lượt
- `results-run-live.md` — template chấm lượt live qua `POST /api/ask`
- `results-run-T06.md` — kết quả T06
- `metrics.json` — số chốt cho tab Số đo (`--metrics F C R`)
- `traces/` — 58 trace thô `api-C*.json`, `api-T06-*.json`, `api-live-*.json` (PASS / refusal đúng / fail)
- `fixtures/` — fixture lesson dùng để chấm

## Bar đạt
`>=70% cả 3 chiều F/C/R, và 0 case bịa citation/timestamp.`

## Chạy lại (trên nhánh này, cần key)
```bash
set DEEPSEEK_API_KEY=...
python ai/run_eval.py --all
python ai/ai_call.py --provider deepseek --all
```

## Link dùng cho form
```
https://github.com/duypon2601/HackathonVlearnTutor/tree/honpi/validation
```
