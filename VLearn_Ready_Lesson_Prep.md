# VLearn Ready --- Lesson Prep trước khi học

## 1. Tóm tắt đề tài

**VLearn Ready** là tính năng chuẩn bị trước bài học dành cho học viên
VLearn.

Thay vì chỉ dùng AI để tóm tắt nội dung, hệ thống đọc **transcript,
slide và các nguồn chính thức của khóa học** để giúp học viên trả lời
nhanh các câu hỏi trước khi bắt đầu:

-   Bài này sẽ học gì?
-   Sau bài này mình nên hiểu/làm được gì?
-   Kiến thức hoặc thuật ngữ nào nên biết trước?
-   Nếu chưa biết thì nên xem lại ở đâu?
-   Phần nào trong bài cần đặc biệt chú ý?

**Ý tưởng cốt lõi:** giúp học viên bước vào bài với đủ context và kiến
thức nền, thay vì đang học giữa chừng mới phát hiện mình thiếu
prerequisite và phải dừng lại tự tìm tài liệu.

------------------------------------------------------------------------

## 2. Track phù hợp

### Track chính: A · VLearn Tutor --- A2

Đây là một **tính năng mới phục vụ trực tiếp học viên trên VLearn**, tận
dụng dữ liệu có sẵn:

-   transcript bài giảng;
-   slide;
-   nội dung khóa học;
-   về sau có thể bổ sung instructor intent và các nguồn do giảng viên
    đề xuất.

### Khả năng mở rộng

Nếu hệ thống bắt đầu:

-   đánh giá kiến thức riêng của từng học viên;
-   xác định mỗi người thiếu prerequisite nào;
-   tạo preparation path khác nhau cho từng người;

thì sản phẩm bắt đầu giao với **Track D · Adaptive & Interactive
Learning**.

------------------------------------------------------------------------

## 3. Người dùng và Job To Be Done

### Job executor

**Học viên chuẩn bị bắt đầu một bài học mới trên VLearn.**

### Job statement

> Trước khi học một bài, học viên muốn biết bài sẽ hướng tới điều gì,
> cần có kiến thức nền nào và nên tập trung vào đâu để có thể theo bài
> hiệu quả.

Job này tồn tại độc lập với AI hay VLearn, do đó AI chỉ là phương tiện
hỗ trợ chứ không phải bản thân bài toán.

### Job stories

> When tôi chuẩn bị bắt đầu một lesson mới, I want to biết những kiến
> thức nền cần thiết, so I can theo bài mà không phải dừng giữa chừng để
> tra cứu.

> When tôi gặp một prerequisite mình chưa biết, I want to được dẫn tới
> đúng phần đã học hoặc tài liệu phù hợp, so I can bổ sung nhanh trước
> khi tiếp tục.

> When tôi chuẩn bị học một bài dài, I want to biết mục tiêu và những
> phần đáng chú ý, so I can tập trung vào nội dung quan trọng.

------------------------------------------------------------------------

## 4. Pain hypothesis

### Pain chính

> Học viên bắt đầu một bài mới nhưng chưa biết bài yêu cầu kiến thức nền
> gì, mục tiêu học tập là gì và phần nào cần chú ý; khi gặp thuật ngữ
> hoặc concept lạ giữa bài, họ phải dừng lại tự tìm hiểu, làm gián đoạn
> việc học và khó nắm mạch nội dung.

Đây hiện là **giả thuyết cần được kiểm chứng bằng evidence**, không nên
coi là kết luận trước khi mining/khảo sát.

------------------------------------------------------------------------

## 5. Prototype đề xuất --- Lesson Prep Card

Trước khi bắt đầu lesson, học viên nhận một preparation card ngắn.

### 🎯 Sau bài này bạn nên có thể

Tối đa 2--3 learning outcomes, ví dụ:

-   giải thích được concept X;
-   phân biệt X và Y;
-   áp dụng X vào tình huống Z.

### 🧠 Nên biết trước

Tối đa 3--5 prerequisite quan trọng.

Mỗi prerequisite cần phân biệt:

-   **Required:** cần biết để theo được bài;
-   **Helpful:** biết trước sẽ giúp học dễ hơn;
-   **Taught in lesson:** sẽ được giải thích trong chính bài này, không
    bắt học viên chuẩn bị trước.

### 📚 Nếu chưa biết, xem ở đâu?

Ưu tiên nguồn theo thứ tự:

1.  nội dung chính thức trong khóa;
2.  lesson trước;
3.  slide;
4.  timestamp/đoạn transcript liên quan;
5.  tài liệu được giảng viên đề xuất;
6.  nguồn ngoài chỉ khi nội dung khóa học không đủ và phạm vi sản phẩm
    cho phép.

Mục tiêu không phải đưa ra nhiều link, mà là **route học viên tới 1--2
nguồn phù hợp nhất**.

### ⚠️ Điểm nên chú ý

Có thể hiển thị:

-   concept dễ nhầm;
-   phần có dependency quan trọng;
-   misconception phổ biến;
-   nội dung giảng viên đặc biệt muốn học viên hiểu.

------------------------------------------------------------------------

## 6. Lát cắt prototype

> **Trước khi học viên bắt đầu một lesson, AI xác định từ nội dung khóa
> học những kiến thức nền thực sự cần thiết và route học viên tới đúng
> nguồn cần xem lại, để họ vào bài với đủ context mà không phải tự mò
> tài liệu.**

### Một user

Học viên chuẩn bị học một lesson.

### Một việc

Chuẩn bị đủ kiến thức nền để theo bài.

### Một quyết định AI

Xác định:

> **Concept nào thực sự là prerequisite, concept nào chỉ hữu ích, và
> concept nào sẽ được dạy trong chính lesson?**

Sau đó tìm nguồn phù hợp nhất cho prerequisite bị thiếu.

### Một kết quả

Học viên biết mình cần chuẩn bị gì và có thể mở ngay đúng nguồn để
review.

------------------------------------------------------------------------

## 7. Automation dự kiến

``` text
Transcript / Slide
        ↓
Extract concepts & learning outcomes
        ↓
Identify prerequisite candidates
        ↓
Classify:
Required / Helpful / Taught-in-lesson
        ↓
Find supporting course sources
        ↓
Rank nguồn phù hợp
        ↓
Generate Lesson Prep Card
```

AI không chỉ thực hiện summarization. Giá trị chính nằm ở **phân loại
prerequisite và routing tới nguồn có căn cứ**.

------------------------------------------------------------------------

## 8. Nguồn sự thật và grounding

Thứ tự ưu tiên:

### Tier 1 --- Course source of truth

-   transcript;
-   slide;
-   lesson trước;
-   tài liệu chính thức của khóa.

### Tier 2 --- Instructor-curated sources

-   sách;
-   paper;
-   documentation;
-   repo;
-   blog/tài liệu do giảng viên đề xuất.

### Tier 3 --- External resources

Chỉ cân nhắc khi nguồn nội bộ không đủ và phạm vi sản phẩm cho phép.

AI phải chỉ ra nguồn nào hỗ trợ recommendation thay vì tự tạo
prerequisite hoặc tài liệu không có căn cứ.

------------------------------------------------------------------------

## 9. Instructor Intent

Một hướng mở rộng quan trọng là bổ sung **ý định giảng dạy của giảng
viên**.

Mỗi lesson có thể có metadata:

``` text
Sau bài học viên phải hiểu:
Không cần đào quá sâu:
Sai lầm phổ biến:
Phần dễ hiểu nhầm:
Nếu chỉ nhớ một điều:
Tài liệu khuyên đọc:
```

AI kết hợp:

> **Course content + Instructor Intent**

để tạo preparation phù hợp hơn.

Điểm khác biệt so với một công cụ summarize thông thường là hệ thống
không chỉ biết **"bài nói gì"**, mà còn biết **"giảng viên muốn học viên
hiểu bài như thế nào"**.

------------------------------------------------------------------------

## 10. Bốn lớp chỗ khó

### ① Nguồn sự thật

**Rủi ro:** AI tự suy diễn prerequisite hoặc nguồn tham khảo.

**Hành vi mong muốn:**

-   prerequisite quan trọng phải có căn cứ;
-   không đủ căn cứ → báo không chắc;
-   không tạo citation/timestamp giả.

### ② Mơ hồ / thiếu thông tin

