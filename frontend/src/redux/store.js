import { configureStore } from "@reduxjs/toolkit";

import flashReducer from "./rootReducer";

const store = configureStore({
    reducer: {
        flash: flashReducer
    }
})

export { store }