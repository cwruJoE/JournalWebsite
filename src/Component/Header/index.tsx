import React, {ReactNode} from "react";

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={"mb-10"}>
            {children}
            <hr className="border-black"/>
        </div>
    )
}

export default Header;