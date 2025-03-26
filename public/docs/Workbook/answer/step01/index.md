## ブランチ作成・ブランチ切り替え

各Stepごとに答えを記載します。

<br>

### 01. 現在のブランチを確認

#### 答え

```
% git branch
```

#### 実行結果

```
* main
```

<br>

### 02. 指定のブランチをチェックアウト

#### 答え

```
% git checkout develop
```

#### 実行結果

```
branch 'develop' set up to track 'origin/develop'.
Switched to a new branch 'develop'
```

<br>

### 03. 新規ブランチを作成

#### 答え

```
% git branch feature/create-components
```

#### 実行結果

実行しても何もログは表示されません。

<br>

### 04. 新規ブランチが作成されたことを確認

#### 答え

```
% git branch
```

#### 実行結果

```
* develop
  feature/create-components
  main
```

<br>

### 05. 新規ブランチ作成しながら、チェックアウトする

#### 答え

```
% git checkout -b feature/create-todo-app
```

#### 実行結果

```
Switched to a new branch 'feature/create-todo-app'
```

<br>

### 06. 新規ブランチが作成・チェックアウトができていることを確認

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

<br>

## 練習問題

[練習問題 - ブランチ作成・ブランチ切り替え](/public/docs/Workbook/practice/step01/index.md) へ戻る
