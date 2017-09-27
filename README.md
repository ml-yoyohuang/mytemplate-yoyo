# mytemplate-yoyo
- Yoyo平常切一般官網常用的切版結構，簡單整一下


資料夾結構
---

```
task/							-放gulp的任務
src/							-放開發檔
	css/
		layout/
		module/
		unit/
		vendor/
	html/						
		include/
		pages.ejs
		_layout.ejs
	img/						-一般圖檔、ico、svg 都放這裡
	js/							
		module/
		unit/
		vendor/
		initial.js
dist/							-BUILD出來會轉成HTML+CSS放在這裡
www/							-放後端套版後檔案
gulpfile.js
package.json

```



檔案命名方式
---


使用環境
---
gulp + ejs + html-extend模板工具

### GULP TASK

#### task 未來需要加強的項目
- 更新一支檔會全部重build的問題
- 更新JS時會停掉gulp的問題
- ts編譯
- 導入eslint
- 是否有可能自動取得某 folder 的 filename 列表並寫入 EJS?
- 是否有可能批次產生頁面？


### EJS

#### 頁面間取值
- [X] layout 傳進 page
- [X] layout 傳進 partial
- [X] page 傳出 layout
- [X] page 傳進 page
- [x] partial 傳出 layout
- [x] partial 傳進 page
- [ ] page 更改 layout 裡的變數
- [ ] partial 更改 layout 裡的變數		-所有跨檔改值皆需新宣告一個值來接


HTML規範
---

### 頁面架構
```
html

	head
		meta
		title
		link
			{library}
			{global css}
			{{in-page css}}

	body
		.layout-container
			header
			.layout-view
				{{in-page content}}
			footer

		script
			{library}
			{global js}
			{{in-page js}}

```

### 歸檔

### 命名
- 頁面名稱/部分區塊名稱會由同仁連ga跟seo一起定，如果自己先取了要提供給對方，免得到時要改

### 編寫風格



CSS規範
---

### 歸檔

### 命名

### 編寫風格

### EMMET腳本



JS規範
---

### 歸檔

### 命名

### 編寫風格

### GA TRACK



IMG規範
---





一些可愛的小動物
===
:octopus: :beetle: :hamster: :tiger: :baby_chick: :tropical_fish: :bug: :turtle: :dolphin: :whale: :fish: :space_invader: :ram: :rabbit: :elephant: :koala: :boar: :penguin: