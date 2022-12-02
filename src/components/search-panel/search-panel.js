const SearchPanel = ({onUpdateSearch}) => {
    return (
        <input
            className="input"
            placeholder='Найти сотрудника' 
            onChange={(e) => onUpdateSearch(e.target.value)}
        />
    )
}

export default SearchPanel;