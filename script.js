// Fungsi untuk animasi counter
function animateCounters() {
    // Ambil semua elemen counter
    const counters = document.querySelectorAll('.counter h1 span');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count'); // Ambil nilai target
            const count = +counter.innerText; // Ambil nilai awal (0)

            // Kecepatan animasi
            const speed = 50;

            // Hitung increment
            const increment = target / speed;

            // Jika nilai saat ini masih di bawah target
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20); // Panggil ulang updateCount setelah 20ms
            } else {
                counter.innerText = target; // Pastikan nilai terakhir sama dengan target
            }
        };

        updateCount(); // Jalankan fungsi
    });
}

// Fungsi untuk mengecek apakah elemen berada di dalam viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Event listener untuk animasi saat scroll
document.addEventListener('scroll', function() {
    const countersSection = document.querySelector('.counters');

    if (isInViewport(countersSection)) {
        animateCounters(); // Panggil fungsi animasi jika elemen terlihat
        // Hapus event listener setelah animasi pertama kali muncul
        document.removeEventListener('scroll', arguments.callee);
    }
});
