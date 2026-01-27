// 统计调整后的企鹅出现次数
const questions = [
    {
        id: 1,
        options: [
            { value: ["帝企鹅", "加拉帕戈斯企鹅"] },
            { value: ["夜鹭", "巴布亚企鹅"] },
            { value: ["阿德利企鹅", "麦哲伦企鹅"] },
            { value: ["帽带企鹅", "跳岩企鹅"] }
        ]
    },
    {
        id: 2,
        options: [
            { value: ["黄眉企鹅", "黄眼企鹅", "小蓝企鹅"] },
            { value: ["马可罗尼企鹅", "白颊黄眉企鹅", "阿德利企鹅"] },
            { value: ["王企鹅", "洪堡企鹅"] },
            { value: ["巴布亚企鹅", "夜鹭"] }
        ]
    },
    {
        id: 3,
        options: [
            { value: ["跳岩企鹅", "斑嘴环企鹅", "马可罗尼企鹅"] },
            { value: ["阿德利企鹅", "麦哲伦企鹅"] },
            { value: ["王企鹅", "黄眼企鹅"] },
            { value: ["洪堡企鹅", "冠毛企鹅"] }
        ]
    },
    {
        id: 4,
        options: [
            { value: ["帝企鹅", "冠毛企鹅"] },
            { value: ["夜鹭", "阿德利企鹅"] },
            { value: ["帽带企鹅", "跳岩企鹅"] },
            { value: ["巴布亚企鹅", "加拉帕戈斯企鹅"] }
        ]
    },
    {
        id: 5,
        options: [
            { value: ["洪堡企鹅", "黄眉企鹅"] },
            { value: ["白颊黄眉企鹅", "麦哲伦企鹅"] },
            { value: ["夜鹭", "小蓝企鹅"] },
            { value: ["帝企鹅", "斑嘴环企鹅"] }
        ]
    },
    {
        id: 6,
        options: [
            { value: ["帝企鹅", "斯岛黄眉企鹅"] },
            { value: ["王企鹅", "冠毛企鹅"] },
            { value: ["加拉帕戈斯企鹅", "小蓝企鹅"] },
            { value: ["阿德利企鹅", "麦哲伦企鹅"] }
        ]
    },
    {
        id: 7,
        options: [
            { value: ["帝企鹅", "斯岛黄眉企鹅"] },
            { value: ["帽带企鹅", "跳岩企鹅"] },
            { value: ["夜鹭", "巴布亚企鹅"] },
            { value: ["黄眉企鹅", "黄眼企鹅"] }
        ]
    },
    {
        id: 8,
        options: [
            { value: ["王企鹅", "冠毛企鹅"] },
            { value: ["夜鹭", "白颊黄眉企鹅"] },
            { value: ["斯岛黄眉企鹅", "斑嘴环企鹅"] },
            { value: ["阿德利企鹅", "麦哲伦企鹅"] }
        ]
    },
    {
        id: 9,
        options: [
            { value: ["小蓝企鹅", "洪堡企鹅"] },
            { value: ["加拉帕戈斯企鹅", "阿德利企鹅"] },
            { value: ["帽带企鹅", "斑嘴环企鹅", "跳岩企鹅"] },
            { value: ["帝企鹅", "马可罗尼企鹅"] }
        ]
    },
    {
        id: 10,
        options: [
            { value: ["王企鹅", "白颊黄眉企鹅"] },
            { value: ["洪堡企鹅", "斯岛黄眉企鹅"] },
            { value: ["麦哲伦企鹅", "马可罗尼企鹅"] },
            { value: ["黄眼企鹅", "黄眉企鹅"] }
        ]
    }
];

// 统计出现次数
const count = {};
questions.forEach(q => {
    q.options.forEach(opt => {
        opt.value.forEach(peng => {
            count[peng] = (count[peng] || 0) + 1;
        });
    });
});

// 输出结果
console.log('调整后的企鹅出现次数统计:');
Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .forEach(([peng, cnt]) => {
        console.log(`${peng}: ${cnt}次`);
    });

console.log('\n统计信息:');
console.log('总企鹅种类数:', Object.keys(count).length);
console.log('总出现次数:', Object.values(count).reduce((a, b) => a + b, 0));
console.log('平均出现次数:', (Object.values(count).reduce((a, b) => a + b, 0) / Object.keys(count).length).toFixed(2));

// 计算方差，评估分布均匀性
const mean = Object.values(count).reduce((a, b) => a + b, 0) / Object.keys(count).length;
const variance = Object.values(count).reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / Object.keys(count).length;
console.log('\n分布均匀性:');
console.log('方差:', variance.toFixed(2));
console.log('标准差:', Math.sqrt(variance).toFixed(2));
