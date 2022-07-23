import Nav from "./nav"
import Main from "../pages/new"
const Layout = ({children}:any)=>{
    return(
        <div>
            <Nav/>
            {children}
            <Main/>

        </div>
    )
}
export default Layout