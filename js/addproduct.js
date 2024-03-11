document.addEventListener('DOMContentLoaded', function () {
    const categoryBlock = document.querySelector('.category');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const findButton = document.querySelector('.blockSearch');
    const fileInput = document.getElementById('file1');
    const image = document.getElementById('image1');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                var category = this.getAttribute('data-category');
                var clothingType = this.getAttribute('data-clothing-type');
                var gender = this.getAttribute('data-gender');

                checkboxes.forEach(function (otherCheckbox) {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });

                var textToShow = gender + ':' + clothingType + ':' + category;
                categoryBlock.textContent = textToShow;
            } else {
                categoryBlock.textContent = 'Выберите категорию';
            }
        });
    });

    findButton.addEventListener('click', function () {
        categoryBlock.textContent = 'Выберите категорию';
        let f = fileInput.files[0];
        if (f) {
            image.src = URL.createObjectURL(f);
            localStorage.setItem('myImage', image.src);
        } else {
            
            image.src = '';
            localStorage.removeItem('myImage');
        }

        
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    });

   
    image.src = localStorage.getItem('myImage');
});





document.addEventListener('DOMContentLoaded', function () {
    const categoryBlock = document.querySelector('.category');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                
                var category = this.getAttribute('data-category');
                var clothingType = this.getAttribute('data-clothing-type');
                var gender = this.getAttribute('data-gender');

                
                checkboxes.forEach(function (otherCheckbox) {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });

                
                var textToShow = gender + ':' + clothingType + ':' + category;
                categoryBlock.textContent = textToShow;
            } else {
                categoryBlock.textContent = 'Выберите категорию';
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle');

    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const isActive = button.classList.contains('active');
        button.classList.toggle('active', !isActive);

        const cell = button.closest('.toggle');
        const isToggleOn = button.classList.contains('active');
        cell.style.backgroundColor = isToggleOn ? '#4CAF50' : '#f44336';
        button.textContent = isToggleOn ? 'Вкл' : 'Выкл';
      });
    });
  });