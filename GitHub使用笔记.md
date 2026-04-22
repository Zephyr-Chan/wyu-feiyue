# GitHub 使用笔记

> 基于邑大飞跃手册项目实际操作整理，遇到的所有报错和解决方案都在这里。

---

## 一、Git 基础概念

| 概念 | 说明 | 类比 |
|------|------|------|
| 仓库（Repository） | 存放项目所有文件的地方 | 一个文件夹 |
| 本地仓库 | 你电脑上的项目 | 你桌上的文件夹 |
| 远程仓库 | GitHub 上的项目 | 云端的备份 |
| 提交（Commit） | 保存一次修改记录 | 游戏存档 |
| 推送（Push） | 把本地修改上传到 GitHub | 上传存档到云端 |
| 拉取（Pull） | 把 GitHub 上的修改下载到本地 | 从云端下载最新存档 |
| 分支（Branch） | 独立的开发线路 | 平行世界 |
| 克隆（Clone） | 把远程仓库完整下载到本地 | 复制整个文件夹 |

---

## 二、首次使用 Git 的配置

```bash
# 设置你的名字（会显示在提交记录中）
git config --global user.name "你的名字"

# 设置你的邮箱（需要和 GitHub 注册邮箱一致）
git config --global user.email "你的邮箱@example.com"

# 查看当前配置
git config --global --list
```

---

## 三、从零开始推送项目到 GitHub

### 3.1 在 GitHub 网站上创建仓库

1. 打开 github.com → 点击右上角 **+** → **New repository**
2. 填写仓库名（如 `wyu-feiyue`）
3. 选择 **Public**（公开，才能用免费 GitHub Pages）
4. **不要**勾选 "Add a README file"（本地已有）
5. 点击 **Create repository**

### 3.2 在本地初始化并推送

```bash
# 第1步：进入项目目录
cd C:\Users\你的用户名\Desktop\wyu-feiyue

# 第2步：初始化 Git 仓库
git init

# 第3步：添加所有文件到暂存区
git add .

# 第4步：提交代码（写一句说明）
git commit -m "初始提交：邑大飞跃手册"

# 第5步：关联远程仓库（替换为你的用户名）
git remote add origin https://github.com/你的用户名/wyu-feiyue.git

# 第6步：重命名主分支为 main
git branch -M main

# 第7步：推送到 GitHub
git push -u origin main
```

---

## 四、日常使用命令（最常用）

### 4.1 修改内容后推送（每天都会用）

```bash
git add .                          # 添加所有修改
git commit -m "更新了xxx内容"        # 提交修改
git push                           # 推送到 GitHub
```

### 4.2 查看状态

```bash
git status                         # 查看哪些文件被修改了
git log --oneline -10              # 查看最近10条提交记录
git diff                           # 查看具体改了什么内容
```

### 4.3 撤销修改

```bash
# 撤销某个文件的修改（恢复到上次提交的状态）
git checkout -- 文件名

# 撤销 git add（把文件从暂存区撤出来）
git reset HEAD 文件名

# 撤销上一次 commit（保留修改内容）
git reset --soft HEAD~1
```

### 4.4 拉取远程更新

```bash
git pull                           # 拉取并自动合并
```

---

## 五、报错信息与解决方案

### ❌ 报错1：代理导致连不上 GitHub

**错误信息：**
```
fatal: unable to access 'https://github.com/xxx': 
Failed to connect to github.com port 443 via 127.0.0.1 after 2107 ms: 
Could not connect to server
```

**原因：** Git 配置了代理（VPN/科学上网工具），但代理没开或者端口不对。

**解决方案：**
```bash
# 取消 Git 的 HTTP 代理
git config --global --unset http.proxy

# 取消 Git 的 HTTPS 代理
git config --global --unset https.proxy

# 验证是否取消成功（应该没有输出）
git config --global --get http.proxy
git config --global --get https.proxy
```

