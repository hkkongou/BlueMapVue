export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "菜单",
        tooltip: "菜单"
    },
    maps: {
        title: "地图",
        button: "地图",
        tooltip: "地图列表"
    },
    markers: {
        title: "标记",
        button: "标记",
        tooltip: "标记列表",
        marker: "标记 | 标记列表",
        markerSet: "标记集 | 标记集",
		searchPlaceholder: "搜寻中..."
    },
    settings: {
        title: "设置",
        button: "设置"
    },
    goFullscreen: {
        button: "全屏显示"
    },
    resetCamera: {
        button: "重置视野",
        tooltip: "重置视角 & 位置"
    },
    updateMap: {
        button: "更新地图",
        tooltip: "清空 Tile 缓存"
    },
    lighting: {
        title: "光照",
        dayNightSwitch: {
            tooltip: "昼/夜"
        },
        sunlight: "日光",
        ambientLight: "环境光"
    },
    resolution: {
        title: "抗锯齿",
        high: "高 (SSAA, x2)",
        normal: "普通 (默认, x1)",
        low: "低 (粗糙, x0.5)"
    },
    freeFlightControls: {
        title: "自由视野控制器",
        mouseSensitivity: "鼠标移动灵敏度",
        invertMouseY: "鼠标反转 Y"
    },
    renderDistance: {
        title: "渲染距离",
        hiresLayer: "高分辨率",
        lowersLayer: "低分辨率"
    },
    theme: {
        title: "主题",
        default: "默认 (系统/浏览器)",
        dark: "暗夜主题",
        light: "白亮主题"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "重置所有设置"
    },
    players: {
        title: "玩家",
        tooltip: "玩家列表"
    },
    compass: {
        tooltip: "方向指示器 / 朝北"
    },
    controls: {
        title: "视野 / 控制",
        perspective: {
            button: "透视",
            tooltip: "透视视野"
        },
        flatView: {
            button: "平视",
            tooltip: "正交视图 / 平坦视图",
        },
        freeFlight: {
            button: "自由视野",
            tooltip: "自由视野 / 观察者模式"
        }
    },
    language: {
        title: "语言",
    },
    blockTooltip: {
        block: "方块",
        position: "坐标",
        chunk: "区块",
        region: {
            region: "区域",
            file: "文件"
        },
        light: {
            light: "光源",
            sun: "太阳",
            block: "方块",
        }
    },
    info: {
        title: "信息",
        button: "信息",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>鼠标控制:</h2>
	<table>
		<tr><th>移动</th><td><kbd>左击</kbd> + 拖拽</td></tr>
		<tr><th>缩放</th><td><kbd>鼠标中键</kbd> (滚动)</td></tr>
		<tr><th>旋转 / 倾斜</th><td><kbd>右击</kbd> + 拖拽</td></tr>
	</table>
</p>
<p>
	<h2>键盘控制:</h2>
	<table>
		<tr><th>移动</th><td><kbd>wasd</kbd> / <kbd>方向键</kbd></td></tr>
		<tr><th>缩放</th><td>数字键盘: <kbd>+</kbd>/<kbd>-</kbd> 或者 <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>旋转 / 倾斜</th><td><kbd>左-Alt</kbd> + <kbd>wasd</kbd> / <kbd>方向键</kbd> 或 <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>触屏控制:</h2>
	<table>
		<tr><th>移动</th><td>触屏 + 拖拽</td></tr>
		<tr><th>缩放</th><td>双指触屏 + 滑动</td></tr>
		<tr><th>旋转 / 倾斜</th><td>双指触屏 + 旋转 / 向上滑动 / 向下滑动</td></tr>
	</table>
</p>
<br><hr>
<p>
	本地图由 &#9829 生成; 正在使用 <a href="https://bluecolo.red/bluemap">BlueMap</a>.
</p>
		`
    }
}
