
function Answer1() {
    var A1= window.prompt("Enter Number :");
    document.getElementById("answer1").innerHTML = A1;
  }


  function Answer2() {
    var A2= window.prompt("Enter Number To Check If It Divide By 3 And 4 Or Not");
    if(A2%3==0 && A2%4 ==0)
    document.getElementById("answer2").innerHTML = "Yes";
    else
    document.getElementById("answer2").innerHTML = "No";
  }

  function Answer3() {
    var Num1= window.prompt("Enter FirstNumber :");
    var Num2= window.prompt("Enter SecondNumber");
    if(Num1 >Num2)
    document.getElementById("answer3").innerHTML = Num1;
    else
    document.getElementById("answer3").innerHTML = Num2;
  }

  function Answer4() {
    var num = window.prompt("Enter Number To Check If It Positive  Or Negative");
    if(num>0)
    document.getElementById("answer4").innerHTML = "Positive";
    else
    document.getElementById("answer4").innerHTML = "Negative";
  }

  function max() {
    var Num1= window.prompt("Enter FirstNumber :");
    var Num2= window.prompt("Enter SecondNumber");
    var Num3= window.prompt("Enter ThirdNumber");
    
    

    if(Num1  < Num2 && Num1 < Num3)
    {document.getElementById("answer5").innerHTML = "The min num is :"+Num1;}
    else  if(Num2  < Num1 && Num2 < Num3)
    {document.getElementById("answer5").innerHTML ="The min num is :"+ Num2;}
    else
    {document.getElementById("answer5").innerHTML = "The min num is :"+Num3;}


    if(Num1 >Num2 && Num1>Num3)
    {document.getElementById("ans5").innerHTML = "The max num is :"+Num1;}
    else  if(Num2 >Num1 && Num2>Num3)
   { document.getElementById("ans5").innerHTML ="The max num is :"+ Num2;}
    else
    {document.getElementById("ans5").innerHTML = "The max num is :"+Num3;}
    
  }

  function Answer6() {
    var Num= window.prompt("Enter Number To Check If It's  Even Or Odd");
    if(Num%2==0)
    document.getElementById("answer6").innerHTML = "Even";
    else
    document.getElementById("answer6").innerHTML = "Odd";
  }

  function Answer7() {
    var char = window.prompt("Enter char To Check If It's  vowel or not");
    if(char=='i'||char=='e'||char=='o'||char=='u'||char=='a')
    document.getElementById("answer7").innerHTML = "Vowel";
    else
    document.getElementById("answer7").innerHTML = "consonant";
  }

  function Answer8() {
    var a = window.prompt("Enter number");
       var list = [];
        for (var i = 1; i < a; i++) {
            list.push(i);
        }
    
        document.getElementById("answer8").innerHTML =list;
    }
   
    
  function Answer9() {
    var a = window.prompt("Enter number");
       var list = [];
        for (var i = 1; i <=12; i++) {
            list.push(i*a);
        }
    
        document.getElementById("answer9").innerHTML =list;
    }


    function Answer10() {
        var a = window.prompt("Enter number");
           var list = [];
            for (var i = 1; i <=a; i++) {
                if(i%2==0)
               {list.push(i);} 
            }
        
            document.getElementById("answer10").innerHTML =list;
        }

        function Answer11() {
            var num1 = window.prompt("Enter first number");
            var num2 = window.prompt("Enter second number");
            var power=1
            for (var i=1; i<=num2; i++) {
                power *= num1;
                document.getElementById("answer11").innerHTML =power;
              }
            
               
            }
  

            function Answer12() {
                var sum=0 , avg, percentage;
                var mark1 =  Number(window.prompt("Enter first mark"));

                var mark2 =  Number(window.prompt("Enter second mark"));
                var mark3 =  Number(window.prompt("Enter third mark"));
                var mark4 =  Number(window.prompt("Enter fourth mark"));
                var mark5 =  Number(window.prompt("Enter fifth mark"));

                 sum = mark1 + mark2 + mark3 + mark4 + mark5;
                document.getElementById("sum").innerHTML ="The Total is :" + sum;
                 avg = sum/5.0;
                document.getElementById("avg").innerHTML ="The Avrage is :" + avg;
                 percentage = (sum / 500.0) * 100;
                document.getElementById("perc").innerHTML ="The percentagee is :" + percentage;
            
            }
 
            function Answer13() {
                var dayCount;
                var month =  Number(window.prompt("Month Number:"));
              if(month == 1 || month==3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
                
                     { dayCount = 31;}
                      else if(month == 4 || month == 6 || month == 9 || month == 11)
                    
                      {dayCount = 30;}
                    else if(month == 2)
                      
                       {dayCount = 28;} 

                  document.getElementById("answer13").innerHTML = "The Number Of these month is : " +dayCount;



            }
  
  function Answer14(){

   var grade=0.0;
    var mark1 =  Number(window.prompt("Enter Computer mark"));

    var mark2 =  Number(window.prompt("Enter Physics mark"));
    var mark3 =  Number(window.prompt("Enter Chemistry mark"));
    var mark4 =  Number(window.prompt("Enter Biology mark"));
    var mark5 =  Number(window.prompt("Enter Mathematics mark"));

    var sum = mark1 + mark2 + mark3 + mark4 + mark5;
    var percentage = (sum / 5.0);
    document.getElementById("ans14").innerHTML = percentage;
    if(percentage >= 90)
    { grade="A"}
else if(percentage>=80)
{grade="B"}
else if(percentage>=70)
{grade="C"}
else if(percentage>= 60)
{grade="D"}
else if(percentage >= 40)
{grade="E"}
else if(percentage < 40)
{grade="F"}
 document.getElementById("answer14").innerHTML = grade;

  }




  function Answer15() {
    var dayCount;
    var month =  Number(window.prompt("Month Number:"));
  
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          dayCount = 31;
          break;
        case 4:
        case 6:
        case 9:
        case 11:
          dayCount = 30;
          break;
        case 2:
          
            dayCount = 28;
          
          break;
        default:
          dayCount = -1; // invalid month
      }

      document.getElementById("answer15").innerHTML = "The Number Of these month is : " +dayCount;



}





