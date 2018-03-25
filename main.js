

$(document).ready(function() {
    var imageLoader = document.getElementById('filePhoto');
        imageLoader.addEventListener('change', handleImage, false);
    
    function handleImage(e) {
        var reader = new FileReader();
    
    
       
            $("#btnSubmit").click(function(){
             
                
            var image=document.getElementById('myImage');
            image.crossOrigin = 'anonymous';
            GetBinary(image, "#550000");
        
            })
        
        reader.onload = function (event) {
            $('#uploader img').attr('src',event.target.result);
            
        }
    
        reader.readAsDataURL(e.target.files[0]);
     
    
    }
    
    var dropbox;
    dropbox = document.getElementById("uploader");
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);
    
    function dragenter(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    function dragover(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    function drop(e) {
      e.stopPropagation();
      e.preventDefault();
      //you can check e's properties
      //console.log(e);
      var dt = e.dataTransfer;
      var files = dt.files;
      
      //this code line fires your 'handleImage' function (imageLoader change event)
      imageLoader.files = files;
    }
    });
     function GetBinary(imgElement,tintColor) {
    
        var canvas = document.getElementById("myCanvas");
        canvas.width = imgElement.offsetWidth;
        canvas.height = imgElement.offsetHeight;
        var ctx = canvas.getContext("2d");
        ctx.translate(0.5, 0.5);
        ctx.drawImage(imgElement,0,0);
        var imgPixels = ctx.getImageData(0,0,canvas.width,canvas.height)
        var pixels = imgPixels.data;
        var w = canvas.width;
        var h = canvas.height;
      
      createSVG(w,h);


        var centerx = canvas.width / 2;
        var centery = canvas.height / 2;
        var l = w * h;
        // ctx.moveTo(0,0)
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < l; i++) {
            // get color of pixel
            var r =  imgPixels.data[i*4]; // Red
            var g =  imgPixels.data[i*4+1]; // Green
            var b =  imgPixels.data[i*4+2]; // Blue
            var a =  imgPixels.data[i*4+3]; // Alpha
            var avg = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);
    
             let y = parseInt(i / w, 10);
            let x = i - y * w;
    // arr[x]=arr[x]||[]
    // arr[x][y]=avg;
            if(x%3==0&&y%4==0)
            Draw(x,y,avg,ctx)
        }
   canvas.parentNode.removeChild(canvas)
    function Draw(x,y,a,ctx)
    {
        
    
        ctx.beginPath();
        // ctx.moveTo(x,y)
    
        
    
        // ctx.lineTo(x+5,y+5);
        
        // var d= Math.random()*10;
        var t=((a/255)*10);
    
        var arc_s=.5*Math.PI;
        var arc_end = .75*Math.PI;
        var circle_start= 0;
        var circle_end= 2*Math.PI;
    
    
       var start =circle_start;
        var end =circle_end;
    if(a/255<.5 && x<w && y<h)
      
    {ctx.strokeStyle='black'
    ctx.lineWidth= .5;
    
    // ctx.rect(x+Math.random()*10,y+Math.random()*10,10,5*Math.PI,Math.PI);
    var svgNS = "http://www.w3.org/2000/svg";  

    var myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"

    myCircle.setAttributeNS(null,"cx",x+Math.random()*10);
    myCircle.setAttributeNS(null,"cy",y+Math.random()*10);
    myCircle.setAttributeNS(null,"r",5+Math.random()*10);


    document.getElementById("gg").appendChild(myCircle);
}
        else{
        // ctx.strokeStyle='black';
        // ctx.lineWidth= 1;
        // ctx.arc(x,y,10,arc_s,arc_end);
    
       
        }
        // ctx.lineTo(x+10,y+10);
         ctx.stroke();
        }
       
        // var image = new Image();
        // image.id = "pic"
        // image.src = canvas.toDataURL();
        // // document.getElementById('myCanvas').appendChild(image);
       document.getElementById('gcodeButton').disabled = false;
           }    
    
    
    
 function createSVG(width,height)
 {
    var svgNS = "http://www.w3.org/2000/svg";
    var check=document.getElementById("mySVG");
    if(check!=null){
        var svg=  document.getElementById("mySVG")
   svg.parentNode.removeChild(svg);
    }
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttributeNS(null,'width',width);
    svg.setAttributeNS(null,'height',height);
    svg.setAttributeNS(null,'id','mySVG');
    document.getElementById("container").appendChild(svg)
    var g=document.createElementNS(svgNS,'g');
    g.setAttributeNS(null,'id','gg');
    g.setAttributeNS(null,'stroke','black');
    g.setAttributeNS(null,'fill','none');
    g.setAttributeNS(null,'stroke-width','.2');

    document.getElementById("mySVG").appendChild(g);
    
  
   
 }
 
    