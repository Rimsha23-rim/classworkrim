function calculate() {
    let name =document.getElementById("name").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number (document.getElementById("m3").value);
    let end = Number(document.getElementById("end").value);

    let total = m1 + m2 + m3 + end ;
    
    let persentage= (total/150)*100;
    let grade;
    if (persentage>=70) {
        grade="A"
    } 
    else if(persentage>=60){
         grade="B"
    }
    else if(persentage>=50){
         grade="C"
    }
    else{
        grade="Fail"
    }

    document.getElementById("result").innerHTML=
    name+",Your Total:"+total+"/150"+
        "<br>Grade: " + grade +
        "+<br>persentage:"+ persentage;

     }
     