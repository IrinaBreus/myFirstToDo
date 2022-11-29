import './add-form.css';

import Box from "../bloks/box/box";
import { useState } from 'react';


const AddForm = ({addItem}) => {
    
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && salary) {
            addItem(name, salary);
            setName('');
            setSalary('');
        }
    }

    return (
        <Box color='blue'>
            <h2 className="form__title">Добавьте нового сотрудника</h2>
            <form className="form__wrapper">
                <input 
                    type='text'
                    className="input" 
                    placeholder='Имя сотрудника'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type='number'
                    className="input" 
                    placeholder='З/П в $'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <button 
                    type='submit' 
                    className="form__btn"
                    onClick={onSubmit}
                >Добавить</button>
            </form>
        </Box>
    )
}

export default AddForm;