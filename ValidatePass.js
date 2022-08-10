export const TestPass = (Password) =>{

    const validLength = Password.length >= 8
    const HasALetter = /[a-zA-Z]/g.test(Password)
    const HasANumber = /[0-9]/g.test(Password)



const validPass = validLength && HasALetter && HasANumber
     
    return validPass 

}