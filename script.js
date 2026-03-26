// ════════════════════════════════════
//  DATA
// ════════════════════════════════════
const COMPONENTS = [
	{
		id: "cpu",
		icon: "🧠",
		name: "المعالج المركزي",
		en: "CPU — Central Processing Unit",
		color: "#00f5ff",
		glow: "rgba(0,245,255,0.25)",
		sub: "عقل الحاسوب",
		tags: ["Intel", "AMD", "GHz", "Cores"],
		desc: "المعالج المركزي هو عقل الحاسوب — ينفّذ كل التعليمات الحسابية والمنطقية. يُقاس بعدد النوى (Cores) وسرعة الساعة (GHz).",
		details: [
			{
				label: "النوى (Cores)",
				val: "كل نواة تستطيع تنفيذ مهمة مستقلة. المعالجات الحديثة 8–24 نواة.",
			},
			{
				label: "سرعة الساعة",
				val: "تُقاس بالـ GHz — عدد العمليات في الثانية. 3–5 GHz شائع.",
			},
			{
				label: "الذاكرة المخبأة (Cache)",
				val: "ذاكرة سريعة جداً داخل المعالج لتسريع الوصول للبيانات المتكررة.",
			},
			{
				label: "TDP (حرارة التصميم)",
				val: "الطاقة الحرارية المصممة للتبريد. 65W–125W في معالجات سطح المكتب.",
			},
		],
		fact: "أسرع معالج في العالم حتى 2024 يحتوي على 192 نواة! معالجات الهواتف تحتوي على مليارات الترانزستورات بحجم النانومتر.",
		shape: "cpu",
	},
	{
		id: "ram",
		icon: "💾",
		name: "الذاكرة العشوائية",
		en: "RAM — Random Access Memory",
		color: "#39ff88",
		glow: "rgba(57,255,136,0.25)",
		sub: "ذاكرة العمل المؤقتة",
		tags: ["DDR5", "GB", "MHz", "DIMM"],
		desc: "الـ RAM هي مساحة العمل المؤقتة — تُخزّن البرامج المفتوحة حالياً. تُمحى عند إيقاف تشغيل الجهاز.",
		details: [
			{
				label: "السعة",
				val: "4 GB للمهام البسيطة — 8–16 GB للعمل اليومي — 32 GB+ للألعاب والتصميم.",
			},
			{
				label: "السرعة",
				val: "تُقاس بالـ MHz أو MT/s. DDR4: 2133–3600 MT/s. DDR5: 4800–7200 MT/s.",
			},
			{
				label: "زمن الاستجابة (Latency)",
				val: "CL16، CL18 — كلما كان الرقم أصغر كان أسرع.",
			},
			{
				label: "القنوات (Channels)",
				val: "Dual Channel يعني عصاتان تعملان معاً لمضاعفة عرض النطاق الترددي.",
			},
		],
		fact: "سرعة الـ RAM أسرع من SSD بـ 100 مرة! لكنها أبطأ من Cache المعالج بـ 10 مرات.",
		shape: "ram",
	},
	{
		id: "gpu",
		icon: "🎮",
		name: "بطاقة الرسوميات",
		en: "GPU — Graphics Processing Unit",
		color: "#ff7c38",
		glow: "rgba(255,124,56,0.25)",
		sub: "معالج الصور والرسوميات",
		tags: ["NVIDIA", "AMD", "VRAM", "CUDA"],
		desc: "الـ GPU متخصص في معالجة الصور والرسوميات ثلاثية الأبعاد. يحتوي على آلاف النوى الصغيرة للعمل المتوازي.",
		details: [
			{
				label: "VRAM",
				val: "ذاكرة خاصة ببطاقة الرسوميات — تُخزّن نسيج الصور والـ textures.",
			},
			{
				label: "CUDA/Stream Processors",
				val: "آلاف النوى الصغيرة للحسابات المتوازية — NVIDIA يسميها CUDA Cores.",
			},
			{
				label: "معدل الإطارات",
				val: "FPS — عدد الصور المعروضة في الثانية. 60 FPS مريح للعين.",
			},
			{
				label: "Ray Tracing",
				val: "تقنية لمحاكاة الضوء الحقيقي في الألعاب — تحتاج GPU قوية.",
			},
		],
		fact: "الـ GPU يُستخدم الآن في تدريب الذكاء الاصطناعي! بطاقة NVIDIA H100 تستهلك 700 وات ويبلغ سعرها عشرات آلاف الدولارات.",
		shape: "gpu",
	},
	{
		id: "motherboard",
		icon: "🔌",
		name: "اللوحة الأم",
		en: "Motherboard",
		color: "#ffe44d",
		glow: "rgba(255,228,77,0.25)",
		sub: "العمود الفقري للحاسوب",
		tags: ["PCIe", "BIOS", "Socket", "Chipset"],
		desc: "اللوحة الأم تربط جميع مكونات الحاسوب ببعضها — هي الشبكة العصبية التي تمرر البيانات بين المعالج والذاكرة والتخزين.",
		details: [
			{
				label: "Socket المعالج",
				val: "المقبس الذي يُركَّب فيه المعالج. LGA1700 لـ Intel، AM5 لـ AMD.",
			},
			{
				label: "Chipset",
				val: "شريحة تتحكم بالتواصل بين المكونات — Z790, B650 من الشائعة.",
			},
			{
				label: "PCIe Slots",
				val: "فتحات توصيل بطاقة الرسوميات والـ SSD NVMe وبطاقات الصوت.",
			},
			{
				label: "BIOS/UEFI",
				val: "برنامج أساسي يبدأ قبل نظام التشغيل ويتحكم بإعدادات الجهاز.",
			},
		],
		fact: "اللوحة الأم تحتوي على طبقات متعددة من النحاس (4–8 طبقات) لنقل الإشارات بسرعة دون تداخل!",
		shape: "motherboard",
	},
	{
		id: "psu",
		icon: "⚡",
		name: "مزود الطاقة",
		en: "PSU — Power Supply Unit",
		color: "#ff4d94",
		glow: "rgba(255,77,148,0.25)",
		sub: "قلب الطاقة الكهربائية",
		tags: ["Watts", "80+", "Modular", "ATX"],
		desc: "مزود الطاقة يحوّل التيار المتردد (220V) إلى تيار مستمر منخفض (12V, 5V, 3.3V) يحتاجه الحاسوب.",
		details: [
			{
				label: "القدرة الكهربائية (Watt)",
				val: "650W للأنظمة المتوسطة — 850W+ للألعاب القوية.",
			},
			{
				label: "معيار 80 PLUS",
				val: "كفاءة تحويل الطاقة. Bronze 82% → Gold 87% → Platinum 90% → Titanium 94%.",
			},
			{
				label: "Modular",
				val: "الكابلات القابلة للفصل تُقلل الفوضى داخل الصندوق وتُحسّن التهوية.",
			},
			{
				label: "الحماية",
				val: "OCP, OVP, SCP — حماية من زيادة التيار والجهد والدائرة القصيرة.",
			},
		],
		fact: "جودة مزود الطاقة أهم من قوته! مزود رديء يُتلف المكونات الباهظة. دائماً اختر ماركة موثوقة.",
		shape: "psu",
	},
	{
		id: "cooling",
		icon: "❄️",
		name: "نظام التبريد",
		en: "Cooling System",
		color: "#b47eff",
		glow: "rgba(180,126,255,0.25)",
		sub: "مانع الاحتراق",
		tags: ["AIO", "Air Cooler", "Thermal Paste", "Fan"],
		desc: "المعالجات والرسوميات تولّد حرارة هائلة — نظام التبريد يُبقيها ضمن الحدود الآمنة للحصول على أداء مستقر.",
		details: [
			{
				label: "مبرد الهواء (Air Cooler)",
				val: "مشعاع ومراوح لتبديد الحرارة. اقتصادي وموثوق. مثال: Noctua NH-D15.",
			},
			{
				label: "مبرد مائي AIO",
				val: "سائل ينقل الحرارة إلى مشعاع كبير. أهدأ وأبرد للمعالجات القوية.",
			},
			{
				label: "مادة التوصيل الحراري",
				val: "معجون يُطبَّق بين المعالج والمبرد لتحسين نقل الحرارة.",
			},
			{
				label: "درجة الحرارة الآمنة",
				val: "80°C حد معقول — 90°C+ خطر وقد يتسبب في Throttling (تقليل الأداء).",
			},
		],
		fact: "أفضل مبردات الأبحاث تستخدم النيتروجين السائل (-196°C) لتعدّي الـ 10 GHz! لكنها تتلف الجهاز بالاستخدام اليومي.",
		shape: "cooling",
	},
];

