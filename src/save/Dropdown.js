function toggleDropdown(block) {
    var dropdown = block.querySelector('.dropdown');
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}
