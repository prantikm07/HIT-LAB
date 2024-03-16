submitbutton.disabled=true;
setInterval(() => {
    // var d=new Date();
    // var logHor=d.getHours();
    // var logMin=d.getMinutes();
    // let timeshow=document.getElementById("time");
    let StudentName=document.getElementById("StudentName").value;
    let StudentRoll=document.getElementById("StudentRoll").value;
    let PcNumber=document.getElementById("PcNumber");
    // timeshow.disabled=true;
    let submitbutton=document.getElementById("submitbutton");
    if(StudentName=="" || StudentRoll=="" || PcNumber=="")
    {
        submitbutton.disabled=true;
    }
    else{
        submitbutton.disabled=false;
    }
    // let AmPm="";
    // if(logHor>12)
    // {
    //     logHor=logHor-12;
    //     AmPm="pm";
    // }
    // else{
    //     AmPm="am";
    // }
    // timeshow.value=logHor+":"+logMin+" "+AmPm;
}, 1000);
function SubmitData()
{
    let msg="Name : "+StudentName.value+"\nRoll : "+StudentRoll.value+"\nPC Number : "+PcNumber.value;
    alert(msg+"\nSuccessfully Logged In.");
    setTimeout(() => {
        window.location.reload();
    }, 500);
}

