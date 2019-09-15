var tempNum = 0;
var count = 1;
var counter = 1;
var pixel = 0;
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var setUserName = "User";
var setPassword = "pass";
function addition(num1,num2)
{
        return parseInt(num1) + parseInt(num2);
}
function grabText(id)
{
    var element = document.getElementById(id).value;
    console.log("hello");
    return element;
}
function setText(id, textSet)
{
    document.getElementById(id).innerHTML = textSet;
}
function oscillate()
{
    if(tempNum % 2 == 0)
    {
        tempNum = 1;
        console.log(document.getElementById('test').innerHTML);
        console.log(document.getElementById("happyButton").innerHTML);
        return addition(1,2);
    }
    else
    {
        tempNum = 0;
        console.log(document.getElementById('test').innerHTML);
        return "Hello";
    }
}

function conditional(id)
{
    if(document.getElementById('test').innerHTML == "Hello")
    {
        setText(id, "What is going on");
    }
}

function changeLink(id)
{
    if(document.getElementById(id).innerHTML == "Hello")
    {
        document.getElementById("links").href = "https://www.yahoo.com";
        document.getElementById("links").innerHTML = "Go to Yahoo";
        console.log(document.getElementById("links").href)
    }
    else
    {
        document.getElementById("links").href = "https://www.google.com";
        document.getElementById("links").innerHTML = "Go to Google";
        console.log(document.getElementById("links").href)
    }
}

function counting(){
    document.getElementById("seconds").innerHTML = count;
    count += 1;
}

function mystery(id){
    var randNum = Math.floor(Math.random()*5);
    console.log(randNum);
    if(randNum == 1){
        document.getElementById(id).style.backgroundColor = "red";
    }else if(randNum == 2){
        document.getElementById(id).style.backgroundColor = "green";
    }else if(randNum == 3){
        document.getElementById(id).style.backgroundColor = "pink";
    }else if(randNum == 4){
        document.getElementById(id).style.backgroundColor = "orange";
    }else {
        document.getElementById(id).style.backgroundColor = "lightblue";
    }
}

function changeHeadingColor(color){
    document.getElementById("heading").style.color = color;
}

function loginCheck(){
    var user = document.getElementById("username").value;
    var gPassword = document.getElementById("password").value;
    if(gPassword == "" || user == ""){
        alert("Username and/or Password is blank");
    }
    else if(user == setUserName && gPassword == setPassword){
        //document.getElementById("body").style.backgroundColor = "orange";
        window.location = "file:///C:/Users/prava/OneDrive/Documents/HTML/LoginPage.html";
    }else{
        alert("Please check the username and/or password");
    }
}

function autofill(){
    document.getElementById("username").value = setUserName;
    document.getElementById("password").value = setPassword;
}

function loginFunction(fileName, pUsername, pPassword){
    // save -> "C:/Users/prava/OneDrive/Documents/HTML/Credentials.txt"
    var txtFile = fileName;
    var file = new File(txtFile);
    file.open("r");
    while(!file.eof){
        var temp = file.readln();
        var commaIndex = temp.indexOf(",");
        var usernameCheck = temp.substring(0,commaIndex);
        var passwordCheck = temp.substring(commaIndex, temp.length);
        if(pUsername == usernameCheck && pPassword == passwordCheck){
            window.location = "file:///C:/Users/prava/OneDrive/Documents/HTML/LoginPage.html";
            break;
        }
        else{
            alert("Please check username/password");
        }
    }
    file.close();
}

function createAccount(){
    var enteredUser = document.getElementById("username").value;
    var enteredPass = document.getElementById("password").value;
    console.log(enteredUser + "," + enteredPass);
    var file = new File([""],"C:/Users/prava/OneDrive/Documents/HTML/Credentials.txt");
    file.open("w");
    file.writeln(enteredUser + "," + enteredPass);
    file.close();
}

function toggleJustify(toggle){
    if(counter % 3 == 0){
        document.getElementById(toggle).style.textAlign = "left";
        console.log(counter);
        counter++;
    }else if (counter % 3 == 1){
        document.getElementById(toggle).style.textAlign = "center";
        console.log("Hello");
        console.log(counter);
        counter++;
    }else{
        document.getElementById(toggle).style.textAlign = "right";
        console.log(counter);
        counter++;
    }

}

function fixStuckPixel(){
    var index = pixel % 6
    document.getElementById("body").style.backgroundColor = colors[index];
    pixel++;
}
