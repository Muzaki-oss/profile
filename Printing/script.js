// Toggle menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form alert sederhana
// document.getElementById('contactForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Terima kasih! Pesan Anda telah dikirim.');
//     this.reset();
Swal.fire({
    icon: "success",
    title: "Pesan Berhasil Dikirim!",
    text: "Berikut hasil input Anda.",
    showConfirmButton: true,
}).then(() => {
    // Tampilkan hasil input setelah alert ditutup
    let hasilDiv = document.getElementById("contactForm");
    if (!hasilDiv) {
        hasilDiv = document.createElement("div");
        hasilDiv.id = "hasil";
        hasilDiv.style.margin = "30px auto";
        hasilDiv.style.width = "60%";
        hasilDiv.style.background = "white";
        hasilDiv.style.padding = "15px";
        hasilDiv.style.borderRadius = "10px";
        hasilDiv.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        document.body.appendChild(hasilDiv);
    }
});
