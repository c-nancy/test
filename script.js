// 测试题数据
const questions = [
    {
        id: 1,
        text: "寒冬来临，部落需要推选一位在最危险的风暴中心守卫后方的人，你：",
        options: [
            { text: "默默站出来承担这份责任，哪怕这意味着孤独和痛苦", value: ["帝企鹅", "加拉帕戈斯企鹅"] },
            { text: "然而我早已看穿了一切，以静制动应对危机", value: ["夜鹭", "巴布亚企鹅"] },
            { text: "观察谁最适合，然后运用外交手段说服大家配合", value: ["阿德利企鹅", "麦哲伦企鹅"] },
            { text: "既然大家都不去，我将直接带头冲锋", value: ["帽带企鹅", "跳岩企鹅"] }
        ]
    },
    {
        id: 2,
        text: "在群体聚会上，当大家都在冰面上挤成一团歌唱喧闹时，你：",
        options: [
            { text: "找个角落休息，或者干脆躲在隐蔽的灌木丛里", value: ["黄眉企鹅", "黄眼企鹅", "小蓝企鹅"] },
            { text: "站在鹅群中心，享受大家的围绕和注视", value: ["马可罗尼企鹅", "白颊黄眉企鹅", "阿德利企鹅"] },
            { text: "只和熟悉的几个老朋友聊天，保持舒服的距离", value: ["王企鹅", "洪堡企鹅"] },
            { text: "切换到省电模式，在热闹中安静地发呆", value: ["巴布亚企鹅", "夜鹭"] }
        ]
    },
    {
        id: 3,
        text: "你发现邻居企鹅总是\"不小心\"踢走你辛辛苦苦搬来的筑巢石子，你：",
        options: [
            { text: "忍无可忍，立刻大吵一架，甚至直接动手", value: ["跳岩企鹅", "斑嘴环企鹅", "马可罗尼企鹅"] },
            { text: "默默记住，下次找机会用更有趣的方式\"拿回来\"", value: ["阿德利企鹅", "麦哲伦企鹅"] },
            { text: "画清界限，在房子周围筑起高墙，做好防范措施", value: ["王企鹅", "黄眼企鹅"] },
            { text: "算了，石子而已，再去捡一个就是了", value: ["洪堡企鹅", "冠毛企鹅"] }
        ]
    },
    {
        id: 4,
        text: "如果企鹅群体要选出一名\"游泳大赛冠军\"，你认为获胜的关键是：",
        options: [
            { text: "设定好完善的自律训练计划，没日没夜地苦练", value: ["帝企鹅", "冠毛企鹅"] },
            { text: "掌握入水的精妙时机，顶级的猎手懂得等待最佳一刻", value: ["夜鹭", "阿德利企鹅"] },
            { text: "对终点的极度渴望与不怕任何困难的胆量", value: ["帽带企鹅", "跳岩企鹅"] },
            { text: "稳定的心态和对不同海域的极强适应力", value: ["巴布亚企鹅", "加拉帕戈斯企鹅"] }
        ]
    },
    {
        id: 5,
        text: "你的好伙伴企鹅突然心情沮丧，躲在冰洞里不肯出来，你：",
        options: [
            { text: "陪它一起安静地待着，不说话也行", value: ["洪堡企鹅", "黄眉企鹅"] },
            { text: "讲笑话或提议陪它去最热闹的洋流游泳，转移注意力", value: ["白颊黄眉企鹅", "麦哲伦企鹅"] },
            { text: "劝它放平心态，毕竟天塌下来也有高个子顶着", value: ["夜鹭", "小蓝企鹅"] },
            { text: "严厉地告诉它：风暴要来了，现在没时间感性", value: ["帝企鹅", "斑嘴环企鹅"] }
        ]
    },
    {
        id: 6,
        text: "关于\"繁衍育雏\"（或者说\"长期项目\"），你：",
        options: [
            { text: "一旦开始就必须全程负责，全情投入", value: ["帝企鹅", "斯岛黄眉企鹅"] },
            { text: "追求过程的完美，即便这意味着要比其他企鹅花更多时间", value: ["王企鹅", "冠毛企鹅"] },
            { text: "随遇而安，等到环境好的时候再努力吧", value: ["加拉帕戈斯企鹅", "小蓝企鹅"] },
            { text: "既然是必须完成的任务，我会寻找最省力的合作方式", value: ["阿德利企鹅", "麦哲伦企鹅"] }
        ]
    },
    {
        id: 7,
        text: "在搬迁寻找新栖息地的路上，面对分岔路口，你：",
        options: [
            { text: "跟随大多数鹅的脚步，集体行动才安全", value: ["帝企鹅", "斯岛黄眉企鹅"] },
            { text: "走那条没有鹅走过的险峻悬崖，更有挑战性", value: ["帽带企鹅", "跳岩企鹅"] },
            { text: "不急着赶路，先仔细观察，试图分析最省力的捷径", value: ["夜鹭", "巴布亚企鹅"] },
            { text: "当然是哪里风景好、安静，我就去哪里", value: ["黄眉企鹅", "黄眼企鹅"] }
        ]
    },
    {
        id: 8,
        text: "如果你掌握了一项非常厉害的\"捕鱼技巧\"，你：",
        options: [
            { text: "选择暂时保密，作为自己的核心竞争力", value: ["王企鹅", "冠毛企鹅"] },
            { text: "公开分享给所有鹅，大家一起才不愁吃喝", value: ["夜鹭", "白颊黄眉企鹅"] },
            { text: "先教给群体里最亲近的几个成员", value: ["斯岛黄眉企鹅", "斑嘴环企鹅"] },
            { text: "用这个技巧去交换其他对自己有利的资源", value: ["阿德利企鹅", "麦哲伦企鹅"] }
        ]
    },
    {
        id: 9,
        text: "当你在深海捕食时突然遇到海豹攻击，第一反应是：",
        options: [
            { text: "极度惊慌，立刻撤回岸边暗处", value: ["小蓝企鹅", "洪堡企鹅"] },
            { text: "迅速寻找掩体，观察对方弱点再反击", value: ["加拉帕戈斯企鹅", "阿德利企鹅"] },
            { text: "勇猛迎战，让对方知道我不是好惹的", value: ["帽带企鹅", "斑嘴环企鹅", "跳岩企鹅"] },
            { text: "冷静判断距离和速度，执行最优逃生轨迹", value: ["帝企鹅", "马可罗尼企鹅"] }
        ]
    },
    {
        id: 10,
        text: "你最理想的生活状态是怎样的？",
        options: [
            { text: "在广袤的领地上拥有广泛的认可和尊重", value: ["王企鹅", "白颊黄眉企鹅"] },
            { text: "和伴侣守着自己的小巢穴，平稳度日", value: ["洪堡企鹅", "斯岛黄眉企鹅"] },
            { text: "不断迁徙，结识世界各地的新伙伴", value: ["麦哲伦企鹅", "马可罗尼企鹅"] },
            { text: "彻底的自由，没有鹅打扰我的思考与空间", value: ["黄眼企鹅", "黄眉企鹅"] }
        ]
    }
];


