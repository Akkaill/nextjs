import Link from "next/link"
export const getStaticProps = async () => {
    const respawn =await fetch('https://jsonplaceholder.typicode.com/users')
    const Dat = await respawn.json()
    
    return(
        {
            props:{users:Dat}
        }
    
    )
}

const Users = ({users}:any)=>{
    return(
        <div>
        <h3>ALL ME</h3>
        {users.map((user)=>(
            <div key={user.id}>
                <Link href={"/users" + user.id}>
                    <a>{user.name}</a>
                </Link>

            </div>
        ))}
        </div>
    )

}
export default Users