   
function filterSelection(category) {
    let items = document.querySelectorAll('.porto');
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

 /*email validation */



/*send email */

