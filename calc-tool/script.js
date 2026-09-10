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
const toGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
};
const gradeCount =(list)=>{
    const result = {A:0,B:0,C:0,D:0,F:0};
    list.forEach(s => { result[toGrade(s.score)]++; });
    return result;
};
const report = (list) => {
    const valid = cleanScores(list);
    if (valid.length === 0) {
        return '没有有效成绩';
    }
    const dist = gradeCount(valid);
    return `有效科目数${valid.length}，平均${average(valid)}分，最高${highest(valid).score}分（${highest(valid).name}）；
    等级分布：A${dist.A}个 B${dist.B}个 C${dist.C}个 D${dist.D}个 F${dist.F}个；
    不及格名单：${failed(valid).join('、') || '无'}`;
};
try {
    console.log(report(scores));
} catch (error) {
    console.error('报告生成错误:', err.message);
}       
console.table(scores);
const big = [];
for (let i = 0; i < 100000; i++) big.push(scores[i % scores.length]);
console.time('for');
let sum1 = 0;
for (let i = 0; i < big.length; i++) sum1 += big[i].score;
console.timeEnd('for');
console.time('reduce');
let sum2 = big.reduce((a, s) => a + s.score, 0);
console.timeEnd('reduce');