Ví dụ transcript nhắc tới một thuật ngữ nhưng không đủ thông tin để biết
đó là prerequisite hay chỉ là nội dung sắp được dạy.

Hệ thống nên:

-   kiểm tra vị trí và cách concept được sử dụng trong lesson;
-   kiểm tra lesson trước;
-   giảm confidence hoặc không đưa vào danh sách nếu chưa đủ chắc.

### ③ Ngoài phạm vi

Nếu user yêu cầu tài liệu ngoài phạm vi khóa hoặc nội dung không có căn
cứ trong dữ liệu được phép sử dụng:

-   không giả vờ có nguồn;
-   thông báo giới hạn;
-   ưu tiên nguồn khóa học có sẵn.

### ④ Đặc thù domain

Sai prerequisite có thể khiến:

-   học viên chuẩn bị thừa;
-   bỏ sót kiến thức nền quan trọng;
-   hiểu sai concept trước khi vào bài.

Do đó phải đặc biệt kiểm tra khả năng phân biệt:

> **prerequisite** vs **concept sẽ được dạy trong lesson**.

------------------------------------------------------------------------

## 11. Hard tests ban đầu

Prototype nên kiểm thử ít nhất các tình huống:

1.  Transcript không đủ căn cứ → AI không bịa prerequisite.
2.  Concept xuất hiện trong bài nhưng được giải thích đầy đủ ngay sau đó
    → không đánh dấu bắt buộc học trước.
3.  Lesson có quá nhiều concept → chỉ chọn 3--5 prerequisite quan trọng.
4.  Không tìm được nguồn review → nói rõ thay vì tạo citation giả.
5.  Một prerequisite đã được dạy trong lesson trước → route đúng
    lesson/đoạn nguồn.
6.  Instructor Intent và suy luận AI khác nhau → ưu tiên intent/source
    chính thức theo policy đã định nghĩa.

------------------------------------------------------------------------

## 12. Evidence cần thu cho CP1 → CP4

### A. Khảo sát/phỏng vấn học viên

Không hỏi:

> "Bạn có muốn tính năng chuẩn bị bài không?"

Nên hỏi hành vi đã xảy ra:

-   "Lần gần nhất bạn đang học mà gặp một thuật ngữ/concept chưa biết là
    khi nào?"
-   "Lúc đó bạn làm gì?"
-   "Bạn tìm ở đâu?"
-   "Mất khoảng bao lâu?"
-   "Bạn có tiếp tục bài luôn hay dừng lại?"
-   "Lần gần nhất bạn học được một đoạn mới nhận ra mình thiếu kiến thức
    nền là khi nào?"

CP1 chỉ cần evidence ban đầu; đến hạn chốt spec nếu đi theo đường khảo
sát cần đáp ứng chuẩn đề bài: **≥20 người ngoài nhóm, ≥50% xác nhận và
lưu toàn bộ câu hỏi/câu trả lời.**

### B. Mining data

Có thể chọn 2--6 transcript/slide và định nghĩa tiêu chí rõ ràng.

Ví dụ:

> Một "potential prerequisite gap" là concept được lesson sử dụng để
> giải thích nội dung khác trước khi concept đó được định nghĩa trong
> lesson hiện tại, và không có phần giải thích đủ ngay tại thời điểm sử
> dụng.

Sau đó ghi:

-   tổng số lesson/segment đã kiểm tra;
-   tổng số candidate;
-   bao nhiêu candidate thỏa rule;
-   ≥5 ví dụ nguyên văn;
-   phương pháp đếm để người khác có thể kiểm tra lại.

**Không sử dụng số liệu giả trong Canvas.**

------------------------------------------------------------------------

## 13. Ba candidate để so sánh trước khi chốt

  -----------------------------------------------------------------------
  Candidate         Job               AI decision chính Ghi chú
  ----------------- ----------------- ----------------- -----------------
  Lesson Preview    Biết bài sắp học  Chọn learning     Dễ làm nhưng dễ
                    gì                outcomes quan     thành
                                      trọng             summarization

  Prerequisite Prep Biết cần chuẩn bị Phân biệt         Hướng core hiện
                    gì                prerequisite với  tại
                                      concept được dạy  

  Readiness Check   Biết mình đã đủ   Đánh giá gap của  Cá nhân hóa mạnh
                    nền chưa          từng học viên     nhưng scope lớn
                                                        hơn
  -----------------------------------------------------------------------

