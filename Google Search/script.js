function validateSearchInput() {
    var searchInput = document.getElementById('search-input').value;
    if (searchInput.trim() === '') {
        alert('Будь ласка, введіть текст для пошуку.');
        return false;
    }
    return true;
}

function validateAdvancedSearch() {
    return true;
}

function tryLuck() {
    alert('Мені пощастить!');
}