## 最新の変更を取り込む

各Stepごとに答えを記載します。

<br>

### 01. ブランチをチェックアウト

#### 答え

```
% git checkout develop
```

#### 実行結果

```
Switched to branch 'develop'
Your branch is behind 'origin/develop' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
```

<br>

### 02. ローカルリポジトリで不要になったブランチを削除

#### 答え｜ブランチ削除

```
% git branch -D feature/create-todo-app
```

#### 実行結果｜ブランチ削除

表示される内容は異なります。  
以下に似た実行結果が返ってきていれば、問題ありません。

```
Deleted branch feature/create-todo-app (was a64c858).
```

#### 答え｜ブランチ確認

```
% git branch
```

#### 実行結果｜ブランチ確認

```
* develop
  feature/create-components
  main
```

<br>

### 03. 履歴の更新

### 答え

```
% git fetch --prune
```

#### 実行結果

```
From github.com:toku-chan/ys-git-version-alpha
 - [deleted]         (none)     -> origin/feature/create-todo-app
```

<br>

### 04. 最新のコードを取り込み

#### 答え

```
% git pull origin develop
```

#### 実行結果

表示される内容は異なります。  
以下に似た実行結果が返ってきていれば、問題ありません。

```
From github.com:toku-chan/ys-git-version-alpha
 * branch            develop    -> FETCH_HEAD
Updating 334dea2..68f86c7
Fast-forward
 src/App.tsx | 177 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----
 1 file changed, 173 insertions(+), 4 deletions(-)
```

<br>

### 05. 作業ブランチにチェックアウトする

#### 答え

```
% git checkout feature/create-components
```

#### 実行結果

```
Switched to branch 'feature/create-components'
```

<br>

### 06. ローカルリポジトリ内で作業ブランチを最新化する

方法はいくつかありますが、ここでは rebase を紹介します。

#### 答え

```
% git rebase develop
```

#### 実行結果

```
Successfully rebased and updated refs/heads/feature/create-components.
```

<br>

## 練習問題

[練習問題 - 最新の変更を取り込む](/public/docs/Workbook/practice/step04/index.md) へ戻る
