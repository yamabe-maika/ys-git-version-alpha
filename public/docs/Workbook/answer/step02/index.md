## コミット・プッシュ

各Stepごとに答えを記載します。

<br>

### 01. 現在のブランチを確認・チェックアウト

#### 答え

```
% git branch
```

#### 実行結果

```
  develop
  feature/create-components
* feature/create-todo-app
  main
```

feature/create-todo-app をチェックアウトしていない場合は以下のコマンドを実行してください。

#### 答え

```
% git checkout feature/create-todo-app
```

#### 実行結果

```
Switched to branch 'feature/create-todo-app'
```

<br>

### 02. アプリ作成 (貼り付け作業)

問題内容の通りにファイルを更新してください。

<br>

### 03. 作業ディレクトリの状態を確認

#### 答え

```
% git status
```

#### 実行結果

```
On branch feature/create-todo-app
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.tsx

no changes added to commit (use "git add" and/or "git commit -a")
```

<br>

### 04. ステージングエリアに追加

以下のコマンドは色々なオプションが存在します。  
全てを紹介するとキリがないので、全てのファイルをステージングエリアに追加する方法のみ紹介します。  
他の方法を確認したい場合は、「git add オプション」と調べてみてください。

#### 答え

```
% git add .
```

#### 実行結果

実行しても何もログは表示されません。

<br>

### 05. ステージングエリアの状態を確認

#### 答え

```
% git status
```

#### 実行結果

```
On branch feature/create-todo-app
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   src/App.tsx
```

<br>

### 06. メッセージ付きコミットを実行

#### 答え

```
% git commit -m "ここに任意のコミットメッセージを入力します"

(例)
% git commit -m "feat: Todoアプリ"
```

#### 実行結果

表示される内容は異なります。  
以下に似た実行結果が返ってきていれば、問題ありません。

```
[feature/create-todo-app a64c858] feat: Todoアプリ
 1 file changed, 179 insertions(+), 10 deletions(-)
 rewrite src/App.tsx (76%)
```

<br>

### 07. ステージングエリアの状態を確認

#### 答え

```
% git status
```

#### 実行結果

```
On branch feature/create-todo-app
nothing to commit, working tree clean
```

<br>

### 08. リモートリポジトリにプッシュ

#### 答え

```
% git push origin feature/create-todo-app
```

または

```
git push origin HEAD
```

#### 実行結果

表示される内容は異なります。  
以下に似た実行結果が返ってきていれば、問題ありません。

```
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 1.63 KiB | 1.63 MiB/s, done.
Total 4 (delta 2), reused 1 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: 
remote: Create a pull request for 'feature/create-todo-app' on GitHub by visiting:
remote:      https://github.com/toku-chan/ys-git-version-alpha/pull/new/feature/create-todo-app
remote: 
To github.com:toku-chan/ys-git-version-alpha.git
 * [new branch]      feature/create-todo-app -> feature/create-todo-app
```

<br>

## 練習問題

[練習問題 - コミット・プッシュ](/public/docs/Workbook/practice/step02/index.md) へ戻る
