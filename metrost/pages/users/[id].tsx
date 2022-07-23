import styles from '../../styles/users.module.css'

export const getStaticPaths = async () => {
    const respawn = await fetch('https://jsonplaceholder.typicode.com/users')
    const Dat = await respawn.json()
    const paths = Dat.map((user) => {
        return {
            params: { id: user.id.toString() },

        }


    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const Dat = await res.json()

    return {
        props: { users: Dat }
    }

}



const UserArr = ({ users }: any) => {

    return (
        <div className={styles.kku}>
            <div className={styles.a}>{users.name}</div>
            <div className={styles.b}>{users.username}</div>
            <div className={styles.c}>{users.email}</div>
            <div className={styles.d}>{users.address.city}</div>
        </div>
    )
}
export default UserArr