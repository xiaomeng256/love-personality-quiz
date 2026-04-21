// 24种恋爱人格定义
const personalities = {
  "rush": {
    name: "为爱冲锋的敢死队长",
    emoji: "⚔️",
    subtitle: "恋爱脑",
    color: ["#FF6B6B", "#EE5A24"],
    desc: "你的恋爱哲学四个字：不要命了。一旦爱上，朋友是什么？工作是什么？统统让路。你不是在谈恋爱，你是在用生命诠释'飞蛾扑火'。对象发条朋友圈你能分析八百种含义，秒回是基操，已读不回是人间惨剧。朋友们已经习惯了你恋爱后人间蒸发、分手后满血复活的循环。",
    pros: "你的爱浓度堪比意式浓缩，让对方感受到被全宇宙中心对待的幸福。",
    cons: "容易把自己爱没了，分手痛苦程度约等于世界末日。朋友OS：又来了。",
    match: "爱情里的清醒麻瓜", clash: "感情界的合租室友"
  },
  "roommate": {
    name: "感情界的合租室友",
    emoji: "🏠",
    subtitle: "搭子型",
    color: ["#74b9ff", "#0984e3"],
    desc: "你的恋爱模式：可以一起吃饭看电影逛街，但请不要动我周末睡懒觉的权利。你把恋爱经营得像优质合租协议——各自有空间，公共区域保持友好，偶尔一起叫外卖就是最大浪漫。你的对象可能至今都在怀疑你们到底是不是在谈恋爱。",
    pros: "和你在一起零压力，对方拥有充分自由，堪称恋爱界人权标杆。",
    cons: "对方可能怀疑自己在跟AI谈恋爱——有回应但没温度。",
    match: "爱情随缘大师", clash: "已读不回会报警的人"
  },
  "sober": {
    name: "爱情里的清醒麻瓜",
    emoji: "🧊",
    subtitle: "独立清醒型",
    color: ["#a29bfe", "#6c5ce7"],
    desc: "别人在恋爱里迷失自我时，你在健身房撸铁。别人为对象放弃梦想时，你在升职加薪。你是恋爱界的巴菲特——理性投资，绝不all in。你爱对方，但更爱优秀的自己。座右铭：我可以为你哭，但哭完还是要去上班的。",
    pros: "情绪稳定得像人形充电宝，是所有恋爱脑的最佳解药和定海神针。",
    cons: "理性过头时，对方想要拥抱，你给的是一份关系分析报告。",
    match: "为爱冲锋的敢死队长", clash: "查岗界的福尔摩斯"
  },
  "slowcook": {
    name: "感情慢炖的老火汤",
    emoji: "🍲",
    subtitle: "养系型",
    color: ["#fdcb6e", "#e17055"],
    desc: "你谈恋爱的速度比蜗牛还稳。别人三天确认关系，你三个月还在'我们先做朋友吧'。你坚信好感情像老火汤，急不得。问题是你熬着熬着，人家已经跟别人喝完汤结完婚了。你不是不着急，你是把'稳重'刻进了DNA。",
    pros: "一旦在一起，感情基础比钢筋混凝土还结实，稳得一批。",
    cons: "你的暗恋对象可能到退休都不知道你喜欢TA。错过率：极高。",
    match: "爱情世界的新手村村民", clash: "多巴胺收割机"
  },
  "hunter": {
    name: "多巴胺收割机",
    emoji: "🎯",
    subtitle: "心动猎手型",
    color: ["#fd79a8", "#e84393"],
    desc: "你活在心动的瞬间——对视触电、暧昧期小鹿乱撞让你上瘾。但关系一稳定，兴奋感消退，你就觉得索然无味了。你不是花心，你只是对多巴胺上瘾。你的感情史就像一部连续剧，每季换主角，但收视率一直很高。",
    pros: "极具魅力，擅长制造浪漫氛围，恋爱初期体验感拉满到溢出。",
    cons: "长期关系对你来说像一场马拉松，而你只擅长百米冲刺。",
    match: "行走的偶像剧编剧", clash: "感情慢炖的老火汤"
  },
  "alarm": {
    name: "已读不回会报警的人",
    emoji: "🚨",
    subtitle: "安全感依赖型",
    color: ["#ff7675", "#d63031"],
    desc: "你的脑子里住着一个24小时运转的安全感监控系统。对方两小时没回消息？一定是不爱了。回了但只有两个字？一定是敷衍。你不是不信任对方，你只是把'患得患失'发挥到了奥运冠军水平。你的手机电量永远充足，因为你随时准备查看消息。",
    pros: "重视感情，对方能感受到被需要的价值感，你的爱热烈且持续在线。",
    cons: "过度索取安全感会让对方窒息，你的焦虑能传染整个朋友圈。",
    match: "恋爱中的全能保姆", clash: "感情里的消失术大师"
  },
  "buddha": {
    name: "爱情随缘大师",
    emoji: "🧘",
    subtitle: "佛系躺平型",
    color: ["#55efc4", "#00b894"],
    desc: "有人喜欢你？哦，挺好。没人喜欢你？也行。你对恋爱的态度就像对外卖——有就吃，没有也不会饿死。朋友催你谈恋爱，你微微一笑：急什么，缘分到了自然来。然后继续刷手机。你是恋爱市场上最佛系的存在，连丘比特都拿你没办法。",
    pros: "心态平和，不会因为感情焦虑内耗，自己过得舒服得像退休老干部。",
    cons: "对方可能觉得跟你谈恋爱像在跟空气互动，关系容易不了了之。",
    match: "感情界的合租室友", clash: "为爱冲锋的敢死队长"
  },
  "money": {
    name: "搞钱才是真爱",
    emoji: "💰",
    subtitle: "事业优先型",
    color: ["#ffeaa7", "#fdcb6e"],
    desc: "你的人生优先级：事业 > 搞钱 > 自我提升 > 吃饭 > 睡觉 > 恋爱。不是不想谈，是真没时间。你的日程表比CEO还满，约会得提前一周预约。你坚信：先把自己变成梧桐树，凤凰自然来。至于凤凰什么时候来……再说吧，先把这个项目做完。",
    pros: "上进有目标，经济独立有魅力，是丈母娘最喜欢的那种类型。",
    cons: "对方在你心里的排位大概在'周报'和'健身'之间，缺乏陪伴感。",
    match: "爱情里的清醒麻瓜", clash: "为爱冲锋的敢死队长"
  },
  "tsundere": {
    name: "口嫌体正直本直",
    emoji: "😤",
    subtitle: "嘴硬心软型",
    color: ["#fab1a0", "#e17055"],
    desc: "嘴上说着'谁稀罕你'，转头就偷偷给对方点了外卖。你表达爱的方式就是怼，毒舌是你的保护色，傲娇是你的必杀技。对方说想你了，你回'有病吧'，然后偷偷笑了一整天。你的恋爱日常就是一部大型真香现场纪录片。",
    pros: "相处有趣不油腻，反差感让人上瘾，真心藏在毒舌里更显珍贵。",
    cons: "对方可能真以为你不在乎，你的爱需要配一本解密手册才能读懂。",
    match: "脑补了一整部韩剧", clash: "已读不回会报警的人"
  },
  "daydream": {
    name: "脑补了一整部韩剧",
    emoji: "🌸",
    subtitle: "恋爱幻想家",
    color: ["#dfe6e9", "#b2bec3"],
    desc: "还没开始谈恋爱，你已经在脑子里演完了从偶遇到婚礼的全部剧情，连BGM都选好了。你对爱情有一套完美想象，现实中的人总差那么一点点——毕竟现实里没有慢镜头和滤镜。你的脑内小剧场比Netflix还精彩，就是迟迟不上映。",
    pros: "对爱情充满期待，内心世界丰富得能出版一套言情小说全集。",
    cons: "理想和现实的落差能让你从云端摔到地下室，总觉得对方不够完美。",
    match: "口嫌体正直本直", clash: "爱情随缘大师"
  },
  "drama": {
    name: "行走的偶像剧编剧",
    emoji: "🎬",
    subtitle: "极致浪漫型",
    color: ["#ff9ff3", "#f368e0"],
    desc: "你觉得恋爱没有仪式感就像火锅没有蘸料——能吃但没灵魂。纪念日必须过、惊喜必须有、情话必须说。下雨天要一起淋雨，看日落要十指相扣。你的对象不是在谈恋爱，是在参演一部你执导的偶像剧，而且没有片酬。",
    pros: "擅长制造浪漫回忆，感情保鲜能力一流，让对方觉得每天都是情人节。",
    cons: "维持高浓度浪漫很累，对方不配合时你的失落感能写一首悲伤情歌。",
    match: "多巴胺收割机", clash: "搞钱才是真爱"
  },
  "silent": {
    name: "沉默是金的冠军选手",
    emoji: "🤐",
    subtitle: "冷暴力大师",
    color: ["#636e72", "#2d3436"],
    desc: "吵架了？不说话。生气了？不说话。委屈了？还是不说话。你处理冲突的方式就是化身人形冰箱，用沉默把对方冻到怀疑人生。你觉得冷静一下比吵出结果重要，但对方觉得跟你吵架像在跟一堵墙对话——至少墙还能回个回声。",
    pros: "不会在情绪上头时口不择言，给双方留了冷静的余地。",
    cons: "沉默不是金，是定时炸弹。问题不解决只会越积越多，直到某天集体爆炸。",
    match: "恋爱中的便利贴人", clash: "已读不回会报警的人"
  },
  "vanish": {
    name: "感情里的消失术大师",
    emoji: "👻",
    subtitle: "回避型",
    color: ["#81ecec", "#00cec9"],
    desc: "关系一亲密你就想跑，不是不喜欢，是太近了让你浑身不自在。你需要大量独处时间充电，对方靠太近时你的本能反应是：后退后退再后退。你在感情里就像一只猫——想撸的时候过来蹭蹭，不想理人的时候谁都别碰我。",
    pros: "独立自主，不会给对方造成负担，精神世界丰富得像个小型图书馆。",
    cons: "对方觉得你忽冷忽热像天气预报，永远猜不到明天是晴是雨。",
    match: "感情界的合租室友", clash: "已读不回会报警的人"
  },
  "pleaser": {
    name: "恋爱中的便利贴人",
    emoji: "📝",
    subtitle: "讨好型",
    color: ["#ffeaa7", "#f9ca24"],
    desc: "你在恋爱中的口头禅：都行、可以、听你的、没关系。你把对方的需求排在自己前面，害怕冲突害怕对方不开心，觉得只要自己多付出一点关系就能更好。你不是没有脾气，你是把脾气都吞进了肚子里，攒着攒着，某天可能会来一次大型火山喷发。",
    pros: "体贴入微善解人意，和你在一起舒服得像穿了一双老棉鞋。",
    cons: "长期压抑自己迟早爆发，到时候对方会震惊：这还是我认识的那个人吗？",
    match: "沉默是金的冠军选手", clash: "查岗界的福尔摩斯"
  },
  "detective": {
    name: "查岗界的福尔摩斯",
    emoji: "🔍",
    subtitle: "占有欲强型",
    color: ["#dfe6e9", "#636e72"],
    desc: "对方和异性多说两句话，你就开始分析对话截图、研究点赞记录、追踪定位信息。你的侦查能力让FBI都自愧不如。你的占有欲不是控制，是太在乎了——但在对方看来，你的爱有时候像一张密不透风的网，温暖但也让人喘不过气。",
    pros: "专一忠诚，对感情认真负责，在你心里对方就是唯一的VIP。",
    cons: "过度侦查会让对方觉得自己住在楚门的世界里，窒息感拉满。",
    match: "为爱冲锋的敢死队长", clash: "爱情里的清醒麻瓜"
  },
  "purist": {
    name: "灵魂伴侣原教旨主义者",
    emoji: "✨",
    subtitle: "精神洁癖型",
    color: ["#c7ecee", "#22a6b3"],
    desc: "你要的不只是恋人，是灵魂伴侣。三观一致、精神共鸣、深度对话是你的恋爱刚需。肤浅的吸引力在你这里保质期比鲜奶还短。你的择偶标准不是一张清单，是一篇论文。能跟你聊到凌晨三点不困的人，才有资格进入你的心。",
    pros: "追求深层连接，一旦找到对的人，关系质量高到让旁人嫉妒。",
    cons: "标准高到连你自己都觉得离谱，现实中完美灵魂伴侣比中彩票还难。",
    match: "不将就宁可单身到底", clash: "永远停在暧昧期的钉子户"
  },
  "gym": {
    name: "每段感情都是成长课",
    emoji: "📚",
    subtitle: "恋爱健身型",
    color: ["#55efc4", "#00b894"],
    desc: "你把每段恋爱都当成自我提升的课程。分手了？写复盘笔记。吵架了？反思沟通方式。你的备忘录里可能有一个文件夹叫'恋爱经验总结'。你在感情中不断进化，每一任都比上一任处理得更好。你不是在谈恋爱，你是在读恋爱MBA。",
    pros: "成熟理性，恋爱能力越来越强，是那种越老越值钱的类型。",
    cons: "有时过于分析感情，对方觉得跟你谈恋爱像在做课题研究答辩。",
    match: "爱情里的清醒麻瓜", clash: "分手复合循环播放器"
  },
  "cliff": {
    name: "说走就走的旅行家",
    emoji: "🪂",
    subtitle: "断崖式分手型",
    color: ["#fd79a8", "#e84393"],
    desc: "你的感情有个隐形阈值，平时看着风平浪静，一旦失望积累到临界点，你会毫无征兆地彻底消失。没有挽回余地，没有拖泥带水，说断就断。对方还在想'昨天不是还好好的吗'，你已经把TA的联系方式删得干干净净了。你的分手速度比翻脸还快。",
    pros: "果断决绝，止损能力一流，绝不在烂感情里浪费一秒钟。",
    cons: "对方完全没有心理准备，你也可能因为冲动错过值得挽回的人。",
    match: "感情慢炖的老火汤", clash: "分手复合循环播放器"
  },
  "loop": {
    name: "分手复合循环播放器",
    emoji: "🔄",
    subtitle: "反复横跳型",
    color: ["#a29bfe", "#6c5ce7"],
    desc: "分手时觉得解脱了，过两天又开始想念。你和前任的关系就像一首单曲循环的歌，分分合合已经是常态。朋友们听到你说'我们又在一起了'时的表情，已经从震惊变成了面无表情。你不是优柔寡断，你是把'藕断丝连'发挥到了极致。",
    pros: "重感情不轻易放弃，愿意给彼此机会，至少说明你是个长情的人。",
    cons: "反复消耗双方精力，问题不解决永远在原地打转，朋友已经不想劝了。",
    match: "恋爱中的便利贴人", clash: "说走就走的旅行家"
  },
  "flirt": {
    name: "永远停在暧昧期的钉子户",
    emoji: "🦋",
    subtitle: "暧昧成瘾型",
    color: ["#ff9ff3", "#f368e0"],
    desc: "你最享受暧昧期那种若即若离的感觉——确认关系？那多没意思。你喜欢'好像喜欢又好像没有'的微妙氛围，享受被追的快感但永远不给明确答案。你是暧昧界的钉子户，感情的门槛上坐了十年都不肯进去。",
    pros: "社交魅力十足，擅长营造暧昧氛围，让人欲罢不能想入非非。",
    cons: "真正想定下来的人会被你劝退，你的暧昧对象列表比通讯录还长。",
    match: "多巴胺收割机", clash: "灵魂伴侣原教旨主义者"
  },
  "show": {
    name: "朋友圈秀恩爱课代表",
    emoji: "📱",
    subtitle: "社交展示型",
    color: ["#fab1a0", "#e17055"],
    desc: "恋爱不发朋友圈等于没谈。纪念日九宫格、日常甜蜜互动、情侣装打卡——你的朋友圈就是一部大型恋爱真人秀。你觉得爱就要让全世界知道，对方的朋友圈如果没有你，那等于公开处刑。你的恋爱不只是两个人的事，是全体微信好友的集体围观项目。",
    pros: "让对方感受到被公开认可的安全感，仪式感满满，甜度超标。",
    cons: "过度展示可能让对方社死，也容易招来柠檬精和不必要的比较。",
    match: "行走的偶像剧编剧", clash: "感情里的消失术大师"
  },
  "parent": {
    name: "恋爱中的全能保姆",
    emoji: "🧸",
    subtitle: "母爱/父爱泛滥型",
    color: ["#ffeaa7", "#fdcb6e"],
    desc: "你在恋爱中自动切换成照顾模式：吃了吗？多喝热水、早点睡、别熬夜、出门带伞。你把对方当成需要被照顾的宝宝，事无巨细都想操心。你不是在谈恋爱，你是在当免费的全职保姆外加私人营养师加心理咨询师。对方打个喷嚏你能紧张到查遍百度。",
    pros: "无微不至的关怀让对方暖到心坎里，是最靠谱最有安全感的伴侣。",
    cons: "过度照顾会让对方觉得自己是个巨婴，你也容易把自己累成一条咸鱼。",
    match: "已读不回会报警的人", clash: "爱情里的清醒麻瓜"
  },
  "newbie": {
    name: "爱情世界的新手村村民",
    emoji: "🐣",
    subtitle: "恋爱小白型",
    color: ["#81ecec", "#00cec9"],
    desc: "你对恋爱充满好奇但手足无措。不知道怎么表白、约会去哪、吵架了怎么办——一切都在摸索中。你的恋爱技能树还是一片空白，但你的真诚和笨拙反而很可爱。你可能会在约会时紧张到说不出话，但你偷偷准备的小礼物比任何套路都动人。",
    pros: "真诚纯粹零套路，每一份心意都发自内心，是这个套路横行时代的一股清流。",
    cons: "缺乏经验容易踩雷，可能会在不该沉默时沉默，该表白时怂了。",
    match: "感情慢炖的老火汤", clash: "永远停在暧昧期的钉子户"
  },
  "ideal": {
    name: "不将就宁可单身到底",
    emoji: "👑",
    subtitle: "理想主义型",
    color: ["#dfe6e9", "#b2bec3"],
    desc: "你宁缺毋滥，绝不将就。心里有个清晰的理想伴侣画像，不符合的一律pass。你相信对的人值得等待，哪怕等到地老天荒。朋友催你谈恋爱，你说：宁可高质量单身，也不要低质量恋爱。你不是眼光高，你只是知道自己值得更好的。至少你是这么安慰自己的。",
    pros: "标准清晰，一旦选择就是深思熟虑，不会随便开始也不会随便结束。",
    cons: "可能因为过于理想化而错过现实中不完美但很好的人，单身到怀疑人生。",
    match: "灵魂伴侣原教旨主义者", clash: "爱情随缘大师"
  }
};

