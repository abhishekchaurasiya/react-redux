import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../app/conterSlice";
import { changeBGColor } from "../app/bgChangeSlice";


const Home = () => {
    const count = useSelector((state) => state.counter.value);
    const colorbg = useSelector((state) => state.colorBG.bg)

    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState("0");

    return (
        <>
            <div className="container">
                <button
                    className="btn"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
                    {" "}
                    Increment{" "}
                </button>
                <span>{count}</span>
                <button
                    className="btn"
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <input
                    className="input_value"
                    type="text"
                    title="Increment by amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                    style={{ marginRight: "10px" }}>
                    Add Amount
                </button>

                <button onClick={() => dispatch(changeBGColor(colorbg))}> Change BGColor</button>
            </div>
        </>
    );
};

export default Home;
