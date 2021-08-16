const Preview = require("./Preview")

// @ponicode
describe("getMarkdownText", () => {
    let inst

    beforeEach(() => {
        inst = new Preview.default("reply_click()")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getMarkdownText("\"#'{7855663]}ééàà")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getMarkdownText("p")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getMarkdownText(123456789)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getMarkdownText("This is a String1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.getMarkdownText("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.getMarkdownText(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
