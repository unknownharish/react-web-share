import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import IndividualUser from './IndividualUser';

import {setCurrentMonth} from '../redux/slice'

export default function Showdata() {


    const dispatch = useDispatch()
    const [days, setdays] = useState([...Array(7)])
    const data = useSelector(x => x.calender);

    let totaldays = data.totalDays

    var current = data.current;
    let yeardays = current.isleap ? 366 : 365;
    let count = 0

    var month = 0



    for (let i = 0; i < totaldays.length; i++) {

        count = count + totaldays[i]

        if (current.week * 7 < count) {
            // return x

            month = i;
            dispatch(setCurrentMonth(month))
            break;

        }


    }


    console.log(month)





    const week = ['', '', 'Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

    return (
        <div className='w-4/5  mt-20'>
            <table className=''>
                <thead >
                    <tr >
                        {week.map(x => (<th className='w-32 h-6 bg-blue-300' key={x} scope="col">{x}</th>))}

                    </tr>
                </thead>
                <tbody>

                    {data.users.map(x => (<IndividualUser key={x} user={x} />))}


                </tbody>
            </table>




        </div>
    )
}
