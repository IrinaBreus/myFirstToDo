import './employees-list-item.css';

import star from './star.svg';
import cookie from './cookie.svg';
import trash from './trash.svg';

const EmployeesListItem = ({name, salary, increase, risen, onToggle}) => {

    const classes = increase ? "list-item increase" : "list-item";
    const classStar = risen ? "star-icon show" : 'star-icon hidden'

    return (
        <li className={classes}>
            <span className="names"
                  data-toggle='risen'
                  onClick={onToggle}
            >{name}</span>
            <input type="text" className="empl" defaultValue={`${salary}$`}/>
            <div className="btns">
                <button className="btn-icon"
                        data-toggle="increase"
                        onClick={onToggle}        
                >
                    <img src={cookie} alt="cookie"/>
                </button>
                <button className="btn-icon">
                    <img src={trash} alt="trash" />
                </button>
                <span className={classStar}>
                    <img src={star} alt="star" />
                </span>
            </div>
        </li>
    )
}

export default EmployeesListItem;