import { createSlice } from "@reduxjs/toolkit";

interface Order {
    date: string,
    serie: string,
    customer: string,
    state: string,
    total: number
}

const initialState: Order[] = [
    {
        date: '02-02/2023',
        serie: '002-005-000000006',
        customer: 'Roberto Carlos',
        state: 'AUTORIZADO',
        total: 5000
    },
    {
        date: '02-02/2023',
        serie: '002-005-000000007',
        customer: 'Andres Valle',
        state: 'AUTORIZADO',
        total: 5000
    },
    {
        date: '02-02/2023',
        serie: '009-009-000000009',
        customer: 'Romero Carlos',
        state: 'AUTORIZADO',
        total: 5000
    },
    {
        date: '02-02/2023',
        serie: '002-005-000000007',
        customer: 'Andres Valle',
        state: 'AUTORIZADO',
        total: 5000
    }
]

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {}
});

export default appSlice.reducer