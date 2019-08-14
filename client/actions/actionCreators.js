//Add increments

export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

//Add Comments

export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}
//Remove Comments

export function removeComment(postId, i) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    i
  };
}
