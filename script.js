//Listen for form submit

 document.querySelector("#my-form").addEventListener('submit', saveBookmark)


function saveBookmark(e){
   e.preventDefault()

   //get form Value
   let siteName = document.getElementById("siteName").value
   let siteUrl = document.getElementById("siteUrl").value

if(!siteName || !siteUrl){
    alert("plase fill all forms")
    return false
}

   let bookmark = {
     name: siteName,
     url: siteUrl
   }
   
   

   siteName = document.getElementById("siteName").value =""
   siteUrl = document.getElementById("siteUrl").value = ""

   
// local storage test
   if(localStorage.getItem("bookmarks") === null){
    let bookmarks = []

    bookmarks.push(bookmark)

     localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
   } else {
//get bookmark from local storage
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    
    //add bookmark to array
    bookmarks.push(bookmark)

    //set back to local storage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
   }
   fetchBookmark()
}

  function deleteBookmark(url){
  //get all url
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"))

  bookmarks.forEach((bookmark,index) => {
   if(bookmark.url == url){
        bookmarks.splice(index, 1)
   }
  })

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks))

  fetchBookmark()
  }

function fetchBookmark(){
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"))

    const bookmarksResults = document.getElementById("bookmarksResults")


    bookmarksResults.innerHTML = ""

    bookmarks.forEach(bookmark => {
        const name = bookmark.name
        const url = bookmark.url

        bookmarksResults.innerHTML += `<div class="well"> 
                                          <h3>${name}
                                          <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
                                          <a onclick="deleteBookmark('${url}')" class="btn btn-danger" href="#">Delete</a>
                                          </h3>
                                       </div>`
    });
}










 




