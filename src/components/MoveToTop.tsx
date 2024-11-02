import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoveToTop = (): JSX.Element => {
    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [path]);

    return <div></div>
}

export default MoveToTop;