Nhóm cần dùng evidence thực tế để quyết định cuối cùng, thay vì chọn chỉ
vì feature hấp dẫn.

------------------------------------------------------------------------

# 14. Hướng scale-up

## 14.1 Smart Prerequisite Map

Xây dependency:

``` text
Lesson
 ├── Concept A
 │    └── Learned in Lesson 2 / 18:40
 ├── Concept B
 │    └── Slide 14–17
 └── Concept C
      └── Instructor recommended resource
```

Lâu dài có thể phát triển thành **knowledge graph của khóa học**.

------------------------------------------------------------------------

## 14.2 Readiness Check

Trước bài, học viên trả lời 3--5 câu ngắn.

Hệ thống phân loại:

``` text
READY
→ vào bài

PARTIALLY READY
→ review concept A trong 4 phút

NOT READY
→ học prerequisite X trước
```

Đây là bước chuyển từ Lesson Prep chung sang adaptive preparation.

------------------------------------------------------------------------

## 14.3 Personalized Preparation

Học viên có background khác nhau sẽ không nhận cùng một prep.

Ví dụ:

-   người đã biết Python → bỏ Python basics;
-   người chưa biết embedding → review embedding;
-   người đã hoàn thành prerequisite → vào thẳng lesson.

------------------------------------------------------------------------

## 14.4 Learning Contract

Trước bài:

> "Sau lesson này bạn nên có thể làm được X, Y, Z."

Sau bài:

AI kiểm tra lại chính X, Y, Z.

Flow:

``` text
Before lesson
→ Learning outcomes

During lesson
→ Learning

After lesson
→ Verify outcomes

Remaining gaps
→ Preparation for next lesson
```

Từ đó hình thành learning loop thay vì một summary dùng một lần.

------------------------------------------------------------------------

## 14.5 Community-informed Prep

Tổng hợp **ẩn danh** các khó khăn thường gặp của cohort trước:

> "Người học bài này thường nhầm A với B."

Nguồn tín hiệu có thể là:

-   câu hỏi Tutor;
-   câu hỏi Discord;
-   quiz mistakes;
-   feedback học viên;

nếu các nguồn này được phép sử dụng theo phạm vi dữ liệu và quy định bảo
mật.

Hệ thống dùng các pattern đó để cải thiện preparation cho cohort sau.

------------------------------------------------------------------------

## 14.6 Concept Gap Detector cho giảng viên/Studio

So sánh:

> concepts lesson đang sử dụng

với:

> concepts đã được giới thiệu trước đó.

Ví dụ:

> Lesson 6 sử dụng "reranking" nhiều lần nhưng các lesson trước chưa
> giới thiệu rõ concept này.

Tính năng ban đầu phục vụ học viên có thể tạo feedback ngược cho đội sản
xuất bài giảng.

Đây là khả năng mở rộng từ **Track A → Track C**.

------------------------------------------------------------------------

## 14.7 Adaptive Depth

Cho phép preparation theo thời gian:

-   **Quick Prep:** \~2 phút;
-   **Standard:** \~5 phút;
-   **Deep Prep:** \~10--15 phút.

AI thay đổi độ sâu nhưng vẫn dựa trên cùng source of truth.

------------------------------------------------------------------------

## 15. Những hướng chưa nên ưu tiên trong MVP

### AI-generated intro video

Có thể trở thành một output format về sau, nhưng chưa nên là core
feature vì:

-   khó chứng minh video giải quyết pain tốt hơn text;
-   generation phức tạp hơn;
-   khó skim;
-   khó cập nhật;
-   không phải AI decision quan trọng nhất.

Nếu cần media, audio briefing ngắn có thể được thử sau khi core Lesson
Prep được validate.

### Search web tự do

Không nên biến sản phẩm thành hệ thống đưa hàng loạt link.

Giá trị mong muốn:

> **Chọn đúng 1--2 nguồn cần xem và giải thích vì sao chúng liên quan.**

------------------------------------------------------------------------

# 16. Scope hackathon đề xuất

## Prototype

Input:

-   1 transcript;
-   slide tương ứng nếu có;
-   fixture Instructor Intent nếu cần.

