
const clickSound = document.getElementById('click-sound');

function playClickSound() {
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(err => console.log("Audio dimainkan setelah interaksi pengguna."));
    }
}

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        playClickSound();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

function filterCertificates(category) {
    if (typeof playClickSound === "function") {
        playClickSound();
    }

    const buttons = document.querySelectorAll('.cert-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    event.target.classList.add('active');

    const certItems = document.querySelectorAll('.certificate-item');

    certItems.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hide');
        } else {
            if (item.classList.contains(category)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        }
    });
}

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    playClickSound();

    const nama = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('message').value;

    if (nama !== "" && email !== "" && pesan !== "") {
        alert("Pesan Anda Berhasil Dikirim");
        contactForm.reset();
    } else {
        alert("Semua data wajib diisi!");
    }
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function () {
    playClickSound();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 5. Fitur Klik Galeri (Perbesar Gambar) + Efek Suara Klik
const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
    img.addEventListener('click', function () {
        playClickSound(); // <-- MEMICU SUARA KLIK
        window.open(this.src, '_blank');
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        const offsetTarget = window.innerWidth < 768 ? 80 : 60;

        window.scrollTo({
            top: targetSection.offsetTop - offsetTarget,
            behavior: 'smooth'
        });
    });
});