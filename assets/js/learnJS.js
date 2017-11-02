/* First function implemented */
/*
function alertMessage(){
    alert("My\tname\tis\nFaisal");
}*/

/*Show result in another div*/
/*
function buttonMessage(text){
    var textUpper = text.toUpperCase();
    document.getElementById("showText").innerHTML = textUpper;
}
*/

/*
String length*/
/*function showStringLength(){
    var string = document.stringLength.stringInput.value;
    var charLength = string.length;
    document.getElementById("showLength").innerHTML = charLength;
}*/

/*Print value from form*/
function showEmployeeInfo(){
    var name = document.employeeInfo.employeeName.value;
    var email = document.employeeInfo.employeeEmail.value;
    var phone = document.employeeInfo.employeePhone.value;
    var education = document.employeeInfo.employeeEducation.value;
    var showInfo = "Name: " + name + "<br>" + "Email: " +  email + "<br>" + "Phone: " +  phone + "<br>" + "Education: " + education;
    document.getElementById("employeeInfoShow").innerHTML = showInfo;
}
