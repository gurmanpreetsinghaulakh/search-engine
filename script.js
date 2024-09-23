document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const clearHistoryButton = document.getElementById('clear-history');
    const searchHistoryList = document.getElementById('search-history');

    const loadSearchHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistoryList.innerHTML = history.map(term => `<li>${term}</li>`).join('');
    };
    const saveSearchTerm = (term) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!history.includes(term)) {
            history.push(term);
            localStorage.setItem('searchHistory', JSON.stringify(history));
            loadSearchHistory();
        }
    };
    const clearSearchHistory = () => {
        localStorage.removeItem('searchHistory');
        searchHistoryList.innerHTML = '';
    };
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            saveSearchTerm(searchTerm);
            searchInput.value = '';
        }
    });

    clearHistoryButton.addEventListener('click', clearSearchHistory);
    loadSearchHistory();
});