import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    bg: ""
}

const chageBGColorSlice = createSlice({
    name: "changeBG",
    initialState,
    reducers: {
        changeBGColor: (state) => {
            const x = Math.floor(Math.random() * 256);
            const y = Math.floor(Math.random() * 256);
            const z = Math.floor(Math.random() * 256);
            const rgbColor = `rgb(${x},${y},${z})`;

            let ids = document.getElementById("bodyColor")
            ids.style.backgroundColor = rgbColor;
            state.bg = rgbColor
        }
    }
})

export const { changeBGColor } = chageBGColorSlice.actions;
export default chageBGColorSlice.reducer;