const RAM_SIZES = [
	null,
	"1 GB",
	"2 GB",
	"4 GB",
	"8 GB",
	"16 GB",
	"32 GB",
	"64 GB",
	"128 GB",
];
const RAM_MAX = 64;
const MEM_TASKS = [
	{ icon: "📄", name: "Word/Excel", need: 1 },
	{ icon: "🌐", name: "تصفح الإنترنت (5 تبويبات)", need: 2 },
	{ icon: "🎵", name: "استماع موسيقى", need: 0.5 },
	{ icon: "🎮", name: "ألعاب بسيطة", need: 4 },
	{ icon: "🎮", name: "ألعاب ثقيلة", need: 12 },
	{ icon: "🎬", name: "مونتاج فيديو", need: 16 },
	{ icon: "🤖", name: "تشغيل AI محلي", need: 24 },
	{ icon: "📐", name: "تصميم ثلاثي الأبعاد", need: 32 },
];

const STORAGE = [
	{
		id: "hdd",
		icon: "💿",
		name: "القرص الصلب الدوار",
		full: "HDD — Hard Disk Drive",
		color: "#ff7c38",
		badge: "كلاسيكي",
		read: "80–160 MB/s",
		write: "60–130 MB/s",
		capacity: "500 GB – 20 TB",
		price: "منخفض جداً ($0.02/GB)",
		noise: "عالٍ (أجزاء متحركة)",
		lifespan: "3–5 سنوات",
		interface: "SATA III",
		speedVal: 8,
		priceVal: 5,
		reliabilityVal: 3,
		desc: "يعتمد على أقراص مغناطيسية دوّارة — الأرخص والأوسع سعةً لكن الأبطأ. مثالي للأرشفة.",
		ratings: { speed: 2, price: 5, size: 5, reliability: 3 },
	},
	{
		id: "sata-ssd",
		icon: "🗂️",
		name: "SSD ساتا",
		full: "SSD SATA — Solid State Drive",
		color: "#00f5ff",
		badge: "شائع",
		read: "500–560 MB/s",
		write: "450–530 MB/s",
		capacity: "120 GB – 4 TB",
		price: "متوسط ($0.07/GB)",
		noise: "صامت تماماً",
		lifespan: "5–10 سنوات",
		interface: "SATA III",
		speedVal: 56,
		priceVal: 4,
		reliabilityVal: 5,
		desc: "رقائق فلاش بدون أجزاء متحركة — أسرع من HDD بـ 5 أضعاف، أكثر هدوءاً وأقل هشاشة.",
		ratings: { speed: 3, price: 4, size: 4, reliability: 5 },
	},
	{
		id: "nvme",
		icon: "⚡",
		name: "NVMe SSD",
		full: "NVMe — Non-Volatile Memory Express",
		color: "#39ff88",
		badge: "الأسرع",
		read: "3500–7000 MB/s",
		write: "2500–6500 MB/s",
		capacity: "250 GB – 4 TB",
		price: "مرتفع نسبياً ($0.12/GB)",
		noise: "صامت تماماً",
		lifespan: "5–10 سنوات",
		interface: "PCIe 4.0 / 5.0 M.2",
		speedVal: 100,
		priceVal: 3,
		reliabilityVal: 5,
		desc: "يتصل مباشرة بالـ PCIe بدلاً من SATA — أسرع بـ 7 أضعاف من SATA SSD. المعيار الذهبي للأداء.",
		ratings: { speed: 5, price: 3, size: 3, reliability: 5 },
	},
	{
		id: "emmc",
		icon: "📱",
		name: "eMMC / UFS",
		full: "Embedded MultiMediaCard / UFS",
		color: "#ff4d94",
		badge: "للهواتف",
		read: "250–2100 MB/s",
		write: "125–1200 MB/s",
		capacity: "32 GB – 512 GB",
		price: "منخفض (مدمج)",
		noise: "صامت",
		lifespan: "5–8 سنوات",
		interface: "مدمج في اللوحة",
		speedVal: 45,
		priceVal: 5,
		reliabilityVal: 4,
		desc: "رقاقة تخزين مدمجة في الهواتف والأجهزة اللوحية — صغيرة الحجم وقليلة استهلاك الطاقة.",
		ratings: { speed: 2, price: 5, size: 2, reliability: 4 },
	},
];

