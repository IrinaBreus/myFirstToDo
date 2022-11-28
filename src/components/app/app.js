import './app.css';
import AppInfo from '../app-info/app-info';
import Box from '../bloks/box/box';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import AddForm from '../add-form/add-form';

const App = () => {

    const data = [
        {id: 1, name: 'John S.', salary: 800, increase: false, risen: false},
        {id: 2, name: 'Alex K.', salary: 5000, increase: false, risen: true},
        {id: 3, name: 'Carl W.', salary: 3000, increase: false, risen: false}
    ]

    return (
        <div className='app'>
            <AppInfo/>
            <Box color='blue'>
                <SearchPanel/>
                <AppFilter/>
            </Box>
            <EmployeesList 
                data={data} 
            />
            <AddForm/>
        </div>
    )
}

export default App;