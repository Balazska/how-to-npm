const { returnValue } = require("../..")


describe("Index", () => {
    test("demo test", () => {
        let value = returnValue(1);
        expect(value).toBe(1)
    })
})