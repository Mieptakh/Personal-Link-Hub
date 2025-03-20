function animateCount(id, target) {
    const element = document.getElementById(id);
    if (!element) return; // Pastikan elemen ada, jika tidak hentikan fungsi

    const duration = 2000; // Durasi animasi dalam ms
    const startTime = performance.now();

    function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.round(progress * target); // Gunakan Math.round()

        element.textContent = currentCount;

        if (progress < 1) {
            requestAnimationFrame(updateCount);
        }
    }

    requestAnimationFrame(updateCount);
}

// Jalankan animasi hanya saat elemen terlihat di layar (opsional untuk optimasi)
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount("projects-count", 11);
                animateCount("followers-count", 2000);
                animateCount("certifications-count", 100);
                observer.disconnect(); // Hentikan observer setelah animasi dimulai
            }
        });
    });

    const statsSection = document.querySelector(".stats"); // Sesuaikan dengan kelas div statistik
    if (statsSection) observer.observe(statsSection);
});
