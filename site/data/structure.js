// 课程骨架：讲次 -> 知识点(id/title/tags)
// 三个版本(original/cs/freshman)按 id 对齐，分别在 original.js / cs.js / freshman.js 填充
window.STRUCTURE = [
  {
    id: "ch1",
    title: "第一讲 · 概率空间(集类与事件域)",
    chapter: "Chapter 1 概率空间",
    points: [
      { id: "kp-1-1", title: "半代数", tags: ["集类", "半代数", "semi-algebra"] },
      { id: "kp-1-2", title: "代数(集代数)", tags: ["集类", "代数", "algebra"] },
      { id: "kp-1-3", title: "σ代数(σ域)", tags: ["集类", "σ代数", "sigma-algebra", "事件域"] },
      { id: "kp-1-4", title: "生成σ代数", tags: ["σ代数", "生成元", "命题1"] },
      { id: "kp-1-5", title: "π系与λ系", tags: ["π系", "λ系", "集类"] },
      { id: "kp-1-6", title: "单调类", tags: ["单调类", "集类"] },
      { id: "kp-1-7", title: "单调类定理(λ-π方法)", tags: ["单调类定理", "λ-π", "定理1.1.1"] },
      { id: "kp-1-8", title: "单调类定理(代数版)", tags: ["单调类定理", "定理1.1.2", "代数"] }
    ]
  },
  {
    id: "ch2",
    title: "第二讲 · 概率测度与随机变量",
    chapter: "Chapter 1~2",
    points: [
      { id: "kp-2-1", title: "可测空间与概率测度", tags: ["概率测度", "可测空间", "概率空间"] },
      { id: "kp-2-2", title: "概率测度的基本性质", tags: ["概率测度", "连续性", "次可加性"] },
      { id: "kp-2-3", title: "测度扩张定理", tags: ["测度扩张", "定理1.3.1", "半代数"] },
      { id: "kp-2-4", title: "分布函数与L-S测度", tags: ["分布函数", "L-S测度", "Lebesgue", "Borel"] },
      { id: "kp-2-5", title: "随机变量的定义", tags: ["随机变量", "可测映射", "随机元"] },
      { id: "kp-2-6", title: "随机变量的判定(定理2.1.1)", tags: ["随机变量", "判定", "定理2.1.1"] },
      { id: "kp-2-7", title: "示性函数", tags: ["示性函数", "可测函数", "indicator"] },
      { id: "kp-2-8", title: "随机变量的基本性质", tags: ["随机变量", "运算封闭", "性质"] }
    ]
  },
  {
    id: "ch3",
    title: "第三讲 · 随机变量的构造与分布",
    chapter: "Chapter 2",
    points: [
      { id: "kp-3-1", title: "简单随机变量与初等随机变量", tags: ["简单随机变量", "初等随机变量"] },
      { id: "kp-3-2", title: "非负r.v的阶梯逼近(定理2.2.1)", tags: ["阶梯逼近", "定理2.2.1", "简单逼近"] },
      { id: "kp-3-3", title: "σ(X)可测性(定理2.2.2)", tags: ["σ(X)", "可测性", "定理2.2.2", "Doob-Dynkin"] },
      { id: "kp-3-4", title: "随机变量的概率分布", tags: ["概率分布", "分布", "μ_X"] },
      { id: "kp-3-5", title: "分布函数", tags: ["分布函数", "CDF"] },
      { id: "kp-3-6", title: "分布的存在性(定理2.3.1)", tags: ["存在性", "定理2.3.1", "构造"] },
      { id: "kp-3-7", title: "例:二项分布的构造", tags: ["二项分布", "例子", "构造"] }
    ]
  },
  {
    id: "ch4",
    title: "第四讲 · 独立性与数学期望",
    chapter: "Chapter 3~4",
    points: [
      { id: "kp-4-1", title: "事件类的独立性", tags: ["独立性", "事件", "independence"] },
      { id: "kp-4-2", title: "随机变量的独立性", tags: ["独立性", "随机变量", "independence"] },
      { id: "kp-4-3", title: "独立性的分布函数刻画(定理2.4.1)", tags: ["独立性", "分布函数", "定理2.4.1"] },
      { id: "kp-4-4", title: "独立性的密度刻画", tags: ["独立性", "概率密度", "命题"] },
      { id: "kp-4-5", title: "数学期望的定义", tags: ["数学期望", "积分", "定义", "唯一性"] },
      { id: "kp-4-6", title: "期望的基本性质", tags: ["数学期望", "线性", "a.s."] },
      { id: "kp-4-7", title: "Levi定理(定理3.1.1)", tags: ["Levi", "单调收敛", "定理3.1.1"] },
      { id: "kp-4-8", title: "期望性质(Markov/Cauchy-Schwarz)", tags: ["定理3.2.1", "Markov不等式", "Cauchy-Schwarz"] }
    ]
  }

,
  {
    id: "ch5",
    title: "第五讲 · 积分变换与收敛定理",
    chapter: "Chapter 3",
    points: [
      { id: "kp-5-1", title: "积分变换定理（定理3.3.1）", tags: ["积分变换","LOTUS","随机元"] },
      { id: "kp-5-2", title: "推论：期望的分布函数表达", tags: ["期望","分布函数","Stieltjes"] },
      { id: "kp-5-3", title: "密度变换定理（定理3.3.2）", tags: ["密度","换测度","Radon-Nikodym"] },
      { id: "kp-5-4", title: "推论：连续型期望的密度积分", tags: ["密度","期望","连续型"] },
      { id: "kp-5-5", title: "单调收敛定理（定理3.4.1）", tags: ["MCT","单调收敛","极限交换"] },
      { id: "kp-5-6", title: "Fatou 引理（定理3.4.2）", tags: ["Fatou","下极限","不等式"] },
      { id: "kp-5-7", title: "控制收敛定理（定理3.4.3）", tags: ["DCT","控制收敛","支配函数"] },
      { id: "kp-5-8", title: "应用例：可积性的两个极限（习题4）", tags: ["一致可积","绝对连续","习题"] }
    ]
  }
,
  {
    id: "ch6",
    title: "第六讲 · 乘积测度与卷积",
    chapter: "Chapter 4",
    points: [
      { id: "kp-6-1", title: "乘积可测空间与乘积测度", tags: ["乘积σ代数", "乘积空间"] },
      { id: "kp-6-2", title: "乘积测度的存在唯一性（定理4.1.1）", tags: ["定理4.1.1", "Fubini"] },
      { id: "kp-6-3", title: "截口", tags: ["截口", "切片"] },
      { id: "kp-6-4", title: "乘积测度的 n 维推广", tags: ["n维", "迭代积分"] },
      { id: "kp-6-5", title: "独立与乘积测度（定理4.1.2）", tags: ["定理4.1.2", "独立性"] },
      { id: "kp-6-6", title: "卷积公式（二项分布可加性）", tags: ["卷积", "二项分布"] },
      { id: "kp-6-7", title: "初始分布与转移概率决定的测度", tags: ["链式法则", "条件概率"] },
      { id: "kp-6-8", title: "转移概率测度的定义", tags: ["转移概率", "马尔可夫"] },
      { id: "kp-6-9", title: "由初始分布与转移概率构造测度（定理4.1.3）", tags: ["定理4.1.3", "构造测度"] }
    ]
  }
,
  {
    id: "ch7",
    title: "第七讲 · Fubini定理与无穷乘积测度",
    chapter: "Chapter 4",
    points: [
      { id: "kp-7-1", title: "Fubini定理（非负情形）", tags: ["Fubini", "累次积分"] },
      { id: "kp-7-2", title: "Fubini定理（可积情形）", tags: ["Fubini", "可积"] },
      { id: "kp-7-3", title: "期望的尾积分公式", tags: ["期望", "尾概率"] },
      { id: "kp-7-4", title: "高阶矩的尾积分公式", tags: ["矩", "尾概率"] },
      { id: "kp-7-5", title: "级数与积分交换（计数测度）", tags: ["级数", "计数测度"] },
      { id: "kp-7-6", title: "转移概率测度下的Fubini", tags: ["转移概率", "条件期望"] },
      { id: "kp-7-7", title: "无穷乘积测度的存在唯一性", tags: ["乘积测度", "无穷乘积"] },
      { id: "kp-7-8", title: "乘积空间上的独立随机变量列", tags: ["独立", "i.i.d."] },
      { id: "kp-7-9", title: "无穷乘积集的测度", tags: ["乘积测度", "上连续性"] }
    ]
  }
,
  {
    id: "ch8",
    title: "第八讲 · 符号测度与Radon-Nikodym",
    chapter: "Chapter 5",
    points: [
      { id: "kp-8-1", title: "符号测度的定义", tags: ["符号测度", "可列可加", "signed measure"] },
      { id: "kp-8-2", title: "符号测度的极值分解(定理5.1.1)", tags: ["符号测度", "正集负集", "定理5.1.1"] },
      { id: "kp-8-3", title: "Hahn分解与Jordan分解(定理5.1.2)", tags: ["Hahn分解", "Jordan分解", "全变差", "定理5.1.2"] },
      { id: "kp-8-4", title: "μ-连续与μ-奇异", tags: ["绝对连续", "奇异", "支撑"] },
      { id: "kp-8-5", title: "Lebesgue分解定理(定理5.2.1)", tags: ["Lebesgue分解", "σ有限", "定理5.2.1"] },
      { id: "kp-8-6", title: "Radon-Nikodym定理与R-N导数(定理5.2.2)", tags: ["Radon-Nikodym", "R-N导数", "密度", "定理5.2.2"] },
      { id: "kp-8-7", title: "分布函数的Lebesgue分解(定理5.2.3)", tags: ["分布函数", "Lebesgue分解", "连续离散奇异", "定理5.2.3"] }
    ]
  }
,
  {
    id: "ch9",
    title: "第九讲 · 条件期望(定义)",
    chapter: "Chapter 5",
    points: [
      { id: "kp-9-1", title: "条件期望的定义(Radon-Nikodym导数)", tags: ["条件期望", "Radon-Nikodym", "定义"] },
      { id: "kp-9-2", title: "定义的四点注解(存在唯一性)", tags: ["条件期望", "唯一性", "注解", "条件概率"] },
      { id: "kp-9-3", title: "给定随机变量的条件期望E[X|Y]", tags: ["条件期望", "E[X|Y]", "Doob-Dynkin"] },
      { id: "kp-9-4", title: "引理:积分相等推a.s.相等", tags: ["引理", "a.s.", "积分", "唯一性"] },
      { id: "kp-9-5", title: "条件期望的判定命题", tags: ["条件期望", "判定", "命题"] },
      { id: "kp-9-6", title: "条件期望的基本性质", tags: ["条件期望", "线性", "全期望公式", "性质"] },
      { id: "kp-9-7", title: "连续型情形的条件期望(例)", tags: ["条件期望", "条件密度", "连续型", "例"] },
      { id: "kp-9-8", title: "原子上的条件期望", tags: ["条件期望", "原子", "atom"] }
    ]
  }
,
  {
    id: "ch10",
    title: "第十讲 · 条件期望(性质)",
    chapter: "Chapter 5",
    points: [
      { id: "kp-10-1", title: "独立则退化为期望(定理5.4.1(1))", tags: ["条件期望", "独立性", "定理5.4.1"] },
      { id: "kp-10-2", title: "可测因子提出(定理5.4.1(2))", tags: ["条件期望", "可测因子", "定理5.4.1"] },
      { id: "kp-10-3", title: "塔性质/嵌套(定理5.4.1(3))", tags: ["条件期望", "塔性质", "全期望", "定理5.4.1"] },
      { id: "kp-10-4", title: "条件Hölder与条件Jensen(定理5.4.2)", tags: ["条件期望", "Jensen", "Hölder", "定理5.4.2"] },
      { id: "kp-10-5", title: "独立时函数的条件期望(命题)", tags: ["条件期望", "独立性", "乘积测度", "命题"] },
      { id: "kp-10-6", title: "残差正交性(定理5.4.3)", tags: ["条件期望", "正交", "L2投影", "定理5.4.3"] },
      { id: "kp-10-7", title: "最佳预测/L2投影(推论)", tags: ["条件期望", "最佳预测", "均方误差", "推论"] }
    ]
  }
,
  {
    id: "ch11",
    title: "第十一讲 · 鞅与Markov过程",
    chapter: "鞅与Markov过程",
    points: [
      { id: "kp-11-1", title: "鞅的定义", tags: ["鞅", "上鞅", "下鞅", "滤波", "martingale"] },
      { id: "kp-11-2", title: "鞅的几个性质", tags: ["鞅", "凸函数", "Doob分解", "下鞅"] },
      { id: "kp-11-3", title: "独立和构成的鞅(例1、例2)", tags: ["鞅", "独立和", "随机游走"] },
      { id: "kp-11-4", title: "赌徒破产:停时有限(例3)", tags: ["停时", "赌徒破产", "Markov性"] },
      { id: "kp-11-5", title: "指数鞅与破产概率(例4)", tags: ["指数鞅", "可选停止", "破产概率"] },
      { id: "kp-11-6", title: "Polya盒子模型鞅(例5)", tags: ["鞅", "Polya罐", "盒子模型"] },
      { id: "kp-11-7", title: "Markov过程的定义", tags: ["Markov过程", "Markov性", "无记忆", "转移"] }
    ]
  }
,
  {
    id: "ch12",
    title: "第十二讲 · 几乎处处收敛与依概率收敛",
    chapter: "Chapter 6",
    points: [
      { id: "kp-12-1", title: "几乎处处收敛(定义与基本性质)", tags: ["a.s.收敛", "以概率1收敛", "随机变量序列"] },
      { id: "kp-12-2", title: "a.s.收敛的有用刻画(定理6.1.1)", tags: ["a.s.收敛", "定理6.1.1", "测度连续性"] },
      { id: "kp-12-3", title: "a.s.收敛的级数判据(推论)", tags: ["a.s.收敛", "级数判据", "推论"] },
      { id: "kp-12-4", title: "Borel-Cantelli引理", tags: ["Borel-Cantelli", "i.o.", "上极限事件"] },
      { id: "kp-12-5", title: "Borel 0-1律", tags: ["Borel 0-1律", "独立性", "i.o."] },
      { id: "kp-12-6", title: "依概率收敛(定义与基本性质)", tags: ["依概率收敛", "convergence in probability", "定义"] },
      { id: "kp-12-7", title: "a.s.收敛与依概率收敛的关系(定理6.2.1)", tags: ["依概率收敛", "a.s.收敛", "定理6.2.1", "子列"] }
    ]
  }
,
  {
    id: "ch13",
    title: "第十三讲 · Lr收敛与依分布收敛",
    chapter: "Chapter 6",
    points: [
      { id: "kp-13-1", title: "Lr收敛的定义与推论", tags: ["Lr收敛", "依概率收敛", "Markov不等式"] },
      { id: "kp-13-2", title: "Cr不等式", tags: ["Cr不等式", "Jensen不等式", "矩"] },
      { id: "kp-13-3", title: "Minkowski不等式", tags: ["Minkowski不等式", "范数", "Holder不等式"] },
      { id: "kp-13-4", title: "Lr收敛蕴含矩收敛", tags: ["矩收敛", "Linfty", "范数单调"] },
      { id: "kp-13-5", title: "Lr收敛与矩收敛的等价定理", tags: ["等价定理", "推广控制收敛", "可积控制"] },
      { id: "kp-13-6", title: "依分布收敛", tags: ["依分布收敛", "分布函数", "收敛关系链"] },
      { id: "kp-13-7", title: "淡收敛与弱收敛", tags: ["淡收敛", "弱收敛", "列紧性"] }
    ]
  }
,
  {
    id: "ch14",
    title: "第十四讲 · 弱收敛、Helly定理与大数定律",
    chapter: "Chapter 6~7",
    points: [
      { id: "kp-14-1", title: "Helly选择定理(定理6.4.2)", tags: ["Helly", "淡收敛", "紧性", "对角线方法", "定理6.4.2"] },
      { id: "kp-14-2", title: "淡收敛子列极限唯一则淡收敛(定理6.4.3)", tags: ["淡收敛", "子列", "反证法", "定理6.4.3"] },
      { id: "kp-14-3", title: "淡收敛极限为分布函数⟺tight(定理6.4.4)", tags: ["tight", "一致紧", "分布函数", "定理6.4.4"] },
      { id: "kp-14-4", title: "弱收敛的增量刻画与测度定义", tags: ["弱收敛", "依分布收敛", "测度", "命题"] },
      { id: "kp-14-5", title: "弱收敛的有界连续函数刻画(定理6.4.5)", tags: ["弱收敛", "连续映射定理", "有界连续函数", "定理6.4.5"] },
      { id: "kp-14-6", title: "弱大数定律(L²,定理7.1.1)", tags: ["大数定律", "L2收敛", "切比雪夫", "定理7.1.1"] },
      { id: "kp-14-7", title: "强大数定律(a.s.,定理7.1.2)", tags: ["大数定律", "几乎必然收敛", "Borel-Cantelli", "定理7.1.2"] },
      { id: "kp-14-8", title: "大数定律定义与放回抽样方差", tags: ["大数定律", "几何分布", "赠券收集", "方差"] }
    ]
  }
,
  {
    id: "ch15",
    title: "第十五讲 · 大数定律与特征函数、CLT",
    chapter: "Chapter 7~8",
    points: [
      { id: "kp-15-1", title: "弱大数定律判据(定理7.1.1)", tags: ["WLLN", "弱大数定律", "定理7.1.1"] },
      { id: "kp-15-2", title: "Kolmogorov强大数定律(定理7.3.1)", tags: ["SLLN", "Kolmogorov", "Kronecker引理"] },
      { id: "kp-15-3", title: "i.i.d.强大数定律(定理7.3.3)", tags: ["SLLN", "a.s.收敛", "定理7.3.3"] },
      { id: "kp-15-4", title: "特征函数的定义与性质", tags: ["特征函数", "傅里叶变换", "矩"] },
      { id: "kp-15-5", title: "常见分布的特征函数", tags: ["特征函数", "正态分布", "二项", "Poisson"] },
      { id: "kp-15-6", title: "连续性定理与唯一性定理", tags: ["唯一性定理", "连续性定理", "依分布收敛"] },
      { id: "kp-15-7", title: "多元特征函数与多维Gauss分布", tags: ["多维Gauss", "协方差矩阵", "正态分布"] },
      { id: "kp-15-8", title: "中心极限定理(定理8.2.1)", tags: ["CLT", "中心极限定理", "定理8.2.1"] },
      { id: "kp-15-9", title: "Lindeberg-Feller与Lyapunov定理", tags: ["CLT", "Lindeberg", "Lyapunov"] }
    ]
  }
];
