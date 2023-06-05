

//Redirecting to Pages

const Redirect = () => {
 
    let page1 = document.getElementById("pages").value;
    console.log(page1);

    if(page1 == 'Instructions'){
        window.location.href= "instructions.html";
    }else if(page1 == 'SurveyForm'){
        window.location.href= "survey.html";
    }else if (page1 == 'HomePage'){
       window.location.href= "index.html";
    }

    // switch(page1)
    // {   
    //     case 'Instructions':
    //         window.location.href= "instructions.html";
    //     case 'SurveyForm':
    //         window.location.href= "survey.html";
           
    //     default:
    //         window.location.href= "index.html";
           
    // }
}






let form = document.getElementById("formSubmission");

let table = document.getElementById("table");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    submit();
})

const submit = () => {
    let Fname = document.getElementById("fname").value;
    let Lname = document.getElementById('lname').value;
    let Address = document.getElementById("address").value;
    let Pincode = document.getElementById("pincode").value;
    let State = document.getElementById("state").value;
    let Country = document.getElementById("country").value;


    //Gender Selection:
    let gen = document.getElementsByName("gender");
    
    for(var i=0; i<gen.length; i++){
        if(gen[i].checked){
            var resultgender = gen[i].value;
        }
    }


   //Food Choice Selection: 
    let checkbox = document.querySelectorAll('input[name="food"]:checked');
    let resultfood = [];

    checkbox.forEach((choice)=>{
        resultfood.push(choice.value);
    })


    const tableEle = document.getElementById('table');
        const trEle = document.createElement('tr');
        const tbodyEle = document.createElement('tbody');
        const FnameEle = document.createElement('td');
        const LnameEle = document.createElement('td');
        const AddressEle = document.createElement('td');
        const PincodeEle = document.createElement('td');
        const GenderEle = document.createElement('td');
        const FoodEle = document.createElement('td');
        const StateEle = document.createElement('td');
        const CountryEle = document.createElement('td');

        if(resultfood.length >= 2){
    
                FnameEle.innerHTML = Fname;
                LnameEle.innerHTML = Lname;
                AddressEle.innerHTML = Address;
                PincodeEle.innerHTML = Pincode;
                GenderEle.innerHTML = resultgender;
                FoodEle.innerHTML = resultfood.join(",");
                StateEle.innerHTML = State;
                CountryEle.innerHTML = Country;
    
                trEle.appendChild(FnameEle);
                trEle.appendChild(LnameEle);
                trEle.appendChild(AddressEle);
                trEle.appendChild(PincodeEle);
                trEle.appendChild(GenderEle);
                trEle.appendChild(FoodEle);
                trEle.appendChild(StateEle);
                trEle.appendChild(CountryEle);
    
                tbodyEle.appendChild(trEle);
                tableEle.appendChild(tbodyEle);
    
        }else{
            alert("Please select minimum 2 Food choices");
        }




    
    form.reset();
    
}



// form.addEventListener("submit", handleSubmit);

// function handleSubmit(e) {
//     e.preventDefault();
//     console.log("FOrm Submitted");
//     const Fname = document.getElementById('fname').value;
//     const Lname = document.getElementById('lname').value;
//     const Address = document.getElementById("address").value;
//     const Pincode = document.getElementById("pincode").value;
//     const Gender = document.getElementById("gender").value;
//     const Food = document.getElementById("food").value;
//     const State = document.getElementById("state").value;
//     const Country = document.getElementById("country").value;


//     const tableEle = document.getElementById('table');
//     const trEle = document.createElement('tr');
//     const tbodyEle = document.createElement('tbody');
//     const FnameEle = document.createElement('td');
//     const LnameEle = document.createElement('td');
//     const AddressEle = document.createElement('td');
//     const PincodeEle = document.createElement('td');
//     const GenderEle = document.createElement('td');
//     const FoodEle = document.createElement('td');
//     const StateEle = document.createElement('td');
//     const CountryEle = document.createElement('td');

//             FnameEle.innerHTML = Fname;
//             LnameEle.innerHTML = Lname;
//             AddressEle.innerHTML = Address;
//             PincodeEle.innerHTML = Pincode;
//             GenderEle.innerHTML = Gender;
//             FoodEle.innerHTML = Food;
//             StateEle.innerHTML = State;
//             CountryEle.innerHTML = Country;

//             trEle.appendChild(FnameEle);
//             trEle.appendChild(LnameEle);
//             trEle.appendChild(AddressEle);
//             trEle.appendChild(PincodeEle);
//             trEle.appendChild(GenderEle);
//             trEle.appendChild(FoodEle);
//             trEle.appendChild(StateEle);
//             trEle.appendChild(CountryEle);

//             tbodyEle.appendChild(trEle);
//             tableEle.appendChild(tbodyEle);



   
    
// //document.getElementById("fname1").innerHTML = Fname;

   
//     //alert("Form Submitted");
//     console.log("FOrm Submitted2");
// }