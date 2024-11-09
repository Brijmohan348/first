import jwt from "jsonwebtoken"

const freshtoken = (userid, res) => {
    let token
    try {
         token = jwt.sign({ userid }, "secerate", {
            expiresIn: "10m",
           algorithm:"HS256"
        })
    
        console.log("token", token)
        // console.log(userid) 

    } catch (error) {
        res.send("jwt error")
    }

    try {

        res.cookie("jwt", token, {
            sameSite: "strict",
            httpOnly:true
        })
        console.log("cocies",token)
        
    } catch (error) {
        res.send("cocies  error")
    }


}
export default freshtoken