// ════════════════════════════════════
//  TAB SWITCHING
// ════════════════════════════════════
function switchTab(id, btn, color) {
	document
		.querySelectorAll(".section")
		.forEach((s) => s.classList.remove("active"));
	document.getElementById("sec-" + id).classList.add("active");
	document.querySelectorAll(".tab-btn").forEach((b) => {
		b.classList.remove("active");
		b.style.background = "";
		b.style.color = "";
	});
	btn.classList.add("active");
	btn.style.background = color;
	btn.style.color = "#000";
}

// ════════════════════════════════════
//  3D MINI RENDERERS
// ════════════════════════════════════
function make3D(canvas, shape, color, size = 90) {
	canvas.width = size * devicePixelRatio;
	canvas.height = size * devicePixelRatio;
	canvas.style.width = size + "px";
	canvas.style.height = size + "px";
	const ctx = canvas.getContext("2d");
	ctx.scale(devicePixelRatio, devicePixelRatio);
	const cx = size / 2,
		cy = size / 2;
	let t = 0;

	function drawCPU() {
		ctx.clearRect(0, 0, size, size);
		const s = size * 0.33;
		const skew = Math.sin(t) * 4;
		// Shadow
		ctx.fillStyle = "rgba(0,0,0,0.3)";
		ctx.fillRect(
			cx - s * 0.9 + 3,
			cy - s * 0.9 + skew + 4,
			s * 1.8,
			s * 1.8,
		);
		// Main die
		const g = ctx.createLinearGradient(cx - s, cy - s, cx + s, cy + s);
		g.addColorStop(0, "#1a3a4a");
		g.addColorStop(0.5, color + "cc");
		g.addColorStop(1, "#0a1a22");
		ctx.fillStyle = g;
		ctx.fillRect(cx - s, cy - s + skew, s * 2, s * 2);
		// Grid lines
		ctx.strokeStyle = color + "55";
		ctx.lineWidth = 0.8;
		for (let i = 1; i < 5; i++) {
			ctx.beginPath();
			ctx.moveTo(cx - s + i * ((s * 2) / 5), cy - s + skew);
			ctx.lineTo(cx - s + i * ((s * 2) / 5), cy + s + skew);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(cx - s, cy - s + i * ((s * 2) / 5) + skew);
			ctx.lineTo(cx + s, cy - s + i * ((s * 2) / 5) + skew);
			ctx.stroke();
		}
		// Center die
		ctx.fillStyle = color + "88";
		ctx.fillRect(cx - s * 0.45, cy - s * 0.45 + skew, s * 0.9, s * 0.9);
		// Pins
		ctx.fillStyle = color;
		for (let i = 0; i < 6; i++) {
			ctx.fillRect(
				cx - s - 3,
				cy - s + skew + i * ((s * 2) / 6) + 2,
				6,
				(s * 2) / 6 - 4,
			);
			ctx.fillRect(
				cx + s - 3,
				cy - s + skew + i * ((s * 2) / 6) + 2,
				6,
				(s * 2) / 6 - 4,
			);
		}
		// Glow
		ctx.shadowBlur = 15;
		ctx.shadowColor = color;
		ctx.strokeStyle = color + "aa";
		ctx.lineWidth = 1.5;
		ctx.strokeRect(cx - s, cy - s + skew, s * 2, s * 2);
		ctx.shadowBlur = 0;
	}

	function drawRAM() {
		ctx.clearRect(0, 0, size, size);
		const w = size * 0.22,
			h = size * 0.65;
		const skew = Math.sin(t) * 3;
		const lx = cx - w / 2,
			ty = cy - h / 2 + skew;
		// PCB
		const g = ctx.createLinearGradient(lx, ty, lx + w, ty + h);
		g.addColorStop(0, "#0a2a0a");
		g.addColorStop(1, "#1a4a1a");
		ctx.fillStyle = g;
		ctx.fillRect(lx, ty, w, h);
		// Gold pins at bottom
		ctx.fillStyle = "#ffd700";
		for (let i = 0; i < 8; i++)
			ctx.fillRect(
				lx + 2 + (i * (w - 4)) / 8,
				ty + h - 6,
				(w - 4) / 8 - 1,
				8,
			);
		// Chips on RAM
		ctx.fillStyle = color + "44";
		for (let i = 0; i < 4; i++)
			ctx.fillRect(lx + 3, ty + 8 + i * h * 0.18, w - 6, h * 0.14);
		// Edge glow
		ctx.shadowBlur = 12;
		ctx.shadowColor = color;
		ctx.strokeStyle = color + "aa";
		ctx.lineWidth = 1.5;
		ctx.strokeRect(lx, ty, w, h);
		ctx.shadowBlur = 0;
	}

	function drawGPU() {
		ctx.clearRect(0, 0, size, size);
		const skew = Math.sin(t) * 3;
		const bw = size * 0.7,
			bh = size * 0.4;
		const lx = cx - bw / 2,
			ty = cy - bh / 2 + skew;
		// PCB
		const g = ctx.createLinearGradient(lx, ty, lx + bw, ty + bh);
		g.addColorStop(0, "#1a0a00");
		g.addColorStop(1, "#3a1a00");
		ctx.fillStyle = g;
		ctx.fillRect(lx, ty, bw, bh);
		// Fans (2 circles)
		[cx - bw * 0.22, cx + bw * 0.12].forEach((fx) => {
			const r = bh * 0.38;
			ctx.beginPath();
			ctx.arc(fx, cy + skew, r, 0, Math.PI * 2);
			ctx.fillStyle = "#222";
			ctx.fill();
			ctx.strokeStyle = color + "55";
			ctx.lineWidth = 2;
			ctx.stroke();
			// Fan blades
			for (let a = 0; a < 6; a++) {
				const ang = (a * Math.PI) / 3 + t * 2;
				ctx.beginPath();
				ctx.moveTo(fx, cy + skew);
				ctx.arc(fx, cy + skew, r * 0.8, ang, ang + 0.8);
				ctx.lineTo(fx, cy + skew);
				ctx.fillStyle = color + "33";
				ctx.fill();
			}
			ctx.beginPath();
			ctx.arc(fx, cy + skew, r * 0.15, 0, Math.PI * 2);
			ctx.fillStyle = color + "88";
			ctx.fill();
		});
		// Edge connector
		ctx.fillStyle = "#ffd700";
		for (let i = 0; i < 12; i++)
			ctx.fillRect(
				lx + 4 + (i * (bw - 8)) / 12,
				ty + bh - 4,
				(bw - 8) / 12 - 1,
				5,
			);
		ctx.shadowBlur = 10;
		ctx.shadowColor = color;
		ctx.strokeStyle = color + "aa";
		ctx.lineWidth = 1.5;
		ctx.strokeRect(lx, ty, bw, bh);
		ctx.shadowBlur = 0;
	}

	function drawMotherboard() {
		ctx.clearRect(0, 0, size, size);
		const s2 = size * 0.43,
			skew = Math.sin(t) * 2;
		const lx = cx - s2,
			ty = cy - s2 + skew;
		const g = ctx.createLinearGradient(lx, ty, lx + s2 * 2, ty + s2 * 2);
		g.addColorStop(0, "#0a1a05");
		g.addColorStop(1, "#1a3a0a");
		ctx.fillStyle = g;
		ctx.fillRect(lx, ty, s2 * 2, s2 * 2);
		// Circuit traces
		ctx.strokeStyle = color + "30";
		ctx.lineWidth = 1;
		[
			[0, 0.3, 0.6, 0.3],
			[0.2, 0, 0.2, 0.8],
			[0.4, 0.2, 0.8, 0.2],
			[0.6, 0.4, 0.6, 1],
		].forEach(([x1, y1, x2, y2]) => {
			ctx.beginPath();
			ctx.moveTo(lx + x1 * s2 * 2, ty + y1 * s2 * 2);
			ctx.lineTo(lx + x2 * s2 * 2, ty + y2 * s2 * 2);
			ctx.stroke();
		});
		// CPU socket
		ctx.fillStyle = "#1a2a1a";
		ctx.fillRect(cx - s2 * 0.35, cy - s2 * 0.35 + skew, s2 * 0.7, s2 * 0.7);
		ctx.strokeStyle = color + "88";
		ctx.lineWidth = 1.5;
		ctx.strokeRect(
			cx - s2 * 0.35,
			cy - s2 * 0.35 + skew,
			s2 * 0.7,
			s2 * 0.7,
		);
		// RAM slots
		for (let i = 0; i < 2; i++) {
			ctx.fillStyle = "#111";
			ctx.fillRect(
				lx + s2 * 1.2,
				ty + s2 * (0.3 + i * 0.4),
				s2 * 0.12,
				s2 * 0.35,
			);
			ctx.strokeStyle = color + "55";
			ctx.lineWidth = 1;
			ctx.strokeRect(
				lx + s2 * 1.2,
				ty + s2 * (0.3 + i * 0.4),
				s2 * 0.12,
				s2 * 0.35,
			);
		}
		ctx.shadowBlur = 8;
		ctx.shadowColor = color;
		ctx.strokeStyle = color + "aa";
		ctx.lineWidth = 1.5;
		ctx.strokeRect(lx, ty, s2 * 2, s2 * 2);
		ctx.shadowBlur = 0;
	}

	function drawPSU() {
		ctx.clearRect(0, 0, size, size);
		const w = size * 0.5,
			h = size * 0.38,
			skew = Math.sin(t) * 3;
		const lx = cx - w / 2,
			ty = cy - h / 2 + skew;
		const g = ctx.createLinearGradient(lx, ty, lx + w, ty + h);
		g.addColorStop(0, "#2a2a2a");
		g.addColorStop(1, "#111");
		ctx.fillStyle = g;
		ctx.fillRect(lx, ty, w, h);
		// Fan grill
		const fr = h * 0.35,
			fx = lx + w * 0.25,
			fy = ty + h / 2;
		ctx.beginPath();
		ctx.arc(fx, fy, fr, 0, Math.PI * 2);
		ctx.strokeStyle = color + "55";
		ctx.lineWidth = 1.5;
		ctx.stroke();
		for (let a = 0; a < 8; a++) {
			const ang = (a * Math.PI) / 4;
			ctx.beginPath();
			ctx.moveTo(fx, fy);
			ctx.lineTo(fx + Math.cos(ang) * fr, fy + Math.sin(ang) * fr);
			ctx.strokeStyle = color + "33";
			ctx.lineWidth = 1;
			ctx.stroke();
		}
		// Cables
		for (let i = 0; i < 4; i++) {
			ctx.strokeStyle = ["#ffd700", "#ff0000", "#000", "#aaa"][i];
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(lx + w, ty + h * 0.2 + i * h * 0.18);
			ctx.lineTo(lx + w + 12, ty + h * 0.2 + i * h * 0.18);
			ctx.stroke();
		}
		ctx.shadowBlur = 10;
		ctx.shadowColor = color;
		ctx.strokeStyle = color + "aa";
		ctx.lineWidth = 1.5;
		ctx.strokeRect(lx, ty, w, h);
		ctx.shadowBlur = 0;
	}

	function drawCooling() {
		ctx.clearRect(0, 0, size, size);
		const r = size * 0.35,
			skew = Math.sin(t) * 2;
		// Radiator fins
		for (let i = -3; i <= 3; i++) {
			ctx.fillStyle = "#aaa";
			ctx.fillRect(cx + (i * r) / 3.5 - 2, cy - r * 0.5 + skew, 4, r);
		}
		// Fan
		ctx.beginPath();
		ctx.arc(cx, cy + skew, r * 0.65, 0, Math.PI * 2);
		ctx.fillStyle = "#1a1a2a";
		ctx.fill();
		ctx.strokeStyle = color + "55";
		ctx.lineWidth = 2;
		ctx.stroke();
		for (let i = 0; i < 5; i++) {
			const ang = (i * Math.PI * 2) / 5 + t * 3;
			ctx.beginPath();
			ctx.moveTo(cx, cy + skew);
			ctx.arc(cx, cy + skew, r * 0.55, ang, ang + 0.9);
			ctx.lineTo(cx, cy + skew);
			ctx.fillStyle = color + "44";
			ctx.fill();
		}
		ctx.beginPath();
		ctx.arc(cx, cy + skew, r * 0.12, 0, Math.PI * 2);
		ctx.fillStyle = color;
		ctx.shadowBlur = 12;
		ctx.shadowColor = color;
		ctx.fill();
		ctx.shadowBlur = 0;
	}

	const shapes = {
		cpu: drawCPU,
		ram: drawRAM,
		gpu: drawGPU,
		motherboard: drawMotherboard,
		psu: drawPSU,
		cooling: drawCooling,
	};
	const fn = shapes[shape] || drawCPU;

	function loop() {
		t += 0.04;
		fn();
		requestAnimationFrame(loop);
	}
	loop();
}

