import { Login } from "@/components/auth/login";
import { title } from "@/components/primitives";

export default function AuthPage() {
    return (
        <div>
            {/* <h1 className={title()}>Blog</h1> */}
            <Login/>
        </div>
    );
}