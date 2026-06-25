var submitBtn = document.querySelector("#Submit")
var works = document.querySelectorAll(".work")
var myDrawing = document.querySelectorAll(".Drawing")
var myCraft = document.querySelectorAll(".Craft")
var x
var myFilters = document.querySelector("#sidebar")

function openmenu(){
    myFilters.style.left ="0"
}
function closemenu(){
    myFilters.style.left ="-300px"
}

function filterCreations(x){
    if(x==1){
        myDrawing.forEach(el => el.parentElement.style.display = "flex")
        myCraft.forEach(el => el.parentElement.style.display = "flex")
    }

    else if(x==2){
        myDrawing.forEach(el => el.parentElement.style.display = "flex")
        myCraft.forEach(el => el.parentElement.style.display = "none")
    }

    else if(x==3){
        myDrawing.forEach(el => el.parentElement.style.display = "none")
        myCraft.forEach(el => el.parentElement.style.display = "flex")
    }

}

submitBtn.addEventListener("click", filterWorks)

function filterWorks(){

    var graphicAllowed = document.querySelector("#graphic").checked
    var englishAllowed = document.querySelector("#English").checked
    var spanishAllowed = document.querySelector("#Spanish").checked
    var germanAllowed = document.querySelector("#German").checked
    var danielAllowed = document.querySelector("#Daniel").checked
    var monicaAllowed = document.querySelector("#Monica").checked

    works.forEach(function(work){

        var show = true

        // graphic filter
        if(work.classList.contains("graphic") && !graphicAllowed){
            show = false
        }

        // language filters
        if(work.classList.contains("english") && !englishAllowed){
            show = false
        }

        if(work.classList.contains("spanish") && !spanishAllowed){
            show = false
        }

        if(work.classList.contains("german") && !germanAllowed){
            show = false
        }

        // author filters
        if(work.classList.contains("daniel") && !danielAllowed){
            show = false
        }

        if(work.classList.contains("monica") && !monicaAllowed){
            show = false
        }

        if(show){
            work.style.display = "flex"
        } else {
            work.style.display = "none"
        }

    })
}