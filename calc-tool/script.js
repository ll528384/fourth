const scores = [
  { name: '高数', score: 92 },
  { name: '大物', score: 45 },
  { name: '模电', score: 77 },
  { name: 'C语言', score: 59 },
  { name: '思想品德', score: 88 },
  { name: '英语', score: 105 }, 
  { name: '中文写作', score: -3 }
];
const cleanScores = (list) => list.filter(s=>s.score >= 0 && s.score <= 100);
const average = (list) =>{
    if (list.length==0)return 0;
    const total = list.reduce((sum,s) => sum + s.score,0);
    return (total /list.length).toFixed(2);
};
const highest = (list)=>list.reduce((max,s)=>s.score>max.score?s:max,list[0]);
const failed = (list )=>list.filter(s=>s.score<60).map(s=>s.name);
console.log('清洗后：', cleanScores(scores));
console.log('平均分：', average(cleanScores(scores)));
console.log('最高分：', highest(cleanScores(scores)));
console.log('不及格：', failed(cleanScores(scores)));

console.table(scores)