

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#header",
        start:"top top ",
        end:"bottom top",
        // markers:true,
        scrub:.1,
        pin:true,
    }
})
tl.from("#gif1",{
    x:"506px",
    opacity:0,
    duration:.5
},"p")
tl.from("#gif2",{
    opacity:0,
    duration:.5
    
},"p")
tl.from("#gif3",{
    x:"-506px",
    opacity:0,
    duration:.5

},"p")
tl.to("#header>h1",{
    // pin:true,
    top:"5%",
    left:"7%",
    // y:"-200px",
    fontSize:" 50px",
    letterSpacing: "6px"
},"p")
tl.to("h2",{
    opacity:1,
    ease:Power1,
    delay:1
},"p")
tl.to("#gif1>h1,#gif2>h1,#gif3>h1",{
    opacity:1,
    ease:Power1,
    delay:1

},"p")
// DGABDGAD
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#jhome",
        start:"top ",
        end:"bottom top",
        scrub:1,
        // scale:5,
        // markers:true,
        pin:true,
    }
})
tl.to("#jpic1",{
    opacity:0,
},"same1")
tl.to("#jpic2",{
    opacity:0,
},"same2")
tl.to("#jpic3",{
    opacity:0,
},"same3")
tl.to("#jpic4",{
    opacity:0,
},"same4")
tl.to("#jpic5",{
    opacity:0,
},"same5")
tl.to("#jpic6",{
    opacity:0,
},"same6")
tl.to("#jpic7",{
    opacity:1,
},"same7")
tl.to("#jpic8",{
    opacity:1,
},"same8")
tl.to("#jpic9",{
    opacity:1,
},"same9")
tl.to("#jpic10",{
    opacity:1,
},"same10")
tl.to("#jpic11",{
    opacity:1,
},"same11")
tl.to("#jimg1",{
    opacity:0,
},"same1")
tl.to("#jimg2",{
    opacity:0,
},"same2")
tl.to("#jimg3",{
    opacity:0,
},"same3")
tl.to("#jimg4",{
    opacity:0,
},"same4")
tl.to("#jimg5",{
    opacity:0,
},"same5")
tl.to("#jimg6",{
    opacity:0,
},"same6")
tl.to("#jimg7",{
    opacity:1,
},"same7")
tl.to("#jimg8",{
    opacity:1,
},"same8")
tl.to("#jimg9",{
    opacity:1,
},"same9")
tl.to("#jimg10",{
    opacity:1,
},"same10")
tl.to("#jimg11",{
    opacity:1,
},"same11")
tl.to("#jarch0",{
    opacity:1,
    ease:Power1,
},"same7")
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#jhome2",
        start:"top top",
        end:"bottom top",
        scrub:1,
        // scale:5,
        // markers:true,
        pin:true,
    }
})
tl.from("#jarch2",{
    scale:1,
    top:"50%",
    left:"49.9%",
    right:"60%",
    width:"100%",
    height:"200%",
    scrub:1,
    opacity:1,
})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#jhome0",
        start:"top top",
        end:"bottom bottom,",
        scrub:1,
        // markers:true,
        pin:true,
    }
})
tl.to("#ss1",{
    scale:0,
    top:"50px",
})
// Sana
var tl=gsap.timeline({
    scrollTrigger:{
        scroll:"#main",
        trigger:"#home",
        // markers:true,
        start:"top top",
        scrub:0.1,
        pin:true,
        end: "+=" + (window.innerHeight * 7)
    },
 })
 tl.to("#stext1>h1",{
    y:-135,
    ease:Power1
},"a")
tl.to("#stext2>h1",{
    y:-135,
    ease:Power1,
    delay:.05
},"a")
tl.to("#shs",{
    rotate:"0deg",
    ease:Power1
},"a")
tl.to("#stext3>h1",{
    y:-135,
    ease:Power1,
    delay:.1

},"a")
tl.to("#stext h1",{
    y:-150,
    ease:Power1,
})
tl.to("#simg1",{
    top:"-70%",
    ease:Power1,
    duration:1
},"a")
tl.to("#simg2",{
    top:"-70%",
    ease:Power1,
    duration:1
},"a")
tl.to("#simg3",{
    top:"-60%",
    ease:Power1,
    duration:1
},"a")
tl.to("#simg4",{
    top:"20%",
    ease:Power1,
    duration:1,
    delay:.2
},"a")
tl.to("#simg5",{
    top:"55%",
    ease:Power1,
    duration:1,
    delay:.3
},"a")
tl.to("#simg6",{
    top:"70%",
    ease:Power1,
    duration:.8,
    delay:.4
},"a")
tl.to("#home>button",{
    opacity:1,
    ease:Power1,
    delay:1.2
},"a")

 
gsap.to("#cimg2",{
    height:"100%",
    ease:Power1,
    duration:.8

})
gsap.to("#cimg3",{
    height:"100%",
    ease:Power1,
    delay:.3,
    duration:.8
})
gsap.to("#cimg4",{
    height:"100%",
    ease:Power1,
    delay:.6,
    duration:.8
})
gsap.to("#cimg5",{
    height:"100%",
    ease:Power1,
    delay:.9,
    duration:.8
})
gsap.to("#cimg5",{
    top:"0%",
    height:"0%",
    ease:Power1,
    delay:1.2,
    duration:.8
})
gsap.to(".cstart",{
    top:"0%",
    height:"0%",
    ease:Power1,
    delay:1.3,
    duration:.7
})
var flag=0
document.querySelector("#book2").addEventListener("click",function(){
    if(flag==0){
        document.querySelector("#sbtmnav").style.left="50%";
        document.querySelector("#book2").innerHTML="Back";
        flag=1
    }else{
        document.querySelector("#sbtmnav").style.left="-50%";
        document.querySelector("#book2").innerHTML="Book Now";

        flag =0
    }
})
// var tlc=gsap.timeline({
//     scrollTrigger:{
//         trigger:".cfood",
//         markers:true,
//         start:"top top",
//         scrub:true,
//         pin:true,
//         end: "+=" + (window.innerHeight * 7)

//     },
// })
// tlc.to("#cfood-right #cone",{
//     rotate:"20deg",
//     ease:Power0,
//     duration:.1,
// },"z")
// tlc.to(".c-two",{
//     y:-1260,
//     ease:Power0,
//     duration:.1
// },"z")
// tlc.to(".c-two",{
//     rotate:"15deg",
// },"z")
// tlc.to("#c-three",{ 
//     y:-2450,
//     duration:.1,
// },"z")
// tlc.to("#c-three",{
//     rotate:"12deg",
// },"z") 
// tlc.to("#c-text-one",{
//   opacity:-20,
//   duration:1.5
// },"z")
// tlc.to("#c-text-two",{
//     opacity:35,
//     duration:1.5
// },"z")
// tlc.to("#c-four",{ 
//     y:-2950,
//     duration:.1,
// },"z")
// tlc.to("#c-four",{
//     rotate:"8deg",
// },"z")
// tlc.to("#cfood-left #c-text-two",{
//     opacity:0,
//     duration:4.5,
//   },"z")
//   tlc.to("#cc-text-three",{
//       opacity:1,
//       duration:4.5,


//   },"z") 


//   var tlc1 =gsap.timeline();
