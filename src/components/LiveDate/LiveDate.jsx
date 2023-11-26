// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';

const LiveDate = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {

        // Функция для обновления текущей даты каждую секунду
        const updateDate = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(updateDate);
    }, []); // Пустой массив означает, что эффект выполняется только при монтировании компонента

    return (
        <div className="bg-indigo-100 bg-opacity-100 p-4 ">

            <input
                type="text"
                value={currentDate.toLocaleString()}
                readOnly
                className="text-xl bg-transparent text-black border-black "
            />

        </div>
    );
};

export default LiveDate;
