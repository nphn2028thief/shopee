const registerBtn = document.querySelector('.js-btn-register');
        const loginBtn = document.querySelector('.js-btn-login');
        const modal = document.querySelector('.modal');
        const modalRegister = document.querySelector('.js-register-form');
        const modalLogin = document.querySelector('.js-login-form')
        const backBtns = document.querySelectorAll('.js-btn-back');
        const modalBody = document.querySelector('.modal-body');
        const loginBtnInside = document.querySelector('.js-btn-login-inside');
        const registerBtnInside = document.querySelector('.js-btn-register-inside');

        // Modal Register
        function showModalRegister() {
            modal.classList.add('displayModal');
            modalLogin.classList.add('hideModal');
            modalRegister.classList.remove('hideModal');
        }

        // Modal Login
        function showModalLogin() {
            modal.classList.add('displayModal');
            modalRegister.classList.add('hideModal');
            modalLogin.classList.remove('hideModal');
        }

        function hideModal() {
            modal.classList.remove('displayModal');
        }

        for (backBtn of backBtns) {
            backBtn.addEventListener('click', hideModal);
        }

        // Event
        modal.addEventListener('click', hideModal);
        registerBtn.addEventListener('click', showModalRegister);
        loginBtnInside.addEventListener('click', showModalLogin);

        modalRegister.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        loginBtn.addEventListener('click', showModalLogin);
        registerBtnInside.addEventListener('click', showModalRegister);

        modalLogin.addEventListener('click', (e) => {
            e.stopPropagation();
        })