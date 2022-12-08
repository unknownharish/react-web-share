import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setCurrentWeeks, setCurrentYear, setCurrentWeek } from '../redux/slice'


export default function Header() {



    const data = useSelector(x => x.calender);
    const dispatch = useDispatch();


    const [week, setWeek] = useState(['week', ...Array(52)]);


    const months = ['Months','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']



    function handleWeek(week) {

        dispatch(setCurrentWeek(week))

    }




    function handleYear(value) {


        let year = data.current.year;
        let days = checkYear(year) ? 366 : 365

        let isleap = checkYear(year)

        let totalWeeks = days / 7

        dispatch(setCurrentWeeks(totalWeeks))
        dispatch(setCurrentYear({value,isleap}))


        let total = Array(parseInt(totalWeeks))
        setWeek(['weeks', ...total])


    }

    function checkYear(year) {

        if (year % 400 == 0)
            return true;


        if (year % 100 == 0)
            return false;


        if (year % 4 == 0)
            return true;
        return false;
    }




    return (
        <div className='flex'>

            <select className='m-2 p-4 bg-gray-200 rounded hover:bg-gray-500 hover:text-white' onChange={(e) => handleWeek(e.target.value)}>
                {week.map((x, idx) => <option key={idx} value={x}>{x ? x : idx}</option>)}
            </select>


            <select className='m-2 p-4 bg-gray-200 rounded hover:bg-gray-500 hover:text-white' onChange={() => console.log('change')}>
                {months.map(x => <option key={x} value={x}>{x}</option>)}
            </select>


            <select className='m-2 p-4 bg-gray-200 rounded hover:bg-gray-500 hover:text-white' onChange={(e) => handleYear(e.target.value)}>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
            </select>

        </div>
    )
}
