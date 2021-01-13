import React from "react"

import { mount } from "enzyme"

import App from "./App"
import AgeContext from "./contexts/AgeContextProvider"

describe("Test app", () => {
	it("renders correctly", () => {
		const wrapper = mount(
			<AgeContext>
				<App />
			</AgeContext>
		)
	})
	it("renders correct message when age is 15", () => {
		const wrapper = mount(
			<AgeContext>
				<App />
			</AgeContext>
		)
		wrapper.find("input").simulate("change", { target: { value: 15 } })
		expect(wrapper.find(".message").text()).toContain(
			"You may not start driving"
		)
	})
	it("renders correct message when age is 17", () => {
		const wrapper = mount(
			<AgeContext>
				<App />
			</AgeContext>
		)
		wrapper.find("input").simulate("change", { target: { value: 17 } })
		expect(wrapper.find(".message").text()).toContain(
			"You may start to learn how to drive"
		)
	})
	it("renders correct message when age is 18", () => {
		const wrapper = mount(
			<AgeContext>
				<App />
			</AgeContext>
		)
		wrapper.find("input").simulate("change", { target: { value: 18 } })
		expect(wrapper.find(".message").text()).toContain(
			"You may now start driving after you have passed the required tests"
		)
	})
})
