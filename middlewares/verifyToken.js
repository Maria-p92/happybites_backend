import jwt from 'jsonwebtoken'; 

export const verifyToken = async ( req, res) => {
    console.log("token:", req.headers.authorization);
    const token = req.headers.authorization;
    if (typeof token !== "undefined") { 
        try {
        const{user} = await jwt.verify(token, process.env.SECRET_KEY);
        console.log("userid:", user); 
        return user; 
    } catch(err) {
        return {message: err.message}
    } }
    else {
        console.log('Token undefined')
        return null
    }

}

