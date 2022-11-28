import './employees-list.css';
import Box from '../bloks/box/box';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onToggle}) => {
    
    
    const lists = data.map(list => {
        
        const {id, ...item} = list;
        return (
            <EmployeesListItem 
                key={id} 
                id={id}
                onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}
                {...item}
            />
        )
    });

    return (
        <Box color='white'>
            <ul>
                {lists}
            </ul>
        </Box>
    )
}

export default EmployeesList;