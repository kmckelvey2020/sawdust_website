import { useRouter } from "next/router";
import { verify } from "jsonwebtoken";

/*-- ****************************************************** -->
<---                 useAuthenticatePage                    -->
<--- ****************************************************** -*/

const useAuthenticatePage = () => {
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

export default useAuthenticatePage;