const homeProduct = document.querySelector('.js-home-product')
const products = [
    {
        id: 1,
        url: 'https://cf.shopee.vn/file/528aee077c409ac8ad0d6ab13a9129ad_tn',
        name: 'Màn hình máy tính Glowy 19 inch(GL19), màn hình PC thiết kế nhỏ gọn 1440x900 , 60-75Hz ,16,7 triệu màu - BH 12 Tháng',
        oldPrice: '₫2.766.000',
        newPrice: '₫2.489.400',
        quantitySold: 88,
        origin: 'Nhật bản',
        discount: 10
    },
    {
        id: 2,
        url: 'https://cf.shopee.vn/file/208db6bb03eb0a3b2dbebce4f25c2242_tn',
        name: 'LEDPC-Đèn-led-Ambilight-USB-sáng-theo-màu-màn-hình-máy-tính-80-hiệu-ứng-nháy-theo-nhạc',
        oldPrice: '₫1.080.220',
        newPrice: '₫918.220',
        quantitySold: 683,
        origin: 'Hà Nội',
        discount: 15
    },
    {
        id: 3,
        url: 'https://cf.shopee.vn/file/9d6ffb68042d2b3903b6d93af13fd7a0_tn',
        name: 'Bàn-Phím-Inphic-V520-Thiết-Kế-Sang-Trọng-Cực-Kì-Bắt-Mắt',
        oldPrice: '₫350.000',
        newPrice: '₫245.000',
        quantitySold: '2,1k',
        origin: 'Hà Nội',
        discount: 30
    },
    {
        id: 4,
        url: 'https://cf.shopee.vn/file/576a08787fd3ca892632144da990f468_tn',
        name: 'Giá Đỡ VGA Coolmoon Led RGB Độ Dài 25cm - Đồng Bộ Hub Coolmoon / Auto',
        oldPrice: '₫150.000',
        newPrice: '₫105.000',
        quantitySold: '2,1k',
        origin: 'Hưng Yên',
        discount: 30
    },
    {
        id: 5,
        url: 'https://cf.shopee.vn/file/78e03b3a2abbeccb8dfd2b4ee749b6c3_tn',
        name: 'CHÍNH-HÃNG-Đèn-Led-Ambilight-WiFi-theo-mầu-màn-hình-không-cần-cắm-dây-usb-siêu-mượt-(60hz)-cực-nhẹ-(ít-hơn-1-cpu)',
        oldPrice: '₫1.108.000',
        newPrice: '₫897.480',
        quantitySold: 408,
        origin: 'Hải Dương',
        discount: 19
    },
    {
        id: 6,
        url: 'https://cf.shopee.vn/file/adf6448f3eacc46dcba06cbe5d6da483_tn',
        name: 'Bàn-phím-máy-tính-Mini-tiện-dụng',
        oldPrice: '₫320.000',
        newPrice: '₫204.800',
        quantitySold: '3,9k',
        origin: 'TP Hồ Chí Minh',
        discount: 36
    },
    {
        id: 7,
        url: 'https://cf.shopee.vn/file/d1e112026657cc8ccda13eadd65786c7_tn',
        name: 'Máy-tính-Casio-fx-570ES-Plus-2hand-chính-hãng',
        oldPrice: '₫170.000',
        newPrice: '₫170.000',
        quantitySold: 254,
        origin: 'TP Hồ Chí Minh',
        discount: 0
    },
    {
        id: 8,
        url: 'https://cf.shopee.vn/file/4a894b9452c62e384e016c0b1c06c384_tn',
        name: 'Máy-tính-bộ-để-bàn-mini-HP-elitedesk-800-G2-ship-Mỹ-siêu-nhỏ-gọn-siêu-mạnh',
        oldPrice: '₫5.490.000',
        newPrice: '₫5.490.000',
        quantitySold: 30,
        origin: 'Kiên Giang',
        discount: 0
    },
    {
        id: 9,
        url: 'https://cf.shopee.vn/file/dbaa7ad332b32a14f07cd30e6d81f14a_tn',
        name: '4K-NÉT-GẤP-4-FULLHD-Webcam-máy-tính-4K-38400-x-2160p-và-2K-2560-x-1440p-Thu-hình-cho-máy-tính-pc-TV-để-bàn',
        oldPrice: '₫320.000',
        newPrice: '₫204.800',
        quantitySold: '3,9k',
        origin: 'TP Hồ Chí Minh',
        discount: 36
    },
    {
        id: 10,
        url: 'https://cf.shopee.vn/file/adf6448f3eacc46dcba06cbe5d6da483_tn',
        name: 'Bàn-phím-máy-tính-Mini-tiện-dụng',
        oldPrice: '₫1.264.500',
        newPrice: '₫625.000',
        quantitySold: 711,
        origin: 'Hà Nội',
        discount: 48
    }
]

var htmls = products.map(product => (
    `<div class="col l-2-4 m-4 c-6">
        <a href="" class="home-product-item">
            <div class="home-product-item__img"
                style="background-image: url(${product.url});">
            </div>
            <h5 class="home-product-item__name">
                ${product.name}
            </h5>
            <div class="home-product-item__price">
                <span class="home-product-item__price-old">${product.oldPrice}</span>
                <div class="home-product-item__price-current">${product.newPrice}</div>
            </div>
            <div class="home-product-item__action">
                <span class="home-product-item__like home-product-item__like--liked">
                    <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                    <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                </span>
                <div class="home-product-item__rating">
                    <i class="home-product-item__star--gold fa-solid fa-star"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <span class="home-product-item__sold">${product.quantitySold} Đã bán</span>
            </div>

            <div class="home-product-item__origin">
                <span class="home-product-item__origin-name">${product.origin}</span>
            </div>

            <div class="home-product-item__favourite">
                <i class="home-product-item__favourite-icon fa-solid fa-check"></i>
                <span>Yêu thích</span>
            </div>

            <div class="home-product-item__sale-off">
                <span class="home-product-item__sale-off-percent">${product.discount}%</span>
                <span class="home-product-item__sale-off-label">GIẢM</span>
            </div>
        </a>
    </div>`
))

homeProduct.innerHTML = htmls.join('')