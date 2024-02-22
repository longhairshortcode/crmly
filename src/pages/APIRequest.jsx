// making an API request on click of an ordinary button (not a form button)
import axios from "axios"

function APIRequest(){
 
   async function myRequestFunction(){
        try{ 
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                console.log(response.status)
                // if (response.status == 200){
                //     //
                // }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <button onClick={myRequestFunction}>Get Data</button>
        </div>
    )
}

export default APIRequest




// import axios from "axios"

// function APIRequest(){
// async function myRequestFunction(){
//     try{
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
//         console.log(response.status)
//         // if (response.status == 200){}
//     }catch(error){
//         console.log(error)
//     }
// }

//     return(
//         <div>
//             <button onClick={myRequestFunction}>Get Data</button>
//         </div>
//     )
// }
// export default APIRequest 


// import axios from "axios"

// function APIRequest(){

// async function myRequestFunction(){
//     try{
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
//         console.log(response.status)
//     }catch(error){
//         console.log(error)
//     }
// }
//     return (
//         <div>
//             <button onClick={myRequestFunction}>Get Data</button>
//         </div>
//     )
// }
// export default APIRequest



// import axios from "axios"

// function APIRequest() {

//     async function myRequestFunction(){
//         try{
//             const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
//             console.log(response.status)
//             //if (response.status == 200{})
//         }catch(error){
//             console.log(error)
//         }
//     }
    
//     return(
//         <div>
//             <button onClick={myRequestFunction}></button>
//         </div>
//     )
// }

// export default APIRequest

























