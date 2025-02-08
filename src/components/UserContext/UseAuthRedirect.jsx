import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const useAuthRedirect = () => {
    const {isLogged} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
            navigate('/login');
        }
    }, [isLogged, navigate]);
};

export default useAuthRedirect;