let searchInput = document.querySelector(".search__input")
let searchButton = document.querySelector(".search__btn")

let blockOne = document.getElementById("blockOne").outerHTML
let blockTwo = document.getElementById("blockTwo").outerHTML
let blockThree = document.getElementById( "blockThree" ).outerHTML;



let blockOneTxt = "info"
let blockTwoTxt = "cards"
let blockThreeTxt = "main"

let searchArray = [blockOneTxt, blockTwoTxt, blockThreeTxt]



searchButton.addEventListener("click", function(){

    let searchInputValue = searchInput.value
    for(let word of searchArray){
        if(word === searchInputValue){
            switch(searchInputValue){
                case  blockOneTxt: 
                    sessionStorage.setItem("Result", blockOne)
                break;
                case  blockTwoTxt: 
                    sessionStorage.setItem("Result", blockTwo)
                break;
                case  blockThreeTxt:
                    sessionStorage.setItem("Result", blockThree)
                break;
            }
            window.location.href = 'search.html';
            return
        }
    }
    alert("Please enter correct data!");
})