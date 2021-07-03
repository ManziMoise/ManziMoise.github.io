const showOnDom = (users) => {
    const ul = document.getElementsByTagName("ul")[0]
    users.forEach(user => {
        ul.innerHTML += `<li>
                            <span class="name">${user.name}</span>
                            <span class="email">${user.email}</span>
                            <button class="getbtn" data-target=${user.id}>Get posts</button>
                        </li>`
    })
}

window.addEventListener('load', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showOnDom(data))
})

const loadPostsOf = (posts) => {
    const ul = document.querySelector("#container")
    ul.innerHTML = "";
    const btn = document.createElement("button");
   
    btn.textContent = "Back";
    btn.setAttribute("class", "btn");
        ul.addEventListener('click', (e) => {
        console.log('click');
        if(e.target.className == "btn") {
        location.reload();
        }
    })
    
    
    posts.forEach(post => {
        ul.innerHTML += `<li>
                            <span class="title">${post.title}</span>
                            <span class="body">${post.body}</span>
                        </li>`
    })

    ul.appendChild(btn);
}

document.getElementsByTagName("ul")[0].addEventListener('click', e => {
    e.preventDefault();
    const userId = e.target.dataset.target;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(result => result.json())
    .then(posts => loadPostsOf(posts));
})