// 企鹅数据
const penguins = {
    "帝企鹅": {
        description: "帝企鹅（Emperor Penguin）在企鹅中体型最大，也是唯一在南极深冬繁殖的企鹅。拥有厚厚的脂肪和羽毛，极端耐寒，雄企鹅负责在极夜长达两个月的孵化，滴食不进。",
        personality: "你是：极其自律，能在极高压下保持冷静。是团队里的\"定海神针\"，默默承担最累的活，不善言辞但行动力爆表。",
        category: "皇室贵族组",
        emoji: "👑",
        imagePath: "images/EmperorPenguin.jpg",
        imageSource: "By Image ID: corp2417, NOAA Corps Collection. Photographer: Giuseppe Zibordi. Credit: Michael Van Woert, NOAA NESDIS, ORA. Public Domain."
    },
    "王企鹅": {
        description: "王企鹅（King Penguin）的育雏周期最长，可达14-16个月。雏鸟浑身棕色绒毛像奇异果。虽然没有固定巢穴，但会用嘴严密守卫脚下的一小块领地，对入侵者极具攻击性。它们喜欢在亚南极岛屿形成巨大的聚落。",
        personality: "你是：追求品质感，虽然合群但有明显的边界感。你有自己的\"领地意识\"，不喜欢别人插手自己的生活，育儿/项目周期更长，追求完美。",
        category: "皇室贵族组",
        emoji: "👑",
        imagePath: "images/KingPenguin.jpg",
        imageSource: "Photo by Hubert Neufeld on Unsplash"
    },
    "小蓝企鹅": {
        description: "小蓝企鹅（Little Blue Penguin）在企鹅中体型最小。羽毛呈深蓝色，天性胆小警觉。它们昼伏夜出，傍晚集体冲回岸边的洞穴（著名的\"企鹅归巢\"）。",
        personality: "你是：对环境极度敏感，容易焦虑。他们通常是\"夜猫子\"，在暗处才有安全感，内心戏极其丰富。",
        category: "避世隐居者",
        emoji: "🔵",
        imagePath: "images/BluePenguin.jpg",
        imageSource: "Photo by Crina-Miriam Cretu on Unsplash"
    },
    "巴布亚企鹅": {
        description: "巴布亚企鹅（Gentoo Penguin）在企鹅中是游泳最快的。头顶有明显的白色带状斑块，像白色的头戴式耳机。它们适应力强，分布最广。",
        personality: "你是：适应力极强的\"六边形战士\"。性格温和，各方面都很优秀（游泳冠军），是大家公认的靠谱伙伴。",
        category: "智谋与收藏家",
        emoji: "🏊",
        imagePath: "images/GentooPenguin.jpg",
        imageSource: "Photo by Cornelius Ventures on Unsplash"
    },
    "帽带企鹅": {
        description: "帽带企鹅（Chinstrap Penguin）在脖子下有一条细黑带，像戴着黑色头盔。它们喜欢在险峻的海岛岩石上筑巢。",
        personality: "你是：冒险家，哪里危险去哪里。性格刚烈，不惧挑战权威，是团队里战斗力最强的先锋。",
        category: "硬核行动派",
        emoji: "⚔️",
        imagePath: "images/ChinstrapPenguin.jpg",
        imageSource: "Photo by Derek Oyen on Unsplash"
    },
    "阿德利企鹅": {
        description: "阿德利企鹅（Adelie Penguin）穿着典型的\"黑白燕尾服\"，眼圈发白。它们是著名的\"石头小偷\"，会趁邻居不注意偷走筑巢的石头。",
        personality: "你是：社交达人，擅长借力（偷石头）。机灵、幽默，能用最小的代价换取最大的利益，生活充满戏剧性。",
        category: "智谋与收藏家",
        emoji: "🎭",
        imagePath: "images/AdeliePenguin.jpg",
        imageSource: "Photo by Martin Wettstein on Unsplash"
    },
    "洪堡企鹅": {
        description: "洪堡企鹅（Humboldt Penguin）生活在南美秘鲁/智利海岸。它们擅长挖掘仙人掌或粪堆里的洞穴筑巢。",
        personality: "你是：踏实生活，不爱出风头。只要得到一个小小的\"洞穴\"安身，就能过得很满足。",
        category: "乐观乐天派",
        emoji: "🏠",
        imagePath: "images/HumboldtPenguin.jpg",
        imageSource: "Photo by lilartsy on Unsplash"
    },
    "麦哲伦企鹅": {
        description: "麦哲伦企鹅（Magellanic Penguin）脖子上有两条黑色环带（洪堡只有一条）。它们喜欢挖洞，是远距离迁徙的高手。",
        personality: "你是：喜欢交流，是个远距离社交达人。热爱旅行，每到一个地方都能迅速通过\"大声歌唱\"结交新朋友。",
        category: "智谋与收藏家",
        emoji: "🌍",
        imagePath: "images/MagellanicPenguin.jpg",
        imageSource: "Photo by AGL Fotos on Unsplash"
    },
    "斑嘴环企鹅": {
        description: "斑嘴环企鹅（African Penguin）又名非洲企鹅，是唯一一种分布于非洲的企鹅。它们喜欢吃沙丁鱼和鳀鱼，叫声像驴。",
        personality: "你是：平时看起来慢吞吞，但一旦触及底线，脾气比谁都大。有点固执，但活得很真实。",
        category: "乐观乐天派",
        emoji: "🦓",
        imagePath: "images/AfricanPenguin.jpg",
        imageSource: "Photo by Nathalie SPEHNER on Unsplash"
    },
    "加拉帕戈斯企鹅": {
        description: "加拉帕戈斯企鹅（Galapago Penguin）又名加岛环企鹅，在企鹅中体型第三小，是唯一生活在赤道以北半球的企鹅。它们靠寒冷的洋流生活，白天躲在水里散热。",
        personality: "你是：在最卷、最恶劣的环境（赤道）里也能找到生存之道。懂得自我调节（泡水散热），韧性惊人。", 
        category: "乐观乐天派",
        emoji: "☀️",
        imagePath: "images/GalapagosPenguin.jpg",
        imageSource: "Photo by Darius Wiles on Unsplash"
    },
    "马可罗尼企鹅": {
        description: "马可罗尼企鹅（Macaroni Penguin）又名长眉企鹅。它们是世界上数量最多的企鹅，拥有像18世纪英国花花公子般的时尚\"发型\"。",
        personality: "你是：声音大、存在感强，喜欢热闹。可能有点吵闹且好斗，但确实是人群中最夺目的焦点。",
        category: "硬核行动派",
        emoji: "🌹",
        imagePath: "images/MacaroniPenguin.jpg",
        imageSource: "Photo by Angie Corbett-Kuiper on Unsplash"
    },
    "白颊黄眉企鹅": {
        description: "白颊黄眉企鹅（Royal Penguin）又名皇家企鹅。它们只在澳大利亚的麦夸里岛繁殖后代。与其他冠企鹅的黑脸不同，白颊黄眉企鹅拥有白色或浅灰色的脸。当它们产下不止一枚蛋的时候，通常会丢弃第一枚小的。",
        personality: "你是：活泼，喜欢群居。但又有良好的边界感，有效地避免自己与他人之间的资源冲突。",
        category: "精神超越者",
        emoji: "👑",
        imagePath: "images/RoyalPenguin.jpg",
        imageSource: "作者 Brocken Inaglory, CC BY-SA 3.0"
    },
    "冠毛企鹅": {
        description: "冠毛企鹅（Erect-crested Penguin）又名竖冠企鹅、翘眉企鹅。它们头上的冠羽能像眉毛一样竖起来。它们会在新西兰海边的岩石上筑巢，在海上度过冬天。",
        personality: "你是：神秘而美丽的隐士，深谙自然与社会发展的规律，并顺应趋势做出选择。",
        category: "精神超越者",
        emoji: "🎭",
        imagePath: "images/ErectCrestedPenguin.jpg",
        imageSource: "作者 C00ch, CC BY-SA 4.0"
    },
    "斯岛黄眉企鹅": {
        description: "斯岛黄眉企鹅（Snares Penguin）只在新西兰的Snares群岛繁殖后代。它们喙的基部有一块粉色裸露皮肤，在树荫下或者岩石边挖洞筑巢，每次产两枚卵。",
        personality: "你是：恋旧，在生活上有较强的规划性，对自己的空间有强烈的保护欲。",
        category: "精神超越者",
        emoji: "🏝️",
        imagePath: "images/SnaresPenguin.jpg",
        imageSource: "作者 Thomas Mattern, CC BY 2.5"
    },
    "黄眉企鹅": {
        description: "黄眉企鹅（Fiordland Penguin）生活在新西兰南部。它们生活在森林和温带雨林中。它们喜欢躲在树根和灌木丛里。",
        personality: "你是：喜欢自然和独处。不爱挤在闹市区，更愿意躲在\"树根下\"做自己喜欢的事。",
        category: "避世隐居者",
        emoji: "🌳",
        imagePath: "images/FiordlandPenguin.jpg",
        imageSource: "Photo by Cameron Witney on Unsplash"
    },
    "跳岩企鹅": {
        description: "跳岩企鹅（Rockhopper Penguin）也被划分为：南跳岩企鹅、北跳岩企鹅、东跳岩企鹅三个亚种。它们不走路或滑行，更习惯双脚并拢在岩石之间跳跃。",
        personality: "你是：拒绝常规，不走寻常路（不走只跳）。脾气火爆，遇到不顺心的事绝不隐忍，是个硬骨头。",
        category: "硬核行动派",
        emoji: "🦘",
        imagePath: "images/RockhopperPenguin.jpg",
        imageSource: "Photo by Thomas Denton on Unsplash"
    },
    "黄眼企鹅": {
        description: "黄眼企鹅（Yellow-eyed Penguin）在新西兰南部。它们眼睛呈淡黄色，有金黄色的头带连接到头的后方。它们从不集群！像普通的鸟一样单独筑巢，邻居之间可能一同出海，但回到栖息地后互不往来。",
        personality: "你是：极致的独立。不需要社交，不需要他人的认可。独来独往，有自己的精神花园，邻里关系极淡。",
        category: "避世隐居者",
        emoji: "👁️",
        imagePath: "images/Yellow-eyedPenguin.jpg",
        imageSource: "Photo by Martyn de Jong on Unsplash"
    },
    "夜鹭": {
        description: "夜鹭（Black-crowned Night Heron）并非生物学意义上的企鹅，因收起翅膀站立时神似企鹅而被网友戏称为\"中华田园企鹅\"。它们是一种聪明的鸟类，有自己独特的捕鱼技巧。",
        personality: "你是：自由主义者，拥有极强的\"松弛感\"，自带一种看穿一切的淡定，是企鹅界乱入的\"精神小伙\"。",
        category: "精神超越者",
        emoji: "✅",
        imagePath: "images/Heron.jpg",
        imageSource: "Photo by Pamela Heckel on Unsplash"
    }
};

