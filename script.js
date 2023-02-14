const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainContainer = document.getElementById("main-container")


// console.log(posts[0].name)

function page(){

for(let i = 0; i < posts.length; i++){
    let render = posts[i]
    mainContainer.innerHTML += `
    <section>
        <div class="box">
             <img src="${render.avatar}" alt="Vincent Van Gogh avatar" class="avatar">
            <div class="">
                <h2>${render.name}</h2>
                <p>${render.location}</p>
            </div>
        </div>
    </section>
    <section>
        <div class="post">
            <img src="${render.post}" alt="image of Vincent van Gogh" class="post-img">
        </div>
    </section>
    <section>
        <div class="comment-container">
            <div>
                <img src="images/icon-heart.png" alt="heart icon"><img src="images/icon-comment.png" alt="comment icon"><img src="images/icon-dm.png" alt="dm icon">
            </div>
                <p><span>${render.likes}</span></p>
                <p><span>${render.username}</span> ${render.comment}</p>
        </div>
    </section>`
    
}

}


page()