AI thực hiện:

1.  xác định learning outcomes;
2.  xác định prerequisite candidates;
3.  phân loại prerequisite;
4.  tìm nguồn hỗ trợ trong course;
5.  tạo Lesson Prep Card.

Output:

``` text
LESSON PREP

🎯 Sau bài này bạn nên có thể
1. ...
2. ...
3. ...

🧠 Nên biết trước
1. Concept A — Required
2. Concept B — Helpful
3. Concept C — Already taught in Lesson X

📚 Cần xem lại?
Concept A → Lesson X / segment Y

⚠️ Chú ý
...
```

Prototype phải có **ít nhất một lời gọi AI chạy thật** theo yêu cầu
hackathon.

------------------------------------------------------------------------

# 17. Canvas CP1 nháp

## 01 · Người dùng & nỗi đau

**Học viên chuẩn bị bắt đầu một bài học mới.**

**Job:** trước khi học, học viên muốn biết bài hướng tới điều gì, cần
biết trước kiến thức nào và nên tập trung vào đâu để theo bài tốt.

**Pain hypothesis:** học viên có thể bước vào bài khi chưa nhận ra những
kiến thức nền cần thiết; khi gặp concept lạ giữa bài họ phải dừng lại
tra cứu, làm gián đoạn quá trình học và khó theo mạch nội dung.

------------------------------------------------------------------------

## 02 · Bằng chứng ban đầu

Cần điền bằng dữ liệu thực tế sau khi khảo sát/mining:

``` text
Khảo sát sơ bộ:
[X]/[N] học viên từng ...
Median/average thời gian ...

Mining:
[N] lesson / [N] segments được kiểm tra
[X] prerequisite gaps theo rule ...
Đã lưu ≥5 examples ...
```

CP1 có thể chỉ là evidence sơ bộ nhưng phải ghi rõ phương pháp và
**không điền số giả**.

------------------------------------------------------------------------

## 03 · Lát cắt & Automation

**Lát cắt:**

> Trước khi học viên bắt đầu một lesson, AI xác định từ nội dung khóa
> học những kiến thức nền thực sự cần thiết và route học viên tới đúng
> nguồn cần xem lại, để họ vào bài với đủ context mà không phải tự mò
> tài liệu.

**Automation:**

``` text
Transcript/slide
→ learning outcomes
→ prerequisite detection
→ classify
→ source retrieval
→ Lesson Prep
```

**Conditional behavior:**

-   đủ căn cứ → recommend;
-   chưa chắc → giảm confidence/không recommend;
-   không có nguồn → nói không tìm thấy;
-   concept được dạy trong lesson → không ép học trước.

------------------------------------------------------------------------

## 04 · Người thử & phân công

**Willing users dự kiến:** mời ≥5 học viên ngoài nhóm thử Lesson Prep
trước một bài thật; mục tiêu bonus cuối là có ≥2 người thật đồng ý thử
prototype trước demo.

Vai trò gợi ý:

-   **Evidence:** survey + mining;
-   **Spec:** prerequisite definition + product scope;
-   **AI:** prompt/retrieval/grounding;
-   **Prototype:** UI/interaction;
-   **Evaluation & Demo:** hard tests + user validation.

------------------------------------------------------------------------

# 18. Câu pitch ngắn

> **VLearn Ready giúp học viên chuẩn bị trước một lesson: AI không chỉ
> tóm tắt bài mà xác định kiến thức nền thực sự cần thiết và dẫn học
> viên tới đúng phần nên xem lại, dựa trên transcript, slide và nguồn
> chính thức của khóa học.**

## Product vision

> **Know what matters before you learn.**

------------------------------------------------------------------------

# 19. Nguyên tắc quan trọng của đề tài

**Không build trước rồi đi tìm pain để chứng minh.**

Trình tự nên là:

``` text
Pain hypothesis
→ Evidence
→ Compare ≥3 candidates
→ Select problem
→ Define AI decision
→ Prototype
→ Evaluate
→ Validate with users
```

Nếu evidence cho thấy prerequisite không phải pain đủ lớn, nhóm nên sẵn
sàng chuyển sang candidate gần nhất như **Lesson Preview** hoặc
**Readiness Check**, thay vì cố bảo vệ solution ban đầu.