// ════════════════════════════════════
//  BUILD COMPONENTS SECTION
// ════════════════════════════════════
function buildComponents() {
	const grid = document.getElementById("compGrid");
	COMPONENTS.forEach((c) => {
		const div = document.createElement("div");
		div.className = "comp-card";
		div.style.cssText = `--cc:${c.color};--cg:${c.glow}`;
		div.innerHTML = `
      <div class="card-scene"><canvas id="c3d_${c.id}"></canvas></div>
      <div class="card-body">
        <div class="card-name" style="color:${c.color}">${c.icon} ${c.name}</div>
        <div class="card-sub">${c.sub}</div>
        <div class="card-tags">${c.tags.map((t) => `<span class="ctag">${t}</span>`).join("")}</div>
      </div>`;
		div.onclick = () => showDetail(c, div);
		grid.appendChild(div);
		setTimeout(
			() =>
				make3D(
					document.getElementById("c3d_" + c.id),
					c.shape,
					c.color,
					90,
				),
			50,
		);
	});
}

// ════════════════════════════════════
//  DETAIL PANEL
// ════════════════════════════════════
let activeCard = null;
function showDetail(c, card) {
	if (activeCard) {
		activeCard.classList.remove("selected");
	}
	if (activeCard === card) {
		activeCard = null;
		document.getElementById("detailPanel").classList.remove("open");
		return;
	}
	activeCard = card;
	card.classList.add("selected");
	const dp = document.getElementById("detailPanel");
	dp.style.setProperty("--dcc", c.color);
	dp.innerHTML = `
    <div class="dp-header">
      <div class="dp-icon-3d" style="--dcc:${c.color}">
        <canvas id="dp3d"></canvas>
      </div>
      <div class="dp-text">
        <h3 style="color:${c.color}">${c.icon} ${c.name}</h3>
        <div class="dp-en">${c.en}</div>
        <p>${c.desc}</p>
      </div>
    </div>
    <div class="dp-body">
      <div>
        <div class="dp-section-title">المواصفات والمفاهيم</div>
        <ul class="dp-list">
          ${c.details.map((d) => `<li><span>${d.label}:</span> ${d.val}</li>`).join("")}
        </ul>
      </div>
      <div class="dp-fact" style="grid-column:unset;align-self:start">
        <div class="dp-fact-title">💡 هل تعلم؟</div>
        <p>${c.fact}</p>
      </div>
    </div>`;
	dp.classList.add("open");
	dp.scrollIntoView({ behavior: "smooth", block: "nearest" });
	setTimeout(
		() => make3D(document.getElementById("dp3d"), c.shape, c.color, 90),
		30,
	);
}