// 60道题 - 完全平衡版：每种人格恰好10次主要得分(3分)和10次次要得分(1分)，总分40

const questions = [
  // === Round 1 (Q01-Q06) ===
  // Q01 P:rush,roommate,alarm,hunter S:loop,vanish,detective,flirt
  { q: "周五晚上对象突然说想见你，但你已经约了朋友。你会？", opts: [
    { text: "秒回'来了'，朋友那边随便编个理由取消", scores: { rush: 3, loop: 1 } },
    { text: "跟TA说改天吧，今晚有自己的安排", scores: { roommate: 3, parent: 1 } },
    { text: "纠结到胃疼，一直刷消息怕TA不高兴", scores: { alarm: 3, detective: 1 } },
    { text: "回一句'看心情'，享受TA着急的样子", scores: { hunter: 3, flirt: 1 } }
  ]},
  // Q02 P:sober,slowcook,buddha,money S:gym,ideal,roommate,purist
  { q: "朋友问你'什么时候适合谈恋爱'，你的回答是？", opts: [
    { text: "先把自己活明白了再说，别为了恋爱丢了自己", scores: { sober: 3, detective: 1 } },
    { text: "不急，慢慢来，对的人总会出现的", scores: { slowcook: 3, parent: 1 } },
    { text: "随缘吧，有就有没有也无所谓", scores: { buddha: 3, roommate: 1 } },
    { text: "等事业稳定了再考虑，现在没精力", scores: { money: 3, purist: 1 } }
  ]},
  // Q03 P:tsundere,daydream,drama,silent S:alarm,rush,show,vanish
  { q: "对象突然发消息说'我好想你'，你的第一反应？", opts: [
    { text: "回一句'有病吧'，但嘴角已经翘到天花板", scores: { tsundere: 3, detective: 1 } },
    { text: "脑子里瞬间放起了偶像剧BGM", scores: { daydream: 3, parent: 1 } },
    { text: "立刻回一大段情话，还要配上爱心表情", scores: { drama: 3, show: 1 } },
    { text: "看到了但不知道怎么回，先放着", scores: { silent: 3, roommate: 1 } }
  ]},
  // Q04 P:vanish,pleaser,detective,flirt S:buddha,parent,cliff,hunter
  { q: "对象跟异性朋友单独吃饭，你的反应？", opts: [
    { text: "不太想管，TA的社交是TA的事", scores: { vanish: 3, roommate: 1 } },
    { text: "说没关系你去吧，心里其实不太舒服", scores: { pleaser: 3, parent: 1 } },
    { text: "表面淡定，回家就翻TA的聊天记录", scores: { detective: 3, cliff: 1 } },
    { text: "无所谓，反正我也有别的朋友可以约", scores: { flirt: 3, hunter: 1 } }
  ]},
  // Q05 P:purist,newbie,gym,cliff S:daydream,slowcook,sober,silent
  { q: "有人对你表示好感，但聊了几次发现三观不太合。你会？", opts: [
    { text: "果断放弃，精神不合拍一切免谈", scores: { purist: 3, daydream: 1 } },
    { text: "有点可惜但不知道怎么拒绝，拖着", scores: { newbie: 3, slowcook: 1 } },
    { text: "反思一下是不是自己沟通方式有问题", scores: { gym: 3, money: 1 } },
    { text: "直接断了联系，不浪费彼此时间", scores: { cliff: 3, silent: 1 } }
  ]},
  // Q06 P:loop,show,parent,ideal S:rush,drama,alarm,purist
  { q: "分手后你最可能做的事是？", opts: [
    { text: "反复翻看聊天记录，忍不住想联系TA", scores: { loop: 3, detective: 1 } },
    { text: "发一条意味深长的朋友圈，让TA看到", scores: { show: 3, hunter: 1 } },
    { text: "担心TA一个人过不好，偷偷关注TA的动态", scores: { parent: 3, tsundere: 1 } },
    { text: "虽然难过但不将就，该放手就放手", scores: { ideal: 3, purist: 1 } }
  ]},
  // === Round 2 (Q07-Q12) ===
  // Q07 P:rush,hunter,drama,newbie S:daydream,flirt,show,pleaser
  { q: "你理想中的表白方式是？", opts: [
    { text: "管不了那么多了，冲上去直接说喜欢你", scores: { rush: 3, daydream: 1 } },
    { text: "制造一个完美的偶遇，让心动自然发生", scores: { hunter: 3, flirt: 1 } },
    { text: "精心策划一场浪漫的表白仪式", scores: { drama: 3, show: 1 } },
    { text: "写一封信偷偷塞给TA，然后紧张到不敢看TA", scores: { newbie: 3, pleaser: 1 } }
  ]},
  // Q08 P:alarm,buddha,sober,tsundere S:detective,flirt,money,silent
  { q: "对象给你发了一条很敷衍的回复，就一个'嗯'。你会？", opts: [
    { text: "反复看这个字，分析TA是不是在生气", scores: { alarm: 3, detective: 1 } },
    { text: "没在意，可能就是在忙吧", scores: { buddha: 3, flirt: 1 } },
    { text: "直接问TA是不是有什么事，别藏着掖着", scores: { sober: 3, money: 1 } },
    { text: "也回一个'哦'，看谁更敷衍", scores: { tsundere: 3, silent: 1 } }
  ]},
  // Q09 P:money,roommate,pleaser,cliff S:sober,buddha,rush,ideal
  { q: "对象抱怨你陪TA的时间太少了。你会？", opts: [
    { text: "我也没办法啊，最近项目太忙了", scores: { money: 3, slowcook: 1 } },
    { text: "我觉得现在的节奏挺好的，各自有空间", scores: { roommate: 3, buddha: 1 } },
    { text: "对不起，我以后尽量多陪你", scores: { pleaser: 3, show: 1 } },
    { text: "如果你觉得不够，那可能我们不太合适", scores: { cliff: 3, parent: 1 } }
  ]},
  // Q10 P:slowcook,daydream,detective,gym S:newbie,drama,alarm,money
  { q: "你暗恋一个人三个月了还没表白，最可能的原因是？", opts: [
    { text: "还在慢慢了解TA，不想太着急", scores: { slowcook: 3, newbie: 1 } },
    { text: "脑子里已经演完了从表白到结婚的全部剧情", scores: { daydream: 3, drama: 1 } },
    { text: "还在观察TA的社交圈，想确认TA是不是单身", scores: { detective: 3, tsundere: 1 } },
    { text: "在总结之前的经验，想找到最好的表白方式", scores: { gym: 3, money: 1 } }
  ]},
  // Q11 P:silent,parent,flirt,loop S:tsundere,rush,hunter,alarm
  { q: "你和对象大吵了一架，TA摔门走了。你会？", opts: [
    { text: "不追，让彼此冷静一下再说", scores: { silent: 3, tsundere: 1 } },
    { text: "先给TA发条消息问安全到家没", scores: { parent: 3, show: 1 } },
    { text: "没追，但发了个暧昧的表情包试探", scores: { flirt: 3, hunter: 1 } },
    { text: "受不了分开的感觉，马上打电话求和", scores: { loop: 3, detective: 1 } }
  ]},
  // Q12 P:vanish,show,ideal,purist S:roommate,alarm,cliff,slowcook
  { q: "有人跟你表白了，但你对TA只有好感还没到喜欢。你会？", opts: [
    { text: "有点抗拒，觉得关系变了会不自在", scores: { vanish: 3, roommate: 1 } },
    { text: "先答应试试，然后发朋友圈官宣", scores: { show: 3, tsundere: 1 } },
    { text: "拒绝，没有心动的感觉不想勉强", scores: { ideal: 3, pleaser: 1 } },
    { text: "先深入聊聊三观，看精神上合不合", scores: { purist: 3, slowcook: 1 } }
  ]},
  // === Round 3 (Q13-Q18) ===
  // Q13 P:hunter,gym,slowcook,drama S:rush,sober,ideal,daydream
  { q: "你和对象在一起两年了，感觉激情消退了。你会？", opts: [
    { text: "开始觉得索然无味，怀念刚在一起时的心动", scores: { hunter: 3, show: 1 } },
    { text: "跟对方认真聊聊，一起想办法改善", scores: { gym: 3, money: 1 } },
    { text: "觉得这很正常，平淡才是长久的", scores: { slowcook: 3, newbie: 1 } },
    { text: "策划一场浪漫约会，主动制造新鲜感", scores: { drama: 3, daydream: 1 } }
  ]},
  // Q14 P:alarm,tsundere,buddha,detective S:loop,silent,vanish,cliff
  { q: "对象说'我今天跟前任偶遇了'。你的反应？", opts: [
    { text: "心跳加速，追问了一百个细节", scores: { alarm: 3, flirt: 1 } },
    { text: "嘴上说'关我什么事'，心里已经炸了", scores: { tsundere: 3, silent: 1 } },
    { text: "哦，然后呢？继续吃饭", scores: { buddha: 3, vanish: 1 } },
    { text: "默默记下来，回头去查前任的社交账号", scores: { detective: 3, cliff: 1 } }
  ]},
  // Q15 P:purist,newbie,money,cliff S:ideal,vanish,gym,sober
  { q: "第一次约会，你最看重什么？", opts: [
    { text: "能不能聊到一起去，有没有精神共鸣", scores: { purist: 3, ideal: 1 } },
    { text: "好紧张，希望自己别说错话就行", scores: { newbie: 3, vanish: 1 } },
    { text: "对方有没有上进心和清晰的人生规划", scores: { money: 3, gym: 1 } },
    { text: "第一印象不行就不会有第二次了", scores: { cliff: 3, slowcook: 1 } }
  ]},
  // Q16 P:pleaser,show,roommate,silent S:parent,drama,sober,tsundere
  { q: "对象送你一个你完全不喜欢的礼物。你会？", opts: [
    { text: "开心收下，TA有这份心就够了", scores: { pleaser: 3, parent: 1 } },
    { text: "拍照发朋友圈感谢对象的礼物", scores: { show: 3, drama: 1 } },
    { text: "委婉说谢谢，下次可以送别的", scores: { roommate: 3, sober: 1 } },
    { text: "不说话，但心里已经很不爽了", scores: { silent: 3, tsundere: 1 } }
  ]},
  // Q17 P:rush,daydream,parent,ideal S:alarm,purist,pleaser,cliff
  { q: "你会因为恋爱推迟自己的职业规划吗？", opts: [
    { text: "会，爱情比事业重要，大不了以后再拼", scores: { rush: 3, tsundere: 1 } },
    { text: "会幻想一种两全其美的完美方案", scores: { daydream: 3, purist: 1 } },
    { text: "看对方需不需要我，TA需要我就推迟", scores: { parent: 3, pleaser: 1 } },
    { text: "绝对不会，我有自己的人生标准", scores: { ideal: 3, cliff: 1 } }
  ]},
  // Q18 P:loop,vanish,flirt,sober S:rush,buddha,hunter,gym
  { q: "分手三个月了，前任突然给你发消息说想你了。你会？", opts: [
    { text: "心软了，开始回忆在一起的美好时光", scores: { loop: 3, newbie: 1 } },
    { text: "假装没看到，不想再卷入这段关系", scores: { vanish: 3, buddha: 1 } },
    { text: "回一句'是吗'，享受被想念的感觉但不给明确回应", scores: { flirt: 3, hunter: 1 } },
    { text: "冷静想想当初为什么分手，不能重蹈覆辙", scores: { sober: 3, gym: 1 } }
  ]},
  // === Round 4 (Q19-Q24) ===
  // Q19 P:slowcook,hunter,cliff,buddha S:purist,drama,ideal,flirt
  { q: "你觉得多久确认恋爱关系比较合适？", opts: [
    { text: "至少认识半年以上，了解够深了再说", scores: { slowcook: 3, purist: 1 } },
    { text: "感觉对了就在一起，等太久心动就没了", scores: { hunter: 3, drama: 1 } },
    { text: "如果一个月内没感觉，就不用浪费时间了", scores: { cliff: 3, ideal: 1 } },
    { text: "看缘分吧，急也急不来", scores: { buddha: 3, flirt: 1 } }
  ]},
  // Q20 P:sober,loop,show,gym S:money,pleaser,rush,ideal
  { q: "恋爱中遇到一个让你心动的新朋友。你会？", opts: [
    { text: "跟对象坦白说我的感受，一起面对", scores: { sober: 3, money: 1 } },
    { text: "开始纠结现任和这个人到底谁更好", scores: { loop: 3, pleaser: 1 } },
    { text: "发朋友圈暗示自己很幸福，提醒自己别乱来", scores: { show: 3, newbie: 1 } },
    { text: "分析一下为什么会心动，是不是现在的关系有问题", scores: { gym: 3, ideal: 1 } }
  ]},
  // Q21 P:detective,parent,tsundere,drama S:alarm,rush,silent,hunter
  { q: "对象说今天心情不好但不想说原因。你会？", opts: [
    { text: "一直追问到底怎么了，不说清楚我不放心", scores: { detective: 3, show: 1 } },
    { text: "什么都不问，默默买了TA爱吃的送过去", scores: { parent: 3, newbie: 1 } },
    { text: "嘴上说'不想说就算了'，其实很想知道", scores: { tsundere: 3, silent: 1 } },
    { text: "策划一个小惊喜让TA开心起来", scores: { drama: 3, hunter: 1 } }
  ]},
  // Q22 P:ideal,money,daydream,rush S:sober,gym,loop,alarm
  { q: "朋友都在催你谈恋爱，你的态度是？", opts: [
    { text: "我也想啊，但没遇到符合标准的", scores: { ideal: 3, sober: 1 } },
    { text: "现在事业要紧，恋爱以后再说", scores: { money: 3, gym: 1 } },
    { text: "其实我心里已经有一个理想的TA了", scores: { daydream: 3, loop: 1 } },
    { text: "一被催就更想赶紧找一个", scores: { rush: 3, tsundere: 1 } }
  ]},
  // Q23 P:roommate,silent,alarm,flirt S:vanish,cliff,rush,buddha
  { q: "对象约好了周末见面，但临时说有事来不了。你会？", opts: [
    { text: "没关系，那我自己安排别的事", scores: { roommate: 3, vanish: 1 } },
    { text: "有点失望但不会说出来", scores: { silent: 3, cliff: 1 } },
    { text: "很不开心，觉得TA不重视我", scores: { alarm: 3, slowcook: 1 } },
    { text: "无所谓，正好约别的朋友", scores: { flirt: 3, buddha: 1 } }
  ]},
  // Q24 P:purist,vanish,newbie,pleaser S:daydream,roommate,slowcook,loop
  { q: "你觉得恋爱中最重要的是什么？", opts: [
    { text: "灵魂上的共鸣，能聊到一起去", scores: { purist: 3, daydream: 1 } },
    { text: "彼此有空间，不要太黏", scores: { vanish: 3, roommate: 1 } },
    { text: "真心对待彼此，哪怕笨拙一点也没关系", scores: { newbie: 3, slowcook: 1 } },
    { text: "愿意为对方付出，让TA开心最重要", scores: { pleaser: 3, loop: 1 } }
  ]},
  // === Round 5 (Q25-Q30) ===
  // Q25 P:drama,vanish,newbie,pleaser S:show,silent,daydream,parent
  { q: "对象给你准备了一个惊喜派对，邀请了你所有朋友。你的感受？", opts: [
    { text: "感动到哭，这就是我梦想中的恋爱", scores: { drama: 3, show: 1 } },
    { text: "开心但有点不自在，更希望是两个人的庆祝", scores: { vanish: 3, silent: 1 } },
    { text: "受宠若惊，不知道该怎么回应这么大的惊喜", scores: { newbie: 3, daydream: 1 } },
    { text: "太感动了，觉得自己一定要加倍对TA好", scores: { pleaser: 3, parent: 1 } }
  ]},
  // Q26 P:loop,tsundere,cliff,rush S:alarm,detective,sober,loop... wait
  // Q26 P:loop,tsundere,cliff,rush S:pleaser,detective,sober,daydream
  { q: "你和对象冷战了三天，谁都没先开口。你会？", opts: [
    { text: "受不了了，主动找TA和好，分开太难受了", scores: { loop: 3, pleaser: 1 } },
    { text: "发个表情包试探一下，但绝不先认错", scores: { tsundere: 3, detective: 1 } },
    { text: "认真考虑这段关系还要不要继续", scores: { cliff: 3, sober: 1 } },
    { text: "追出去找TA，不管谁对谁错", scores: { rush: 3, daydream: 1 } }
  ]},
  // Q27 P:purist,flirt,alarm,roommate S:ideal,buddha,loop,vanish
  { q: "什么样的聊天会让你对一个人产生好感？", opts: [
    { text: "能聊人生聊理想，聊到忘记时间的深度对话", scores: { purist: 3, ideal: 1 } },
    { text: "有来有回的调侃和互怼，越损越亲", scores: { flirt: 3, buddha: 1 } },
    { text: "对方主动关心我的日常，记住我说过的每个细节", scores: { alarm: 3, loop: 1 } },
    { text: "轻松有趣不用想太多的闲聊", scores: { roommate: 3, vanish: 1 } }
  ]},
  // Q28 P:show,sober,silent,gym S:drama,ideal,tsundere,money
  { q: "对象在社交媒体上从来不发关于你们的内容。你会？", opts: [
    { text: "很在意，觉得TA是不是不想公开我们的关系", scores: { show: 3, drama: 1 } },
    { text: "无所谓，感情好不好跟朋友圈没关系", scores: { sober: 3, ideal: 1 } },
    { text: "不说但心里不舒服，默默记着", scores: { silent: 3, tsundere: 1 } },
    { text: "找个机会跟TA聊聊，了解TA的想法", scores: { gym: 3, money: 1 } }
  ]},
  // Q29 P:daydream,ideal,hunter,parent S:rush,purist,drama,alarm
  { q: "你心目中完美的恋爱是什么样的？", opts: [
    { text: "像电影里那样，每个瞬间都值得回味", scores: { daydream: 3, rush: 1 } },
    { text: "两个人三观一致，互相欣赏，共同成长", scores: { ideal: 3, purist: 1 } },
    { text: "永远有新鲜感，每天都有心动的瞬间", scores: { hunter: 3, drama: 1 } },
    { text: "我照顾TA，TA依赖我，彼此需要", scores: { parent: 3, money: 1 } }
  ]},
  // Q30 P:money,buddha,detective,slowcook S:gym,flirt,tsundere,newbie
  { q: "好朋友跟你说觉得你对象在外面有暧昧。你会？", opts: [
    { text: "先不管，把手头的工作忙完再说", scores: { money: 3, gym: 1 } },
    { text: "不太信，朋友可能搞错了", scores: { buddha: 3, flirt: 1 } },
    { text: "立刻开始调查，翻对象的手机和社交账号", scores: { detective: 3, tsundere: 1 } },
    { text: "先观察一段时间再下结论", scores: { slowcook: 3, newbie: 1 } }
  ]},
  // === Round 6 (Q31-Q36) ===
  // Q31 P:pleaser,gym,roommate,tsundere S:rush,sober,buddha,alarm
  { q: "对象说'你最近对我没以前那么好了'。你会？", opts: [
    { text: "赶紧反省自己哪里做得不够，马上改", scores: { pleaser: 3, rush: 1 } },
    { text: "认真想想是不是沟通方式出了问题", scores: { gym: 3, sober: 1 } },
    { text: "我该怎样还怎样啊，可能是TA想多了", scores: { roommate: 3, buddha: 1 } },
    { text: "我哪里不好了？你倒是说清楚啊", scores: { tsundere: 3, alarm: 1 } }
  ]},
  // Q32 P:loop,cliff,buddha,daydream S:alarm,ideal,roommate,rush
  { q: "刷手机时看到前任过得很好的动态。你的反应？", opts: [
    { text: "有点酸，忍不住反复看好几遍", scores: { loop: 3, alarm: 1 } },
    { text: "早就取关了，根本看不到", scores: { cliff: 3, ideal: 1 } },
    { text: "挺好的，各自安好", scores: { buddha: 3, roommate: 1 } },
    { text: "突然有点怀念在一起的日子", scores: { daydream: 3, rush: 1 } }
  ]},
  // Q33 P:hunter,detective,sober,newbie S:flirt,alarm,gym,vanish
  { q: "对象说'你是我见过最特别的人'。你的内心反应？", opts: [
    { text: "有点上头，好久没有这种被撩到的感觉了", scores: { hunter: 3, flirt: 1 } },
    { text: "开心，但也在想TA是不是对谁都这么说", scores: { detective: 3, alarm: 1 } },
    { text: "谢谢，你也很不错", scores: { sober: 3, gym: 1 } },
    { text: "脸红了，不知道该怎么接话", scores: { newbie: 3, vanish: 1 } }
  ]},
  // Q34 P:alarm,rush,parent,flirt S:detective,loop,newbie,hunter
  { q: "对象最近迷上了一个新爱好，花了很多时间在上面。你会？", opts: [
    { text: "有点吃醋，觉得TA花在我身上的时间少了", scores: { alarm: 3, detective: 1 } },
    { text: "只要TA开心就好，我全力支持", scores: { rush: 3, loop: 1 } },
    { text: "帮TA研究相关的东西，默默在背后支持", scores: { parent: 3, newbie: 1 } },
    { text: "也去找点新鲜事做，各玩各的", scores: { flirt: 3, hunter: 1 } }
  ]},
  // Q35 P:slowcook,silent,drama,ideal S:roommate,cliff,show,purist
  { q: "在一起半年了，对象从来没说过'我爱你'。你会？", opts: [
    { text: "行动比语言重要，TA对我好就够了", scores: { slowcook: 3, roommate: 1 } },
    { text: "我也不太会说这种话，所以能理解", scores: { silent: 3, cliff: 1 } },
    { text: "有点失望，恋爱不就应该说情话吗", scores: { drama: 3, show: 1 } },
    { text: "会直接问TA为什么不说，是不是不够爱我", scores: { ideal: 3, purist: 1 } }
  ]},
  // Q36 P:show,vanish,money,purist S:alarm,buddha,sober,daydream
  { q: "你理想中的求婚方式是？", opts: [
    { text: "在所有亲朋好友面前的盛大求婚", scores: { show: 3, alarm: 1 } },
    { text: "不需要仪式，水到渠成自然就好", scores: { vanish: 3, buddha: 1 } },
    { text: "先把经济基础打好再考虑这些", scores: { money: 3, sober: 1 } },
    { text: "只有两个人的私密浪漫时刻", scores: { purist: 3, daydream: 1 } }
  ]},
  // === Round 7 (Q37-Q42) ===
  // Q37 P:drama,purist,parent,vanish S:hunter,slowcook,alarm,silent
  { q: "你觉得恋爱中最幸福的时刻是？", opts: [
    { text: "对方为我精心准备了一个浪漫惊喜", scores: { drama: 3, hunter: 1 } },
    { text: "深夜两个人聊到灵魂深处的话题", scores: { purist: 3, slowcook: 1 } },
    { text: "对方在我生病时放下一切来照顾我", scores: { parent: 3, alarm: 1 } },
    { text: "两个人安静待着，不说话也不尴尬", scores: { vanish: 3, silent: 1 } }
  ]},
  // Q38 P:rush,ideal,buddha,cliff S:loop,purist,vanish,sober
  { q: "你和对象因为未来规划产生了分歧。你会？", opts: [
    { text: "我可以为了TA改变我的计划", scores: { rush: 3, loop: 1 } },
    { text: "这种大事不能将就，必须找到共识", scores: { ideal: 3, purist: 1 } },
    { text: "先搁置吧，走一步看一步", scores: { buddha: 3, vanish: 1 } },
    { text: "如果谈不拢，可能就是不合适", scores: { cliff: 3, sober: 1 } }
  ]},
  // Q39 P:newbie,sober,flirt,money S:pleaser,money... wait, money is primary
  // Q39 P:newbie,sober,flirt,money S:pleaser,gym,buddha,ideal
  { q: "对象在你不知情的情况下帮你做了一个重要决定。你会？", opts: [
    { text: "虽然有点意外，但觉得TA是为我好", scores: { newbie: 3, pleaser: 1 } },
    { text: "跟TA说以后这种事要先跟我商量", scores: { sober: 3, gym: 1 } },
    { text: "觉得TA管太多了，有点想保持距离", scores: { flirt: 3, buddha: 1 } },
    { text: "理解TA的出发点，但我有自己的规划", scores: { money: 3, ideal: 1 } }
  ]},
  // Q40 P:slowcook,daydream,loop,show S:newbie,drama,rush,drama... wait
  // Q40 P:slowcook,daydream,loop,show S:newbie,rush,pleaser,drama
  { q: "你和对象的恋爱日常，你最希望是哪种画风？", opts: [
    { text: "像老夫老妻一样自在舒服", scores: { slowcook: 3, newbie: 1 } },
    { text: "每天都像偶像剧一样甜", scores: { daydream: 3, rush: 1 } },
    { text: "分分合合但最终还是在一起", scores: { loop: 3, pleaser: 1 } },
    { text: "每个纪念日都要发朋友圈记录", scores: { show: 3, drama: 1 } }
  ]},
  // Q41 P:gym,tsundere,alarm,detective S:sober,silent,parent,cliff
  { q: "你在恋爱中犯了错伤害了对方。你会怎么处理？", opts: [
    { text: "承认错误，分析原因，保证不再犯", scores: { gym: 3, sober: 1 } },
    { text: "知道自己错了但说不出口，默默用行动补偿", scores: { tsundere: 3, silent: 1 } },
    { text: "反复道歉，生怕对方因此离开我", scores: { alarm: 3, parent: 1 } },
    { text: "感谢对方指出问题，但也会留意TA的态度", scores: { detective: 3, cliff: 1 } }
  ]},
  // Q42 P:hunter,roommate,silent,pleaser S:drama,sober,vanish,rush
  { q: "对象跟你说'我今天遇到一个特别帅/美的人'。你会？", opts: [
    { text: "也跟TA分享我今天遇到的有趣的人", scores: { hunter: 3, drama: 1 } },
    { text: "无所谓，看看又不会少块肉", scores: { roommate: 3, sober: 1 } },
    { text: "不说话，但表情已经说明了一切", scores: { silent: 3, vanish: 1 } },
    { text: "笑着说'那你去找TA吧'，心里有点不舒服", scores: { pleaser: 3, rush: 1 } }
  ]},
  // === Round 8 (Q43-Q48) ===
  // Q43 P:rush,parent,show,sober S:alarm,pleaser,hunter,money
  { q: "恋爱后你的朋友觉得你变了。你觉得最可能的变化是？", opts: [
    { text: "恋爱后基本不出来社交了，都在陪对象", scores: { rush: 3, alarm: 1 } },
    { text: "变得更会照顾人了，连朋友都跟着受益", scores: { parent: 3, pleaser: 1 } },
    { text: "朋友圈画风突变，全是秀恩爱的内容", scores: { show: 3, hunter: 1 } },
    { text: "没什么变化，该怎样还怎样", scores: { sober: 3, money: 1 } }
  ]},
  // Q44 P:purist,vanish,pleaser,gym S:ideal,buddha,loop,sober
  { q: "你觉得一段好的恋爱关系最核心的基础是？", opts: [
    { text: "两个人的精神世界能对齐", scores: { purist: 3, ideal: 1 } },
    { text: "彼此信任，给对方足够的自由和空间", scores: { vanish: 3, buddha: 1 } },
    { text: "愿意为对方付出和牺牲", scores: { pleaser: 3, loop: 1 } },
    { text: "两个人都在不断成长和进步", scores: { gym: 3, sober: 1 } }
  ]},
  // Q45 P:roommate,flirt,drama,alarm S:buddha,hunter,daydream,detective
  { q: "对象视频通话时说困了想睡了。你会？", opts: [
    { text: "好的晚安，然后各自休息", scores: { roommate: 3, buddha: 1 } },
    { text: "再聊五分钟嘛，舍不得挂", scores: { flirt: 3, hunter: 1 } },
    { text: "说晚安，然后发一段长长的晚安情话", scores: { drama: 3, daydream: 1 } },
    { text: "叮嘱TA早点睡，然后一直等TA说已经睡了", scores: { alarm: 3, detective: 1 } }
  ]},
  // Q46 P:daydream,hunter,newbie,cliff S:drama,rush,slowcook,silent
  { q: "你发现对象偷偷给你存了一个很丑的备注名。你会？", opts: [
    { text: "觉得好可爱，偷偷笑了好久", scores: { daydream: 3, drama: 1 } },
    { text: "也给TA存一个更丑的，看谁更损", scores: { hunter: 3, rush: 1 } },
    { text: "有点不好意思，不知道该怎么反应", scores: { newbie: 3, slowcook: 1 } },
    { text: "觉得不太尊重人，有点不高兴", scores: { cliff: 3, silent: 1 } }
  ]},
  // Q47 P:ideal,money,loop,tsundere S:cliff,gym,rush,detective
  { q: "对象突然说'我觉得我配不上你'。你会？", opts: [
    { text: "觉得TA说得有道理，开始重新审视这段关系", scores: { ideal: 3, cliff: 1 } },
    { text: "认真跟TA聊聊为什么会这么想", scores: { money: 3, gym: 1 } },
    { text: "心疼TA，赶紧安慰说我离不开你", scores: { loop: 3, rush: 1 } },
    { text: "说'确实'，然后看TA的反应", scores: { tsundere: 3, detective: 1 } }
  ]},
  // Q48 P:buddha,silent,detective,slowcook S:flirt,cliff,alarm,purist
  { q: "对象约会时一直在夸别的情侣好甜。你会？", opts: [
    { text: "附和一下，然后继续吃东西", scores: { buddha: 3, flirt: 1 } },
    { text: "不说话，但表情已经说明了一切", scores: { silent: 3, cliff: 1 } },
    { text: "开始观察那对情侣，分析TA为什么觉得甜", scores: { detective: 3, alarm: 1 } },
    { text: "觉得我们也可以慢慢变成那样", scores: { slowcook: 3, purist: 1 } }
  ]},
  // === Round 9 (Q49-Q54) ===
  // Q49 P:newbie,gym,ideal,flirt S:slowcook,money,purist,roommate
  { q: "如果恋爱有段位，你觉得自己是什么水平？", opts: [
    { text: "青铜，还在学习中，经常不知道该怎么做", scores: { newbie: 3, slowcook: 1 } },
    { text: "钻石，经历过几段感情，越来越懂了", scores: { gym: 3, money: 1 } },
    { text: "王者，但选择不上分，宁缺毋滥", scores: { ideal: 3, purist: 1 } },
    { text: "一直在匹配中，享受暧昧但不想正式开局", scores: { flirt: 3, roommate: 1 } }
  ]},
  // Q50 P:pleaser,detective,silent,cliff S:parent,tsundere,vanish,ideal
  { q: "对象跟你说'我们能不能少吵架多沟通'。你会？", opts: [
    { text: "好的我以后注意，都听你的", scores: { pleaser: 3, parent: 1 } },
    { text: "那你倒是说啊，每次都是你先不理我", scores: { detective: 3, tsundere: 1 } },
    { text: "觉得说了也没用，该吵还是会吵", scores: { silent: 3, vanish: 1 } },
    { text: "如果连沟通都做不到，那还有什么意义", scores: { cliff: 3, ideal: 1 } }
  ]},
  // Q51 P:show,daydream,money,loop S:rush,purist,gym,alarm
  { q: "恋爱后你的手机相册里最多的是？", opts: [
    { text: "两个人的合照和约会打卡记录", scores: { show: 3, rush: 1 } },
    { text: "偷拍对方的照片，TA都不知道我拍了", scores: { daydream: 3, purist: 1 } },
    { text: "跟恋爱前差不多，工作截图和学习笔记", scores: { money: 3, gym: 1 } },
    { text: "还留着跟前任的聊天截图，舍不得删", scores: { loop: 3, alarm: 1 } }
  ]},
  // Q52 P:parent,alarm,slowcook,drama S:pleaser,rush,newbie,show
  { q: "对象要出差一周，临走前你会？", opts: [
    { text: "帮TA收拾行李，塞满零食和日用品", scores: { parent: 3, pleaser: 1 } },
    { text: "叮嘱TA到了报平安，每天要视频", scores: { alarm: 3, rush: 1 } },
    { text: "说一句路上注意安全，然后照常过日子", scores: { slowcook: 3, newbie: 1 } },
    { text: "偷偷在TA行李箱里塞一封手写信", scores: { drama: 3, show: 1 } }
  ]},
  // Q53 P:vanish,hunter,rush,buddha S:roommate,drama,daydream,flirt
  { q: "在一起三年了，有人问你们感情好的秘诀。你会说？", opts: [
    { text: "给彼此足够的空间，不要黏太紧", scores: { vanish: 3, roommate: 1 } },
    { text: "保持新鲜感，经常尝试新东西", scores: { hunter: 3, drama: 1 } },
    { text: "就是很爱TA，什么都愿意为TA做", scores: { rush: 3, daydream: 1 } },
    { text: "没什么秘诀，顺其自然就好", scores: { buddha: 3, flirt: 1 } }
  ]},
  // Q54 P:tsundere,roommate,sober,purist S:silent,vanish,cliff,slowcook
  { q: "对象跟你坦白说TA以前劈过腿。你会？", opts: [
    { text: "嘴上说'跟我有什么关系'，心里其实很在意", scores: { tsundere: 3, silent: 1 } },
    { text: "过去的事就过去了，不影响我们现在", scores: { roommate: 3, vanish: 1 } },
    { text: "冷静分析一下TA现在的态度和行为", scores: { sober: 3, cliff: 1 } },
    { text: "这说明TA的价值观可能跟我不一样", scores: { purist: 3, slowcook: 1 } }
  ]},
  // === Round 10 (Q55-Q60) ===
  // Q55 P:daydream,show,hunter,newbie S:drama,alarm,flirt,pleaser
  { q: "你觉得什么时候最想谈恋爱？", opts: [
    { text: "看完一部浪漫电影的时候", scores: { daydream: 3, drama: 1 } },
    { text: "看到别人秀恩爱被塞狗粮的时候", scores: { show: 3, alarm: 1 } },
    { text: "遇到一个让我心动的人的时候", scores: { hunter: 3, flirt: 1 } },
    { text: "一个人过节觉得有点孤单的时候", scores: { newbie: 3, pleaser: 1 } }
  ]},
  // Q56 P:silent,pleaser,tsundere,money S:vanish,loop,alarm,gym
  { q: "对象跟你说'我觉得你太粘人了'。你会？", opts: [
    { text: "不说话了，但心里很委屈", scores: { silent: 3, vanish: 1 } },
    { text: "好吧，那我给你多一点空间", scores: { pleaser: 3, loop: 1 } },
    { text: "粘人？我还觉得你太冷淡了呢", scores: { tsundere: 3, alarm: 1 } },
    { text: "那正好，我也有自己的事要忙", scores: { money: 3, gym: 1 } }
  ]},
  // Q57 P:vanish,purist,slowcook,loop S:buddha,daydream,ideal,rush
  { q: "你觉得恋爱中最难的是什么？", opts: [
    { text: "保持自我，不被关系吞噬", scores: { vanish: 3, buddha: 1 } },
    { text: "找到一个真正懂你的人", scores: { purist: 3, daydream: 1 } },
    { text: "从朋友变成恋人的那一步", scores: { slowcook: 3, ideal: 1 } },
    { text: "放下过去，不再想前任", scores: { loop: 3, rush: 1 } }
  ]},
  // Q58 P:sober,cliff,rush,parent S:gym,silent,loop,newbie
  { q: "你和对象因为家务分配吵了起来。你会？", opts: [
    { text: "列个清单公平分配，用制度解决问题", scores: { sober: 3, gym: 1 } },
    { text: "连家务都谈不拢，以后怎么过日子", scores: { cliff: 3, silent: 1 } },
    { text: "算了我全包了，只要TA开心就好", scores: { rush: 3, loop: 1 } },
    { text: "帮TA把活都干了，顺便教TA怎么做", scores: { parent: 3, newbie: 1 } }
  ]},
  // Q59 P:buddha,ideal,alarm,flirt S:roommate,cliff,parent,hunter
  { q: "如果给你的恋爱态度选一个关键词，你会选？", opts: [
    { text: "顺其自然", scores: { buddha: 3, roommate: 1 } },
    { text: "宁缺毋滥", scores: { ideal: 3, cliff: 1 } },
    { text: "全心投入", scores: { alarm: 3, parent: 1 } },
    { text: "享受当下", scores: { flirt: 3, hunter: 1 } }
  ]},
  // Q60 P:gym,roommate,detective,drama S:money,sober,loop,show
  { q: "最后一题：你觉得爱情在你生活中的位置是？", opts: [
    { text: "让我不断成长的人生课题", scores: { gym: 3, money: 1 } },
    { text: "生活的调味品，有最好没有也行", scores: { roommate: 3, sober: 1 } },
    { text: "需要认真经营和守护的珍贵关系", scores: { detective: 3, loop: 1 } },
    { text: "值得用一辈子去浪漫的事", scores: { drama: 3, show: 1 } }
  ]}
];
