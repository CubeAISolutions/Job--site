function myfunc(){
let Email= document.getElementById("email").value;
let title= document.getElementById("job-title").value;
let location= document.getElementById("job-location").value;
let region= document.getElementById("job-region").value;
let type= document.getElementById("job-type").value;
let description= document.getElementById("jobdesc").value;
let companyName= document.getElementById("company-name").value;
let tagline= document.getElementById("company-tagline").value;
let companyDesc= document.getElementById("company-jobdesc").value;
let companyWebsite= document.getElementById("company-website" ).value;
let companyFb= document.getElementById("company-website-fb").value;
let companyTw= document.getElementById("company-website-tw").value;
let file= document.getElementById("companyfile").value;
let logo= document.getElementById("companylogo").value;


if(!Email || !title || !location || !region || !type || !description || !companyName)
    alert("Please Fill In All Required Fields");
    console.log(Email);
    console.log(title);
    console.log(location);
    console.log(region);
    console.log(type);
    console.log(description);
    console.log(companyName);
    console.log(tagline);
    console.log(companyDesc);
    console.log(companyWebsite);
    console.log(companyFb);
    console.log(companyTw);
    console.log(file);
    console.log(logo);

}