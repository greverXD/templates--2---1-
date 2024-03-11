let searchInput = document.querySelector('#searchInput');


    let categoryButtons = document.querySelectorAll('.category');


    searchInput.addEventListener('input', searchItems);

    let searchInput = document.querySelector('#searchInput');


    let categoryButtons = document.querySelectorAll('.category');


    searchInput.addEventListener('input', searchItems);
        document.addEventListener('DOMContentLoaded', function () {
            var modifyBtn = document.getElementById('myBtn');
            var firstNameInput = document.getElementById('firstName');
            var lastNameInput = document.getElementById('lastName');
            var emailInput = document.getElementById('email');
            var passwordInput = document.getElementById('password1');
            var eyeIcon = document.getElementById('eyeicon1');

            modifyBtn.addEventListener('click', function () {
                if (modifyBtn.textContent === 'Modify profile') {
                    
                    firstNameInput.disabled = false;
                    lastNameInput.disabled = false;
                    emailInput.disabled = false;
                    passwordInput.disabled = false;
                    eyeIcon.style.display = 'block'; 

                    
                    modifyBtn.innerHTML = '<h2 style="font-size: 20px;">Save profile</h2>';
                } else {
                   
                    firstNameInput.disabled = true;
                    lastNameInput.disabled = true;
                    emailInput.disabled = true;
                    passwordInput.disabled = true;
                    eyeIcon.style.display = 'none'; 

                    
                    modifyBtn.innerHTML = '<h2 style="font-size: 20px;">Modify profile</h2>';
                }
            });
        });