function solution(cmd){

    const operations={
        downvote: ()=>this.downvotes++,
        upvote: ()=>this.upvotes++,
        score: () =>{
            let totalVotes=this.upvotes+this.downvotes;
            let status='';
            let score=[this.upvotes, this.downvotes, this.upvotes-this.downvotes];

            if (totalVotes>50) {
                let obs=Math.ceil(Math.max(this.upvotes, this.downvotes)*0.25);
                Math.ceil(this.upvotes*0.25);

                score[0]+=obs;
                score[1]+=obs;
            }

            if (this.upvotes/totalVotes>0.66) {
                status='hot';
            } 
            else if(this.upvotes-this.downvotes<0){
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

    return operations[cmd]();
}

let obj = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(obj, 'upvote');
solution.call(obj, 'downvote');
let score = solution.call(obj, 'score');
console.log(score ); // [127, 127, 0, 'controversial']
solution.call(obj, 'downvote');          // (executed 50 times)
score = solution.call(obj, 'score');
