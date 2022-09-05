
const cookieBox = document.querySelector('.wrapper'),
acceptBtn = cookieBox.querySelector('.buttons button');

acceptBtn.onclick = ()=>{
        //setting cookie for 1 month, after 1 month cookie will be expired automatically
    document.cookie = "cookieBy=SumonHossain; max-age="+60*60*24*30;
    
    if(document.cookie){ //if the above cookie set
        cookieBox.classList.add("hide"); //hide cookie box once cookie set
    }else{
        alert("Cookie can't be set!"); // if cookie can't be set the alert an error
    }
}

// let's hide the cookie box if cookie is set and not expired
let checkCookie = document.cookie.indexOf("cookieBy=SumonHossain"); //checking our set cookie
// if cookie is set the hide the cookir box else show it
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");
