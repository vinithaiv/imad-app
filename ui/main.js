console.log('Loaded!');
// change element of main text

/*var element=document.getElementById('main-text');
element.innerHTML="Changed maintext";
  
 //Move element
 var img=document.getElementById('madi');
     
 var marginLeft=0; 
 function moveRight() {
     marginLeft=marginLeft+1;
     img.style.marginLeft=marginLeft+"px";
     
 }
 
 img.onclick = function() {
     var interval=setInterval(moveRight,50);
 };*/
 
 
 
 var button=document.getElementById('counter');
 var counter=0;
 button.onclick=function () {
     
     
     //Create a request object
    var request=XMLHttpRequest();
     
     
     //Capture the response and store in a variable
     request.onreadystatechange = function(){
         if(request.readyState=== XMLXMLHttpRequest.DONE) {
            
             //take some action
             if(request.status === 200) {
                 var counter = request.responseText;
                 var span=document.getElementById('count');
     span.innerHTML = counter.toString();
                 
             }
         }
     };
     
     //Make the request
     request.open('GET','http://vinithaiv.imad.hasura-app.io/counter',true);
     request.send(null);
    
     
 };