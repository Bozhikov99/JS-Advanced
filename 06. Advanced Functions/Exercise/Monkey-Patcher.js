function solution(cmd){

    const operations={
        downvote: (post)=>post.downvotes++,
        upvote: (post)=>post.upvotes++,
        score: (post) =>{
            let totalVotes=post.upvotes+post.downvotes;
            let status='';
            let score=[post.upvotes, post.downvotes, post.upvotes-post.downvotes];

            if (totalVotes>50) {
                let obs=Math.ceil(Math.max(post.upvotes, post.downvotes)*0.25);
                Math.ceil(post.upvotes*0.25);

                score[0]=+obs;
                score[1]=+obs;
            }

            if (post.upvotes/totalVotes>0.66) {
                status='hot';
            } 
            else if(post.upvotes-post.downvotes<0){
                status='unpopular';
            }
            else if(totalVotes>100){
                status='controversial';
            } 
            
            if (totalVotes<10||status=='') {
                status='new';
            }

            score.push(status);

            return score;
        }
    }

    return operations[cmd](post);
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score ); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');          // (executed 50 times)
score = solution.call(post, 'score');
