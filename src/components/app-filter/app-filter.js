import './app-filter.css';

const AppFilter = ({filter, onFilter}) => {

    const btnsData = [
        {name: 'all', label: 'Все сотрудники', clazz: 'btn btn-left'},
        {name: 'risen', label: 'На повышение', clazz: 'btn'},
        {name: 'moreThen1000', label: 'З/П больше 1000$', clazz: 'btn btn-right'},
    ];

    const btns = btnsData.map(({name, label, clazz}) => {
        const active = filter === name;
        const activeClass = active ? `${clazz} active` : clazz;
        return (
            <button 
                key={name}
                className={activeClass}
                type="button"
                onClick={() => onFilter(name)}
                >
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
           {btns}
        </div>
    )
}

export default AppFilter;