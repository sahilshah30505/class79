student_array=[];
function submit(){
    var n1= document.getElementById("student_1").value;
    var n2= document.getElementById("student_2").value;
    var n3= document.getElementById("student_3").value;
    var n4= document.getElementById("student_4").value;
    student_array.push(n1);
    student_array.push(n2);
    student_array.push(n3);
    student_array.push(n4);
    document.getElementById("disply").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    document.getElementById("disply").innerHTML=student_array;
}