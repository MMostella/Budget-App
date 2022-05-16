import { createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
    name: "groups",
    initialState: {
        groups: ["Giving", "Savings", "Bills", "Subscriptions", "Spending", "Debt"]
    }
});

export default groupSlice.reducer;