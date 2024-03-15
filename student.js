function SubmitData()
{
    let StudentRoll=document.getElementById("StudentRoll").value;
    let StudentName=document.getElementById("StudentName").value;
    let d=new Date();
    let logHor=d.getHours();
    let logMin=d.getMinutes();
    alert(StudentName+" Loged in successfully in "+logHor+":"+logMin);
    console.log(StudentName);
    console.log(StudentRoll);
}