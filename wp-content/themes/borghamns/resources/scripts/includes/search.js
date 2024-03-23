const pageSearch = () => {

    const searchForm = document.getElementById('search-wrap');
    const searchTrigger = document.getElementById('search-trigger');
    const searchClose = document.getElementById('search-close');

    searchTrigger.addEventListener( 'click', () => {

        searchTrigger.classList.add('d-none');
        
        searchForm.classList.remove('d-none');
        searchForm.classList.add('d-flex');

        document.getElementById('search_q').focus();

    } );

    searchClose.addEventListener( 'click', () => {

        searchTrigger.classList.remove('d-none');
        
        searchForm.classList.add('d-none');
        searchForm.classList.remove('d-flex');

    } );

}

export default pageSearch;