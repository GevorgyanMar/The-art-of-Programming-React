import {useState, useEffect, FC} from "react";
import firebase from '../firbase';
import {useParams} from "react-router-dom";

interface UserInterface {
    firstName: string;
    lastName: string;
    email: string;
}

const Users = ()=> {
    // const [user, setUser] = useState<UserInterface[]>([]);
    const [user, setUser] = useState();
    let {id} : { id : string}= useParams();

    useEffect(()=>{
        firebase.database.ref('/users/'+ id).once('value').then(function(snapshot: any):any{
            const userData = snapshot.val() || [];
            setUser(userData.firstName);
        });
    }, []);

    return (
        <div>wlecom {user}</div>
      // <h1>{`welcome${firebase.auth.currentUser.name}`}</h1>
    )
}

export default Users;//u esa