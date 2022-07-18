var s = document.querySelector("#stories");
var view = document.querySelector("#storyview");
var viewimg = document.querySelector("#storyview img");
var prg = document.querySelector(".prg");


var arr = ["https://images.unsplash.com/photo-1536013009411-25930e88d3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1571445556382-453d9e858ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1621095058736-e62ddccd9b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1561643241-9abf82d76a68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1530065928592-fb0dc85d2f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
]

    var clutter = "";
arr.forEach(function(ele,i){
    clutter+= `<div class="story">
    <img id=${i} src="${ele}" alt="">
</div>`
})

s.innerHTML = clutter;


s.addEventListener("click",function(d){
    show(Number(d.target.id));
})


function show(val){
        var p = 0;
        var c = val;
        var t = setInterval(function(){
        if(p<100){
            p++;
            prg.style.width = p + '%';
        }
        else{
            p=0;
            prg.style.width = '0%';
            view.style.display = "none";
            clearInterval(t);
            if(c+1 <= arr.length-1){
                show(c+1);
            }
        }
        },20)
    
        viewimg.setAttribute("src",arr[val]);
        view.style.display = "flex";
}




// function show(val){
//     var c = val;
//     var p = 0;

//     if(c<arr.length){
//         viewimg.setAttribute("src",arr[val]);
//         view.style.display = "flex";

//         var t = setInterval(a,10)
            
//             function a(){
//                 if(p<101){
//                     p++;
//                     prg.style.width = p + '%';
        
//                 }
//                 else{
//                     clearInterval(t);
//                     c++;
//                     show(c);
//                 }
//             }
        
        
//     }


    

    
// }