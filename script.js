document.addEventListener('DOMContentLoaded', function () {
    const productList = document.querySelector('.product-list');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const productsToShow = 3; // Số lượng sản phẩm muốn hiển thị cùng lúc
    const totalProducts = document.querySelectorAll('.product').length;
    const productWidth = document.querySelector('.product').offsetWidth;

    // Function to update the carousel position
    function updateCarousel() {
        const translateXValue = -(currentIndex * (productWidth + 10)); // Adjust for the margin
        productList.style.transform = `translateX(${translateXValue}px)`;
    }

    // Event listeners for next and prev buttons
    nextBtn.addEventListener('click', function () {
        if (currentIndex < totalProducts - productsToShow) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the start
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalProducts - productsToShow; // Loop back to the end
        }
        updateCarousel();
    });

    // Resize listener to ensure proper calculations when resizing window
    window.addEventListener('resize', function () {
        updateCarousel();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const banner = document.querySelector('.banner');

    // Các đường dẫn đến ảnh
    const images = [
        'assets/nen.jpg',
        'assets/7.jpg',
        'assets/19.jpg',
        'assets/menu1.jpg'
    ];

    let currentImageIndex = 0;

    // Function to change the background image
    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        banner.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }

    // Khởi tạo ảnh ban đầu
    banner.style.backgroundImage = `url(${images[currentImageIndex]})`;

    // Thay đổi ảnh sau mỗi 3 giây
    setInterval(changeBackgroundImage, 3000);
});
