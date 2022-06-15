const secret = process.env.JWT_SECRET;
import { verify } from "jsonwebtoken";

/*-- ****************************************************** -->
<--- TOKEN AUTH WRAPPER/COOKIES FOR RESTRICTED APIS/PAGES   -->
<--- ****************************************************** -*/

export const authenticated = (fn) => async (req, res) => {
    verify(req.cookies.auth, secret, async function(err, decoded) {
        if(!err && decoded) {
            return await fn(req, res);
        } else {
            console.log("Not logged in.");
        }
    });
};