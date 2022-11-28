import './app-info.css';
import Box from '../bloks/box/box';

const AppInfo = () => {
    return (
        <>
            <Box color="blue">
                <h1 className='title'>Учет сотрудников в компании N</h1>
                <h2 className='subtitle'>Общее число сотрудников: </h2>
                <h2 className='subtitle'>Премию получат: </h2>
            </Box>
        </>
    )
}

export default AppInfo;