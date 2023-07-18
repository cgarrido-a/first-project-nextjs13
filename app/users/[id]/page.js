async function getUser(id) {
    // console.log(id)
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
    // return{
    //     test: "hello world"
    // }

}

async function UsersPage({params}) {
    const user = await getUser(params.id);
    // console.log(user);
    return (
        <div>
            <h1>User Details</h1>
            <div>
                <img src={user.avatar} alt="user avatar"/>
                <div>
                    <h3>{user.first_name} {user.last_name}</h3>
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    )
}

export default UsersPage;