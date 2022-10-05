// This is my model and it handles on the service calls
var homeContent = `<h1>home</h1>`
var aboutContent = `<h1>about</h1>`

function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}

function getLastName(lastName){
    console.log();
}

export { setCurrentPageContent };