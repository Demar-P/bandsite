let comments = []
//creating axios get to update array 


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
    let date = new Date(comment.timestamp)
    dateElement.textContent = date;
    
    let currentDate = new Date(comment.timestamp);
    console.log(currentDate);
    let formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    dateElement.textContent = formattedDate;

    const nameDateWrapper = document.createElement('div');
    nameDateWrapper.classList.add('comment__name-date-wrapper');
    nameDateWrapper.appendChild(nameElement);
    nameDateWrapper.appendChild(dateElement);

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
    
    
    // console.log("this is the reversed arr",reversedComments)
    for (const comment of reversedComments) {
        const commentElement = createCommentElement(comment);
        commentContainer.appendChild(commentElement);
    }
}


//posting comment data to api

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("submit button was clicked")
    
    const name = commentForm.name.value;
    const comment = commentForm.comment.value;
    const currentDate = new Date();
    const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;


    
    const newComment = {
        name: name,
        comment: comment,
    };
    console.log("this is the new comment" ,newComment)


    axios.post('https://project-1-api.herokuapp.com/comments?api_key=e5c0f0c1-2a94-4c3f-8166-06280b36bfb6', newComment)
        .then(results => {
        console.log("this is the rsult from post:",results.data);
        // comments = results.data
        // console.log(comments)    
        displayComment();
        })    
    
    comments.unshift(newComment);

    
    commentForm.name.value = '';
    commentForm.comment.value = '';


    displayComment()
});


displayComment();


axios.get('https://project-1-api.herokuapp.com/comments?api_key=e5c0f0c1-2a94-4c3f-8166-06280b36bfb6')
    .then(results => {
    // console.log ("this is the data from axios" ,results.data);
    comments = results.data
    
    // console.log("this is comments after the request",comments)
    displayComment()
})


