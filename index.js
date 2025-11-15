import { posts } from "./data.js";
const followedContainer = document.getElementById("followed-container")
const reactionContainer = document.getElementById("reaction-container")

renderPostData()


function renderPostData (){
    let html = ""
    for (let post of posts){

    html += `
        <img src="${post.avatar}" alt="followed-profile-img" class="followed-img">
        <div class="followed-info">    
            <p class="followed-name" id ="followed-name">${post.name}</p>
            <p class="followed-location" id="followed-location">${post.location}</p>
        </div>
        <img src="${post.post}" alt="followed-shared-img" class="post-img">
        <img src="images/icon-heart.png" alt="icon-heart" class="icon">
                <img src="images/icon-comment.png" alt="icon-comment" class="icon">
                <img src="images/icon-dm.png" alt="ico-dm" class="icon">
                <p class="num-of-likes" id="num-of-likes">${post.likes} likes</p>
                <p class="username" id="username">${post.username} <span class="comment" id="comment">${post.comment}</span></p>
        `
    }
    followedContainer.innerHTML = html
    
}