**如果需要使用代理**（VPN 开着的情况下）：
```bash
# 设置代理（端口号看你的 VPN 软件设置，常见的有 7890、10808、1080）
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

---

### ❌ 报错2：推送被拒绝（远程有本地没有的内容）

**错误信息：**
```
! [rejected]        main -> main (fetch first)
error: failed to push some refs
hint: Updates were rejected because the remote contains work that you do
hint: not have locally.
```

**原因：** GitHub 上的仓库有内容（比如创建时自动生成了 README），但你本地没有这些内容，导致冲突。

**解决方案 A（推荐，安全）：先拉取再推送**
```bash
git pull origin main --allow-unrelated-histories
# 如果弹出编辑器，直接输入 :wq 然后回车（保存退出）
git push -u origin main
```

**解决方案 B（简单粗暴，覆盖远程）：强制推送**
```bash
git push -f origin main
```
> ⚠️ `-f` 会用本地代码完全覆盖 GitHub 上的内容。只有在你确定本地代码是最新完整版本时才用。

---

### ❌ 报错3：远程仓库地址错误

**错误信息：**
```
fatal: 'https://github.com/xxx/remote-repo.git/' does not appear to be a git repository
```

**原因：** `git remote add` 时 URL 写错了。

**解决方案：修改远程仓库地址**
```bash
# 查看当前远程地址
git remote -v

# 修改为正确的地址
git remote set-url origin https://github.com/你的用户名/仓库名.git

# 验证是否修改成功
git remote -v
```

---

### ❌ 报错4：认证失败

**错误信息：**
```
fatal: Authentication failed for 'https://github.com/'
```
或
```
remote: Support for password authentication was removed on August 13, 2021.
```

**原因：** GitHub 从 2021 年起不再支持密码登录，需要用 Personal Access Token 或 SSH Key。

**解决方案 A（最简单）：使用 GitHub Desktop**
- 下载 GitHub Desktop（desktop.github.com）
- 登录你的 GitHub 账号
- 用 GitHub Desktop 推送，它会自动处理认证

**解决方案 B：使用 Personal Access Token**
1. 打开 GitHub → 右上角头像 → Settings
2. 左侧最下面 → Developer settings → Personal access tokens → Tokens (classic)
3. 点击 "Generate new token (classic)"
4. 勾选 `repo` 权限 → 生成 token
5. 复制 token（只显示一次！）
6. 推送时输入用户名和 token（token 就是密码）：
```bash
git push
# Username: 你的GitHub用户名
# Password: 粘贴刚才的token（不是GitHub密码）
```

**解决方案 C：配置 SSH Key（一劳永逸）**
```bash
# 1. 生成 SSH 密钥
ssh-keygen -t ed25519 -C "你的邮箱@example.com"
# 一路回车即可

# 2. 查看公钥
cat ~/.ssh/id_ed25519.pub

# 3. 复制公钥内容，添加到 GitHub：
#    GitHub → Settings → SSH and GPG keys → New SSH key → 粘贴

# 4. 修改远程地址为 SSH 格式
git remote set-url origin git@github.com:你的用户名/仓库名.git

# 5. 推送（不再需要输密码）
git push
```

---

### ❌ 报错5：提交时弹出编辑器不知道怎么退出

**场景：** `git pull` 或 `git commit` 时弹出了 Vim 编辑器。

**解决方案：**
| 操作 | 按键 |
|------|------|
| 保存并退出 | 按 `Esc`，然后输入 `:wq`，回车 |
| 不保存退出 | 按 `Esc`，然后输入 `:q!`，回车 |
| 直接写提交信息 | 按 `i` 进入编辑模式，写完后按 `Esc`，输入 `:wq` 回车 |

**避免弹出编辑器的方法：** 直接在命令中写提交信息
```bash
git commit -m "这里写提交说明"
```

---

### ❌ 报错6：大文件推送失败

**错误信息：**
```
error: RPC failed; HTTP 413 curl 56 GnuTLS recv error
```
或
```
fatal: The remote end hung up unexpectedly
```

**原因：** 文件太大（超过 100MB），GitHub 不允许推送。

**解决方案：**
```bash
# 查看哪些文件很大
git rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | sed -n 's/^blob //p' | sort --numeric-sort --key=2 | tail -10

