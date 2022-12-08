import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  users: [{ id: 1, name: 'Harish' }, { id: 2, name: 'Ramesh' }, { id: 3, name: 'Rohan' }, { id: 4, name: 'Mitesh' },],
  
  totalYears: [2022, 2023, 2024, 2025],
  totalDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  current: {
    year: 2022,
    month: 12,
    totalweeks: 50,
    week:5,
    isleap:true
  },

 

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    setCurrentWeeks: (state, action) => {
      state.current.totalweeks = action.payload
    },
    setCurrentYear: (state, action) => {
      state.current.year = action.payload.year;
      state.current.isleap = action.payload.isleap;
      
    },
    setCurrentWeek: (state, action) => {
      state.current.week = action.payload
    },
    setCurrentMonth: (state, action) => {
      state.current.month = action.payload
    },
  },
})

export const { setCurrentWeeks,setCurrentYear,setCurrentWeek ,setCurrentMonth} = counterSlice.actions

export default counterSlice.reducer