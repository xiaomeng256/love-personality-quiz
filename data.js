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

const questions = [
  { q: "周五晚上，对象突然说想见你，但你已经约了朋友打游戏。你会？", opts: [
    { text: "立刻取消朋友局，飞奔去见对象", scores: { rush: 3, alarm: 1 } },
    { text: "跟对象说改明天吧，今晚有安排了", scores: { sober: 3, roommate: 1 } },
    { text: "问问朋友能不能带对象一起来", scores: { show: 2, drama: 1 } },
    { text: "纠结半天，最后两边都去一会儿", scores: { pleaser: 3 } }
  ]},
  { q: "你发了条消息给对象，过了两个小时还没回。你的第一反应是？", opts: [
    { text: "开始翻TA的朋友圈看是不是在忙", scores: { alarm: 3, detective: 1 } },
    { text: "没啥感觉，可能在忙吧", scores: { buddha: 3, roommate: 1 } },
    { text: "有点不爽但不会说，默默等着", scores: { silent: 2, tsundere: 1 } },
    { text: "发第二条：你死了吗？？？", scores: { rush: 2, alarm: 1 } }
  ]},
  { q: "理想的约会方式是？", opts: [
    { text: "精心策划的浪漫晚餐+看星星", scores: { drama: 3, daydream: 1 } },
    { text: "各自带本书去咖啡馆，安静待一下午", scores: { roommate: 3, sober: 1 } },
    { text: "一起去密室逃脱或者游乐园，要刺激", scores: { hunter: 3, flirt: 1 } },
    { text: "在家做饭看电影，舒服就行", scores: { parent: 2, slowcook: 1 } }
  ]},
  { q: "对象跟异性朋友单独吃饭，你的反应？", opts: [
    { text: "表面说没事，心里已经开始查对方是谁了", scores: { detective: 3, alarm: 1 } },
    { text: "完全OK，我也有异性朋友啊", scores: { sober: 3, buddha: 1 } },
    { text: "嘴上说随便你，但接下来三天阴阳怪气", scores: { tsundere: 2, silent: 2 } },
    { text: "直接说不太舒服，希望下次能一起", scores: { rush: 2, alarm: 1 } }
  ]},
  { q: "你觉得恋爱中最重要的是什么？", opts: [
    { text: "灵魂深处的共鸣和理解", scores: { purist: 3, ideal: 1 } },
    { text: "持续的心动和激情", scores: { hunter: 2, drama: 2 } },
    { text: "稳定的陪伴和安全感", scores: { alarm: 2, parent: 2 } },
    { text: "互相尊重彼此的独立空间", scores: { sober: 2, roommate: 2 } }
  ]},
  { q: "分手后你通常会怎么做？", opts: [
    { text: "删除所有联系方式，彻底断干净", scores: { cliff: 3, sober: 1 } },
    { text: "忍不住偷偷看前任的社交动态", scores: { rush: 2, daydream: 1 } },
    { text: "过几天就开始想复合了", scores: { loop: 3, alarm: 1 } },
    { text: "认真复盘这段关系，总结经验", scores: { gym: 3 } }
  ]},
  { q: "对象说'我觉得我们需要谈谈'，你的第一反应？", opts: [
    { text: "心跳加速，完了完了要分手了", scores: { alarm: 3, rush: 1 } },
    { text: "好啊，有什么问题说清楚就好", scores: { sober: 3, gym: 1 } },
    { text: "假装没看到这条消息", scores: { vanish: 3, silent: 1 } },
    { text: "先想好怎么让对方消气", scores: { pleaser: 3 } }
  ]},
  { q: "你会在朋友圈晒恋爱日常吗？", opts: [
    { text: "当然！恋爱不晒等于没谈", scores: { show: 3, drama: 1 } },
    { text: "偶尔晒一下，纪念日什么的", scores: { slowcook: 1, parent: 1 } },
    { text: "从来不晒，感情是两个人的事", scores: { vanish: 2, sober: 1 } },
    { text: "想晒但怕被说秀恩爱", scores: { newbie: 2, tsundere: 1 } }
  ]},
  { q: "暧昧期对方突然变冷淡了，你会？", opts: [
    { text: "主动问清楚怎么了", scores: { rush: 2, sober: 1 } },
    { text: "也跟着冷淡，看谁先撑不住", scores: { tsundere: 2, flirt: 2 } },
    { text: "疯狂分析是不是自己哪里做错了", scores: { alarm: 3, daydream: 1 } },
    { text: "算了，缘分到此为止吧", scores: { buddha: 2, cliff: 2 } }
  ]},
  { q: "你对'恋爱搭子'这个概念怎么看？", opts: [
    { text: "挺好的，轻松没负担", scores: { roommate: 3, buddha: 1 } },
    { text: "不理解，要么认真谈要么别谈", scores: { ideal: 2, purist: 2 } },
    { text: "可以先从搭子开始慢慢发展", scores: { slowcook: 3, flirt: 1 } },
    { text: "我就是那个把搭子处成对象的人", scores: { rush: 2, hunter: 1 } }
  ]},
  { q: "对象加班到很晚，你会？", opts: [
    { text: "给TA点个外卖送到公司", scores: { parent: 3, rush: 1 } },
    { text: "发条消息说早点休息，然后该干嘛干嘛", scores: { sober: 2, roommate: 1 } },
    { text: "怀疑是不是真的在加班", scores: { detective: 3 } },
    { text: "等TA回来，不管多晚", scores: { rush: 2, alarm: 1 } }
  ]},
  { q: "你怎么看待恋爱中的仪式感？", opts: [
    { text: "超级重要！每个纪念日都要过", scores: { drama: 3, show: 1 } },
    { text: "偶尔有就行，天天搞太累了", scores: { roommate: 2, buddha: 1 } },
    { text: "心意到了就好，形式不重要", scores: { sober: 2, slowcook: 1 } },
    { text: "我就是那个会准备惊喜的人", scores: { parent: 2, drama: 1 } }
  ]},
  { q: "如果对象的朋友不太喜欢你，你会？", opts: [
    { text: "努力让他们喜欢我", scores: { pleaser: 3, show: 1 } },
    { text: "无所谓，我又不是跟他们谈恋爱", scores: { sober: 2, buddha: 1 } },
    { text: "有点在意，会跟对象聊聊", scores: { alarm: 2, rush: 1 } },
    { text: "暗暗记住，以后少来往就是了", scores: { silent: 2, tsundere: 1 } }
  ]},
  { q: "你觉得多久确认恋爱关系比较合适？", opts: [
    { text: "感觉对了就在一起，不用等太久", scores: { rush: 2, hunter: 2 } },
    { text: "至少认识半年以上", scores: { slowcook: 3, ideal: 1 } },
    { text: "看缘分，水到渠成", scores: { buddha: 2, slowcook: 1 } },
    { text: "其实不确认关系也挺好的", scores: { flirt: 3, roommate: 1 } }
  ]},
  { q: "吵架的时候你通常是什么状态？", opts: [
    { text: "据理力争，一定要说清楚", scores: { sober: 2, detective: 1 } },
    { text: "先不说话，冷静一下再谈", scores: { silent: 3, vanish: 1 } },
    { text: "先道歉，不管是不是自己的错", scores: { pleaser: 3, parent: 1 } },
    { text: "吵到一半突然觉得算了不想吵了", scores: { cliff: 2, buddha: 1 } }
  ]},
  { q: "你会因为恋爱推迟自己的职业规划吗？", opts: [
    { text: "会，爱情比事业重要", scores: { rush: 3, alarm: 1 } },
    { text: "绝对不会，事业第一", scores: { money: 3, sober: 1 } },
    { text: "看情况，能兼顾最好", scores: { gym: 2, slowcook: 1 } },
    { text: "没想过这个问题", scores: { buddha: 2, newbie: 1 } }
  ]},
  { q: "对象送你一个你不喜欢的礼物，你会？", opts: [
    { text: "开心收下，心意最重要", scores: { pleaser: 2, parent: 1 } },
    { text: "委婉地说下次可以送别的", scores: { sober: 3 } },
    { text: "嘴上说不喜欢，但偷偷收好", scores: { tsundere: 3 } },
    { text: "发朋友圈感谢对象的礼物", scores: { show: 2, drama: 1 } }
  ]},
  { q: "你理想中的恋爱节奏是？", opts: [
    { text: "每天都要见面或者视频", scores: { rush: 2, alarm: 2 } },
    { text: "一周见两三次刚刚好", scores: { roommate: 2, sober: 2 } },
    { text: "顺其自然，想见就见", scores: { buddha: 2, slowcook: 1 } },
    { text: "保持一定的神秘感更好", scores: { flirt: 2, hunter: 2 } }
  ]},
  { q: "你会翻对象的手机吗？", opts: [
    { text: "想翻但忍住了", scores: { detective: 2, alarm: 1 } },
    { text: "翻过，而且觉得没什么问题", scores: { detective: 3 } },
    { text: "从来不翻，信任是底线", scores: { sober: 3, ideal: 1 } },
    { text: "我连自己手机都懒得翻", scores: { buddha: 3 } }
  ]},
  { q: "对象说'你变了'，你的反应？", opts: [
    { text: "认真反思自己是不是真的变了", scores: { gym: 3, pleaser: 1 } },
    { text: "你也变了啊，彼此彼此", scores: { tsundere: 2, sober: 1 } },
    { text: "心里一紧，是不是要分手的前兆", scores: { alarm: 3 } },
    { text: "人都会变的，这很正常", scores: { buddha: 2, cliff: 1 } }
  ]},
  { q: "你更倾向于哪种表白方式？", opts: [
    { text: "精心准备一个浪漫的场景", scores: { drama: 3, daydream: 1 } },
    { text: "找个合适的时机自然地说出来", scores: { slowcook: 2, sober: 1 } },
    { text: "等对方先表白", scores: { buddha: 1, vanish: 1, flirt: 1 } },
    { text: "不表白，用行动让对方感受到", scores: { tsundere: 2, silent: 1 } }
  ]},
  { q: "恋爱中你最受不了的是什么？", opts: [
    { text: "对方不回消息或者敷衍", scores: { alarm: 3, rush: 1 } },
    { text: "对方管太多，没有自由", scores: { sober: 2, vanish: 2 } },
    { text: "没有深度交流，只有表面寒暄", scores: { purist: 3, ideal: 1 } },
    { text: "一成不变，毫无新鲜感", scores: { hunter: 3, drama: 1 } }
  ]},
  { q: "朋友说你对象配不上你，你会？", opts: [
    { text: "生气，我的感情不需要别人评价", scores: { rush: 2, detective: 1 } },
    { text: "认真想想朋友说的有没有道理", scores: { gym: 2, sober: 1 } },
    { text: "嘴上反驳但心里开始动摇", scores: { alarm: 2, daydream: 1 } },
    { text: "无所谓，我开心就好", scores: { buddha: 2, roommate: 1 } }
  ]},
  { q: "你怎么看待异地恋？", opts: [
    { text: "只要爱够深，距离不是问题", scores: { rush: 2, ideal: 2 } },
    { text: "太难了，我需要陪伴", scores: { alarm: 2, parent: 1 } },
    { text: "可以试试，不行就算了", scores: { buddha: 2, cliff: 1 } },
    { text: "异地反而有种浪漫的感觉", scores: { daydream: 2, flirt: 1 } }
  ]},
  { q: "对象突然说想一个人静静，你会？", opts: [
    { text: "尊重TA，给TA空间", scores: { sober: 3, roommate: 1 } },
    { text: "嘴上说好，心里慌得一批", scores: { alarm: 3, tsundere: 1 } },
    { text: "问清楚原因再决定", scores: { gym: 2, detective: 1 } },
    { text: "正好我也想一个人待会儿", scores: { vanish: 2, buddha: 2 } }
  ]},
  { q: "你觉得恋爱中谁应该主动多一点？", opts: [
    { text: "我愿意主动，让对方感受到我的爱", scores: { rush: 2, parent: 2 } },
    { text: "应该对等，不能总是一个人付出", scores: { sober: 2, gym: 1 } },
    { text: "希望对方主动多一点", scores: { alarm: 1, newbie: 2 } },
    { text: "不在意谁主动，自然就好", scores: { buddha: 2, slowcook: 1 } }
  ]},
  { q: "你会为了对象改变自己的生活习惯吗？", opts: [
    { text: "当然，爱一个人就要互相磨合", scores: { rush: 2, pleaser: 2 } },
    { text: "小的可以，核心习惯不会变", scores: { sober: 3 } },
    { text: "希望对方接受真实的我", scores: { ideal: 2, vanish: 1 } },
    { text: "已经在不知不觉中改了很多了", scores: { parent: 2, slowcook: 1 } }
  ]},
  { q: "你对'暧昧期'的态度是？", opts: [
    { text: "最美好的阶段，享受那种心跳的感觉", scores: { flirt: 3, hunter: 1 } },
    { text: "煎熬，赶紧确认关系吧", scores: { alarm: 2, rush: 2 } },
    { text: "顺其自然，不急着定义", scores: { slowcook: 2, buddha: 1 } },
    { text: "暧昧就暧昧呗，不一定要在一起", scores: { roommate: 2, flirt: 1 } }
  ]},
  { q: "对象在社交媒体上关注了很多好看的异性，你会？", opts: [
    { text: "一个一个点进去看是谁", scores: { detective: 3, alarm: 1 } },
    { text: "看看就好，谁还不看帅哥美女了", scores: { sober: 2, buddha: 1 } },
    { text: "有点不舒服但不会说", scores: { silent: 2, tsundere: 1 } },
    { text: "我也去关注一堆，扯平", scores: { tsundere: 1, hunter: 1 } }
  ]},
  { q: "你觉得恋爱中最浪漫的事是什么？", opts: [
    { text: "在平凡的日子里突然给我一个惊喜", scores: { drama: 3, daydream: 1 } },
    { text: "生病的时候有人照顾我", scores: { parent: 2, alarm: 1 } },
    { text: "能聊到深夜还不觉得困", scores: { purist: 3 } },
    { text: "一起为未来努力奋斗", scores: { money: 2, sober: 1 } }
  ]},
  { q: "你会主动跟对象说'我爱你'吗？", opts: [
    { text: "经常说，爱就要大声说出来", scores: { rush: 2, drama: 2 } },
    { text: "偶尔说，说多了就不值钱了", scores: { slowcook: 2, sober: 1 } },
    { text: "打死都说不出口，但会用行动表达", scores: { tsundere: 3, silent: 1 } },
    { text: "等对方先说我才说", scores: { newbie: 2, vanish: 1 } }
  ]},
  { q: "对象跟前任还保持联系，你能接受吗？", opts: [
    { text: "完全不能，必须断干净", scores: { detective: 2, cliff: 2 } },
    { text: "可以理解，但心里不太舒服", scores: { alarm: 2, tsundere: 1 } },
    { text: "没问题，成年人的社交很正常", scores: { sober: 3, buddha: 1 } },
    { text: "取决于他们之间是什么关系", scores: { gym: 2, ideal: 1 } }
  ]},
  { q: "你在恋爱中更像哪种角色？", opts: [
    { text: "照顾者，喜欢操心对方的一切", scores: { parent: 3, pleaser: 1 } },
    { text: "被照顾的那个，享受被宠的感觉", scores: { alarm: 2, newbie: 1 } },
    { text: "平等的伙伴，各管各的", scores: { sober: 2, roommate: 2 } },
    { text: "气氛组，负责制造快乐", scores: { drama: 2, hunter: 1 } }
  ]},
  { q: "你会因为一首歌想起前任吗？", opts: [
    { text: "会，而且会单曲循环哭一场", scores: { rush: 2, loop: 2 } },
    { text: "会想起，但也就一瞬间的事", scores: { gym: 2, sober: 1 } },
    { text: "早就把相关的歌都删了", scores: { cliff: 3 } },
    { text: "不会，我听歌不带感情的", scores: { buddha: 2, money: 1 } }
  ]},
  { q: "对象忘了你们的纪念日，你会？", opts: [
    { text: "很伤心，觉得TA不重视这段感情", scores: { alarm: 2, drama: 2 } },
    { text: "提醒一下就好，谁还没个忘事的时候", scores: { sober: 2, parent: 1 } },
    { text: "不说，但心里记着这笔账", scores: { silent: 2, tsundere: 2 } },
    { text: "我自己也记不住纪念日", scores: { buddha: 2, roommate: 1 } }
  ]},
  { q: "你觉得恋爱需要'门当户对'吗？", opts: [
    { text: "需要，三观和背景相近更容易相处", scores: { ideal: 3, sober: 1 } },
    { text: "不需要，爱情面前人人平等", scores: { rush: 2, daydream: 1 } },
    { text: "精神上的门当户对比物质重要", scores: { purist: 3 } },
    { text: "没想过，遇到喜欢的再说", scores: { buddha: 2, newbie: 1 } }
  ]},
  { q: "恋爱中你最怕听到哪句话？", opts: [
    { text: "我们冷静一下吧", scores: { alarm: 3, rush: 1 } },
    { text: "你能不能别管我那么多", scores: { parent: 2, detective: 1 } },
    { text: "你从来不说你的真实想法", scores: { silent: 2, vanish: 2 } },
    { text: "我觉得我们之间没有激情了", scores: { hunter: 2, drama: 1 } }
  ]},
  { q: "你会为了恋爱搬到另一个城市吗？", opts: [
    { text: "会，为了爱情值得", scores: { rush: 3, daydream: 1 } },
    { text: "不会，我的生活不能因为恋爱全盘改变", scores: { money: 2, sober: 2 } },
    { text: "看对方值不值得", scores: { ideal: 2, gym: 1 } },
    { text: "可以试试，不行再回来", scores: { buddha: 2, roommate: 1 } }
  ]},
  { q: "你怎么看待'恋爱脑'？", opts: [
    { text: "没什么不好，说明爱得真诚", scores: { rush: 3, daydream: 1 } },
    { text: "太可怕了，一定要保持清醒", scores: { sober: 3, money: 1 } },
    { text: "年轻的时候可以，但要学会成长", scores: { gym: 3 } },
    { text: "跟我没关系，我不太容易上头", scores: { buddha: 2, vanish: 1 } }
  ]},
  { q: "对象的好朋友是异性，经常一起出去玩，你会？", opts: [
    { text: "表面大度，暗中观察", scores: { detective: 3, tsundere: 1 } },
    { text: "真心觉得没问题，信任对方", scores: { sober: 3 } },
    { text: "直接说我不太舒服", scores: { alarm: 2, rush: 1 } },
    { text: "我也找个异性朋友多出去玩", scores: { hunter: 1, flirt: 1 } }
  ]},
  { q: "你觉得恋爱中最理想的沟通方式是？", opts: [
    { text: "有什么说什么，坦诚相待", scores: { sober: 2, gym: 2 } },
    { text: "用行动代替语言", scores: { tsundere: 2, parent: 1 } },
    { text: "写长信或者发长消息表达心意", scores: { daydream: 2, drama: 1 } },
    { text: "等情绪平复了再慢慢聊", scores: { silent: 2, slowcook: 1 } }
  ]},
  { q: "你会把恋爱的烦恼告诉朋友吗？", opts: [
    { text: "会，朋友就是用来吐槽的", scores: { show: 2, alarm: 1 } },
    { text: "不会，感情的事自己消化", scores: { vanish: 2, silent: 1 } },
    { text: "只跟最好的朋友说", scores: { slowcook: 1, sober: 1 } },
    { text: "不仅告诉朋友，还发到网上求建议", scores: { show: 3, newbie: 1 } }
  ]},
  { q: "你对'先结婚后恋爱'怎么看？", opts: [
    { text: "不可能，没有感情基础怎么结婚", scores: { ideal: 2, purist: 2 } },
    { text: "也不是不行，感情可以慢慢培养", scores: { slowcook: 3 } },
    { text: "太冒险了，万一不合适呢", scores: { gym: 2, sober: 1 } },
    { text: "随缘吧，什么方式都有可能幸福", scores: { buddha: 3 } }
  ]},
  { q: "你在恋爱中会吃醋吗？", opts: [
    { text: "经常吃，而且藏不住", scores: { detective: 2, alarm: 2 } },
    { text: "会吃醋但不会表现出来", scores: { tsundere: 3, silent: 1 } },
    { text: "很少吃醋，我比较自信", scores: { sober: 2, money: 1 } },
    { text: "吃醋说明在乎，这是好事", scores: { rush: 2, drama: 1 } }
  ]},
  { q: "对象说想带你见家长，你的反应？", opts: [
    { text: "开心！说明TA是认真的", scores: { rush: 2, ideal: 1 } },
    { text: "有点紧张，但愿意去", scores: { newbie: 2, slowcook: 1 } },
    { text: "是不是太快了？我还没准备好", scores: { vanish: 2, flirt: 1 } },
    { text: "先了解一下TA家里的情况再说", scores: { sober: 2, gym: 1 } }
  ]},
  { q: "你觉得恋爱中最甜的瞬间是？", opts: [
    { text: "对方记住了我不经意间说过的话", scores: { purist: 2, daydream: 2 } },
    { text: "一起完成了一件有意义的事", scores: { money: 1, gym: 2 } },
    { text: "什么都不做，就是待在一起", scores: { roommate: 2, slowcook: 1 } },
    { text: "在所有人面前牵我的手", scores: { show: 2, drama: 2 } }
  ]},
  { q: "你会因为对方的一个缺点就放弃这段感情吗？", opts: [
    { text: "看是什么缺点，触碰底线的会", scores: { cliff: 2, ideal: 2 } },
    { text: "不会，人无完人，互相包容", scores: { rush: 2, parent: 1 } },
    { text: "会先尝试沟通改变", scores: { gym: 2, sober: 1 } },
    { text: "可能会纠结很久但最终还是算了", scores: { loop: 2, pleaser: 1 } }
  ]},
  { q: "你更喜欢哪种恋爱状态？", opts: [
    { text: "轰轰烈烈，爱得刻骨铭心", scores: { rush: 2, drama: 2 } },
    { text: "细水长流，平淡但温暖", scores: { slowcook: 2, parent: 1 } },
    { text: "若即若离，保持新鲜感", scores: { flirt: 2, hunter: 2 } },
    { text: "独立又亲密，各自精彩", scores: { sober: 2, roommate: 1 } }
  ]},
  { q: "你会为了对象学一项新技能吗？比如做饭、摄影", opts: [
    { text: "当然，为了TA什么都愿意学", scores: { rush: 2, pleaser: 2 } },
    { text: "如果我自己也感兴趣的话", scores: { sober: 3 } },
    { text: "会学，而且要学到最好给TA看", scores: { show: 2, drama: 1 } },
    { text: "不会特意去学，做自己就好", scores: { vanish: 1, buddha: 2 } }
  ]},
  { q: "你怎么看待恋爱中的'冷战'？", opts: [
    { text: "受不了，有问题必须马上解决", scores: { rush: 2, alarm: 2 } },
    { text: "有时候冷静一下也好", scores: { silent: 2, sober: 1 } },
    { text: "我就是那个先发起冷战的人", scores: { silent: 3, tsundere: 1 } },
    { text: "冷战超过三天我就当分手了", scores: { cliff: 3 } }
  ]},
  { q: "你觉得前任可以做朋友吗？", opts: [
    { text: "可以，分手了也是朋友", scores: { buddha: 2, gym: 1 } },
    { text: "不行，断了就是断了", scores: { cliff: 3, detective: 1 } },
    { text: "嘴上说可以，但做不到", scores: { loop: 2, tsundere: 1 } },
    { text: "要看分手的原因", scores: { sober: 2, ideal: 1 } }
  ]},
  { q: "对象在你面前哭了，你会？", opts: [
    { text: "抱住TA，什么都不说", scores: { parent: 3, rush: 1 } },
    { text: "帮TA分析问题，想解决办法", scores: { sober: 2, gym: 1 } },
    { text: "跟着一起哭", scores: { rush: 2, daydream: 1 } },
    { text: "有点手足无措，不知道该怎么办", scores: { newbie: 3, vanish: 1 } }
  ]},
  { q: "你会经常回忆恋爱中的美好瞬间吗？", opts: [
    { text: "会，还会翻聊天记录和照片", scores: { daydream: 3, loop: 1 } },
    { text: "偶尔想起来会笑一下", scores: { slowcook: 2, sober: 1 } },
    { text: "不太会，活在当下比较重要", scores: { money: 2, buddha: 1 } },
    { text: "会，而且会发到社交媒体上", scores: { show: 3 } }
  ]},
  { q: "你觉得恋爱中最重要的品质是？", opts: [
    { text: "忠诚和专一", scores: { detective: 1, ideal: 2, rush: 1 } },
    { text: "理解和包容", scores: { parent: 2, pleaser: 1 } },
    { text: "独立和上进", scores: { money: 2, sober: 2 } },
    { text: "有趣和浪漫", scores: { hunter: 2, drama: 2 } }
  ]},
  { q: "如果可以选择，你希望恋爱中的自己是什么样的？", opts: [
    { text: "温柔体贴，让对方感到幸福", scores: { parent: 2, pleaser: 1 } },
    { text: "独立自信，有自己的光芒", scores: { sober: 2, money: 1 } },
    { text: "浪漫有趣，每天都有新花样", scores: { drama: 2, hunter: 1 } },
    { text: "真实自然，不用刻意表演", scores: { buddha: 2, slowcook: 1 } }
  ]},
  { q: "你会因为孤独而开始一段恋爱吗？", opts: [
    { text: "可能会，有人陪总比一个人好", scores: { alarm: 2, roommate: 1 } },
    { text: "不会，宁缺毋滥", scores: { ideal: 3, sober: 1 } },
    { text: "说不好，看遇到什么人", scores: { buddha: 2, newbie: 1 } },
    { text: "孤独？我一个人过得挺好的", scores: { money: 2, vanish: 1 } }
  ]},
  { q: "你对'灵魂伴侣'这个概念怎么看？", opts: [
    { text: "相信，而且一直在找", scores: { purist: 3, ideal: 1 } },
    { text: "不太信，合适的人是磨合出来的", scores: { gym: 2, slowcook: 1 } },
    { text: "信，但觉得很难遇到", scores: { daydream: 2, ideal: 1 } },
    { text: "想太多了，开心就好", scores: { buddha: 2, roommate: 1 } }
  ]},
  { q: "恋爱中对方做了让你失望的事，你会？", opts: [
    { text: "直接摊牌谈清楚", scores: { sober: 2, cliff: 1 } },
    { text: "先自己消化一下再说", scores: { silent: 2, vanish: 1 } },
    { text: "嘴上说没事，但态度明显变了", scores: { tsundere: 2, silent: 1 } },
    { text: "原谅TA，但心里记着", scores: { pleaser: 2, loop: 1 } }
  ]},
  { q: "你觉得恋爱中'作'是一种什么行为？", opts: [
    { text: "是在试探对方的底线，想确认被爱", scores: { alarm: 2, detective: 1 } },
    { text: "是不成熟的表现，有话好好说就行", scores: { sober: 2, gym: 1 } },
    { text: "偶尔作一下挺可爱的", scores: { drama: 2, tsundere: 1 } },
    { text: "我从来不作，嫌麻烦", scores: { buddha: 2, money: 1 } }
  ]},
  { q: "最后一题：用一句话形容你理想中的爱情？", opts: [
    { text: "执子之手，与子偕老", scores: { rush: 1, ideal: 1, slowcook: 2 } },
    { text: "你是我的全世界", scores: { rush: 3, alarm: 1 } },
    { text: "我们各自发光，照亮彼此", scores: { sober: 2, money: 2 } },
    { text: "在一起很开心，不在一起也没关系", scores: { buddha: 2, roommate: 2 } }
  ]}
];
