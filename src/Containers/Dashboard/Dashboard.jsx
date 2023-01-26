import { useSelector } from "react-redux";
import { userData } from "../../Features/userSlice";

const Dashboard = () => {

    const userInfo = useSelector(userData);
    console.log(userInfo)


    return(
        <div>Bienvenido! {userInfo.user_name} </div>
    )
}

export default Dashboard;