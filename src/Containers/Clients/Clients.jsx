import "./Clients.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {userData} from "../../Features/userSlice"
import profileImg from "../../img/user-card.png"

const Clients = () => {

    const [usersClients, setUsersClients]= useState([]);
    const [clientsFilter, setClientsFilter]= useState(null);
    const userInfo = useSelector(userData);

    useEffect(()=>{
        peticionGet();
    },[])

    //Peticion para traer la base de datos de todos los clientes
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

    //funcion de filtro en la busqueda
    const searcher = (e) => {
        const clientsSearch = usersClients.filter((client) => client.name.includes(e))
        setClientsFilter(clientsSearch)
    }

    //condicional
    const showClient = clientsFilter !== null? clientsFilter:usersClients

    return (
        <div className="clientsPage">
            <input
                className="inputSearch"
                placeholder="Búsqueda de clientes"
                onChange={(e) => searcher(e.target.value)}
            />

        <div className="clientsDesign">
            
            {
               usersClients.length > 0 && (
                showClient.map((e) => {
                    return (
                        <div className="clientsCards" key={e._id}>

                            <div className="cardData">

                                <div className="userImg">
                                    <img src={profileImg} alt="" />
                                    <div className="barProfile"></div>
                                </div>
                                
                                <div >
                                <div className="cardInfo"><h3>{e.name}</h3></div>
                                <div className="cardInfo"><h4>NIF:</h4><p>{e.nif}</p></div>
                                <div className="cardInfo"><h4>Phone:</h4><p>{e.phone}</p></div>
                                <div className="cardInfo"><h4>Address:</h4><p>{e.address}</p></div>
                                <div className="cardInfo"><h4>Email:</h4><p>{e.email}</p></div>

                                </div>
                            </div>

                        </div>
                    )
                })
               )
                        
            }

        </div>
        </div>
    )
};

export default Clients