# 从历史中移除大文件
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch 大文件路径' --prune-empty --tag-name-filter cat -- --all

# 强制推送
git push -f origin main
```

**预防：** 在 `.gitignore` 中排除大文件：
```
node_modules/
*.zip
*.rar
*.exe
```

---

## 六、GitHub Pages 部署相关

### 6.1 网站显示 404

**检查清单：**
1. 仓库是否为 **Public**（私有仓库无法用免费 GitHub Pages）
2. Settings → Pages → Source 是否选择了 **GitHub Actions**
3. Actions 页面中部署工作流是否**成功**（绿色对勾）
4. 等待 2-3 分钟后再刷新

### 6.2 网站显示的是 README 而不是项目首页

**原因：** VitePress 的 `base` 配置缺失或错误。

**解决方案：** 在 `docs/.vitepress/config.ts` 中添加：
```typescript
export default defineConfig({
  base: '/仓库名/',    // 例如 base: '/wyu-feiyue/'
  // ...其他配置
})
```

### 6.3 网站样式/图片加载不出来

**原因：** 静态资源路径没有加 base 前缀。

**解决方案：** 检查 config.ts 中的路径：
```typescript
head: [
  ['link', { rel: 'icon', href: '/仓库名/logo.svg' }],  // 不是 '/logo.svg'
],
themeConfig: {
  logo: '/仓库名/logo.svg',  // 不是 '/logo.svg'
}
```

---

## 七、分支与协作

### 7.1 创建分支并切换

```bash
# 创建并切换到新分支
git checkout -b feature/new-article

# 或者用新命令
git switch -c feature/new-article

# 查看所有分支
git branch

# 切换回 main 分支
git checkout main
```

### 7.2 合并分支

```bash
# 切换到 main
git checkout main

# 合并某个分支
git merge feature/new-article

# 推送
git push
```

### 7.3 删除分支

```bash
# 删除本地分支
git branch -d feature/new-article

# 删除远程分支
git push origin --delete feature/new-article
```

---

## 八、实用技巧

### 8.1 一行命令：添加 + 提交 + 推送

```bash
git add . && git commit -m "更新说明" && git push
```

### 8.2 修改上一次提交信息

```bash
git commit --amend -m "新的提交说明"
git push -f
```

### 8.3 查看某个文件的修改历史

```bash
git log --oneline 文件路径
```

### 8.4 暂存当前修改（临时切换分支）

```bash
git stash              # 暂存修改
git stash pop          # 恢复暂存
```

### 8.5 回退到某个版本

```bash
# 查看提交历史
git log --oneline

# 回退到指定版本（保留修改）
git reset --soft 提交ID前7位

# 回退到指定版本（丢弃修改，危险！）
git reset --hard 提交ID前7位
```

---

## 九、.gitignore 常用配置

在项目根目录创建 `.gitignore` 文件：

```gitignore
# 依赖
node_modules/

# 构建产物
docs/.vitepress/dist/
docs/.vitepress/cache/

# 系统文件
.DS_Store
Thumbs.db

# 编辑器
.vscode/
.idea/
*.swp
*.swo

# 临时文件
*.log
*.local
```

---

## 十、速查表

| 场景 | 命令 |
|------|------|
| 修改后推送 | `git add . && git commit -m "说明" && git push` |
| 查看状态 | `git status` |
| 查看日志 | `git log --oneline -10` |
| 撤销文件修改 | `git checkout -- 文件名` |
| 拉取更新 | `git pull` |
| 查看远程地址 | `git remote -v` |
| 修改远程地址 | `git remote set-url origin URL` |
| 取消代理 | `git config --global --unset http.proxy` |
| 强制推送 | `git push -f origin main` |
| 创建分支 | `git checkout -b 分支名` |
| 切换分支 | `git checkout 分支名` |
| 合并分支 | `git merge 分支名` |
| 暂存修改 | `git stash` |
| 恢复暂存 | `git stash pop` |
