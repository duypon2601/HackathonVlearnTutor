/**
 * VLearn Ready — AI Readiness Check trước khi học
 * Workflow 3: Readiness Check + Personalized Preparation
 * Mô phỏng trực quan theo đúng sơ đồ workflow và tài liệu đề tài
 */

(function () {
  // Inject HTML template for VLearn Ready modal if not already present
  function initVLearnReadyModal() {
    if (document.getElementById('vr-modal-backdrop')) return;

    var modalHtml = `
    <div id="vr-modal-backdrop" class="vr-backdrop" style="display: none;">
      <div class="vr-modal-card">
        
        <!-- Modal Top Bar -->
        <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div class="flex items-center gap-3">
            <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
              ⚡
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-base font-extrabold text-slate-900 dark:text-white">VLearn Ready</h2>
                <span class="text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-sky-950 dark:text-sky-300 px-2 py-0.5 rounded-full uppercase tracking-wider">AI Readiness Check</span>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400">Buổi 1: Day01 — Machine Learning Foundations</p>
            </div>
          </div>

          <button type="button" onclick="closeVLearnReady()" class="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:text-white dark:hover:bg-slate-800 transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <!-- Quick Simulator Shortcut Bar (Dành cho Giám khảo / Demo) -->
        <div class="bg-amber-50 dark:bg-amber-950/40 px-6 py-2 border-b border-amber-200 dark:border-amber-900/50 flex items-center justify-between text-xs flex-wrap gap-2">
          <span class="text-amber-800 dark:text-amber-300 font-semibold flex items-center gap-1.5">
            <span>💡</span>
            <span>Mô phỏng nhanh kịch bản:</span>
          </span>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="simulateReadiness('READY')" class="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] transition-all shadow-xs">
              ✓ 100% READY
            </button>
            <button type="button" onclick="simulateReadiness('PARTIALLY')" class="px-2.5 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] transition-all shadow-xs">
              ⚠️ PARTIALLY READY
            </button>
            <button type="button" onclick="simulateReadiness('NOT_READY')" class="px-2.5 py-1 rounded-md bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] transition-all shadow-xs">
              ❌ NOT READY
            </button>
          </div>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="p-6 overflow-y-auto flex-1 space-y-6" style="max-height: 65vh;">

          <!-- ======================================================== -->
          <!-- STEP 1: LESSON EXPECTATIONS (Màn hình 2) -->
          <!-- ======================================================== -->
          <div id="vr-step-1" class="space-y-5">
            <div class="rounded-xl p-4 bg-blue-50 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700">
              <h3 class="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-sky-400">TRƯỚC KHI HỌC BÀI NÀY</h3>
              <p class="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                Kiểm tra nhanh xem bạn đã có đủ kiến thức nền để theo bài học chưa (chỉ mất 2–3 phút).
              </p>
            </div>

            <!-- Learning Outcomes -->
            <div class="space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span>🎯</span>
                <span>Sau bài học này, bạn nên có thể:</span>
              </h4>
              <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pl-2">
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">•</span>
                  <span>Giải thích bản chất của hàm giả thuyết hồi quy tuyến tính (Linear Regression) $y = Wx + b$.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">•</span>
                  <span>Phân tích hàm mất mát sai số bình phương trung bình (MSE) và ý nghĩa hệ số $1/2m$.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-600 font-bold">•</span>
                  <span>Ứng dụng thuật toán Gradient Descent để cập nhật trọng số tối ưu.</span>
                </li>
              </ul>
            </div>

            <!-- Prerequisites Breakdown -->
            <div class="space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span>🧠</span>
                <span>Bài học này dựa trên kiến thức nền (Prerequisites):</span>
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                
                <div class="p-3 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300">Required</span>
                    <span class="text-[11px] text-slate-400">Đại số</span>
                  </div>
                  <div class="mt-2 text-xs font-bold text-slate-900 dark:text-white">Phép nhân Ma trận & Vector</div>
                  <p class="text-[11px] text-slate-500 mt-0.5">Dùng để biểu diễn hàm giả thuyết dạng Vectorized.</p>
                </div>

                <div class="p-3 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/50 dark:bg-rose-950/20">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300">Required</span>
                    <span class="text-[11px] text-slate-400">Giải tích</span>
                  </div>
                  <div class="mt-2 text-xs font-bold text-slate-900 dark:text-white">Đạo hàm riêng & Gradient</div>
                  <p class="text-[11px] text-slate-500 mt-0.5">Xác định hướng dốc nhất để cập nhật trọng số.</p>
                </div>

                <div class="p-3 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Helpful</span>
                    <span class="text-[11px] text-slate-400">Python</span>
                  </div>
                  <div class="mt-2 text-xs font-bold text-slate-900 dark:text-white">Numpy Vectorization</div>
                  <p class="text-[11px] text-slate-500 mt-0.5">Tối ưu tốc độ tính toán ma trận thay vì dùng vòng lặp.</p>
                </div>

              </div>
            </div>
          </div>

          <!-- ======================================================== -->
          <!-- STEP 2: READINESS CHECK QUIZ (Màn hình 3) -->
          <!-- ======================================================== -->
          <div id="vr-step-2" class="space-y-6" style="display: none;">
            
            <div class="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-2">
              <span>Đánh giá 3 prerequisite bắt buộc quan trọng nhất</span>
              <span class="font-bold text-blue-600">3 câu trắc nghiệm</span>
            </div>

            <!-- Question 1 -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-blue-700 dark:text-sky-400">Câu 1/3 • Phép nhân Ma trận & Vector (Required)</span>
                <span class="text-[11px] text-slate-400">Đại số tuyến tính</span>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Nếu ma trận $X$ có kích thước $(m \times n)$ và vector trọng số $w$ có kích thước $(n \times 1)$, kết quả phép nhân $X \cdot w$ sẽ có kích thước là bao nhiêu?
              </p>
              <div class="space-y-1.5">
                <label class="vr-option-label">
                  <input type="radio" name="vr-q1" value="A" class="mt-0.5 text-blue-600">
                  <span class="text-xs text-slate-700 dark:text-slate-300">Kích thước $(1 \times 1)$ (một số vô hướng duy nhất).</span>
                </label>
                <label class="vr-option-label">
                  <input type="radio" name="vr-q1" value="B" checked class="mt-0.5 text-blue-600">
                  <span class="text-xs text-slate-700 dark:text-slate-300 font-medium">Kích thước $(m \times 1)$ (vector chứa dự đoán cho toàn bộ $m$ mẫu dữ liệu).</span>
                </label>
                <label class="vr-option-label">
                  <input type="radio" name="vr-q1" value="C" class="mt-0.5 text-blue-600">
                  <span class="text-xs text-slate-700 dark:text-slate-300">Kích thước $(m \times n)$.</span>
                </label>
              </div>
            </div>

            <!-- Question 2 -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-blue-700 dark:text-sky-400">Câu 2/3 • Đạo hàm riêng & Gradient (Required)</span>
                <span class="text-[11px] text-slate-400">Giải tích tối ưu</span>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Trong tối ưu hóa hàm mất mát, vector Gradient $\nabla J(w)$ đại diện cho điều gì?
              </p>
              <div class="space-y-1.5">
                <label class="vr-option-label">
                  <input type="radio" name="vr-q2" value="A" checked class="mt-0.5 text-blue-600">
                  <span class="text-xs text-slate-700 dark:text-slate-300 font-medium">Hướng làm cho giá trị của hàm mất mát tăng nhanh nhất. Do đó ta cần đi ngược chiều gradient để giảm lỗi.</span>
                </label>
                <label class="vr-option-label">
                  <input type="radio" name="vr-q2" value="B" class="mt-0.5 text-blue-600">
                  <span class="text-xs text-slate-700 dark:text-slate-300">Điểm cực tiểu toàn cục đã đạt được và không cần di chuyển thêm.</span>
                </label>
                <label class="vr-option-label">
                  <input type="radio" name="vr-q2" value="C" class="mt-0.5 text-blue-600">
                  <span class="text-xs text-slate-700 dark:text-slate-300">Tốc độ chạy của mô hình trên GPU.</span>
                </label>
              </div>
            </div>

            <!-- Question 3 -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-blue-700 dark:text-sky-400">Câu 3/3 • Numpy Vectorization (Helpful)</span>
                <span class="text-[11px] text-slate-400">Python thực hành</span>
              </div>
              <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Tại sao khi lập trình Machine Learning với dữ liệu lớn, ta dùng phép nhân ma trận (np.dot) thay vì dùng vòng lặp for trong Python?
              </p>
              <div class="space-y-1.5">
                <label class="vr-option-label">
                  <input type="radio" name="vr-q3" value="A" checked class="mt-0.5 text-blue-600">
                  <span class="text-xs text-slate-700 dark:text-slate-300 font-medium">Vì Numpy thực thi bằng mã C tối ưu và tận dụng xử lý song song SIMD phần cứng, nhanh hơn gấp hàng trăm lần.</span>
                </label>
                <label class="vr-option-label">
                  <input type="radio" name="vr-q3" value="B" class="mt-0.5 text-blue-600">
                  <span class="text-xs text-slate-700 dark:text-slate-300">Vì vòng lặp for trong Python bị giới hạn tối đa 1000 phần tử.</span>
                </label>
              </div>
            </div>

          </div>

          <!-- ======================================================== -->
          <!-- STEP 3: READINESS RESULT (Màn hình 4) -->
          <!-- ======================================================== -->
          <div id="vr-step-3" class="space-y-5" style="display: none;">
            
            <!-- Result Banner: Dynamic -->
            <div id="vr-result-banner" class="rounded-2xl p-5 border text-center transition-all">
              <!-- Content will be injected by JS based on status -->
            </div>

            <!-- Prerequisites Assessment Table -->
            <div class="space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Chi tiết đánh giá từng kiến thức nền:</h4>
              <div id="vr-breakdown-container" class="space-y-2">
                <!-- Injected via JS -->
              </div>
            </div>

            <!-- Personalized Preparation Recommendation (Màn hình 5) -->
            <div id="vr-prep-recommendation" class="rounded-xl p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3" style="display: none;">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5 uppercase tracking-wide">
                  <span>📖</span>
                  <span>Đề xuất ôn tập nhanh (Grounded Sources):</span>
                </span>
                <span class="text-[11px] text-slate-400">Thời gian: ~3 phút</span>
              </div>
              <div class="space-y-2 text-xs">
                <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="h-6 w-6 rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 flex items-center justify-center font-bold text-[10px]">PDF</span>
                    <div>
                      <div class="font-bold text-slate-800 dark:text-slate-200">Slide Khởi động Toán cho AI — Giải tích Gradient</div>
                      <div class="text-[11px] text-slate-400">Trang 12–15: Ý nghĩa hình học của vector gradient</div>
                    </div>
                  </div>
                  <button type="button" onclick="openQuickReview()" class="px-3 py-1 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-slate-800 dark:text-sky-300 font-bold text-xs shrink-0">
                    Xem lại ↗
                  </button>
                </div>
              </div>
            </div>

          </div>

          <!-- ======================================================== -->
          <!-- STEP 4: QUICK REVIEW DRAWER (Màn hình 5) -->
          <!-- ======================================================== -->
          <div id="vr-step-4" class="space-y-4" style="display: none;">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div class="flex items-center gap-2">
                <button type="button" onclick="setStep(3)" class="text-xs font-bold text-blue-600 hover:underline">← Quay lại kết quả</button>
                <span>/</span>
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Ôn tập nhanh: Đạo hàm & Gradient</span>
              </div>
              <span class="text-[11px] bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 px-2 py-0.5 rounded-full font-bold">2 phút đọc</span>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <h4 class="font-bold text-sm text-slate-900 dark:text-white">Trọng tâm cần nhớ trước khi vào bài:</h4>
              <p>
                <strong>1. Gradient là gì?</strong> Với hàm số nhiều biến $J(w_1, w_2)$, gradient $\nabla J$ là một vector chứa các đạo hàm riêng: $\nabla J = [\frac{\partial J}{\partial w_1}, \frac{\partial J}{\partial w_2}]^T$.
              </p>
              <p>
                <strong>2. Hướng di chuyển:</strong> Vector gradient luôn chỉ về hướng làm giá trị hàm số tăng nhanh nhất. Để <em>giảm thiểu hàm mất mát (loss)</em>, quy tắc cập nhật luôn mang dấu trừ:
                <code class="block my-2 p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-blue-700 dark:text-sky-300 font-bold">
                  w := w - α · ∇J(w)
                </code>
              </p>
              <p>
                <strong>3. Triệt tiêu số mũ 2:</strong> Hàm MSE đặt hệ số $1/2m$ để khi lấy đạo hàm của $(\hat{y} - y)^2$, số mũ 2 triệt tiêu với $1/2$, giúp biểu thức gradient gọn gàng.
              </p>
            </div>

            <div class="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
              ✓ Bạn đã hoàn thành phần ôn tập nhanh! Giờ bạn có thể làm lại kiểm tra hoặc bắt đầu bài học.
            </div>
          </div>

        </div>

        <!-- Modal Bottom Actions Bar -->
        <div class="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
          <div id="vr-footer-left">
            <button type="button" onclick="closeVLearnReady()" class="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
              Đóng
            </button>
          </div>

          <div id="vr-footer-right" class="flex items-center gap-2">
            <!-- Dynamic Buttons will be managed by setStep() -->
          </div>
        </div>

      </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  var currentStep = 1;
  var currentStatus = 'READY'; // READY, PARTIALLY, NOT_READY

  window.openVLearnReady = function (lessonId) {
    initVLearnReadyModal();
    var modal = document.getElementById('vr-modal-backdrop');
    if (modal) {
      modal.style.display = 'flex';
      setStep(1);
    }
  };

  window.closeVLearnReady = function () {
    var modal = document.getElementById('vr-modal-backdrop');
    if (modal) {
      modal.style.display = 'none';
    }
  };

  window.setStep = function (step) {
    currentStep = step;
    
    // Hide all steps
    document.getElementById('vr-step-1').style.display = 'none';
    document.getElementById('vr-step-2').style.display = 'none';
    document.getElementById('vr-step-3').style.display = 'none';
    document.getElementById('vr-step-4').style.display = 'none';

    var targetStep = document.getElementById('vr-step-' + step);
    if (targetStep) targetStep.style.display = 'block';

    var footerRight = document.getElementById('vr-footer-right');
    var footerLeft = document.getElementById('vr-footer-left');

    if (step === 1) {
      footerLeft.innerHTML = `
        <button type="button" onclick="startLesson()" class="text-xs font-semibold text-slate-500 hover:text-blue-700 dark:hover:text-sky-300">
          Bỏ qua & Vào học ngay →
        </button>
      `;
      footerRight.innerHTML = `
        <button type="button" onclick="setStep(2)" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
          <span>⚡ Bắt đầu kiểm tra sẵn sàng</span>
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      `;
    } else if (step === 2) {
      footerLeft.innerHTML = `
        <button type="button" onclick="setStep(1)" class="text-xs font-semibold text-slate-500 hover:text-slate-800">
          ← Xem lại mục tiêu
        </button>
      `;
      footerRight.innerHTML = `
        <button type="button" onclick="submitQuiz()" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
          <span>Nộp bài & Đánh giá mức độ sẵn sàng ➔</span>
        </button>
      `;
    } else if (step === 3) {
      footerLeft.innerHTML = `
        <button type="button" onclick="setStep(2)" class="text-xs font-semibold text-slate-500 hover:text-slate-800">
          🔄 Kiểm tra lại
        </button>
      `;
      footerRight.innerHTML = `
        <button type="button" onclick="startLesson()" class="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
          <span>Bắt đầu bài học ngay 🚀</span>
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      `;
    } else if (step === 4) {
      footerLeft.innerHTML = `
        <button type="button" onclick="setStep(3)" class="text-xs font-semibold text-slate-500 hover:text-slate-800">
          ← Kết quả
        </button>
      `;
      footerRight.innerHTML = `
        <button type="button" onclick="setStep(2)" class="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100">
          Làm lại kiểm tra
        </button>
        <button type="button" onclick="startLesson()" class="px-5 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md">
          Vào bài học ngay 🚀
        </button>
      `;
    }
  };

  window.submitQuiz = function () {
    // Default to READY if not simulated
    renderResult(currentStatus);
    setStep(3);
  };

  window.simulateReadiness = function (status) {
    currentStatus = status;
    renderResult(status);
    setStep(3);
  };

  function renderResult(status) {
    var banner = document.getElementById('vr-result-banner');
    var breakdown = document.getElementById('vr-breakdown-container');
    var prepBox = document.getElementById('vr-prep-recommendation');

    if (status === 'READY') {
      banner.className = 'rounded-2xl p-5 border text-center transition-all bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800';
      banner.innerHTML = `
        <div class="inline-flex h-12 w-12 rounded-full bg-emerald-600 text-white items-center justify-center text-xl font-bold shadow-sm mb-2">
          ✓
        </div>
        <h3 class="text-lg font-bold text-emerald-900 dark:text-emerald-200">
          Bạn đã sẵn sàng cho bài học này!
        </h3>
        <p class="text-xs text-emerald-700 dark:text-emerald-400 mt-1 max-w-md mx-auto">
          Cả 3 kiến thức nền bắt buộc đều đã vững vàng. Bạn có thể tự tin bước vào học ngay mà không bị gián đoạn.
        </p>
      `;

      breakdown.innerHTML = `
        <div class="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-xs">
          <div class="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <span class="text-emerald-600 font-bold">✓</span>
            <span>Phép nhân Ma trận & Vector (Đại số)</span>
          </div>
          <span class="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded text-[10px]">Đã hiểu</span>
        </div>
        <div class="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-xs">
          <div class="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <span class="text-emerald-600 font-bold">✓</span>
            <span>Đạo hàm riêng & Gradient (Giải tích)</span>
          </div>
          <span class="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded text-[10px]">Đã hiểu</span>
        </div>
        <div class="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-xs">
          <div class="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <span class="text-emerald-600 font-bold">✓</span>
            <span>Numpy Vectorization (Python)</span>
          </div>
          <span class="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded text-[10px]">Đã hiểu</span>
        </div>
      `;

      prepBox.style.display = 'none';

    } else if (status === 'PARTIALLY') {
      banner.className = 'rounded-2xl p-5 border text-center transition-all bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800';
      banner.innerHTML = `
        <div class="inline-flex h-12 w-12 rounded-full bg-amber-600 text-white items-center justify-center text-xl font-bold shadow-sm mb-2">
          !
        </div>
        <h3 class="text-lg font-bold text-amber-900 dark:text-amber-200">
          Bạn gần như đã sẵn sàng (Partially Ready)
        </h3>
        <p class="text-xs text-amber-700 dark:text-amber-400 mt-1 max-w-md mx-auto">
          Dựa trên bài kiểm tra ngắn này, có 1 phần kiến thức nền bạn nên ôn nhanh trong ~3 phút để hiểu bài trọn vẹn.
        </p>
      `;

      breakdown.innerHTML = `
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
          <div class="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <span class="text-emerald-600 font-bold">✓</span>
            <span>Phép nhân Ma trận & Vector</span>
          </div>
          <span class="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded text-[10px]">Đã hiểu</span>
        </div>
        <div class="flex items-center justify-between p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs">
          <div class="flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-200">
            <span class="text-amber-600 font-bold">!</span>
            <span>Đạo hàm riêng & Gradient</span>
          </div>
          <span class="font-bold text-amber-800 dark:text-amber-300 bg-amber-200/80 dark:bg-amber-900 px-2 py-0.5 rounded text-[10px]">Nên ôn nhanh</span>
        </div>
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
          <div class="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <span class="text-emerald-600 font-bold">✓</span>
            <span>Numpy Vectorization</span>
          </div>
          <span class="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded text-[10px]">Đã hiểu</span>
        </div>
      `;

      prepBox.style.display = 'block';

    } else { // NOT_READY
      banner.className = 'rounded-2xl p-5 border text-center transition-all bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800';
      banner.innerHTML = `
        <div class="inline-flex h-12 w-12 rounded-full bg-rose-600 text-white items-center justify-center text-xl font-bold shadow-sm mb-2">
          !
        </div>
        <h3 class="text-lg font-bold text-rose-900 dark:text-rose-200">
          Có kiến thức nền quan trọng nên xem lại trước
        </h3>
        <p class="text-xs text-rose-700 dark:text-rose-400 mt-1 max-w-md mx-auto">
          Lesson hiện tại giả định bạn đã nắm chắc đạo hàm và ma trận để tính toán gradient. Hãy xem lại nguồn bên dưới để học hiệu quả nhất.
        </p>
      `;

      breakdown.innerHTML = `
        <div class="flex items-center justify-between p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-xs">
          <div class="flex items-center gap-2 font-semibold text-rose-900 dark:text-rose-200">
            <span class="text-rose-600 font-bold">✕</span>
            <span>Đạo hàm riêng & Gradient (Critical Prerequisite)</span>
          </div>
          <span class="font-bold text-rose-800 dark:text-rose-300 bg-rose-200 dark:bg-rose-900 px-2 py-0.5 rounded text-[10px]">Thiếu căn bản</span>
        </div>
        <div class="flex items-center justify-between p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs">
          <div class="flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-200">
            <span class="text-amber-600 font-bold">!</span>
            <span>Phép nhân Ma trận & Vector</span>
          </div>
          <span class="font-bold text-amber-800 dark:text-amber-300 bg-amber-200 dark:bg-amber-900 px-2 py-0.5 rounded text-[10px]">Chưa chắc</span>
        </div>
      `;

      prepBox.style.display = 'block';
    }
  }

  window.openQuickReview = function () {
    setStep(4);
  };

  window.startLesson = function () {
    closeVLearnReady();
    // If we are already on reader.html, just notify or scroll
    if (window.location.pathname.includes('reader.html')) {
      alert('🚀 Bắt đầu học bài Buổi 1: Day01! VLearn Tutor luôn sẵn sàng hỗ trợ ở cột bên phải.');
    } else {
      window.location.href = './reader.html?day=D01&part=day-slides-material_mttis0ey_q1ua59&page=1';
    }
  };

  // Auto-init on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVLearnReadyModal);
  } else {
    initVLearnReadyModal();
  }
})();
