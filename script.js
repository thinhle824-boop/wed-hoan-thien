// Hiệu ứng khi scroll trang
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'bg-opacity-95');
        nav.classList.remove('p-4');
    } else {
        nav.classList.add('p-4');
        nav.classList.remove('py-2');
    }
});

// Bạn có thể thêm logic đếm số (Counter) cho phần Social Proof ở đây nếu muốn sống động hơn