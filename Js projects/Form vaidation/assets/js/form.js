function validate() {
    var name = document.getElementById("Fname").value;
    var output = document.getElementById("out");
    var regex = /^[A-Z]([-']?[a-z]+)*/;
    if (name === "") {
        output.innerText = "Please fill your Name";
        output.style.color="red";
    } else {
        if (regex.test(name) === false) {
            output.innerText = `Invalid text type`;
            output.style.color="orange";
        } else {
            output.innerText = `Name Accepted`;
            output.style.color="Green";
        }
    }
}
function validate1() {
    var name1 = document.getElementById("email").value;
    var output1 = document.getElementById("out1");
    var regex1 = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (name1 === "") {
        output1.innerText = "Please Enter Your mail id";
        output1.style.color="red";
    } else {
        if (regex1.test(name1) === false) {
            output1.innerText = `Invalid mail type`;
            output1.style.color="orange";
        } else {
            output1.innerText = `Mail Id Accepted`;
            output1.style.color="Green";
        }
    }
}
function validate2() {
    var name2 = document.getElementById("Mobile").value;
    var output2 = document.getElementById("out2");
    var regex2 = /^[6-9]\d{9}$/;
    if (name2 === "") {
        output2.innerText = "Please Enter Your Mobile";
        output2.style.color="red";
    } else {
        if (regex2.test(name2) === false) {
            output2.innerText = `Please enter valid mobile number`;
            output2.style.color="orange";
        } else {
            output2.innerText = `Mobile Number Accepted`;
            output2.style.color="Green";
        }
    }
}
function Login(event){
    event.preventDefault();
    let a=document.getElementById("Fname").value;
    let b=document.getElementById("email").value;
    let c=document.getElementById("Mobile").value;
    let reg_a=/^[A-Z]([-']?[a-z]+)*/;
    let reg_b=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    let reg_c=/^[6-9]\d{9}$/;
    
    
if(POST_a==reg_a && b==reg_b && c==reg_c){
alert("The Form has been submitted");
}else{
    alert("Please enter the required details")
}
}
console.log(Login())