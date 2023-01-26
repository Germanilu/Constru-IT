import { useSelector } from "react-redux";
import { userData } from "../../Features/userSlice";

const Dashboard = () => {

    const credentials = useSelector(userData);
    console.log(credentials)


    return(
        <div>Bienvenido! {credentials.user_name} </div>
    )
}

export default Dashboard;