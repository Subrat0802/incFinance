

import navbar from "../components/navbar.js";
import leadData from "../utils/data.js";
import sidebar from "../components/sidebar.js";

let navbar_container=document.querySelector(".navbar_div");
navbar_container.innerHTML=navbar();



let sideBar=document.getElementById("sideBar");
sideBar.innerHTML=sidebar();




localStorage.setItem("leadData",JSON.stringify(leadData));

let dataLead=JSON.parse(localStorage.getItem("leadData"));

console.log(dataLead);

const addData = (data) =>{

    
    let tbody=document.querySelector("tbody");

    tbody.innerHTML=null;

    data.map((el)=>{
        
        let tr=document.createElement("tr");
        // tbody.innerHTML=null;
        
        let td=document.createElement("td");
        let div=document.createElement("div");
        let img=document.createElement("img");
        let div1=document.createElement("div");
        div1.style.width="92%"
        div.style.width="8%"

        img.src=el.image;
        img.style.width="100%";
        img.style.borderRadius="50%";
        div.append(img);
        div1.innerText=el.name;
        td.append(div,div1);
        div1.style.width="50%"
        
        let td2=document.createElement("td");
        td2.innerText=el.lastContacted;
        let td3=document.createElement("td");
        td3.innerText=el.product;
        let td4=document.createElement("td");
        td4.innerText=el.email;
        let td5=document.createElement("td");
        td5.innerText=el.contact;
        let td6=document.createElement("td");
        td6.innerText=el.leadStage;
        td6.style.color="green";
        let td7=document.createElement("td");
        td7.innerText=el;
        

        
        tr.append(td,td2,td3,td4,td5,td6);
        tbody.append(tr);
    })
}
addData(dataLead);

//#8caacf