import React,{useEffect,useState} from 'react';
import {getOneUser,getListUsers} from '../BackRequest/list_request.js';
 
export default function Biographie() {


  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(false);
  const id = 1;

  useEffect(() => {
        getOneUser(id)
            .then((res) => {
                setUser([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingUser(false);
            }); 
    }, [id]);

    useEffect(() => {
        getListUsers()
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingUsers(false);
            }); 
    }, [id]);

 
 if (loadingUsers || loadingUser ) return 'Loading...';
 if (error) return 'Error!';
 
  return (
    <div>
      <h1>--Biographie--</h1>
      {console.log(user)}

        <h2>getListUsers : </h2><br/>      
        {users.map((user) => (
          <div>
          {user.name}
          </div>
        ))}

        <br/>

        <h2>getOneUser (id = 1) : </h2> <br/>      
        {user.map((user) => (
          <div>
          {user.name}
          </div>
        ))}

    </div>
  );
}
