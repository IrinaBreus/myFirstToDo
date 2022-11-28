import './add-form.css';

import Box from "../bloks/box/box";
import Input from "../bloks/input/input";


const AddForm = () => {
    
    return (
        <Box color='blue'>
            <h2 className="form__title">Добавьте нового сотрудника</h2>
            <form className="form__wrapper">
                <Input placeholder='Имя сотрудника'/>
                <Input placeholder='З/П в $'/>
                <button type='submit' className="form__btn">Добавить</button>
            </form>
        </Box>
    )
}

export default AddForm;