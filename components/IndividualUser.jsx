import React from 'react'

export default function IndividualUser({ user }) {

    const week = ['','','','','','','']

    return (
        // <div>IndividualUser</div>

        <>
            <tr>
           
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'>{user.id}</th>
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'>{user.name}</th>
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'><input type='text' className='w-20'/></th>
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'><input type='text' className='w-20'/></th>
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'><input type='text' className='w-20'/></th>
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'><input type='text' className='w-20'/></th>
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'><input type='text' className='w-20'/></th>
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'><input type='text' className='w-20'/></th>
                <th className='w-10 h-20 bg-yellow-300' scope="row" align='center'><input type='text' className='w-20'/></th>


            </tr>


        </>
    )
}
