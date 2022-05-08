import React,{useEffect,useState} from 'react';
import {getListUsers} from '../BackRequest/list_request.js';
 
export default function Home() {


  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
        getListUsers()
            .then((res) => {
                setUsers([res.data]);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError(true);
            })
            .finally(() => {
                setLoadingUsers(false);
            }); 
    }, []);

 
 if (loadingUsers ) return 'Loading...';
 if (error) return 'Error!';
 
  return (
    <div>
      {console.log(users)}      
        {users[0].map((user) => (
          <div>
          {user.login}
          </div>
        ))}
      

    </div>
  );
}
