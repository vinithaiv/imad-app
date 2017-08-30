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
    var request=new XMLHttpRequest();
     
     
     //Capture the response and store in a variable
     request.onreadystatechange = function(){
         if(request.readyState=== XMLHttpRequest.DONE) {
            
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
 
 
 //Submit name
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function () {
     
     var request=new XMLHttpRequest();
     
          request.onreadystatechange = function(){
         if(request.readyState=== XMLHttpRequest.DONE) {
            
             //take some action
             if(request.status === 200) {
                     //capture a list of names and render it as list
                var names = ['name1', 'name2' , 'name3', 'name4'];
                var list = '';
                for(var i=0; i < names.length; i++)
                {list += '<li>' + names[i] + '</li>';}
        
                var ul=document.getElementById('namelist');
    ul.innerHTML = list;
                 
             }
         }
     };
     
     //Make the request
     request.open('GET','http://vinithaiv.imad.hasura-app.io/submit-name?name=' + name, true);
     request.send(null);
    
     
 
 

    
 };
 