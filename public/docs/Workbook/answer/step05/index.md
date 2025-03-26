## step04 までの復習

各Stepごとに答えを記載します。

<br>

### 01. チェックアウトしているブランチを確認

#### 答え｜ブランチ確認

```
% git branch
```

#### 実行結果｜ブランチ確認

```
  develop
* feature/create-components
  main
```

#### 答え｜ブランチをチェックアウト

※ feature/create-components をチェックアウトができていれば、この作業はスキップしてください。

```
% git checkout feature/create-components
```

#### 実行結果｜ブランチをチェックアウト

```
Switched to branch 'feature/create-components'
```

<br>

### 02. アプリ内容を更新 (貼り付け作業)

問題内容の通りにファイルを更新してください。

<br>

### 03. 作業ディレクトリの状態を確認

#### 答え

```
% git status
```

#### 実行結果

表示される内容は異なります。  
以下に似た実行結果が返ってきていれば、問題ありません。

```
On branch feature/create-components
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.tsx

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/components/InputForm/
        src/components/List/

no changes added to commit (use "git add" and/or "git commit -a")
```

<br>

### 04. ステージングエリアに追加

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
On branch feature/create-components
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   src/App.tsx
        new file:   src/components/InputForm/index.tsx
        new file:   src/components/List/index.tsx
```

<br>

### 06. メッセージ付きコミットを実行

#### 答え

```
% git commit -m "ここに任意のコミットメッセージを入力します"

(例)
% git commit -m "update: Todoアプリ"
```

#### 実行結果

表示される内容は異なります。  
以下に似た実行結果が返ってきていれば、問題ありません。

```
[feature/create-components 688828a] update: Todoアプリ
 3 files changed, 220 insertions(+), 179 deletions(-)
 rewrite src/App.tsx (89%)
 create mode 100644 src/components/InputForm/index.tsx
 create mode 100644 src/components/List/index.tsx
```

<br>

### 07. ステージングエリアの状態を確認

#### 答え

```
% git status
```

#### 実行結果

```
On branch feature/create-components
nothing to commit, working tree clean
```

<br>

### 08. リモートリポジトリにプッシュ

#### 答え

```
% git push origin feature/create-components
```

または

```
% git push origin HEAD
```

#### 実行結果

表示される内容は異なります。  
以下に似た実行結果が返ってきていれば、問題ありません。

```
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 4 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (9/9), 2.46 KiB | 2.46 MiB/s, done.
Total 9 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: 
remote: Create a pull request for 'feature/create-components' on GitHub by visiting:
remote:      https://github.com/toku-chan/ys-git-version-alpha/pull/new/feature/create-components
remote: 
To github.com:toku-chan/ys-git-version-alpha.git
 * [new branch]      feature/create-components -> feature/create-components
```

<br>

### 09. Open 状態でプルリクエストを作成

1. リポジトリの選択があるので、自身のリポジトリを選択してください。  
デフォルトでは、Fork 元のリポジトリが選択されています。  
**Fork したリポジトリ限定の作業になります。**

![change repository](/public/images/workbook/step05/answer/image01.png)

2. 比較対象のブランチを feature/create-components に変更してください。

![compose branch](/public/images/workbook/step05/answer/image02.png)

3. マージ先ブランチを develop ブランチに変更してください。

![base branch](/public/images/workbook/step05/answer/image03.png)

4. 画像赤枠の ▼ ボタンをクリックして、Create pull request をクリックしてください。

![Open で作成](/public/images/workbook/step05/answer/image04.png)

5. Create pull request ボタンをクリックして、プルリクエストを作成します。

![Open で作成](/public/images/workbook/step05/answer/image05.png)

6. 画像赤枠の箇所で、プルリクエストが Open 状態であることを確認できます。

![Open 状態の確認](/public/images/workbook/step05/answer/image06.png)

<br>

### 10. マージ

1. プルリクエストをマージするには、画像赤枠の Merge pull request ボタンをクリックしてください。

![Merge pull request](/public/images/workbook/step05/answer/image07.png)

2. 次に Confirm merge ボタンをクリックしてください。

![Confirm merge](/public/images/workbook/step05/answer/image08.png)

3. マージが完了後、画像赤枠部分の表示がされていれば、マージが完了しています。

![正常に Merge されている](/public/images/workbook/step05/answer/image09.png)

<br>

### 11. マージして不要になったリモートブランチを削除する

1. マージ後、不要ブランチを削除するには、Delete branch ボタンをクリックしてください。

![Delete branch](/public/images/workbook/step05/answer/image10.png)

2. 画像赤枠部分の表示がされていれば、リモートのブランチは正常に削除されています。

![ブランチを消したことのメッセージ](/public/images/workbook/step05/answer/image11.png)

<br>

### 12. 最新のリモートリポジトリをローカルリポジトリに取り込む

以下の手順で進めます。  
1. develop ブランチをチェックアウトする
2. 履歴を更新にする
3. 最新のコードを取り込む

#### 答え｜develop ブランチをチェックアウトする

```
% git checkout develop
```

#### 実行結果｜develop ブランチをチェックアウトする

```
Switched to branch 'develop'
Your branch is behind 'origin/develop' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
```

#### 答え｜履歴を更新する

```
% git fetch --prune
```

#### 実行結果｜履歴を更新する

```
From github.com:toku-chan/ys-git-version-alpha
 - [deleted]         (none)     -> origin/feature/create-components
```

#### 答え｜最新のコードを取り込む

```
% git pull origin develop
```

#### 実行結果｜最新のコードを取り込む

表示される内容は異なります。  
以下に似た実行結果が返ってきていれば、問題ありません。

```
From github.com:toku-chan/ys-git-version-alpha
 * branch            develop    -> FETCH_HEAD
Updating 68f86c7..9442998
Fast-forward
 src/App.tsx                        | 162 +++++-------------------------------------------------------------------------------------------------------------
 src/components/InputForm/index.tsx |  75 +++++++++++++++++++++++++++++++++++++++++++++++++++++
 src/components/List/index.tsx      | 114 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 3 files changed, 196 insertions(+), 155 deletions(-)
 create mode 100644 src/components/InputForm/index.tsx
 create mode 100644 src/components/List/index.tsx
```

<br>

### 13. ローカルリポジトリで不要になったブランチを削除

#### 答え

```
% git branch -D feature/create-components
```

#### 実行結果

```
Deleted branch feature/create-components (was 688828a).
```

<br>

## 練習問題

[練習問題 - step04 までの復習](/public/docs/Workbook/practice/step05/index.md) へ戻る
