window.addEventListener('scroll', function() {
    var block = document.querySelector('.DandGscrolled');
    var linkElements = document.querySelectorAll('.DandGscrolled .link a');
    var hElements = document.querySelectorAll('.DandGscrolled .h1 a');
    var loginButtons = document.querySelectorAll('.Login button');

    if (window.scrollY > 10) {
        block.style.background = 'white';
        block.style.color = 'black';

        linkElements.forEach(function(link) {
            link.style.color = 'black';
        });

        hElements.forEach(function(h1) {
            h1.style.color = 'black';
        });

        
        loginButtons.forEach(function(button) {
            button.style.color = 'black';
        });
    } else {
        block.style.background = '';
        block.style.color = '';

        linkElements.forEach(function(link) {
            link.style.color = '';
        });

        hElements.forEach(function(h1) {
            h1.style.color = '';
        });

       
        loginButtons.forEach(function(button) {
            button.style.color = '';
        });
    }
});
    