// 全局变量
let currentQuestion = 0;
let answers = [];
let scores = {};

// DOM元素
const welcomeSection = document.getElementById('welcome-section');
const testSection = document.getElementById('test-section');
const resultSection = document.getElementById('result-section');
const startTestBtn = document.getElementById('start-test');
const restartTestBtn = document.getElementById('restart-test');
const prevBtn = document.getElementById('prev-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const options = document.getElementById('options');
const progress = document.getElementById('progress');
const resultName = document.getElementById('result-name');
const resultEmoji = document.getElementById('result-emoji');
const resultDescription = document.getElementById('result-description');
const personalityDescription = document.getElementById('personality-description');
const resultImage = document.getElementById('result-image');

// 初始化
function init() {
    // 绑定事件监听器
    startTestBtn.addEventListener('click', startTest);
    restartTestBtn.addEventListener('click', restartTest);
    prevBtn.addEventListener('click', goToPreviousQuestion);
}

// 开始测试
function startTest() {
    welcomeSection.classList.add('hidden');
    testSection.classList.remove('hidden');
    currentQuestion = 0;
    answers = [];
    scores = {};
    showQuestion();
}

// 重新测试
function restartTest() {
    resultSection.classList.add('hidden');
    welcomeSection.classList.remove('hidden');
}

// 显示当前问题
function showQuestion() {
    const question = questions[currentQuestion];
    questionNumber.textContent = `问题 ${currentQuestion + 1}/${questions.length}`;
    questionText.textContent = question.text;
    options.innerHTML = '';

    // 更新进度条
    progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

    // 显示选项
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionElement.dataset.index = index;

        // 如果已经回答过，显示选中状态
        if (answers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }

        // 绑定点击事件
        optionElement.addEventListener('click', () => selectOption(index));
        options.appendChild(optionElement);
    });

    // 更新导航按钮状态
    prevBtn.classList.toggle('hidden', currentQuestion === 0);
}