// ════════════════════════════════════
//  MEMORY SECTION
// ════════════════════════════════════
const RAM_STEPS = [0, 1, 2, 4, 8, 16, 32, 64, 128];
function updateRam(v) {
	const gb = RAM_STEPS[+v];
	document.getElementById("ramVal").textContent = gb + " GB";
	const pct = (gb / 128) * 100;
	document.getElementById("ramBar").style.width = Math.max(5, pct) + "%";
	document.getElementById("ramBarLabel").textContent = `${gb} GB من 128 GB`;
	let status = "";
	if (gb <= 2) status = "⚠️ غير كافٍ حتى للاستخدام الأساسي";
	else if (gb <= 4) status = "⚠️ أدنى حد للاستخدام المعقول";
	else if (gb <= 8) status = "✅ كافٍ للمهام اليومية والتصفح";
	else if (gb <= 16) status = "✅ جيد للألعاب والعمل المتعدد";
	else if (gb <= 32) status = "🚀 ممتاز للتصميم والبرمجة";
	else status = "💎 احترافي — للأعمال الثقيلة والـ AI";
	document.getElementById("ramStatus").textContent = status;

	const tasks = document.getElementById("memTasks");
	tasks.innerHTML = MEM_TASKS.map((m) => {
		const ok = gb >= m.need;
		const partial = !ok && gb >= m.need * 0.5;
		return `<div class="mem-task">
      <div class="mt-icon">${m.icon}</div>
      <div class="mt-name">${m.name}</div>
      <div class="mt-need">يحتاج: ${m.need} GB</div>
      <div class="mt-status" style="color:${ok ? "#39ff88" : partial ? "#ffe44d" : "#ff4d94"}">
        ${ok ? "✅ يعمل" : partial ? "⚠️ بطيء" : "❌ لا يكفي"}</div></div>`;
	}).join("");
}

