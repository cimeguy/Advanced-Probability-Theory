// CS 专业版：原版严格内容逐字保留 + CS视角注解(blockquote)叠加。
// 与 original.js 一致使用 String.raw，LaTeX 反斜杠保持单写。
// 注解块以 "> 💡 **CS视角**：" 开头，单独成段，紧跟在它解释的定义/公式/定理之后。
// 校验：剥掉所有以 > 开头的行后，剩余文本应与 original.js 对应内容一致。
window.V_cs = {
  "kp-1-1": String.raw`## 半（集）代数
若子集类 $\mathscr S$ 满足：
$$
\begin{aligned}
&(1)\ \Omega \in \mathscr S,\ \varnothing \in \mathscr S \\
&(2)\ A,B \in \mathscr S \Rightarrow AB\in \mathscr S \\
&(3)\ A, A_1 \in \mathscr S\ 且\ A_1 \subset A \Rightarrow \exists A_2,...,A_n \in \mathscr S\ 两两不交,\ A- A_1=\bigcup_{i=2}^n A_i
\end{aligned}
$$
则称 $\mathscr S$ 为半（集）代数。关键在第(3)条：大集合减去其中一个小集合后，差集可被有限个不交的成员"拼出来"。

> 💡 **CS视角**：半代数是最朴素的"事件积木"——一维区间族 $\{(a,b]\}$ 是典型例子：两区间求交仍是区间(或空)，对应条件(2)；但区间不对补封闭，所以只要求(3)"大区间挖掉子区间后能拆成有限段不相交区间"，正如线段树/区间切分里把一个区间减掉子区间得到有限个碎片。

> 📝 **例**：在区间半代数 $\mathscr S=\{(a,b]\}$ 中验证条件(3)：取大区间 $A=(0,10]$，子区间 $A_1=(3,5]\subset A$，把差集 $A-A_1$ 拆成有限个不交成员。
> **步骤1**：$A-A_1=(0,10]\setminus(3,5]$，即从 $0$ 到 $10$ 挖掉 $(3,5]$。
> **步骤2**：剩下两段 $A_2=(0,3]$ 与 $A_3=(5,10]$，二者都是 $\mathscr S$ 成员且 $A_2\cap A_3=\varnothing$。
> **步骤3**：验证拼回：$A_2\cup A_3=(0,3]\cup(5,10]=(0,10]\setminus(3,5]=A-A_1$。
> **结论**：差集被 $n-1=2$ 个不交区间覆盖，正是线段树把 $[0,10]$ 减去子段后裂成两段碎片的过程。`,

  "kp-1-2": String.raw`## （集）代数
若子集类 $\mathscr A$ 满足：
$$
\begin{aligned}
&(1)\ \Omega \in \mathscr A \\
&(2)\ A \in \mathscr A \Rightarrow A^C\in \mathscr A \\
&(3)\ A, B \in \mathscr A\Rightarrow AB \in \mathscr A
\end{aligned}
$$
则称 $\mathscr A$ 为（集）代数。代数对**补、有限交、有限并**封闭，是比半代数更强的结构。

> 💡 **CS视角**：代数对补、有限交、有限并封闭，相当于一个对有限次 AND/OR/NOT 封闭的事件 schema——像只支持有限步组合的布尔查询引擎：任意有限个谓词都能拼出可判定结果，但写不出"对可数无穷多个条件取并"这种查询，要支持可数无限运算就得升级成 $\sigma$ 代数。

> 📝 **例**：在 $\Omega=\{1,2,3,4\}$ 上，验证由原子集生成的最小代数对有限运算封闭。设 $A=\{1,2\},\ B=\{2,3\}$。
> **步骤1**：交 $AB=\{1,2\}\cap\{2,3\}=\{2\}$，仍在代数内(条件3)。
> **步骤2**：补 $A^C=\{3,4\},\ B^C=\{1,4\}$，均在代数内(条件2)。
> **步骤3**：并由 De Morgan 得到 $A\cup B=(A^C\cap B^C)^C=(\{4\})^C=\{1,2,3\}$。
> **结论**：$2$ 个谓词经 AND/OR/NOT 组合得到的结果全部落在 schema 内，这正是布尔查询引擎在有限步内可判定的写照。`,

  "kp-1-3": String.raw`## $\sigma$代数（$\sigma$域）
若子集类 $\mathscr F$ 满足：
$$
\begin{aligned}
&(1)\ \Omega \in \mathscr F \\
&(2)\ A \in \mathscr F\Rightarrow A^C\in \mathscr F \\
&(3)\ A_n \in \mathscr F,\ n\ge1\Rightarrow \bigcup_{n=1}^{\infty} A_n \in \mathscr F
\end{aligned}
$$
则称 $\mathscr F$ 为一 $\sigma$代数。与代数的唯一区别：第(3)条把"有限并"加强到"**可列并**"。$(\Omega,\mathscr F)$ 称为可测空间，$\mathscr F$ 即事件域。

> 💡 **CS视角**：把 $\sigma$ 代数 $\mathscr F$ 想成程序"可观测事件的 schema / 可查询字段"，每个 $A\in\mathscr F$ 对应一个返回 true/false 的判定字段；可列并封闭(第3条)保证你能对无穷事件流做 any / all 式聚合而结果仍可判定——这正是后面给事件赋概率得以良定义的前提。

> 📝 **例**：验证可列并封闭让 any/all 聚合可判定。取 $\Omega=\mathbb N^+$，事件流 $A_n=\{n\}$（第 $n$ 个数据点出错）。
> **步骤1**：每个 $A_n\in\mathscr F$，可列并 $\bigcup_{n\ge1}A_n=\{1,2,3,\dots\}=\Omega$，即"存在某点出错"(any)，由第(3)条仍在 $\mathscr F$。
> **步骤2**：取补 $\big(\bigcup_n A_n\big)^C=\varnothing$，即"全部无错"(all 的否定)，由第(2)条可判定。
> **步骤3**：由 De Morgan，可列交 $\bigcap_n A_n^C=\big(\bigcup_n A_n\big)^C=\varnothing$ 也在 $\mathscr F$ 内。
> **结论**：补 + 可列并 = 可列交，对无穷流的 any/all 聚合结果都落在 schema 内，故均可被赋概率。`,

  "kp-1-4": String.raw`## 生成 $\sigma$ 代数（命题1）
设 $\mathcal C$ 是任意子集类，则存在唯一的包含 $\mathcal C$ 的**最小** $\sigma$ 代数 $\sigma(\mathcal C)$，称为 $\mathcal C$ 生成的 $\sigma$ 代数。
$$
\sigma(\mathcal C) = \bigcap_{\mathcal F'\,为\sigma代数,\ \mathcal C \subset \mathcal F'}\mathcal F'
$$
满足条件的 $\sigma$ 代数存在（因 $\mathcal C \subset 2^{\Omega}$，而 $2^\Omega$ 本身是 $\sigma$ 代数），且任意多个 $\sigma$ 代数的交仍是 $\sigma$ 代数，故定义合理。

> 💡 **CS视角**：$\sigma(\mathcal C)$ 就是生成元 $\mathcal C$ 的"最小查询闭包"——类比从一组原子谓词出发取逻辑闭包、或正则/类型系统里的最小一致集合：把基础 token 在允许运算下反复组合再取交，得到不多不少的最小完备集。Borel 集 $\mathcal B=\sigma(\text{开集})$ 即由开区间生成的最小 $\sigma$ 代数。

> 📝 **例**：在 $\Omega=\{1,2,3,4\}$ 上求生成元 $\mathcal C=\{\{1\},\{2\}\}$ 的最小 $\sigma$ 代数 $\sigma(\mathcal C)$。
> **步骤1**：必含生成元与全集：$\{1\},\{2\},\Omega$。
> **步骤2**：补封闭：$\{1\}^C=\{2,3,4\}$，$\{2\}^C=\{1,3,4\}$。
> **步骤3**：并/交封闭：$\{1\}\cup\{2\}=\{1,2\}$ 及其补 $\{3,4\}$，再加 $\varnothing$。
> **结论**：$\sigma(\mathcal C)=\{\varnothing,\{1\},\{2\},\{1,2\},\{3,4\},\{2,3,4\},\{1,3,4\},\Omega\}$ 共 $8$ 个元素，恰是包含 $\mathcal C$ 的最小闭包，多一个少一个都不行。`,

  "kp-1-5": String.raw`## $\pi$ 系与 $\lambda$ 系
**$\pi$ 系**：若 $A,B\in \Pi \Rightarrow AB \in \Pi$（对有限交封闭）。

**$\lambda$ 系**：若 $\Lambda$ 满足
$$
\begin{aligned}
&(1)\ \Omega \in \Lambda \\
&(2)\ A,B \in \Lambda,\ A\subset B\Rightarrow B- A \in \Lambda \\
&(3)\ A_n \in \Lambda,\ A_n \uparrow\Rightarrow \bigcup_{n=1}^{\infty} A_n \in \Lambda
\end{aligned}
$$
$\pi$ 系 + $\lambda$ 系 $\Rightarrow$ $\sigma$ 代数。这是单调类定理的基石。

> 💡 **CS视角**：这是把 $\sigma$ 代数的封闭性拆成两个最小 trait：$\pi$ 系 = "可做交集"，$\lambda$ 系 = "可做包含差与单调极限"。能力分解后分别验证、再组合恢复出完整可测性，正是最小接口/能力组合的设计思路。

> 📝 **例**：在 $\Omega=\{1,2,3,4\}$ 上验证 $\Lambda=\{\varnothing,\{1,2\},\{3,4\},\Omega\}$ 是 $\lambda$ 系但不是 $\pi$ 系，再叠加交封闭升级。
> **步骤1**：查 $\lambda$ 系：含 $\Omega$；$\{1,2\}\subset\Omega$ 时 $\Omega-\{1,2\}=\{3,4\}\in\Lambda$；有限集无非平凡单调列，(3)自动满足。
> **步骤2**：查 $\pi$ 系失败：需要找一对成员其交不在内——这里任两个非空成员要么相等要么不交，交都在 $\Lambda$ 内，故 $\Lambda$ 恰好也是 $\pi$ 系。换 $\Pi=\{\{1,2\},\{2,3\}\}$，$\{1,2\}\cap\{2,3\}=\{2\}\notin\Pi$，故 $\Pi$ 非 $\pi$ 系。
> **步骤3**：把 $\{2\}$ 补进生成元后取闭包，交封闭与 $\lambda$ 性质同时成立。
> **结论**：$\pi$(交) + $\lambda$(差与单调并) 两个 trait 齐备即可恢复 $\sigma$ 代数，正是最小能力组合。`,

  "kp-1-6": String.raw`## 单调类
若子集类 $\mathscr M$ 满足：
$$
\begin{aligned}
&(1)\ A_n\in \mathscr M,\ A_n \uparrow \Rightarrow \bigcup_{n=1}^{\infty}A_n\in \mathscr M\ (对不降列的并封闭)\\
&(2)\ A_n\in \mathscr M,\ A_n \downarrow \Rightarrow \bigcap_{n=1}^{\infty}A_n\in \mathscr M\ (对不升列的交封闭)
\end{aligned}
$$
则称 $\mathscr M$ 为单调类。

> 💡 **CS视角**：单调类只对单调集列封闭，类比惰性/流式计算里只支持单调极限的结构——能对递增前缀取上确界、对递减序列取下确界(如单调栈、单调收敛迭代)，但不要求任意布尔组合；一旦再叠加"代数"的有限运算(定理1.1.2)就升级为完整 $\sigma$ 代数。

> 📝 **例**：在 $\Omega=\mathbb N^+$ 上验证单调类对递增前缀的并封闭。取 $A_n=\{1,2,\dots,n\}$（前 $n$ 个元素的窗口）。
> **步骤1**：检查递增：$A_1=\{1\}\subset A_2=\{1,2\}\subset A_3=\{1,2,3\}\subset\cdots$，故 $A_n\uparrow$。
> **步骤2**：取上确界(并)：$\bigcup_{n\ge1}A_n=\{1,2,3,\dots\}=\Omega$，由(1)留在单调类内。
> **步骤3**：对偶地取 $B_n=\{n,n+1,\dots\}$，则 $B_n\downarrow$ 且 $\bigcap_{n\ge1}B_n=\varnothing$，由(2)也在类内。
> **结论**：递增前缀的"上确界"与递减后缀的"下确界"都可求，恰如流式 scan 里前缀并、单调栈里逐步收缩，但单凭这点还不能做任意布尔组合。`,

  "kp-1-7": String.raw`## 定理1.1.1（$\lambda$-$\pi$ 系方法）
$$
\Lambda\,是\lambda系,\ \Pi\,是\pi系,\ 若\ \Pi \subset \Lambda,\ 那么\ \sigma(\Pi)\subset \Lambda
$$
**证明思路**：记 $\lambda(\Pi)$ 为包含 $\Pi$ 的最小 $\lambda$ 系。只需证 $\lambda(\Pi)=\sigma(\Pi)$。因 $\sigma$ 代数必是 $\lambda$ 系，故 $\lambda(\Pi)\subset\sigma(\Pi)$；反向只需证 $\lambda(\Pi)$ 为 $\sigma$ 代数，即证其对有限交封闭。固定 $A$，构造
$$
\Pi_A=\{B\in\lambda(\Pi):AB\in\lambda(\Pi)\}
$$
逐条验证 $\Pi_A$ 是 $\lambda$ 系，再由最小性得 $\Pi_A=\lambda(\Pi)$，从而交封闭成立。

> 💡 **CS视角**：$\lambda$-$\pi$ 方法是工程上最常用的"基例 + 闭包"式归纳证明：在最小生成集($\pi$ 系，如所有区间)上验证命题，再证"使命题成立的集合"对差与单调并封闭($\lambda$ 系)，结论就免费推广到全体可测事件。最常见用法：两个测度若在 $\pi$ 系上相等，则在 $\sigma(\Pi)$ 上处处相等。

> 📝 **例**：用 $\lambda$-$\pi$ 方法证两个测度相等。$\Omega=(0,1]$，$\Pi=\{(0,t]:0<t\le1\}$ 是 $\pi$ 系且 $\sigma(\Pi)=\mathcal B((0,1])$。设 $\mu,\nu$ 在 $\Pi$ 上一致：$\mu((0,t])=\nu((0,t])=t$。
> **步骤1**：$\Pi$ 是 $\pi$ 系：$(0,s]\cap(0,t]=(0,\min(s,t)]\in\Pi$。
> **步骤2**：令 $\Lambda=\{B\in\mathcal B:\mu(B)=\nu(B)\}$，验证它是 $\lambda$ 系：含 $\Omega$（取 $t=1$）；$A\subset B$ 时 $\mu(B-A)=\mu(B)-\mu(A)=\nu(B)-\nu(A)=\nu(B-A)$；$A_n\uparrow$ 时由连续性 $\mu(\bigcup A_n)=\lim\mu(A_n)=\lim\nu(A_n)=\nu(\bigcup A_n)$。
> **步骤3**：因 $\Pi\subset\Lambda$，由定理 $\sigma(\Pi)\subset\Lambda$，即 $\mu=\nu$ 在全体 Borel 集上。
> **结论**：只在区间这个"基例集"上对齐两个测度，闭包性质把相等性免费推广到整个 $\mathcal B$。`,

  "kp-1-8": String.raw`## 定理1.1.2（单调类定理·代数版）
$$
\mathscr M\,为单调类,\ \mathscr A\,为代数,\ 若\ \mathscr A\subset \mathscr M,\ 则\ \sigma(\mathscr A)\subset \mathscr M
$$
**证明（习题1）**：记 $M(\mathscr A)$ 为包含 $\mathscr A$ 的最小单调类，证 $M(\mathscr A)=\sigma(\mathscr A)$。关键构造
$$
S_A =\{B: B,\,A-B,\,B-A \in M(\mathscr A)\}
$$
证明 $S_A$ 为单调类、对 $A\in\mathscr A$ 及 $A\in M(\mathscr A)$ 均有 $S_A=M(\mathscr A)$，得 $M(\mathscr A)$ 对差/补封闭，进而为代数，最终由 $B_n=\bigcup_{i\le n}A_i\uparrow$ 得可列并封闭。

> 💡 **CS视角**：代数版同理——先在有限运算封闭的核心集(代数)上建立不变量，再证该不变量对单调极限稳定(单调类)，即可断言它在系统的整个可数闭包 $\sigma(\mathscr A)$ 上恒成立，等价于"先把 finite case 证好，再用单调收敛把结论推到极限"。

> 📝 **例**：用单调类定理把"有限并表示"推到可列并。$\Omega=(0,1]$，代数 $\mathscr A$ = 有限个左开右闭区间的并(有限并区间)，待证命题 $P$：集合可被这种有限并逼近。
> **步骤1**：基例(代数层)：$(0,0.3]\cup(0.5,0.7]\in\mathscr A$，有限运算封闭，$P$ 在 $\mathscr A$ 上成立。
> **步骤2**：单调极限：取递增列 $A_n=\bigcup_{i=1}^{n}\big(\tfrac{1}{2^{i}},\tfrac{1}{2^{i}}+\tfrac{1}{2^{i+1}}\big]\in\mathscr A$，$A_n\uparrow A=\bigcup_{i\ge1}(\cdots)$。
> **步骤3**：单调类对 $A_n\uparrow$ 的并封闭，故 $A\in M(\mathscr A)$，命题在极限上保持。
> **结论**：finite case 在代数上证好，单调收敛把结论推到可列闭包 $\sigma(\mathscr A)=\mathcal B((0,1])$，无需对每个 Borel 集单独验证。`,

  "kp-2-1": String.raw`## 可测空间与概率测度
$(\Omega,\mathcal F)$ 称为可测空间。设 $\mathbb P$ 是 $\mathcal F$ 上的集合函数，若
$$
\begin{aligned}
&(1)\ \mathbb P(A)\ge 0,\ \forall A \in \mathcal F \\
&(2)\ \mathbb P(\Omega)=1 \\
&(3)\ A_n \in \mathcal F\,互不相交\Rightarrow \mathbb P\Big(\bigcup_{n=1}^{\infty} A_n\Big)=\sum_{n=1}^{\infty} \mathbb P(A_n)
\end{aligned}
$$
则称 $\mathbb P$ 为概率测度，$(\Omega,\mathcal F,\mathbb P)$ 为概率空间。第(3)条即**可列可加性**。

> 💡 **CS视角**：概率测度 $\mathbb P$ 就是给事件 schema 里每个事件分一个 $[0,1]$ 的"归一化权重"，全集权重为 $1$——和 softmax 输出一组和为 $1$ 的权重同理。可列可加性(第3条)保证对互斥事件流做加权求和时既不重复计数也不漏算。

> 📝 **例**：在 $\Omega=\{1,2,3,4,5,6\}$（一颗均匀骰子）上验证概率测度三条公理，并用可列可加性算事件概率。$\mathbb P(\{k\})=\tfrac16$。
> **步骤1**：非负性：每个 $\mathbb P(\{k\})=\tfrac16\ge0$。
> **步骤2**：归一化：$\mathbb P(\Omega)=\sum_{k=1}^{6}\tfrac16=1$。
> **步骤3**：可加性算"点数为偶"$A=\{2,4,6\}$，三个单点互斥：$\mathbb P(A)=\tfrac16+\tfrac16+\tfrac16=\tfrac12$。
> **结论**：三条公理全部满足，权重和恰为 $1$，与 softmax 输出归一化分布同理。`,

  "kp-2-2": String.raw`## 概率测度的基本性质
$$
\begin{aligned}
&(1)\ \mathbb P(\varnothing) = 0 \\
&(2)\ 有限可加性 \\
&(3)\ 加法公式:\ \mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(AB) \\
&(4)\ 单调性:\ B\subset A \Rightarrow \mathbb P(A-B)=\mathbb P(A)-\mathbb P(B),\ 0\le\mathbb P\le 1 \\
&(5)\ 次可加性:\ \mathbb P\big(\bigcup A_i\big)\le \sum \mathbb P(A_i) \\
&(6)\ 连续性:\ A_n\,单调\Rightarrow \mathbb P(\lim_n A_n)=\lim_n \mathbb P(A_n)
\end{aligned}
$$
其中连续性（上/下连续）是可列可加性的等价刻画之一。

> 💡 **CS视角**：这些性质全部由三条公理推出，相当于归一化权重系统的"不变量库"：加法公式 $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(AB)$ 就是容斥原理，专治重复计数；次可加性 $\mathbb P(\bigcup A_i)\le\sum\mathbb P(A_i)$ 即 union bound(并发故障概率上界天天用)；连续性($A_n$ 单调时 $\mathbb P$ 可与 $\lim$ 交换)对应流式聚合里"极限可与累加交换"。

> 📝 **例**：用容斥与 union bound 算并发系统故障概率。3 个独立服务实例各以 $p=0.01$ 故障，记 $A_i$ 为第 $i$ 个故障。
> **步骤1**：容斥(两实例)：$\mathbb P(A_1\cup A_2)=0.01+0.01-\mathbb P(A_1A_2)=0.02-0.0001=0.0199$，扣掉重复计数的 $\mathbb P(A_1A_2)=0.0001$。
> **步骤2**：union bound 上界："至少一个故障" $\mathbb P(\bigcup_{i=1}^{3}A_i)\le\sum_{i=1}^3 0.01=0.03$。
> **步骤3**：精确值用补事件验算：$1-(1-0.01)^3=1-0.970299=0.029701\le0.03$，上界成立且很紧。
> **结论**：union bound 给的 $0.03$ 是简单可靠的故障率上界，与精确值 $0.0297$ 仅差万分之三，正是 SRE 估容量时常用的保守估计。`,

  "kp-2-3": String.raw`## 测度扩张定理（定理1.3.1）
$$
设\ \mathscr S\ 是半集代数,\ \mathbb P\ 是\ \mathscr S\ 上的概率测度,\ 则\ \mathbb P\ 可唯一地扩张成\ \sigma(\mathscr S)\ 上的概率测度。
$$
意义：只要在一个"生成元"半代数上合理地定义了概率，它就自动、且唯一地确定了整个 $\sigma$ 代数上的概率。证明较复杂（见课本60页），通常用外测度 + Carathéodory 方法。

> 💡 **CS视角**：扩张定理就是"由基例递归出全函数"：只要在生成元半代数(如区间)上把概率定义好，它就唯一地、自动地确定整个 $\sigma$ 代数上的概率——好比给递归函数定好基例与递推式，整个定义域上的取值便被唯一确定，唯一性即确定性，同一规则不会推出两套不同概率。

> 📝 **例**：在半代数 $\mathscr S=\{(a,b]\subset(0,1]\}$ 上定义 $\mathbb P((a,b])=b-a$，看它如何唯一确定一个本不在 $\mathscr S$ 内的集合的概率。
> **步骤1**：基例(半代数上)：$\mathbb P((0,0.5])=0.5,\ \mathbb P((0.5,0.8])=0.3$。
> **步骤2**：目标集 $E=(0,0.5]\cup(0.5,0.8]=(0,0.8]$ 是两不交成员的并，由可加性 $\mathbb P(E)=0.5+0.3=0.8$。
> **步骤3**：换一种切法 $E=(0,0.2]\cup(0.2,0.8]$ 验算：$0.2+0.6=0.8$，结果一致。
> **结论**：无论怎样用区间拼出 $E$，扩张得到的概率唯一为 $0.8$，正如递归函数由基例 + 递推式确定，定义域上取值唯一。`,

  "kp-2-4": String.raw`## $\mathbb R^d$ 上的分布函数与 L-S 测度
以 $d=1$ 为例，$F$ 为 $\mathbb R$ 上分布函数，取
$$
\mathscr S =\{(a,b],(-\infty ,b],(a, +\infty),\mathbb R\}
$$
为半代数，且 $\sigma(\mathscr S)=\sigma(\text{开集})=\mathcal B$（Borel 集）。定义
$$
\mathbb P((a, b]) = F(b) - F(a),\quad \mathbb P((-\infty, b]) = F(b),\quad \mathbb P((a, +\infty)) = 1-F(a)
$$
由扩张定理唯一扩张到 $\mathcal B$，称为 $F$ 决定的 **L-S 测度**；当 $F(x)=x$ 时即 Lebesgue 测度。$d>1$ 需附加"四边形条件"保证非负。

> 💡 **CS视角**：分布函数 $F$ 像一条单调不降的"累积权重曲线"(CDF / 前缀和)，区间概率 $\mathbb P((a,b])=F(b)-F(a)$ 就是前缀和作差，也正是逆变换采样 $F^{-1}(U)$ 的依据；用扩张定理把这套权重铺满 $\mathcal B$ 得到 L-S 测度，$F(x)=x$ 时退化为"长度"即 Lebesgue 测度。

> 📝 **例**：用指数分布 CDF $F(x)=1-e^{-x}\ (x\ge0)$ 做逆变换采样并算区间概率。
> **步骤1**：区间概率(前缀和作差)：$\mathbb P((0,\ln 2])=F(\ln 2)-F(0)=(1-e^{-\ln2})-0=1-\tfrac12=\tfrac12$。
> **步骤2**：求逆 CDF：令 $u=1-e^{-x}$，解得 $x=F^{-1}(u)=-\ln(1-u)$。
> **步骤3**：取均匀样本 $U=0.5$，则采样值 $X=-\ln(1-0.5)=\ln 2\approx0.693$。
> **结论**：$U=0.5$ 恰好落在使 $\mathbb P((0,X])=0.5$ 的位置，逆变换采样把均匀随机数 $U$ 映射成服从 $F$ 的样本，正是 numpy 生成指数分布的底层做法。`,

  "kp-2-5": String.raw`## 随机变量的定义
设 $(\Omega,\mathcal F,\mathbb P)$ 为概率空间，$X:\Omega\to\mathbb R^d$，若
$$
\forall B \in \mathcal B^d,\ \{X\in B\}=\{w:X(w)\in B\}\in\mathcal F
$$
则称 $X$ 为（实）随机变量（可测映射）。等价地 $X^{-1}(\mathcal B^d)\subset\mathcal F$。一般地，取值于可测空间 $(E,\mathcal E)$ 的可测映射称为**随机元**。

> 💡 **CS视角**：随机变量 $X$ 是一个"类型安全的映射" $\Omega\to\mathbb R^d$：要求任意目标 Borel 集 $B$ 的原像 $\{X\in B\}=X^{-1}(B)$ 都落在源 schema $\mathcal F$ 里，即 $X^{-1}(\mathcal B^d)\subset\mathcal F$——保证"凡是关于输出的可判定问题，都能翻译回输入侧的合法事件"，不会逃逸出可观测范围。

> 📝 **例**：在均匀骰子 $\Omega=\{1,\dots,6\}$、$\mathcal F=2^\Omega$ 上，定义 $X(w)=w \bmod 2$（奇偶位），验证它是随机变量。
> **步骤1**：取目标 Borel 集 $B=\{1\}$（"结果为奇"），求原像 $X^{-1}(\{1\})=\{1,3,5\}$。
> **步骤2**：检查 $\{1,3,5\}\in\mathcal F=2^\Omega$，成立；同理 $X^{-1}(\{0\})=\{2,4,6\}\in\mathcal F$。
> **步骤3**：其余 Borel 集 $B$ 的原像只能是 $\varnothing,\{1,3,5\},\{2,4,6\},\Omega$ 四者之一，全在 $\mathcal F$ 内。
> **结论**：每个输出侧查询都能翻译回输入侧合法事件，$X$ 是类型安全的可测映射。`,

  "kp-2-6": String.raw`## 随机变量的判定（定理2.1.1）
$$
X\,是一维实随机变量\iff \{X\le a\}\in\mathcal F,\ \forall a \iff \{X<a\}\in\mathcal F \iff \{X\ge a\}\in\mathcal F \iff \{X>a\}\in\mathcal F
$$
**证明（第一个等价）**：$\Rightarrow$ 取 $B=(-\infty,a]$。$\Leftarrow$ 令 $\Pi=\{B\in\mathcal B:X^{-1}(B)\in\mathcal F\}$，验证半代数 $C=\{(a,b]\}\subset\Pi$、$C$ 为 $\pi$ 系、$\Pi$ 为 $\lambda$ 系，由 $\lambda$-$\pi$ 方法得 $\Pi\supset\sigma(C)=\mathcal B$。

> 💡 **CS视角**：判定定理说，不必对所有 Borel 集 $B$ 验证可测，只需对最简单的一族阈值查询 $\{X\le a\}$ 验证即可——典型的"只在生成元上做单元测试"。证明正是用 $\lambda$-$\pi$ 方法把可测性从区间这个 $\pi$ 系撒网到整个 $\mathcal B$。

> 📝 **例**：在均匀骰子 $\Omega=\{1,\dots,6\}$、$\mathcal F=2^\Omega$ 上，仅用阈值查询 $\{X\le a\}$ 判定 $X(w)=w$ 可测。
> **步骤1**：$a<1$ 时 $\{X\le a\}=\varnothing\in\mathcal F$。
> **步骤2**：$1\le a<2$ 时 $\{X\le a\}=\{1\}\in\mathcal F$；一般 $k\le a<k+1$ 时 $\{X\le a\}=\{1,\dots,k\}\in\mathcal F$。
> **步骤3**：$a\ge6$ 时 $\{X\le a\}=\Omega\in\mathcal F$；所有阈值查询都通过。
> **结论**：只验证了一族 $\{X\le a\}$（而非全部 $2^6=64$ 个事件），由判定定理即知 $X$ 可测——生成元上的单元测试覆盖了全空间。`,

  "kp-2-7": String.raw`## 示性函数（例1 / 习题1）
对 $A\subset\Omega$，定义
$$
1_A(w)=\begin{cases}1,& w\in A\\ 0,& w\in A^C\end{cases}
$$
则 $1_A$ 是可测函数 $\iff A\in\mathcal F$。
**证**：因为
$$
\{w:1_A(w)\le x\}=\begin{cases}\Omega,& x\ge 1\\ A^C,& 0<x<1\\ \varnothing,& x\le 0\end{cases}
$$
故可测当且仅当 $A^C\in\mathcal F$，即 $A\in\mathcal F$。

> 💡 **CS视角**：示性函数 $1_A$ 就是事件 $A$ 的 0/1 开关(布尔转 one-hot / 布尔 mask)，是搭建一切随机变量的最小积木；它把"集合可测 $A\in\mathcal F$"与"函数可测"精确对应起来，是 schema 与映射两套语言之间的接口。

> 📝 **例**：在均匀骰子上用示性函数 $1_A$ 表示"点数 $>4$"事件 $A=\{5,6\}$，验证 $\{1_A\le x\}$ 的三段刻画。
> **步骤1**：$x\ge1$ 时 $\{1_A\le x\}=\Omega=\{1,\dots,6\}\in\mathcal F$（恒满足）。
> **步骤2**：$0<x<1$ 时 $\{1_A\le x\}=A^C=\{1,2,3,4\}\in\mathcal F$（取 $0$ 的点）。
> **步骤3**：$x\le0$ 时 $\{1_A\le x\}=\varnothing\in\mathcal F$。
> **结论**：三段都落在 $\mathcal F$ 内当且仅当 $A=\{5,6\}\in\mathcal F$，$1_A$ 正是把 mask $[0,0,0,0,1,1]$ 编码成可测函数。`,

  "kp-2-8": String.raw`## 随机变量的基本性质
$$
\begin{aligned}
&(1)\ X\,实r.v \Rightarrow aX\,实r.v \\
&(2)\ X,Y\,实r.v \Rightarrow XY\,实r.v \\
&(3)\ X\in\mathbb R^d,\ f\,连续 \Rightarrow f(X)\,实r.v \\
&(4)\ X\,为E值r.v,\ f\,可测 \Rightarrow f(X)\,可测 \\
&(5)\ X\wedge Y,\ X\vee Y,\ X^+,\ X^-,\ |X|\,均为实r.v \\
&(6)\ \inf X_n,\ \sup X_n,\ \varliminf X_n,\ \varlimsup X_n,\ \lim X_n\,均为实r.v
\end{aligned}
$$
其中 $X+Y$ 可测的证明用有理数稠密性：$\{X+Y<z\}=\bigcup_i\{X<r_i\}\cap\{Y<z-r_i\}$。

> 💡 **CS视角**：随机变量对 $aX$、$X+Y$、$XY$、$\max/\min$、$|X|$、$\sup/\inf/\lim$ 等运算封闭——等价于"类型安全映射"在常见组合算子下保持类型不变(纯函数/张量算子的闭包)，组合再多也不会算出界，可放心地继续谈其概率与分布。

> 💡 **CS视角**：$X+Y$ 可测的证明把 $\{X+Y<z\}$ 写成对有理数 $r_i$ 的可数并 $\bigcup_i\{X<r_i\}\cap\{Y<z-r_i\}$，正是"用可数枚举(有理数稠密)覆盖连续约束"的技巧——把不可数的实数条件离散化成可数个可判定事件。

> 📝 **例**：两颗均匀骰子 $X,Y$ 独立，用随机变量的运算封闭性求 $Z=X+Y$ 的分布并验算。
> **步骤1**：$X,Y$ 各取 $1\sim6$，由性质(2)/有理逼近知 $Z=X+Y$ 仍是随机变量，取值 $2\sim12$。
> **步骤2**：数取法：$\mathbb P(Z=7)=\tfrac{6}{36}=\tfrac16$（$(1,6),(2,5),\dots,(6,1)$ 共 $6$ 种），$\mathbb P(Z=2)=\tfrac{1}{36}$。
> **步骤3**：验算归一：$\sum_{z=2}^{12}\mathbb P(Z=z)=\tfrac{1+2+3+4+5+6+5+4+3+2+1}{36}=\tfrac{36}{36}=1$。
> **结论**：$X+Y$ 既可测又有良定义分布，三角形分布的峰在 $7$，正是两个均匀随机变量卷积的结果。`,

  "kp-3-1": String.raw`## 简单随机变量与初等随机变量
设 $(\Omega,\mathcal F,\mathbb P)$ 为概率空间。形如
$$
X =\sum_{i=1}^n a_i 1_{A_i},\quad A_i \in \mathcal F,\ \bigsqcup_{i=1}^n A_i =\Omega
$$
的 $X$ 为**简单随机变量**（有限个取值）；将 $n$ 换成 $\infty$ 即
$$
X =\sum_{i=1}^\infty a_i 1_{A_i}
$$
为**初等随机变量**（可列个取值）。它们是构造一般随机变量与积分的基石。

> 💡 **CS视角**：简单随机变量 $\sum a_i 1_{A_i}$ 就是把 $\Omega$ 划分成有限块、每块赋一个常数的"分段常值函数 / 有限码本量化器 / lookup 表"(有限取值)；项数换成可列即初等随机变量(码本放大到可数无穷)。它们是逼近任意随机变量与定义积分的台阶单元。

> 📝 **例**：在均匀骰子上用简单随机变量定义一个"奖金 lookup 表"$X$：点数 $\le2$ 赔 $0$，$3\sim4$ 赔 $5$，$\ge5$ 赔 $10$。
> **步骤1**：划分 $A_1=\{1,2\},A_2=\{3,4\},A_3=\{5,6\}$，三块不交且并为 $\Omega$。
> **步骤2**：写成 $X=0\cdot1_{A_1}+5\cdot1_{A_2}+10\cdot1_{A_3}$，这是有限取值 $\{0,5,10\}$ 的分段常值函数。
> **步骤3**：各块概率 $\mathbb P(A_i)=\tfrac26=\tfrac13$，期望 $\mathbb E X=0\cdot\tfrac13+5\cdot\tfrac13+10\cdot\tfrac13=5$。
> **结论**：$X$ 就是一张三档 lookup 表，期望 $5$ 即各档赔付的加权平均，正是简单随机变量作为积分台阶的最小用例。`,

  "kp-3-2": String.raw`## 非负 r.v 的阶梯逼近（定理2.2.1）
$$
\begin{aligned}
&(1)\ X\ge0 \Rightarrow \exists\,非负简单\,X_n\uparrow X \\
&(2)\ X\ge0 \Rightarrow \exists\,非负初等\,X_n\uparrow X\,(一致) \\
&(3)\ X\,有界 \Rightarrow \exists\,简单\,X_n,\ |X_n|\le|X|,\ X_n\to X\,(一致) \\
&(4)\ 一般\,X \Rightarrow \exists\,简单\,X_n,\ |X_n|\le|X|,\ X_n\to X
\end{aligned}
$$
**关键构造**（截断 + 二进制细分）：
$$
X_n =\sum_{k=1}^{n2^n} \frac{k-1}{2^n}\,1_{\{\frac{k-1}{2^n}\le X<\frac{k}{2^n}\}}+ n\,1_{\{X\ge n\}}
$$
可证 $X_n\uparrow$ 且 $|X_n-X|<2^{-n}$（当 $X<\infty$）。一般情形用 $X=X^+-X^-$ 分解。

> 💡 **CS视角**：阶梯逼近就是"量化 / 离散化"：截断到 $n$ 再按步长 $2^{-n}$ 二进制细分，等价于把连续值量化成 $n2^n$ 个 bucket，精度随 $n$ 翻倍提升($|X_n-X|<2^{-n}$)；$X_n\uparrow X$ 的单调收敛对应"逐步细化精度、误差单调下降"，与定点/浮点量化逐位增加 mantissa、以及渐进式渲染完全一致。

> 📝 **例**：对常值 $X\equiv 0.7$ 按构造 $X_n=\frac{\lfloor 2^n X\rfloor}{2^n}$ 计算前几级阶梯逼近，看误差如何随 $n$ 下降。
> **步骤1**：$n=1$，$\lfloor 2\cdot0.7\rfloor=\lfloor1.4\rfloor=1$，$X_1=\tfrac{1}{2}=0.5$，误差 $0.7-0.5=0.2<2^{-1}=0.5$。
> **步骤2**：$n=2$，$\lfloor 4\cdot0.7\rfloor=\lfloor2.8\rfloor=2$，$X_2=\tfrac{2}{4}=0.5$，误差 $0.2<2^{-2}=0.25$。
> **步骤3**：$n=3$，$\lfloor 8\cdot0.7\rfloor=\lfloor5.6\rfloor=5$，$X_3=\tfrac{5}{8}=0.625$，误差 $0.075<2^{-3}=0.125$。
> **结论**：$X_1=0.5\le X_2=0.5\le X_3=0.625\uparrow 0.7$，单调递增且误差始终被 $2^{-n}$ 控制，正是定点量化逐位收敛、误差减半的过程。`,

  "kp-3-3": String.raw`## $\sigma(X)$ 可测性（定理2.2.2，Doob-Dynkin）
$$
设\ \sigma(X)=X^{-1}(\mathcal B^d),\ Y:\Omega\to\mathbb R,\ 则\ Y\,关于\,\sigma(X)\,可测\iff \exists\,可测\,g,\ Y=g(X)
$$
即 "$Y$ 由 $X$ 决定" 等价于 "$Y$ 是 $X$ 的某个 Borel 函数"。
**思路**：先对示性函数 $Y=1_A$（$A=X^{-1}(B)$）有 $1_A=1_B\circ X$；再推广到简单函数；最后由定理2.2.1 取极限至一般 $Y$。

> 💡 **CS视角**：Doob-Dynkin 说"$Y$ 关于 $\sigma(X)$ 可测 $\iff Y=g(X)$"——即 $Y$ 是 $X$ 的"纯函数"：输出只依赖 $X$ 提供的信息，没有任何隐藏输入。这正是特征工程的本质：凡只基于特征 $X$ 的判断/标签，都能写成 $X$ 的某个(Borel)函数 $g$。

> 📝 **例**：骰子 $\Omega=\{1,\dots,6\}$，特征 $X(w)=w\bmod 2$（奇偶），判定标签 $Y$ 能否写成 $g(X)$。
> **步骤1**：$\sigma(X)=\{\varnothing,\{1,3,5\},\{2,4,6\},\Omega\}$，只能区分"奇/偶"两类。
> **步骤2**：标签 $Y_1(w)=1_{\{w\text{ 为奇}\}}$，在每个 $X$ 类内取值恒定（奇类全 $1$、偶类全 $0$），故 $Y_1=g(X)$，取 $g(1)=1,g(0)=0$。
> **步骤3**：标签 $Y_2(w)=1_{\{w\ge4\}}$，在奇类 $\{1,3,5\}$ 上取 $0,0,1$ 不恒定，故 $Y_2$ 关于 $\sigma(X)$ 不可测，无法写成 $g(X)$。
> **结论**：只有"在特征等价类内恒定"的标签才是 $X$ 的纯函数；$Y_2$ 需要 $X$ 之外的信息(具体点数)，正是特征不足导致不可学的写照。`,

  "kp-3-4": String.raw`## 随机变量的概率分布
设 $X$ 取值于 $(\mathbb R^d,\mathcal B^d)$，定义
$$
\mu_X(B) = \mathbb P(X\in B),\quad B\in\mathcal B^d
$$
则 $\mu_X$ 是 $(\mathbb R^d,\mathcal B^d)$ 上的概率测度，称为 $X$（在 $\mathbb P$ 下）的**概率分布**。它是 $\mathbb P$ 沿 $X$ 的 pushforward（像测度）。

> 💡 **CS视角**：分布 $\mu_X(B)=\mathbb P(X\in B)$ 是 $\mathbb P$ 沿 $X$ 的 **pushforward(像测度)**——把源空间的权重"推送"到数轴上，正对应采样分布：我们通常不关心原始 $\Omega$，只关心 $X$ 输出端的概率，$\mu_X$ 就是打包好的采样/输出分布。

> 📝 **例**：均匀骰子 $\Omega=\{1,\dots,6\}$，$X(w)=w\bmod 2$，计算 pushforward 分布 $\mu_X$。
> **步骤1**：奇偶映射把 $\{1,3,5\}\mapsto1$、$\{2,4,6\}\mapsto0$。
> **步骤2**：推送权重 $\mu_X(\{1\})=\mathbb P(X^{-1}(\{1\}))=\mathbb P(\{1,3,5\})=\tfrac36=\tfrac12$。
> **步骤3**：同理 $\mu_X(\{0\})=\mathbb P(\{2,4,6\})=\tfrac12$，验算 $\mu_X(\{0\})+\mu_X(\{1\})=1$。
> **结论**：原始 $6$ 面骰子的权重被 $X$ 推送成数轴上 $\{0,1\}$ 各 $\tfrac12$ 的伯努利分布——这就是我们真正关心的输出端采样分布。`,

  "kp-3-5": String.raw`## 分布函数
$$
F(x_1,...,x_d)=\mu_X\big((-\infty,x_1]\times\cdots\times(-\infty,x_d]\big)=\mathbb P(X_1\le x_1,...,X_d\le x_d)
$$
分布函数 $F$ 与分布 $\mu_X$ 一一对应（经 L-S 测度），是描述随机变量的常用工具。

> 💡 **CS视角**：$F$ 是分布 $\mu_X$ 的"累积曲线(CDF)"，与 $\mu_X$ 一一对应；查 $F$ 即查表得任意区间概率 $\mathbb P(a<X\le b)=F(b)-F(a)$，也是逆变换采样(inverse-CDF sampling)的直接依据。

> 📝 **例**：均匀骰子 $X(w)=w$，写出阶梯 CDF 并查表算区间概率。
> **步骤1**：$F(x)=\mathbb P(X\le x)=\tfrac{\lfloor x\rfloor}{6}$（$1\le x\le6$），如 $F(3)=\tfrac36=\tfrac12$，$F(5)=\tfrac56$。
> **步骤2**：查表算 $\mathbb P(3<X\le5)=F(5)-F(3)=\tfrac56-\tfrac36=\tfrac26=\tfrac13$。
> **步骤3**：验算：$\{3<X\le5\}=\{4,5\}$，直接计数 $\tfrac26=\tfrac13$，与查表一致。
> **结论**：CDF 作差即区间概率，逆查 $F^{-1}(0.5)$ 落在点 $3$ 处，正是 inverse-CDF 采样离散分布的查表实现。`,

  "kp-3-6": String.raw`## 分布的存在性（定理2.3.1）
$$
任意\,\mathbb R^d\,上概率测度\,\mu,\ 一定存在r.v\,使其分布为\,\mu
$$
**证明（典则构造）**：取 $(\Omega,\mathcal F,\mathbb P)=(\mathbb R^d,\mathcal B^d,\mu)$，定义 $X(w)=w$。则
$$
X^{-1}(B)=B\in\mathcal B^d=\mathcal F\ (可测),\qquad \mu_X(B)=\mathbb P(X\in B)=\mu(B)
$$
故 $X$ 的分布恰为 $\mu$。等价地：任意分布函数 $F$ 都有 r.v 以其为分布函数。

> 💡 **CS视角**：典则构造 $(\Omega,\mathcal F,\mathbb P)=(\mathbb R^d,\mathcal B^d,\mu)$、$X(w)=w$ 就是"让样本点自己当数值"的恒等映射——任何想要的分布都造得出来，对应 np.random 里"先指定目标分布、再保证存在一个采样器实现它"的可实现性保证。

> 📝 **例**：用典则构造造一个服从伯努利 $\mu(\{1\})=0.3,\mu(\{0\})=0.7$ 的随机变量。
> **步骤1**：取 $\Omega=\{0,1\}$，$\mathcal F=2^\Omega$，$\mathbb P=\mu$，恒等映射 $X(w)=w$。
> **步骤2**：验可测：$X^{-1}(\{1\})=\{1\}\in\mathcal F$，$X^{-1}(\{0\})=\{0\}\in\mathcal F$。
> **步骤3**：验分布：$\mu_X(\{1\})=\mathbb P(X=1)=\mathbb P(\{1\})=0.3$，恰为目标 $\mu$。
> **结论**：样本点自己当数值即可实现任意指定分布，正是 np.random 先定分布、必有采样器的可实现性保证。`,

  "kp-3-7": String.raw`## 例：二项分布 $b(n,p)$ 的构造
**构造一**：取 $\Omega=\{0,1,...,n\}$，$\mathcal F=2^\Omega$，
$$
\mu(\{k\})=C_n^k p^k(1-p)^{n-k},\qquad X(w)=w
$$
**构造二**（更本质）：取 $\Omega=\{0,1\}^n$，对 $w=(w_1,...,w_n)$，
$$
\mathbb P(\{w\})=p^k(1-p)^{n-k}\ (k=\#\{i:w_i=1\}),\qquad X(w)=\#\{i:w_i=1\}
$$
则 $\mathbb P(X=k)=C_n^k p^k(1-p)^{n-k}$。构造二把二项分布还原为 $n$ 次独立伯努利试验。

> 💡 **CS视角**：构造二把二项分布还原为 $n$ 次独立伯努利试验，$\Omega=\{0,1\}^n$、$X(w)=\#\{i:w_i=1\}$——这正是 np.random.binomial(n,p) 背后的概率空间：底层等价于掷 $n$ 枚成功率 $p$ 的硬币再数成功数，$X$ 就是这串比特的 popcount(汉明重量)。

> 📝 **例**：取 $n=3,p=0.5$，用构造二在 $\Omega=\{0,1\}^3$ 上算 $X=\text{popcount}$ 的分布。
> **步骤1**：$8$ 个比特串等概率，每个 $\mathbb P(\{w\})=0.5^3=\tfrac18$。
> **步骤2**：按 popcount 分桶：$k=0$ 有 $\{000\}$ 共 $C_3^0=1$ 个；$k=1$ 有 $C_3^1=3$ 个；$k=2$ 有 $C_3^2=3$ 个；$k=3$ 有 $C_3^3=1$ 个。
> **步骤3**：分布 $\mathbb P(X=k)=C_3^k\tfrac18$：得 $\tfrac18,\tfrac38,\tfrac38,\tfrac18$，与公式 $C_3^k0.5^k0.5^{3-k}$ 一致。
> **结论**：概率和 $\tfrac{1+3+3+1}{8}=1$，二项分布 $b(3,0.5)$ 就是对 $3$ 位随机比特数 popcount 的分布，峰在 $k=1,2$。`,

  "kp-4-1": String.raw`## 事件类的独立性
设 $\mathcal C_1,...,\mathcal C_n$ 是 $n$ 个事件类，称它们**相互独立**，若
$$
\forall A_{i_j}\in\mathcal C_{i_j},\ 1\le i_1<\cdots<i_k\le n,\quad \mathbb P(A_{i_1}\cdots A_{i_k})=\mathbb P(A_{i_1})\cdots\mathbb P(A_{i_k})
$$
即从中任取有限个类、各取一个事件，其交事件的概率等于各自概率之积。

> 💡 **CS视角**：独立 = 联合分布可分解为因子之积。这正是朴素贝叶斯(Naive Bayes)的核心假设：给定类别 $y$，各特征 $x_i$ 条件独立，于是 $\mathbb P(x_1,...,x_d\mid y)=\prod_i\mathbb P(x_i\mid y)$——把指数级的联合概率表压成 $d$ 个一维表，训练与推断都变成连乘(对数下变求和)。

> 💡 **CS视角**：注意「两两独立」严格弱于「相互独立」。定义要求对**任意子集**都能分解，而非只看成对——这也是为什么概率图模型(贝叶斯网/马尔可夫网)要用整张图而非两两边来刻画独立结构。

> 📝 **例**：掷两枚均匀硬币，事件 $A=$ 第一枚正面，$B=$ 第二枚正面，验证独立性。
> **步骤1**：样本空间 $\Omega=\{HH,HT,TH,TT\}$ 等概率，每个结果 $\mathbb P=\tfrac14$。
> **步骤2**：$A=\{HH,HT\}$ 故 $\mathbb P(A)=\tfrac24=\tfrac12$；$B=\{HH,TH\}$ 故 $\mathbb P(B)=\tfrac12$。
> **步骤3**：$AB=\{HH\}$ 故 $\mathbb P(AB)=\tfrac14$，而 $\mathbb P(A)\mathbb P(B)=\tfrac12\cdot\tfrac12=\tfrac14$。
> **结论**：$\mathbb P(AB)=\mathbb P(A)\mathbb P(B)$，两事件独立——对应两次抛掷在程序里就是两个互不影响的随机比特。`,

  "kp-4-2": String.raw`## 随机变量的独立性
设 $X_1,...,X_n$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上取值于 $\mathbb R^d$ 的随机变量（向量），若 $\forall B_1,...,B_n\in\mathcal B^d$，
$$
\mathbb P(X_1\in B_1,...,X_n\in B_n)=\mathbb P(X_1\in B_1)\cdots\mathbb P(X_n\in B_n)
$$
则称 $X_1,...,X_n$ **相互独立**。

> 💡 **CS视角**：r.v 独立 = 对任意可测事件组合联合概率都可因子化。在机器学习里这对应 i.i.d. 假设：训练样本 $X_1,...,X_n$ 独立同分布，于是似然 $\prod_i p(X_i)$ 可分解，最大似然估计才能化为对样本求和。

> 💡 **CS视角**：采样实现上，np.random.rand(n) 一次生成的 $n$ 个数被当作独立 r.v，本质是底层伪随机流的不同抽取互不影响——独立性是「联合分布 = 边缘分布连乘」这一可分解性的数学化。

> 📝 **例**：两颗独立均匀骰子 $X_1,X_2\in\{1,...,6\}$，求 $\mathbb P(X_1=1,\ X_2\in\{2,4,6\})$。
> **步骤1**：$\mathbb P(X_1=1)=\tfrac16$。
> **步骤2**：$\mathbb P(X_2\in\{2,4,6\})=\tfrac36=\tfrac12$。
> **步骤3**：由独立性 $\mathbb P(X_1=1,X_2\in\{2,4,6\})=\tfrac16\cdot\tfrac12=\tfrac1{12}$。
> **结论**：联合概率 = 边缘概率之积 $\tfrac1{12}$——两个独立随机源的事件交，直接相乘即可。`,

  "kp-4-3": String.raw`## 独立性的分布函数刻画（定理2.4.1）
$$
X_1,...,X_n\,相互独立 \iff F(x_1,...,x_n)=F_1(x_1)\cdots F_n(x_n),\ \forall x_i
$$
其中 $F$ 是 $(X_1,...,X_n)$ 的联合分布函数，$F_i$ 是 $X_i$ 的边缘分布函数。

**证明（$d=1$）**：$\Rightarrow$ 取 $B_i=(-\infty,x_i]$ 即得。

$\Leftarrow$ 先证 $n=2$。令 $\mathcal C=\{(-\infty,a]:a\in\mathbb R\}$（$\pi$ 系，$\sigma(\mathcal C)=\mathcal B$）。固定 $x_1$，令
$$
\Lambda=\{B_2\in\mathcal B:\mathbb P(X_1\in(-\infty,x_1],X_2\in B_2)=\mathbb P(X_1\in(-\infty,x_1])\mathbb P(X_2\in B_2)\}
$$
验证 $\Lambda$ 为 $\lambda$ 系（含 $\mathbb R$、对真差封闭、对不降列并封闭），且 $\mathcal C\subset\Lambda$，由 $\lambda$-$\pi$ 方法得 $\Lambda=\mathcal B$。再固定 $B_2$，对 $B_1$ 同样构造 $\Lambda^*$ 并验证，得对任意 $B_1,B_2\in\mathcal B$ 成立。

> 💡 **CS视角**：这条定理把「对所有 Borel 集都要分解」简化为「只需 CDF 处处相乘」。工程上 CDF 易于列表/插值，于是检验独立性或构造独立样本(逆变换采样)时，只要让联合 CDF 等于各分量 CDF 之积即可，无需遍历不可数的事件。

> 💡 **CS视角**：证明用的 $\lambda$-$\pi$ 方法是「在生成元(半开区间这个 $\pi$ 系)上验证，再扩张到整个 $\sigma$ 代数」——和软件测试里「在一组基测试上通过即覆盖全部行为」的归纳思想同构。

> 📝 **例**：$X_1,X_2$ 独立且都 $\sim U[0,1]$，验证联合 CDF 在点 $(0.5,0.4)$ 处等于边缘之积。
> **步骤1**：$U[0,1]$ 的 CDF 为 $F_i(x)=x\ (0\le x\le1)$，故 $F_1(0.5)=0.5$，$F_2(0.4)=0.4$。
> **步骤2**：独立时联合 CDF $F(x_1,x_2)=F_1(x_1)F_2(x_2)=x_1x_2$。
> **步骤3**：代入 $F(0.5,0.4)=0.5\times0.4=0.20$，恰等于 $F_1(0.5)F_2(0.4)=0.20$。
> **结论**：联合 CDF = 边缘 CDF 之积，独立性成立——单位正方形里落在 $[0,0.5]\times[0,0.4]$ 的概率就是面积 $0.20$。`,

  "kp-4-4": String.raw`## 独立性的密度刻画（命题）
若 $(X_1,...,X_n)$ 有联合概率密度 $p(x_1,...,x_n)$，则
$$
X_1,...,X_n\,相互独立 \iff p(x_1,...,x_n)=\prod_{i=1}^n p_i(x_i)\ (对几乎所有\,(x_1,...,x_n))
$$
此时
$$
\int_{-\infty}^{x_1}\!\!\cdots\!\int_{-\infty}^{x_n} p(y_1,...,y_n)\,dy_1\cdots dy_n=F(x_1,...,x_n)=\prod_{i=1}^n F_i(x_i)=\prod_{i=1}^n\int_{-\infty}^{x_i}p_i(y_i)\,dy_i
$$
即联合密度可分离为各边缘密度之积。

> 💡 **CS视角**：密度可分离 $\Rightarrow$ 对数似然可加。深度学习里假设各维独立时，$\log p(x)=\sum_i\log p_i(x_i)$，反向传播对每一维分别求梯度——这正是「可分解性 → 计算可并行」的体现。

> 💡 **CS视角**：判定多元高斯是否独立只看协方差矩阵是否对角：对角 $\Rightarrow$ 联合密度的指数项 $-\tfrac12 x^\top\Sigma^{-1}x$ 拆成各维平方和 $\Rightarrow$ 密度分离。对高斯而言「不相关」就等价于「独立」。

> 📝 **例**：二维标准正态、相关系数为 $0$，验证联合密度 = 两个一维高斯之积。
> **步骤1**：联合密度 $p(x_1,x_2)=\dfrac{1}{2\pi}\exp\!\big(-\tfrac12(x_1^2+x_2^2)\big)$。
> **步骤2**：指数里 $x_1^2+x_2^2$ 可拆，$\dfrac{1}{2\pi}=\dfrac{1}{\sqrt{2\pi}}\cdot\dfrac{1}{\sqrt{2\pi}}$。
> **步骤3**：于是 $p(x_1,x_2)=\Big(\tfrac{1}{\sqrt{2\pi}}e^{-x_1^2/2}\Big)\Big(\tfrac{1}{\sqrt{2\pi}}e^{-x_2^2/2}\Big)=p_1(x_1)p_2(x_2)$。
> **结论**：联合密度分离为两个 $N(0,1)$ 密度之积，故 $X_1,X_2$ 独立——协方差为 $0$ 的高斯即可独立采样两维。`,

  "kp-4-5": String.raw`## 数学期望的定义
设 $(\Omega,\mathcal F,\mathbb P)$ 为概率空间，$X$ 为其上一维 r.v：
$$
\begin{aligned}
&(1)\ X=\sum_{i=1}^n a_i 1_{A_i}\ (a_i\ge0)\,非负简单:\ \mathbb E[X]=\sum_{i=1}^n a_i\mathbb P(A_i) \\
&(2)\ X\ge0\,非负:\ \mathbb E[X]=\sup\{\mathbb E[Y]:0\le Y\le X,\ Y\,简单\} \\
&(3)\ 一般\,X\,(\mathbb E[X^+],\mathbb E[X^-]\,至少一个有限):\ \mathbb E[X]=\mathbb E[X^+]-\mathbb E[X^-] \\
&(4)\ A\in\mathcal F:\ \int_A X\,d\mathbb P=\mathbb E[X1_A]
\end{aligned}
$$
**唯一性**：若 $X=\sum a_i1_{A_i}=\sum b_j1_{B_j}$，则在 $\Omega=\bigcup A_i=\bigcup B_j$ 上交叉细分得 $X=\sum_{i,j}a_i1_{A_iB_j}=\sum_{i,j}b_j1_{A_iB_j}$。当 $\mathbb P(A_iB_j)>0$ 时必有 $a_i=b_j$，故 $\mathbb E[X]$ 与表示无关。

> 💡 **CS视角**：期望 = 取值的概率加权平均，简单 r.v 情形 $\mathbb E[X]=\sum a_i\mathbb P(A_i)$ 正是 sum(value * prob)。蒙特卡洛把它反过来用：$\mathbb E[X]\approx\tfrac1N\sum_{t}X(\omega_t)$，用大量等权样本均值逼近这个加权平均。

> 💡 **CS视角**：「先简单后逼近」的定义路径(简单→非负取 sup→一般作差)和数值积分一致：用阶梯函数(直方图)逼近，再取上确界——Lebesgue 积分按值域分桶，正对应按数据值分桶统计而非按下标遍历。

> 📝 **例**：简单 r.v $X=2\cdot 1_A+5\cdot 1_B$，其中 $A,B$ 互斥且 $\mathbb P(A)=0.3,\mathbb P(B)=0.7$，求 $\mathbb E[X]$。
> **步骤1**：套用非负简单 r.v 公式 $\mathbb E[X]=\sum a_i\mathbb P(A_i)$。
> **步骤2**：$\mathbb E[X]=2\cdot\mathbb P(A)+5\cdot\mathbb P(B)=2\times0.3+5\times0.7$。
> **步骤3**：$=0.6+3.5=4.1$。
> **结论**：$\mathbb E[X]=4.1$——就是把每个取值按其概率加权求和，等价于 np.dot([2,5],[0.3,0.7])。`,

  "kp-4-6": String.raw`## 期望的基本性质
$$
\begin{aligned}
&(1)\ X,Y\,非负简单,\ a,b\ge0:\ \mathbb E[aX+bY]=a\mathbb E[X]+b\mathbb E[Y] \\
&(2)\ X,Y\,非负:\ \mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y] \\
&(3)\ \mathbb P(A)=0\Rightarrow\int_A X\,d\mathbb P=0;\quad X=Y\ (a.s.)\Rightarrow\mathbb E[X]=\mathbb E[Y] \\
&(4)\ X\le Y\ (a.s.)\Rightarrow\mathbb E[X]\le\mathbb E[Y]
\end{aligned}
$$
**(2)的证明**：设 $X=\sum a_i1_{A_i},Y=\sum b_j1_{B_j}$，交叉细分到公共划分 $\{A_iB_j\}$：
$$
\mathbb E[X+Y]=\mathbb E\Big[\sum_{i,j}(a_i+b_j)1_{A_iB_j}\Big]=\sum_{i,j}(a_i+b_j)\mathbb P(A_iB_j)=\mathbb E[X]+\mathbb E[Y]
$$

> 💡 **CS视角**：期望的线性 $\mathbb E[aX+bY]=a\mathbb E[X]+b\mathbb E[Y]$ 不要求独立，这在算法分析里极其好用：求和型随机量(如哈希冲突数、快排比较次数)拆成一堆指示变量之和，再各求期望相加，绕开复杂的联合分布。

> 💡 **CS视角**：单调性 $X\le Y\Rightarrow\mathbb E[X]\le\mathbb E[Y]$ 是各类上界证明的基石——把难算的随机量上界放到易算的随机量，期望也随之被界住，集中不等式大多由此推出。

> 📝 **例**：续上例 $X=2\cdot1_A+5\cdot1_B$（$\mathbb E[X]=4.1$），令 $Y=10\cdot1_A$，验证 $\mathbb E[3X]$ 与 $\mathbb E[X+Y]$。
> **步骤1**：齐次性 $\mathbb E[3X]=3\mathbb E[X]=3\times4.1=12.3$。
> **步骤2**：$\mathbb E[Y]=10\cdot\mathbb P(A)=10\times0.3=3$。
> **步骤3**：可加性 $\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y]=4.1+3=7.1$。
> **结论**：线性性让 $\mathbb E[3X]=12.3$、$\mathbb E[X+Y]=7.1$ 都化为标量运算，无需重新对 $3X$、$X+Y$ 的分布求和。`,

  "kp-4-7": String.raw`## Levi 定理（定理3.1.1）
$$
\{X_n\}\,非负r.v,\ X_n\uparrow X\ \Rightarrow\ \mathbb E[X_n]\uparrow\mathbb E[X]
$$
即非负随机变量单调上升时，期望与极限可交换。

**推论**：非负 r.v $X,Y$ 满足 $\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y]$。

**证明**：取非负简单 $X_n\uparrow X,\ Y_n\uparrow Y$，则 $X_n+Y_n\uparrow X+Y$。由基本性质 $\mathbb E[X_n+Y_n]=\mathbb E[X_n]+\mathbb E[Y_n]$，两边令 $n\to\infty$ 并用 Levi 定理即得。

> 💡 **CS视角**：Levi(单调收敛)定理 = 「单调上升时，极限与求和/积分可交换次序」。这是数值上「截断逼近收敛到真值」的保证：用 $X_n=\min(X,n)$ 截断逐步逼近 $X$，期望也单调升到 $\mathbb E[X]$，写流式累加器估计长尾期望时正靠它兜底。

> 💡 **CS视角**：它也是把无穷和搬进期望的钥匙——$\mathbb E[\sum_k Z_k]=\sum_k\mathbb E[Z_k]$（非负项），让「先求和再期望」与「先期望再求和」等价，强化学习里对回报级数 $\sum_t\gamma^t r_t$ 求期望就依赖这一交换。

> 📝 **例**：取非负 r.v $X$ 满足 $\mathbb P(X=k)=2^{-k}\ (k=1,2,...)$，用截断 $X_n=\min(X,n)$ 看 $\mathbb E[X_n]\uparrow\mathbb E[X]$。
> **步骤1**：$\mathbb E[X]=\sum_{k\ge1}k\,2^{-k}=2$（几何级数求和公式 $\sum k r^k=r/(1-r)^2$，$r=\tfrac12$）。
> **步骤2**：截断 $X_2=\min(X,2)$，即 $X=1$ 记 $1$、$X\ge2$ 记 $2$；$\mathbb E[X_2]=1\cdot\tfrac12+2\cdot\tfrac12=1.5$。
> **步骤3**：$X_3=\min(X,3)$：$\mathbb E[X_3]=1\cdot\tfrac12+2\cdot\tfrac14+3\cdot\tfrac14=0.5+0.5+0.75=1.75$，比 $1.5$ 大。
> **结论**：$\mathbb E[X_n]=1.5,1.75,...\uparrow 2=\mathbb E[X]$ 单调升到真值——截断逼近永不越界且收敛，这就是 Levi 定理在估计长尾期望时的保证。`,

  "kp-4-8": String.raw`## 期望性质（定理3.2.1）
$$
\begin{aligned}
&(1)\ \mathbb E[X]\,存在\Rightarrow\forall a,\ \mathbb E[aX]=a\mathbb E[X] \\
&(2)\ \mathbb E[X],\mathbb E[Y]\,存在且\,\mathbb E[X]+\mathbb E[Y]\,有意义\Rightarrow\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y] \\
&(3)\ X\le Y\Rightarrow\mathbb E[X]\le\mathbb E[Y] \\
&(4)\ X\,可积\iff|X|\,可积 \\
&(5)\ \mathbb P(|X|\ge a)\le\dfrac{\mathbb E|X|}{a}\ (a>0)\quad\text{(Markov 不等式)} \\
&(6)\ X\,可积\Rightarrow|X|<\infty\ (a.s.) \\
&(7)\ \mathbb E|XY|\le(\mathbb E[X^2])^{1/2}(\mathbb E[Y^2])^{1/2}\quad\text{(Cauchy-Schwarz)} \\
&(8)\ X=Y\ (a.s.)\Rightarrow\mathbb E[X]=\mathbb E[Y]
\end{aligned}
$$
**(5)证**：$\mathbb E|X|\ge\int_{\{|X|\ge a\}}|X|\,d\mathbb P\ge a\,\mathbb P(|X|\ge a)$。推广：$f$ 单调增时 $\mathbb P(|X|\ge a)\le\mathbb E[f(|X|)]/f(a)$。

**(7)证**：由 $\mathbb E[(t|X|+|Y|)^2]\ge0$ 对一切 $t$ 成立，关于 $t$ 的二次式判别式 $\le0$ 即得。

> 💡 **CS视角**：Markov 不等式 $\mathbb P(|X|\ge a)\le\mathbb E|X|/a$ 给出尾概率上界，是集中不等式(Chebyshev、Chernoff)的源头：只用一阶矩就能限制「偏离过大」的概率，常用来证明随机算法以高概率不超时、负载均衡不爆桶。

> 💡 **CS视角**：Cauchy-Schwarz $\mathbb E|XY|\le\sqrt{\mathbb E X^2}\sqrt{\mathbb E Y^2}$ 就是 $L^2$ 空间里的向量内积不等式 $|\langle X,Y\rangle|\le\|X\|\|Y\|$，由它定义相关系数 $\rho=\mathrm{Cov}(X,Y)/(\sigma_X\sigma_Y)\in[-1,1]$——余弦相似度的概率版。

> 📝 **例**：已知非负 r.v 满足 $\mathbb E|X|=2$，用 Markov 不等式估 $\mathbb P(|X|\ge10)$ 的上界。
> **步骤1**：Markov 不等式 $\mathbb P(|X|\ge a)\le\dfrac{\mathbb E|X|}{a}$，取 $a=10$。
> **步骤2**：代入 $\mathbb P(|X|\ge10)\le\dfrac{2}{10}=0.2$。
> **步骤3**：这只是上界——若 $X$ 取常数 $2$，则真实 $\mathbb P(|X|\ge10)=0$，远小于 $0.2$，可见界往往保守。
> **结论**：仅凭一阶矩 $\mathbb E|X|=2$ 即得尾概率 $\le0.2$，无需知道完整分布——这正是随机算法只用期望就给出失败概率上界的常用手法。`
,

  "kp-5-1": String.raw`## 积分变换定理（定理3.3.1）
设 $(\Omega,\mathcal F,\mathbb P)$ 是概率空间，$X$ 是定义在其上、取值于可测空间 $(E,\Sigma)$ 的随机变量（随机元），$f$ 是 $(E,\Sigma)$ 到 $(\mathbb R,\mathcal B)$ 上的可测函数，则
$$
\int_{\Omega} f(X)\,d\mathbb P=\mathbb E[f(X)]=\int_{E} f(x)\,\mu_X(dx)
$$
其中 $\mu_X$ 是 $X$ 在 $\mathbb P$ 下的概率分布。该等式的意义是：若一个积分有意义，则另一个积分也有意义且相等。

**证明思路**：当 $f=1_A,\ A\in\Sigma$ 时，
$$
左边=\mathbb E[1_A(X)]=\mathbb E[1_{X\in A}]=\mathbb P(X\in A)=\mu_X(A)=\int 1_A(x)\,\mu_X(dx)=右边
$$
接下来将其推广到非负简单函数，再到非负可测函数，最后到一般情形（标准的「四步法」）。

> 💡 **CS视角**：这就是机器学习里反复用的 LOTUS（law of the unconscious statistician）：算 $\mathbb E[f(X)]$ 不必先求 $f(X)$ 的分布，直接拿 $X$ 的分布去积分。蒙特卡洛正是它的离散实现——对样本逐个套 $f$ 再取均值 mean(f(samples))。

> 💡 **CS视角**：式子右边 $\int_E f\,d\mu_X$ 是「换坐标系」：把抽象样本空间 $\Omega$ 上的积分搬到数据实际取值的空间 $E$ 上。等价于深度学习里 change-of-variables——把 latent 分布推到观测空间再算期望。

> 📝 **例**：掷均匀骰子 $X\in\{1,\dots,6\}$，用积分变换定理算 $\mathbb E[X^2]$。
> **步骤1**：取 $f(x)=x^2$，定理把 $\mathbb E[f(X)]$ 化为对分布 $\mu_X$ 的积分：$\mathbb E[X^2]=\sum_{k=1}^6 k^2\,\mu_X(\{k\})$。
> **步骤2**：$\mu_X(\{k\})=\frac16$，故 $\mathbb E[X^2]=\frac16(1+4+9+16+25+36)$。
> **步骤3**：$1+4+9+16+25+36=91$，所以 $\mathbb E[X^2]=\frac{91}{6}\approx15.17$。
> **结论**：$\mathbb E[X^2]=\frac{91}{6}$——无需求 $X^2$ 的分布，直接对取值向量与概率向量做点积 np.dot([1,4,9,16,25,36],[1/6]*6)，这正是 LOTUS。`,
  "kp-5-2": String.raw`## 推论：期望的分布函数表达
若 $X$ 是定义在 $\mathbb P$ 上的实 r.v，概率分布为 $\mu_X$，分布函数为 $F$，则
$$
\mathbb E[X]=\int_{\mathbb R} x\,\mu_X(dx)=\int_{-\infty}^{\infty} x\,dF(x)
$$
更一般地，对可测函数 $f$，
$$
\mathbb E[f(X)]=\int_{\mathbb R} f(x)\,\mu_X(dx)=\int_{-\infty}^{\infty} f(x)\,dF(x)
$$
即只要知道 $X$ 的分布（或分布函数），就能把对 $\Omega$ 的抽象积分化为对实轴的 Lebesgue-Stieltjes 积分。

> 💡 **CS视角**：$\int f\,dF$ 是 Riemann-Stieltjes 积分，统一了离散与连续：$F$ 在跳点处跳跃 $\Rightarrow$ 离散求和，$F$ 光滑 $\Rightarrow$ 化为 $\int f(x)p(x)\,dx$。一行公式同时覆盖 sum 求和与 quad 数值积分两条路径，框架代码里只需存一个 CDF 即可两种分布通吃。

> 💡 **CS视角**：经验分布 $\hat F_N(x)=\frac1N\sum_t 1_{X_t\le x}$ 是阶梯 CDF，把它代进 $\int f\,d\hat F_N$ 立刻得到样本均值 $\frac1N\sum_t f(X_t)$——统计估计就是「用经验 CDF 替换真 CDF」，bootstrap 的理论基础。

> 📝 **例**：连续 r.v $X$ 服从 $[0,1]$ 均匀分布，分布函数 $F(x)=x\ (0\le x\le1)$，用 $\int x\,dF$ 求 $\mathbb E[X]$。
> **步骤1**：均匀分布 $F(x)=x$ 在 $[0,1]$ 上可导，$dF(x)=F'(x)\,dx=1\cdot dx$。
> **步骤2**：代入推论 $\mathbb E[X]=\int_{-\infty}^{\infty}x\,dF(x)=\int_0^1 x\cdot1\,dx$。
> **步骤3**：$\int_0^1 x\,dx=\frac{x^2}{2}\big|_0^1=\frac12$。
> **结论**：$\mathbb E[X]=\frac12$，与直觉「区间中点」一致；Stieltjes 积分在此自动退化为普通定积分。`,
  "kp-5-3": String.raw`## 密度变换定理（定理3.3.2）
设 $(E,\Sigma,\mu)$ 是（概率）测度空间，$p$ 是其上的非负实值可测函数，定义 $\Sigma$ 上的函数 $\nu$ 如下：
$$
\nu(B)=\int_{B} p(x)\,\mu(dx),\quad B\in\Sigma
$$
则 $\nu$ 是 $(E,\Sigma)$ 上的测度，且对 $(E,\Sigma)$ 上任意可测函数 $g$，
$$
\int_E g(x)\,\nu(dx)=\int_E g(x)p(x)\,\mu(dx)
$$
含义是：若一边有意义，则另一边也有意义且相等。$p$ 即 $\nu$ 关于 $\mu$ 的密度（Radon-Nikodym 导数）。

**证明（$\nu$ 是测度）**：取互不相交的 $B_n\in\Sigma$，
$$
\begin{aligned}
\nu\Big(\bigcup_{n=1}^{\infty} B_n\Big)&=\int 1_{\bigcup_n B_n}\,p\,d\mu=\int \sum_{n=1}^{\infty} 1_{B_n}p\,d\mu \\
&=\int \lim_{N\to\infty}\sum_{n=1}^{N} 1_{B_n}p\,d\mu\overset{\text{Levi}}{=}\lim_{N\to\infty}\sum_{n=1}^{N}\int 1_{B_n}p\,d\mu=\sum_{n=1}^{\infty}\nu(B_n)
\end{aligned}
$$
等式部分先验 $g=1_B$：$\int 1_B\,d\nu=\nu(B)=\int_B p\,d\mu=\int_E 1_B p\,d\mu$，再「四步法」推广到一般 $g$。

> 💡 **CS视角**：$p=\frac{d\nu}{d\mu}$ 就是重要性采样里的权重 $w(x)=\frac{p_{target}(x)}{q_{proposal}(x)}$：$\mathbb E_\nu[g]=\mathbb E_\mu[g\cdot p]$ 即「在 $\mu$ 下采样，乘权重 $p$ 估 $\nu$ 下期望」，off-policy RL、变分推断都靠这条换测度。

> 💡 **CS视角**：证明里 $\sum$ 与 $\int$ 交换次序用的就是 Levi（单调收敛），这是流式/分块累加密度积分时「分批求和=整体求和」的合法性依据，MapReduce 式聚合不会因无穷项出错。

> 📝 **例**：在 $\mu=$（$[0,1]$ 上 Lebesgue 测度）上取密度 $p(x)=2x$，定义 $\nu(dx)=2x\,dx$，求 $\nu([0,\tfrac12])$ 及 $\mathbb E_\nu[g]$（$g(x)=x$）。
> **步骤1**：测度值 $\nu([0,\tfrac12])=\int_0^{1/2}2x\,dx=x^2\big|_0^{1/2}=\frac14$。
> **步骤2**：换测度公式 $\int g\,d\nu=\int g\cdot p\,d\mu$，即 $\mathbb E_\nu[X]=\int_0^1 x\cdot2x\,dx$。
> **步骤3**：$\int_0^1 2x^2\,dx=\frac{2x^3}{3}\big|_0^1=\frac23$。
> **结论**：$\nu([0,\tfrac12])=\frac14$、$\mathbb E_\nu[X]=\frac23$——把「带权重 $2x$ 的均匀采样」当成新分布，正是重要性采样的算法形态。`,
  "kp-5-4": String.raw`## 推论：连续型期望的密度积分
若 $X$ 是一维实 r.v，具有密度 $p$，则
$$
\mathbb E[X]=\int_{-\infty}^{+\infty} x\,p(x)\,dx
$$
**证明**：由前推论 $\mathbb E[X]=\int_{\mathbb R} x\,\mu_X(dx)=\int_{-\infty}^{\infty} x\,dF(x)$，故只需证
$$
\forall B\in\mathcal B,\quad \mu_X(B)=\int_B p(x)\,dx
$$
当 $B=(-\infty,a]$ 时，$\mu_X(B)=F(a)-F(-\infty)=F(a)=\int_{-\infty}^a p(x)\,dx$。为推广到任意 $B$，定义
$$
\Lambda=\Big\{B\in\mathcal B:\mu_X(B)=\int_B p(x)\,dx\Big\},\quad \mathcal C=\{(-\infty,a]:a\in\mathbb R\}
$$
则 $\mathcal C\subset\Lambda$ 且 $\mathcal C$ 是 $\pi$ 系，验证 $\Lambda$ 是 $\lambda$ 系，由 $\lambda$-$\pi$ 方法得 $\Lambda=\mathcal B$。

> 💡 **CS视角**：这就是连续分布期望的「教科书公式」$\mathbb E[X]=\int x\,p(x)\,dx$，是把离散 $\sum_k k\,\mathbb P(X=k)$ 升级到积分。实现上对应数值积分调用 scipy.integrate.quad(lambda x: x*pdf(x), -inf, inf)。

> 💡 **CS视角**：证明用 $\pi$-$\lambda$ 把「在区间上成立」提升到「在所有 Borel 集上成立」——典型的「先在生成元上验证、再用单调类自动推广全空间」套路，等价于「只测试基例 + 归纳法覆盖所有 case」。

> 📝 **例**：指数分布密度 $p(x)=e^{-x}\ (x\ge0)$，用密度积分求 $\mathbb E[X]$。
> **步骤1**：套公式 $\mathbb E[X]=\int_0^{\infty}x\,p(x)\,dx=\int_0^{\infty}x e^{-x}\,dx$。
> **步骤2**：分部积分，$\int x e^{-x}\,dx=-x e^{-x}-e^{-x}+C=-(x+1)e^{-x}$。
> **步骤3**：代上下限 $\big[-(x+1)e^{-x}\big]_0^{\infty}=0-(-(0+1)\cdot1)=1$。
> **结论**：$\mathbb E[X]=1$，与指数分布 $\text{Exp}(1)$ 均值 $\frac1\lambda=1$ 吻合。`,
  "kp-5-5": String.raw`## 单调收敛定理（定理3.4.1）
设 $X_n\uparrow X$ 且存在可积 r.v $Y$，使得 $X_n\ge Y\ (a.s.)$，则
$$
\lim_{n\to\infty}\mathbb E[X_n]=\mathbb E[X]=\mathbb E\Big[\lim_{n\to\infty} X_n\Big]
$$
即单调上升（有可积下界）时，期望与极限可交换。它是 Levi 定理去掉「非负」假设的推广。

**证明**：记 $Y_n=X_n-Y$，则 $0\le Y_n$ 且 $Y_n\uparrow X-Y$。由 Levi 定理 $\mathbb E[X_n-Y]\uparrow\mathbb E[X-Y]$。因 $Y$ 可积，
$$
\lim_{n\to\infty}\mathbb E[X_n]-\mathbb E[Y]=\mathbb E[X]-\mathbb E[Y]
$$
两边消去 $\mathbb E[Y]$ 即得 $\lim_n\mathbb E[X_n]=\mathbb E[X]$。

> 💡 **CS视角**：MCT 是「单调累加可换序」的保证。流式估计中用 $X_n=\min(X,n)$ 或前缀和逐步逼近，期望也单调收敛到真值——长尾期望、累计回报的在线估计都靠它确保「越算越准且不越界」。

> 💡 **CS视角**：证明手法是「平移到非负再用 Levi」，等价于编程里「先归一化/减去 baseline 把量变成非负，再套已证好的引擎」。RL 里给奖励减 baseline 不改期望，正是 $\mathbb E[X_n-Y]=\mathbb E[X_n]-\mathbb E[Y]$ 的同款操作。

> 📝 **例**：设 $X_n=\big(1-\frac1n\big)X$，$X$ 可积且 $\mathbb E[X]=4$，验证 $\mathbb E[X_n]\uparrow\mathbb E[X]$。
> **步骤1**：系数 $1-\frac1n$ 随 $n$ 增大（$0,\frac12,\frac23,\dots\to1$），故 $X_n\uparrow X$，且以 $0\cdot X$ 为可积下界（设 $X\ge0$）。
> **步骤2**：线性性 $\mathbb E[X_n]=\big(1-\frac1n\big)\mathbb E[X]=\big(1-\frac1n\big)\times4$。
> **步骤3**：取值 $n=1\to0$、$n=2\to2$、$n=10\to3.6$、$n=100\to3.96$，单调上升。
> **结论**：$n\to\infty$ 时 $\mathbb E[X_n]\to4=\mathbb E[X]$，极限与期望可交换，正是 MCT。`,
  "kp-5-6": String.raw`## Fatou 引理（定理3.4.2）
设 $\{X_n\}$ 是一列实 r.v，若存在可积 r.v $Y$，使得 $Y\le X_n\ (a.s.)$，则
$$
\mathbb E\Big[\varliminf_{n\to\infty} X_n\Big]\le\varliminf_{n\to\infty}\mathbb E[X_n]
$$

**证明**：记 $Y_n=\inf_{m\ge n} X_m$，则 $\varliminf_n X_n=\lim_n Y_n$，且 $Y_n\uparrow$、$Y_n\ge Y$。由单调收敛定理
$$
\mathbb E\Big[\varliminf_n X_n\Big]=\lim_n\mathbb E[Y_n]=\lim_n\mathbb E\Big[\inf_{m\ge n} X_m\Big]
$$
又对任意 $m\ge n$ 有 $\inf_{m\ge n}X_m\le X_m$，故 $\mathbb E[\inf_{m\ge n}X_m]\le\inf_{m\ge n}\mathbb E[X_m]$，从而
$$
\mathbb E\Big[\varliminf_n X_n\Big]=\lim_n\mathbb E\Big[\inf_{m\ge n}X_m\Big]\le\lim_n\inf_{m\ge n}\mathbb E[X_m]=\varliminf_n\mathbb E[X_n]
$$

**推论（反向 Fatou）**：若存在可积 $Y\ge X_n\ (a.s.)$，则 $\mathbb E[\varlimsup_n X_n]\ge\varlimsup_n\mathbb E[X_n]$。取 $X_n'=-X_n$ 应用 Fatou 即得。

> 💡 **CS视角**：Fatou 给的是「极限期望 $\ge$ 期望极限」的单向不等式——质量可能在取极限时「漏掉」但不会凭空增加。这正是流式估计的安全护栏：在线 $\liminf$ 期望不会高估真极限，给出可靠下界。

> 💡 **CS视角**：$\liminf$/$\limsup$ 对应在线监控里的「最终下确界/上确界」。Fatou + 反向 Fatou 把期望卡在 $[\,\mathbb E\liminf,\ \mathbb E\limsup\,]$ 区间内，是后面 DCT「夹逼到唯一极限」的两块夹板。

> 📝 **例**：经典「质量逃逸」反例，$X_n=n\cdot1_{(0,1/n)}$（$[0,1]$ 上 Lebesgue），看严格不等号。
> **步骤1**：逐点极限。任一固定 $x>0$，当 $n>1/x$ 后 $X_n(x)=0$，故 $\varliminf_n X_n=0$，左边 $\mathbb E[\varliminf X_n]=0$。
> **步骤2**：每项期望 $\mathbb E[X_n]=n\cdot\frac1n=1$，故 $\varliminf_n\mathbb E[X_n]=1$。
> **步骤3**：比较 $0\le1$，Fatou 成立且取严格小于——质量「逃到」越来越窄的尖峰里，极限丢失了。
> **结论**：$\mathbb E[\varliminf X_n]=0<1=\varliminf\mathbb E[X_n]$；此例无可积上界，所以 DCT 不适用，期望与极限不能交换。`,
  "kp-5-7": String.raw`## 控制收敛定理（定理3.4.3）
若 $\lim_{n\to\infty} X_n=X\ (a.s.)$，且存在可积 r.v $Y$，使得 $|X_n|\le Y\ (a.s.)$，则
$$
\lim_{n\to\infty}\mathbb E[X_n]=\mathbb E[X]=\mathbb E\Big[\lim_{n\to\infty} X_n\Big]
$$
即有一个可积「控制函数」时，极限与期望可交换。

**证明**：由 $X_n$ 收敛 $X=\varliminf_n X_n=\varlimsup_n X_n$。下界 $X_n\ge -Y$、上界 $X_n\le Y$ 分别保证 Fatou 与反向 Fatou 适用：
$$
\mathbb E[X]=\mathbb E\Big[\varliminf_n X_n\Big]\le\varliminf_n\mathbb E[X_n]\le\varlimsup_n\mathbb E[X_n]\le\mathbb E\Big[\varlimsup_n X_n\Big]=\mathbb E[X]
$$
四项夹逼相等，故 $\lim_n\mathbb E[X_n]=\mathbb E[X]$。

> 💡 **CS视角**：DCT 是「只要被一个可积上界 $Y$ 罩住，就能放心交换极限与期望（积分）」。深度学习里证明梯度可交换 $\nabla\mathbb E[f(\theta,X)]=\mathbb E[\nabla f]$、SGD 估计无偏，几乎都要找一个可积控制函数（梯度被某可积量界住）来调用 DCT。

> 💡 **CS视角**：与 MCT 不同，DCT 不要求单调，只要「有界 + 收敛」，更贴近实战中震荡逼近的序列。它由 Fatou 上下夹逼推出，正是「证下界 + 证上界 = 证相等」的工程化证明结构。

> 📝 **例**：$X_n=\frac{\sin(nX)}{n}$（$X$ 任意 r.v），用 DCT 求 $\lim_n\mathbb E[X_n]$。
> **步骤1**：逐点极限。$|\sin(nX)|\le1$，故 $|X_n|\le\frac1n\to0$，得 $X_n\to0\ (a.s.)$。
> **步骤2**：找控制函数。$|X_n|=\big|\frac{\sin nX}{n}\big|\le1$，常数 $Y=1$ 在概率空间上可积（$\mathbb E[1]=1<\infty$），满足 $|X_n|\le Y$。
> **步骤3**：DCT 适用，$\lim_n\mathbb E[X_n]=\mathbb E[\lim_n X_n]=\mathbb E[0]=0$。
> **结论**：$\lim_n\mathbb E[X_n]=0$——只要一个可积上界 $Y=1$ 罩住整列，就把「先求期望再取极限」换成「先取极限再求期望」。`,
  "kp-5-8": String.raw`## 应用例：可积性的两个极限（习题4）
若 $\mathbb E|X|<\infty$，则
$$
(1)\ \lim_{n\to\infty}\int_{\{|X|>n\}} |X|\,d\mathbb P=0,\qquad (2)\ \lim_{\mathbb P(A)\to 0}\int_{A} |X|\,d\mathbb P=0
$$

**证 (1)**：令 $A_n=\{|X|>n\}$、$X_n=|X|1_{A_n^C}$，则 $X_n\ge 0$ 且 $X_n\uparrow|X|$。由单调收敛 $\mathbb E[X_n]\uparrow\mathbb E|X|$。又
$$
\mathbb E|X|=\int_{A_n}|X|\,d\mathbb P+\int_{A_n^C}|X|\,d\mathbb P
$$
令 $n\to\infty$，第二项 $\to\mathbb E|X|$，因 $\mathbb E|X|<\infty$ 可消去，得 $\lim_n\int_{\{|X|>n\}}|X|\,d\mathbb P=0$。

**证 (2)**：令 $X_n=\min\{|X|,n\}$，则 $X_n\ge0$、$X_n\uparrow|X|$。由单调收敛 $\mathbb E[X_n]\uparrow\mathbb E|X|$，故 $\forall\epsilon>0,\exists n$ 使 $\mathbb E[|X|-X_n]<\frac\epsilon2$。取 $\delta\in(0,\frac{\epsilon}{2n})$，当 $\mathbb P(A)<\delta$ 时
$$
\int_A|X|\,d\mathbb P=\int_A(|X|-X_n)\,d\mathbb P+\int_A X_n\,d\mathbb P\le\mathbb E[|X|-X_n]+n\mathbb P(A)\le\frac\epsilon2+\frac\epsilon2=\epsilon
$$
即积分的绝对连续性。

> 💡 **CS视角**：(1) 是「一致可积性」的尾部刻画——可积量的「尾部贡献」可任意小，等价于截断误差随阈值 $n$ 收敛到 $0$。它保证用截断操作 clip(X, -n, n) 估计期望时，丢掉的尾部是可控的。

> 💡 **CS视角**：(2) 是「积分关于测度绝对连续」：小概率事件对期望贡献趋于 $0$。这就是为什么剔除/降权极少数异常样本不会显著扭曲期望估计，也是数据清洗里「丢弃稀有脏数据安全」的理论背书。

> 📝 **例**：$X$ 服从 $\text{Exp}(1)$（密度 $e^{-x},x\ge0$，$\mathbb E|X|=1<\infty$），验证 (1) 的尾部积分 $\to0$。
> **步骤1**：写出尾部积分 $T_n=\int_{\{X>n\}}x\,d\mathbb P=\int_n^{\infty}x e^{-x}\,dx$。
> **步骤2**：用 $\int x e^{-x}\,dx=-(x+1)e^{-x}$，得 $T_n=\big[-(x+1)e^{-x}\big]_n^{\infty}=(n+1)e^{-n}$。
> **步骤3**：代值 $T_1=2e^{-1}\approx0.736$、$T_5=6e^{-5}\approx0.040$、$T_{10}=11e^{-10}\approx0.0005$，迅速衰减。
> **结论**：$T_n=(n+1)e^{-n}\to0$，尾部贡献指数级消失，印证可积量的截断误差可任意小。`,

  "kp-6-1": String.raw`## 乘积可测空间与乘积测度
设 $(E_1,\Sigma_1,\mu_1)$ 和 $(E_2,\Sigma_2,\mu_2)$ 是两个概率空间，在
$$
E_1\times E_2=\{w=(w_1,w_2):w_1\in E_1,\ w_2\in E_2\}
$$
上定义 $\sigma$ 代数
$$
\Sigma_1\times\Sigma_2=\sigma\{A_1\times A_2:A_1\in\Sigma_1,\ A_2\in\Sigma_2\}
$$
称为 $E_1,E_2$ 的**乘积 $\sigma$ 代数**，称 $(E_1\times E_2,\ \Sigma_1\times\Sigma_2)$ 为**乘积可测空间**。

> 💡 **CS视角**：乘积可测空间就是给两个随机变量"拼"出一个联合采样空间。在代码里这对应 itertools.product 或 zip：把两个独立随机源 $E_1,E_2$ 的取值组成 pair $(w_1,w_2)$。注意乘积 $\sigma$ 代数是由"矩形" $A_1\times A_2$ 生成的，而不是所有矩形本身——可测的联合事件远多于矩形（如对角线区域），正如二维数组的可索引切片不止于"行 $\times$ 列"的整块。

> 💡 **CS视角**：把 $\Sigma_1\times\Sigma_2$ 看成"联合查询能问出的所有合法事件"。生成元只给出最基本的"$X\in A_1$ 且 $Y\in A_2$"型查询，$\sigma(\cdot)$ 闭包再补上它们的可列并/补——这与从一组基本谓词出发，用 AND/OR/NOT 闭包生成全部可判定查询是同一套思路。

> 📝 **例**：$E_1=\{0,1\}$（一个比特），$E_2=\{a,b,c\}$，写出乘积空间与一个非矩形可测事件。
> **步骤1**：乘积空间 $E_1\times E_2=\{(0,a),(0,b),(0,c),(1,a),(1,b),(1,c)\}$，共 $2\times3=6$ 个点。
> **步骤2**：取矩形事件 $\{0\}\times\{a,b\}=\{(0,a),(0,b)\}$，它属于生成元。
> **步骤3**：事件"第一坐标 $=$ 0 或 第二坐标 $=$ c" $=\{(0,a),(0,b),(0,c),(1,c)\}$ 不是单个矩形，但由矩形经并运算得到，故仍可测。
> **结论**：可测事件 $=$ 矩形经有限/可列布尔运算的闭包，恰好对应"基本查询 + 逻辑组合"能表达的全部联合事件。`,

  "kp-6-2": String.raw`## 乘积测度的存在唯一性（定理4.1.1）
在 $\Sigma_1\times\Sigma_2$ 上存在唯一概率测度 $\mu$ 满足
$$
\mu(A_1\times A_2)=\mu_1(A_1)\,\mu_2(A_2),\quad A_1\in\Sigma_1,\ A_2\in\Sigma_2
$$
**证明**：$\forall A\in\Sigma_1\times\Sigma_2$，定义
$$
\mu(A)\triangleq\int_{E_1}\mu_2(A(x_1))\,\mu_1(dx_1)=\int_{E_2}\mu_1(A(x_2))\,\mu_2(dx_2)
$$
要验证 $\mu$ 是概率测度，须验证非负性、规范性与可列可加性。非负性显然。规范性：当 $A=E_1\times E_2$ 时 $\mu_2(A(x_1))=\mu_2(E_2)=1$，故 $\mu(E_1\times E_2)=\int_{E_1}\mu_1(dx_1)=1$。可列可加性：任取 $A_n\in\Sigma_1\times\Sigma_2$ 互不相交，
$$
\begin{aligned}
\mu\Big(\bigcup_{n=1}^{\infty}A_n\Big)&=\int_{E_1}\mu_2\Big(\big(\bigcup_{n=1}^{\infty}A_n\big)(x_1)\Big)\mu_1(dx_1)=\int_{E_1}\mu_2\Big(\bigcup_{n=1}^{\infty}A_n(x_1)\Big)\mu_1(dx_1)\\
&=\int_{E_1}\sum_{n=1}^{\infty}\mu_2(A_n(x_1))\,\mu_1(dx_1)\overset{单调收敛}{=}\sum_{n=1}^{\infty}\int_{E_1}\mu_2(A_n(x_1))\,\mu_1(dx_1)=\sum_{n=1}^{\infty}\mu(A_n)
\end{aligned}
$$
（严谨地说，还须证明 $\mu_2(A(x_1))$ 关于 $x_1$ 可测，参见课本 135 页定理 6.1.9。）

> 💡 **CS视角**：定义里的两种积分顺序 $\int_{E_1}\!\int_{E_2}=\int_{E_2}\!\int_{E_1}$ 正是 Fubini 定理在乘积测度上的化身，编程上就是"二重循环换序结果不变"。计算联合期望 $\mathbb E[f(X,Y)]$ 时，可以先对 $Y$ 求和再对 $X$，也可反过来——给了我们按内存局部性或并行度自由选择遍历轴的自由。

> 💡 **CS视角**：唯一性来自"在矩形（$\pi$ 系）上取值确定 $\Rightarrow$ 在生成的 $\sigma$ 代数上整体确定"。这与单元测试思想一致：只要在一组基（矩形事件）上把规格定死，整个系统的行为就被唯一钉死，无需枚举不可数的事件逐一指定。

> 📝 **例**：两枚独立均匀硬币，用乘积测度算"恰好一正一反"的概率。
> **步骤1**：$E_1=E_2=\{H,T\}$，$\mu_1(\{H\})=\mu_1(\{T\})=\tfrac12$，$\mu_2$ 同理。
> **步骤2**：事件"一正一反" $=\{(H,T)\}\cup\{(T,H)\}$，两个不相交矩形。
> **步骤3**：$\mu(\{(H,T)\})=\mu_1(\{H\})\mu_2(\{T\})=\tfrac12\cdot\tfrac12=\tfrac14$，同理 $\mu(\{(T,H)\})=\tfrac14$，由可加性合计 $\tfrac14+\tfrac14=\tfrac12$。
> **结论**：概率 $\tfrac12$——乘积测度先在矩形上"相乘"，再靠可加性拼起非矩形事件，正是联合采样里 $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)$（互斥）的体现。`,

  "kp-6-3": String.raw`## 截口
设 $A\subset E_1\times E_2$，对任意 $x_1\in E_1$，定义
$$
A(x_1)=\{x_2\in E_2:(x_1,x_2)\in A\}
$$
称之为 $A$ 在 $x_1$ 处的**截口**，类似可定义 $A(x_2)$。截口是定义乘积测度时把二维集合按一个坐标"切片"得到的一维集合，是定理4.1.1 中那个含 $\mu_2(A(x_1))$ 的积分得以成立的关键。

> 💡 **CS视角**：截口就是二维数组的"行切片" A[x1, :]——固定第一维下标，取出第二维的整条。把二重积分 $\iint$ 拆成"先固定 $x_1$ 取截口算 $\mu_2(A(x_1))$，再对 $x_1$ 积分"，正是嵌套循环 for x1: process(A[x1, :]) 的数学版本。

> 💡 **CS视角**：在条件概率/边缘化里，截口对应"按某变量分组"。$\mu(A)=\int\mu_2(A(x_1))\,\mu_1(dx_1)$ 就是 groupby(x1).aggregate 后再加权求和——SQL/pandas 里先对一个键切片聚合、再汇总的标准套路。

> 📝 **例**：$A=\{(x,y):x\in\mathbb R,\ 0\le y\le x\}$（上三角区域），求其在 $x_1=2$ 处的截口。
> **步骤1**：固定 $x=2$，截口收集所有满足 $(2,y)\in A$ 的 $y$。
> **步骤2**：条件 $0\le y\le x$ 在 $x=2$ 时变为 $0\le y\le 2$。
> **步骤3**：故 $A(2)=\{y:0\le y\le 2\}=[0,2]$。
> **结论**：截口 $A(2)=[0,2]$，一维区间——就像把矩阵的第 $2$ 行抽出来得到一个向量，二维约束被固定一维后塌缩成一维集合。`,

  "kp-6-4": String.raw`## 乘积测度的 $n$ 维推广
可把二维结论推广至 $n$ 维情形。设 $(E_k,\Sigma_k,\mu_k)$ 是 $n$ 个概率空间，$1\le k\le n$，乘积空间为
$$
\big(E_1\times\cdots\times E_n,\ \Sigma_1\times\cdots\times\Sigma_n,\ \mu_1\times\cdots\times\mu_n\big)
$$
其乘积测度由迭代积分给出
$$
(\mu_1\times\cdots\times\mu_n)(A)=\int_{E_1}\mu_1(dx_1)\cdots\int_{E_{n-1}}\mu_{n-1}\big(A(x_1,...,x_{n-1})\big)\,\mu_n(dx_n)
$$

> 💡 **CS视角**：$n$ 维乘积测度就是 i.i.d. 数据集的概率模型：$n$ 个独立样本 $(X_1,...,X_n)$ 的联合分布 $=\prod_k\mu_k$。似然函数 $\prod_k p_k(x_k)$ 取对数即化为 $\sum_k\log p_k$，这正是最大似然/交叉熵损失"对 batch 求和"的根基。

> 💡 **CS视角**：迭代积分的逐层嵌套对应张量的逐轴归约（np.sum 的 axis 参数从内到外）。维度 $n$ 一高，直接枚举 $\prod|E_k|$ 个点是指数爆炸，蒙特卡洛改成"独立采样各维再平均"，把乘积测度的积分降成线性代价——这就是高维积分必走采样路线的原因。

> 📝 **例**：抛 $3$ 枚独立均匀硬币，用 $3$ 维乘积测度算"恰好两正"的概率。
> **步骤1**：每枚 $\mu_k(\{H\})=\mu_k(\{T\})=\tfrac12$，单个结果概率 $\tfrac12\cdot\tfrac12\cdot\tfrac12=\tfrac18$。
> **步骤2**：恰好两正的结果有 $C_3^2=3$ 个：$(H,H,T),(H,T,H),(T,H,H)$。
> **步骤3**：互斥相加 $3\times\tfrac18=\tfrac38$。
> **结论**：概率 $\tfrac38$——$n$ 维乘积测度让"每个长度为 $n$ 的独立序列"概率都等于各位概率连乘，再按计数加总，正是二项分布的来历。`,

  "kp-6-5": String.raw`## 独立与乘积测度（定理4.1.2）
设 $X_1,X_2$ 是定义在 $(\Omega,\mathcal F,\mathbb P)$ 上、取值于 $(E_1,\Sigma_1),(E_2,\Sigma_2)$ 的随机变量（随机元），$\mu,\mu_1,\mu_2$ 分别表示 $(X_1,X_2),X_1,X_2$ 的概率分布，那么
$$
X_1\,与\,X_2\,独立\iff\mu=\mu_1\times\mu_2
$$
**证明** $\Rightarrow$：
$$
\begin{aligned}
\mu(A_1\times A_2)&=\mathbb P((X_1,X_2)\in A_1\times A_2)=\mathbb P(X_1\in A_1,X_2\in A_2)\\
&=\mathbb P(X_1\in A_1)\mathbb P(X_2\in A_2)=\mu_1(A_1)\mu_2(A_2)=(\mu_1\times\mu_2)(A_1\times A_2)
\end{aligned}
$$
由概率测度的唯一性知 $\mu=\mu_1\times\mu_2$。

$\Leftarrow$：
$$
\begin{aligned}
\mathbb P(X_1\in A_1,X_2\in A_2)&=\mu(A_1\times A_2)=(\mu_1\times\mu_2)(A_1\times A_2)\\
&=\mu_1(A_1)\mu_2(A_2)=\mathbb P(X_1\in A_1)\mathbb P(X_2\in A_2)
\end{aligned}
$$

> 💡 **CS视角**：这条定理给"独立"下了一个可计算的判据：联合分布 $=$ 边缘分布的乘积测度。在概率图模型里，两节点无边相连即对应 $\mu=\mu_1\times\mu_2$；在生成模型里，要独立采样 $(X_1,X_2)$ 只需分别从 $\mu_1,\mu_2$ 抽再拼，无需建联合表。

> 💡 **CS视角**：注意只在矩形 $A_1\times A_2$ 上验证乘积关系就够，靠唯一性自动推广到全部联合事件。这正是"采样独立性测试"的理论依据：实践中只需在一族基本事件上比对联合频率与边缘频率之积（如卡方独立性检验），而非穷举所有事件。

> 📝 **例**：$X_1$ 是硬币（$H/T$ 各 $\tfrac12$），$X_2$ 是骰子（$1\sim6$ 各 $\tfrac16$），二者独立，验证 $\mu=\mu_1\times\mu_2$ 并求 $\mathbb P(X_1=H,X_2\in\{1,2\})$。
> **步骤1**：边缘 $\mu_1(\{H\})=\tfrac12$，$\mu_2(\{1,2\})=\tfrac26=\tfrac13$。
> **步骤2**：由独立性，联合分布在矩形上 $\mu(\{H\}\times\{1,2\})=\mu_1(\{H\})\mu_2(\{1,2\})=\tfrac12\cdot\tfrac13$。
> **步骤3**：$=\tfrac16$。
> **结论**：$\mathbb P(X_1=H,X_2\in\{1,2\})=\tfrac16$——联合概率等于两个独立随机源边缘概率之积，恰是"独立 $\iff$ 乘积测度"的直接应用。`,

  "kp-6-6": String.raw`## 卷积公式（二项分布的可加性）
$$
X\sim b(m,p),\ Y\sim b(n,p),\ X\perp Y\ \Rightarrow\ Z=X+Y\sim b(m+n,p)
$$
**证明**：
$$
\mathbb P(Z=k)=\mathbb P(X+Y=k)=\sum_{i=0}^{k}\mathbb P(X=i)\mathbb P(Y=k-i)=C_{m+n}^{k}p^k(1-p)^{m+n-k}
$$

> 💡 **CS视角**：独立随机变量之和的分布 $=$ 各自分布的**卷积**，离散情形 $\mathbb P(Z=k)=\sum_i\mathbb P(X=i)\mathbb P(Y=k-i)$ 正是 numpy.convolve 的求和式。直接做是 $O(k^2)$，要算很多和的分布时可改用 FFT 把卷积降到 $O(N\log N)$——信号处理与概率在这里完全同构。

> 💡 **CS视角**：二项分布对参数 $n$ 的可加性意味着"一族独立伯努利试验可任意分批合并"。MapReduce 里把 $m+n$ 次试验拆成两台机器各跑 $m,n$ 次再汇总成功数，结果分布不变——这是分布式计数能并行的概率保证。

> 📝 **例**：$X\sim b(2,0.5)$，$Y\sim b(3,0.5)$，独立，求 $Z=X+Y$ 取 $k=1$ 的概率。
> **步骤1**：由可加性 $Z\sim b(5,0.5)$，故 $\mathbb P(Z=1)=C_5^1(0.5)^1(0.5)^{4}$。
> **步骤2**：$C_5^1=5$，$(0.5)^5=\tfrac1{32}$。
> **步骤3**：$\mathbb P(Z=1)=5\times\tfrac1{32}=\tfrac{5}{32}$。
> **结论**：$\mathbb P(Z=1)=\tfrac{5}{32}\approx0.156$——卷积把"两段独立试验之和"直接合成一个 $b(5,0.5)$，不必枚举所有 $(X,Y)$ 配对。`,

  "kp-6-7": String.raw`## 初始分布与转移概率决定的测度
考虑 $Z=(X,Y)$，$A=A_1\times A_2\in\Sigma_1\times\Sigma_2$，则
$$
\begin{aligned}
\mu(A)&=\mathbb P((X,Y)\in A_1\times A_2)=\mathbb P(X\in A_1,Y\in A_2)\\
&=\mathbb P(\{w:X(w)\in A_1\}\cap\{w:Y(w)\in A_2\})=\mathbb P(X^{-1}(A_1)\cap Y^{-1}(A_2))\\
&=\mathbb P(\tilde A_1)\mathbb P(\tilde A_2\mid\tilde A_1)=\mathbb P(X\in A_1)\,\mathbb P(Y\in A_2\mid X\in A_1)
\end{aligned}
$$
当 $X,Y$ 不独立时，第二个因子依赖于第一个坐标的取值，这就引出了**转移概率测度**的概念。

> 💡 **CS视角**：这条链式分解 $\mu(A)=\mathbb P(X\in A_1)\mathbb P(Y\in A_2\mid X\in A_1)$ 就是概率的链式法则 $p(x,y)=p(x)p(y\mid x)$，也是自回归生成模型（语言模型、PixelRNN）的根：先采 $X$，再用依赖 $X$ 的条件分布采 $Y$。乘积测度只是 $p(y\mid x)=p(y)$ 的退化特例。

> 💡 **CS视角**：$X^{-1}(A_1)$ 是"原像"，把取值空间的事件拉回样本空间 $\Omega$——和 ML 里 dataset.filter(lambda w: X(w) in A1) 一模一样，按某变量的取值条件筛样本。链式分解则是马尔可夫链一步转移的雏形：状态 $X$ 决定下一状态 $Y$ 的分布。

> 📝 **例**：先抛硬币 $X$，若正面（$\mathbb P=\tfrac12$）则掷骰子 $Y$、否则 $Y\equiv0$；求 $\mathbb P(X=H,\ Y=6)$。
> **步骤1**：初始分布 $\mathbb P(X=H)=\tfrac12$。
> **步骤2**：转移概率 $\mathbb P(Y=6\mid X=H)=\tfrac16$（正面才掷骰子）。
> **步骤3**：链式相乘 $\mathbb P(X=H,Y=6)=\mathbb P(X=H)\,\mathbb P(Y=6\mid X=H)=\tfrac12\cdot\tfrac16=\tfrac1{12}$。
> **结论**：$\mathbb P(X=H,Y=6)=\tfrac1{12}$——$Y$ 的分布随 $X$ 变化，无法写成乘积测度，必须用"初始分布 $\times$ 转移概率"，正是自回归采样的两步流程。`,

  "kp-6-8": String.raw`## 转移概率测度的定义
设 $(E_1,\Sigma_1),(E_2,\Sigma_2)$ 是两个可测空间，$\mathbb P(x_1,A)$ 是定义在 $E_1\times\Sigma_2$ 上的函数，若它满足
$$
\begin{aligned}
&(1)\ 给定\,x_1\in E_1,\ \mathbb P(x_1,\cdot)\,是\,\Sigma_2\,上的概率测度\\
&(2)\ 给定\,A\in\Sigma_2,\ \mathbb P(\cdot,A)\,是\,\Sigma_1\,上的可测函数
\end{aligned}
$$
则称 $\mathbb P$ 为 $E_1\times\Sigma_2$ 上的一个**转移概率测度**。它刻画"已知第一个坐标取 $x_1$ 后，第二个坐标落入 $A$ 的条件概率"。

> 💡 **CS视角**：当 $E_1,E_2$ 都有限时，转移概率测度就是一张**转移矩阵** $P[i][j]=\mathbb P(x_i,\{j\})$：每行（固定起点 $x_i$）是一个概率分布、行和为 $1$（条件(1)），列随起点变化（条件(2)）。马尔可夫链、强化学习的状态转移、HMM 的发射/转移概率全是它。

> 💡 **CS视角**：两个条件分别管"输出合法"和"输入可测"。条件(1) 保证给定输入后输出是真正的概率分布（softmax 行归一化）；条件(2) 保证它作为输入的函数能被积分（可以塞进期望/边缘化的循环里）。神经网络里 $x\mapsto\text{softmax}(f(x))$ 同时满足这两点，即一个参数化的转移概率核。

> 📝 **例**：两状态系统 $E_1=E_2=\{0,1\}$，转移矩阵 $\begin{pmatrix}0.8&0.2\\0.3&0.7\end{pmatrix}$，验证它是转移概率测度并读出 $\mathbb P(0,\{1\})$。
> **步骤1**：检查每行是分布——第 $0$ 行 $0.8+0.2=1$，第 $1$ 行 $0.3+0.7=1$，且各项 $\ge0$，满足条件(1)。
> **步骤2**：状态有限，$\mathbb P(\cdot,A)$ 是有限取值函数，自动可测，满足条件(2)。
> **步骤3**：从状态 $0$ 转到 $\{1\}$ 即矩阵第 $0$ 行第 $1$ 列，$\mathbb P(0,\{1\})=0.2$。
> **结论**：该矩阵是合法转移概率测度，$\mathbb P(0,\{1\})=0.2$——行归一对应"给定当前状态的输出分布"，正是马尔可夫链一步转移的数据结构。`,

  "kp-6-9": String.raw`## 由初始分布与转移概率构造测度（定理4.1.3）
设 $\mu_1$ 是 $\Sigma_1$ 上的概率测度，$\mathbb P(\cdot,\cdot)$ 是 $E_1\times\Sigma_2$ 上的转移概率测度，则在乘积可测空间上存在唯一概率测度 $\mu$，使得
$$
\mu(A_1\times A_2)=\int_{A_1}\mathbb P(x_1,A_2)\,\mu_1(dx_1)
$$
更一般地，对任意 $A\in\Sigma_1\times\Sigma_2$，
$$
\mu(A)=\int_{E_1}\mathbb P(x_1,A(x_1))\,\mu_1(dx_1)
$$
当 $\mathbb P(x_1,\cdot)\equiv\mu_2$ 与 $x_1$ 无关时，此式退化为乘积测度——即独立是"转移概率不依赖初始坐标"的特例。

> 💡 **CS视角**：这条定理是"初始分布 $\times$ 转移核 $\Rightarrow$ 联合分布"的存在性保证，正是马尔可夫链/HMM 联合概率 $p(x_1)\prod p(x_{t+1}\mid x_t)$ 良定义的根据。生成时先按 $\mu_1$ 采 $x_1$，再按 $\mathbb P(x_1,\cdot)$ 采下一步——ancestral sampling 的标准两步。

> 💡 **CS视角**：积分 $\int_{A_1}\mathbb P(x_1,A_2)\mu_1(dx_1)$ 在有限态下就是矩阵-向量乘 $\mu_1^\top P$：用初始分布行向量左乘转移矩阵，得到下一步的分布。把它跌代多步即 $\mu_1^\top P^t$，正是计算马尔可夫链 $t$ 步分布、PageRank 幂迭代的核心运算。

> 📝 **例**：初始分布 $\mu_1(\{0\})=0.6,\mu_1(\{1\})=0.4$，转移矩阵 $\begin{pmatrix}0.8&0.2\\0.3&0.7\end{pmatrix}$，求下一步落在状态 $1$ 的概率 $\mu(E_1\times\{1\})$。
> **步骤1**：用公式 $\mu(E_1\times\{1\})=\sum_{x_1}\mathbb P(x_1,\{1\})\mu_1(\{x_1\})$。
> **步骤2**：从 $0$ 出发 $0.6\times0.2=0.12$；从 $1$ 出发 $0.4\times0.7=0.28$。
> **步骤3**：相加 $0.12+0.28=0.40$。
> **结论**：下一步在状态 $1$ 的概率 $=0.40$——这正是行向量 $(0.6,0.4)$ 左乘转移矩阵后第 $2$ 个分量，初始分布与转移核合成了联合（及边缘）分布。`,

  "kp-7-1": String.raw`## Fubini 定理（非负情形，定理4.2.1）
设 $(E_1,\Sigma_1,\mu_1)$ 和 $(E_2,\Sigma_2,\mu_2)$ 是两个概率空间，$f$ 是 $(E_1\times E_2,\Sigma_1\times\Sigma_2)$ 上非负可测函数，则
$$
\underset{E_1\times E_2}{\int\int} f(x_1,x_2)\,d(\mu_1\times\mu_2)=\int_{E_1}\mu_1(dx_1)\int_{E_2}f(x_1,x_2)\,\mu_2(dx_2)=\int_{E_2}\mu_2(dx_2)\int_{E_1}f(x_1,x_2)\,\mu_1(dx_1)
$$
即乘积空间上的二重积分可化为累次积分，且换序不改变结果。

**证明思路**：分四步逐层推广。

(1) $f=1_B,\ B\in\Sigma_1\times\Sigma_2$ 时，由乘积测度的定义
$$
\begin{aligned}
\underset{E_1\times E_2}{\int\int} 1_B\,d(\mu_1\times\mu_2)
&=\int_{E_2}\mu_1(B(x_2))\,\mu_2(dx_2)\\
&=\int_{E_2}\mu_2(dx_2)\int_{E_1}1_{B(x_2)}(x_1)\,\mu_1(dx_1)\\
&=\int_{E_2}\mu_2(dx_2)\int_{E_1}1_B(x_1,x_2)\,\mu_1(dx_1)
\end{aligned}
$$

(2) $f=\sum_{i=1}^n b_i 1_{B_i}$ 非负简单时，由线性性逐项相加即得。

(3) $f$ 非负可测时，取非负简单函数 $f_n\uparrow f$，由 Levi 定理两次令 $n\to\infty$ 即得。

> 💡 **CS视角**：Fubini 就是「二重循环换序」的数学许可证。代码里 for i: for j: sum += f(i,j) 和 for j: for i: sum += f(i,j) 结果相同——前提是被加项非负（或绝对可和）。非负情形下永远能换序，这也是分布式聚合(MapReduce)里 reduce 可以任意分组、并行求和不出错的理论依据。

> 💡 **CS视角**：把高维联合分布的期望 $\mathbb E[f(X_1,X_2)]$ 拆成累次积分 $\int\!\big(\int f\,\mu_2\big)\mu_1$，正是概率图模型里「变量消去法」(variable elimination)的根：一次只对一个变量求和/积分，逐个消掉，把指数级联合求和降成一连串低维求和。

> 📝 **例**：在 $[0,1]^2$ 上对 $f(x,y)=x+y$（关于 Lebesgue 测度，即两个独立均匀分布）算二重积分，验证两种换序一致。
> **步骤1**：先对 $y$ 后对 $x$：$\int_0^1\!\big(\int_0^1(x+y)\,dy\big)dx=\int_0^1\big(x+\tfrac12\big)dx=\tfrac12+\tfrac12=1$。
> **步骤2**：先对 $x$ 后对 $y$：$\int_0^1\!\big(\int_0^1(x+y)\,dx\big)dy=\int_0^1\big(\tfrac12+y\big)dy=\tfrac12+\tfrac12=1$。
> **步骤3**：再直接看二重积分 $\iint(x+y)=\iint x+\iint y=\tfrac12+\tfrac12=1$，三者一致。
> **结论**：两种累次次序都得 $1$，等于二重积分——非负被积函数换序自由，对应程序里嵌套求和循环可任意交换内外层。`,

  "kp-7-2": String.raw`## Fubini 定理（可积情形，定理4.2.2）
设 $(E_1,\Sigma_1,\mu_1)$ 和 $(E_2,\Sigma_2,\mu_2)$ 是两个概率空间，$f$ 是 $(E_1\times E_2,\Sigma_1\times\Sigma_2)$ 上实可测函数，若 $\underset{E_1\times E_2}{\int\int}f\,d(\mu_1\times\mu_2)$ 存在，则
$$
\underset{E_1\times E_2}{\int\int} f(x_1,x_2)\,d(\mu_1\times\mu_2)=\int_{E_1}\mu_1(dx_1)\int_{E_2}f(x_1,x_2)\,\mu_2(dx_2)=\int_{E_2}\mu_2(dx_2)\int_{E_1}f(x_1,x_2)\,\mu_1(dx_1)
$$

**证明**：由上一定理（非负情形）可知对 $f^\pm$ 分别有
$$
\underset{E_1\times E_2}{\int\int} f^{\pm}\,d(\mu_1\times\mu_2)=\int_{E_1}\mu_1(dx_1)\int_{E_2}f^{\pm}\,\mu_2(dx_2)
$$
所以
$$
\begin{aligned}
\underset{E_1\times E_2}{\int\int} f\,d(\mu_1\times\mu_2)
&=\underset{E_1\times E_2}{\int\int} f^+\,d(\mu_1\times\mu_2)-\underset{E_1\times E_2}{\int\int} f^-\,d(\mu_1\times\mu_2)\\
&=\int_{E_1}\mu_1(dx_1)\int_{E_2}f^+\,\mu_2(dx_2)-\int_{E_1}\mu_1(dx_1)\int_{E_2}f^-\,\mu_2(dx_2)\\
&=\int_{E_1}\mu_1(dx_1)\int_{E_2}(f^+-f^-)\,\mu_2(dx_2)=\int_{E_1}\mu_1(dx_1)\int_{E_2}f\,\mu_2(dx_2)
\end{aligned}
$$

> 💡 **CS视角**：可积情形的关键是「积分存在」这个前提——对应工程里的绝对收敛要求。若被加项有正有负且只是条件收敛，换序会得到不同结果（黎曼级数重排定理是同一陷阱）；所以做浮点级数累加、并行 reduce 时，必须确认 $\sum|f|<\infty$ 才能放心换序或分组。

> 💡 **CS视角**：把 $f$ 拆成正负部 $f=f^+-f^-$ 各自非负、分别用非负 Fubini，正是数值计算里「分通道处理再相减」的稳健写法——分开累加正贡献与负贡献，避免大数相消导致的精度灾难。

> 📝 **例**：在 $[0,1]^2$ 上对 $f(x,y)=x-y$ 验证 Fubini 换序（被积函数可正可负但有界可积）。
> **步骤1**：拆正负或直接累次。先对 $y$：$\int_0^1(x-y)\,dy=x-\tfrac12$，再对 $x$：$\int_0^1(x-\tfrac12)\,dx=\tfrac12-\tfrac12=0$。
> **步骤2**：换序，先对 $x$：$\int_0^1(x-y)\,dx=\tfrac12-y$，再对 $y$：$\int_0^1(\tfrac12-y)\,dy=\tfrac12-\tfrac12=0$。
> **步骤3**：检查可积性 $\iint|x-y|<\infty$（有界区域上有界函数）成立，故换序合法，两值应相等。
> **结论**：两种次序都得 $0$——只要绝对可积，正负混合也能放心换序；这正是写带符号的并行求和前要先确认绝对收敛的原因。`,

  "kp-7-3": String.raw`## 期望的尾积分公式（例1）
设 $X$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上非负随机变量，则
$$
\mathbb E[X]=\int_{0}^{+\infty}\mathbb P(X>x)\,dx=\int_{0}^{+\infty}(1-F(x))\,dx=\int_{0}^{+\infty}\mathbb P(X\ge x)\,dx
$$
即非负随机变量的期望等于其生存函数（尾概率）在 $[0,\infty)$ 上的积分。

最后一个等号成立是因为 $\mathbb P(X>x)$ 单调，最多有可数多个不连续点，从而
$$
\int_{0}^{+\infty}\mathbb P(X>x)\,dx=\int_{0}^{+\infty}\mathbb P(X\ge x)\,dx
$$

> 💡 **CS视角**：$\mathbb E[X]=\int_0^\infty\mathbb P(X>x)\,dx$ 是「按层切割」(layer cake) 求面积：把 $X$ 想成柱状图的高度，期望 = 对每个高度 $x$ 统计「超过 $x$ 的占比」再积分。性能分析里算平均延迟时，常直接对生存函数(尾分布 $\mathbb P(X>x)$)积分，而不去拟合完整密度。

> 💡 **CS视角**：离散版 $\mathbb E[X]=\sum_{x\ge1}\mathbb P(X\ge x)$ 在算法分析中极常用——比如「期望比较次数 = $\sum_k\mathbb P(至少比较 k 次)$」，把求期望转成一串尾概率求和，往往比直接枚举取值容易得多。

> 📝 **例**：设 $X$ 服从参数 $\lambda=2$ 的指数分布（尾概率 $\mathbb P(X>x)=e^{-2x}$），用尾积分公式算 $\mathbb E[X]$。
> **步骤1**：写出尾概率 $\mathbb P(X>x)=e^{-2x}\ (x\ge0)$。
> **步骤2**：代入公式 $\mathbb E[X]=\int_0^{+\infty}e^{-2x}\,dx$。
> **步骤3**：积分 $\int_0^{+\infty}e^{-2x}\,dx=\big[-\tfrac12 e^{-2x}\big]_0^{+\infty}=0-(-\tfrac12)=\tfrac12$。
> **结论**：$\mathbb E[X]=\tfrac12$，与指数分布期望 $1/\lambda=1/2$ 吻合——尾积分法绕开了密度乘 $x$ 的积分，对生存函数直接积分即可。`,

  "kp-7-4": String.raw`## 高阶矩的尾积分公式（例2）
$X$ 是非负随机变量，则 $\forall r>0$，
$$
\mathbb E[X^r]=r\int_{0}^{+\infty}x^{r-1}\mathbb P(X>x)\,dx
$$

**证明**：利用 $x^r=\int_0^x ry^{r-1}\,dy$ 并交换积分次序（Fubini）：
$$
\begin{aligned}
\mathbb E[X^r]
&=\int_{-\infty}^{+\infty}x^r\,\mu_X(dx)=\int_{0}^{+\infty}x^r\,\mu_X(dx)\\
&=\int_{0}^{+\infty}\mu_X(dx)\int_{0}^x ry^{r-1}\,dy\\
&=\int_{0}^{+\infty}ry^{r-1}\,dy\int_y^{\infty}\mu_X(dx)\\
&=\int_{0}^{+\infty}ry^{r-1}\mathbb P(X\ge y)\,dy
\end{aligned}
$$

> 💡 **CS视角**：这是上一条尾积分公式的「带权版」——求 $r$ 阶矩时给每个高度 $y$ 乘上权重 $ry^{r-1}$ 再对尾概率积分。机器学习里算方差($r=2$)或重尾分布的高阶矩时，若只有尾概率的经验估计(如 P99/P999 分位)，可直接套这个公式数值积分，无需先估密度。

> 💡 **CS视角**：核心技巧是把 $x^r$ 写成积分 $\int_0^x ry^{r-1}dy$ 引入新变量再换序——这种「用积分表示标量、再用 Fubini 换序」是概率分析里的万能套路，类似程序里把一个值展开成循环求和以便重排聚合顺序。

> 📝 **例**：仍设 $X$ 服从 $\lambda=2$ 的指数分布（$\mathbb P(X\ge y)=e^{-2y}$），用公式算二阶矩 $\mathbb E[X^2]$。
> **步骤1**：取 $r=2$，公式为 $\mathbb E[X^2]=2\int_0^{+\infty}y\,\mathbb P(X\ge y)\,dy=2\int_0^{+\infty}y\,e^{-2y}\,dy$。
> **步骤2**：用 $\int_0^{+\infty}y e^{-ay}\,dy=1/a^2$（这里 $a=2$）得 $\int_0^{+\infty}y e^{-2y}\,dy=1/4$。
> **步骤3**：代回 $\mathbb E[X^2]=2\times\tfrac14=\tfrac12$。
> **结论**：$\mathbb E[X^2]=\tfrac12$，于是方差 $\mathrm{Var}(X)=\mathbb E[X^2]-(\mathbb E X)^2=\tfrac12-(\tfrac12)^2=\tfrac14=1/\lambda^2$，与指数分布理论值一致。`,

  "kp-7-5": String.raw`## 级数与积分交换（例3，计数测度视角）
$$
若\ S(x)=\sum_{n=1}^{\infty}a_n(x),\ a_n(x)\ge0,\ 则\ \int_{a}^b S(x)\,dx=\int_{a}^b\sum_{n=1}^{\infty}a_n(x)\,dx=\sum_{n=1}^{\infty}\int_{a}^b a_n(x)\,dx
$$

**证明**：把 $a_n(x)$ 改写为二元函数 $a(n,x)$，映射 $a:\mathbb N\times[a,b]\to\mathbb R^+$。考虑 $\mathbb N$ 上的计数测度 $\mu(B)=\sharp B=|B|$，则
$$
\int_{\{m\}}a(n,x)\,\mu(dn)=a(m,x)\int_{\{m\}}\mu(dn)=a(m,x)
$$
从而 $\sum_{n=1}^{\infty}a(n,x)=\int_{\mathbb N}a(n,x)\,\mu(dn)$。因此由 Fubini 定理
$$
\begin{aligned}
\int_{a}^b\sum_{n=1}^{\infty}a_n(x)\,dx
&=\int_{a}^b\int_{\mathbb N}a(n,x)\,\mu(dn)\,dx\\
&=\int_{\mathbb N}\int_{a}^b a(n,x)\,dx\,\mu(dn)=\sum_{n=1}^{\infty}\int_{a}^b a_n(x)\,dx
\end{aligned}
$$

> 💡 **CS视角**：关键洞察是「求和就是对计数测度积分」——离散的 $\sum_n$ 和连续的 $\int$ 在测度论里是同一件事，差别只在测度是计数测度还是 Lebesgue 测度。这统一了「累加器循环」与「数值积分」，也是为什么很多库(如概率编程框架)对离散和连续随机变量用同一套 API。

> 💡 **CS视角**：「逐项积分 = 先积分再求和」在非负前提下总成立(本质是 Tonelli 定理)，正对应流式处理里「先对每个分片求和再汇总 = 先按列汇总再求和」。一旦项可正可负，就必须先验证绝对可和才能换序，否则结果依赖求和顺序。

> 📝 **例**：取 $a_n(x)=x^{n-1}(1-x)$ 在 $[0,1]$ 上（非负），验证「先求和再积分 = 先积分再求和」。
> **步骤1**：先求和。$\sum_{n=1}^\infty x^{n-1}(1-x)=(1-x)\sum_{n=0}^\infty x^n=(1-x)\cdot\tfrac1{1-x}=1$（$0\le x<1$），故 $\int_0^1 1\,dx=1$。
> **步骤2**：先积分。$\int_0^1 x^{n-1}(1-x)\,dx=\tfrac1n-\tfrac1{n+1}=\tfrac1{n(n+1)}$。
> **步骤3**：再求和。$\sum_{n=1}^\infty\tfrac1{n(n+1)}=\sum_{n=1}^\infty\big(\tfrac1n-\tfrac1{n+1}\big)=1$（裂项相消，望远镜求和）。
> **结论**：两条路都得 $1$——非负项的级数与积分可自由换序，对应程序里非负贡献的累加无论先按行还是先按列汇总，结果一致。`,

  "kp-7-6": String.raw`## 转移概率测度下的 Fubini（定理4.2.3）
$(E_1,\Sigma_1),(E_2,\Sigma_2)$ 是两个可测空间，$\mu_1$ 是 $(E_1,\Sigma_1)$ 上概率测度，$\mathbb P(x,B)$ 是 $E_1\times\Sigma_2$ 上转移概率测度，$\mu$ 是 $\Sigma_1\times\Sigma_2$ 上如下定义的概率测度：
$$
\mu(B)=\int_{E_1}\mathbb P(x,B)\,\mu_1(dx),\quad B\in\Sigma_1\times\Sigma_2
$$
$f$ 是 $\Sigma_1\times\Sigma_2$ 上可测函数，若 $\underset{E_1\times E_2}{\int\int}f\,d\mu$ 存在，则
$$
\underset{E_1\times E_2}{\int\int}f\,d\mu=\int_{E_1}\mu_1(dx)\int_{E_2}f(x,y)\,\mathbb P(x,dy)
$$

证明思路依旧是从示性函数到简单函数、再到非负可测函数、最后到一般可测函数的步骤处理。

> 💡 **CS视角**：转移概率测度 $\mathbb P(x,\cdot)$ 就是「给定当前状态 $x$，下一步的条件分布」——马尔可夫链转移核、强化学习里的环境转移 $P(s'\mid s)$ 都是它。这里的 $\mu$ 是「先按 $\mu_1$ 采 $x$，再按 $\mathbb P(x,\cdot)$ 采 $y$」的联合分布，比普通乘积测度多了一层依赖。

> 💡 **CS视角**：公式 $\int f\,d\mu=\int\mu_1(dx)\int f(x,y)\mathbb P(x,dy)$ 正是「全期望/塔法则」$\mathbb E[f]=\mathbb E_x[\mathbb E_y[f\mid x]]$ 的积分写法——先固定 $x$ 求内层条件期望，再对 $x$ 求外层期望。这是蒙特卡洛分层采样、变分推断里 ELBO 嵌套期望估计的数学骨架。

> 📝 **例**：$x\in\{0,1\}$ 以 $\mu_1(0)=\mu_1(1)=\tfrac12$；给定 $x$，$y$ 取 $x$ 或 $x+1$ 各半（转移核）。算 $f(x,y)=y$ 的期望 $\int f\,d\mu$。
> **步骤1**：内层条件期望 $\int y\,\mathbb P(x,dy)=\tfrac12 x+\tfrac12(x+1)=x+\tfrac12$。
> **步骤2**：外层对 $x$ 求期望 $\int(x+\tfrac12)\,\mu_1(dx)=\tfrac12(0+\tfrac12)+\tfrac12(1+\tfrac12)=\tfrac14+\tfrac34=1$。
> **步骤3**：核对：四条路径 $(0,0),(0,1),(1,1),(1,2)$ 各概率 $\tfrac14$，$y$ 均值 $=\tfrac14(0+1+1+2)=1$，一致。
> **结论**：$\int f\,d\mu=1$，先算条件期望再求外层期望（塔法则），与直接枚举联合分布结果相同——这正是分层采样估计期望的合法性来源。`,

  "kp-7-7": String.raw`## 无穷乘积测度的存在唯一性（定理4.3.1）
设 $(E_n,\Sigma_n,\mu_n)\ (n\ge1)$ 是一列概率空间，则在 $(\times_{n=1}^{\infty}E_n,\times_{n=1}^{\infty}\Sigma_n)$ 上存在唯一的概率测度 $\mu$，满足
$$
\mu(B_1\times\cdots\times B_n\times E_{n+1}\times E_{n+2}\times\cdots)=\mu_1(B_1)\times\cdots\times\mu_n(B_n)
$$
对一切 $B_i\in\Sigma_i,\ 1\le i\le n,\ \forall n\ge1$；或等价地
$$
\mu(B^{(n)}\times E_{n+1}\times E_{n+2}\times\cdots)=\Big(\times_{k=1}^n\mu_k\Big)(B^{(n)}),\quad\forall B^{(n)}\in\times_{i=1}^{n}\Sigma_i
$$
称 $\mu$ 为 $\{\mu_n\}$ 的乘积测度，记为
$$
\mu=\mu_1\times\mu_2\times\cdots=\times_{n=1}^{\infty}\mu_n
$$

> 💡 **CS视角**：无穷乘积测度回答了「能不能定义一个无限长的独立随机序列」——比如无限抛硬币、无限随机比特流。定理保证：只要规定每个有限前缀的分布（柱集概率），就唯一确定整个无限序列的概率律。这是伪随机数生成器、无限流采样在数学上站得住脚的根据。

> 💡 **CS视角**：「由有限维分布唯一延拓出无穷维测度」是 Kolmogorov 相容性/扩张定理的精神——分布式系统里只能观测有限个事件，却要谈整条无限轨迹的概率，靠的就是这种从有限到无限的唯一延拓。柱集 $B_1\times\cdots\times B_n\times E_{n+1}\times\cdots$ 正是「只约束前 $n$ 个坐标、其余放任」的事件。

> 📝 **例**：无限独立抛均匀硬币，$E_n=\{0,1\},\mu_n(\{1\})=\tfrac12$。求「前 $3$ 次都是正面($1$)」的概率。
> **步骤1**：事件是柱集 $\{1\}\times\{1\}\times\{1\}\times E_4\times E_5\times\cdots$，只约束前 $3$ 个坐标。
> **步骤2**：由乘积测度定义，柱集概率 $=\mu_1(\{1\})\mu_2(\{1\})\mu_3(\{1\})=\tfrac12\cdot\tfrac12\cdot\tfrac12$。
> **步骤3**：计算 $\tfrac12\cdot\tfrac12\cdot\tfrac12=\tfrac18$。
> **结论**：概率 $=\tfrac18$，只由前 $3$ 个分量的边缘分布决定，与第 $4$ 次以后如何无关——无穷乘积测度把「有限前缀概率」唯一延拓到了整条无限序列上。`,

  "kp-7-8": String.raw`## 乘积空间上的独立随机变量列（例1）
设 $(E_n,\Sigma_n,\mu_n)\ (n\ge1)$ 是一列概率空间，定义
$$
(\Omega,\mathcal F,\mathbb P)=\Big(\times_{n=1}^{\infty}E_n,\ \times_{n=1}^{\infty}\Sigma_n,\ \times_{n=1}^{\infty}\mu_n\Big)
$$
第 $n$ 个分量 $X_n(w)=w_n$，则 $\{X_n\}$ 在 $\mathbb P$ 下相互独立，$X_n$ 取值于 $E_n$，分布是 $\mu_n$。

**证明**：取值于 $E_n$ 以及独立性显然，计算概率
$$
p=\mathbb P\big((w_1,...,w_n,w_{n+1},...)\in(E_1,...,E_{n-1},B_n,E_{n+1},...)\big)
$$
该概率等于
$$
\begin{aligned}
p&=\mu_1(E_1)\cdots\mu_{n-1}(E_{n-1})\,\mu_n(B_n)\,\mu_{n+1}(E_{n+1})\cdots\\
&=\mu_n(B_n)
\end{aligned}
$$

> 💡 **CS视角**：这条定理给出 i.i.d.（独立同分布）序列的标准构造：取坐标映射 $X_n(w)=w_n$，乘积测度自动保证它们独立、各自服从 $\mu_n$。机器学习里「假设训练样本 i.i.d.」在数学上就落地为这个乘积概率空间，似然 $\prod_n p(X_n)$ 的可分解性也由此而来。

> 💡 **CS视角**：投影函数 $X_n=$「取第 $n$ 个坐标」恰好对应程序里 sample[n]——一次采样得到整个序列 $w$，第 $n$ 个分量就是第 $n$ 个随机变量。边缘 $\mathbb P(X_n\in B_n)=\mu_n(B_n)$ 因其余坐标全取整空间(概率 $1$)而不受影响。

> 📝 **例**：无限抛均匀硬币，$E_n=\{0,1\},\mu_n(\{1\})=\tfrac12$，$X_n=$ 第 $n$ 次结果。求 $\mathbb P(X_2=1)$ 与 $\mathbb P(X_1=1,X_2=1)$。
> **步骤1**：$X_2=1$ 是柱集 $E_1\times\{1\}\times E_3\times\cdots$，概率 $=\mu_1(E_1)\mu_2(\{1\})\cdots=1\cdot\tfrac12\cdot1\cdots=\tfrac12$。
> **步骤2**：$\{X_1=1,X_2=1\}$ 是柱集 $\{1\}\times\{1\}\times E_3\times\cdots$，概率 $=\tfrac12\cdot\tfrac12=\tfrac14$。
> **步骤3**：验证独立 $\mathbb P(X_1=1)\mathbb P(X_2=1)=\tfrac12\cdot\tfrac12=\tfrac14=\mathbb P(X_1=1,X_2=1)$。
> **结论**：边缘概率各为 $\tfrac12$，联合等于乘积，故 $X_1,X_2$ 独立——坐标投影 + 乘积测度天然生成 i.i.d. 序列。`,

  "kp-7-9": String.raw`## 无穷乘积集的测度（习题）
$$
\mu\Big(\prod_{i=1}^{\infty}B_i\Big)=\prod_{i=1}^{\infty}\mu(B_i)
$$

**证明**：记 $A_n=\prod_{i=1}^{n}B_i$，则 $A_n\downarrow\prod_{i=1}^{\infty}B_i$，由定义可知
$$
\mu(A_n)=\prod_{i=1}^{n}\mu(B_i)
$$
因为 $\mu$ 是概率测度（上连续），所以
$$
\begin{aligned}
\lim_{n\to\infty}\mu(A_n)
&=\lim_{n\to\infty}\prod_{i=1}^{n}\mu(B_i)\\
&=\mu\Big(\lim_{n\to\infty}A_n\Big)=\mu\Big(\prod_{i=1}^{\infty}B_i\Big)
\end{aligned}
$$
因此 $\mu\big(\prod_{i=1}^{\infty}B_i\big)=\prod_{i=1}^{\infty}\mu(B_i)$。

> 💡 **CS视角**：这把「有限柱集概率 = 有限连乘」推到「无限连乘」，关键工具是概率测度的上连续性（$A_n\downarrow A\Rightarrow\mu(A_n)\to\mu(A)$）。直觉上：每多约束一个坐标，事件就缩小一点、概率就乘上一个 $\le1$ 的因子，无穷连乘要么收敛到正数、要么塌到 $0$。

> 💡 **CS视角**：无穷连乘 $\prod\mu(B_i)$ 常会迅速趋于 $0$（每个因子 $<1$）——这就是「无限多个独立约束同时成立几乎不可能」的量化。在分布式系统里，要求无限多节点同时满足某条件，整体成功概率往往是 $0$，正源于此；数值上也提示用对数 $\sum\log\mu(B_i)$ 来避免下溢。

> 📝 **例**：无限抛均匀硬币，问「每一次都是正面」($B_i=\{1\},\mu(B_i)=\tfrac12$) 的概率。
> **步骤1**：前 $n$ 次都正面是柱集 $A_n=\{1\}^n\times E_{n+1}\times\cdots$，$\mu(A_n)=\prod_{i=1}^n\tfrac12=(\tfrac12)^n$。
> **步骤2**：$A_n\downarrow\{$全程正面$\}$，由上连续性 $\mu(\text{全程正面})=\lim_{n\to\infty}(\tfrac12)^n$。
> **步骤3**：计算极限 $\lim_{n\to\infty}(\tfrac12)^n=0$。
> **结论**：「无限次全正面」的概率为 $0$——无穷多个 $<1$ 的因子连乘塌到 $0$，正是「无限多个独立约束同时成立几乎不可能」的写照。`,

  "kp-8-1": String.raw`## 符号测度的定义
设 $(E,\Sigma)$ 是一可测空间，$\mu$ 是定义在 $\Sigma$ 上的函数，满足
$$
\begin{aligned}
&(1)\ \mu(\varnothing)=0 \\
&(2)\ A_n\in\Sigma\,互不相交\Rightarrow\mu\Big(\bigcup_{n=1}^{\infty}A_n\Big)=\sum_{n=1}^{\infty}\mu(A_n)
\end{aligned}
$$
则称 $\mu$ 是 $\Sigma$ 上的**符号测度**。

注：$\mu$ 最多只能取 $\pm\infty$ 之一。这是因为
$$
若\,\mu(A)=-\infty，则\,\mu(E)=\mu(A)+\mu(A^C)=-\infty \\
若\,\mu(B)=+\infty，则\,\mu(E)=\mu(B)+\mu(B^C)=+\infty
$$
从而产生了矛盾。

**背景**：若随机变量 $X$ 的 $\mathbb E[X]$ 存在，则 $\nu(A)=\int_A x\,d\mathbb P=\mathbb E[X1_A]=\int_A x^+\,d\mathbb P-\int_A x^-\,d\mathbb P$ 是一个符号测度，这正是引入符号测度的动机。

> 💡 **CS视角**：普通测度像只能加分的计数器（非负），符号测度则像一本**带正负的资源记账本**：某些账户余额为正（收入），某些为负（支出）。可列可加性保证把账户合并统计时总额一致——就像分布式系统里各分片求和等于全局聚合。

> 💡 **CS视角**："最多取 $\pm\infty$ 之一"是为了避免 $+\infty+(-\infty)$ 这种未定义运算，等同于浮点里 $\text{Inf}-\text{Inf}=\text{NaN}$ 的陷阱：定义域必须排除会触发 NaN 的组合，否则可加性就崩了。

> 📝 **例**：设 $\mu$ 由 $\mu(A)=\int_A x\,d\mathbb P$ 给出，$X$ 在 $\{-2,3\}$ 上取值，$\mathbb P(X=-2)=0.5,\ \mathbb P(X=3)=0.5$，求 $\mu(\Omega)$。
> **步骤1**：拆成正负两部分 $\mu(\Omega)=\int x^+\,d\mathbb P-\int x^-\,d\mathbb P$。
> **步骤2**：正部 $\int x^+\,d\mathbb P=3\times0.5=1.5$，负部 $\int x^-\,d\mathbb P=2\times0.5=1.0$。
> **步骤3**：$\mu(\Omega)=1.5-1.0=0.5$，恰为 $\mathbb E[X]$。
> **结论**：符号测度的全空间值可正可负可零，这里 $\mu(\Omega)=0.5$——就是一本收支相抵后净值为 $+0.5$ 的账本。`,

  "kp-8-2": String.raw`## 符号测度的极值分解（定理5.1.1）
若 $\mu$ 是 $\Sigma$ 上的符号测度，则存在 $N,P\in\Sigma$，满足
$$
\begin{aligned}
&(1)\ NP=\varnothing,\ N\bigcup P=E \\
&(2)\ \mu(P)=\sup_{A\in\Sigma}\mu(A)\ge0,\quad \mu(N)=\inf_{A\in\Sigma}\mu(A)\le0
\end{aligned}
$$
即全空间 $E$ 可被分成一块"正集" $P$（达到测度上确界）和一块"负集" $N$（达到测度下确界）。

这个定理的证明从略，可以参考教材。

> 💡 **CS视角**：把每个点按其"贡献符号"二分类，$P$ 收集全部正贡献、$N$ 收集全部负贡献——和按收益正负把交易划成两堆完全一样。$\mu(P)$ 是"只统计赚钱交易"的最大可能总额，$\mu(N)$ 是"只统计亏钱交易"的最小（最负）总额。

> 💡 **CS视角**：这相当于一次最优划分：要最大化所选子集的测度，贪心地选所有正贡献点即可，正好得到 $P$。这与"最大子段和"里只累加正项的直觉同源。

> 📝 **例**：离散空间 $E=\{1,2,3\}$，符号测度 $\mu(\{1\})=2,\ \mu(\{2\})=-3,\ \mu(\{3\})=1$（对子集取和），求极值分解 $P,N$ 及 $\mu(P),\mu(N)$。
> **步骤1**：找正贡献点 $\{1\},\{3\}$ 测度为正，负贡献点 $\{2\}$ 测度为负。
> **步骤2**：取 $P=\{1,3\}$，则 $\mu(P)=2+1=3$，是所有子集中测度最大者。
> **步骤3**：取 $N=\{2\}$，则 $\mu(N)=-3$，是所有子集中测度最小者。
> **结论**：$P=\{1,3\},\ N=\{2\}$，$\mu(P)=3=\sup,\ \mu(N)=-3=\inf$——按符号把点归堆即得极值集。`,

  "kp-8-3": String.raw`## Hahn 分解与 Jordan 分解（定理5.1.2）
若 $\mu$ 是 $\Sigma$ 上符号测度，则存在 $N,P$ 满足
$$
NP=\varnothing,\ N\bigcup P=E，且\,\forall A\in\Sigma，\\
\mu(P\bigcap A)=\sup_{B\subset\Sigma}\mu(B\bigcap A)\ge0 \\
\mu(N\bigcap A)=\inf_{B\subset\Sigma}\mu(B\bigcap A)\le0
$$
于是定义
$$
\mu^+(A)=\mu(P\bigcap A),\quad \mu^-(A)=-\mu(N\bigcap A),\quad |\mu|(A)=\mu^+(A)+\mu^-(A)
$$
则 $\mu^+,\mu^-,|\mu|$ 都是 $\Sigma$ 上的测度且 $\mu=\mu^+-\mu^-$。

**证明**：取 $N,P$ 为定理5.1.1中的 $N,P$，先证 $\mu(P\bigcap A)=\sup_{B\subset\Sigma}\mu(B\bigcap A)$。利用反证法，若存在 $B$ 使得 $\mu(P\bigcap A)<\mu(B\bigcap A)$，那么
$$
\begin{aligned}
\mu(P)&=\mu(P\bigcap A)+\mu(P\bigcap A^C) \\
&<\mu(B\bigcap A)+\mu(P\bigcap A^C) \\
&=\mu((B\bigcap A)\bigcup(P\bigcap A^C))
\end{aligned}
$$
这就与 $\mu(P)$ 最大矛盾。进一步，$\forall B\in\Sigma$
$$
\mu(N\bigcap A)=\mu(A)-\mu(P\bigcap A)\le\mu(A)-\mu(B^C\bigcap A)=\mu(B\bigcap A)
$$
故 $\mu(N\bigcap A)=\inf_{B\subset\Sigma}\mu(B\bigcap A)$。$\mu^+,\mu^-,|\mu|$ 是测度由定义验证，而 $\mu=\mu^+-\mu^-$ 由 $\mu(A)=\mu(P\bigcap A)+\mu(N\bigcap A)=\mu^+(A)-\mu^-(A)$ 即得。

> 💡 **CS视角**：Jordan 分解 $\mu=\mu^+-\mu^-$ 就是把带符号量拆成"正部 - 负部"，和 PyTorch 里 relu(x) 与 relu(-x) 把张量拆成正负两个非负张量一模一样；$|\mu|=\mu^++\mu^-$ 则对应 abs(x)，是衡量"总变动量"的全变差。

> 💡 **CS视角**：Hahn 分解给出的 $P,N$ 是固定一次的全局划分，之后任何事件 $A$ 的正负贡献都通过 $A\cap P$ 与 $A\cap N$ 读出——相当于预计算一张符号查找表，查询 $O(1)$，避免每次都重新做最优划分。

> 📝 **例**：$E=\{1,2,3\}$，$\mu(\{1\})=2,\mu(\{2\})=-3,\mu(\{3\})=1$，已知 Hahn 分解 $P=\{1,3\},N=\{2\}$，求 $\mu^+,\mu^-,|\mu|$ 在全空间的值。
> **步骤1**：$\mu^+(E)=\mu(P\cap E)=\mu(\{1,3\})=2+1=3$。
> **步骤2**：$\mu^-(E)=-\mu(N\cap E)=-\mu(\{2\})=-(-3)=3$。
> **步骤3**：$|\mu|(E)=\mu^+(E)+\mu^-(E)=3+3=6$，而 $\mu(E)=\mu^+-\mu^-=3-3=0$。
> **结论**：净测度 $\mu(E)=0$ 但全变差 $|\mu|(E)=6$——好比一笔笔交易净额为 $0$ 却有 $6$ 的总流水，正负相消后净值与总活跃度是两回事。`,

  "kp-8-4": String.raw`## μ-连续与 μ-奇异
设 $(E,\Sigma)$ 是一可测空间，$\mu$ 是定义在 $\Sigma$ 上的函数，$\varphi$ 是 $\Sigma$ 上符号测度。
$$
\varphi\,是\,\mu\text{-连续},\ 若\,\mu(A)=0\Rightarrow\varphi(A)=0 \\
\varphi\,是\,\mu\text{-奇异},\ 若存在\,N\in\Sigma，使得\,\mu(N)=0\,且\,\forall A\in\Sigma,\ \varphi(A\bigcap N^C)=0
$$
这两种情形分别记为 $\varphi\ll\mu$（绝对连续），$\varphi\perp\mu$（奇异）。

直观地说：$\varphi\ll\mu$ 表示 $\mu$ 的零集也是 $\varphi$ 的零集；$\varphi\perp\mu$ 表示 $\varphi$ 全部"质量"集中在 $\mu$ 的某个零集 $N$ 上，两者支撑互不重叠。这两个概念是为引入下面的 Lebesgue 分解定理作准备。

> 💡 **CS视角**：$\varphi\ll\mu$ 即"$\mu$ 的支撑包含 $\varphi$ 的支撑"——凡 $\mu$ 没覆盖的地方 $\varphi$ 也必为零。重要性采样要求提议分布 $q$ 覆盖目标分布 $p$ 的支撑（$p\ll q$），否则权重 $p/q$ 在分母为零处爆炸，正是这条件的工程版。

> 💡 **CS视角**：$\varphi\perp\mu$ 即两个分布"住在互不相交的区域"，像稀疏向量里两组非零下标完全错开。连续分布与离散分布相互奇异：一个的质量铺在区间上（Lebesgue 测度），另一个集中在可数个点（这些点是 Lebesgue 零集）。

> 📝 **例**：判断 $\mathbb R$ 上 Dirac 测度 $\delta_0$（质量全在 $0$ 点）与 Lebesgue 测度 $\lambda$ 的关系。
> **步骤1**：取 $N=\{0\}$，Lebesgue 测度下单点 $\lambda(\{0\})=0$，即 $N$ 是 $\lambda$ 的零集。
> **步骤2**：对任意 $A$，$\delta_0(A\cap N^C)=\delta_0(A\setminus\{0\})=0$（$0$ 已被挖掉，再无质量）。
> **步骤3**：存在 $\lambda$ 零集 $N$ 装下 $\delta_0$ 的全部质量，符合奇异定义。
> **结论**：$\delta_0\perp\lambda$——点质量与连续质量互相奇异，二者支撑（单点 vs 整条直线的连续部分）错开。`,

  "kp-8-5": String.raw`## Lebesgue 分解定理（定理5.2.1）
设 $\mu$ 是 $\sigma$ 有限测度，$\varphi$ 是符号测度，则 $\varphi$ 可以唯一地表示为
$$
\varphi=\varphi_C+\varphi_S
$$
$\varphi_C,\varphi_S$ 为 $\Sigma$ 上符号测度，且存在 $(E,\Sigma)$ 可测函数 $f$，使得
$$
\varphi_C(A)=\int_A f\,d\mu,\quad(\varphi_C\ll\mu)，\quad 且\,\varphi_S\perp\mu
$$
$\sigma$ 有限的含义是可以把全空间分解为很多小块，每一块都有限。该定理的含义是可以把符号测度唯一分解为 $\mu$-连续部分 $\varphi_C$ 与 $\mu$-奇异部分 $\varphi_S$。

> 💡 **CS视角**：任何测度都能唯一拆成"有密度的部分 $\varphi_C$ + 落在零集上的部分 $\varphi_S$"，类比信号处理里把信号分解成"光滑分量 + 冲激分量"，或把混合分布拆成连续骨架加上若干离散尖峰。

> 💡 **CS视角**：$\sigma$ 有限是算法可行的前提——把无限空间切成可数个有限块逐块处理，正是 MapReduce 分块、流式分批的数学保证；没有它，"密度 $f$"未必存在。

> 📝 **例**：将混合分布 $\varphi=\tfrac12\,\lambda|_{[0,1]}+\tfrac12\,\delta_0$（一半均匀、一半点质量）关于 Lebesgue 测度 $\lambda$ 作 Lebesgue 分解。
> **步骤1**：连续部分 $\varphi_C=\tfrac12\,\lambda|_{[0,1]}$，其密度 $f(x)=\tfrac12 1_{[0,1]}(x)$，满足 $\varphi_C\ll\lambda$。
> **步骤2**：奇异部分 $\varphi_S=\tfrac12\,\delta_0$，集中在 $\lambda$ 零集 $\{0\}$ 上，满足 $\varphi_S\perp\lambda$。
> **步骤3**：验证 $\varphi=\varphi_C+\varphi_S$ 且分解唯一。
> **结论**：$\varphi_C$ 有密度 $\tfrac12 1_{[0,1]}$、$\varphi_S=\tfrac12\delta_0$——一条平滑密度曲线加上一根位于原点的尖峰，正是连续 + 离散的标准拆解。`,

  "kp-8-6": String.raw`## Radon-Nikodym 定理与 R-N 导数（定理5.2.2）
若 $\varphi$ 是 $\Sigma$ 上符号测度且 $\varphi\ll\mu$，则 $\varphi$ 可表示为
$$
\varphi(A)=\int_A f\,d\mu
$$
称 $f$ 为 $\varphi$ 关于 $\mu$ 的 **R-N 导数**，记为 $\frac{d\varphi}{d\mu}$。

根据上述定理，如下等式成立
$$
\varphi(A)=\int_A\frac{d\varphi}{d\mu}\,d\mu \\
\int g\,d\varphi=\int g\frac{d\varphi}{d\mu}\,d\mu
$$
即在 $\varphi\ll\mu$ 时，对 $\varphi$ 的积分可以"换元"为对 $\mu$ 的积分，只需乘上 R-N 导数这个密度因子。

> 💡 **CS视角**：R-N 导数 $\frac{d\varphi}{d\mu}$ 就是**概率密度函数**的本质——把概率测度 $\mathbb P$ 关于 Lebesgue 测度求 R-N 导数，得到的就是 PDF。机器学习里 $p(x)$ 几乎都是某个 R-N 导数。

> 💡 **CS视角**：第二式 $\int g\,d\varphi=\int g\frac{d\varphi}{d\mu}\,d\mu$ 正是**重要性采样**：想对分布 $\varphi$ 求期望却只能从 $\mu$ 采样，就给每个样本乘上权重 $w=\frac{d\varphi}{d\mu}$。要求 $\varphi\ll\mu$ 保证权重有限不爆炸，这也是上一节"支撑覆盖"条件的用处。

> 📝 **例**：设 $\varphi$ 为 $N(0,1)$ 概率测度、$\mu$ 为 Lebesgue 测度，已知 $\varphi\ll\mu$，写出 R-N 导数并用它把 $\mathbb E_\varphi[g]$ 化为 Lebesgue 积分。
> **步骤1**：R-N 导数即标准正态密度 $\frac{d\varphi}{d\mu}(x)=\frac{1}{\sqrt{2\pi}}e^{-x^2/2}$。
> **步骤2**：套用换元公式 $\int g\,d\varphi=\int g\frac{d\varphi}{d\mu}\,d\mu$。
> **步骤3**：得 $\mathbb E_\varphi[g]=\int_{-\infty}^{\infty} g(x)\,\frac{1}{\sqrt{2\pi}}e^{-x^2/2}\,dx$。
> **结论**：抽象的"对概率测度积分"落地成熟悉的"密度加权的常规积分"——R-N 导数就是连接测度与密度的桥。`,

  "kp-8-7": String.raw`## 分布函数的 Lebesgue 分解（定理5.2.3）
设 $F$ 是 $\mathbb R$ 上概率分布函数，则 $F$ 可以唯一地分解为
$$
F=\lambda_1 F_c+\lambda_2 F_d+\lambda_3 F_{s,c}
$$
其中 $F_c$ 是连续型分布函数，即存在可测函数 $p$ 使 $F_c(x)=\int_{-\infty}^x p(y)\,dy$；$F_d$ 是离散型分布函数，即存在 $\{x_k\}$ 和非负数列 $\{p_k\}$ 使 $\sum_{k}p_k=1,\ F_d(x)=\sum_{x_k\le x}p_k$；$F_{s,c}$ 是连续分布函数，它关于 Lebesgue 测度的导数几乎处处为 $0$ 而又不是非零常数；且 $\lambda_i\ge0,\ \sum_{i=1}^3\lambda_i=1$。

**证明思路**：定义 $\hat F_c(x)=\int_{-\infty}^x F'(y)\,dy$；设 $\{x_n\}$ 为 $F$ 的全体间断点（单调函数间断点可列），取 $p_k=F(x_k)-F(x_k^-)$ 并令 $\hat F_d(x)=\sum_{x_i\le x}p_i$；再令
$$
\hat F_{s,c}(x)\triangleq F(x)-\hat F_c(x)-\hat F_d(x)
$$
可验证 $\hat F_{s,c}$ 非负、非降、$\hat F'_{s,c}=0\ (a.e.)$ 且连续。归一化后即得 $\lambda_1 F_c+\lambda_2 F_d+\lambda_3 F_{s,c}$，令 $x\to+\infty$ 得 $\sum_i\lambda_i=1$。

> 💡 **CS视角**：任意一维分布都能写成"连续密度型 + 离散点质量型 + 奇异连续型（如 Cantor 分布）"的凸组合，$\lambda_i$ 是混合权重——和高斯混合模型用权重组合若干成分同构，只是这里成分按"测度类型"而非"参数"划分。

> 💡 **CS视角**：实务中 $F_{s,c}$（导数处处为零却又在涨，如 Cantor 函数）几乎不出现，所以工程上常只保留 $F_c+F_d$：连续随机变量（采样靠逆 CDF）与离散随机变量（采样靠累积概率查表）的混合，正对应 PyTorch 里 continuous 与 categorical 两类分布。

> 📝 **例**：随机变量 $X$ 有 $\tfrac12$ 概率取 $0$（点质量），$\tfrac12$ 概率服从 $U[0,1]$，写出其分布函数的 Lebesgue 分解。
> **步骤1**：离散部分来自点 $0$，$F_d(x)=1_{\{x\ge0\}}$（单点 $0$ 的退化分布），权重 $\lambda_2=\tfrac12$。
> **步骤2**：连续部分来自 $U[0,1]$，密度 $p(y)=1_{[0,1]}(y)$，$F_c(x)=\int_{-\infty}^x p(y)\,dy$，权重 $\lambda_1=\tfrac12$。
> **步骤3**：无奇异连续部分，$\lambda_3=0$，校验 $\lambda_1+\lambda_2+\lambda_3=\tfrac12+\tfrac12+0=1$。
> **结论**：$F=\tfrac12 F_c+\tfrac12 F_d$——一半连续骨架一半点质量，正是混合分布的标准分解，无 Cantor 型奇异成分。`,

  "kp-9-1": String.raw`## 条件期望的定义（Radon-Nikodym 导数）
设 $(\Omega,\mathcal F,\mathbb P)$ 是一概率空间，$\mathcal G$ 是 $\mathcal F$ 中 $\sigma$ 代数，$X$ 是 $\Omega$ 上定义的（实）随机变量，$\mathbb E[X]$ 存在。在 $\mathcal G$ 上定义
$$
\nu(A)=\int_A X\,d\mathbb P,\quad A\in\mathcal G
$$
则 $\nu$ 是 $\mathcal G$ 上符号测度，且 $\nu\ll\mathbb P_{\mathcal G}$（$\mathbb P_{\mathcal G}$ 表示 $\mathbb P$ 限制在 $\mathcal G$ 上）。故 $\frac{d\nu}{d\mathbb P_{\mathcal G}}$ 存在，称之为**给定 $\mathcal G$ 之下 $X$ 的条件期望**，记为 $\mathbb E[X\mid\mathcal G]$。

> 💡 **CS视角**：把 $\mathcal G$ 看成「当前可用的信息/特征集」，$\mathbb E[X\mid\mathcal G]$ 就是只用这些信息对 $X$ 做出的**最优预测**。它是 $X$ 在 $\mathcal G$ 可测函数空间上的 $L^2$ 正交投影：在所有 $\mathcal G$ 可测的 $g$ 中，$\mathbb E[X\mid\mathcal G]$ 唯一最小化均方误差 $\mathbb E[(X-g)^2]$，对应回归里「给定特征求条件均值」。

> 💡 **CS视角**：定义不给显式公式，而是用 Radon-Nikodym 导数「隐式」刻画——它只规定积分必须对齐（$\int_A\cdot$ 相等）。这和工程里用「满足一组约束/损失最优」来定义对象(如最大似然解、最小二乘解)的思路一致：先说清要满足什么，存在唯一性再由定理保证。

> 📝 **例**：掷一颗均匀骰子，$X$ 为点数，$\mathcal G=\sigma(\{奇,偶\})$ 只告诉你奇偶，求 $\mathbb E[X\mid\mathcal G]$。
> **步骤1**：$\mathcal G$ 的原子是 $\{1,3,5\}$ 和 $\{2,4,6\}$，条件期望在每个原子上取常数。
> **步骤2**：奇数块 $\mathbb E[X\mid 奇]=\tfrac{1+3+5}3=3$；偶数块 $\mathbb E[X\mid 偶]=\tfrac{2+4+6}3=4$。
> **步骤3**：故 $\mathbb E[X\mid\mathcal G]=3\cdot1_{\{奇\}}+4\cdot1_{\{偶\}}$，是个只依赖奇偶信息的随机变量。
> **结论**：只知奇偶时，对点数的最优预测就是「奇则猜 $3$、偶则猜 $4$」——信息越粗，预测越平。`,

  "kp-9-2": String.raw`## 定义的四点注解（存在唯一性）
关于条件期望的定义，有以下几个注解：
$$
\begin{aligned}
&注1:\ \nu(A)=\int_A\mathbb E[X\mid\mathcal G]\,d\mathbb P_{\mathcal G} \\
&注2:\ \mathbb E[X\mid\mathcal G]\,是\,\mathcal G\,可测随机变量 \\
&注3:\ \mathbb E[X\mid\mathcal G]\,是\,\mathbb P_{\mathcal G}\ a.s.\,唯一（在概率空间\,(\Omega,\mathcal G,\mathbb P_{\mathcal G})\,上）\\
&\qquad\ 即\ \nu(A)=\int_A y_1\,d\mathbb P_{\mathcal G}=\int_A y_2\,d\mathbb P_{\mathcal G},\ \forall A\in\mathcal G\Rightarrow y_1=y_2\ (\mathbb P_{\mathcal G}\ a.s.) \\
&注4:\ \int_A\mathbb E[X\mid\mathcal G]\,d\mathbb P=\int_A X\,d\mathbb P,\ \forall A\in\mathcal G
\end{aligned}
$$
特别地，若 $X=1_A,\ A\in\mathcal F$，则
$$
\mathbb E[X\mid\mathcal G]=\mathbb P(A\mid\mathcal G)
$$

> 💡 **CS视角**：注2（$\mathcal G$ 可测）+ 注4（积分对齐）正好是条件期望的「可计算契约」：输出只能依赖 $\mathcal G$ 里的信息（不许偷看 $\mathcal G$ 之外的特征），且在每个 $\mathcal G$ 事件上「平均值守恒」。深度学习里设计「掩码」(masked attention/autoregressive)的约束同理——预测只能用允许看到的输入。

> 💡 **CS视角**：注3 的唯一性是 a.s. 意义下的，即两个实现至多在零测集上不同——和浮点实现里「相等」常指「几乎处处一致、可忽略零概率差异」相呼应。指示函数情形 $\mathbb E[1_A\mid\mathcal G]=\mathbb P(A\mid\mathcal G)$ 说明「条件概率」只是「条件期望」对 $0/1$ 标签的特例，等同分类器输出的后验概率。

> 📝 **例**：设 $A\in\mathcal F$ 且 $\mathbb P(A)=0.3$，取平凡 $\mathcal G=\{\varnothing,\Omega\}$（无任何信息），求 $\mathbb P(A\mid\mathcal G)$。
> **步骤1**：$\mathcal G$ 可测函数在 $\Omega$ 上只能是常数，故 $\mathbb E[1_A\mid\mathcal G]\equiv c$。
> **步骤2**：由注4 取 $A_0=\Omega$：$\int_\Omega c\,d\mathbb P=\int_\Omega 1_A\,d\mathbb P=\mathbb P(A)$，即 $c=\mathbb P(A)$。
> **步骤3**：故 $\mathbb P(A\mid\mathcal G)=\mathbb P(A)=0.3$。
> **结论**：没有任何信息时，条件概率退化为无条件概率——这正是分类器在「零特征」下只能输出先验 $0.3$。`,

  "kp-9-3": String.raw`## 给定随机变量的条件期望 $\mathbb E[X\mid Y]$
若 $Y$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上定义、取值于可测空间 $(E,\Sigma)$ 中的随机变量（随机元），则
$$
\mathbb E[X\mid\sigma(Y)]=\mathbb E[X\mid Y]
$$
称为**给定 $Y$ 之下 $X$ 的条件期望**。由 $\sigma(Y)$ 可测随机变量的构造知，存在可测映射 $\varphi:(E,\Sigma)\to(\mathbb R,\mathcal B)$ 使得
$$
\mathbb E[X\mid Y]=\mathbb E[X\mid\sigma(Y)]=\varphi(Y)
$$
记 $\mathbb E[X\mid Y=y]=\varphi(y)$，称之为**给定 $Y=y$ 条件下 $X$ 的条件期望**。

> 💡 **CS视角**：$\mathbb E[X\mid Y]=\varphi(Y)$ 说明「以 $Y$ 为条件」就是「以 $Y$ 为输入的一个确定函数 $\varphi$」——这正是监督学习要拟合的回归函数 $\varphi(y)=\mathbb E[X\mid Y=y]$。神经网络 $\hat X=\varphi_\theta(Y)$ 用平方损失训练，理论最优解恰好收敛到这个条件期望。

> 💡 **CS视角**：$\varphi$ 由 Doob-Dynkin 引理（$\sigma(Y)$ 可测 $\Rightarrow$ 可写成 $Y$ 的函数）保证存在，对应工程直觉：「只依赖 $Y$ 的量」必能表示成 $Y$ 的某个查表/函数。$\mathbb E[X\mid Y=y]$ 就是「按 $Y$ 分组后组内求均值」的 groupby-mean。

> 📝 **例**：$Y\in\{0,1\}$，已知 $\mathbb E[X\mid Y=0]=2,\ \mathbb E[X\mid Y=1]=5$，写出随机变量 $\mathbb E[X\mid Y]$。
> **步骤1**：条件期望是 $Y$ 的函数 $\varphi(Y)$，其中 $\varphi(0)=2,\varphi(1)=5$。
> **步骤2**：用示性函数拼接：$\varphi(Y)=2\cdot1_{\{Y=0\}}+5\cdot1_{\{Y=1\}}$。
> **步骤3**：即 $Y=0$ 时取 $2$、$Y=1$ 时取 $5$，整体是随 $Y$ 取值跳变的随机变量。
> **结论**：$\mathbb E[X\mid Y]$ 就是一张以 $Y$ 为键的查找表 $\{0\!\to\!2,\ 1\!\to\!5\}$，等价于按 $Y$ 分组的组均值。`,

  "kp-9-4": String.raw`## 引理：积分处处相等推出 a.s. 相等
$$
f,g\,都是\,(\Omega,\mathcal F,\mathbb P)\,上可测函数，且\ \int_A f\,d\mathbb P=\int_A g\,d\mathbb P,\ \forall A\in\mathcal F\ \Rightarrow\ f=g\ (a.s.)
$$
**证明（反证法）**：记 $A=\{f\neq g\}=\{f>g\}\cup\{f<g\}$。假定 $\mathbb P(A)>0$，则 $\mathbb P(f>g)>0$ 与 $\mathbb P(f<g)>0$ 必有其一成立，不妨设 $\mathbb P(f>g)>0$。注意到
$$
\{f>g\}=\bigcup_{n=1}^{\infty}\Big\{f>g+\tfrac1n\Big\}
$$
故存在 $n_0$ 使 $\mathbb P\big(f>g+\tfrac1{n_0}\big)>0$。从而
$$
\begin{aligned}
\int_{\{f>g+\frac1{n_0}\}}f\,d\mathbb P
&>\int_{\{f>g+\frac1{n_0}\}}\big(g+\tfrac1{n_0}\big)\,d\mathbb P \\
&=\int_{\{f>g+\frac1{n_0}\}}g\,d\mathbb P+\tfrac1{n_0}\,\mathbb P\big(f>g+\tfrac1{n_0}\big) \\
&>\int_{\{f>g+\frac1{n_0}\}}g\,d\mathbb P
\end{aligned}
$$
而 $\{f>g+\tfrac1{n_0}\}$ 可测，这与假定矛盾。

> 💡 **CS视角**：这条引理是条件期望「唯一性」的技术核心：只要两个函数在「所有可测集」上的积分都一致，它们就 a.s. 相等。等价于「对所有测试集求和都相同 $\Rightarrow$ 逐点(几乎处处)相同」，类比单元测试里「在足够丰富的输入上输出全一致 $\Rightarrow$ 两实现等价」。

> 💡 **CS视角**：证明的关键技巧是把不可数的差集 $\{f>g\}$ 离散化为可数并 $\bigcup_n\{f>g+\tfrac1n\}$——用「阈值 $\tfrac1n$ 切片」把「严格大于」化为可处理的「至少超过一个 gap」，和数值上用 $\varepsilon$-阈值判断浮点不等的做法同源。

> 📝 **例**：在 $\Omega=[0,1]$ 配 Lebesgue 测度上，$f\equiv1$，$g=1$ 但在单点 $\{0.5\}$ 处改成 $g(0.5)=99$，问 $f=g$ a.s. 吗？
> **步骤1**：差异只发生在 $\{0.5\}$，其测度 $\mathbb P(\{0.5\})=0$。
> **步骤2**：任意可测集 $A$ 上 $\int_A f=\int_A g$（单点不贡献积分），满足引理前提。
> **步骤3**：由引理 $f=g\ (a.s.)$，即在零测集 $\{0.5\}$ 外处处相等。
> **结论**：a.s. 相等允许在零概率点任意不同——这正是浮点比较里「忽略可忽略集」的精确数学版本。`,

  "kp-9-5": String.raw`## 条件期望的判定命题
设 $X$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上定义的（实）r.v，$\mathbb E[X]$ 存在，$\mathcal G$ 是 $\mathcal F$ 上的 $\sigma$ 代数，$Y$ 是 $\Omega$ 上定义的实值映射。若它满足
$$
(1)\ Y\,是\,\mathcal G\,可测;\qquad (2)\ \forall A\in\mathcal G,\ \int_A Y\,d\mathbb P=\int_A X\,d\mathbb P
$$
则 $Y=\mathbb E[X\mid\mathcal G]\ (a.s.)$。

**证明**：由条件知
$$
\forall A\in\mathcal G,\ \int_A Y\,d\mathbb P=\int_A\mathbb E[X\mid\mathcal G]\,d\mathbb P=\int_A X\,d\mathbb P
$$
由引理即得 $Y=\mathbb E[X\mid\mathcal G]\ (a.s.)$。

> 💡 **CS视角**：这条命题给出条件期望的「验收标准」：要证某个候选 $Y$ 就是 $\mathbb E[X\mid\mathcal G]$，只需检查两件事——(1) $Y$ 只用 $\mathcal G$ 的信息（可测性）、(2) 在每个 $\mathcal G$ 事件上积分守恒。无需从 Radon-Nikodym 定义硬算，类似「不重算实现，只验证它满足规范」。

> 💡 **CS视角**：实践中我们「猜+验」：先用 groupby-mean 或回归猜出 $Y=\varphi(Y_{\text{特征}})$，再用本命题的两条验证它确实是条件期望。这就是「构造性求解 + 充分条件校验」的标准套路，省去直接求 Radon-Nikodym 导数的麻烦。

> 📝 **例**：$\Omega=\{1,...,6\}$ 均匀，$\mathcal G=\sigma(\{奇,偶\})$，$X$ 为点数，验证候选 $Y=3\cdot1_{\{奇\}}+4\cdot1_{\{偶\}}$ 即 $\mathbb E[X\mid\mathcal G]$。
> **步骤1**：$Y$ 只随奇偶取值，是 $\mathcal G$ 可测，满足条件(1)。
> **步骤2**：取 $A=\{奇\}$：$\int_A X=\tfrac16(1+3+5)=\tfrac96$，$\int_A Y=3\cdot\tfrac36=\tfrac96$，相等。
> **步骤3**：取 $A=\{偶\}$：$\int_A X=\tfrac16(2+4+6)=\tfrac{12}6$，$\int_A Y=4\cdot\tfrac36=\tfrac{12}6$，相等；两原子覆盖全 $\mathcal G$。
> **结论**：两条件均满足，故 $Y=\mathbb E[X\mid\mathcal G]$——「猜组均值再验积分守恒」即完成认证。`,

  "kp-9-6": String.raw`## 条件期望的基本性质
$$
\begin{aligned}
&(1)\ \mathbb E[X]\,存在\Rightarrow\forall\,常数\,a,\ \mathbb E[aX\mid\mathcal G]=a\,\mathbb E[X\mid\mathcal G]\ (a.s.) \\
&(2)\ \mathbb E[X],\mathbb E[Y]\,存在且\,\mathbb E[X]+\mathbb E[Y]\,有意义\Rightarrow\mathbb E[X+Y\mid\mathcal G]=\mathbb E[X\mid\mathcal G]+\mathbb E[Y\mid\mathcal G]\ (a.s.) \\
&(3)\ \mathbb E[X],\mathbb E[Y]\,存在且\,X\le Y\,(a.s.)\Rightarrow\mathbb E[X\mid\mathcal G]\le\mathbb E[Y\mid\mathcal G]\ (a.s.) \\
&(4)\ 0\le X_n\uparrow X\Rightarrow 0\le\mathbb E[X_n\mid\mathcal G]\uparrow\mathbb E[X\mid\mathcal G]\ (a.s.) \\
&(5)\ X_n\ge Y,\ Y\,可积\Rightarrow\mathbb E[\varliminf_{n\to\infty}X_n\mid\mathcal G]\le\varliminf_{n\to\infty}\mathbb E[X_n\mid\mathcal G]\ (a.s.) \\
&(6)\ |X_n|\le Y,\ Y\,可积，X_n\to X\Rightarrow\lim_{n\to\infty}\mathbb E[X_n\mid\mathcal G]=\mathbb E[X\mid\mathcal G]\ (a.s.) \\
&(7)\ X\,可积\Rightarrow\mathbb E[X\mid\mathcal G]\,可积且\,\mathbb E[\mathbb E[X\mid\mathcal G]]=\mathbb E[X]
\end{aligned}
$$
**(1)证**：$a\,\mathbb E[X\mid\mathcal G]$ 是 $\mathcal G$ 可测，且 $\forall A\in\mathcal G$，
$$
\int_A a\,\mathbb E[X\mid\mathcal G]\,d\mathbb P=a\int_A\mathbb E[X\mid\mathcal G]\,d\mathbb P=a\int_A X\,d\mathbb P=\int_A aX\,d\mathbb P
$$
**(4)证**：由(3)知 $\mathbb E[X_n\mid\mathcal G]\uparrow$，记 $Y=\lim_n\mathbb E[X_n\mid\mathcal G]$，对 $\forall A\in\mathcal G$ 用 Levi 定理
$$
\int_A Y\,d\mathbb P\overset{\text{Levi}}=\lim_n\int_A\mathbb E[X_n\mid\mathcal G]\,d\mathbb P=\lim_n\int_A X_n\,d\mathbb P=\int_A X\,d\mathbb P
$$
故 $Y=\mathbb E[X\mid\mathcal G]$。**(6)** 对 $X_n,-X_n$ 应用(5)即得；**(7)** 为全期望公式 $\mathbb E[\mathbb E[X\mid\mathcal G]]=\mathbb E[X]$。

> 💡 **CS视角**：(1)(2) 的线性性说明条件期望是**线性算子**（在 $L^2$ 上正是正交投影矩阵），所以「先求和再投影 = 先投影再求和」，特征工程里对预测值做线性组合不会破坏「最优预测」结构。(3) 单调性保证预测保序，便于做上下界夹逼。

> 💡 **CS视角**：(7) 是**全期望公式**（塔性质）$\mathbb E[\mathbb E[X\mid\mathcal G]]=\mathbb E[X]$——把样本按 $\mathcal G$ 分组、组内求均值、再按组权重平均，结果等于整体均值。这正是分层抽样/重要性采样里「分桶估计再加权汇总无偏」的依据；(4)(5)(6) 则是条件版的 Levi/Fatou/控制收敛，保证极限与条件期望可交换。

> 📝 **例**：$\Omega=\{1,...,6\}$ 均匀，$X$ 为点数，$\mathcal G=\sigma(\{奇,偶\})$，验证全期望公式 $\mathbb E[\mathbb E[X\mid\mathcal G]]=\mathbb E[X]$。
> **步骤1**：已知 $\mathbb E[X\mid\mathcal G]=3\cdot1_{\{奇\}}+4\cdot1_{\{偶\}}$，两块概率各 $\tfrac12$。
> **步骤2**：外层期望 $\mathbb E[\mathbb E[X\mid\mathcal G]]=3\cdot\tfrac12+4\cdot\tfrac12=3.5$。
> **步骤3**：直接算 $\mathbb E[X]=\tfrac16(1+2+3+4+5+6)=3.5$，两者一致。
> **结论**：分组均值再按组权重平均 $=$ 整体均值 $3.5$，塔性质成立——这就是分层估计无偏的根据。`,

  "kp-9-7": String.raw`## 连续型情形的条件期望（例）
设 $(X,Y)$ 是连续型随机变量，有联合密度 $p(x,y)$，边缘密度 $p_1(x),p_2(y)$。记
$$
p_{X\mid Y}(x,y)=\begin{cases}\dfrac{p(x,y)}{p_2(y)} & p_2(y)>0 \\[4pt] 0 & p_2(y)=0\end{cases}
$$
再记 $\varphi(y)=\mathbb E[X\mid Y=y]=\int_{-\infty}^{+\infty}x\,p_{X\mid Y}(x,y)\,dx$，则 $\varphi(Y)=\mathbb E[X\mid Y]\ (a.s.)$。

**验证**：$\forall A=Y^{-1}(B),\ B\in\mathcal B$，
$$
\begin{aligned}
\int_A\varphi(y)\,d\mathbb P
&=\int_{\Omega}\varphi(y)1_B(y)\,d\mathbb P=\int_{-\infty}^{+\infty}\varphi(y)1_B(y)p_2(y)\,dy \\
&=\int_{\{p_2(y)>0\}}1_B(y)\,dy\int_{-\infty}^{+\infty}x\,p_{X\mid Y}(x,y)p_2(y)\,dx \\
&=\int_{-\infty}^{+\infty}dy\int_{-\infty}^{+\infty}x\,p(x,y)1_B(y)\,dx=\int_A X\,d\mathbb P
\end{aligned}
$$
由判定命题即得 $\varphi(Y)=\mathbb E[X\mid Y]$。

> 💡 **CS视角**：$p_{X\mid Y}(x,y)=p(x,y)/p_2(y)$ 就是贝叶斯里「联合除以边缘得条件」，而 $\varphi(y)=\int x\,p_{X\mid Y}\,dx$ 是后验分布的均值——即 MMSE（最小均方误差）点估计。生成模型/概率回归输出的就是这条后验均值曲线。

> 💡 **CS视角**：当 $p_2(y)=0$（该 $y$ 几乎不出现）时约定 $p_{X\mid Y}=0$，因为这些 $y$ 落在零测集上、对积分无贡献——对应工程里「样本数为 $0$ 的分桶不参与统计，避免除零」。

> 📝 **例**：$(X,Y)$ 在单位正方形 $[0,1]^2$ 上均匀分布（$p(x,y)=1$），求 $\mathbb E[X\mid Y=y]$。
> **步骤1**：边缘 $p_2(y)=\int_0^1 1\,dx=1\ (0\le y\le1)$，故条件密度 $p_{X\mid Y}(x,y)=1/1=1$。
> **步骤2**：即给定 $Y=y$ 时 $X\sim U[0,1]$，与 $y$ 无关。
> **步骤3**：$\varphi(y)=\int_0^1 x\cdot1\,dx=\tfrac12$。
> **结论**：$\mathbb E[X\mid Y]=\tfrac12$ 恒为常数——$X,Y$ 独立时条件均值就退化为无条件均值 $\tfrac12$。`,

  "kp-9-8": String.raw`## 原子上的条件期望
若 $B$ 是 $\mathcal G$ 的非空原子（即 $C\subset B\Rightarrow C=\varnothing$ 或 $C=B$），则在 $B$ 上 $\mathbb E[X\mid\mathcal G]$ 是常数；当 $\mathbb P(B)>0$ 时，这个常数为
$$
\mathbb E[X\mid B]\triangleq\frac{\mathbb E[X1_B]}{\mathbb P(B)}
$$
**证明**：由 $B$ 非空，取 $w_0\in B$，记 $B^*=\{w\in B:\mathbb E[X\mid\mathcal G](w)=\mathbb E[X\mid\mathcal G](w_0)\}$。则 $B^*\in\mathcal G$ 且 $B^*\subset B$；因 $B$ 是原子，故 $B^*=B$，即 $\mathbb E[X\mid\mathcal G]$ 在 $B$ 上恒为常数。又
$$
\mathbb P(B)\,\mathbb E[X\mid B]=\int_B\mathbb E[X\mid\mathcal G]\,d\mathbb P=\int_B X\,d\mathbb P
$$
故该常数为 $\mathbb E[X\mid B]=\dfrac{\mathbb E[X1_B]}{\mathbb P(B)}$。

> 💡 **CS视角**：原子 = $\mathcal G$ 信息无法再细分的「最小可分辨单元」（像聚类的一个簇/哈希桶）。条件期望在原子上是常数，说明在同一个桶里所有样本拿到的预测完全一样——「信息粒度」直接决定预测的分辨率。

> 💡 **CS视角**：$\mathbb E[X\mid B]=\mathbb E[X1_B]/\mathbb P(B)$ 正是「桶内加权均值 = 桶内总和 / 桶内权重」，等价于 SQL 里按桶 GROUP BY 后取 AVG(X)。当 $\mathcal G$ 由可数个原子生成时，条件期望就是一张「桶 → 桶均值」的查找表。

> 📝 **例**：$\Omega=\{1,...,6\}$ 均匀，$X$ 为点数，$\mathcal G=\sigma(\{奇,偶\})$，原子 $B=\{1,3,5\}$，求 $\mathbb E[X\mid B]$。
> **步骤1**：$\mathbb P(B)=\tfrac36=\tfrac12$。
> **步骤2**：$\mathbb E[X1_B]=\tfrac16(1+3+5)=\tfrac96=\tfrac32$。
> **步骤3**：$\mathbb E[X\mid B]=\dfrac{\mathbb E[X1_B]}{\mathbb P(B)}=\dfrac{3/2}{1/2}=3$。
> **结论**：奇数桶里的条件期望恒为 $3$——即「桶内总和 / 桶内概率」，就是 groupby 后该组的均值。`,

  "kp-10-1": String.raw`## 独立则退化为期望（定理5.4.1(1)）
若 $X$ 与 $\mathcal G$ 独立（即 $\sigma(X)$ 与 $\mathcal G$ 独立，也即 $\forall A\in\mathcal G$，$X$ 与 $1_A$ 独立），则
$$
\mathbb E[X\mid\mathcal G]=\mathbb E[X]\quad(a.s.)
$$
**证明**：首先 $\mathbb E[X]$ 为 $\mathcal G$ 可测（常数）。接着 $\forall A\in\mathcal G$，
$$
\int_A\mathbb E[X]\,d\mathbb P=\int 1_A\mathbb E[X]\,d\mathbb P\overset{独立}{=}\mathbb E[X]\,\mathbb E[1_A]=\mathbb E[X1_A]=\int_A X\,d\mathbb P
$$
两条件（$\mathcal G$ 可测 + 积分相等）均满足，故 $\mathbb E[X\mid\mathcal G]=\mathbb E[X]$。

> 💡 **CS视角**：$\mathcal G$ 就是"已知信息"。若 $X$ 与已知信息完全无关（独立），那么知道 $\mathcal G$ 对预测 $X$ 毫无帮助，最佳猜测仍是无条件均值 $\mathbb E[X]$。这正是特征独立时模型退化为先验均值的情形。

> 📝 **例**：抛一枚均匀硬币得 $X\in\{0,1\}$（正面记 $1$），$\mathbb E[X]=0.5$；另独立掷一枚骰子，令 $\mathcal G=\sigma(骰子点数)$。求 $\mathbb E[X\mid\mathcal G]$。
> **步骤1**：硬币与骰子独立，故 $X$ 与 $\mathcal G$ 独立。
> **步骤2**：由定理，$\mathbb E[X\mid\mathcal G]=\mathbb E[X]=0.5$。
> **结论**：无论骰子结果如何，对硬币的最佳预测恒为 $0.5$，与已知信息无关。`,

  "kp-10-2": String.raw`## 可测因子提出（定理5.4.1(2)）
若 $X$ 为 $\mathcal G$ 可测，则
$$
\mathbb E[XY\mid\mathcal G]=X\,\mathbb E[Y\mid\mathcal G]\quad(a.s.)
$$
**证明**：$X$ 为 $\mathcal G$ 可测，$\mathbb E[Y\mid\mathcal G]$ 为 $\mathcal G$ 可测，从而 $X\,\mathbb E[Y\mid\mathcal G]$ 为 $\mathcal G$ 可测。目标是证明
$$
\forall A\in\mathcal G,\quad\int_A X\,\mathbb E[Y\mid\mathcal G]\,d\mathbb P=\int_A XY\,d\mathbb P
$$
若 $X=1_B$，则
$$
左边=\int_A 1_B\,\mathbb E[Y\mid\mathcal G]\,d\mathbb P=\int_{AB}\mathbb E[Y\mid\mathcal G]\,d\mathbb P=\int_{AB}Y\,d\mathbb P=\int_A 1_B Y\,d\mathbb P=右边
$$
再将结论由示性函数推广到非负简单、非负可测，最后到一般情形，即完成证明。

> 💡 **CS视角**：$\mathcal G$ 可测意味着"在已知信息下 $X$ 是确定量"。已知量当常数提出——就像求条件期望时把已观测的特征当作已知系数搬到期望外面，只对真正随机的部分 $Y$ 取均值。

> 📝 **例**：设 $X$ 为 $\mathcal G$ 可测，已知 $X=3$，且 $\mathbb E[Y\mid\mathcal G]=4$。求 $\mathbb E[XY\mid\mathcal G]$。
> **步骤1**：$X$ 是 $\mathcal G$ 可测，已知信息下视为常数 $3$。
> **步骤2**：提出因子 $\mathbb E[XY\mid\mathcal G]=X\,\mathbb E[Y\mid\mathcal G]=3\times4$。
> **结论**：$\mathbb E[XY\mid\mathcal G]=12$，已知量直接当系数提出。`,

  "kp-10-3": String.raw`## 塔性质 / 嵌套（定理5.4.1(3)）
若 $\mathcal G_1\subset\mathcal G_2\subset\mathcal G$，则
$$
\mathbb E[\mathbb E[X\mid\mathcal G_1]\mid\mathcal G_2]=\mathbb E[X\mid\mathcal G_1]=\mathbb E[\mathbb E[X\mid\mathcal G_2]\mid\mathcal G_1]\quad(a.s.)
$$
**证明**：因为 $\mathbb E[X\mid\mathcal G_1]$ 为 $\mathcal G_1$ 可测，所以也为 $\mathcal G_2$ 可测，由可测因子提出(2)（取 $Y=1$）得
$$
\mathbb E[\mathbb E[X\mid\mathcal G_1]\mid\mathcal G_2]=\mathbb E[X\mid\mathcal G_1]
$$
再证第二个等号。注意 $\mathbb E[X\mid\mathcal G_1]$ 为 $\mathcal G_1$ 可测，$\forall A\in\mathcal G_1\subset\mathcal G_2$，
$$
\int_A\mathbb E[X\mid\mathcal G_2]\,d\mathbb P=\int_A X\,d\mathbb P
$$
所以
$$
\mathbb E[X\mid\mathcal G_1]=\mathbb E[\mathbb E[X\mid\mathcal G_2]\mid\mathcal G_1]
$$
即"小的 $\sigma$ 代数说了算"：嵌套取条件期望时，较粗的信息域决定结果。

> 💡 **CS视角**：塔性质就是期望的链式法则 / 分层期望。要算整体均值，可先按某层信息分组算条件均值，再对分组结果取均值——MapReduce 式的"先局部聚合再全局聚合"，结果不变。取 $\mathcal G_1$ 为平凡 $\sigma$ 代数即得 $\mathbb E[\mathbb E[X\mid\mathcal G_2]]=\mathbb E[X]$。

> 📝 **例**：两步掷骰子：先掷一枚得点数 $N$，再掷 $N$ 枚骰子求点数和 $X$。用塔性质 $\mathbb E[X]=\mathbb E[\mathbb E[X\mid N]]$ 算 $\mathbb E[X]$。
> **步骤1**：给定 $N$，每枚均值 $3.5$，故 $\mathbb E[X\mid N]=3.5\,N$。
> **步骤2**：再对 $N$ 取期望 $\mathbb E[X]=\mathbb E[3.5\,N]=3.5\,\mathbb E[N]$。
> **步骤3**：$\mathbb E[N]=3.5$，故 $\mathbb E[X]=3.5\times3.5=12.25$。
> **结论**：分两层聚合得 $\mathbb E[X]=12.25$，无需写出 $X$ 的复杂分布。`,

  "kp-10-4": String.raw`## 条件 Hölder 与条件 Jensen（定理5.4.2）
$$
\begin{aligned}
&(1)\ p,q\ge1,\ \tfrac1p+\tfrac1q=1:\ \mathbb E[|XY|\mid\mathcal G]\le(\mathbb E[|X|^p\mid\mathcal G])^{\frac1p}(\mathbb E[|Y|^q\mid\mathcal G])^{\frac1q} \\
&(2)\ \varphi\,下凸,\ \mathbb E[X]、\mathbb E[\varphi(X)]\,存在:\ \varphi(\mathbb E[X\mid\mathcal G])\le\mathbb E[\varphi(X)\mid\mathcal G]\quad(a.s.)
\end{aligned}
$$
**(1)的证明**：利用 $ab\le\dfrac{a^p}{p}+\dfrac{b^q}{q}$（$a,b\ge0$）。当两个条件范数都非零时，取
$$
a=\frac{|X|}{(\mathbb E[|X|^p\mid\mathcal G])^{\frac1p}},\quad b=\frac{|Y|}{(\mathbb E[|Y|^q\mid\mathcal G])^{\frac1q}}
$$
关于 $\mathcal G$ 取条件期望得右端 $\le\dfrac1p+\dfrac1q=1$，整理即得不等式；若某条件范数为 $0$，则对 $X+\epsilon,\,Y+\epsilon$ 用上式再令 $\epsilon\to0$。
**(2)的证明**：由下凸性 $\varphi(y)-\varphi(x)\le\varphi'_+(y)(y-x)$，取 $x=X(\omega),\,y=\mathbb E[X\mid\mathcal G]$，
$$
\varphi(\mathbb E[X\mid\mathcal G])-\varphi(X)\le\varphi'_+(\mathbb E[X\mid\mathcal G])(\mathbb E[X\mid\mathcal G]-X)
$$
两边关于 $\mathcal G$ 取条件期望，右端化为 $0$，即得 $\varphi(\mathbb E[X\mid\mathcal G])\le\mathbb E[\varphi(X)\mid\mathcal G]$。

> 💡 **CS视角**：条件 Jensen 是无条件 Jensen 的"逐组"版本——凸函数下"先平均再作用"不超过"先作用再平均"。机器学习里证 ELBO、各种凸损失的下界、KL 散度非负，都靠它在条件期望层面成立。

> 📝 **例**：取凸函数 $\varphi(x)=x^2$，用条件 Jensen 比较 $(\mathbb E[X\mid\mathcal G])^2$ 与 $\mathbb E[X^2\mid\mathcal G]$，设某次条件下 $\mathbb E[X\mid\mathcal G]=2$、$\mathbb E[X^2\mid\mathcal G]=5$。
> **步骤1**：条件 Jensen 给出 $(\mathbb E[X\mid\mathcal G])^2\le\mathbb E[X^2\mid\mathcal G]$。
> **步骤2**：代入数值 $2^2=4\le5$，成立。
> **结论**：差 $\mathbb E[X^2\mid\mathcal G]-(\mathbb E[X\mid\mathcal G])^2=1$ 恰为条件方差，非负正印证了不等式。`,

  "kp-10-5": String.raw`## 独立时函数的条件期望（命题）
若 $X,Y$ 独立，则
$$
\mathbb E[f(X,Y)\mid Y]=h(Y),\quad h(y)=\mathbb E[f(X,y)]
$$
特别地，
$$
\mathbb E[f(X)g(Y)\mid Y]=g(Y)\,\mathbb E[f(X)\mid Y]=g(Y)\,\mathbb E[f(X)]
$$
**证明**：由截口的定义知 $h(Y)$ 是 $\sigma(Y)$ 可测。为证 $\forall B\in\Sigma$，$\int_{Y^{-1}(B)}h(Y)\,d\mathbb P=\int_{Y^{-1}(B)}f(X,Y)\,d\mathbb P$，即 $\int 1_B(y)h(y)\,d\mathbb P=\int 1_B(y)f(x,y)\,d\mathbb P$。注意到
$$
\begin{aligned}
左边&=\int 1_B(y)\,\mathbb E[f(X,y)]\,\mu_Y(dy)\\
&=\int f(x,y)\,\mu_X(dx)\int 1_B(y)\,\mu_Y(dy)\\
&=\iint 1_B(y)f(x,y)\,d(\mu_X\times\mu_Y)=右边
\end{aligned}
$$
其中关键一步用到了独立性给出的乘积测度 $\mu_X\times\mu_Y$。

> 💡 **CS视角**：这是"冻结已知变量"原则——给定 $Y$ 后把 $Y$ 当成已固定的常数参数 $y$，只对独立的随机源 $X$ 求平均。模拟/采样里固定随机种子的一维、对其余维度求期望即此结构。

> 📝 **例**：$X,Y$ 独立，$X$ 为均匀骰子（$\mathbb E[X]=3.5$），$g(Y)=Y$。求 $\mathbb E[XY\mid Y]$。
> **步骤1**：取 $f(X)=X,\,g(Y)=Y$，由命题 $\mathbb E[XY\mid Y]=Y\,\mathbb E[X]$。
> **步骤2**：代入 $\mathbb E[X]=3.5$，得 $\mathbb E[XY\mid Y]=3.5\,Y$。
> **结论**：已知的 $Y$ 提出当系数，独立的 $X$ 退化为常数均值 $3.5$。`,

  "kp-10-6": String.raw`## 残差正交性（定理5.4.3）
设 $\mathbb E[X^2]<\infty$，则对任意 $\mathcal G$ 可测且 $\mathbb E[Y^2]<\infty$ 的 $Y$，
$$
\mathbb E[(X-\mathbb E[X\mid\mathcal G])\,Y]=0
$$
**证明**：用塔性质把外层期望写成条件期望的期望，再把 $\mathcal G$ 可测的 $Y$ 提出：
$$
\mathbb E[(X-\mathbb E[X\mid\mathcal G])Y]=\mathbb E\big[\mathbb E[(X-\mathbb E[X\mid\mathcal G])Y\mid\mathcal G]\big]=\mathbb E\big[Y\,\mathbb E[X-\mathbb E[X\mid\mathcal G]\mid\mathcal G]\big]=0
$$
最后一步因 $\mathbb E[X-\mathbb E[X\mid\mathcal G]\mid\mathcal G]=\mathbb E[X\mid\mathcal G]-\mathbb E[X\mid\mathcal G]=0$。即误差 $X-\mathbb E[X\mid\mathcal G]$ 与一切 $\mathcal G$ 可测变量正交。

> 💡 **CS视角**：条件期望就是 $L^2$ 空间里到"已知信息子空间"的正交投影，预测残差与任何可由已知信息构造的特征都正交——这正是线性回归正规方程"残差与特征正交"的概率论本源。

> 📝 **例**：设 $\mathbb E[X\mid\mathcal G]=2$（常数情形），$Y$ 为 $\mathcal G$ 可测。验证残差 $X-2$ 与 $Y$ 正交。
> **步骤1**：残差 $R=X-\mathbb E[X\mid\mathcal G]$，由定理 $\mathbb E[RY]=0$。
> **步骤2**：取 $Y=1$（$\mathcal G$ 可测），得 $\mathbb E[R]=\mathbb E[X]-\mathbb E[X\mid\mathcal G]$ 的期望为 $0$，即误差均值为零。
> **结论**：残差与所有已知特征的相关性为 $0$，无可再榨取的线性信息。`,

  "kp-10-7": String.raw`## 最佳预测 / $L^2$ 投影（推论）
$$
\mathbb E[X-\mathbb E[X\mid Y]]^2=\min_{Z\in L^2(\sigma(Y),\mathbb P)}\mathbb E[X-Z]^2
$$
其中 $L^2(\sigma(Y),\mathbb P)$ 表示 $\sigma(Y)$ 可测的平方可积函数。
**证明**：对任意 $\mathcal G$ 可测的 $Z$，作分解
$$
\mathbb E[X-Z]^2=\mathbb E[X-\mathbb E[X\mid Y]]^2+\mathbb E[\mathbb E[X\mid Y]-Z]^2+2\,\mathbb E[(X-\mathbb E[X\mid Y])(\mathbb E[X\mid Y]-Z)]
$$
由残差正交性，交叉项
$$
\mathbb E[(X-\mathbb E[X\mid Y])(\mathbb E[X\mid Y]-Z)]=\mathbb E\big[(\mathbb E[X\mid Y]-Z)\,\mathbb E[X-\mathbb E[X\mid Y]\mid Y]\big]=0
$$
故 $\mathbb E[X-Z]^2=\mathbb E[X-\mathbb E[X\mid Y]]^2+\mathbb E[\mathbb E[X\mid Y]-Z]^2\ge\mathbb E[X-\mathbb E[X\mid Y]]^2$，当 $Z=\mathbb E[X\mid Y]$ 时取到最小。

> 💡 **CS视角**：这是监督学习的理论天花板——在均方误差(MSE)意义下，所有以 $Y$ 为输入的预测器里，回归函数 $\mathbb E[X\mid Y]$ 误差最小。任何模型(神经网络、树)都在逼近这个贝叶斯最优预测。

> 📝 **例**：用 $Y$ 预测 $X$，已知最优预测器 $\mathbb E[X\mid Y]$ 的均方误差 $\mathbb E[X-\mathbb E[X\mid Y]]^2=2$，而某劣质预测器 $Z_0$ 满足 $\mathbb E[\mathbb E[X\mid Y]-Z_0]^2=3$。求 $Z_0$ 的 MSE。
> **步骤1**：由勾股分解 $\mathbb E[X-Z_0]^2=2+3$。
> **步骤2**：得 $\mathbb E[X-Z_0]^2=5>2$。
> **结论**：任何偏离 $\mathbb E[X\mid Y]$ 的预测器，误差都按"偏移量平方"严格增大，最优解唯一。`,

  "kp-11-1": String.raw`## 鞅的定义
设 $\{X_n,n\ge 0\}$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上的（广义）实随机变量，$\{\mathcal F_n,n\ge 0\}$ 是一列上升的 $\sigma$ 域（称为 $\sigma$ 域流/滤波），若满足
$$
\begin{aligned}
&(1)\ \mathbb E[|X_n|]<\infty\quad(\forall n\ge 0) \\
&(2)\ X_n\,关于\,\mathcal F_n\,可测（称为\,\mathcal F_n\,适应） \\
&(3)\ \forall n\ge 0,\ \mathbb E[X_{n+1}\mid\mathcal F_n]=X_n\ (a.s.)
\end{aligned}
$$
则称 $\{X_n\}$ 关于 $\{\mathcal F_n\}$ 是**鞅**。若将条件 (3) 中的 $"="$ 改为 $"\ge"$ 则为**下鞅**，改为 $"\le"$ 则为**上鞅**。

> 💡 **CS视角**：鞅 = 公平赌博的无偏估计序列。给定到当前为止的全部历史信息 $\mathcal F_n$，对下一步的最优预测 $\mathbb E[X_{n+1}\mid\mathcal F_n]$ 恰是当前值 $X_n$——既不系统地涨也不系统地跌。强化学习里「价值函数沿最优策略不应有可预测漂移」、随机梯度里「无偏估计 $\mathbb E[\hat g\mid\text{历史}]=g$」都是同一思想。

> 💡 **CS视角**：滤波 $\{\mathcal F_n\}$ 就是「随时间单调增长的信息流」，对应流式系统里 append-only 的事件日志；适应 = $X_n$ 只能依赖到第 $n$ 步为止已观测到的数据，不能偷看未来——这正是因果模型/在线算法不可使用未来信息的约束。下鞅可预测地上涨、上鞅可预测地下跌。

> 📝 **例**：判断对称随机游走 $S_n=\sum_{k=1}^n\zeta_k$（$\zeta_k=\pm1$ 各半概率，独立）是否为鞅。
> **步骤1**：可积性。$|S_n|\le n$ 有界，故 $\mathbb E[|S_n|]<\infty$。
> **步骤2**：适应性。$S_n$ 由 $\zeta_1,...,\zeta_n$ 决定，关于 $\mathcal F_n=\sigma(\zeta_1,...,\zeta_n)$ 可测。
> **步骤3**：无偏性。$\mathbb E[S_{n+1}\mid\mathcal F_n]=S_n+\mathbb E[\zeta_{n+1}]=S_n+0=S_n$。
> **结论**：三条性质全满足，$\{S_n\}$ 是鞅——一场没有抽水的公平赌局，资金的期望永远停在原地。`,

  "kp-11-2": String.raw`## 鞅的几个性质
$$
\begin{aligned}
&(1)\ 若\,\{X_n\}\,是鞅，\varphi\,是凸函数，\mathbb E[|\varphi(X_n)|]<\infty\,(\forall n\ge 1)，则\,Y_n=\varphi(X_n)\,是下鞅 \\
&(2)\ 若\,\{X_n\}\,是下鞅，\varphi\,是凸函数且非降，\mathbb E[|\varphi(X_n)|]<\infty\,(\forall n\ge 1)，则\,Y_n=\varphi(X_n)\,是下鞅 \\
&(3)\ 若\,\{X_n\}\,是下鞅，则它必可唯一分解为\,X_n=M_n+A_n，其中\,M_n\,是鞅，\{A_n\}\,非降， \\
&\quad\ \ A_n\,关于\,\mathcal F_{n-1}\,可测，且\,A_0=0（Doob\,分解）
\end{aligned}
$$
结论 (1)(2) 的证明见习题。

> 💡 **CS视角**：性质 (1) 是 Jensen 不等式的随机版——凸函数作用在鞅上「只会向上弯」。取 $\varphi(x)=x^2$ 即得 $\{X_n^2\}$ 是下鞅，这是 Doob $L^2$ 极大不等式、以及分析 SGD 二阶矩 $\mathbb E[\|X_n\|^2]$ 单调可控的出发点。

> 💡 **CS视角**：Doob 分解 $X_n=M_n+A_n$ 把信号拆成「鞅噪声 $M_n$ + 可预测趋势 $A_n$」，其中 $A_n$ 关于 $\mathcal F_{n-1}$ 可测（即「上一步就能算出」，称 predictable）。这与时序分析里「随机游走 + 趋势项」分解、以及在线优化里「梯度 = 可预测漂移 + 鞅差噪声」的拆分完全同构。

> 📝 **例**：设 $\{X_n\}$ 是鞅，取凸函数 $\varphi(x)=|x|$，判断 $Y_n=|X_n|$ 的鞅型。
> **步骤1**：$\varphi(x)=|x|$ 是凸函数，且假设 $\mathbb E[|X_n|]<\infty$ 满足可积条件。
> **步骤2**：由条件 Jensen 不等式 $\mathbb E[\,|X_{n+1}|\mid\mathcal F_n]\ge|\mathbb E[X_{n+1}\mid\mathcal F_n]|$。
> **步骤3**：因 $\{X_n\}$ 是鞅，$\mathbb E[X_{n+1}\mid\mathcal F_n]=X_n$，故上式右端 $=|X_n|=Y_n$。
> **结论**：$\mathbb E[Y_{n+1}\mid\mathcal F_n]\ge Y_n$，即 $\{|X_n|\}$ 是下鞅——凸变换把「持平」抬成了「可预测地上涨」。`,

  "kp-11-3": String.raw`## 独立和构成的鞅（例1、例2）
**例1**：设 $\{\zeta_n\}$ 是一列独立 r.v，均值为 $p_n$，$S_n=\sum_{k=1}^n\zeta_k$。则当 $p_n=0\,(\le 0,\ \ge 0)$ 时，$\{S_n\}$ 关于 $\mathcal F_n=\sigma\{\zeta_k,1\le k\le n\}=\sigma\{S_k,1\le k\le n\}$ 为鞅（上鞅、下鞅）。

**证明**：
$$
\begin{aligned}
\mathbb E[S_{n+1}\mid\mathcal F_n]
&=\mathbb E[S_n\mid\mathcal F_n]+\mathbb E[\zeta_{n+1}\mid\mathcal F_n] \\
&=S_n+\mathbb E[\zeta_{n+1}] \\
&=(\le,\ \ge)\,S_n
\end{aligned}
$$

**例2**：上例的特殊情形为 $\{\zeta_n\}$ i.i.d，均值为 $p$，$S_n=\sum_{k=1}^n\zeta_k$。当 $p=0\,(\le 0,\ \ge 0)$ 时，$\{S_n\}$ 关于同样的 $\mathcal F_n$ 为鞅（上鞅、下鞅）。

> 💡 **CS视角**：零均值独立增量的部分和是鞅，这正是 SGD 收敛分析的骨架——把更新写成 $\theta_{n+1}=\theta_n-\eta(g+\zeta_{n+1})$，其中梯度噪声 $\zeta_{n+1}$ 关于历史零均值，累积噪声 $\sum\zeta_k$ 就是一个鞅，于是可用鞅收敛定理控制其波动。

> 💡 **CS视角**：增量均值的符号决定鞅型——漂移 $\ge 0$ 是下鞅（系统性上涨）、$\le 0$ 是上鞅（系统性下跌）、$=0$ 才是公平鞅。赌场把每局期望设成对玩家 $<0$，于是玩家资金是上鞅：长期看必然向下，「久赌必输」的数学本质就在这里。

> 📝 **例**：设 $\zeta_k$ 独立、$\mathbb E[\zeta_k]=-0.02$（玩家每局期望亏 $0.02$），$S_n=\sum_{k=1}^n\zeta_k$ 为累计盈亏，判断鞅型。
> **步骤1**：可积、适应两条由 $\zeta_k$ 可积且 $S_n$ 仅依赖前 $n$ 项即得。
> **步骤2**：算条件期望 $\mathbb E[S_{n+1}\mid\mathcal F_n]=S_n+\mathbb E[\zeta_{n+1}]=S_n-0.02$。
> **步骤3**：因 $-0.02<0$，故 $\mathbb E[S_{n+1}\mid\mathcal F_n]\le S_n$。
> **结论**：$\{S_n\}$ 是上鞅——累计盈亏的最优预测逐步走低，对应「期望为负的下注长期必亏」。`,

  "kp-11-4": String.raw`## 赌徒破产：停时有限（例3）
设 $\{\zeta_n\}$ i.i.d，$\zeta_n\sim\begin{pmatrix}-1&1\\1-p&p\end{pmatrix}$，记 $q=1-p$，则 $\mathbb E[\zeta_n]=p-q$。设 $S_n=S_0+\sum_{k=1}^n\zeta_k$，$S_0\in(0,a+b)$，停时
$$
\tau=\inf\{n\ge 0:S_n\in\{0,a+b\}\}
$$
**结论**：$\mathbb E[\tau]<\infty$。其背景为两人赌钱，共有 $a+b$ 元，每次第一人以概率 $p$ 赢 $1$ 元、以概率 $q$ 输 $1$ 元，$\tau$ 为赌局结束时刻——赌局总在有限时间内结束。

**证明**：注意
$$
\mathbb E[\tau]<\infty\iff\sum_{n=0}^{\infty}\mathbb P(\tau\ge n)<\infty
$$
无论从哪点出发，总有
$$
\mathbb P(\tau<a+b+1)\ge\mathbb P(\zeta_1=\cdots=\zeta_{a+b}=1)=p^{a+b}>0
$$
故
$$
\mathbb P(\tau\ge a+b+1)\le 1-p^{a+b}\triangleq\alpha<1
$$
由马氏性逐段递推可得 $\mathbb P(\tau\ge n(a+b+1))\le\alpha^n$，从而
$$
\sum_{n=1}^{\infty}\mathbb P\Big(\tfrac{\tau}{a+b+1}\ge n\Big)<\infty\ \Rightarrow\ \mathbb E[\tau]<\infty
$$

> 💡 **CS视角**：停时 $\tau$ 就是「随机停止规则」——一个只依赖已观测历史的触发条件（赌资触边界即停），等价于在线系统里「监控指标越界就熔断」的 stopping rule。本结论保证它几乎必然在有限步触发。

> 💡 **CS视角**：证明用「分段几何衰减」$\mathbb P(\tau\ge nL)\le\alpha^n$ 套出期望有限，本质是「每 $L$ 步至少有 $p^{a+b}$ 的概率终止 $\Rightarrow$ 终止时间是几何分布的上界 $\Rightarrow$ 期望有界」。这与随机算法分析里「每轮以常数概率成功 $\Rightarrow$ 期望轮数 $O(1)$」的 Las Vegas 复杂度论证一模一样。

> 📝 **例**：两状态吸收链，每步以概率 $0.6$ 走向「赢」、$0.4$ 走向「输」，从中间格出发，估计连走 $L$ 步全赢从而立即吸收的概率下界（取 $a+b=3$）。
> **步骤1**：连走 $a+b=3$ 步全赢必触上边界吸收，概率 $\ge p^{3}=0.6^3=0.216$。
> **步骤2**：故一个长度 $L=4$ 的窗口内未终止的概率 $\alpha\le 1-0.216=0.784<1$。
> **步骤3**：$n$ 个窗口都未终止的概率 $\le\alpha^n=0.784^n\to 0$，且 $\sum_n 0.784^n<\infty$。
> **结论**：$\mathbb E[\tau]<\infty$，链几乎必然有限步被吸收——与「每轮有常数成功率 $\Rightarrow$ 期望轮数有限」的复杂度论证同构。`,

  "kp-11-5": String.raw`## 指数鞅与破产概率（例4）
设 $\{\zeta_n\}$ i.i.d，$\zeta_n\sim\begin{pmatrix}-1&1\\1-p&p\end{pmatrix}$，$q=1-p$，$S_n=\sum_{k=1}^n\zeta_k$，$\mathcal F_n=\sigma\{S_k,1\le k\le n\}$，且 $p\ne q$。则
$$
X_n\triangleq\Big(\tfrac qp\Big)^{S_n}\,是鞅
$$
**证明**：
$$
\begin{aligned}
\mathbb E[X_{n+1}\mid\mathcal F_n]
&=\Big(\tfrac qp\Big)^{S_n}\mathbb E\Big[\Big(\tfrac qp\Big)^{\zeta_{n+1}}\,\Big|\,\mathcal F_n\Big] \\
&=\Big(\tfrac qp\Big)^{S_n}\Big(\tfrac qp\times p+\tfrac pq\times q\Big) \\
&=\Big(\tfrac qp\Big)^{S_n}
\end{aligned}
$$
沿用上例的 $\tau$，取 $S_0=a$。由鞅的可选停止有 $\mathbb E[X_{\tau}]=\mathbb E[X_0]=(\tfrac qp)^a$，而
$$
\mathbb E[X_{\tau}]=1-\mathbb P(S_{\tau}=a+b)+\mathbb P(S_{\tau}=a+b)\Big(\tfrac qp\Big)^{a+b}
$$
解得破产对立面（赢到 $a+b$）的概率
$$
\mathbb P(S_{\tau}=a+b)=\frac{1-(\tfrac qp)^a}{1-(\tfrac qp)^{a+b}}
$$

> 💡 **CS视角**：偏置随机游走本身不是鞅，但作指数变换 $X_n=(q/p)^{S_n}$ 后凑成鞅——这是「找一个合适的势函数/重要性权重让漂移归零」的经典技巧，对应重要性采样里用似然比 $(q/p)^{S_n}$ 校正偏置，使加权后的期望回到无偏。

> 💡 **CS视角**：可选停止定理 $\mathbb E[X_\tau]=\mathbb E[X_0]$ 把「随机终止时刻的值」拉回「初值」，于是只用一条等式就解出吸收边界处的命中概率——不必模拟整条轨迹。这正是 Monte Carlo 里「能用解析鞅恒等式就别硬跑仿真」的降方差思路。

> 📝 **例**：取 $p=0.4,\ q=0.6$，本金 $a=2$，目标 $a+b=5$，求赌徒达到目标 $5$ 元（而非破产）的概率。
> **步骤1**：比值 $q/p=0.6/0.4=1.5$。
> **步骤2**：代入公式分子 $1-(q/p)^a=1-1.5^2=1-2.25=-1.25$。
> **步骤3**：分母 $1-(q/p)^{a+b}=1-1.5^5=1-7.59375=-6.59375$，相除 $\mathbb P(S_\tau=5)=\dfrac{-1.25}{-6.59375}\approx 0.190$。
> **结论**：达标概率约 $0.19$，破产概率约 $0.81$——劣势赔率（$p<q$）下想翻倍目标，绝大概率先归零。`,

  "kp-11-6": String.raw`## Pólya 盒子模型鞅（例5）
考虑盒子模型：盒中初有红、黑球各一个，每次随机取一球，观察颜色后放回，并加入一个同色球，如此重复。记 $R_n$ 为第 $n$ 次取球时红球所占比例，则 $\{R_n\}$ 关于 $\mathcal F_n=\sigma(R_i,1\le i\le n)$ 为鞅。

**证明（验证三条性质）**：(1) $\mathbb E[|R_n|]\le 1$；(2) $R_n$ 关于 $\mathcal F_n$ 可测。(3) 记 $\xi_n$ 为第 $n$ 次取到红球的指示（$\xi_n\in\{0,1\}$，$\mathbb P(\xi_n=1\mid R_n)=R_n$），由 $(n+2)R_{n+1}=(n+1)R_n+\xi_n$ 得
$$
R_{n+1}=\tfrac{n+1}{n+2}R_n+\tfrac{1}{n+2}\xi_n
$$
故
$$
\begin{aligned}
\mathbb E[R_{n+1}\mid\mathcal F_n]
&=\tfrac{n+1}{n+2}R_n+\tfrac{1}{n+2}\mathbb E[\xi_n\mid R_n] \\
&=\tfrac{n+1}{n+2}R_n+\tfrac{1}{n+2}R_n=R_n
\end{aligned}
$$
所以 $\{R_n\}$ 是鞅。

> 💡 **CS视角**：Pólya 罐子是「富者愈富」的最小模型——抽中即加同色球，正反馈放大比例。它是 Dirichlet/Beta-Bernoulli 共轭、汤普森采样(Thompson sampling)以及推荐系统「流行度滚雪球」的概率原型，而「比例 $R_n$ 是鞅」说明每一步的期望比例不变，长期极限是一个随机的 Beta 分布。

> 💡 **CS视角**：尽管每次抽样会改变罐子组成（采样分布随状态变化），但归一化后的比例 $R_n$ 期望守恒，是典型的「自归一化无偏量」。这与流式估计里维护一个随数据更新却保持无偏的运行统计量（running estimate）同构。

> 📝 **例**：罐中现有红 $1$、黑 $1$（$R_n=\tfrac12$），算下一步后红球比例 $R_{n+1}$ 的条件期望（此时 $n=0$，总数 $n+2=2$）。
> **步骤1**：以概率 $R_n=\tfrac12$ 抽到红、加红球，比例变为 $\tfrac{2}{3}$。
> **步骤2**：以概率 $1-R_n=\tfrac12$ 抽到黑、加黑球，红比例变为 $\tfrac{1}{3}$。
> **步骤3**：取期望 $\mathbb E[R_{n+1}\mid\mathcal F_n]=\tfrac12\cdot\tfrac23+\tfrac12\cdot\tfrac13=\tfrac13+\tfrac16=\tfrac12$。
> **结论**：恰等于 $R_n=\tfrac12$，鞅性得证——单步可能向上或向下，但期望比例纹丝不动。`,

  "kp-11-7": String.raw`## Markov 过程的定义
设 $\{X_n,n\ge 1\}$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上取值于 $(E,\Sigma)$ 的随机变量，$\{\mathcal F_n,n\ge 0\}$ 是一列上升的 $\sigma$ 代数，若满足
$$
\begin{aligned}
&(1)\ X_n\,关于\,\mathcal F_n\,可测 \\
&(2)\ \forall n\ge 1,\ B\in\Sigma,\ \mathbb P(X_{n+1}\in B\mid\mathcal F_n)=\mathbb P(X_{n+1}\in B\mid X_n)\ (a.s.)
\end{aligned}
$$
则称 $\{X_n\}$ 关于 $\{\mathcal F_n\}$ 是 **Markov 过程**，性质 (2) 称为 **Markov 性**。常取 $\mathcal F_n=\sigma\{X_k,1\le k\le n\}$，此时 (2) 化为
$$
\mathbb P(X_{n+1}\in B\mid X_1,...,X_n)=\mathbb P(X_{n+1}\in B\mid X_n)\ (a.s.)
$$
若 $E=\{x_1,...,x_n,...\}$ 可数，则 $\{X_n\}$ 是 Markov 过程等价于
$$
\mathbb P(X_{n+1}=x_{n+1}\mid X_1=x_1,...,X_n=x_n)=\mathbb P(X_{n+1}=x_{n+1}\mid X_n=x_n)
$$

> 💡 **CS视角**：Markov 性 = 无记忆状态转移：未来只依赖当前状态，与如何到达该状态的历史无关。这是 MDP（强化学习的数学骨架）、隐马尔可夫模型、PageRank 随机游走的根本假设——只要把「状态」设计得足够充分，就能扔掉全部历史，极大压缩存储与计算。

> 💡 **CS视角**：可数状态下「条件只保留上一步」的等式，就是转移矩阵 $P_{ij}=\mathbb P(X_{n+1}=x_j\mid X_n=x_i)$ 的定义来源——整条链由初始分布加一张转移表完全刻画。注意若当前状态信息不够，可把最近 $k$ 步打包成「扩展状态」（即 $k$ 阶 Markov / n-gram），重新获得一阶 Markov 性。

> 📝 **例**：两状态天气链，状态 $\{晴,雨\}$，转移 $\mathbb P(晴\to晴)=0.8,\ \mathbb P(雨\to雨)=0.6$，已知今天晴，求后天仍晴的概率。
> **步骤1**：由 Markov 性，后天只依赖明天，与今天之前无关。先看明天：$\mathbb P(明晴\mid今晴)=0.8$，$\mathbb P(明雨\mid今晴)=0.2$。
> **步骤2**：再从明天推后天。$\mathbb P(后晴\mid明晴)=0.8$；$\mathbb P(后晴\mid明雨)=1-0.6=0.4$。
> **步骤3**：全概率展开 $\mathbb P(后晴\mid今晴)=0.8\times0.8+0.2\times0.4=0.64+0.08=0.72$。
> **结论**：后天仍晴的概率为 $0.72$——计算中完全不需要昨天及更早的天气，这正是无记忆性带来的便利。`,

  "kp-12-1": String.raw`## 几乎处处收敛（定义与基本性质）
设 $\{X;X_n,n\ge1\}$ 是一列定义在 $(\Omega,\mathcal F,\mathbb P)$、取值于 $\mathbb R^d$ 的随机变量。若存在 $\mathbb P$-零集 $N$，使得 $\forall w\in N^C$，
$$
\lim_{n\to\infty}X_n(w)=X(w)
$$
则称 $\{X_n\}$ **几乎处处收敛**于 $X$（或以概率 1 收敛于 $X$），记为 $X_n\overset{a.s}\to X\,(n\to\infty)$ 或 $\lim_{n\to\infty}X_n=X\ (a.s)$。

**基本性质**：
$$
\begin{aligned}
&(1)\ X_n\overset{a.s}\to X,\ X_n\overset{a.s}\to Y\Rightarrow X=Y\ (a.s) \\
&(2)\ X_n\overset{a.s}\to X,\ Y_n\overset{a.s}\to Y\Rightarrow X_n\pm Y_n\overset{a.s}\to X\pm Y,\ X_nY_n\overset{a.s}\to XY,\ \frac{X_n}{Y_n}\overset{a.s}\to\frac XY \\
&(3)\ X_n\overset{a.s}\to X,\ f\,连续\Rightarrow f(X_n)\overset{a.s}\to f(X)
\end{aligned}
$$
即 a.s. 收敛等价于"除去一个概率为零的坏集后，逐点收敛"，其代数与连续映射性质都从逐点极限直接继承。

> 💡 **CS视角**：a.s. 收敛 = 「以概率 1 逐点收敛」——把样本点 $w$ 看成一次随机种子，几乎每条采样轨道 $X_1(w),X_2(w),\dots$ 都老老实实收敛到 $X(w)$，只有一个测度为 $0$ 的"坏种子集"可以例外。随机梯度下降"几乎必然收敛到极小点"、Monte Carlo 估计量"几乎必然收敛到真值"用的都是这种强收敛。

> 💡 **CS视角**：性质 (3) 是连续映射定理的 a.s. 版——只要 $f$ 连续，就能对收敛序列"套一层函数"而不破坏收敛，这让你放心地对收敛的参数估计再做后处理（如归一化、softmax）。

> 📝 **例**：设 $X_n=X+\frac1n Z$，其中 $Z$ 是某固定随机变量，问 $X_n$ 是否 a.s. 收敛于 $X$。
> **步骤1**：固定样本点 $w$，则 $X_n(w)=X(w)+\frac1n Z(w)$ 是一条确定的数列。
> **步骤2**：只要 $Z(w)$ 有限（这在 a.s. 意义下成立），$\frac1n Z(w)\to0$，故 $X_n(w)\to X(w)$。
> **步骤3**：除去 $\{|Z|=\infty\}$ 这个概率为 $0$ 的坏集，所有样本轨道都收敛。
> **结论**：$X_n\overset{a.s}\to X$——这正是"随机扰动以 $1/n$ 速率衰减则强收敛"的典型情形，对应数值算法中步长趋零时迭代轨道几乎必然稳定。`,

  "kp-12-2": String.raw`## a.s. 收敛的有用刻画（定理6.1.1）
若 $X$ 和 $X_n$ 都是 a.s. 有限，则
$$
X_n\overset{a.s}\to X\iff 1=\mathbb P\Big(\bigcap_{k=1}^{\infty}\bigcup_{N=1}^{\infty}\bigcap_{n=N}^{\infty}\{|X_n-X|<\tfrac1k\}\Big)\iff\forall k\ge1,\ \mathbb P\Big(\bigcap_{N=1}^{\infty}\bigcup_{n=N}^{\infty}\{|X_n-X|\ge\tfrac1k\}\Big)=0
$$
**定理6.1.1**：若 $X,X_n$ 都 a.s. 有限，则
$$
X_n\overset{a.s}\to X\iff\forall\epsilon>0,\ \lim_{N\to\infty}\mathbb P\Big(\bigcup_{n=N}^{\infty}\{|X_n-X|\ge\epsilon\}\Big)=0
$$
**证明要点**：令 $B_N=\bigcup_{n=N}^{\infty}\{|X_n-X|\ge\tfrac1k\}\downarrow$，由测度的连续性
$$
\mathbb P\Big(\bigcap_{N=1}^{\infty}B_N\Big)=\mathbb P(\lim_{N\to\infty}B_N)=\lim_{N\to\infty}\mathbb P(B_N)
$$
故 $\bigcap_N B_N$ 概率为 $0$ 等价于 $\mathbb P(B_N)\to0$，即得上述刻画。

> 💡 **CS视角**：定理把"逐点收敛"翻译成尾事件概率 $\mathbb P(\sup_{n\ge N}|X_n-X|\ge\epsilon)\to0$——注意它管的是"从 $N$ 往后还有任何一次越界"（取并集），比依概率收敛只看单个 $\mathbb P(|X_N-X|\ge\epsilon)$ 强得多。工程上这对应"从某轮起整条轨迹都不再越界"，而非"某一轮恰好达标"。

> 📝 **例**：设 $\mathbb P(|X_n-X|\ge\epsilon)=2^{-n}$（对每个固定 $\epsilon$），用定理6.1.1 判断 a.s. 收敛。
> **步骤1**：估尾事件并集 $\mathbb P\big(\bigcup_{n=N}^{\infty}\{|X_n-X|\ge\epsilon\}\big)\le\sum_{n=N}^{\infty}2^{-n}$。
> **步骤2**：等比尾和 $\sum_{n=N}^{\infty}2^{-n}=2^{-N+1}$。
> **步骤3**：$N\to\infty$ 时 $2^{-N+1}\to0$，满足定理6.1.1 的条件。
> **结论**：$X_n\overset{a.s}\to X$——尾事件概率指数衰减则强收敛，这是分析"以高概率达标"算法是否进一步"几乎必然达标"的标准套路。`,

  "kp-12-3": String.raw`## a.s. 收敛的级数判据（推论）
$$
\begin{aligned}
&(1)\ 若\,\forall\epsilon>0,\ \sum_{n=1}^{\infty}\mathbb P(\{|X_n-X|\ge\epsilon\})<\infty,\ 则\,X_n\overset{a.s}\to X \\
&(2)\ 若存在正数列\,\epsilon_n\downarrow0,\ s.t.\ \sum_{n=1}^{\infty}\mathbb P(\{|X_n-X|\ge\epsilon_n\})<\infty,\ 则\,X_n\overset{a.s}\to X
\end{aligned}
$$
**证明 (1)**：由 $\mathbb P\big(\bigcup_{n=N}^{\infty}\{|X_n-X|\ge\epsilon\}\big)\le\sum_{n=N}^{\infty}\mathbb P(\{|X_n-X|\ge\epsilon\})$，而级数收敛使余项 $\to0$，故
$$
\lim_{N\to\infty}\mathbb P\Big(\bigcup_{n=N}^{\infty}\{|X_n-X|\ge\epsilon\}\Big)\le\lim_{N\to\infty}\sum_{n=N}^{\infty}\mathbb P(\{|X_n-X|\ge\epsilon\})=0
$$
由定理6.1.1 即得 $X_n\overset{a.s}\to X$。

**证明 (2)**：由 $\epsilon_n\downarrow0$ 知 $\exists n_0$，当 $n\ge n_0$ 时 $\epsilon_n<\epsilon$，故 $\mathbb P(\{|X_n-X|\ge\epsilon\})\le\mathbb P(\{|X_n-X|\ge\epsilon_n\})$，从而
$$
\sum_{n=1}^{\infty}\mathbb P(\{|X_n-X|\ge\epsilon\})\le\sum_{n=1}^{n_0}\mathbb P(\{|X_n-X|\ge\epsilon\})+\sum_{n=n_0+1}^{\infty}\mathbb P(\{|X_n-X|\ge\epsilon_n\})<\infty
$$
由 (1) 即得 $X_n\overset{a.s}\to X$。

> 💡 **CS视角**：这是 B-C 引理在收敛分析里的直接应用——把"越界事件 $A_n=\{|X_n-X|\ge\epsilon\}$"的概率级数加起来，只要收敛就推出 $\mathbb P(A_n\text{ i.o.})=0$，即越界几乎只发生有限次，于是 a.s. 收敛。证收敛速率时常先证 $\mathbb P(\text{误差}>\epsilon)$ 可被一个可和级数（如 $n^{-2}$、$e^{-cn}$）控制。

> 📝 **例**：设 $\mathbb P(|X_n-X|\ge\epsilon)=\frac{C}{n^2}$，用级数判据证 a.s. 收敛。
> **步骤1**：对固定 $\epsilon$ 写出级数 $\sum_{n=1}^{\infty}\mathbb P(|X_n-X|\ge\epsilon)=\sum_{n=1}^{\infty}\frac{C}{n^2}$。
> **步骤2**：$\sum_{n\ge1}n^{-2}=\frac{\pi^2}{6}<\infty$（p-级数 $p=2>1$ 收敛），故级数 $=\frac{C\pi^2}{6}<\infty$。
> **步骤3**：满足推论 (1) 的条件，且对任意 $\epsilon>0$ 都成立。
> **结论**：$X_n\overset{a.s}\to X$——只要越界概率衰减得比 $1/n$ 快（如 $1/n^2$），级数可和便保证强收敛，这是最常用的 a.s. 收敛判据。`,

  "kp-12-4": String.raw`## Borel-Cantelli 引理
$$
若\,\sum_{n=1}^{\infty}\mathbb P(A_n)<\infty,\ 则\,\mathbb P(A_n\text{ i.o.})=0
$$
其中 $\{A_n\text{ i.o.}\}\triangleq\bigcap_{N=1}^{\infty}\bigcup_{n=N}^{\infty}A_n$，"i.o." 即 infinitely often；$w\in\bigcup_{n=N}^{\infty}A_n\,(\forall N)$ 表示 $w$ 属于无穷多个 $A_n$。

**证明**：由测度连续性与次可加性，
$$
\mathbb P(A_n\text{ i.o.})=\mathbb P\Big(\bigcap_{N=1}^{\infty}\bigcup_{n=N}^{\infty}A_n\Big)=\lim_{N\to\infty}\mathbb P\Big(\bigcup_{n=N}^{\infty}A_n\Big)\le\lim_{N\to\infty}\sum_{n=N}^{\infty}\mathbb P(A_n)=0
$$
因级数收敛使其尾和趋于 $0$，故无穷多个 $A_n$ 同时发生的概率为零。

> 💡 **CS视角**：B-C 引理一句话——「若 $\sum_n\mathbb P(A_n)<\infty$，则事件 $A_n$ 几乎必然只发生有限次、此后不再发生」。它是证明随机算法"几乎必然终止"的利器：把 $A_n=\{第\,n\,轮仍未终止/出错\}$，只要这些概率可和，就推出算法几乎必然在有限步内终止。注意它对任意事件成立，不需要独立性。

> 📝 **例**：反复独立投一枚均匀硬币，$A_n=\{第\,n\,次到第\,2n\,次全是正面\}$（连续 $n+1$ 个正面），问"无穷多次出现这种连胜"的概率。
> **步骤1**：$A_n$ 是连续 $n+1$ 次正面，$\mathbb P(A_n)=2^{-(n+1)}$。
> **步骤2**：求级数 $\sum_{n=1}^{\infty}\mathbb P(A_n)=\sum_{n=1}^{\infty}2^{-(n+1)}=\frac14+\frac18+\dots=\frac12<\infty$（等比级数）。
> **步骤3**：级数收敛，套 B-C 引理得 $\mathbb P(A_n\text{ i.o.})=0$。
> **结论**：这种越来越长的连胜几乎必然只发生有限次——级数可和 $\Rightarrow$ 事件最终绝迹，正是"用 $\sum P(A_n)<\infty$ 判一个具体级数"的标准范例。`,

  "kp-12-5": String.raw`## Borel 0-1 律
若 $\{A_n\}$ 是一列**相互独立**的事件，那么
$$
\mathbb P(A_n\text{ i.o.})=\begin{cases}0,&\sum_{n=1}^{\infty}\mathbb P(A_n)<\infty\\1,&\sum_{n=1}^{\infty}\mathbb P(A_n)=\infty\end{cases}
$$
**证明**：考察补事件，利用独立性与 $1-x\le e^{-x}$，
$$
\begin{aligned}
\mathbb P(\{A_n\text{ i.o.}\}^C)&=\mathbb P\Big(\bigcup_{N=1}^{\infty}\bigcap_{n=N}^{\infty}A_n^C\Big)=\lim_{N\to\infty}\lim_{k\to\infty}\prod_{n=N}^{N+k-1}(1-\mathbb P(A_n))\\
&\le\lim_{N\to\infty}\lim_{k\to\infty}e^{-\sum_{n=N}^{N+k-1}\mathbb P(A_n)}=\lim_{N\to\infty}e^{-\sum_{n=N}^{\infty}\mathbb P(A_n)}
\end{aligned}
$$
若 $\sum_n\mathbb P(A_n)<\infty$，则尾和 $\to0$，上式 $=1$，故 $\mathbb P(A_n\text{ i.o.})=0$；若 $\sum_n\mathbb P(A_n)=\infty$，则对任意 $N$ 有 $-\sum_{n=N}^{\infty}\mathbb P(A_n)\to-\infty$，上式 $=0$，故 $\mathbb P(A_n\text{ i.o.})=1$。

与 B-C 引理对照：引理对任意事件给出"级数收敛 $\Rightarrow$ 几乎不再发生"，而 0-1 律在独立性下进一步给出"级数发散 $\Rightarrow$ 几乎必然无穷多次发生"的逆向结论。

> 💡 **CS视角**：0-1 律说独立事件的"无穷多次发生"概率非 0 即 1，没有中间值——这是典型的尾事件 0-1 现象。判据极简：级数发散就一定会反复无穷多次发生。在随机数据流里，只要每条独立记录触发某稀有事件的概率级数发散（如 $\mathbb P(A_n)=1/n$），该事件就几乎必然被无穷多次命中——缓存罕见键、长尾故障终将无限次重现。

> 📝 **例**：独立事件列满足 $\mathbb P(A_n)=\frac1n$，问 $A_n$ 是否几乎必然无穷多次发生。
> **步骤1**：求级数 $\sum_{n=1}^{\infty}\mathbb P(A_n)=\sum_{n=1}^{\infty}\frac1n$。
> **步骤2**：调和级数 $\sum_{n\ge1}\frac1n=\infty$ 发散（p-级数 $p=1$）。
> **步骤3**：事件独立且级数发散，套 Borel 0-1 律的第二种情形。
> **结论**：$\mathbb P(A_n\text{ i.o.})=1$——尽管单次概率 $1/n\to0$，但独立性 + 发散使其几乎必然无穷多次发生，对比 $1/n^2$（可和）时几乎必然绝迹，差别全在级数敛散。`,

  "kp-12-6": String.raw`## 依概率收敛（定义与基本性质）
设 $\{X;X_n,n\ge1\}$ 是一列定义在 $(\Omega,\mathcal F,\mathbb P)$、取值于 $\mathbb R^d$ 的随机变量，若 $\forall\epsilon>0$，
$$
\lim_{n\to\infty}\mathbb P(|X_n-X|\ge\epsilon)=0
$$
则称 $\{X_n\}$ **依概率收敛**于 $X$，记为 $X_n\overset{P}\to X\,(n\to\infty)$。

**基本性质**：
$$
\begin{aligned}
&(1)\ X_n\overset{P}\to X,\ X_n\overset{P}\to Y\Rightarrow X=Y\ (a.s) \\
&(2)\ X_n\overset{P}\to X,\ Y_n\overset{P}\to Y\Rightarrow X_n\pm Y_n\overset{P}\to X\pm Y,\ X_nY_n\overset{P}\to XY,\ \frac{X_n}{Y_n}\overset{P}\to\frac XY \\
&(3)\ X_n\overset{P}\to X,\ f\,连续\Rightarrow f(X_n)\overset{P}\to f(X)
\end{aligned}
$$
**(1) 证明**：对任意 $k$，由 $\{|X-Y|>\tfrac1k\}\subset\{|X-X_n|>\tfrac1{2k}\}\cup\{|X_n-Y|>\tfrac1{2k}\}$，
$$
\mathbb P(|X-Y|>0)=\lim_{k\to\infty}\mathbb P(|X-Y|>\tfrac1k)\le\lim_{k\to\infty}\lim_{n\to\infty}\big[\mathbb P(|X-X_n|>\tfrac1{2k})+\mathbb P(|X_n-Y|>\tfrac1{2k})\big]=0
$$
故 $X=Y\ (a.s)$。

> 💡 **CS视角**：依概率收敛 = 「误差超过阈值 $\epsilon$ 的概率 $\to0$」——只要 $n$ 够大，单次采样的偏差超阈概率任意小，但不保证某条具体轨道最终稳定。弱大数定律给出的就是样本均值依概率收敛到期望，A/B 测试"样本越多估计越可能落在误差带内"用的也是这种收敛。

> 💡 **CS视角**：它比 a.s. 收敛弱——只控制每个 $n$ 的瞬时越界概率，不控制"从某轮起整条轨道不越界"。所以"高概率正确"（依概率）和"几乎必然正确"（a.s.）是两个强度不同的保证，写收敛性证明时务必区分。

> 📝 **例**：弱大数定律——设 $X_1,\dots,X_n$ i.i.d.，$\mathbb E[X_i]=\mu$，$\mathrm{Var}(X_i)=\sigma^2$，样本均值 $\bar X_n=\frac1n\sum_i X_i$，证 $\bar X_n\overset{P}\to\mu$。
> **步骤1**：$\mathbb E[\bar X_n]=\mu$，$\mathrm{Var}(\bar X_n)=\frac{\sigma^2}{n}$。
> **步骤2**：套 Chebyshev 不等式 $\mathbb P(|\bar X_n-\mu|\ge\epsilon)\le\frac{\mathrm{Var}(\bar X_n)}{\epsilon^2}=\frac{\sigma^2}{n\epsilon^2}$。
> **步骤3**：固定 $\epsilon>0$，令 $n\to\infty$，上界 $\frac{\sigma^2}{n\epsilon^2}\to0$。
> **结论**：$\bar X_n\overset{P}\to\mu$——样本越多，均值落在 $\mu$ 的 $\epsilon$ 邻域外的概率越小，这正是 Monte Carlo 估计"加样本提精度"的理论依据。`,

  "kp-12-7": String.raw`## a.s. 收敛与依概率收敛的关系（定理6.2.1）
**命题**：$X_n\overset{a.s}\to X\Rightarrow X_n\overset{P}\to X$。

**证明**：$\forall\epsilon>0$，由定理6.1.1，
$$
0=\lim_{N\to\infty}\mathbb P\Big(\bigcup_{n=N}^{\infty}|X_n-X|\ge\epsilon\Big)\ge\lim_{N\to\infty}\mathbb P(|X_N-X|\ge\epsilon)
$$
其逆命题不成立，但有：

**定理6.2.1**：
$$
X_n\overset{P}\to X\iff 存在子列\,\{n_k\}\,的子列\,\{n_k'\},\ 使得\,X_{n_k'}\overset{a.s}\to X
$$
**证明 ($\Rightarrow$)**：取 $n_k\uparrow+\infty$ 使 $\mathbb P(|X_{n_k}-X|>\tfrac1{2^k})<\tfrac1{2^k}$，则 $\sum_k\mathbb P(|X_{n_k}-X|>\tfrac1{2^k})<\infty$，由级数判据 $X_{n_k}\overset{a.s}\to X$。

**($\Leftarrow$)** 反证：若 $X_n\overset{P}\nrightarrow X$，则 $\exists\epsilon_0>0$ 使 $a_n\triangleq\mathbb P(|X_n-X|\ge\epsilon_0)\nrightarrow0$，故有子列 $a_{n_k}\to a_0>0$。但由条件 $\{X_{n_k}\}$ 有子列 $\{X_{n_k'}\}$ 满足 $X_{n_k'}\overset{a.s}\to X$，从而 $X_{n_k'}\overset{P}\to X$，即 $a_{n_k'}\to0$，与 $a_{n_k}\to a_0>0$ 矛盾。

利用此定理证基本性质 (3)：$X_n\overset{P}\to X$ 则其子列的子列 $X_{n_k'}\overset{a.s}\to X$，$f$ 连续故 $f(X_{n_k'})\overset{a.s}\to f(X)$，再由定理6.2.1 得 $f(X_n)\overset{P}\to f(X)$。

> 💡 **CS视角**：层级关系是「a.s. 收敛 $\Rightarrow$ 依概率收敛」，反之不必然——强收敛蕴含弱收敛。定理6.2.1 给出弱收敛的"子列救援"：依概率收敛虽不保证整条轨道收敛，但总能抽出一条几乎必然收敛的子序列。这也是证连续映射定理 (3) 的标准技巧——"子列的子列"法。

> 📝 **例**：经典反例——依概率收敛但不 a.s. 收敛的"滑动窗口"序列。在 $[0,1]$ 上均匀取点，区间块 $I_n$ 依次为 $[0,1],[0,\tfrac12],[\tfrac12,1],[0,\tfrac13],[\tfrac13,\tfrac23],[\tfrac23,1],\dots$，令 $X_n=1_{I_n}$，看它向 $0$ 的两种收敛。
> **步骤1**：第 $n$ 块长度 $|I_n|\to0$，故 $\mathbb P(|X_n-0|\ge\epsilon)=\mathbb P(X_n=1)=|I_n|\to0$，即 $X_n\overset{P}\to0$。
> **步骤2**：但对任意固定点 $w\in[0,1]$，滑动窗口会无穷多次扫过它，故 $X_n(w)=1$ 出现无穷多次，也 $=0$ 无穷多次，$X_n(w)$ 不收敛。
> **步骤3**：于是没有任何样本点使整条轨道收敛，$X_n\nrightarrow0\ (a.s)$。
> **结论**：依概率收敛 $\not\Rightarrow$ a.s. 收敛；但按定理6.2.1，可抽子列（如每块取窗口"恰好不盖住 $w$"的项）使其几乎必然收敛——弱收敛与强收敛强度确有差别。`,

  "kp-13-1": String.raw`## $L^r$ 收敛的定义与推论
设 $(\Omega,\mathcal F,P)$ 是一概率空间，定义
$$
L^r=L^r(\Omega,\mathcal F,P)=\{r.v.\ X:\mathbb E|X|^r<\infty\}
$$
若 $\{X;X_n,n\ge1\}\subset L^r$ 且 $\mathbb E|X_n-X|^r\to0$，则称 $X_n$ **$r$ 阶矩收敛**于 $X$，记为
$$
X_n\xrightarrow{r}X\quad(n\to\infty)
$$

**推论(1)（$L^r$ 收敛 $\Rightarrow$ 依概率收敛）**：
$$
X_n\xrightarrow{r}X\Rightarrow X_n\xrightarrow{P}X\quad(n\to\infty)
$$
证：$\forall\epsilon>0$，由 Markov 不等式
$$
\mathbb P(|X_n-X|\ge\epsilon)\le\epsilon^{-r}\mathbb E|X_n-X|^r\to0
$$

> 💡 **CS视角**：$r=2$ 的 $L^2$ 收敛正是机器学习里 MSE 损失趋于 $0$：$\mathbb E|\hat X_n-X|^2\to0$ 等价于「均方误差 $\to0$」。优化器把训练损失压到 $0$，就是在让预测在 $L^2$ 意义下收敛到真值；$r=1$ 则对应 MAE/L1 损失收敛。

> 💡 **CS视角**：推论(1) 说损失收敛蕴含依概率收敛，但反之不成立——这就是为什么单看「大多数样本预测对了」不够，还要看损失（含罕见大误差的加权），尾部的稀有大错会让矩收敛失败而依概率收敛仍成立。

> 📝 **例**：设 $X_n$ 以概率 $\tfrac1n$ 取 $\sqrt n$、以概率 $1-\tfrac1n$ 取 $0$，问 $X_n$ 是否 $L^2$ 收敛到 $0$。
> **步骤1**：算二阶矩 $\mathbb E|X_n-0|^2=\mathbb E X_n^2=(\sqrt n)^2\cdot\tfrac1n+0\cdot(1-\tfrac1n)$。
> **步骤2**：$=n\cdot\tfrac1n=1$，不随 $n$ 趋于 $0$。
> **步骤3**：故 $\mathbb E|X_n|^2\not\to0$，$X_n$ 不 $L^2$ 收敛到 $0$；但 $\mathbb P(|X_n|\ge\epsilon)=\tfrac1n\to0$，依概率收敛成立。
> **结论**：依概率收敛 $\not\Rightarrow$ $L^r$ 收敛——稀有的大值（$\sqrt n$）被平方放大，撑住了 MSE，正是「损失不降但准确率上升」的数学原型。`,

  "kp-13-2": String.raw`## $C_r$ 不等式（引理1）
设 $X_1,...,X_n$ 是随机变量，$S_n=\sum_{i=1}^n X_i$，则
$$
\mathbb E|S_n|^r\le c_r\sum_{i=1}^n\mathbb E|X_i|^r,\qquad c_r=\begin{cases}1,&0<r\le1\\ n^{r-1},&r>1\end{cases}
$$

**证明**：先证数值不等式 $\big(\sum_{i=1}^n|a_i|\big)^r\le c_r\sum_{i=1}^n|a_i|^r$。

若 $r>1$，令 $\xi$ 以等概率取值于 $a_1,...,a_n$，对凸函数 $f(x)=x^r$ 用 Jensen 不等式：
$$
f(\mathbb E|\xi|)\le\mathbb E f(|\xi|)=\mathbb E|\xi|^r\Rightarrow\frac1{n^r}\Big(\sum_{i=1}^n|a_i|\Big)^r\le\frac1n\sum_{i=1}^n|a_i|^r
$$
即 $\big(\sum|a_i|\big)^r\le n^{r-1}\sum|a_i|^r$。

若 $0<r\le1$，$a_i$ 全为 $0$ 时显然，否则由 $x\le x^r\ (0<x\le1)$ 知 $\dfrac{|a_k|}{\sum_i|a_i|}\le\dfrac{|a_k|^r}{(\sum_i|a_i|)^r}$，关于 $k$ 累加得 $1\le\dfrac{\sum_k|a_k|^r}{(\sum_i|a_i|)^r}$，即 $\big(\sum|a_i|\big)^r\le\sum|a_k|^r$。

取 $a_i=X_i$ 并取期望，再由 $|S_n|\le\sum|X_i|$ 即得结论。

> 💡 **CS视角**：$C_r$ 不等式给出「和的 $r$ 阶矩」被「各项 $r$ 阶矩之和」控制，是算法分析里界定随机量的常用工具——把复杂的求和型随机量（如多个误差累积、多个子任务时延之和）的高阶矩，拆成各项独立处理再相加。

> 📝 **例**：$X_1,X_2$ 满足 $\mathbb E|X_1|^2=4,\ \mathbb E|X_2|^2=9$，用 $C_2$ 不等式给 $\mathbb E|X_1+X_2|^2$ 一个上界。
> **步骤1**：$r=2>1$，$n=2$，故 $c_r=n^{r-1}=2^{1}=2$。
> **步骤2**：$\mathbb E|X_1+X_2|^2\le c_r(\mathbb E|X_1|^2+\mathbb E|X_2|^2)=2\times(4+9)$。
> **步骤3**：$=2\times13=26$。
> **结论**：$\mathbb E|X_1+X_2|^2\le26$——无需知道 $X_1,X_2$ 的相关性即可给出二阶矩上界，恰是「不假设独立也能界住和的方差量级」的工程套路。`,

  "kp-13-3": String.raw`## Minkowski 不等式（引理2）
当 $r\ge1$ 时，在 $L^r$ 中定义 $\|X\|_r=(\mathbb E|X|^r)^{1/r}$，则 $\|\cdot\|_r$ 是范数，特别地
$$
\|x+y\|_r\le\|x\|_r+\|y\|_r
$$
从而可在 $L^r$ 中定义距离 $d(x,y)=\|x-y\|_r$。

**证明**：$r=1$ 即三角不等式。$r>1$ 时
$$
\mathbb E|x+y|^r=\mathbb E|x+y|^{r-1}|x+y|\le\mathbb E|x||x+y|^{r-1}+\mathbb E|y||x+y|^{r-1}
$$
对每项用 Hölder 不等式（取 $p=r,\ q=\tfrac r{r-1}$）：
$$
\mathbb E|x+y|^r\le\Big((\mathbb E|x|^r)^{1/r}+(\mathbb E|y|^r)^{1/r}\Big)(\mathbb E|x+y|^r)^{1-1/r}
$$
若 $\mathbb E|x+y|^r<\infty$，两边同除 $(\mathbb E|x+y|^r)^{1-1/r}$ 即得；若 $\mathbb E|x+y|^r=\infty$，由 $C_r$ 不等式知 $\|x\|_r,\|y\|_r$ 至少一个为 $\infty$，两边皆 $\infty$，结论仍成立。

> 💡 **CS视角**：Minkowski 不等式就是「$L^r$ 范数满足三角不等式」，把随机变量空间变成了赋范（度量）空间——$d(X,Y)=\|X-Y\|_r$。$L^r$ 收敛于是等价于在这个度量下 $d(X_n,X)\to0$，和向量空间里「梯度范数 $\to0$」「嵌入距离 $\to0$」是同一套语言。

> 💡 **CS视角**：$r=2$ 时 $\|\cdot\|_2$ 来自内积 $\langle X,Y\rangle=\mathbb E[XY]$，$L^2$ 是 Hilbert 空间——这正是最小二乘、投影、PCA、条件期望（$L^2$ 投影）能用「正交分解」做的根基。

> 📝 **例**：$X,Y\in L^2$，$\|X\|_2=3,\ \|Y\|_2=4$，给 $\|X+Y\|_2$ 一个上界。
> **步骤1**：Minkowski（$r=2$）给 $\|X+Y\|_2\le\|X\|_2+\|Y\|_2$。
> **步骤2**：代入 $\le3+4$。
> **步骤3**：$=7$。
> **结论**：$\|X+Y\|_2\le7$——这就是 $L^2$ 空间里的三角不等式，与欧氏向量「合向量长度不超过两边长之和」完全同形。`,

  "kp-13-4": String.raw`## $L^r$ 收敛蕴含矩收敛（推论2、推论3）
**推论(2)**：
$$
X_n\xrightarrow{r}X\Rightarrow\mathbb E|X_n|^r\to\mathbb E|X|^r
$$
证：$0<r\le1$ 时用 $C_r$ 不等式（$n=2$）得 $\big|\mathbb E|X_n|^r-\mathbb E|X|^r\big|\le\mathbb E|X_n-X|^r\to0$；$r>1$ 时用 Minkowski 不等式对 $(\mathbb E|X_n|^r)^{1/r}$ 取上、下极限，夹逼得 $(\mathbb E|X|^r)^{1/r}=\lim_n(\mathbb E|X_n|^r)^{1/r}$。

**推论(3)（$L^\infty$ 与各阶范数比较）**：在 $L^\infty=\{X:\exists M>0,\ |X|\le M\ a.s.\}$ 上定义本性上确界 $\|X\|_\infty=\inf\{M:|X|\le M\ a.s.\}$，则 $\|X+Y\|_\infty\le\|X\|_\infty+\|Y\|_\infty$。又当 $0<r<r'<\infty$ 时
$$
(\mathbb E|X|^{r'})^{1/r'}\ge(\mathbb E|X|^r)^{1/r}
$$
且 $r>0$ 时 $\|X\|_\infty\ge\|X\|_r$：由 $|X|\le\|X\|_\infty$ 得 $(\mathbb E|X|^r)^{1/r}\le\|X\|_\infty$。

> 💡 **CS视角**：推论(2) 说 $L^r$ 收敛能保证「矩（即统计量）也收敛」——训练中若预测在 $L^2$ 意义收敛，则模型输出的能量/方差等二阶统计量也随之收敛，监控这些标量即可侧面判断收敛。

> 💡 **CS视角**：范数随阶数单调 $\|X\|_r\le\|X\|_{r'}\ (r<r')$、上界为 $\|X\|_\infty$，对应 $\ell_r$ 范数关系：$\ell_\infty$（最大绝对值）$\ge\cdots\ge$ 高阶 $\ge$ 低阶。高阶范数越「重视」尾部大值，这也是为什么用 $\ell_\infty$ 做鲁棒性约束（限制最坏情形）而非 $\ell_1$。

> 📝 **例**：随机变量 $X$ 满足 $|X|\le5$（即 $\|X\|_\infty=5$），且 $\mathbb E|X|^2=9$，比较 $\|X\|_2$ 与 $\|X\|_\infty$。
> **步骤1**：$\|X\|_2=(\mathbb E|X|^2)^{1/2}=9^{1/2}=3$。
> **步骤2**：$\|X\|_\infty=5$。
> **步骤3**：验证 $\|X\|_2=3\le5=\|X\|_\infty$，与推论(3) 的 $\|X\|_\infty\ge\|X\|_r$ 一致。
> **结论**：$\|X\|_2=3\le\|X\|_\infty=5$——$\ell_\infty$（最坏值）总不小于 $\ell_2$（均方根），与向量范数的大小关系同构。`,

  "kp-13-5": String.raw`## $L^r$ 收敛与矩收敛的等价定理
**定理**：设 $X_n\xrightarrow{P}X$，则以下等价：
$$
(1)\ \mathbb E|X_n-X|^r\to0;\qquad(2)\ \mathbb E|X_n|^r\to\mathbb E|X|^r\quad(n\to\infty)
$$
（其中 $X,X_n\in L^r$。）

**引理3**：$|X_n|\le U_n$，$U_n$ 可积，$U_n\xrightarrow{a.s.}U$，$\mathbb EU_n\to\mathbb EU$，则 $\lim_n\mathbb EX_n=\mathbb E\lim_n X_n$。

**证明 $(2)\Rightarrow(1)$**：取子列 $\{n_k\}$ 使 $X_{n_k}\xrightarrow{a.s.}X$ 且 $\varlimsup_n\mathbb E|X_n-X|^r=\lim_k\mathbb E|X_{n_k}-X|^r$。由 $C_r$ 不等式 $|X_{n_k}-X|^r\le C_r(|X_{n_k}|^r+|X|^r)\triangleq U_{n_k}$，则 $U_{n_k}$ 可积、$U_{n_k}\xrightarrow{a.s.}2C_r|X|^r\triangleq U$、$\mathbb EU_{n_k}\to\mathbb EU$，由引理3得 $\varlimsup_n\mathbb E|X_n-X|^r=\mathbb E\lim_k|X_{n_k}-X|^r=0$。

**定理 7.3.2（推广的勒贝格控制收敛定理）**：
$$
X_n\xrightarrow{P}X,\ 存在可积\,Y\,使\,|X_n|\le Y\ (\forall n)\Rightarrow\lim_n\mathbb E|X_n-X|^r=0
$$
证：取子列 $X_{n_k}\xrightarrow{a.s.}X$ 实现上极限，由 $|X_{n_k}-X|\le2|Y|$ 及控制收敛定理即得。

> 💡 **CS视角**：本定理在「已依概率收敛」的前提下，把「矩也收敛」($\mathbb E|X_n|^r\to\mathbb E|X|^r$) 升级成 $L^r$ 收敛。工程含义：若已知预测在概率意义稳定，再监测一个标量统计量（$r$ 阶矩）是否收敛，就能判定整体损失是否趋于 $0$——省去逐点比较。

> 💡 **CS视角**：推广的控制收敛定理把「逐点收敛」放宽为「依概率收敛 + 一致可积控制 $|X_n|\le Y$」就能交换极限与期望。这正是估计量「期望收敛」需要的正则条件，对应实践中「梯度/损失有界（梯度裁剪、有界 reward）」才能保证期望意义下的收敛。

> 📝 **例**：$X_n\xrightarrow{P}X$ 且 $|X_n|\le1$（有界，可取 $Y=1$ 可积），问 $\mathbb E|X_n-X|^2$ 的极限。
> **步骤1**：常数 $Y=1$ 在概率空间上可积（$\mathbb E Y=1<\infty$），且 $|X_n|\le Y$ 对所有 $n$ 成立。
> **步骤2**：由定理 7.3.2（推广的控制收敛），依概率收敛 + 有界控制 $\Rightarrow$ $L^r$ 收敛。
> **步骤3**：取 $r=2$ 得 $\lim_n\mathbb E|X_n-X|^2=0$。
> **结论**：$\mathbb E|X_n-X|^2\to0$——有界（裁剪过）的预测一旦依概率收敛，MSE 损失必趋于 $0$，这是「梯度裁剪保证训练收敛」的概率论依据。`,

  "kp-13-6": String.raw`## 依分布收敛
设 $\{X;X_n,n\ge1\}$ 是一列实值 r.v，分布函数分别为 $\{F;F_n,n\ge1\}$，记 $\mathcal C(F)$ 为 $F$ 的连续点全体。若
$$
\lim_{n\to\infty}F_n(x)=F(x),\quad\forall x\in\mathcal C(F)
$$
则称 $\{X_n\}$ **依分布收敛**于 $X$，记为 $X_n\xrightarrow{d}X\ (n\to\infty)$。

**推论（极限唯一）**：$X_n\xrightarrow{d}X$ 且 $X_n\xrightarrow{d}Y\Rightarrow X\xrightarrow{d}Y$（即 $F_X\equiv F_Y$）。因 $F_X,F_Y$ 间断点可数，$\mathcal C(F_X)\cap\mathcal C(F_Y)$ 稠密，用稠密点逼近即得处处相等。

**注（依分布收敛不可逐项加减）**：取 $X_n\sim\mathcal N(0,1+\tfrac1n)$，$Y_n=-X_n$，则 $X_n\xrightarrow{d}X\sim\mathcal N(0,1)$，$Y_n\xrightarrow{d}Y\sim\mathcal N(0,1)$，但 $X_n+Y_n=0$，而 $X+Y\sim\mathcal N(0,2)$。

**定理 6.4.1**：实值 r.v 满足
$$
X_n\xrightarrow{P}X\Rightarrow X_n\xrightarrow{d}X
$$
若 $X=C$ 为常数，则 $X_n\xrightarrow{d}X\Rightarrow X_n\xrightarrow{P}X$，此时 $X_n\xrightarrow{d}X\iff X_n\xrightarrow{P}X$。

证：$\forall\epsilon>0$，$F_n(x)\le\mathbb P(X\le x+\epsilon)+\mathbb P(X-X_n\ge\epsilon)$，令 $n\to\infty$ 再令 $\epsilon\to0$ 得 $\varlimsup_n F_n(x)\le F(x)$；同理 $\varliminf_n F_n(x)\ge F(x)$。

> 💡 **CS视角**：依分布收敛 = 经验分布/直方图趋近目标分布。生成模型（GAN、扩散模型）追求的「生成样本的分布逼近真实数据分布」正是依分布收敛——只要 CDF（或直方图）在连续点处对齐即可，不要求逐个样本点对齐。

> 💡 **CS视角**：注意 $\xrightarrow{d}$ 只约束分布、不约束「同一个 $\omega$ 上的取值」，所以 $X_n+Y_n$ 的分布无法由 $X_n,Y_n$ 各自分布定（反例中 $X_n+Y_n\equiv0$）——这就是为什么评估生成模型只比较边缘分布会漏掉联合结构（如两个变量的相关性）。常数极限是唯一例外：依分布 $=$ 依概率。

> 📝 **例**：$X_n\sim\mathcal N(0,\tfrac1n)$（方差 $\tfrac1n\to0$），问 $X_n$ 依分布收敛到什么。
> **步骤1**：方差 $\tfrac1n\to0$，分布越来越集中在 $0$，极限应为退化分布（常数 $0$）。
> **步骤2**：极限 CDF 为阶跃 $F(x)=0\,(x<0),\ 1\,(x\ge0)$，连续点为 $x\ne0$。
> **步骤3**：对 $x>0$，$F_n(x)=\mathbb P(X_n\le x)\to1$；对 $x<0$，$F_n(x)\to0$，在所有连续点处收敛到 $F$。
> **结论**：$X_n\xrightarrow{d}0$；因极限是常数，由定理 6.4.1 同时有 $X_n\xrightarrow{P}0$——直方图坍缩成一根竖线，正是「方差退火到 $0$」的采样行为。`,

  "kp-13-7": String.raw`## 淡收敛与弱收敛
设 $\{F_n,n\ge1\}$ 是一列概率分布函数，$F$ 是一分布函数。若
$$
\lim_{n\to\infty}F_n(x)=F(x),\quad\forall x\in\mathcal C(F)
$$
则称 $\{F_n\}$ **淡收敛**于 $F$，记为 $F_n\xrightarrow{v}F$。若进一步
$$
F_n(\infty)-F_n(-\infty)\to F(\infty)-F(-\infty)
$$
则称 $\{F_n\}$ **弱收敛**于 $F$，记为 $F_n\xrightarrow{w}F$。

**定理 6.4.2（淡收敛子列的存在性）**：
$$
设\,\{F_n,n\ge1\}\,是\,\mathbb R^d\,上一列概率分布函数，则它一定有淡收敛子列。
$$
即概率分布函数族在淡收敛意义下是「列紧」的——可能损失部分质量（极限只是淡收敛而未必弱收敛），但总能抽出一个收敛子列。

> 💡 **CS视角**：弱收敛的标准刻画是「对所有有界连续函数 $f$ 都有 $\mathbb E f(X_n)\to\mathbb E f(X)$」。这正是用测试函数/统计量去比较分布的思路：MMD、积分概率度量都靠「对一族函数取期望并比较」来判断两分布是否接近——弱收敛就是这族期望全部对齐。

> 💡 **CS视角**：淡收敛与弱收敛的差别在于「质量是否跑掉」：方差爆炸的样本可能让概率质量逃向 $\pm\infty$，CDF 在每个连续点仍收敛（淡收敛），但总质量没守住（非弱收敛）。定理 6.4.2 的「淡收敛子列总存在」是紧性结果，对应优化里「有界序列必有收敛子列」，是中心极限定理等存在性证明的脚手架。

> 📝 **例**：$F_n$ 为退化在点 $n$（即 $\mathbb P(X_n=n)=1$）的分布，质量随 $n$ 跑向 $+\infty$，分析其淡/弱收敛。
> **步骤1**：写 CDF $F_n(x)=0\,(x<n),\ 1\,(x\ge n)$。
> **步骤2**：固定任意 $x$，当 $n>x$ 时 $F_n(x)=0$，故 $\lim_n F_n(x)=0$，极限函数 $F\equiv0$。
> **步骤3**：$F\equiv0$ 不是分布函数（$F(\infty)-F(-\infty)=0\ne1$），质量全跑到 $+\infty$——满足淡收敛（在连续点收敛到 $0$）但不满足弱收敛。
> **结论**：$F_n\xrightarrow{v}0$ 但非 $\xrightarrow{w}$——「点质量飘向无穷」是淡收敛却丢质量的典型，提醒做分布逼近时要监控质量是否守恒（如 KL 散度发散的告警）。`,

  "kp-14-1": String.raw`## Helly 选择定理（定理6.4.2）
设 $\{F_n,n\ge 1\}$ 是 $\mathbb R^d$ 上一列概率分布函数，则它一定有淡收敛子列。

**证明（对角线方法）**：记 $Q=\{r_1,r_2,...,r_n,...\}$ 为全体有理数。因为 $\{F_n(r_1)\}$ 有界，故有收敛子列 $\{F_{1n}(r_1)\}$，记 $F_{1n}(r_1)\to F(r_1)$；又 $\{F_{1n}(r_2)\}$ 有界，故有收敛子列 $\{F_{2n}(r_2)\}$，记 $F_{2n}(r_2)\to F(r_2)$。如此下去得阵列
$$
\left(\begin{matrix} F_{11} & F_{12} & \cdots & F_{1n} & \cdots \\ F_{21} & F_{22} & \cdots & F_{2n} & \cdots \\ \cdots & \cdots & \cdots & \cdots & \cdots \\ F_{n1} & F_{n2} & \cdots & F_{nn} & \cdots \\ \cdots & \cdots & \cdots & \cdots & \cdots \end{matrix}\right)
$$
取对角线 $\{F_{nn}\}$，它在每个有理点都收敛，记 $\lim_{n\to\infty} F_{nn}(r)=F(r)$。再定义
$$
F(x)=\inf_{x<r\in\mathbb Q} F(r),\quad x\in\mathbb R
$$
则 $F(x)$ 是一分布函数，且 $F_{nn}\overset{v}\to F\ (n\to\infty)$。

> 💡 **CS视角**：Helly 定理就是「有界序列必有收敛子列」(Bolzano-Weierstrass)在分布层面的版本，提供了一种**紧性**保证：任何一族概率分布，只要把它当成函数序列，总能抽出收敛的子列。这正是优化与采样里证明「迭代序列存在极限点」的常用套路——先证有界，再抽收敛子列。

> 💡 **CS视角**：对角线方法是工程里「枚举可数个约束逐个修补」的经典手法：先在 $r_1$ 上达标，再在 $r_2$ 上达标……取对角线一次性满足所有有理点。和惰性求值里「对每个查询逐步细化」、以及证明可数稠密集上收敛即可推广到全空间的思路同构。

> 📝 **例**：构造一列分布函数说明"淡收敛"会丢失质量。设 $F_n$ 为退化分布 $\delta_n$（点 $n$ 处取值 $1$）的分布函数，求其淡收敛极限。
> **步骤1**：$F_n(x)=\mathbf 1_{\{x\ge n\}}$，对每个固定 $x$，当 $n>x$ 时 $F_n(x)=0$。
> **步骤2**：故对所有 $x$ 有 $\lim_{n\to\infty}F_n(x)=0=:F(x)$。
> **步骤3**：极限 $F\equiv0$ 不是分布函数（$F(\infty)=0\ne1$），质量"跑到了无穷远"。
> **结论**：Helly 保证有淡收敛子列，但极限可能不是分布函数——这正是下面 tight 条件要排除的"质量逃逸"，对应采样里粒子飞出有效区间的退化情形。`,

  "kp-14-2": String.raw`## 淡收敛子列极限唯一则淡收敛（定理6.4.3）
若 $\{F_n\}$ 的每个淡收敛子列都有相同的极限，则 $\{F_n\}$ 淡收敛。

**证明**：设 $F$ 是所有淡收敛子列的公共极限。若 $F_n\nrightarrow F$，则 $\exists x_0\in\mathcal C(F)$（$F$ 的连续点），使得 $F_n(x_0)\nrightarrow F(x_0)$，于是有子列 $\{F_{n_k}(x_0)\}$ 满足 $|F_{n_k}(x_0)-F(x_0)|\ge\epsilon$（$\epsilon>0$）。而 $\{F_{n_k}\}$ 又有淡收敛子列 $\{F_{n_k'}\}$，其极限为 $F$，故 $F_{n_k'}(x_0)\to F(x_0)$，与前式矛盾。

> 💡 **CS视角**：「所有收敛子列同极限 $\Rightarrow$ 整列收敛」是分析里极常用的判据，编程上对应「若所有可能的执行分支都给出同一结果，则整个程序确定性收敛」。反证法的结构是：假设不收敛 $\Rightarrow$ 抽出偏离子列 $\Rightarrow$ 它又有收敛回 $F$ 的子子列 $\Rightarrow$ 矛盾，是紧性的标准用法。

> 📝 **例**：用此判据判断序列是否收敛。设实数列 $a_n=(-1)^n$，看它的子列极限。
> **步骤1**：偶数子列 $a_{2k}=1\to1$，奇数子列 $a_{2k+1}=-1\to-1$。
> **步骤2**：两个收敛子列极限不同（$1\ne-1$）。
> **步骤3**：故不满足"所有收敛子列同极限"的前提，定理不适用，$\{a_n\}$ 确实不收敛。
> **结论**：定理的逆否给了一个实用检测——只要找到两个极限不同的子列就能断定发散，与单元测试里"找到一个反例即判失败"一致。`,

  "kp-14-3": String.raw`## 淡收敛极限为分布函数 $\iff$ tight（定理6.4.4）
若概率分布函数列 $F_n\overset{v}\to F$，则
$$
F\,是概率分布函数 \iff \{F_n\}\,\text{tight}（一致紧）,\ 即\ \forall\epsilon>0,\ \exists L>0,\ \sup_n\{F_n(-L)+1-F_n(L)\}<\epsilon
$$

**证明 $\Rightarrow$**：由 $\lim_{x\to-\infty}F(x)=0,\ \lim_{x\to\infty}F(x)=1$，存在 $L>0$ 使 $F$ 在 $\pm L$ 连续且 $F(-L)+1-F(L)<\tfrac\epsilon3$。因 $F_n\overset{v}\to F$，$n$ 充分大时 $|F_n(\pm L)-F(\pm L)|<\tfrac\epsilon3$，从而
$$
F_n(-L)+1-F_n(L)<\tfrac\epsilon3+F(-L)+1+\tfrac\epsilon3-F(L)<\epsilon,\quad \sup_n\{F_n(-L)+1-F_n(L)\}<\epsilon
$$

**证明 $\Leftarrow$**：由 tight 同上可得 $F(-L)+1-F(L)<\epsilon$，故 $F(-L)<\epsilon,\ 1-F(L)<\epsilon$。当 $x>L$ 时 $F(-x)<\epsilon,\ 1-F(x)<\epsilon$，令 $x\to\infty,\epsilon\to0$ 得 $F(-\infty)=0,\ F(\infty)=1$，即 $F$ 是分布函数。

> 💡 **CS视角**：tight（一致紧）就是「质量不会逃到无穷远」的工程保证：存在一个有界窗口 $[-L,L]$，对**所有** $n$ 都装住至少 $1-\epsilon$ 的概率质量。这正是粒子滤波/重要性采样里要监控的指标——若样本不断飞出有效区间(tail 概率不一致地收敛)，估计就会失真。

> 💡 **CS视角**：注意关键词是 $\sup_n$（对 $n$ 一致），而非逐个 $n$ 成立。区分「逐点收敛」与「一致收敛」是数值算法收敛性分析的核心：只有一致控制尾部，极限才仍是合法分布，蒙特卡洛估计才有归一化保证。

> 📝 **例**：检验标准正态序列 $F_n\equiv\Phi$（恒为 $N(0,1)$）是否 tight，取 $\epsilon=0.05$。
> **步骤1**：要求 $\sup_n\{F_n(-L)+1-F_n(L)\}=\Phi(-L)+1-\Phi(L)=2\Phi(-L)<0.05$。
> **步骤2**：即 $\Phi(-L)<0.025$，查表 $\Phi(-1.96)\approx0.025$，取 $L=1.96$。
> **步骤3**：则窗口 $[-1.96,1.96]$ 对所有 $n$ 都装住约 $95\%$ 质量，满足 tight 定义。
> **结论**：序列 tight，极限 $\Phi$ 仍是分布函数——这也是「$2\sigma$ 区间覆盖约 $95\%$」在代码里设置采样边界的依据。`,

  "kp-14-4": String.raw`## 弱收敛的增量刻画与测度定义
**命题（增量刻画）**：若 $\{F,F_n,n\ge1\}$ 是概率分布函数，则
$$
F_n\overset{w}\to F \iff \forall a\le b\in\mathcal C(F),\ F_n(b)-F_n(a)\to F(b)-F(a)
$$
$\Rightarrow$ 由弱收敛 $F_n(a)\to F(a),\ F_n(b)\to F(b)$ 直接相减即得。$\Leftarrow$ 由
$$
|F_n(b)-F(b)|\le |F_n(b)-F_n(a)-F(b)+F(a)|+|F_n(a)|+|F(a)|
$$
先令 $a\to-\infty$（概率分布函数故 $|F_n(a)|,|F(a)|\to0$），再令 $n\to\infty$，得 $|F_n(b)-F(b)|\to0$，故 $F_n\overset{w}\to F$。

**定义（测度弱收敛）**：设 $\{\mu,\mu_n,n\ge1\}$ 都是 $\mathbb R$ 上概率测度，若对区间 $I=[a,b)$ 满足 $\mu(\{a,b\})=0$ 时有 $\lim_{n\to\infty}\mu_n([a,b))=\mu([a,b))$，则称 $\{\mu_n\}$ 弱收敛于 $\mu$，记 $\mu_n\overset{w}\to\mu$。这里 $\mu(\{a\})=F(a)-F(a^-)=0$ 即要求 $a,b$ 是 $F$ 的连续点。由此得推论：
$$
\mu_n\overset{w}\to\mu \iff F_n\overset{w}\to F \iff X_n\overset{d}\to X
$$

> 💡 **CS视角**：弱收敛只在连续点 $\mathcal C(F)$ 上要求 CDF 收敛，正是为了容忍离散分布逼近连续分布(或反之)时跳点处的不一致。直方图/经验分布逼近真实分布、量化误差分析，都默认这种"忽略可数个跳点"的收敛模式。

> 💡 **CS视角**：增量刻画把 CDF 收敛换成"区间概率收敛"，这恰是经验分布函数(ECDF)做拟合优度检验(如 Kolmogorov-Smirnov)的工作方式——比较每个 bin 上的概率质量，而不需要点点都精确对齐。

> 📝 **例**：经验分布逼近。设真实分布 $\mu=U[0,1]$，$\mu_n$ 为 $n$ 个等距点 $\tfrac{1}{n},\tfrac2n,...,1$ 上的均匀离散分布，看区间 $[0,0.5)$ 的概率。
> **步骤1**：$0,0.5$ 都是 $U[0,1]$ 的连续点，$\mu([0,0.5))=0.5$。
> **步骤2**：$\mu_n([0,0.5))=\dfrac{\#\{k:\,\tfrac kn<0.5\}}{n}=\dfrac{\lfloor n/2\rfloor}{n}$。
> **步骤3**：$n\to\infty$ 时 $\dfrac{\lfloor n/2\rfloor}{n}\to0.5=\mu([0,0.5))$。
> **结论**：离散经验测度在连续点区间上收敛到真分布，故 $\mu_n\overset{w}\to U[0,1]$——网格细化逼近连续分布的标准范式。`,

  "kp-14-5": String.raw`## 弱收敛的有界连续函数刻画（定理6.4.5）
$$
X_n\overset{d}\to X \iff 对\,\mathbb R\,上任意有界连续函数\,f,\ \mathbb E f(X_n)\to\mathbb E f(X) \iff 对\,\mathbb R\,上任意有界一致连续函数\,f,\ \mathbb E f(X_n)\to\mathbb E f(X)
$$

老师未给严格证明，只给直观解释。因为 $\mathbb E f(X_n)=\int_{\mathbb R} f(x)\mu_n(dx),\ \mathbb E f(X)=\int_{\mathbb R} f(x)\mu(dx)$，故第二行等价于 $\int f\,d\mu_n\to\int f\,d\mu$，由推论又等价于 $\mu_n\overset{w}\to\mu$。证明思路是
$$
\int_{\mathbb R} f(x)\mu_n(dx)=\sum_{k=1}^{\infty}\int_{a_{k-1}}^{a_k} f(x)\mu_n(dx)\approx\sum_{k=1}^{\infty}f(\epsilon_k)\mu_n((a_{k-1},a_k])\approx\sum_{k=1}^{\infty}f(\epsilon_k)\mu((a_{k-1},a_k])=\int_{\mathbb R} f(x)\mu(dx)
$$
即在 $\mu$ 的连续点处分割，用 $f$ 在小区间上近似为常数，把弱收敛 $\mu_n\to\mu$ 传递到积分上。

> 💡 **CS视角**：这条「对任意有界连续 $f$，$\mathbb E f(X_n)\to\mathbb E f(X)$」就是**连续映射定理**的根基，也是 PyTorch/TF 里「分布收敛 $\Rightarrow$ 任意平滑统计量(损失、奖励的期望)收敛」的理论依据：只要 $f$ 有界连续，蒙特卡洛估计 $\tfrac1N\sum f(X_n)$ 会跟着分布一起收敛。

> 💡 **CS视角**：证明思路本质是 Riemann 式分桶——把积分写成区间和 $\sum f(\epsilon_k)\mu_n((a_{k-1},a_k])$，再用弱收敛逐桶替换 $\mu_n\to\mu$。这与直方图统计、数值积分中「区间内函数近似为常数」的离散化完全一致。

> 📝 **例**：用此刻画求极限期望。设 $X_n\overset{d}\to X\sim N(0,1)$，取有界连续 $f(x)=\cos x$，求 $\lim_{n\to\infty}\mathbb E\cos(X_n)$。
> **步骤1**：$f(x)=\cos x$ 有界（$|\cos x|\le1$）且连续，满足定理条件。
> **步骤2**：故 $\mathbb E\cos(X_n)\to\mathbb E\cos(X)$，其中 $X\sim N(0,1)$。
> **步骤3**：标准正态下 $\mathbb E\cos(X)=e^{-1/2}\approx0.6065$（特征函数 $\mathbb E e^{itX}=e^{-t^2/2}$ 取 $t=1$ 的实部）。
> **结论**：$\lim_{n\to\infty}\mathbb E\cos(X_n)=e^{-1/2}\approx0.607$——分布收敛把"对极限分布算一次期望"变成了求收敛序列期望的捷径。`,

  "kp-14-6": String.raw`## 弱大数定律（$L^2$，定理7.1.1）
设 $\{X_n,n\ge1\}$ 两两不相关，$S_0=0,\ S_n=\sum_{k=1}^n X_k$，若 $\text{Var}(S_n)=o(n^2)$，则
$$
\frac{S_n-\mathbb E S_n}{n}\underset{P}{\overset{L^2}\longrightarrow}0\quad(n\to\infty)
$$

**证明**：
$$
\mathbb E\Big|\frac{S_n-\mathbb E S_n}{n}\Big|^2=\frac{\text{Var}(S_n)}{n^2}\to0\quad(n\to\infty)
$$
故 $\dfrac{S_n-\mathbb E S_n}{n}\overset{L^2}\to0$，进而依概率收敛到 $0$。

**推论**：设 $\{X_n\}$ 两两不相关、方差有界，则上述结论成立。

**例1**：$\{X_n\}$ i.i.d.，$X_n\sim\left(\begin{matrix} 0 & 1 \\ 1-p & p \end{matrix}\right)$，则 $\dfrac{S_n}{n}\overset{L^2}\to p\ (n\to\infty)$。

> 💡 **CS视角**：弱大数定律就是蒙特卡洛的合法性证明：样本均值 $\tfrac{S_n}{n}$ 依概率收敛到期望 $\mathbb E X$。$L^2$ 误差 $=\tfrac{\text{Var}(S_n)}{n^2}$，独立同分布时 $=\tfrac{\sigma^2}{n}$，给出经典的 $O(1/\sqrt n)$ 收敛速率——要把误差减半需四倍样本，这是 MC 估计的根本代价。

> 💡 **CS视角**：条件只需「两两不相关」而非完全独立，对算法设计很友好：很多随机量(如哈希值、分层抽样)只能保证两两不相关，但样本均值依然收敛。证明仅用方差与切比雪夫，是最轻量的收敛保证。

> 📝 **例**：用切比雪夫给出弱大数定律的具体误差估计。掷均匀骰子 $n=100$ 次，$X_k\in\{1,...,6\}$ 等概率，估 $\mathbb P(|\tfrac{S_n}{n}-3.5|\ge0.5)$ 的上界。
> **步骤1**：单次 $\mathbb E X_k=3.5$，$\text{Var}(X_k)=\tfrac{(6^2-1)}{12}=\tfrac{35}{12}\approx2.917$。
> **步骤2**：i.i.d. 故 $\text{Var}(\tfrac{S_n}{n})=\dfrac{\text{Var}(X_k)}{n}=\dfrac{2.917}{100}=0.02917$。
> **步骤3**：切比雪夫 $\mathbb P(|\tfrac{S_n}{n}-3.5|\ge0.5)\le\dfrac{0.02917}{0.5^2}=\dfrac{0.02917}{0.25}\approx0.117$。
> **结论**：样本均值偏离 $3.5$ 超过 $0.5$ 的概率不超过约 $11.7\%$，$n$ 越大上界越小——这就是"大量重复掷骰子样本均值趋于 $3.5$"的定量版本。`,

  "kp-14-7": String.raw`## 强大数定律（a.s.，定理7.1.2）
在弱大数定律推论的条件下（两两不相关、方差有界），
$$
\frac{S_n-\mathbb E S_n}{n}\overset{a.s}\longrightarrow0\quad(n\to\infty)
$$

**证明**：不妨设 $\mathbb E S_n=0$，方差上界为 $M$。先沿平方子列：
$$
\sum_{n=1}^{\infty}\mathbb P\Big(\Big|\frac{S_{n^2}}{n^2}\Big|\ge\epsilon\Big)\le\sum_{n=1}^{\infty}\frac{n^2 M}{\epsilon^2 n^4}=\frac{M}{\epsilon^2}\sum_{n=1}^{\infty}\frac1{n^2}<\infty
$$
故 $\dfrac{S_{n^2}}{n^2}\overset{a.s}\to0$。对任意 $n$ 取 $k_n$ 使 $k_n^2\le n<(k_n+1)^2$，则
$$
\frac{S_n}{n}=\frac{S_{k_n^2}}{k_n^2}\cdot\frac{k_n^2}{n}+\frac{S_n-S_{k_n^2}}{n}=\Delta_1^{(n)}+\Delta_2^{(n)}
$$
因 $\dfrac{S_{k_n^2}}{k_n^2}\overset{a.s}\to0,\ \dfrac{k_n^2}{n}\le1$，故 $\Delta_1^{(n)}\overset{a.s}\to0$。又由 $\mathbb E(S_n-S_{k_n^2})^2=\sum_{i=k_n^2+1}^n\mathbb E X_i^2\le M(2k_n+1)$，
$$
\sum_{n=1}^{\infty}\mathbb P(|\Delta_2^{(n)}|\ge\epsilon)\le\frac{M}{\epsilon^2}\sum_{n=1}^{\infty}\frac{2k_n+1}{n^2}\le\frac{M}{\epsilon^2}\sum_{n=1}^{\infty}\frac{3\sqrt n}{n^2}<\infty
$$
故 $\Delta_2^{(n)}\overset{a.s}\to0$，从而 $\dfrac{S_n}{n}=\Delta_1^{(n)}+\Delta_2^{(n)}\overset{a.s}\to0$。

> 💡 **CS视角**：强大数定律(a.s. 收敛)比弱大数定律(依概率)更强——它保证**几乎每一条样本轨道**最终都收敛到期望，而不只是"偏离的概率趋于零"。蒙特卡洛模拟里这意味着：单次足够长的运行就能逼近真值，无需反复重启取平均。

> 💡 **CS视角**：证明的关键技巧是「沿稀疏子列 $n^2$ 用 Borel-Cantelli 拿到 a.s. 收敛，再用单调性/插值把空隙 $\Delta_2$ 控制住」。$\sum\tfrac1{n^2}<\infty$ 的可和性是 Borel-Cantelli 的入场券，这是把"概率小"升级为"几乎必然"的标准桥梁。

> 📝 **例**：用 Borel-Cantelli 验证子列收敛。$\{X_k\}$ i.i.d.，$\mathbb E X_k=0$，方差 $\le M=1$，沿 $n^2$ 估 $\sum_n\mathbb P(|\tfrac{S_{n^2}}{n^2}|\ge\epsilon)$（取 $\epsilon=0.1$）。
> **步骤1**：切比雪夫 $\mathbb P(|\tfrac{S_{n^2}}{n^2}|\ge\epsilon)\le\dfrac{\text{Var}(S_{n^2})}{\epsilon^2 n^4}\le\dfrac{n^2\cdot1}{\epsilon^2 n^4}=\dfrac{1}{\epsilon^2 n^2}$。
> **步骤2**：求和 $\sum_{n=1}^\infty\dfrac{1}{\epsilon^2 n^2}=\dfrac{1}{\epsilon^2}\cdot\dfrac{\pi^2}{6}=\dfrac{1}{0.01}\cdot1.645\approx164.5<\infty$。
> **步骤3**：级数收敛，由 Borel-Cantelli 第一引理，$\{|\tfrac{S_{n^2}}{n^2}|\ge\epsilon\}$ 仅有限次发生，故 $\tfrac{S_{n^2}}{n^2}\overset{a.s}\to0$。
> **结论**：和可和 $\Rightarrow$ 子列几乎必然收敛，再补空隙即得 $\tfrac{S_n}{n}\overset{a.s}\to0$——a.s. 收敛比依概率更强的代码含义是"长跑一次即可信任结果"。`,

  "kp-14-8": String.raw`## 大数定律的一般定义与放回抽样方差
**定义（推广的大数定律）**：设 $\{X_n\}$ 是一列 r.v，$b_n\uparrow+\infty$，$\{a_n\}$ 是一列实数，$S_n=\sum_{k=1}^n X_k$。若 $\dfrac{S_n-a_n}{b_n}\overset{P}\longrightarrow0\ (n\to\infty)$，则称 $\{X_n\}$ 满足大数定律。（由 $\text{Var}(S_n)=o(a_n^2)$ 即得 $\tfrac{S_n-\mathbb E S_n}{a_n}\overset{L^2}\to0$。）

**例2（放回抽样的覆盖时间方差）**：从 $\{1,...,n\}$ 中放回抽样，$X_m$ 为第 $m$ 次取的数，$X_1,...,X_m$ i.i.d.。记 $\tau_k=\inf\{m\mid |\{x_1,...,x_m\}|=k\}$ 为首次集齐 $k$ 个不同数的时刻，$\tau_0=0$，则 $\tau_n=\sum_{k=1}^n(\tau_k-\tau_{k-1})$。各增量独立，$\tau_k-\tau_{k-1}$ 服从参数 $p=\tfrac{n-(k-1)}{n}$ 的几何分布，故
$$
\text{Var}(\tau_k-\tau_{k-1})=\frac{q}{p^2}=\frac{n^2}{(n+1-k)^2}-\frac{n}{n+1-k}
$$
从而
$$
\text{Var}(\tau_n)=\sum_{k=1}^n\text{Var}(\tau_k-\tau_{k-1})=n^2\sum_{k=1}^n\frac1{k^2}-n\sum_{k=1}^n\frac1k
$$

> 💡 **CS视角**：例2 就是著名的**赠券收集问题**(Coupon Collector)：集齐 $n$ 种赠券需抽多少次。把总时间拆成独立的几何分布增量(收集到第 $k$ 个新券所需时间)，这种"按里程碑分段、段间独立"的分解是分析随机算法运行时间(如随机化覆盖、负载均衡)的标准武器。

> 💡 **CS视角**：期望 $\mathbb E\tau_n=n\sum_{k=1}^n\tfrac1k\approx n\ln n$，方差量级由 $n^2\sum\tfrac1{k^2}\to\tfrac{\pi^2}{6}n^2$ 主导，故 $\tau_n\approx n\ln n\pm O(n)$。这解释了为何"集齐最后几张券"特别慢——尾部 $p=\tfrac1n$ 的几何分布方差 $\sim n^2$ 极大，是缓存命中、哈希填满等场景的常见瓶颈。

> 📝 **例**：赠券收集的期望次数。集齐 $n=3$ 种赠券（放回均匀抽），求期望总抽取次数 $\mathbb E\tau_3$。
> **步骤1**：各增量期望 $\mathbb E(\tau_k-\tau_{k-1})=\tfrac1p=\dfrac{n}{n+1-k}$。
> **步骤2**：$n=3$ 时三段期望分别为 $\dfrac33=1,\ \dfrac32=1.5,\ \dfrac31=3$。
> **步骤3**：相加 $\mathbb E\tau_3=1+1.5+3=5.5=3\big(\tfrac11+\tfrac12+\tfrac13\big)=3\cdot\dfrac{11}{6}$。
> **结论**：集齐 $3$ 种券平均需 $5.5$ 次抽取，且最后一种(概率仅 $\tfrac13$)贡献最大——印证 $\mathbb E\tau_n=n H_n\approx n\ln n$ 的渐近规律。`,

  "kp-15-1": String.raw`## 弱大数定律判据（定理7.1.1）
设 $\{X_n\}$ i.i.d.，则存在常数列 $\{a_n\}$ 使得 $\dfrac{S_n}{n}-a_n\overset{\mathbb P}\to 0$ 的充要条件是
$$
\lim_{x\to\infty} x\,\mathbb P(|X_1|>x)=0
$$
**证明（$\Leftarrow$）**：对 $1\le k\le n$ 作截断 $X_{nk}\triangleq X_k 1_{\{|X_k|\le n\}}$，$\hat S_n=\sum_{k=1}^n X_{nk}$，则 $\{X_{nk}\}$ i.i.d.，且
$$
\frac{1}{n^2}\text{Var}(\hat S_n)\le\frac{1}{n}\mathbb E[X_{n1}^2]=\frac{2}{n}\int_0^n x\,\mathbb P(|X_1|>x)\,dx
$$
由条件知上式 $\to 0$，故 $\dfrac{\hat S_n-\mathbb E[\hat S_n]}{n}\overset{L^2}\to 0$。又
$$
\mathbb P(S_n\neq\hat S_n)\le\sum_{k=1}^n\mathbb P(|X_k|>n)=n\,\mathbb P(|X_1|>n)\to 0
$$
故 $\dfrac{S_n}{n}-\dfrac{\mathbb E[\hat S_n]}{n}\overset{\mathbb P}\to 0$，取 $a_n=\dfrac{\mathbb E[\hat S_n]}{n}=\mathbb E[X_1 1_{\{|X_1|\le n\}}]$。

**推论**：若 $\mathbb E[X_1]<\infty$，则 $\dfrac{S_n}{n}\overset{\mathbb P}\to a=\mathbb E[X_1]$；此时 $a_n=\mathbb E[X_{n1}]\to\mathbb E[X_1]$。

> 💡 **CS视角**：WLLN 是蒙特卡洛估计能用的理论保证——用样本均值 $\tfrac{S_n}{n}$ 逼近真值，依概率收敛意味着 $n$ 大时落在误差带外的概率趋零。判据 $x\mathbb P(|X_1|>x)\to 0$ 是对重尾的限制：尾巴太肥(如 Cauchy 分布)时样本均值不收敛，这也是为什么实践中要警惕重尾数据的"平均值无意义"。

> 💡 **CS视角**：证明里的「截断 $X_k1_{\{|X_k|\le n\}}$」就是工程上的 clipping/winsorize——把极端值砍掉再求统计量，使方差可控；尾部被砍掉的概率 $n\mathbb P(|X_1|>n)\to 0$ 保证截断几乎不改变结果。

> 📝 **例**：用 $n$ 个独立 $U[0,1]$ 样本的均值估计期望 $0.5$，说明 WLLN 给出的保证。
> **步骤1**：$X_i\sim U[0,1]$，$\mathbb E[X_1]=0.5<\infty$，满足推论条件。
> **步骤2**：故 $\tfrac{S_n}{n}\overset{\mathbb P}\to 0.5$，即 $\forall\epsilon>0$，$\mathbb P(|\tfrac{S_n}{n}-0.5|\ge\epsilon)\to 0$。
> **步骤3**：取 $\epsilon=0.01$，则 $n\to\infty$ 时样本均值偏离 $0.5$ 超过 $0.01$ 的概率趋于 $0$。
> **结论**：样本越多，蒙特卡洛估计越可靠——这正是 np.mean(rng.random(n)) 随 $n$ 增大稳定逼近 $0.5$ 的数学依据。`,

  "kp-15-2": String.raw`## Kolmogorov 强大数定律（定理7.3.1）
设 $\{X_n\}$ 相互独立，若
$$
\sum_{n=1}^{\infty}\frac{\text{Var}(X_n)}{n^2}<\infty
$$
则 $\displaystyle\sum_{n=1}^{\infty}\frac{X_n-\mathbb E[X_n]}{n}$ a.s. 收敛。

**Kronecker 引理**：设 $\{x_n\}$ 是一列实数，$\{a_n\}$ 是一列正数，$a_n\uparrow\infty$，若 $\displaystyle\sum_{n=1}^{\infty}\frac{x_n}{a_n}$ 收敛，则
$$
\lim_{n\to\infty}\frac{1}{a_n}\sum_{k=1}^n x_k=0
$$
该引理把"加权级数收敛"转化为"算术平均趋零"，是从级数收敛过渡到 $\dfrac{S_n}{n}\to 0$ 的桥梁。

> 💡 **CS视角**：a.s.（几乎必然）收敛比依概率收敛更强——对应"单条轨迹最终一定收敛"，而非"每个时刻偏离概率小"。在线学习/随机梯度下降的收敛性分析里，正是靠这类强收敛保证算法对几乎每个随机种子都收敛，而不只是平均意义上收敛。

> 💡 **CS视角**：条件 $\sum\text{Var}(X_n)/n^2<\infty$ 允许各项方差缓慢增长（只要慢于 $n^2$），比同分布假设宽松，适用于方差非平稳的随机序列；这与 SGD 里"学习率平方可和"$\sum\eta_n^2<\infty$ 保证收敛的条件形式上同源。

> 📝 **例**：设独立 $X_n$ 满足 $\text{Var}(X_n)=n$，验证 Kolmogorov 条件成立。
> **步骤1**：代入 $\sum_{n=1}^\infty\dfrac{\text{Var}(X_n)}{n^2}=\sum_{n=1}^\infty\dfrac{n}{n^2}=\sum_{n=1}^\infty\dfrac{1}{n}$。
> **步骤2**：这是调和级数，发散，故此例**不**满足条件。改设 $\text{Var}(X_n)=1$。
> **步骤3**：则 $\sum_{n=1}^\infty\dfrac{1}{n^2}=\dfrac{\pi^2}{6}<\infty$，满足条件。
> **结论**：方差有界时 $\sum\tfrac{X_n-\mathbb E[X_n]}{n}$ a.s. 收敛，再由 Kronecker 引理推出 $\tfrac{S_n}{n}\to\tfrac1n\sum\mathbb E[X_k]$——方差增长速度决定强收敛是否成立。`,

  "kp-15-3": String.raw`## i.i.d. 情形强大数定律（定理7.3.3）
设 $\{X_n\}$ i.i.d.，$S_n=\sum_{k=1}^n X_k$，则
$$
\frac{S_n}{n}\overset{a.s.}\to\,某有限常数\,a\iff\mathbb E[X_1]\,有限,\ 此时\ a=\mathbb E[X_1]
$$
**证明（$\Leftarrow$）**：作截断 $\hat X_n\triangleq X_n 1_{\{|X_n|\le n\}}$，由 Fubini 定理
$$
\sum_{n=1}^\infty\frac{\text{Var}(\hat X_n)}{n^2}\le\sum_{k=1}^\infty\Big(\sum_{n=k}^\infty\frac{1}{n^2}\Big)k\,\mathbb E[|X_1|1_{\{k-1\le|X_1|<k\}}]\le 2\mathbb E[|X_1|]<\infty
$$
由定理7.3.1及 Kronecker 引理得 $\dfrac{\hat S_n-\mathbb E[\hat S_n]}{n}\overset{a.s.}\to 0$。又 $\sum_n\mathbb P(X_n\neq\hat X_n)=\sum_n\mathbb P(|X_1|>n)<\infty$，由 Borel-Cantelli 引理知 $X_n\neq\hat X_n$ 仅有限次发生，故 $\dfrac{S_n-\mathbb E[\hat S_n]}{n}\to 0$。再由控制收敛 $\dfrac{\mathbb E[\hat S_n]}{n}\to\mathbb E[X_1]$。

**证明（$\Rightarrow$）**：反证。若 $\mathbb E[|X_1|]=+\infty$，则 $\forall A>0$，$\sum_n\mathbb P(|X_n|\ge nA)=+\infty$。由 Borel 0-1 律 $\{|X_n|\ge nA\}$ 发生无穷多次，从而 $\varlimsup_n\dfrac{|S_n|}{n}\ge\dfrac{A}{2}$，由 $A$ 任意性得 $\varlimsup_n\dfrac{|S_n|}{n}=+\infty$，矛盾。

> 💡 **CS视角**：这是 SLLN 最实用的形式——只要期望存在(一阶矩有限)，样本均值就几乎必然收敛到真期望。它是经验风险最小化(ERM)的根基：经验风险 $\tfrac1n\sum L(f,X_i)$ a.s. 收敛到真实风险 $\mathbb E[L(f,X)]$，所以在大数据上最小化经验风险才有意义。

> 💡 **CS视角**：充要性意味着「均值不收敛」与「期望不存在」等价——重尾分布(如 $\alpha\le 1$ 的幂律)样本均值会随 $n$ 漂移不定，这就是为什么对点击/收入这类重尾指标常用中位数或截断均值，而非朴素平均。

> 📝 **例**：掷均匀骰子 $n$ 次，说明平均点数 a.s. 收敛到 $3.5$。
> **步骤1**：单次点数 $X_1$ 取 $1\sim 6$ 各 $\tfrac16$，$\mathbb E[X_1]=\tfrac{1+2+\cdots+6}{6}=\tfrac{21}{6}=3.5$，有限。
> **步骤2**：由定理7.3.3，$\tfrac{S_n}{n}\overset{a.s.}\to\mathbb E[X_1]=3.5$。
> **步骤3**：即对几乎每条投掷轨迹，平均点数最终都收敛到 $3.5$（不只是概率意义上）。
> **结论**：模拟掷骰子时 np.mean(rolls) 随次数增加几乎必然稳定在 $3.5$——一阶矩有限保证强收敛。`,

  "kp-15-4": String.raw`## 特征函数的定义与性质
设 $X$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上的一维 r.v，定义其**特征函数**为
$$
\varphi_X(t)=\mathbb E[e^{itX}]=\int_{\mathbb R}e^{itx}\,\mu(dx)=\mathbb E[\cos(tX)]+i\,\mathbb E[\sin(tX)]\quad(t\in\mathbb R)
$$
特征函数有如下性质：
$$
\begin{aligned}
&(1)\ |\varphi(t)|\le 1=\varphi(0) \\
&(2)\ \varphi\,在\,\mathbb R\,上一致连续 \\
&(3)\ 若\,X\perp Y,\ \varphi_{X+Y}(t)=\varphi_X(t)\varphi_Y(t) \\
&(4)\ \varphi_{aX+b}(t)=e^{ibt}\varphi_X(at) \\
&(5)\ 若\,\mathbb E[|X|^n]<\infty,\ \forall k\le n,\ \varphi^{(k)}(t)=i^k\mathbb E[X^k e^{itX}],\ \varphi^{(k)}(0)=i^k\mathbb E[X^k]
\end{aligned}
$$
特别地有 Taylor 展开
$$
\varphi(t)=1+i\mathbb E[X]t-\frac{\mathbb E[X^2]}{2}t^2+\cdots+\frac{i^n\mathbb E[X^n]}{n!}t^n+o(t^n)
$$
**(2)证**：$\sup_t|\varphi(t+h)-\varphi(t)|\le\sup_t\mathbb E|e^{ihX}-1|\overset{h\to 0}\to 0$，与 $t$ 无关故一致。

> 💡 **CS视角**：特征函数就是概率密度的**傅里叶变换**（符号约定上少个负号）。性质(3)「独立和的特征函数 = 各自特征函数之积」正对应「卷积 ↔ 频域相乘」：求两独立变量之和的分布，在频域里只需相乘，比直接做密度卷积积分省事——这是信号处理与概率论共享的核心技巧。

> 💡 **CS视角**：性质(5)说"求导取值 = 矩"，即 $\varphi$ 在 $0$ 处的 Taylor 系数编码了各阶矩 $\mathbb E[X^k]$。这等价于"矩生成 = 频域展开"，FFT 算特征函数后差分就能数值估计矩，是分布拟合与特征工程里的实用手段。

> 📝 **例**：用性质(3)(4)求两独立 $\mathcal N(0,1)$ 之和 $X+Y$ 的特征函数。
> **步骤1**：标准正态特征函数 $\varphi_X(t)=\varphi_Y(t)=e^{-t^2/2}$。
> **步骤2**：由 $X\perp Y$ 及性质(3)，$\varphi_{X+Y}(t)=\varphi_X(t)\varphi_Y(t)=e^{-t^2/2}\cdot e^{-t^2/2}=e^{-t^2}$。
> **步骤3**：将 $e^{-t^2}$ 写成 $e^{-\frac{2\cdot t^2}{2}}$，对照 $\mathcal N(0,\sigma^2)$ 的 $e^{-\sigma^2 t^2/2}$，得 $\sigma^2=2$。
> **结论**：$X+Y\sim\mathcal N(0,2)$——频域相乘自动给出"独立正态和仍是正态，方差相加"，无需做卷积积分。`,

  "kp-15-5": String.raw`## 常见分布的特征函数
$$
\begin{aligned}
&(1)\ 0\text{-}1\,分布:\ \varphi_X(t)=pe^{it}+q\ (q=1-p) \\
&(2)\ 二项分布\,b(n,p):\ \varphi_X(t)=(pe^{it}+q)^n \\
&(3)\ \text{Poisson}\,分布\,P(\lambda):\ \varphi_X(t)=e^{\lambda(e^{it}-1)} \\
&(4)\ X\sim\mathcal N(\mu,\sigma^2):\ \varphi_X(t)=e^{i\mu t-\frac{\sigma^2 t^2}{2}}
\end{aligned}
$$
**(4)证**：先算标准正态 $\varphi(t)=\dfrac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty e^{-\frac{x^2}{2}}\cos(tx)\,dx$。对 $t$ 求导并分部积分得
$$
\varphi'(t)=-\frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty t\cos(tx)e^{-\frac{x^2}{2}}\,dx=-t\,\varphi(t)
$$
解微分方程 $\dfrac{d\varphi}{\varphi}=-t\,dt$，结合 $\varphi(0)=1$ 得 $\varphi(t)=e^{-\frac{t^2}{2}}$。一般地令 $Y=\dfrac{X-\mu}{\sigma}\sim\mathcal N(0,1)$，则
$$
\varphi_X(t)=\varphi_{\sigma Y+\mu}(t)=e^{i\mu t}\varphi_Y(\sigma t)=e^{i\mu t-\frac{\sigma^2 t^2}{2}}
$$

> 💡 **CS视角**：高斯的特征函数 $e^{-t^2/2}$ 仍是高斯型——它是傅里叶变换的不动点，这也是高斯在信号、扩散模型(DDPM 前向加噪)、卡尔曼滤波中无处不在的深层原因：高斯经过线性变换、卷积、傅里叶变换后都还是高斯，运算封闭。

> 💡 **CS视角**：二项 $\varphi=(pe^{it}+q)^n$ 是 $0$-$1$ 分布特征函数的 $n$ 次方，正对应"$n$ 个独立伯努利之和 = 频域相乘 $n$ 次"；Poisson 的 $e^{\lambda(e^{it}-1)}$ 可由二项取 $n\to\infty,np\to\lambda$ 的极限得到，这就是泊松作为稀有事件计数模型(限流、到达流)的来历。

> 📝 **例**：计算标准正态 $X\sim\mathcal N(0,1)$ 的特征函数取值 $\varphi(0)$ 与一般 $\varphi(t)$。
> **步骤1**：套用结论(4)中 $\mu=0,\sigma^2=1$，得 $\varphi_X(t)=e^{i\cdot 0\cdot t-\frac{1\cdot t^2}{2}}=e^{-t^2/2}$。
> **步骤2**：验证归一化：$\varphi(0)=e^{0}=1$，与性质 $|\varphi(t)|\le 1=\varphi(0)$ 一致。
> **步骤3**：取 $t=1$，$\varphi(1)=e^{-1/2}\approx 0.607$，为实数（因密度关于 $0$ 对称，虚部为 $0$）。
> **结论**：标准正态特征函数为 $e^{-t^2/2}$，是个实偶函数——对称分布的特征函数恒为实，编程中可省去虚部计算。`,

  "kp-15-6": String.raw`## 连续性定理与唯一性定理
**定理8.1.1（连续性定理）**：分布函数与特征函数相互唯一决定。

**定理8.1.2（唯一性定理）**：若 $\{X,X_n,n\ge 1\}$ 的特征函数为 $\{\varphi,\varphi_n,n\ge 1\}$，则
$$
X_n\overset{d}\to X\iff\varphi_n\to\varphi
$$
即依分布收敛等价于特征函数逐点收敛。这两条定理把"分布层面的收敛/相等"翻译为"特征函数层面的收敛/相等"，是用特征函数证明 CLT 等极限定理的核心工具。

> 💡 **CS视角**：唯一性定理是"频域决定时域"在概率论里的版本——两个分布若特征函数处处相等则分布相同。证明分布收敛(如 CLT)时，直接比对密度往往不可行，转而证特征函数逐点收敛，问题立刻变成初等的极限计算，这正是后面 CLT 证明的钥匙。

> 💡 **CS视角**：实践中可由经验特征函数 $\hat\varphi(t)=\tfrac1n\sum_j e^{itX_j}$ 做分布检验或拟合（特征函数估计法），因为它对重尾比矩更稳健——只要两组数据的经验特征函数曲线吻合，就可判定同分布。

> 📝 **例**：用唯一性定理说明：若 $\varphi_n(t)\to e^{-t^2/2}$，则 $X_n\overset{d}\to\mathcal N(0,1)$。
> **步骤1**：极限函数 $e^{-t^2/2}$ 是 $\mathcal N(0,1)$ 的特征函数（见常见分布表）。
> **步骤2**：唯一性定理给出"特征函数逐点收敛 $\Rightarrow$ 依分布收敛"。
> **步骤3**：故由 $\varphi_n\to e^{-t^2/2}$ 直接得 $X_n\overset{d}\to\mathcal N(0,1)$。
> **结论**：只需验证特征函数极限，就能断定分布极限——这把 CLT 的证明简化为一道求极限题。`,

  "kp-15-7": String.raw`## 多元特征函数与多维 Gauss 分布
$\vec X=(X_1,...,X_n)^T$ 是 $n$ 维 r.v，定义其特征函数为
$$
\varphi(t_1,...,t_n)=\mathbb E[e^{i\vec t^T\vec X}]=\int_{\mathbb R^n}e^{i\sum_{j=1}^n t_j x_j}\,\mu(dx_1\cdots dx_n),\quad\vec t=(t_1,...,t_n)^T
$$
并有 $\dfrac{\partial^{k_1+\cdots+k_n}\varphi(0)}{\partial t_1^{k_1}\cdots\partial t_n^{k_n}}=i^{k_1+\cdots+k_n}\mathbb E[X_1^{k_1}\cdots X_n^{k_n}]$。

**多维 Gauss 分布**：称 $\vec X$ 服从 $n$ 维 Gauss 分布，若其特征函数形如
$$
\varphi(t_1,...,t_n)=e^{i\vec a^T\vec t-\frac{1}{2}\vec t^T\Sigma\vec t}
$$
其中 $\vec a$ 是常数向量，$\Sigma$ 是 $n$ 维半正定阵；若 $|\Sigma|>0$ 则称 $\vec X$ 服从 $n$ 维正态分布。求偏导可得 $\vec a=(\mathbb E[X_1],...,\mathbb E[X_n])^T$，$\Sigma=(\text{Cov}(X_i,X_j))$。

**性质（定理8.1.3~8.1.5）**：(i) 线性变换仍是 Gauss：$A\vec X+\vec b\sim\mathcal N(A\vec a+\vec b,A\Sigma A^T)$；(ii) 对 Gauss 向量，子向量独立 $\iff\Sigma_{12}=\Sigma_{21}=0$（不相关即独立）；(iii) $\vec X$ 服从 Gauss $\iff\forall\lambda_1,...,\lambda_n$，$\sum_j\lambda_j X_j$ 服从一维 Gauss。

> 💡 **CS视角**：多维高斯由均值向量 $\vec a$ 与协方差矩阵 $\Sigma$ 完全决定，这正是高斯过程、变分自编码器(VAE)隐空间、卡尔曼滤波状态的标准参数化。性质(i)「线性变换仍高斯」让前向传播、状态转移都保持高斯，闭式可算，是这些模型可微可解析的根本。

> 💡 **CS视角**：性质(ii)「不相关 $\Rightarrow$ 独立」是高斯独有的——对协方差矩阵做对角化(PCA/白化)后各主成分既不相关又独立，于是可独立处理每一维；性质(iii)「任意线性组合都是一维高斯」给出了用随机投影检验高斯性、以及生成相关高斯样本($\Sigma=LL^T$ 的 Cholesky 分解)的方法。

> 📝 **例**：设 $\vec X\sim\mathcal N(\vec 0,I_2)$，求线性变换 $\vec Y=A\vec X$ 的分布，其中 $A=\begin{pmatrix}1&0\\1&1\end{pmatrix}$。
> **步骤1**：由性质(i)，$\vec Y\sim\mathcal N(A\vec 0,\,A I_2 A^T)=\mathcal N(\vec 0,\,AA^T)$。
> **步骤2**：计算 $AA^T=\begin{pmatrix}1&0\\1&1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}=\begin{pmatrix}1&1\\1&2\end{pmatrix}$。
> **步骤3**：故 $\vec Y\sim\mathcal N\!\Big(\vec 0,\begin{pmatrix}1&1\\1&2\end{pmatrix}\Big)$，协方差非对角说明 $Y_1,Y_2$ 相关。
> **结论**：白噪声经线性变换得到相关高斯——这正是 Cholesky 采样 $\vec Y=L\vec Z$ 生成指定协方差高斯样本的原理。`,

  "kp-15-8": String.raw`## 中心极限定理（定理8.2.1）
设 $\{X_n\}$ i.i.d.，$a=\mathbb E[X_1]$，$0<\sigma^2=\text{Var}(X_1)<\infty$，则
$$
R_n=\frac{S_n-na}{\sigma\sqrt n}\overset{d}\to\mathcal N(0,1)
$$
**证明**：用特征函数。设 $X_1-a$ 的特征函数为 $\psi$，由性质有 $\psi(s)=1-\tfrac12\sigma^2 s^2+o(s^2)$，于是
$$
\varphi_{R_n}(t)=\Big(\psi\big(\tfrac{t}{\sigma\sqrt n}\big)\Big)^n=\Big(1-\frac{t^2}{2n}+o\big(\tfrac{t^2}{n}\big)\Big)^n\to e^{-\frac{t^2}{2}}
$$
极限正是 $\mathcal N(0,1)$ 的特征函数，由唯一性定理得 $R_n\overset{d}\to\mathcal N(0,1)$。

> 💡 **CS视角**：CLT 解释了"为什么高斯无处不在"——大量独立微小扰动求和后，标准化结果总趋于正态，与单项分布无关。测量误差、网络延迟抖动、特征噪声常被建模为高斯，正源于此；它也是 A/B 实验用正态近似算置信区间、$p$ 值的理论基础。

> 💡 **CS视角**：证明的关键 $(1-\tfrac{t^2}{2n}+o(\cdot))^n\to e^{-t^2/2}$ 就是数值上的 $(1+\tfrac{x}{n})^n\to e^x$，二阶 Taylor 项决定极限——这说明只有一、二阶矩(均值、方差)进入极限，高阶细节被"洗掉"，故 $\tfrac{S_n-na}{\sigma\sqrt n}$ 的收敛速度是 $O(1/\sqrt n)$，与蒙特卡洛误差同阶。

> 📝 **例**：用 CLT 近似二项分布 $X\sim b(100,0.5)$ 落在 $[40,60]$ 的概率。
> **步骤1**：$X$ 可看成 $100$ 个独立 $0$-$1$ 变量之和，$na=100\times0.5=50$，$\text{Var}=npq=100\times0.25=25$，$\sigma\sqrt n=\sqrt{25}=5$。
> **步骤2**：标准化 $R=\dfrac{X-50}{5}$，由 CLT 近似 $\mathcal N(0,1)$；$[40,60]$ 对应 $R\in[-2,2]$。
> **步骤3**：$\mathbb P(-2\le R\le 2)\approx\Phi(2)-\Phi(-2)\approx 0.977-0.023=0.954$。
> **结论**：$\mathbb P(40\le X\le 60)\approx 0.95$——大 $n$ 二项可用正态近似，这正是统计里"$\pm 2\sigma$ 约含 $95\%$"经验法则的来源。`,

  "kp-15-9": String.raw`## Lindeberg-Feller 与 Lyapunov 定理
**定理8.2.2（Lindeberg-Feller）**：记 $B_n^2=\sum_{j=1}^n\sigma_j^2=\text{Var}(S_n)$，$R_n=\sum_{i=1}^n\dfrac{X_i-a_i}{B_n}$，则
$$
R_n\overset{d}\to\mathcal N(0,1)\ 且\ \lim_{n\to\infty}\max_{1\le j\le n}\frac{\sigma_j^2}{B_n^2}=0\iff\forall\epsilon>0,\ \lim_{n\to\infty}\frac{1}{B_n^2}\sum_{k=1}^n\mathbb E[|X_k-a_k|^2 1_{\{|X_k-a_k|\ge\epsilon B_n\}}]=0
$$
右端即 **Lindeberg 条件**：去掉每项超出 $\epsilon B_n$ 的尾部贡献后总方差占比趋零，保证没有单项主导。证明思路是用引理 $\big|\prod z_k-\prod w_k\big|\le\sum|z_k-w_k|$（$|z_k|,|w_k|\le 1$）将乘积特征函数 $\prod\varphi_{Y_i}$ 与 $e^{\sum(\varphi_{Y_i}-1)}$ 比较。

**定理8.2.3（Lyapunov）**：Lindeberg 条件不易验证，若 $\exists\delta>0$ 使得
$$
\frac{1}{B_n^{2+\delta}}\sum_{k=1}^n\mathbb E[|X_k-a_k|^{2+\delta}]\to 0\quad(n\to\infty)
$$
则 CLT 成立。这是一个更易验证的充分条件。

> 💡 **CS视角**：Lindeberg 条件本质是"无单点主导"——只要没有哪一项的方差盖过其余项之和，独立但不同分布的求和仍趋于正态。这解释了为什么把许多异质特征(不同分布、不同量纲)线性叠加后结果仍近似高斯，前提是先做标准化/归一化让各项尺度可比，避免某维主导。

> 💡 **CS视角**：$\max_j\sigma_j^2/B_n^2\to 0$ 是"渐进可忽略"条件，对应分布式聚合里"单机贡献占比趋零总体才稳定"；Lyapunov 的 $(2+\delta)$ 阶矩条件更易在工程中校验(算个高阶矩即可)，是判断异质数据求和能否用正态近似的实用判据。

> 📝 **例**：独立 $X_k$ 取 $\pm k$ 各 $\tfrac12$（方差 $\sigma_k^2=k^2$），用 Lyapunov（$\delta=2$）判断 CLT 是否成立。
> **步骤1**：$B_n^2=\sum_{k=1}^n k^2\approx\dfrac{n^3}{3}$，故 $B_n^{2+\delta}=B_n^4\approx\dfrac{n^6}{9}$。
> **步骤2**：$\mathbb E[|X_k|^{4}]=k^4$，故 $\sum_{k=1}^n\mathbb E[|X_k|^4]=\sum k^4\approx\dfrac{n^5}{5}$。
> **步骤3**：比值 $\dfrac{n^5/5}{n^6/9}=\dfrac{9}{5n}\to 0$，Lyapunov 条件满足。
> **结论**：标准化和 $R_n\overset{d}\to\mathcal N(0,1)$——尽管各项方差递增，但无单项主导（$\sigma_n^2/B_n^2\approx 3/n\to 0$），CLT 仍成立。`,

};
