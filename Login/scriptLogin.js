document.addEventListener('DOMContentLoaded', function() {

    const loginBox = document.querySelector('.login-box');
    loginBox.classList.add('start');
    const registerBox = document.querySelector('.register-box');
    const registerLink = document.querySelector('.register-link .register');
    const loginLink = document.querySelector('.register-link .login');

    registerLink.addEventListener('click', function(event) {
        loginBox.classList.remove('start');
        registerBox.classList.add('active');
        loginBox.classList.remove('active');
    });

    loginLink.addEventListener('click', function(event) {
        loginBox.classList.add('active');
        registerBox.classList.remove('active');
    });
});
$(document).ready(function() {
    $("#loginButton").click(function() {
        const name = document.getElementById("userName").value;
        const pass = document.getElementById("passWord").value;

        if (name == "" || pass == "")
        {
            alert("Vui lòng nhập đầy đủ thông tin đăng nhập!!!");
        }

        else if (name == "admin" && pass == "0000")
        {
            alert("Đăng nhập thành công!!!");
        }

        else 
        {
            alert("Tài khoản hoặc mật khẩu không đúng!!");
        }
    })
})
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const leafPositions = [100, 200, 300, 400, 500, 600]; // Mảng chứa các vị trí top của lá

    function createLeaf() {
        for (let i = 0; i < 6; i++) {
            const leaf = document.createElement('div');
            leaf.classList.add('leaf');
            // Chọn ngẫu nhiên một vị trí left trong khoảng từ 0 đến chiều rộng của cửa sổ
            const leftPosition = Math.random() * window.innerWidth;
            const topPosition = leafPositions[i] - 650; // Sử dụng vị trí top từ mảng leafPositions
            leaf.style.left = leftPosition + 'px';
            leaf.style.top = topPosition + 'px';
            container.appendChild(leaf);
            // Thêm sự kiện kết thúc animation
            leaf.addEventListener('animationend', function() {
                // Loại bỏ lá khi animation kết thúc
                leaf.remove();
                // Tạo lá mới
                createLeaf();
            });
        }
    }

    // Tạo lá ban đầu
    createLeaf();
});

