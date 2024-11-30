//API Integration: Build an application that:

// Fetches data from a public API (e.g., JSONPlaceholder https://jsonplaceholder.typicode.com/posts) using fetch or axios.
//   Displays the data in a list.
//   Adds a loading spinner while the data is being fetched.
//   Handles and displays errors if the API call fails.
import { useState } from "react"
export default function Excersice1(){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    fetch("https://jsonplaceholder.typicode.com/posts").then(async function(res){
        const responce = await res.json();
        setData(responce)
        setLoading(false);
    }).catch(err=>{
        console.log("i am in catch block")
        setError(true);
    })
    if(error){
        return <div>
            <h1>Error!! Fetching Data Issue.</h1>
        </div>
    }
    if(loading){
        return <div>
            <h1>Loading...</h1>
        </div>
    }

    return <div>
        {
            data.map(function(post){
                return <div>
                    <h1>{post.id}</h1>
                    <h2>{post.body}</h2>
                </div>
            })
        }
    </div>
}