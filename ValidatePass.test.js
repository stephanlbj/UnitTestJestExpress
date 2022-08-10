import {TestPass} from "./ValidatePass.js"


test("returns false is the password length <8",()=>{
expect(TestPass("s")).toBe(false)
})

test("returns true is the password length > 8",()=>{
    expect(TestPass("jeksldldes1")).toBe(true)
})

test("returns true is the password contains at least one letter",()=>{
        expect(TestPass("qw44444444")).toBe(true)
 })

 