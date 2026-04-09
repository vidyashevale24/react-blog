function User({ userDetail }) {
    return (
        <div>
            <p>{userDetail.name}</p>
            <p>{userDetail.email}</p>
            <p>{userDetail.age}</p>
        </div>
    );
}
export default User;