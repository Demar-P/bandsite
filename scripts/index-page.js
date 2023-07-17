let comments = [
    {
        name:"Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "02/17/2021",
    },
    {
        name:"Emilie Beach",
        comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "01/09/2021",
    },
    {
        name:"Miles Acosta",
        comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "12/20/2020",
    },
]

const commentEl = document.querySelector(".comment-container");

    const displayComment = (comment) => {
    let commentArticle = document.createElement("article");
    commentArticle.classList.add("comments__article");
    commentEl.appendChild(commentArticle);

    let pName = document.createElement("p");
    pName.classList.add("comments__name");
    pName.innerText = comment.name;
    commentArticle.appendChild(pName);

    let pDate = document.createElement("p");
    pDate.classList.add("comments__date");
    pDate.innerText = comment.date;
    commentArticle.appendChild(pDate);

    let pDescription = document.createElement("p");
    pDescription.classList.add("comments__description");
    pDescription.innerText = comment.comment; // Updated property name to 'comment'
    commentArticle.appendChild(pDescription);
    };

    comments.forEach((comment) => {
    displayComment(comment);
    });


// function updatecomment(comment){
//     let commentdivEL = document.createElement('div')
//     commentdiv.classList.add('commentdiv')
//     commentSection.appendChild(commentdivEL)
//     return commentdiv

//     let name =document.createElement('p')
//     name.classList.add('name')
//     name.innerText = comments.name
//     return commentdiv


// }

    // function createCommentsection(

    // )


// function displayComment(comment) {
//     const commentsContainer = document.querySelector('#comments-container');
    
//     const commentContainer = document.createElement('div');
//     commentContainer.className = 'comment';

//     const nameElement = document.createElement('h3');
//     nameElement.textContent = comment.name;
//     commentContainer.appendChild(nameElement);

//     const commentElement = document.createElement('p');
//     commentElement.textContent = comment.comment;
//     commentContainer.appendChild(commentElement);

//     commentsContainer.appendChild(commentContainer);
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     const nameInput = document.getElementById('name-input');
//     const commentInput = document.getElementById('comment-input');
//     const name = nameInput.value;
//     const comment = commentInput.value;
//     const newComment = new Comment(name, comment);
//     commentsArray.push(newComment);
//     const commentsContainer = document.getElementById('comments-container');
//     commentsContainer.innerHTML = '';
//     commentsArray.forEach(comment => {
//     displayComment(comment);
//     });
//     nameInput.value = '';
//     commentInput.value = '';

// }

// const commentForm = document.getElementById('comment-form');
// commentForm.addEventListener('submit', handleSubmit);