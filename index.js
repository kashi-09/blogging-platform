let author1 = { id: 123, name: "Kashif", bio: "abc" };
let author2 = { id: 456, name: "Haris", bio: "xyz" };
let author3 = { id: 789, name: "Khurram", bio: "rwp" };
let Posts = [{
        id: 123,
        title: "Freelancing",
        content: "Typescript and Javascript",
        author: author1,
        comments: [{ author: author1, content: "A quick brown fox jumps over the lazy dog.", timestamp: new Date() },
            { author: author2, content: "Ups and downs are part of life", timestamp: new Date() }]
    },
    {
        id: 456,
        title: "Cooking",
        content: "Kitchen & Chicken",
        author: author2,
        comments: [{ author: author3, content: "Just chill and learn typescript", timestamp: new Date() }]
    }];
function sortedPosts(Posts) {
    for (let i = 0; i < Posts.length; i++) {
        if (Posts[i].comments.length > 0) {
            console.log(`The post title " ${Posts[i].title} " got ${Posts[i].comments.length} comments`);
        }
        else {
            console.log(`This is the actual post with greater number of comments : ${Posts[i].title}`);
        }
    }
}
sortedPosts(Posts);
export {};
// console.log(`${Posts[0].comments.length} and ${Posts[1].comments.length}`);
