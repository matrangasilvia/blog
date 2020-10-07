var posts = [];


var postContainer;
var modal;
var addPostBtn;


function createUIPost(post){
    var postContainer = $("#postContainer").clone();
    postContainer.css("display","block");
    postContainer.attr("id","");
    postContainer.addClass("class","postContainer");

    var postHeader = postContainer.find(".card-header");
    var postBody = postContainer.find(".card-text");
	var postComment=postContainer.find(".comment-text");
	var postTag=postContainer.find("#card-tag");
	

    postHeader.html(post.title);
    postBody.html(post.body);
	postTag.html(post.tag);
	

	
	
	
	
    $("#postsRow").append(postContainer);

}

function addPost(){
 var title = $("#postTitle").val();
    var body = $("#postBody").val();
	 var public = $("publicCheck").val();
    var featured = $("featuredCheck").val();
	var etichetta=$("#postTag").val();
	resetModal();
	var post = new Post(title,body,public,featured,etichetta);
    createUIPost(post);
}

function closeModal(){
 $("#newPostModal").modal("hide");
}

function openModal(){

$("#newPostModal").modal("display");
}

function resetModal(){
     $("#postTitle").val("");
    $("#postBody").val("");

}