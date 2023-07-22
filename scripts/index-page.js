let comments = [
    // {
    //     name: "Connor Walton",
    //     comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    //     date: "02/17/2021",
    // },
    // {
    //     name: "Emilie Beach",
    //     comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    //     date: "01/09/2021",
    // },
    // {
    //     name: "Miles Acosta",
    //     comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    //     date: "12/20/2020",
    // },
]
//creating axios get to update array 

axios.get('https://project-1-api.herokuapp.com/comments?api_key=e5c0f0c1-2a94-4c3f-8166-06280b36bfb6')
    .then(results => {
    console.log (results.data);
    results = comments
})

const commentContainer = document.querySelector('.comment-container');
const commentForm = document.querySelector('.comment-new__form');

function createCommentElement(comment) {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.classList.add('comment--newest');

    const avatarElement = document.createElement('div');
    avatarElement.classList.add('comment__avatar');

    const contentElement = document.createElement('div');
    contentElement.classList.add('comment__content');

    const nameElement = document.createElement('p');
    nameElement.classList.add('comment__name');
    nameElement.textContent = comment.name;

    const dateElement = document.createElement('p');
    dateElement.classList.add('comment__date');
    dateElement.textContent = comment.date;

    const textElement = document.createElement('p');
    textElement.classList.add('comment__text');
    textElement.textContent = comment.comment;

    contentElement.appendChild(nameElement);
    contentElement.appendChild(dateElement);
    contentElement.appendChild(textElement);

    commentElement.appendChild(avatarElement);
    commentElement.appendChild(contentElement);

    return commentElement;
}

function displayComment() {
    commentContainer.innerHTML = '';

    
    const reversedComments = comments.slice().reverse();

    for (const comment of reversedComments) {
        const commentElement = createCommentElement(comment);
        commentContainer.appendChild(commentElement);
    }
}


//posting comment data to api

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const name = commentForm.name.value;
    const comment = commentForm.comment.value;
    const currentDate = new Date();
    const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

    
    const newComment = {
        name: name,
        comment: comment,
        date: formattedDate
    };

    
    comments.unshift(newComment);

    
    commentForm.name.value = '';
    commentForm.comment.value = '';


    displayComment()
});


displayComment();


