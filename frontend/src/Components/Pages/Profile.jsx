import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const handLogout = () =>{
        navigate("/Login")
    }
    return(
        <>
        <div className="">
            <h3 className="text-4xl font-bold text-gray-800  text-center">Profile</h3>
            <button onClick={handLogout} className=" bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"> Log out </button>
        </div>
        </>
    );
}
export default Profile