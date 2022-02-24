import { useState } from "react"
import { AuthUser } from "./User.type"

export const User = () => {
    const [user, setUser] = useState<null|AuthUser>(null);
    const handleLogin = () => {
        setUser({name: "Gaiseric", email: "Gaiseric@mail.com"});
    };
    const handleLogout = () => {
        setUser(null);
    };
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}