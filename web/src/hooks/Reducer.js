import React, { useReducer } from "react";
const initialState = {
	value: true,
};
function reducer(state, action) {
	switch (action.type) {
		case "false":
			return { value: false };
		default:
			return initialState;
	}
}
function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const handleInc = () => dispatch({ type: "increment" });
	const handleDec = () => dispatch({ type: "decrement" });
	return (
		<>
			Count: {state.count}
			<button onClick={handleDec}>-</button>
			<button onClick={handleInc}>+</button>
		</>
	);
}
