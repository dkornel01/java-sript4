window.addEventListener("load",init)

function init(){

    const tartalomElem=document.getElementById("tartalom")
    console.log(tartalomElem)

    const tartalom=document.getElementById("tartalom")
    const tartalomElemMaskepp=document.querySelector("#tartalom")
    const tartalomElemMaskepp2=document.querySelector(".tart")
    const tartalomElemMaskepp3=document.getElementsByClassName("tart")
    const tartalomElemEz=document.querySelectorAll(".tart")
    console.log(tartalomElemEz)
    console.log(tartalomElemEz[1])
    let szoveg="Helló"
    //tartalomElemEz[0].innerHTML="<p>"+szoveg+"<p>"
    //tartalomElemEz[0].innerHTML+="<p>${szoveg}<p>"
    //tartalomElemEz[0].innerHTML+="<p>"+szoveg+"<p>"
    //tartalomElemEz[0].innerHTML+="<p>"+szoveg+"<p>"
    const tomb=["pizza","hamburger","gyros","torta"]
    const lis=["index.jpg","index1.jpg","index2.jpg","index3.png"]
    metodus(tomb,tartalomElemEz);
    kepek(lis,tartalomElemEz)

}
function metodus(tomb,tartalomElemEz){
    let list=""
    for (let index = 0; index < tomb.length; index++) {
        list+="<li>"+tomb[index]
     }
     list="<ul>"+list
     tartalomElemEz[0].innerHTML+=list
}

function kepek(lis,tartalomElemEz){
    let kepjel="<article>"
    for (let index = 0; index < lis.length; index++) {
        kepjel += '<img src="'+lis[index]+' ">'
    }
    tartalomElemEz[1].innerHTML+=kepjel
}
