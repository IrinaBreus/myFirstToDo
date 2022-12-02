import './app.css';
import AppInfo from '../app-info/app-info';
import Box from '../bloks/box/box';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import AddForm from '../add-form/add-form';
import { useState } from 'react';
import uuid from 'react-uuid';

const App = () => {

    const data = [
        {id: 1, name: 'John S.', salary: 800, increase: false, risen: false},
        {id: 2, name: 'Alex K.', salary: 5000, increase: false, risen: false},
        {id: 3, name: 'Carl W.', salary: 3000, increase: false, risen: false}
    ]

    const [empl, setEmpl] = useState(data);

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    
    const onToggle = (id, type) => {
        setEmpl(empl.map(elem => {
            if (elem.id === id) {
                elem[type] = !elem[type]
            }
            return elem;
        }))
    }

    const onDelete = (id) => {
        setEmpl(empl.filter(elem => elem.id !== id));
    }

    const addItem = (name, salary) => {
        let obj = {
            id: uuid(),
            name,
            salary,
            increase: false,
            risen: false
        }

        setEmpl([...empl, obj]);
    }

    const searchEmpl = (items, str) => {
        if (str.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(str.toLowerCase()) > - 1;
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'risen':
                return items.filter(item => item.risen);
            case 'moreThen1000' :
                return items.filter(item => item.salary > 1000);
            default :
                return items;
        }
    }

    const onFilter = (filter) => {
        setFilter(filter);
    }

    const visibleData = filterPost(searchEmpl(empl, term), filter);

    return (
        <div className='app'>
            <AppInfo data={empl}/>
            <Box color='blue'>
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <AppFilter filter={filter} onFilter={onFilter}/>
            </Box>
            <EmployeesList 
                data={visibleData} 
                onToggle={onToggle}
                onDelete={onDelete}
            />
            <AddForm addItem={addItem}/>
        </div>
    )
}

export default App;