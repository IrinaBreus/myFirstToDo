import './employees-list.css';
import Box from '../bloks/box/box';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onToggle, onDelete, onChangeSalary}) => {
    
    
    const lists = data.map(list => {
        
        const {id, ...item} = list;
        return (
            <EmployeesListItem 
                key={id} 
                id={id}
                onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}
                onDelete={() => onDelete(id)}
                onChangeSalary={(e) => onChangeSalary(id, e.target.value)}
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