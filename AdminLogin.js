function CheckLogin(){
    let userid=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(userid=="HITADMIN" && password=="HIT@321")
    {
        window.open("https://docs.google.com/spreadsheets/d/1w-ERRzVaUVVKOn70Zk1W8lf2yibm_902Jo9LHxbBMIY/edit?usp=sharing");
    }
    else{
        alert("Please Check User id and Password !!!");
    }
}