import React from "react";
import ReactDOM from "react-dom";
//import { Timer } from "./components/timer";


const Header=()=>{
    return(
        <div> 
            <table border="detailes">
            <tr>
            <th>detail:-------------</th>
            <th>dealine:---------</th>
            <th>is_important:</th>
            <th>is_done:</th>
            </tr>
            </table>
        </div> 
    )
    
}

const Line=(props)=>{
    return(
        <div>
        <table border="detailes">
        <tr>
            <td width="20%">{props.line.detail}</td>
            <td width="20%">{props.line.dealine}</td>
            <td width="17%">{props.line.is_important}</td>
            <td width="11%">{props.line.is_done}</td>
        </tr>
    </table>
    </div>

    )
}

const Todo=(props)=>{
    return(
        props.my_details.map(line=><Line line={line}/>)
    )
}

const App = () => {
    const my_details = [
        {
            detail: "ruti",
            dealine: "12/03/2014",
            is_important:"✖" ,
            is_done: "😍"
        },
        {
            detail: "sara",
            dealine: "23/05/2016",
            is_important: "✔",
            is_done: "😍"
        },
        {
            detail: "racheli",
            dealine: "04/06/2007",
            is_important: "✖",
            is_done: "😍"
        },
        {
            detail: "shoshi",
            dealine: "07/08/2019",
            is_important: "✖",
            is_done: "😪"
        },
        {
            detail: "tamar",
            dealine: "10/09/2012",
            is_important: "✔",
            is_done: "😍"
        },
    ];
    return (
        
        
        <div style={{margin:'10%'}}>
        <br/>
        <br/>
            <h1>My details</h1>
            <br/>
            <Header/>
            <Todo my_details={my_details}/>

       
            
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

{/* <Timer/> */}

{/* // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


// table border="1">
  
// <table border="1">
//   <tr>
//     <th>כותרת 1</th>
//     <th>כותרת 2</th>
//     <th>כותרת 3</th>
//   </tr>
//   <tr>
//     <td>שורה 1, תא 1</td>
//     <td>שורה 1, תא 2</td>
//     <td>שורה 1, תא 3</td>
//   </tr>
//   ...
// </table>
 */}
{/* <p>{contactList[0].name} - {contactList[0].tel} - {contactList[0].address} - {contactList[0].category}</p>
            <p>{contactList[1].name} - {contactList[1].tel} - {contactList[1].address} - {contactList[1].category}</p>
            <p>{contactList[2].name} - {contactList[2].tel} - {contactList[2].address} - {contactList[2].category}</p>
            <p>{contactList[3].name} - {contactList[3].tel} - {contactList[3].address} - {contactList[3].category}</p>
            <p>{contactList[4].name} - {contactList[4].tel} - {contactList[4].address} - {contactList[4].category}</p>
            <p>{contactList[5].name} - {contactList[5].tel} - {contactList[5].address} - {contactList[5].category}</p> */}