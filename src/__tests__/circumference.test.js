import circumference from "../circumference.js"

describe("circumference function", () => {
    it("takes in radius and returns circumference", () => {
        expect(circumference(4)).toEqual(25.12)
    })

    it("handles case for 0 or negatives", () => {
        expect(circumference(0)).toEqual("Needs to be over 0!")
    })
})