function buildMemoryPyramid() {
	const layers = [
		{
			label: "Registers",
			sub: "داخل المعالج",
			speed: "< 1 ns",
			size: "بضع عشرات بايت",
			color: "#ff4d94",
		},
		{
			label: "L1 Cache",
			sub: "داخل المعالج",
			speed: "~1 ns",
			size: "32–128 KB",
			color: "#ff7c38",
		},
		{
			label: "L2 Cache",
			sub: "داخل المعالج",
			speed: "~5 ns",
			size: "256 KB – 2 MB",
			color: "#ffe44d",
		},
		{
			label: "L3 Cache",
			sub: "مشترك بين النوى",
			speed: "~20 ns",
			size: "8–64 MB",
			color: "#39ff88",
		},
		{
			label: "RAM",
			sub: "ذاكرة رئيسية",
			speed: "~60–80 ns",
			size: "4–128 GB",
			color: "#00f5ff",
		},
		{
			label: "SSD NVMe",
			sub: "تخزين سريع",
			speed: "~100 µs",
			size: "250 GB – 4 TB",
			color: "#b47eff",
		},
		{
			label: "HDD",
			sub: "تخزين ممغنط",
			speed: "~10 ms",
			size: "1 TB – 20 TB",
			color: "#7a8fa6",
		},
	];
	const container = document.getElementById("memPyramid");
	container.innerHTML = layers
		.map((l, i) => {
			const w = 40 + i * ((60 / layers.length) * 1.8);
			return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:5px">
      <div style="flex:1;text-align:left;font-size:0.72rem;color:var(--dim)">${l.speed}</div>
      <div style="width:${w}%;background:color-mix(in srgb,${l.color} 20%,transparent);
        border:1px solid ${l.color}88;border-radius:8px;padding:8px 12px;
        transition:all 0.3s;cursor:default" title="${l.sub}">
        <span style="font-weight:800;color:${l.color};font-size:0.82rem">${l.label}</span>
        <span style="font-size:0.72rem;color:var(--dim);margin-right:8px">${l.size}</span>
      </div>
    </div>`;
		})
		.join("");
}

// ════════════════════════════════════
//  STORAGE SECTION
// ════════════════════════════════════
function buildStorage() {
	const grid = document.getElementById("storGrid");
	STORAGE.forEach((s) => {
		const div = document.createElement("div");
		div.className = "stor-card";
		div.style.setProperty("--sc", s.color);
		div.innerHTML = `
      <div class="stor-header">
        <span class="stor-icon">${s.icon}</span>
        <div><div class="stor-name" style="color:${s.color}">${s.name}</div>
        <div class="stor-full">${s.full}</div></div>
        <span class="stor-badge">${s.badge}</span>
      </div>
      <div class="stor-body">
        <div class="stor-row"><span class="sr-label">سرعة القراءة</span><span class="sr-val" style="color:${s.color}">${s.read}</span></div>
        <div class="stor-row"><span class="sr-label">سرعة الكتابة</span><span class="sr-val" style="color:${s.color}">${s.write}</span></div>
        <div class="stor-row"><span class="sr-label">السعة</span><span class="sr-val">${s.capacity}</span></div>
        <div class="stor-row"><span class="sr-label">السعر</span><span class="sr-val">${s.price}</span></div>
        <div class="stor-row"><span class="sr-label">الضوضاء</span><span class="sr-val">${s.noise}</span></div>
        <div class="stor-row"><span class="sr-label">العمر الافتراضي</span><span class="sr-val">${s.lifespan}</span></div>
        <div class="stor-row"><span class="sr-label">الواجهة</span><span class="sr-val">${s.interface}</span></div>
        <div style="padding:10px 0;border-top:1px solid rgba(255,255,255,0.05);margin-top:4px;font-size:0.8rem;color:var(--dim);line-height:1.6">${s.desc}</div>
      </div>`;
		grid.appendChild(div);
	});

	// Speed bars
	const sb = document.getElementById("speedBars");
	const maxSpeed = 7000;
	STORAGE.forEach((s) => {
		const readMB = parseInt(s.read.split("–").pop());
		const pct = (readMB / maxSpeed) * 100;
		sb.innerHTML += `<div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px">
        <span style="font-size:0.85rem;font-weight:800;color:${s.color}">${s.icon} ${s.name}</span>
        <span style="font-size:0.78rem;color:var(--dim);font-family:'Orbitron',monospace">${s.read}</span>
      </div>
      <div class="speed-bar-outer">
        <div class="speed-bar-inner" style="width:0%;background:linear-gradient(90deg,${s.color}88,${s.color})" 
          data-target="${pct}"></div>
      </div></div>`;
	});

	// Comparison table
	const ct = document.getElementById("compTable");
	const cols = ["النوع", "السرعة", "السعة", "السعر", "الهدوء", "الموثوقية"];
	ct.innerHTML = `<thead><tr>${cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead>`;
	const ratingHtml = (n, max = 5) =>
		`<div class="rating">${Array.from({ length: max }, (_, i) => `<span class="star" style="color:${i < n ? "#ffe44d" : "#333"}">${i < n ? "★" : "☆"}</span>`).join("")}</div>`;
	const tbody = ct.createTBody();
	STORAGE.forEach((s) => {
		const tr = tbody.insertRow();
		tr.innerHTML = `
      <td style="color:${s.color};font-weight:900">${s.icon} ${s.name}</td>
      <td>${ratingHtml(s.ratings.speed)}</td>
      <td>${ratingHtml(s.ratings.size)}</td>
      <td>${ratingHtml(s.ratings.price)}</td>
      <td>${ratingHtml(s.noise === "صامت تماماً" || s.noise === "صامت" ? 5 : 2)}</td>
      <td>${ratingHtml(s.ratings.reliability)}</td>`;
	});

	// Animate bars with delay
	setTimeout(() => {
		document.querySelectorAll(".speed-bar-inner").forEach((b) => {
			b.style.width = b.dataset.target + "%";
		});
	}, 400);
}

// ════════════════════════════════════
//  RAM 3D MINI
// ════════════════════════════════════
function buildRam3D() {
	const c = document.getElementById("ramCanvas3d");
	make3D(c, "ram", "#39ff88", 90);
}

// ════════════════════════════════════
//  INIT
// ════════════════════════════════════
buildComponents();
updateRam(3);
buildMemoryPyramid();
buildStorage();
buildRam3D();

// Animate storage bars when switching to storage tab
document.querySelector('[data-tab="storage"]').addEventListener("click", () => {
	setTimeout(() => {
		document.querySelectorAll(".speed-bar-inner").forEach((b) => {
			b.style.width = b.dataset.target + "%";
		});
	}, 300);
});
