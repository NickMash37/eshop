import "./HomePage.css";
import { Item } from "../../components/Item/Item";
import { useAuth } from "../../hooks/use-auth";
import { useNavigate } from "react-router";
import { getDatabase, ref, get } from "firebase/database";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  
  const dbRef = ref(getDatabase())

  const [state, setState] = useState([])

  useEffect(() => {
    let ignore = false
    get(dbRef).then(snapshot => {
      if(!ignore) {
        const data = snapshot.val()
        setState(data)
      }
    })
  })

  return isAuth ? (
    <div className="home-page">
      {
        state.map(product => <Item product={product} key={product.id} price={product.price}/>)
      }
    </div>
  ) : (
    navigate("/login")
  );
};
