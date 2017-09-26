# mytemplate-yoyo
Yoyo平常切一般官網常用的切版結構，簡單整一下


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
gulp + ejs + html-extend

### GULP TASK

#### task未來需要加強的項目
- 更新一支檔會全部重build的問題
- 更新JS會停掉gulp的問題


### EJS

#### 頁面間取值



HTML規範
---

###頁面架構
```
html

	head
		meta
		title
		link
			- {library}
			- {global css}
			- {in-page css}

	body
		.layout-container
			header
			.layout-view
				- {banner}
				- {page content}
			footer

		script
			- {library}
			- {global js}
			- {in-page js}

```

### 命名
頁面名稱會有人連ga跟seo一起定，如果自己先取了要提供給對方，免得到時要改

### 編寫風格



CSS
---

### 命名

### 編寫風格

### EMMET腳本



JS
---

### 命名

### 編寫風格

### GA TRACK



IMG
---