/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var firebaseConfig = {
    apiKey: "AIzaSyChHdmRgEzjW0gvjcJxew81TqOEBHflEEo",
    authDomain: "travel-536c3.firebaseapp.com",
    databaseURL: "https://travel-536c3.firebaseio.com",
    projectId: "travel-536c3",
    storageBucket: "travel-536c3.appspot.com",
    messagingSenderId: "394142129331",
    appId: "1:394142129331:web:2a12c5c249cca21ea1a4c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
function save(){
     
 var name= document.getElementById("fname1").value.toUpperCase(); 
 var url= document.getElementById("fname2").value; 
 var quantity= document.getElementById("fname3").value; 
  var image= document.getElementById("fname4").value; 
 var e= document.getElementById("select"); 
var text = e.options[e.selectedIndex].text;
if(name===""||url===""||quantity===""||text==="type"||image===""){
alert("info incomplete");}else{

var Ref = db.collection(text).doc(name);

Ref.get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
      Ref.onSnapshot((doc) => {
       //alert("existing product");
         // navigator.notification.alert("existing product", null, "FAILED..!!");
         alert("existing product....FAILED..!!");
      });
    } else {
     Ref.set({
    name: name, quantity: quantity,
    url: url,image: image, type: text
     }); 
    
    // navigator.notification.alert("product is added", null, "SUCCEES..!!");
    alert("added product....succeess..!!");
    }
});


  
}
}
function view(){
    
    window.open("newhtml.html");
    
    
}


function view_product(){
     var e= document.getElementById("select"); 
 var text = e.options[e.selectedIndex].text;
if(text==="type"){
alert("please choose the type");}else{
document.getElementById("tabl").innerHTML =""; 
var Ref = db.collection(text);

Ref.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      //  alert(doc.id+doc.data().name);
      var name=doc.data().name;
      var url=doc.data().url;
      var image=doc.data().image;
      var quantity=doc.data().quantity;
      var type=doc.data().type;
      if(image.includes("preview")){
 var html="<table style='width:100%; border-collapse:collapse; font:12px arial,sans-serif;'><tr><td colspan='2' style='padding:10px 20px; background-color:#ACB3B9;'><h1 style='font-size:24px;'></h1></td></tr><tr valign='top' style='height:70px;'><td style='width:60%; padding:20px; background-color:#D4D7DC; vertical align: top;'><ul style='list-style:none; padding:0px; line-height:24px;'><li><iframe src="+image+" width='150' height='50'></iframe></li></ul></td><td style='padding:20px; background-color:#F2F2F2; vertical-align:top;'><a href="+url+">"+name+"</a><h6>quantity:  "+quantity+"</h6><h6>type:  "+type+"</h6></td></tr></table>"
      }else{
   var html="<table style='width:100%; border-collapse:collapse; font:12px arial,sans-serif;'><tr><td colspan='2' style='padding:10px 20px; background-color:#ACB3B9;'><h1 style='font-size:24px;'></h1></td></tr><tr valign='top' style='height:70px;'><td style='width:60%; padding:20px; background-color:#D4D7DC; vertical align: top;'><ul style='list-style:none; padding:0px; line-height:24px;'><li><img src="+image+" onclick='window.open(this.src)' width='150' height='70'></li></ul></td><td style='padding:20px; background-color:#F2F2F2; vertical-align:top;'><a href="+url+">"+name+"</a><h6>quantity:  "+quantity+"</h6><h6>type:  "+type+"</h6></td></tr></table>"
        
      }
       document.getElementById("tabl").innerHTML += html; 
               
    });
});


  
}

    
    
 }
// var html="<table style='width:20%; border-collapse:collapse; font:14px arial,sans-serif;'><tr><td colspan='2' style='padding:10px 20px; background-color:#ACB3B9;'><h1 style='font-size:24px;'></h1></td></tr><tr valign='top' style='height:60px;'><td style='width:20%; padding:20px; background-color:#D4D7DC; vertical align: top;'><ul style='list-style:none; padding:0px; line-height:24px;'><li><img src='https://pi.lbbcdn.com/wp-content/uploads/2018/10/Arduino-Traffic-Light.jpg' width='50' height='50'></li></ul></td><td style='padding:20px; background-color:#F2F2F2; vertical-align:top;'><h6>WELCOME TO OUR SITE</h6></td></tr></table>"
function search(){
  var collect = ["sensor","power", "card","wire"];  
  var search= document.getElementById("input1").value.toUpperCase(); 
  if(search!==""){
document.getElementById("tabl").innerHTML ="";  
 
//for (i = 0; i < collect.length; i++) { 
 var Ref = db.collection("card");
 
Ref.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

     var ter=doc.id;
            if(ter.includes(search)){ 
             //     alert(doc.id+doc.data().name);

      var name=doc.data().name;
      var url=doc.data().url;
      var image=doc.data().image;
      var quantity=doc.data().quantity;
      var type=doc.data().type;
      if(image.includes("preview")){
 var html="<table style='width:100%; border-collapse:collapse; font:12px arial,sans-serif;'><tr><td colspan='2' style='padding:10px 20px; background-color:#ACB3B9;'><h1 style='font-size:24px;'></h1></td></tr><tr valign='top' style='height:70px;'><td style='width:60%; padding:20px; background-color:#D4D7DC; vertical align: top;'><ul style='list-style:none; padding:0px; line-height:24px;'><li><iframe src="+image+" width='150' height='50'></iframe></li></ul></td><td style='padding:20px; background-color:#F2F2F2; vertical-align:top;'><a href="+url+">"+name+"</a><h6>quantity:  "+quantity+"</h6><h6>type:  "+type+"</h6></td></tr></table>"
      }else{
 var html="<table style='width:100%; border-collapse:collapse; font:12px arial,sans-serif;'><tr><td colspan='2' style='padding:10px 20px; background-color:#ACB3B9;'><h1 style='font-size:24px;'></h1></td></tr><tr valign='top' style='height:70px;'><td style='width:60%; padding:20px; background-color:#D4D7DC; vertical align: top;'><ul style='list-style:none; padding:0px; line-height:24px;'><li><img src="+image+" onclick='window.open(this.src)' width='150' height='70'></li></ul></td><td style='padding:20px; background-color:#F2F2F2; vertical-align:top;'><a href="+url+">"+name+"</a><h6>quantity:  "+quantity+"</h6><h6>type:  "+type+"</h6></td></tr></table>"
        
      }
       document.getElementById("tabl").innerHTML += html; 
               
                } 
            });
    });   
    
    
//}
}else{
    alert("please insert a text");
}

}
                
        