function Answer16() {
    var char;
    var check = window.prompt("Enter Your Char:");
  
    switch (check) {
        case 'a':
        case 'u' :
        case 'e' :
        case 'o':
        case 'i' :  
     char ="Vowel";
          break;
        
        default:
          char = "consonant";
      }

      document.getElementById("answer16").innerHTML = "The Char  is : " +char;



}




function Answer17() {
   
    var Num1= Number(window.prompt("Enter FirstNumber :"));
    var Num2= Number(window.prompt("Enter SecondNumber"));
    var max;
  
    switch (true) {
        case (Num1 > Num2):
     
     max = Num1;
          break;
          case (Num1 < Num2):
     
            max = Num2;
            break;
        default:
          max = "Equal Number";
      }

      document.getElementById("answer17").innerHTML = "The Max Number is  : " + max;



}




function Answer18() {

    var Num1= Number(window.prompt("Enter Number :"));
    var check;
switch(true)
{
case (Num1 %2 ==0):

check = "even";
break;
default:
    check = "odd";

}

document.getElementById("answer18").innerHTML = "The  Number is  : " + check;



}



function Answer19() {
    var Num= Number(window.prompt("Enter Number :"));
    var check;
    switch(true)
    {
    case (Num >0):
    
    check = "positive";
    break;

    case (Num < 0):
    
    check = "Negative";
    break;
    default:
        check = "zero";
    
    }
    
    document.getElementById("answer19").innerHTML = "The  Number is  : " + check;

}

function Answer20() {
    var Num1= Number(window.prompt("Enter First Number :"));
    var Num2= Number(window.prompt("Enter Second Number :"));
    var operator = window.prompt("Enter operator :");
    var solution;
    switch(operator)
    {
    case '+':
    
        document.getElementById("answer20").innerHTML = (Num1 + '+' + Num2 + '=' + (Num1+Num2));
    break;

    case '-':
    
        document.getElementById("answer20").innerHTML = (Num1 + '-' + Num2 + '=' + (Num1-Num2));
    break;
    case '*':
    
        document.getElementById("answer20").innerHTML = (Num1 + '*' + Num2 + '=' + (Num1*Num2));
    break;
    case '/':
    
        document.getElementById("answer20").innerHTML = (Num1 + '/' + Num2 + '=' + (Num1/Num2));
    break;
    default:
        document.getElementById("answer20").innerHTML = "Invailed Operator";
    
    }
    
   


















}