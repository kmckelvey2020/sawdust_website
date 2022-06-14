const secret = process.env.JWT_SECRET;
import { verify } from "jsonwebtoken";
import { useRouter } from "next/router";

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

export const authenticatedPage = () => {
    const router = useRouter();
    verify(req.cookies.auth, secret, function(err, decoded) {
        if(!err && decoded) {
            console.log("Authenticated");
        } else {
            console.log("Not authorized");
            router.push("/login");
        }
    });
};