document.addEventListener("DOMContentLoaded", () => {
    // Logic tạo dấu chân khi cuộn trang
    let lastScrollTop = 0;
    const container = document.getElementById('scroll-paws-container');
    let isLeft = true; // Biến để đổi chân trái/phải

    window.addEventListener("scroll", () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        
        // Cứ mỗi 100px cuộn sẽ sinh ra một dấu chân
        if (Math.abs(st - lastScrollTop) > 100) {
            createPawPrint(st);
            lastScrollTop = st;
        }
    });

    function createPawPrint(scrollY) {
        const paw = document.createElement('i');
        paw.className = 'fa-solid fa-paw scroll-paw-icon';
        
        // Vị trí X ngẫu nhiên nhưng theo lề hai bên màn hình để không che mất content chính
        // Chân trái ở bên trái màn hình, chân phải ở bên phải
        const screenWidth = window.innerWidth;
        let randomX;
        let rotation;

        if (isLeft) {
            // Random khoảng 5% đến 15% chiều rộng màn hình (Bên trái)
            randomX = Math.floor(Math.random() * (screenWidth * 0.1)) + (screenWidth * 0.05);
            rotation = -15; // Hơi nghiêng sang trái
        } else {
            // Random khoảng 85% đến 95% chiều rộng màn hình (Bên phải)
            randomX = Math.floor(Math.random() * (screenWidth * 0.1)) + (screenWidth * 0.85);
            rotation = 15; // Hơi nghiêng sang phải
        }

        // Vị trí Y tương ứng với vị trí scroll hiện tại + offset của window
        const windowHeight = window.innerHeight;
        const randomY = scrollY + (windowHeight / 2) + (Math.random() * 100 - 50);

        paw.style.left = `${randomX}px`;
        paw.style.top = `${randomY}px`;
        paw.style.transform = `rotate(${rotation}deg)`;

        container.appendChild(paw);

        // Xóa element sau 2 giây để tránh làm nặng DOM (bằng đúng thời gian animation CSS)
        setTimeout(() => {
            paw.remove();
        }, 2000);

        // Đảo chân cho bước tiếp theo
        isLeft = !isLeft;
    }
});