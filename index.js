const addTaskBtn = document.getElementById("bt-n");
const error = document.getElementById("error");
const success = document.getElementById("success")
const disPlay = document.getElementById("display")

let userData = [];
addTaskBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const fname = document.getElementById("fname").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
  
    if(fname== "" || profession=="" || age==""){
        
        error.textContent = "Error : Please Make sure All the fields are filled before adding in an employee !"
        return;
    }
        
    else{
        let formData = {
            id: userData.length+1,
            fname: fname,
            profession: profession,
            age: age,
        }
        userData.push(formData)    
        console.log("dlal",formData);        
        render(userData)   
        
    }    

})

function render(userData){
    if(userData.length >0){        
        disPlay.innerHTML = userData.map((item,index)=>{
        return `
            <div class="container1">
                <div class="display" key=${index}>
                   <div><span>id :-${item.id}</span></div>
                   <div><span>Name :-${item.fname}</span></div>
                   <div><span>Profession :-${item.profession}</span></div>
                   <div><span>Age:-${item.age}</span></div>               
                </div>                    
                <div class="btn-1">
                   <button id="deletBtn" onclick=deleteData(${item.id})>Delete User</button>  
                </div>
                                
            </div>                       
        `
    }).join("")

    setTimeout(function(){
        success.innerHTML = 'Success : Employee Added!';
    }, 1000);

    }else{
      disPlay.innerHTML ="";
       
    }
}




function deleteData(id){    
    console.log(id);
     userData = userData.filter((item, ind) => item.id != id)
   
    render(userData)
}















// disPlay.innerHTML = userData.map((item,index)=>{
        //     return `
        //         <div class="container">
        //            <div class="display" key=${index}>
        //                <div><span>id :-${item.id}</span></div>
        //                <div><span>Name :-${item.fname}</span></div>
        //                <div><span>Profession :-${item.profession}</span></div>
        //                <div><span>Age:-${item.age}</span></div>               
        //             </div>                    
        //             <div class="btn-1">
        //                <button id="deletBtn" onclick=deleteData(${item.id})>Delete User</button>  
        //             </div>                
        //         </div>                       
        //     `
        // }).join("")




// const deleteBtn = document.getElementById("deletBtn");

// if (deleteBtn) {
//     deleteBtn.addEventListener('click', () => {
//       console.log('btn clicked');
//     });
//   }

// // deleteBtn?.addEventListener("click", (event)=>{
// //     event.preventDefault()
// //     alert("kaldjflk")

   
// // })


