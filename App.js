var color=["rgb(111, 0, 255)","rgb(0, 255, 0)","rgb(251, 255, 0)","rgb(255, 0, 0)","rgb(0, 4, 255)","rgb(255, 102, 0)"];
var counter=0;
setInterval( function(){
  document.getElementById("develop").style.color=color[counter];
  counter++;
  if(counter===7){
    counter=0
  }},100);
 	 	 	
 
 	
 function stock(){
 	var a5000=document.getElementById("a").value;
 	var b1000=document.getElementById("b").value;
 	var c500=document.getElementById("c").value;
 	var d100=document.getElementById("d").value;
 	var e50=document.getElementById("e").value;
 	var f20=document.getElementById("f").value;
 	var g10=document.getElementById("g").value;
 	var h5=document.getElementById("h").value;
 	var i2=document.getElementById("i").value;
 	var j1=document.getElementById("j").value;
 	
 	document.getElementById("astock").innerText=a5000;
     document.getElementById("bstock").innerText=b1000;
 	document.getElementById("cstock").innerText=c500;
     document.getElementById("dstock").innerText=d100;
     document.getElementById("estock").innerText=e50;
     document.getElementById("fstock").innerText=f20;
     document.getElementById("gstock").innerText=g10;
     document.getElementById("hstock").innerText=h5;
     document.getElementById("istock").innerText=i2;
     document.getElementById("jstock").innerText=j1;
     


 	document.getElementById("openstock").style.display="none";
 }

 
 function calamount(){
 var cal= document.getElementById("recamount").innerText-document.getElementById("billamount").value;
 document.getElementById("payamount").value=cal;
  
 }

  var rec = 0;
  var inrec=0;
 function recev(a, b){
 	rec+=a;
 	document.getElementById("recamount").innerText=rec;

    var ab= parseInt(document.getElementById(b).innerText);
    ab+=1
    document.getElementById(b).innerText=ab
    
 }


 function check(){
      rec=0;
      document.getElementById("recamount").innerText=0;
     var rs=document.getElementById("payamount").value;
     var fivet=0;
     var onet=0;
     var fiveh=0;
     var oneh=0;
     var fifty=0;
     var twenty=0;
     var ten=0;
     var five=0;
     var two=0;
     var one=0;
     
    var a=document.getElementById("astock").innerText;
 	var b=document.getElementById("bstock").innerText;
 	var c=document.getElementById("cstock").innerText;
 	var d=document.getElementById("dstock").innerText;
 	var e=document.getElementById("estock").innerText;
 	var f=document.getElementById("fstock").innerText;
 	var g=document.getElementById("gstock").innerText;
 	var h=document.getElementById("hstock").innerText;
 	var i=document.getElementById("istock").innerText;
 	var j=document.getElementById("jstock").innerText;

if((parseInt(rs/5000))<=a)  
   {
     if(rs>=5000){
     	fivet=(rs/5)*0.1/100;
     	fivet=parseInt(fivet);
     	rs=rs-(fivet*5000);
     	document.getElementById("fiveth").innerText=fivet;
     	document.getElementById("astock").innerText=a-fivet;
     }
     else{
     	document.getElementById("fiveth").innerText="";
     }
     
     if(rs>=1000){
     	onet=(rs/1000);
     	onet=parseInt(onet);
     	rs=rs-(onet*1000);
     	document.getElementById("oneth").innerText=onet;
         document.getElementById("bstock").innerText=b-onet;
     }
     else{
     	document.getElementById("oneth").innerText="";
     }
     
     if(rs>=500){
     	fiveh=(rs/500);
     	fiveh=parseInt(fiveh);
     	rs=rs-(fiveh*500);
     	document.getElementById("fivehd").innerText=fiveh;
        document.getElementById("cstock").innerText=c-fiveh;
     } 
     else{
     	document.getElementById("fivehd").innerText="";
     }
     
     if(rs>=100){
     	oneh=(rs/100);
     	oneh=parseInt(oneh);
     	rs=rs-(oneh*100);
     	document.getElementById("onehd").innerText=oneh;
     	document.getElementById("dstock").innerText=d-oneh;
     } 
     else{
     	document.getElementById("onehd").innerText="";
     }
   
     if(rs>=50){
     	fifty=(rs/50);
     	fifty=parseInt(fifty);
     	rs=rs-(fifty*50);
     	document.getElementById("fifty").innerText=fifty;
     	document.getElementById("estock").innerText=e-fifty;
     } 
     else{
     	document.getElementById("fifty").innerText="";
     }
     
     if(rs>=20){
     	twenty=(rs/20);
     	twenty=parseInt(twenty);
     	rs=rs-(twenty*20);
     	document.getElementById("twenty").innerText=twenty;
     	document.getElementById("fstock").innerText=f-twenty;
     } 
     else{
     	document.getElementById("twenty").innerText="";
     }
    
     if(rs>=10){
     	ten=(rs/10);
     	ten=parseInt(ten);
     	rs=rs-(ten*10);
     	document.getElementById("ten").innerText=ten;
     	document.getElementById("gstock").innerText=g-ten;
     } 
     else{
     	document.getElementById("ten").innerText="";
     }

     if(rs>=5){
     	five=(rs/5);
     	five=parseInt(five);
     	rs=rs-(five*5);
     	document.getElementById("five").innerText=five;
        document.getElementById("hstock").innerText=h-five;
     } 
     else{
     	document.getElementById("five").innerText="";
     }
    
     if(rs>=2){
     	two=(rs/2);
     	two=parseInt(two);
     	rs=rs-(two*2);
     	document.getElementById("two").innerText=two;
     	document.getElementById("istock").innerText=i-two;
     } 
     else{
     	document.getElementById("two").innerText="";
     }     
     if(rs>=1){
     	one=(rs/1);
     	one=parseInt(one);
     	rs=rs-(one*1);
     	document.getElementById("one").innerText=one;
     	document.getElementById("jstock").innerText=j-one;
     } 
     else{
     	document.getElementById("one").innerText="";
     }
     }
     
  
  
if((parseInt(rs/5000))>=a)  
   {
     if(a!=0){
     	fivet=(rs/5)*0.1/100;
     	fivet=parseInt(fivet);
     	fivet=fivet-a;
     	rs=rs-(a*5000);
     	document.getElementById("fiveth").innerText=a;
     	document.getElementById("astock").innerText=0;
     }
     else{
     	document.getElementById("fiveth").innerText="";
     }
     
     if(rs>=1000){
     	onet=(rs/1000);
     	onet=parseInt(onet);
     	rs=rs-(onet*1000);
     	document.getElementById("oneth").innerText=onet;
         document.getElementById("bstock").innerText=b-onet;
     }
     else{
     	document.getElementById("oneth").innerText="";
     }
     
     if(rs>=500){
     	fiveh=(rs/500);
     	fiveh=parseInt(fiveh);
     	rs=rs-(fiveh*500);
     	document.getElementById("fivehd").innerText=fiveh;
        document.getElementById("cstock").innerText=c-fiveh;
     } 
     else{
     	document.getElementById("fivehd").innerText="";
     }
     
     if(rs>=100){
     	oneh=(rs/100);
     	oneh=parseInt(oneh);
     	rs=rs-(oneh*100);
     	document.getElementById("onehd").innerText=oneh;
     	document.getElementById("dstock").innerText=d-oneh;
     } 
     else{
     	document.getElementById("onehd").innerText="";
     }
   
     if(rs>=50){
     	fifty=(rs/50);
     	fifty=parseInt(fifty);
     	rs=rs-(fifty*50);
     	document.getElementById("fifty").innerText=fifty;
     	document.getElementById("estock").innerText=e-fifty;
     } 
     else{
     	document.getElementById("fifty").innerText="";
     }
     
     if(rs>=20){
     	twenty=(rs/20);
     	twenty=parseInt(twenty);
     	rs=rs-(twenty*20);
     	document.getElementById("twenty").innerText=twenty;
     	document.getElementById("fstock").innerText=f-twenty;
     } 
     else{
     	document.getElementById("twenty").innerText="";
     }
    
     if(rs>=10){
     	ten=(rs/10);
     	ten=parseInt(ten);
     	rs=rs-(ten*10);
     	document.getElementById("ten").innerText=ten;
     	document.getElementById("gstock").innerText=g-ten;
     } 
     else{
     	document.getElementById("ten").innerText="";
     }

     if(rs>=5){
     	five=(rs/5);
     	five=parseInt(five);
     	rs=rs-(five*5);
     	document.getElementById("five").innerText=five;
        document.getElementById("hstock").innerText=h-five;
     } 
     else{
     	document.getElementById("five").innerText="";
     }
    
     if(rs>=2){
     	two=(rs/2);
     	two=parseInt(two);
     	rs=rs-(two*2);
     	document.getElementById("two").innerText=two;
     	document.getElementById("istock").innerText=i-two;
     } 
     else{
     	document.getElementById("two").innerText="";
     }     
     if(rs>=1){
     	one=(rs/1);
     	one=parseInt(one);
     	rs=rs-(one*1);
     	document.getElementById("one").innerText=one;
     	document.getElementById("jstock").innerText=j-one;
     } 
     else{
     	document.getElementById("one").innerText="";
     }
     }   	
 	}