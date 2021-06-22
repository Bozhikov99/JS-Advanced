function solution() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}
Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)

            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {

            let comments = this.comments.length == 0 ? '' : `\nComments:\n${this.comments.map(x => ` * ${x}`).join('\n')}`;
            let output = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}${comments}`;

            return output;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content)

            this.views=views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return `Post: ${this.title}
Content: ${this.content}
Views: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
