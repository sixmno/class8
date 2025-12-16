# ⚡ Class8

> **Runtime Atomic CSS Engine — No Build Step, No Config, No Limits**

Class8 is a **runtime, JIT, utility-first CSS engine** inspired by Tailwind —  
but built for **dynamic UIs, SPAs, CMSs, and runtime-generated content**.

Unlike build-time frameworks, **Class8 generates CSS on demand by observing class usage at runtime**, making it ideal for modern dynamic applications.

---

## 🚀 Why Class8?

| Feature | Class8 | Tailwind |
|------|------|------|
| Runtime CSS generation | ✅ | ❌ |
| No build step | ✅ | ❌ |
| Dynamic / CMS-friendly | ✅ | ⚠️ |
| Parent / child selectors | ✅ | ❌ |
| Attribute-based conditions | ✅ | ❌ |
| Utility-first | ✅ | ✅ |
| JIT | ✅ (runtime) | ✅ (build-time) |

---

## ✨ Features

### ⚡ Runtime JIT CSS
CSS is generated **only when a class is used**.

```html
<div class="w-200px h-100px bg-#222 text-white"></div>
```

---

### 🧠 Smart Caching
- Each class is parsed once
- Generated once
- Reused everywhere

No duplicate styles.

---

### 🎯 Utility-First Styling

```html
<div class="flex gap-10px ai-center jc-between p-20px"></div>
```

---

### 🔥 Parent / Child & Scoped Selectors

```html
<div class="_{.card} p-20px {.title}_"></div>
```

---

### 🎭 Attribute & Context-Based Styling

```html
<body phone>
  <div class="{body[phone]}_ fs-14px _{body[desktop]} fs-18px"></div>
</body>
```

---

### 🪄 `!important` Support

```html
<div class="!w-100px"></div>
```

---

## 📦 Installation

### CDN

```html
<script src="class8.js"></script>
<script>
  class8.install();
</script>
```

### NPM

```bash
npm install class8
```

```js
import class8 from 'class8';
class8.install();
```

---

## 🧪 Demo

```html
<div class="w-300px h-200px bg-linear-gradient(45deg,#ff0,#f00) p-20px">
  <h2 class="fs-20px mb-10px">Class8</h2>
  <p class="o-.7">Runtime CSS Engine</p>
</div>
```

---

## ⚡ Performance

- Batched DOM writes (`requestAnimationFrame`)
- Cached style generation
- Minimal MutationObserver usage
- Zero layout thrashing

---

## 📜 License

MIT
