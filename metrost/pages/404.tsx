import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Notfound = ()=>{

    const rout = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            rout.back()
        },3000)
        

    },[])
    return(
        <div>
            <h2>No error MF</h2>
            <Link href="/">
                <a>Homepage</a>
            </Link>
        </div>
    )
}

export default Notfound