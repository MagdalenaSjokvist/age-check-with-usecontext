import React, { useContext } from "react"
import { AgeContext } from "./contexts/AgeContextProvider"

function App() {
	const { age, setAge, message, setMessage } = useContext(AgeContext)
	return (
		<div>
			<input onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />
			<p className="message"> {message}</p>
		</div>
	)
}

export default App
