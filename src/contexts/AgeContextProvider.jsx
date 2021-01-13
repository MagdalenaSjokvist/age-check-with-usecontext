import React, { useState, useEffect, createContext } from "react"

export const AgeContext = createContext({})

export default function AgeContextProvider({ children }) {
	const [age, setAge] = useState("")
	const [message, setMessage] = useState("")

	useEffect(() => {
		if (age < 16) {
			setMessage("You may not start driving")
		} else if (16 <= age && age < 18) {
			setMessage("You may start to learn how to drive")
		} else if (age >= 18) {
			setMessage(
				"You may now start driving after you have passed the required tests"
			)
		}
	}, [age])

	return (
		<AgeContext.Provider value={{ age, setAge, message, setMessage }}>
			{children}
		</AgeContext.Provider>
	)
}
