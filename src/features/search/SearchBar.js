import '../../assets/Styles.css';

const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search_input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                    placeholder="Buscar"
                />
                <button className="search_button"> buscar
                </button>
            </form>
        </header>
    )
}
export default SearchBar;