const bcrypt = require('bcryptjs');

const data = {
    users: [
      {
        userEmail: 'admin',
        userPassword: bcrypt.hashSync('12345678', 8), 
        userFname: 'Thinh',
        userLname: 'Ngo',
        address:'',
        phone: '094607186',
        isAdmin: true,
      },
      {
        userEmail: 'ngothinh2106@gmail.com',
        userPassword: bcrypt.hashSync('010820', 8), 
        userFname: 'Thinh',
        userLname: 'Ngo',
        address:'',
        phone: '094607186',
        isAdmin: false,
      },
      {
        userEmail: 'ngothinh210@gmail.com',
        userPassword: bcrypt.hashSync('0108201', 8), 
        userFname: 'Ngo',
        userLname: 'Thinh',
        address:'',
        phone: '0123456789',
        isAdmin: false,
      },                
    ],
    products:[
        {
            idProduct:1,
            productName: 'Giày Converse Chuck Taylor All Star Empowered Peace',
            productPrice:1600000,
            quantityInStock: 10,
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 2,
            productName: 'Giày Converse Chuck Taylor All Star VLTG Chevron',
            productPrice:1500000,
            quantityInStock: 10,
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 3,
            productName: 'Giày Converse Chuck Taylor All Star VLTG Leather And Chevron',
            productPrice:1900000,
            quantityInStock: 10,
            idBrand:1,
            idCategory:1,
        },
        {
            idProduct: 4,
            productName: 'Giày Converse Chuck Taylor All Star Renew',
            productPrice:1900000,
            quantityInStock: 10,
            idBrand:1,
            idCategory:1,
        },
        
    ],
    productdetail: [
        {
            idProduct: 1,
            productDescription:"Trở lại với mẫu giày Converse Chuck Taylor All Star Empowered Peace được thiết kế dựa trên nền đôi Chuck Taylor nguyên bản được bồi thêm cú twist với logo \"Vecro\" bên hông giày có thể tháo rời. Thông điệp \"Peace\" được thiết kế theo dạng Big Logo phối chuyển màu mát mắt mang cảm giác tươi mát cho mùa hè, đế giày Converse cao 25mm được làm từ chất liệu cao su lưu hóa tăng độ bền cho sản phẩm",
            image:"..//../image/Product/Converse/162053c-7.jpg",
        },
        {
            idProduct: 2,
            productDescription: "Mẫu giày Converse Chuck Taylor All Star 70 VLTG Chevron lấy cảm hứng từ những hoa văn táo bạo được mặc trên sân vào những năm 90, chúng tôi đã trang bị cho biểu tượng những lớp phủ chevron được cắt thành những lớp trung tính cực nhỏ. Một lớp da và da lộn phía trên và một đồ họa Chevron VLTG tạo nên một item xuất sắc.",
            image: "..//../image/Product/Converse/165958c-9.jpg",
        },
        {
            idProduct: 3,
            productDescription:"Mẫu giày Converse Chuck Taylor All Star 70 VLTG Leather And Chevron lấy cảm hứng từ những hoa văn táo bạo được mặc trên sân vào những năm 90, chúng tôi đã trang bị cho biểu tượng những lớp phủ chevron được cắt thành những lớp trung tính cực nhỏ. Một lớp da và da lộn phía trên và một đồ họa Chevron VLTG tạo nên một item xuất sắc.",
            image: "..//../image/Product/Converse/166005-9.png",
        },
        {
            idProduct: 4,
            productDescription:"Sau nhiều năm sáng tạo không ngừng nghỉ, Converse Renew luôn kiên định với mục tiêu tái chế từ những chất thải ra môi trường để sản xuất nên những đôi giày mới vừa chất vừa đẹp vừa độc đáo. Không chỉ phát triển thêm những công nghệ mới để có thể tái chế đa dạng vật liệu cũng như tối ưu hóa",
            image: "..//../image/Product/Converse/166070c-1.jpg",
        }
    ],
    brands:[
        {
            idBrand: 1,
            brandName: 'Converse',
        },
        {
            idBrand: 2,
            brandName: 'Vans',
        },
    ],
    categories:[
        {
            idCategory: 1,
            categoryName: 'Giày Converse',
        },
        {
            idCategory:2,
            categoryName:'Giày Vans',
        },
        {
            idCategory:3,
            categoryName:'Áo Converse',
        }
    ],
    productsizes:[
        {
            idSize: 1,
            idProduct:1,
            productSize:"Size 4.0US - Size 35.0VN - 22.0CM",
        },
        {
            idSize: 2,
            idProduct:1,
            productSize:"Size 4.5US - Size 36.0VN - 22.5CM"
        },
        {
            idSize: 3,
            idProduct:1,
            productSize:"Size 5.0US - Size 36.5VN - 23.0CM"
        },
        {
            idSize: 4,
            idProduct:1,
            productSize:"Size 5.5US - Size 37.0VN - 23.5CM"
        },
        {
            idSize: 5,
            idProduct:1,
            productSize:"Size 6.0US - Size 38.0VN - 24.0CM"
        },
        {
            idSize: 6,
            idProduct:1,
            productSize:"Size 6.5US - Size 38.5VN - 24.5CM"
        },
        {
            idSize: 7,
            idProduct:1,
            productSize:"Size 7.0US - Size 39.0VN - 25.0CM"
        },
        {
            idSize: 8,
            idProduct:1,
            productSize:"Size 7.5US - Size 40.0VN - 25.5CM"
        },
        {
            idSize: 9,
            idProduct:1,
            productSize:"Size 8.0US - Size 40.5VN - 26.0CM"
        },
        {
            idSize: 10,
            idProduct:1,
            productSize:"Size 8.5US - Size 41.0VN - 26.5CM"
        },
        {
            idSize: 11,
            idProduct:1,
            productSize:"Size 9.0US - Size 42.0VN - 27.0CM"
        },
        {
            idSize: 12,
            idProduct:1,
            productSize:"Size 9.5US - Size 42.5VN - 27.5CM"
        },
        {
            idSize: 13,
            idProduct:1,
            productSize:"Size 10 US - Size 43.0VN - 28.0CM"
        },
        {
            idSize: 1,
            idProduct:2,
            productSize:"Size 4.0US - Size 35.0VN - 22.0CM",
        },
        {
            idSize: 2,
            idProduct:2,
            productSize:"Size 4.5US - Size 36.0VN - 22.5CM"
        },
        {
            idSize: 3,
            idProduct:2,
            productSize:"Size 5.0US - Size 36.5VN - 23.0CM"
        },
        {
            idSize: 4,
            idProduct:2,
            productSize:"Size 5.5US - Size 37.0VN - 23.5CM"
        },
        {
            idSize: 5,
            idProduct:2,
            productSize:"Size 6.0US - Size 38.0VN - 24.0CM"
        },
        {
            idSize: 6,
            idProduct:2,
            productSize:"Size 6.5US - Size 38.5VN - 24.5CM"
        },
        {
            idSize: 7,
            idProduct:2,
            productSize:"Size 7.0US - Size 39.0VN - 25.0CM"
        },
        {
            idSize: 8,
            idProduct:2,
            productSize:"Size 7.5US - Size 40.0VN - 25.5CM"
        },
        {
            idSize: 9,
            idProduct:2,
            productSize:"Size 8.0US - Size 40.5VN - 26.0CM"
        },
        {
            idSize: 10,
            idProduct:2,
            productSize:"Size 8.5US - Size 41.0VN - 26.5CM"
        },
        {
            idSize: 11,
            idProduct:2,
            productSize:"Size 9.0US - Size 42.0VN - 27.0CM"
        },
        {
            idSize: 12,
            idProduct:2,
            productSize:"Size 9.5US - Size 42.5VN - 27.5CM"
        },
        {
            idSize: 13,
            idProduct:2,
            productSize:"Size 10 US - Size 43.0VN - 28.0CM"
        },
        {
            idSize: 1,
            idProduct:3,
            productSize:"Size 4.0US - Size 35.0VN - 22.0CM",
        },
        {
            idSize: 2,
            idProduct:3,
            productSize:"Size 4.5US - Size 36.0VN - 22.5CM"
        },
        {
            idSize: 3,
            idProduct:3,
            productSize:"Size 5.0US - Size 36.5VN - 23.0CM"
        },
        {
            idSize: 4,
            idProduct:3,
            productSize:"Size 5.5US - Size 37.0VN - 23.5CM"
        },
        {
            idSize: 5,
            idProduct:3,
            productSize:"Size 6.0US - Size 38.0VN - 24.0CM"
        },
        {
            idSize: 6,
            idProduct:3,
            productSize:"Size 6.5US - Size 38.5VN - 24.5CM"
        },
        {
            idSize: 7,
            idProduct:3,
            productSize:"Size 7.0US - Size 39.0VN - 25.0CM"
        },
        {
            idSize: 8,
            idProduct:3,
            productSize:"Size 7.5US - Size 40.0VN - 25.5CM"
        },
        {
            idSize: 9,
            idProduct:3,
            productSize:"Size 8.0US - Size 40.5VN - 26.0CM"
        },
        {
            idSize: 10,
            idProduct:3,
            productSize:"Size 8.5US - Size 41.0VN - 26.5CM"
        },
        {
            idSize: 11,
            idProduct:3,
            productSize:"Size 9.0US - Size 42.0VN - 27.0CM"
        },
        {
            idSize: 12,
            idProduct:3,
            productSize:"Size 9.5US - Size 42.5VN - 27.5CM"
        },
        {
            idSize: 13,
            idProduct:3,
            productSize:"Size 10 US - Size 43.0VN - 28.0CM"
        },
        {
            idSize: 1,
            idProduct:4,
            productSize:"Size 4.0US - Size 35.0VN - 22.0CM",
        },
        {
            idSize: 2,
            idProduct:4,
            productSize:"Size 4.5US - Size 36.0VN - 22.5CM"
        },
        {
            idSize: 3,
            idProduct:4,
            productSize:"Size 5.0US - Size 36.5VN - 23.0CM"
        },
        {
            idSize: 4,
            idProduct:4,
            productSize:"Size 5.5US - Size 37.0VN - 23.5CM"
        },
        {
            idSize: 5,
            idProduct:4,
            productSize:"Size 6.0US - Size 38.0VN - 24.0CM"
        },
        {
            idSize: 6,
            idProduct:4,
            productSize:"Size 6.5US - Size 38.5VN - 24.5CM"
        },
        {
            idSize: 7,
            idProduct:4,
            productSize:"Size 7.0US - Size 39.0VN - 25.0CM"
        },
        {
            idSize: 8,
            idProduct:4,
            productSize:"Size 7.5US - Size 40.0VN - 25.5CM"
        },
        {
            idSize: 9,
            idProduct:4,
            productSize:"Size 8.0US - Size 40.5VN - 26.0CM"
        },
        {
            idSize: 10,
            idProduct:4,
            productSize:"Size 8.5US - Size 41.0VN - 26.5CM"
        },
        {
            idSize: 11,
            idProduct:4,
            productSize:"Size 9.0US - Size 42.0VN - 27.0CM"
        },
        {
            idSize: 12,
            idProduct:4,
            productSize:"Size 9.5US - Size 42.5VN - 27.5CM"
        },
        {
            idSize: 13,
            idProduct:4,
            productSize:"Size 10 US - Size 43.0VN - 28.0CM"
        },        
    ]
};
  
  module.exports = data;