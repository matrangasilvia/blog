var posts = [];


$(document).ready(function () {

    var users = [
        'mario', 'giulio', 'alberto', 'claudia'
    ]

    $(".send-comment").click(function () {
        var commentText = $(".comment-text").val();

        var commentContainer = $(".comments-container");
        var commentRow = '<li class="list-group-item"><a href="#" class="badge badge-light">' + users[Math.round(Math.random(0, 3))
        ] + '</a>' + commentText + '</li>';

        commentContainer.append(commentRow);

    });
	  for(var i = 0; i< posts.length; i++){
        var post = posts[i];
        if(post.public === true){
            createUIPost(post);
			else(post.public == false) post.modal("hide");
        }
    }
	$("#savePostBtn").click(addPost);
	});
	function createUIPost(post){
    var postContainer = $("#postContainer").clone();
    postContainer.css("display","block");
    postContainer.attr("id","");
    postContainer.addClass("class","postContainer");
		
    var postHeader = postContainer.find(".card-header");
    var postBody = postContainer.find(".card-text");

    postHeader.html(post.title);
    postBody.html(post.body);
    $("#postsRow").append(postContainer);

}
function closeModal(){
    $("#newPostModal").modal("hide");
}

function resetModal(){
    $("#postTitle").val("");
    $("#postBody").val("");

}
function addPost() {
    var title = $("#postTitle").val();
    var body = $("#postBody").val();
	 var public = $("publicCheck").val();
    var featured = $("featuredCheck").val();
	resetModal();
	var post = new Post(title,body,public,featured);
    createUIPost(post);

	
	
}
