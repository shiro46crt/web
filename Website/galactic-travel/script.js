
// =========================
// スクロール時のフェードイン演出
// =========================

const revealTargets = document.querySelectorAll(
    ".introduction, .planet-section, .last-section"
);

revealTargets.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealTargets.forEach((element) => {
    observer.observe(element);
});

// =========================
// 現在のページの読み込み完了
// =========================

window.addEventListener("load", () => {
    console.log("GALACTIC TRAVEL BLOG READY");
});
