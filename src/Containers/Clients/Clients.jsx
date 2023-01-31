import "./Clients.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {userData} from "../../Features/userSlice"
import profileImg from "../../img/user-card.png"

const Clients = () => {

    const [usersClients, setUsersClients]= useState([]);
    const [userTables, setUserTables]= useState([]);
    const [search, setSearch]= useState("");
    const userInfo = useSelector(userData);

    const peticionGet = async()=>{  
        try {
            let config = {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            };
           const attempt = await axios.get("https://bbobras.onrender.com/api/auth/getAllUsers", config)
           setUsersClients(attempt.data.data)
           console.log(setUsersClients)
          
        } catch (error) {
            console.log(error)
        }
        
    }

    const handleChange = e => {
        setSearch(e.target.value); 
    }

    const filter = (searchTerm) => {
        var searchResult = userTables,filter(element)
    }

    useEffect(()=>{
    peticionGet();
    
    console.log("hola");
    },[])

    return (
        <div className="clientsDesign">
            <input
                className="inputSearch"
                value={search}
                placeholder="Busqueda de clientes"
                onChange={handleChange}
            />
            {
               usersClients.length > 0 && (
                usersClients.map((e) => {
                    return (
                        <div className="clientsCards" key={e._id}>

                            <div className="cardData">

                                <div className="userImg">
                                    <img src={profileImg} alt="" />
                                    <div className="barProfile"></div>
                                </div>
                                
                                <div >
                                <div className="cardInfo"><h3>{e.name}</h3></div>
                                <div className="cardInfo"><h6>ID: {e._id}</h6></div>
                                <div className="cardInfo"><h4>NIF:</h4><p>{e.nif}</p></div>
                                <div className="cardInfo"><h3>Phone:</h3><p>{e.phone}</p></div>
                                <div className="cardInfo"><h3>Address:</h3><p>{e.address}</p></div>

                                </div>
                            </div>

                        </div>
                    )
                })
               )
                        
            }

        </div>
    )
};

export default Clients