// 选择选项
function selectOption(index) {
    // 移除所有选项的选中状态
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });

    // 添加当前选项的选中状态
    document.querySelector(`.option[data-index="${index}"]`).classList.add('selected');

    // 保存答案
    answers[currentQuestion] = index;

    // 如果是最后一题，计算结果并显示
    if (currentQuestion === questions.length - 1) {
        calculateResult();
        showResult();
    } else {
        // 否则跳转到下一题
        currentQuestion++;
        showQuestion();
    }
}

// 上一题
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// 计算结果
function calculateResult() {
    // 初始化分数
    for (const question of questions) {
        for (const option of question.options) {
            for (const penguin of option.value) {
                if (!scores[penguin]) {
                    scores[penguin] = 0;
                }
            }
        }
    }

    // 计算分数
    for (let i = 0; i < answers.length; i++) {
        const question = questions[i];
        const selectedOption = question.options[answers[i]];
        for (const penguin of selectedOption.value) {
            scores[penguin]++;
        }
    }

    // 打印评分结果
    console.log('=== 企鹅人格测试评分结果 ===');
    console.log('用户选择的答案:', answers);
    console.log('各企鹅得分:');
    for (const [penguin, score] of Object.entries(scores)) {
        console.log(`${penguin}: ${score}分`);
    }

    // 找出得分最高的企鹅
    let maxScore = 0;
    let resultPenguin = '';
    for (const [penguin, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultPenguin = penguin;
        }
    }

    console.log(`最终结果: ${resultPenguin} (${maxScore}分)`);
    console.log('============================');

    return resultPenguin;
}

// 显示结果
function showResult() {
    const resultPenguin = calculateResult();
    const penguinData = penguins[resultPenguin];

    // 更新结果信息
    resultName.textContent = resultPenguin;
    resultEmoji.textContent = penguinData.emoji;
    resultDescription.textContent = penguinData.description;
    personalityDescription.textContent = penguinData.personality;

    // 添加企鹅图片
    resultImage.innerHTML = `<img src="${penguinData.imagePath}" alt="${resultPenguin}">`;
    
    // 添加图片来源
    resultImage.innerHTML += `<p class="image-source">${penguinData.imageSource}</p>`;

    // 切换到结果页面
    testSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
}

// 初始化应用
init();
