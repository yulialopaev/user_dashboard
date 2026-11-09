function UserInfo({user}) {
    return (
        <div className={"user-info"}>
            <h3>Здравствуйте, {user.name}!</h3>
            <p>Электронная почта: {user.email}</p>

        </div>
    )
}

export default UserInfo;