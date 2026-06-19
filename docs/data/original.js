// 原版(最严格)内容，与 md文件 保持一致。使用 String.raw 保留 LaTeX 反斜杠。
window.V_original = {
  "kp-1-1": String.raw`## 半（集）代数
若子集类 $\mathscr S$ 满足：
$$
\begin{aligned}
&(1)\ \Omega \in \mathscr S,\ \varnothing \in \mathscr S \\
&(2)\ A,B \in \mathscr S \Rightarrow AB\in \mathscr S \\
&(3)\ A, A_1 \in \mathscr S\ 且\ A_1 \subset A \Rightarrow \exists A_2,...,A_n \in \mathscr S\ 两两不交,\ A- A_1=\bigcup_{i=2}^n A_i
\end{aligned}
$$
则称 $\mathscr S$ 为半（集）代数。关键在第(3)条：大集合减去其中一个小集合后，差集可被有限个不交的成员"拼出来"。`,

  "kp-1-2": String.raw`## （集）代数
若子集类 $\mathscr A$ 满足：
$$
\begin{aligned}
&(1)\ \Omega \in \mathscr A \\
&(2)\ A \in \mathscr A \Rightarrow A^C\in \mathscr A \\
&(3)\ A, B \in \mathscr A\Rightarrow AB \in \mathscr A
\end{aligned}
$$
则称 $\mathscr A$ 为（集）代数。代数对**补、有限交、有限并**封闭，是比半代数更强的结构。`,

  "kp-1-3": String.raw`## $\sigma$代数（$\sigma$域）
若子集类 $\mathscr F$ 满足：
$$
\begin{aligned}
&(1)\ \Omega \in \mathscr F \\
&(2)\ A \in \mathscr F\Rightarrow A^C\in \mathscr F \\
&(3)\ A_n \in \mathscr F,\ n\ge1\Rightarrow \bigcup_{n=1}^{\infty} A_n \in \mathscr F
\end{aligned}
$$
则称 $\mathscr F$ 为一 $\sigma$代数。与代数的唯一区别：第(3)条把"有限并"加强到"**可列并**"。$(\Omega,\mathscr F)$ 称为可测空间，$\mathscr F$ 即事件域。`,

  "kp-1-4": String.raw`## 生成 $\sigma$ 代数（命题1）
设 $\mathcal C$ 是任意子集类，则存在唯一的包含 $\mathcal C$ 的**最小** $\sigma$ 代数 $\sigma(\mathcal C)$，称为 $\mathcal C$ 生成的 $\sigma$ 代数。
$$
\sigma(\mathcal C) = \bigcap_{\mathcal F'\,为\sigma代数,\ \mathcal C \subset \mathcal F'}\mathcal F'
$$
满足条件的 $\sigma$ 代数存在（因 $\mathcal C \subset 2^{\Omega}$，而 $2^\Omega$ 本身是 $\sigma$ 代数），且任意多个 $\sigma$ 代数的交仍是 $\sigma$ 代数，故定义合理。`,

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
$\pi$ 系 + $\lambda$ 系 $\Rightarrow$ $\sigma$ 代数。这是单调类定理的基石。`,

  "kp-1-6": String.raw`## 单调类
若子集类 $\mathscr M$ 满足：
$$
\begin{aligned}
&(1)\ A_n\in \mathscr M,\ A_n \uparrow \Rightarrow \bigcup_{n=1}^{\infty}A_n\in \mathscr M\ (对不降列的并封闭)\\
&(2)\ A_n\in \mathscr M,\ A_n \downarrow \Rightarrow \bigcap_{n=1}^{\infty}A_n\in \mathscr M\ (对不升列的交封闭)
\end{aligned}
$$
则称 $\mathscr M$ 为单调类。`,

  "kp-1-7": String.raw`## 定理1.1.1（$\lambda$-$\pi$ 系方法）
$$
\Lambda\,是\lambda系,\ \Pi\,是\pi系,\ 若\ \Pi \subset \Lambda,\ 那么\ \sigma(\Pi)\subset \Lambda
$$
**证明思路**：记 $\lambda(\Pi)$ 为包含 $\Pi$ 的最小 $\lambda$ 系。只需证 $\lambda(\Pi)=\sigma(\Pi)$。因 $\sigma$ 代数必是 $\lambda$ 系，故 $\lambda(\Pi)\subset\sigma(\Pi)$；反向只需证 $\lambda(\Pi)$ 为 $\sigma$ 代数，即证其对有限交封闭。固定 $A$，构造
$$
\Pi_A=\{B\in\lambda(\Pi):AB\in\lambda(\Pi)\}
$$
逐条验证 $\Pi_A$ 是 $\lambda$ 系，再由最小性得 $\Pi_A=\lambda(\Pi)$，从而交封闭成立。`,

  "kp-1-8": String.raw`## 定理1.1.2（单调类定理·代数版）
$$
\mathscr M\,为单调类,\ \mathscr A\,为代数,\ 若\ \mathscr A\subset \mathscr M,\ 则\ \sigma(\mathscr A)\subset \mathscr M
$$
**证明（习题1）**：记 $M(\mathscr A)$ 为包含 $\mathscr A$ 的最小单调类，证 $M(\mathscr A)=\sigma(\mathscr A)$。关键构造
$$
S_A =\{B: B,\,A-B,\,B-A \in M(\mathscr A)\}
$$
证明 $S_A$ 为单调类、对 $A\in\mathscr A$ 及 $A\in M(\mathscr A)$ 均有 $S_A=M(\mathscr A)$，得 $M(\mathscr A)$ 对差/补封闭，进而为代数，最终由 $B_n=\bigcup_{i\le n}A_i\uparrow$ 得可列并封闭。`,

  "kp-2-1": String.raw`## 可测空间与概率测度
$(\Omega,\mathcal F)$ 称为可测空间。设 $\mathbb P$ 是 $\mathcal F$ 上的集合函数，若
$$
\begin{aligned}
&(1)\ \mathbb P(A)\ge 0,\ \forall A \in \mathcal F \\
&(2)\ \mathbb P(\Omega)=1 \\
&(3)\ A_n \in \mathcal F\,互不相交\Rightarrow \mathbb P\Big(\bigcup_{n=1}^{\infty} A_n\Big)=\sum_{n=1}^{\infty} \mathbb P(A_n)
\end{aligned}
$$
则称 $\mathbb P$ 为概率测度，$(\Omega,\mathcal F,\mathbb P)$ 为概率空间。第(3)条即**可列可加性**。`,

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
其中连续性（上/下连续）是可列可加性的等价刻画之一。`,

  "kp-2-3": String.raw`## 测度扩张定理（定理1.3.1）
$$
设\ \mathscr S\ 是半集代数,\ \mathbb P\ 是\ \mathscr S\ 上的概率测度,\ 则\ \mathbb P\ 可唯一地扩张成\ \sigma(\mathscr S)\ 上的概率测度。
$$
意义：只要在一个"生成元"半代数上合理地定义了概率，它就自动、且唯一地确定了整个 $\sigma$ 代数上的概率。证明较复杂（见课本60页），通常用外测度 + Carathéodory 方法。`,

  "kp-2-4": String.raw`## $\mathbb R^d$ 上的分布函数与 L-S 测度
以 $d=1$ 为例，$F$ 为 $\mathbb R$ 上分布函数，取
$$
\mathscr S =\{(a,b],(-\infty ,b],(a, +\infty),\mathbb R\}
$$
为半代数，且 $\sigma(\mathscr S)=\sigma(\text{开集})=\mathcal B$（Borel 集）。定义
$$
\mathbb P((a, b]) = F(b) - F(a),\quad \mathbb P((-\infty, b]) = F(b),\quad \mathbb P((a, +\infty)) = 1-F(a)
$$
由扩张定理唯一扩张到 $\mathcal B$，称为 $F$ 决定的 **L-S 测度**；当 $F(x)=x$ 时即 Lebesgue 测度。$d>1$ 需附加"四边形条件"保证非负。`,

  "kp-2-5": String.raw`## 随机变量的定义
设 $(\Omega,\mathcal F,\mathbb P)$ 为概率空间，$X:\Omega\to\mathbb R^d$，若
$$
\forall B \in \mathcal B^d,\ \{X\in B\}=\{w:X(w)\in B\}\in\mathcal F
$$
则称 $X$ 为（实）随机变量（可测映射）。等价地 $X^{-1}(\mathcal B^d)\subset\mathcal F$。一般地，取值于可测空间 $(E,\mathcal E)$ 的可测映射称为**随机元**。`,

  "kp-2-6": String.raw`## 随机变量的判定（定理2.1.1）
$$
X\,是一维实随机变量\iff \{X\le a\}\in\mathcal F,\ \forall a \iff \{X<a\}\in\mathcal F \iff \{X\ge a\}\in\mathcal F \iff \{X>a\}\in\mathcal F
$$
**证明（第一个等价）**：$\Rightarrow$ 取 $B=(-\infty,a]$。$\Leftarrow$ 令 $\Pi=\{B\in\mathcal B:X^{-1}(B)\in\mathcal F\}$，验证半代数 $C=\{(a,b]\}\subset\Pi$、$C$ 为 $\pi$ 系、$\Pi$ 为 $\lambda$ 系，由 $\lambda$-$\pi$ 方法得 $\Pi\supset\sigma(C)=\mathcal B$。`,

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
故可测当且仅当 $A^C\in\mathcal F$，即 $A\in\mathcal F$。`,

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
其中 $X+Y$ 可测的证明用有理数稠密性：$\{X+Y<z\}=\bigcup_i\{X<r_i\}\cap\{Y<z-r_i\}$。`,

  "kp-3-1": String.raw`## 简单随机变量与初等随机变量
设 $(\Omega,\mathcal F,\mathbb P)$ 为概率空间。形如
$$
X =\sum_{i=1}^n a_i 1_{A_i},\quad A_i \in \mathcal F,\ \bigsqcup_{i=1}^n A_i =\Omega
$$
的 $X$ 为**简单随机变量**（有限个取值）；将 $n$ 换成 $\infty$ 即
$$
X =\sum_{i=1}^\infty a_i 1_{A_i}
$$
为**初等随机变量**（可列个取值）。它们是构造一般随机变量与积分的基石。`,

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
可证 $X_n\uparrow$ 且 $|X_n-X|<2^{-n}$（当 $X<\infty$）。一般情形用 $X=X^+-X^-$ 分解。`,

  "kp-3-3": String.raw`## $\sigma(X)$ 可测性（定理2.2.2，Doob-Dynkin）
$$
设\ \sigma(X)=X^{-1}(\mathcal B^d),\ Y:\Omega\to\mathbb R,\ 则\ Y\,关于\,\sigma(X)\,可测\iff \exists\,可测\,g,\ Y=g(X)
$$
即 "$Y$ 由 $X$ 决定" 等价于 "$Y$ 是 $X$ 的某个 Borel 函数"。
**思路**：先对示性函数 $Y=1_A$（$A=X^{-1}(B)$）有 $1_A=1_B\circ X$；再推广到简单函数；最后由定理2.2.1 取极限至一般 $Y$。`,

  "kp-3-4": String.raw`## 随机变量的概率分布
设 $X$ 取值于 $(\mathbb R^d,\mathcal B^d)$，定义
$$
\mu_X(B) = \mathbb P(X\in B),\quad B\in\mathcal B^d
$$
则 $\mu_X$ 是 $(\mathbb R^d,\mathcal B^d)$ 上的概率测度，称为 $X$（在 $\mathbb P$ 下）的**概率分布**。它是 $\mathbb P$ 沿 $X$ 的 pushforward（像测度）。`,

  "kp-3-5": String.raw`## 分布函数
$$
F(x_1,...,x_d)=\mu_X\big((-\infty,x_1]\times\cdots\times(-\infty,x_d]\big)=\mathbb P(X_1\le x_1,...,X_d\le x_d)
$$
分布函数 $F$ 与分布 $\mu_X$ 一一对应（经 L-S 测度），是描述随机变量的常用工具。`,

  "kp-3-6": String.raw`## 分布的存在性（定理2.3.1）
$$
任意\,\mathbb R^d\,上概率测度\,\mu,\ 一定存在r.v\,使其分布为\,\mu
$$
**证明（典则构造）**：取 $(\Omega,\mathcal F,\mathbb P)=(\mathbb R^d,\mathcal B^d,\mu)$，定义 $X(w)=w$。则
$$
X^{-1}(B)=B\in\mathcal B^d=\mathcal F\ (可测),\qquad \mu_X(B)=\mathbb P(X\in B)=\mu(B)
$$
故 $X$ 的分布恰为 $\mu$。等价地：任意分布函数 $F$ 都有 r.v 以其为分布函数。`,

  "kp-3-7": String.raw`## 例：二项分布 $b(n,p)$ 的构造
**构造一**：取 $\Omega=\{0,1,...,n\}$，$\mathcal F=2^\Omega$，
$$
\mu(\{k\})=C_n^k p^k(1-p)^{n-k},\qquad X(w)=w
$$
**构造二**（更本质）：取 $\Omega=\{0,1\}^n$，对 $w=(w_1,...,w_n)$，
$$
\mathbb P(\{w\})=p^k(1-p)^{n-k}\ (k=\#\{i:w_i=1\}),\qquad X(w)=\#\{i:w_i=1\}
$$
则 $\mathbb P(X=k)=C_n^k p^k(1-p)^{n-k}$。构造二把二项分布还原为 $n$ 次独立伯努利试验。`,

  "kp-4-1": String.raw`## 事件类的独立性
设 $\mathcal C_1,...,\mathcal C_n$ 是 $n$ 个事件类，称它们**相互独立**，若
$$
\forall A_{i_j}\in\mathcal C_{i_j},\ 1\le i_1<\cdots<i_k\le n,\quad \mathbb P(A_{i_1}\cdots A_{i_k})=\mathbb P(A_{i_1})\cdots\mathbb P(A_{i_k})
$$
即从中任取有限个类、各取一个事件，其交事件的概率等于各自概率之积。`,

  "kp-4-2": String.raw`## 随机变量的独立性
设 $X_1,...,X_n$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上取值于 $\mathbb R^d$ 的随机变量（向量），若 $\forall B_1,...,B_n\in\mathcal B^d$，
$$
\mathbb P(X_1\in B_1,...,X_n\in B_n)=\mathbb P(X_1\in B_1)\cdots\mathbb P(X_n\in B_n)
$$
则称 $X_1,...,X_n$ **相互独立**。`,

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
验证 $\Lambda$ 为 $\lambda$ 系（含 $\mathbb R$、对真差封闭、对不降列并封闭），且 $\mathcal C\subset\Lambda$，由 $\lambda$-$\pi$ 方法得 $\Lambda=\mathcal B$。再固定 $B_2$，对 $B_1$ 同样构造 $\Lambda^*$ 并验证，得对任意 $B_1,B_2\in\mathcal B$ 成立。`,

  "kp-4-4": String.raw`## 独立性的密度刻画（命题）
若 $(X_1,...,X_n)$ 有联合概率密度 $p(x_1,...,x_n)$，则
$$
X_1,...,X_n\,相互独立 \iff p(x_1,...,x_n)=\prod_{i=1}^n p_i(x_i)\ (对几乎所有\,(x_1,...,x_n))
$$
此时
$$
\int_{-\infty}^{x_1}\!\!\cdots\!\int_{-\infty}^{x_n} p(y_1,...,y_n)\,dy_1\cdots dy_n=F(x_1,...,x_n)=\prod_{i=1}^n F_i(x_i)=\prod_{i=1}^n\int_{-\infty}^{x_i}p_i(y_i)\,dy_i
$$
即联合密度可分离为各边缘密度之积。`,

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
**唯一性**：若 $X=\sum a_i1_{A_i}=\sum b_j1_{B_j}$，则在 $\Omega=\bigcup A_i=\bigcup B_j$ 上交叉细分得 $X=\sum_{i,j}a_i1_{A_iB_j}=\sum_{i,j}b_j1_{A_iB_j}$。当 $\mathbb P(A_iB_j)>0$ 时必有 $a_i=b_j$，故 $\mathbb E[X]$ 与表示无关。`,

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
$$`,

  "kp-4-7": String.raw`## Levi 定理（定理3.1.1）
$$
\{X_n\}\,非负r.v,\ X_n\uparrow X\ \Rightarrow\ \mathbb E[X_n]\uparrow\mathbb E[X]
$$
即非负随机变量单调上升时，期望与极限可交换。

**推论**：非负 r.v $X,Y$ 满足 $\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y]$。

**证明**：取非负简单 $X_n\uparrow X,\ Y_n\uparrow Y$，则 $X_n+Y_n\uparrow X+Y$。由基本性质 $\mathbb E[X_n+Y_n]=\mathbb E[X_n]+\mathbb E[Y_n]$，两边令 $n\to\infty$ 并用 Levi 定理即得。`,

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

**(7)证**：由 $\mathbb E[(t|X|+|Y|)^2]\ge0$ 对一切 $t$ 成立，关于 $t$ 的二次式判别式 $\le0$ 即得。`
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
接下来将其推广到非负简单函数，再到非负可测函数，最后到一般情形（标准的「四步法」）。`,
  "kp-5-2": String.raw`## 推论：期望的分布函数表达
若 $X$ 是定义在 $\mathbb P$ 上的实 r.v，概率分布为 $\mu_X$，分布函数为 $F$，则
$$
\mathbb E[X]=\int_{\mathbb R} x\,\mu_X(dx)=\int_{-\infty}^{\infty} x\,dF(x)
$$
更一般地，对可测函数 $f$，
$$
\mathbb E[f(X)]=\int_{\mathbb R} f(x)\,\mu_X(dx)=\int_{-\infty}^{\infty} f(x)\,dF(x)
$$
即只要知道 $X$ 的分布（或分布函数），就能把对 $\Omega$ 的抽象积分化为对实轴的 Lebesgue-Stieltjes 积分。`,
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
等式部分先验 $g=1_B$：$\int 1_B\,d\nu=\nu(B)=\int_B p\,d\mu=\int_E 1_B p\,d\mu$，再「四步法」推广到一般 $g$。`,
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
则 $\mathcal C\subset\Lambda$ 且 $\mathcal C$ 是 $\pi$ 系，验证 $\Lambda$ 是 $\lambda$ 系，由 $\lambda$-$\pi$ 方法得 $\Lambda=\mathcal B$。`,
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
两边消去 $\mathbb E[Y]$ 即得 $\lim_n\mathbb E[X_n]=\mathbb E[X]$。`,
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

**推论（反向 Fatou）**：若存在可积 $Y\ge X_n\ (a.s.)$，则 $\mathbb E[\varlimsup_n X_n]\ge\varlimsup_n\mathbb E[X_n]$。取 $X_n'=-X_n$ 应用 Fatou 即得。`,
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
四项夹逼相等，故 $\lim_n\mathbb E[X_n]=\mathbb E[X]$。`,
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
即积分的绝对连续性。`,

  "kp-6-1": String.raw`## 乘积可测空间与乘积测度
设 $(E_1,\Sigma_1,\mu_1)$ 和 $(E_2,\Sigma_2,\mu_2)$ 是两个概率空间，在
$$
E_1\times E_2=\{w=(w_1,w_2):w_1\in E_1,\ w_2\in E_2\}
$$
上定义 $\sigma$ 代数
$$
\Sigma_1\times\Sigma_2=\sigma\{A_1\times A_2:A_1\in\Sigma_1,\ A_2\in\Sigma_2\}
$$
称为 $E_1,E_2$ 的**乘积 $\sigma$ 代数**，称 $(E_1\times E_2,\ \Sigma_1\times\Sigma_2)$ 为**乘积可测空间**。`,

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
（严谨地说，还须证明 $\mu_2(A(x_1))$ 关于 $x_1$ 可测，参见课本 135 页定理 6.1.9。）`,

  "kp-6-3": String.raw`## 截口
设 $A\subset E_1\times E_2$，对任意 $x_1\in E_1$，定义
$$
A(x_1)=\{x_2\in E_2:(x_1,x_2)\in A\}
$$
称之为 $A$ 在 $x_1$ 处的**截口**，类似可定义 $A(x_2)$。截口是定义乘积测度时把二维集合按一个坐标"切片"得到的一维集合，是定理4.1.1 中那个含 $\mu_2(A(x_1))$ 的积分得以成立的关键。`,

  "kp-6-4": String.raw`## 乘积测度的 $n$ 维推广
可把二维结论推广至 $n$ 维情形。设 $(E_k,\Sigma_k,\mu_k)$ 是 $n$ 个概率空间，$1\le k\le n$，乘积空间为
$$
\big(E_1\times\cdots\times E_n,\ \Sigma_1\times\cdots\times\Sigma_n,\ \mu_1\times\cdots\times\mu_n\big)
$$
其乘积测度由迭代积分给出
$$
(\mu_1\times\cdots\times\mu_n)(A)=\int_{E_1}\mu_1(dx_1)\cdots\int_{E_{n-1}}\mu_{n-1}\big(A(x_1,...,x_{n-1})\big)\,\mu_n(dx_n)
$$`,

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
$$`,

  "kp-6-6": String.raw`## 卷积公式（二项分布的可加性）
$$
X\sim b(m,p),\ Y\sim b(n,p),\ X\perp Y\ \Rightarrow\ Z=X+Y\sim b(m+n,p)
$$
**证明**：
$$
\mathbb P(Z=k)=\mathbb P(X+Y=k)=\sum_{i=0}^{k}\mathbb P(X=i)\mathbb P(Y=k-i)=C_{m+n}^{k}p^k(1-p)^{m+n-k}
$$`,

  "kp-6-7": String.raw`## 初始分布与转移概率决定的测度
考虑 $Z=(X,Y)$，$A=A_1\times A_2\in\Sigma_1\times\Sigma_2$，则
$$
\begin{aligned}
\mu(A)&=\mathbb P((X,Y)\in A_1\times A_2)=\mathbb P(X\in A_1,Y\in A_2)\\
&=\mathbb P(\{w:X(w)\in A_1\}\cap\{w:Y(w)\in A_2\})=\mathbb P(X^{-1}(A_1)\cap Y^{-1}(A_2))\\
&=\mathbb P(\tilde A_1)\mathbb P(\tilde A_2\mid\tilde A_1)=\mathbb P(X\in A_1)\,\mathbb P(Y\in A_2\mid X\in A_1)
\end{aligned}
$$
当 $X,Y$ 不独立时，第二个因子依赖于第一个坐标的取值，这就引出了**转移概率测度**的概念。`,

  "kp-6-8": String.raw`## 转移概率测度的定义
设 $(E_1,\Sigma_1),(E_2,\Sigma_2)$ 是两个可测空间，$\mathbb P(x_1,A)$ 是定义在 $E_1\times\Sigma_2$ 上的函数，若它满足
$$
\begin{aligned}
&(1)\ 给定\,x_1\in E_1,\ \mathbb P(x_1,\cdot)\,是\,\Sigma_2\,上的概率测度\\
&(2)\ 给定\,A\in\Sigma_2,\ \mathbb P(\cdot,A)\,是\,\Sigma_1\,上的可测函数
\end{aligned}
$$
则称 $\mathbb P$ 为 $E_1\times\Sigma_2$ 上的一个**转移概率测度**。它刻画"已知第一个坐标取 $x_1$ 后，第二个坐标落入 $A$ 的条件概率"。`,

  "kp-6-9": String.raw`## 由初始分布与转移概率构造测度（定理4.1.3）
设 $\mu_1$ 是 $\Sigma_1$ 上的概率测度，$\mathbb P(\cdot,\cdot)$ 是 $E_1\times\Sigma_2$ 上的转移概率测度，则在乘积可测空间上存在唯一概率测度 $\mu$，使得
$$
\mu(A_1\times A_2)=\int_{A_1}\mathbb P(x_1,A_2)\,\mu_1(dx_1)
$$
更一般地，对任意 $A\in\Sigma_1\times\Sigma_2$，
$$
\mu(A)=\int_{E_1}\mathbb P(x_1,A(x_1))\,\mu_1(dx_1)
$$
当 $\mathbb P(x_1,\cdot)\equiv\mu_2$ 与 $x_1$ 无关时，此式退化为乘积测度——即独立是"转移概率不依赖初始坐标"的特例。`,

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

(3) $f$ 非负可测时，取非负简单函数 $f_n\uparrow f$，由 Levi 定理两次令 $n\to\infty$ 即得。`,

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
$$`,

  "kp-7-3": String.raw`## 期望的尾积分公式（例1）
设 $X$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上非负随机变量，则
$$
\mathbb E[X]=\int_{0}^{+\infty}\mathbb P(X>x)\,dx=\int_{0}^{+\infty}(1-F(x))\,dx=\int_{0}^{+\infty}\mathbb P(X\ge x)\,dx
$$
即非负随机变量的期望等于其生存函数（尾概率）在 $[0,\infty)$ 上的积分。

最后一个等号成立是因为 $\mathbb P(X>x)$ 单调，最多有可数多个不连续点，从而
$$
\int_{0}^{+\infty}\mathbb P(X>x)\,dx=\int_{0}^{+\infty}\mathbb P(X\ge x)\,dx
$$`,

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
$$`,

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
$$`,

  "kp-7-6": String.raw`## 转移概率测度下的 Fubini（定理4.2.3）
$(E_1,\Sigma_1),(E_2,\Sigma_2)$ 是两个可测空间，$\mu_1$ 是 $(E_1,\Sigma_1)$ 上概率测度，$\mathbb P(x,B)$ 是 $E_1\times\Sigma_2$ 上转移概率测度，$\mu$ 是 $\Sigma_1\times\Sigma_2$ 上如下定义的概率测度：
$$
\mu(B)=\int_{E_1}\mathbb P(x,B)\,\mu_1(dx),\quad B\in\Sigma_1\times\Sigma_2
$$
$f$ 是 $\Sigma_1\times\Sigma_2$ 上可测函数，若 $\underset{E_1\times E_2}{\int\int}f\,d\mu$ 存在，则
$$
\underset{E_1\times E_2}{\int\int}f\,d\mu=\int_{E_1}\mu_1(dx)\int_{E_2}f(x,y)\,\mathbb P(x,dy)
$$

证明思路依旧是从示性函数到简单函数、再到非负可测函数、最后到一般可测函数的步骤处理。`,

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
$$`,

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
$$`,

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
因此 $\mu\big(\prod_{i=1}^{\infty}B_i\big)=\prod_{i=1}^{\infty}\mu(B_i)$。`,

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

**背景**：若随机变量 $X$ 的 $\mathbb E[X]$ 存在，则 $\nu(A)=\int_A x\,d\mathbb P=\mathbb E[X1_A]=\int_A x^+\,d\mathbb P-\int_A x^-\,d\mathbb P$ 是一个符号测度，这正是引入符号测度的动机。`,

  "kp-8-2": String.raw`## 符号测度的极值分解（定理5.1.1）
若 $\mu$ 是 $\Sigma$ 上的符号测度，则存在 $N,P\in\Sigma$，满足
$$
\begin{aligned}
&(1)\ NP=\varnothing,\ N\bigcup P=E \\
&(2)\ \mu(P)=\sup_{A\in\Sigma}\mu(A)\ge0,\quad \mu(N)=\inf_{A\in\Sigma}\mu(A)\le0
\end{aligned}
$$
即全空间 $E$ 可被分成一块"正集" $P$（达到测度上确界）和一块"负集" $N$（达到测度下确界）。

这个定理的证明从略，可以参考教材。`,

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
故 $\mu(N\bigcap A)=\inf_{B\subset\Sigma}\mu(B\bigcap A)$。$\mu^+,\mu^-,|\mu|$ 是测度由定义验证，而 $\mu=\mu^+-\mu^-$ 由 $\mu(A)=\mu(P\bigcap A)+\mu(N\bigcap A)=\mu^+(A)-\mu^-(A)$ 即得。`,

  "kp-8-4": String.raw`## μ-连续与 μ-奇异
设 $(E,\Sigma)$ 是一可测空间，$\mu$ 是定义在 $\Sigma$ 上的函数，$\varphi$ 是 $\Sigma$ 上符号测度。
$$
\varphi\,是\,\mu\text{-连续},\ 若\,\mu(A)=0\Rightarrow\varphi(A)=0 \\
\varphi\,是\,\mu\text{-奇异},\ 若存在\,N\in\Sigma，使得\,\mu(N)=0\,且\,\forall A\in\Sigma,\ \varphi(A\bigcap N^C)=0
$$
这两种情形分别记为 $\varphi\ll\mu$（绝对连续），$\varphi\perp\mu$（奇异）。

直观地说：$\varphi\ll\mu$ 表示 $\mu$ 的零集也是 $\varphi$ 的零集；$\varphi\perp\mu$ 表示 $\varphi$ 全部"质量"集中在 $\mu$ 的某个零集 $N$ 上，两者支撑互不重叠。这两个概念是为引入下面的 Lebesgue 分解定理作准备。`,

  "kp-8-5": String.raw`## Lebesgue 分解定理（定理5.2.1）
设 $\mu$ 是 $\sigma$ 有限测度，$\varphi$ 是符号测度，则 $\varphi$ 可以唯一地表示为
$$
\varphi=\varphi_C+\varphi_S
$$
$\varphi_C,\varphi_S$ 为 $\Sigma$ 上符号测度，且存在 $(E,\Sigma)$ 可测函数 $f$，使得
$$
\varphi_C(A)=\int_A f\,d\mu,\quad(\varphi_C\ll\mu)，\quad 且\,\varphi_S\perp\mu
$$
$\sigma$ 有限的含义是可以把全空间分解为很多小块，每一块都有限。该定理的含义是可以把符号测度唯一分解为 $\mu$-连续部分 $\varphi_C$ 与 $\mu$-奇异部分 $\varphi_S$。`,

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
即在 $\varphi\ll\mu$ 时，对 $\varphi$ 的积分可以"换元"为对 $\mu$ 的积分，只需乘上 R-N 导数这个密度因子。`,

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
可验证 $\hat F_{s,c}$ 非负、非降、$\hat F'_{s,c}=0\ (a.e.)$ 且连续。归一化后即得 $\lambda_1 F_c+\lambda_2 F_d+\lambda_3 F_{s,c}$，令 $x\to+\infty$ 得 $\sum_i\lambda_i=1$。`,

  "kp-9-1": String.raw`## 条件期望的定义（Radon-Nikodym 导数）
设 $(\Omega,\mathcal F,\mathbb P)$ 是一概率空间，$\mathcal G$ 是 $\mathcal F$ 中 $\sigma$ 代数，$X$ 是 $\Omega$ 上定义的（实）随机变量，$\mathbb E[X]$ 存在。在 $\mathcal G$ 上定义
$$
\nu(A)=\int_A X\,d\mathbb P,\quad A\in\mathcal G
$$
则 $\nu$ 是 $\mathcal G$ 上符号测度，且 $\nu\ll\mathbb P_{\mathcal G}$（$\mathbb P_{\mathcal G}$ 表示 $\mathbb P$ 限制在 $\mathcal G$ 上）。故 $\frac{d\nu}{d\mathbb P_{\mathcal G}}$ 存在，称之为**给定 $\mathcal G$ 之下 $X$ 的条件期望**，记为 $\mathbb E[X\mid\mathcal G]$。`,

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
$$`,

  "kp-9-3": String.raw`## 给定随机变量的条件期望 $\mathbb E[X\mid Y]$
若 $Y$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上定义、取值于可测空间 $(E,\Sigma)$ 中的随机变量（随机元），则
$$
\mathbb E[X\mid\sigma(Y)]=\mathbb E[X\mid Y]
$$
称为**给定 $Y$ 之下 $X$ 的条件期望**。由 $\sigma(Y)$ 可测随机变量的构造知，存在可测映射 $\varphi:(E,\Sigma)\to(\mathbb R,\mathcal B)$ 使得
$$
\mathbb E[X\mid Y]=\mathbb E[X\mid\sigma(Y)]=\varphi(Y)
$$
记 $\mathbb E[X\mid Y=y]=\varphi(y)$，称之为**给定 $Y=y$ 条件下 $X$ 的条件期望**。`,

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
而 $\{f>g+\tfrac1{n_0}\}$ 可测，这与假定矛盾。`,

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
由引理即得 $Y=\mathbb E[X\mid\mathcal G]\ (a.s.)$。`,

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
故 $Y=\mathbb E[X\mid\mathcal G]$。**(6)** 对 $X_n,-X_n$ 应用(5)即得；**(7)** 为全期望公式 $\mathbb E[\mathbb E[X\mid\mathcal G]]=\mathbb E[X]$。`,

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
由判定命题即得 $\varphi(Y)=\mathbb E[X\mid Y]$。`,

  "kp-9-8": String.raw`## 原子上的条件期望
若 $B$ 是 $\mathcal G$ 的非空原子（即 $C\subset B\Rightarrow C=\varnothing$ 或 $C=B$），则在 $B$ 上 $\mathbb E[X\mid\mathcal G]$ 是常数；当 $\mathbb P(B)>0$ 时，这个常数为
$$
\mathbb E[X\mid B]\triangleq\frac{\mathbb E[X1_B]}{\mathbb P(B)}
$$
**证明**：由 $B$ 非空，取 $w_0\in B$，记 $B^*=\{w\in B:\mathbb E[X\mid\mathcal G](w)=\mathbb E[X\mid\mathcal G](w_0)\}$。则 $B^*\in\mathcal G$ 且 $B^*\subset B$；因 $B$ 是原子，故 $B^*=B$，即 $\mathbb E[X\mid\mathcal G]$ 在 $B$ 上恒为常数。又
$$
\mathbb P(B)\,\mathbb E[X\mid B]=\int_B\mathbb E[X\mid\mathcal G]\,d\mathbb P=\int_B X\,d\mathbb P
$$
故该常数为 $\mathbb E[X\mid B]=\dfrac{\mathbb E[X1_B]}{\mathbb P(B)}$。`,

  "kp-10-1": String.raw`## 独立则退化为期望（定理5.4.1(1)）
若 $X$ 与 $\mathcal G$ 独立（即 $\sigma(X)$ 与 $\mathcal G$ 独立，也即 $\forall A\in\mathcal G$，$X$ 与 $1_A$ 独立），则
$$
\mathbb E[X\mid\mathcal G]=\mathbb E[X]\quad(a.s.)
$$
**证明**：首先 $\mathbb E[X]$ 为 $\mathcal G$ 可测（常数）。接着 $\forall A\in\mathcal G$，
$$
\int_A\mathbb E[X]\,d\mathbb P=\int 1_A\mathbb E[X]\,d\mathbb P\overset{独立}{=}\mathbb E[X]\,\mathbb E[1_A]=\mathbb E[X1_A]=\int_A X\,d\mathbb P
$$
两条件（$\mathcal G$ 可测 + 积分相等）均满足，故 $\mathbb E[X\mid\mathcal G]=\mathbb E[X]$。`,

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
再将结论由示性函数推广到非负简单、非负可测，最后到一般情形，即完成证明。`,

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
即"小的 $\sigma$ 代数说了算"：嵌套取条件期望时，较粗的信息域决定结果。`,

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
两边关于 $\mathcal G$ 取条件期望，右端化为 $0$，即得 $\varphi(\mathbb E[X\mid\mathcal G])\le\mathbb E[\varphi(X)\mid\mathcal G]$。`,

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
其中关键一步用到了独立性给出的乘积测度 $\mu_X\times\mu_Y$。`,

  "kp-10-6": String.raw`## 残差正交性（定理5.4.3）
设 $\mathbb E[X^2]<\infty$，则对任意 $\mathcal G$ 可测且 $\mathbb E[Y^2]<\infty$ 的 $Y$，
$$
\mathbb E[(X-\mathbb E[X\mid\mathcal G])\,Y]=0
$$
**证明**：用塔性质把外层期望写成条件期望的期望，再把 $\mathcal G$ 可测的 $Y$ 提出：
$$
\mathbb E[(X-\mathbb E[X\mid\mathcal G])Y]=\mathbb E\big[\mathbb E[(X-\mathbb E[X\mid\mathcal G])Y\mid\mathcal G]\big]=\mathbb E\big[Y\,\mathbb E[X-\mathbb E[X\mid\mathcal G]\mid\mathcal G]\big]=0
$$
最后一步因 $\mathbb E[X-\mathbb E[X\mid\mathcal G]\mid\mathcal G]=\mathbb E[X\mid\mathcal G]-\mathbb E[X\mid\mathcal G]=0$。即误差 $X-\mathbb E[X\mid\mathcal G]$ 与一切 $\mathcal G$ 可测变量正交。`,

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
故 $\mathbb E[X-Z]^2=\mathbb E[X-\mathbb E[X\mid Y]]^2+\mathbb E[\mathbb E[X\mid Y]-Z]^2\ge\mathbb E[X-\mathbb E[X\mid Y]]^2$，当 $Z=\mathbb E[X\mid Y]$ 时取到最小。`,

  "kp-11-1": String.raw`## 鞅的定义
设 $\{X_n,n\ge 0\}$ 是 $(\Omega,\mathcal F,\mathbb P)$ 上的（广义）实随机变量，$\{\mathcal F_n,n\ge 0\}$ 是一列上升的 $\sigma$ 域（称为 $\sigma$ 域流/滤波），若满足
$$
\begin{aligned}
&(1)\ \mathbb E[|X_n|]<\infty\quad(\forall n\ge 0) \\
&(2)\ X_n\,关于\,\mathcal F_n\,可测（称为\,\mathcal F_n\,适应） \\
&(3)\ \forall n\ge 0,\ \mathbb E[X_{n+1}\mid\mathcal F_n]=X_n\ (a.s.)
\end{aligned}
$$
则称 $\{X_n\}$ 关于 $\{\mathcal F_n\}$ 是**鞅**。若将条件 (3) 中的 $"="$ 改为 $"\ge"$ 则为**下鞅**，改为 $"\le"$ 则为**上鞅**。`,

  "kp-11-2": String.raw`## 鞅的几个性质
$$
\begin{aligned}
&(1)\ 若\,\{X_n\}\,是鞅，\varphi\,是凸函数，\mathbb E[|\varphi(X_n)|]<\infty\,(\forall n\ge 1)，则\,Y_n=\varphi(X_n)\,是下鞅 \\
&(2)\ 若\,\{X_n\}\,是下鞅，\varphi\,是凸函数且非降，\mathbb E[|\varphi(X_n)|]<\infty\,(\forall n\ge 1)，则\,Y_n=\varphi(X_n)\,是下鞅 \\
&(3)\ 若\,\{X_n\}\,是下鞅，则它必可唯一分解为\,X_n=M_n+A_n，其中\,M_n\,是鞅，\{A_n\}\,非降， \\
&\quad\ \ A_n\,关于\,\mathcal F_{n-1}\,可测，且\,A_0=0（Doob\,分解）
\end{aligned}
$$
结论 (1)(2) 的证明见习题。`,

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

**例2**：上例的特殊情形为 $\{\zeta_n\}$ i.i.d，均值为 $p$，$S_n=\sum_{k=1}^n\zeta_k$。当 $p=0\,(\le 0,\ \ge 0)$ 时，$\{S_n\}$ 关于同样的 $\mathcal F_n$ 为鞅（上鞅、下鞅）。`,

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
$$`,

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
$$`,

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
所以 $\{R_n\}$ 是鞅。`,

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
$$`,

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
即 a.s. 收敛等价于"除去一个概率为零的坏集后，逐点收敛"，其代数与连续映射性质都从逐点极限直接继承。`,

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
故 $\bigcap_N B_N$ 概率为 $0$ 等价于 $\mathbb P(B_N)\to0$，即得上述刻画。`,

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
由 (1) 即得 $X_n\overset{a.s}\to X$。`,

  "kp-12-4": String.raw`## Borel-Cantelli 引理
$$
若\,\sum_{n=1}^{\infty}\mathbb P(A_n)<\infty,\ 则\,\mathbb P(A_n\text{ i.o.})=0
$$
其中 $\{A_n\text{ i.o.}\}\triangleq\bigcap_{N=1}^{\infty}\bigcup_{n=N}^{\infty}A_n$，"i.o." 即 infinitely often；$w\in\bigcup_{n=N}^{\infty}A_n\,(\forall N)$ 表示 $w$ 属于无穷多个 $A_n$。

**证明**：由测度连续性与次可加性，
$$
\mathbb P(A_n\text{ i.o.})=\mathbb P\Big(\bigcap_{N=1}^{\infty}\bigcup_{n=N}^{\infty}A_n\Big)=\lim_{N\to\infty}\mathbb P\Big(\bigcup_{n=N}^{\infty}A_n\Big)\le\lim_{N\to\infty}\sum_{n=N}^{\infty}\mathbb P(A_n)=0
$$
因级数收敛使其尾和趋于 $0$，故无穷多个 $A_n$ 同时发生的概率为零。`,

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

与 B-C 引理对照：引理对任意事件给出"级数收敛 $\Rightarrow$ 几乎不再发生"，而 0-1 律在独立性下进一步给出"级数发散 $\Rightarrow$ 几乎必然无穷多次发生"的逆向结论。`,

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
故 $X=Y\ (a.s)$。`,

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

利用此定理证基本性质 (3)：$X_n\overset{P}\to X$ 则其子列的子列 $X_{n_k'}\overset{a.s}\to X$，$f$ 连续故 $f(X_{n_k'})\overset{a.s}\to f(X)$，再由定理6.2.1 得 $f(X_n)\overset{P}\to f(X)$。`,

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
$$`,

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

取 $a_i=X_i$ 并取期望，再由 $|S_n|\le\sum|X_i|$ 即得结论。`,

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
若 $\mathbb E|x+y|^r<\infty$，两边同除 $(\mathbb E|x+y|^r)^{1-1/r}$ 即得；若 $\mathbb E|x+y|^r=\infty$，由 $C_r$ 不等式知 $\|x\|_r,\|y\|_r$ 至少一个为 $\infty$，两边皆 $\infty$，结论仍成立。`,

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
且 $r>0$ 时 $\|X\|_\infty\ge\|X\|_r$：由 $|X|\le\|X\|_\infty$ 得 $(\mathbb E|X|^r)^{1/r}\le\|X\|_\infty$。`,

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
证：取子列 $X_{n_k}\xrightarrow{a.s.}X$ 实现上极限，由 $|X_{n_k}-X|\le2|Y|$ 及控制收敛定理即得。`,

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

证：$\forall\epsilon>0$，$F_n(x)\le\mathbb P(X\le x+\epsilon)+\mathbb P(X-X_n\ge\epsilon)$，令 $n\to\infty$ 再令 $\epsilon\to0$ 得 $\varlimsup_n F_n(x)\le F(x)$；同理 $\varliminf_n F_n(x)\ge F(x)$。`,

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
即概率分布函数族在淡收敛意义下是「列紧」的——可能损失部分质量（极限只是淡收敛而未必弱收敛），但总能抽出一个收敛子列。`,

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
则 $F(x)$ 是一分布函数，且 $F_{nn}\overset{v}\to F\ (n\to\infty)$。`,

  "kp-14-2": String.raw`## 淡收敛子列极限唯一则淡收敛（定理6.4.3）
若 $\{F_n\}$ 的每个淡收敛子列都有相同的极限，则 $\{F_n\}$ 淡收敛。

**证明**：设 $F$ 是所有淡收敛子列的公共极限。若 $F_n\nrightarrow F$，则 $\exists x_0\in\mathcal C(F)$（$F$ 的连续点），使得 $F_n(x_0)\nrightarrow F(x_0)$，于是有子列 $\{F_{n_k}(x_0)\}$ 满足 $|F_{n_k}(x_0)-F(x_0)|\ge\epsilon$（$\epsilon>0$）。而 $\{F_{n_k}\}$ 又有淡收敛子列 $\{F_{n_k'}\}$，其极限为 $F$，故 $F_{n_k'}(x_0)\to F(x_0)$，与前式矛盾。`,

  "kp-14-3": String.raw`## 淡收敛极限为分布函数 $\iff$ tight（定理6.4.4）
若概率分布函数列 $F_n\overset{v}\to F$，则
$$
F\,是概率分布函数 \iff \{F_n\}\,\text{tight}（一致紧）,\ 即\ \forall\epsilon>0,\ \exists L>0,\ \sup_n\{F_n(-L)+1-F_n(L)\}<\epsilon
$$

**证明 $\Rightarrow$**：由 $\lim_{x\to-\infty}F(x)=0,\ \lim_{x\to\infty}F(x)=1$，存在 $L>0$ 使 $F$ 在 $\pm L$ 连续且 $F(-L)+1-F(L)<\tfrac\epsilon3$。因 $F_n\overset{v}\to F$，$n$ 充分大时 $|F_n(\pm L)-F(\pm L)|<\tfrac\epsilon3$，从而
$$
F_n(-L)+1-F_n(L)<\tfrac\epsilon3+F(-L)+1+\tfrac\epsilon3-F(L)<\epsilon,\quad \sup_n\{F_n(-L)+1-F_n(L)\}<\epsilon
$$

**证明 $\Leftarrow$**：由 tight 同上可得 $F(-L)+1-F(L)<\epsilon$，故 $F(-L)<\epsilon,\ 1-F(L)<\epsilon$。当 $x>L$ 时 $F(-x)<\epsilon,\ 1-F(x)<\epsilon$，令 $x\to\infty,\epsilon\to0$ 得 $F(-\infty)=0,\ F(\infty)=1$，即 $F$ 是分布函数。`,

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
$$`,

  "kp-14-5": String.raw`## 弱收敛的有界连续函数刻画（定理6.4.5）
$$
X_n\overset{d}\to X \iff 对\,\mathbb R\,上任意有界连续函数\,f,\ \mathbb E f(X_n)\to\mathbb E f(X) \iff 对\,\mathbb R\,上任意有界一致连续函数\,f,\ \mathbb E f(X_n)\to\mathbb E f(X)
$$

老师未给严格证明，只给直观解释。因为 $\mathbb E f(X_n)=\int_{\mathbb R} f(x)\mu_n(dx),\ \mathbb E f(X)=\int_{\mathbb R} f(x)\mu(dx)$，故第二行等价于 $\int f\,d\mu_n\to\int f\,d\mu$，由推论又等价于 $\mu_n\overset{w}\to\mu$。证明思路是
$$
\int_{\mathbb R} f(x)\mu_n(dx)=\sum_{k=1}^{\infty}\int_{a_{k-1}}^{a_k} f(x)\mu_n(dx)\approx\sum_{k=1}^{\infty}f(\epsilon_k)\mu_n((a_{k-1},a_k])\approx\sum_{k=1}^{\infty}f(\epsilon_k)\mu((a_{k-1},a_k])=\int_{\mathbb R} f(x)\mu(dx)
$$
即在 $\mu$ 的连续点处分割，用 $f$ 在小区间上近似为常数，把弱收敛 $\mu_n\to\mu$ 传递到积分上。`,

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

**例1**：$\{X_n\}$ i.i.d.，$X_n\sim\left(\begin{matrix} 0 & 1 \\ 1-p & p \end{matrix}\right)$，则 $\dfrac{S_n}{n}\overset{L^2}\to p\ (n\to\infty)$。`,

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
故 $\Delta_2^{(n)}\overset{a.s}\to0$，从而 $\dfrac{S_n}{n}=\Delta_1^{(n)}+\Delta_2^{(n)}\overset{a.s}\to0$。`,

  "kp-14-8": String.raw`## 大数定律的一般定义与放回抽样方差
**定义（推广的大数定律）**：设 $\{X_n\}$ 是一列 r.v，$b_n\uparrow+\infty$，$\{a_n\}$ 是一列实数，$S_n=\sum_{k=1}^n X_k$。若 $\dfrac{S_n-a_n}{b_n}\overset{P}\longrightarrow0\ (n\to\infty)$，则称 $\{X_n\}$ 满足大数定律。（由 $\text{Var}(S_n)=o(a_n^2)$ 即得 $\tfrac{S_n-\mathbb E S_n}{a_n}\overset{L^2}\to0$。）

**例2（放回抽样的覆盖时间方差）**：从 $\{1,...,n\}$ 中放回抽样，$X_m$ 为第 $m$ 次取的数，$X_1,...,X_m$ i.i.d.。记 $\tau_k=\inf\{m\mid |\{x_1,...,x_m\}|=k\}$ 为首次集齐 $k$ 个不同数的时刻，$\tau_0=0$，则 $\tau_n=\sum_{k=1}^n(\tau_k-\tau_{k-1})$。各增量独立，$\tau_k-\tau_{k-1}$ 服从参数 $p=\tfrac{n-(k-1)}{n}$ 的几何分布，故
$$
\text{Var}(\tau_k-\tau_{k-1})=\frac{q}{p^2}=\frac{n^2}{(n+1-k)^2}-\frac{n}{n+1-k}
$$
从而
$$
\text{Var}(\tau_n)=\sum_{k=1}^n\text{Var}(\tau_k-\tau_{k-1})=n^2\sum_{k=1}^n\frac1{k^2}-n\sum_{k=1}^n\frac1k
$$`,

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

**推论**：若 $\mathbb E[X_1]<\infty$，则 $\dfrac{S_n}{n}\overset{\mathbb P}\to a=\mathbb E[X_1]$；此时 $a_n=\mathbb E[X_{n1}]\to\mathbb E[X_1]$。`,

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
该引理把"加权级数收敛"转化为"算术平均趋零"，是从级数收敛过渡到 $\dfrac{S_n}{n}\to 0$ 的桥梁。`,

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

**证明（$\Rightarrow$）**：反证。若 $\mathbb E[|X_1|]=+\infty$，则 $\forall A>0$，$\sum_n\mathbb P(|X_n|\ge nA)=+\infty$。由 Borel 0-1 律 $\{|X_n|\ge nA\}$ 发生无穷多次，从而 $\varlimsup_n\dfrac{|S_n|}{n}\ge\dfrac{A}{2}$，由 $A$ 任意性得 $\varlimsup_n\dfrac{|S_n|}{n}=+\infty$，矛盾。`,

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
**(2)证**：$\sup_t|\varphi(t+h)-\varphi(t)|\le\sup_t\mathbb E|e^{ihX}-1|\overset{h\to 0}\to 0$，与 $t$ 无关故一致。`,

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
$$`,

  "kp-15-6": String.raw`## 连续性定理与唯一性定理
**定理8.1.1（连续性定理）**：分布函数与特征函数相互唯一决定。

**定理8.1.2（唯一性定理）**：若 $\{X,X_n,n\ge 1\}$ 的特征函数为 $\{\varphi,\varphi_n,n\ge 1\}$，则
$$
X_n\overset{d}\to X\iff\varphi_n\to\varphi
$$
即依分布收敛等价于特征函数逐点收敛。这两条定理把"分布层面的收敛/相等"翻译为"特征函数层面的收敛/相等"，是用特征函数证明 CLT 等极限定理的核心工具。`,

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

**性质（定理8.1.3~8.1.5）**：(i) 线性变换仍是 Gauss：$A\vec X+\vec b\sim\mathcal N(A\vec a+\vec b,A\Sigma A^T)$；(ii) 对 Gauss 向量，子向量独立 $\iff\Sigma_{12}=\Sigma_{21}=0$（不相关即独立）；(iii) $\vec X$ 服从 Gauss $\iff\forall\lambda_1,...,\lambda_n$，$\sum_j\lambda_j X_j$ 服从一维 Gauss。`,

  "kp-15-8": String.raw`## 中心极限定理（定理8.2.1）
设 $\{X_n\}$ i.i.d.，$a=\mathbb E[X_1]$，$0<\sigma^2=\text{Var}(X_1)<\infty$，则
$$
R_n=\frac{S_n-na}{\sigma\sqrt n}\overset{d}\to\mathcal N(0,1)
$$
**证明**：用特征函数。设 $X_1-a$ 的特征函数为 $\psi$，由性质有 $\psi(s)=1-\tfrac12\sigma^2 s^2+o(s^2)$，于是
$$
\varphi_{R_n}(t)=\Big(\psi\big(\tfrac{t}{\sigma\sqrt n}\big)\Big)^n=\Big(1-\frac{t^2}{2n}+o\big(\tfrac{t^2}{n}\big)\Big)^n\to e^{-\frac{t^2}{2}}
$$
极限正是 $\mathcal N(0,1)$ 的特征函数，由唯一性定理得 $R_n\overset{d}\to\mathcal N(0,1)$。`,

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
则 CLT 成立。这是一个更易验证的充分条件。`,

};
