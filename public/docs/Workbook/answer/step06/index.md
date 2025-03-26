## コンフリクトの解消

各Stepごとに答えを記載します。

<br>

### 01. プルリクエストを作成

過去にも行なった手順のため、詳細は割愛します。  
詳細を確認したい場合は [step03](/public/docs/Workbook/answer/step03/index.md) を確認してください。

作業は以下のようになります。

1. Pull requests タブを選択する
2. New pull request をクリック
3. リポジトリは、自身のリポジトリに変更する
4. 比較対象ブランチに feature/use-json-server を選択する
5. マージ先ブランチに develop を選択する
6. base: develop ← compare: feature/use-json-server という状態にできたら、Create pull request をクリック。

![プルリクエスト作成](/public/images/workbook/step06/answer/image01.png)

7. タイトル・説明を入力する
8. Create pull request をクリックして、プルリクエストを作成する

<br>

### 02. コンフリクトが起きていることを Github で確認

プルリクエストページ下部に、画像赤枠の表示があればコンフリクトが発生していることが確認できます。

![コンフリクトを確認](/public/images/workbook/step06/answer/image02.png)

### 03. ローカル環境でコンフリクトを解消する

1. コンフリクトを確認  
前回確認したところを再度確認します。

2. command line をクリック  
画像赤枠箇所をクリックします。

![コンフリクトを確認](/public/images/workbook/step06/answer/image03.png)

3. 手順に従ってコンフリクトを解消する

![command line](/public/images/workbook/step06/answer/image04.png)

#### develop ブランチをチェックアウトしていることを確認

##### 答え

```
% git branch
```

##### 実行結果

```
* develop
  main
```

#### develop ブランチをチェックアウトする

**develop ブランチをチェックアウトしていない場合のみ作業をしてください。**

##### 答え

```
% git checkout develop
```

##### 実行結果

```
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
```

#### develop を pull する

前回の時点で develop ブランチを最新にしているので、特に必要はないですが、手順通り進めます。
**コンフリクトを解消する際は、念の為毎回ブランチの最新化をしてから進めていくのが良いです。**

##### 答え

```
% git pull origin develop
```

##### 実行結果

```
From github.com:toku-chan/ys-git-version-alpha
 * branch            develop    -> FETCH_HEAD
Already up to date.
```

#### feature/use-json-server をチェックアウトする

##### 答え

```
% git checkout feature/use-json-server
```

##### 実行結果

```
branch 'feature/use-json-server' set up to track 'origin/feature/use-json-server'.
Switched to a new branch 'feature/use-json-server'
```

#### develop を feature/use-json-server にマージする

##### 答え

```
% git merge develop
```

##### 実行結果

```
Auto-merging src/App.tsx
CONFLICT (content): Merge conflict in src/App.tsx
Auto-merging src/components/InputForm/index.tsx
CONFLICT (add/add): Merge conflict in src/components/InputForm/index.tsx
Auto-merging src/components/List/index.tsx
CONFLICT (add/add): Merge conflict in src/components/List/index.tsx
Automatic merge failed; fix conflicts and then commit the result.
```

#### コンフリクトが起きているファイルを開き、コンフリクトを解消する

上記ログにコンフリクトが起きているファイルが書かれています。今回は以下の3ファイルになります。

- src/App.tsx
- src/components/InputForm/index.tsx
- src/components/List/index.tsx

今回は src/App.tsx を例に進めます。他ファイルも例を参考に直してみてください。

src/App.tsx を開くと画像のようになっている箇所があります。

HEAD と書かれている緑色の部分は feature/use-json-server ブランチで修正したコードです。

![conflict HEAD](/public/images/workbook/step06/answer/image05.png)

develop と書かれている青色部分は、merge コマンドで取り込んだ develop ブランチのコードになります。

![conflict develop](/public/images/workbook/step06/answer/image06.png)

この差分の見方が把握しづらい場合は、「変更を比較」を選択することで見やすくなります。

![check different](/public/images/workbook/step06/answer/image07.png)
![check different](/public/images/workbook/step06/answer/image08.png)

今回は feature/use-json-server を取り込みたいので、HEAD の内容を取り込みます。  
画像では HEAD の横に「(現在の変更)」と表示されています。その文言に従い、「現在の変更を取り込む」を選択してください。

![select current change](/public/images/workbook/step06/answer/image09.png)

「現在の変更を取り込む」を選択すると、画像のように自動で「(現在の変更)」箇所が残されます。

![resolve conflict](/public/images/workbook/step06/answer/image10.png)

他の差分も同じようにコードを確認して解消してください。

**※ src/App.tsx で import している path にエラーが残っているので、再度 import しなおしてください。エラーが消えると思います。**

<br>

### 04. コミット

**全てのコンフリクトを解消してから進めてください**

<br>

#### 作業ディレクトリの状態を確認

##### 答え

```
% git status
```

##### 実行結果

```
On branch feature/use-json-server
Your branch is up to date with 'origin/feature/use-json-server'.

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:
        modified:   public/docs/Workbook/answer/README.md
        modified:   public/docs/Workbook/practice/README.md
        modified:   public/docs/Workbook/practice/step01/index.md
        modified:   public/docs/Workbook/practice/step02/index.md
        modified:   public/docs/Workbook/practice/step03/index.md
        modified:   public/docs/Workbook/practice/step04/index.md
        modified:   public/docs/Workbook/practice/step06/index.md

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   src/App.tsx
        both added:      src/components/InputForm/index.tsx
        both added:      src/components/List/index.tsx
```

#### ステージングエリアに追加

#### 答え

```
% git add .
```

##### 実行結果

実行しても何もログは表示されません。

#### ステージングエリアの状態を確認

##### 答え

```
% git status
```

##### 実行結果

```
On branch feature/use-json-server
Your branch is up to date with 'origin/feature/use-json-server'.

All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   public/docs/Workbook/answer/README.md
        modified:   public/docs/Workbook/practice/README.md
        modified:   public/docs/Workbook/practice/step01/index.md
        modified:   public/docs/Workbook/practice/step02/index.md
        modified:   public/docs/Workbook/practice/step03/index.md
        modified:   public/docs/Workbook/practice/step04/index.md
        modified:   public/docs/Workbook/practice/step06/index.md
```

#### 自動で作成されたメッセージでコミットする

##### 答え

```
% git commit
```

##### 実行結果

```
Merge branch 'develop' into feature/use-json-server

# Conflicts:
#       src/App.tsx
#       src/components/InputForm/index.tsx
#       src/components/List/index.tsx
#
# It looks like you may be committing a merge.
# If this is not correct, please run
#       git update-ref -d MERGE_HEAD
# and try again.


# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch feature/use-json-server
# Your branch is up to date with 'origin/feature/use-json-server'.
#
# All conflicts fixed but you are still merging.
#
# Changes to be committed:
#       modified:   public/docs/Workbook/answer/README.md
#       modified:   public/docs/Workbook/practice/README.md
#       modified:   public/docs/Workbook/practice/step01/index.md
#       modified:   public/docs/Workbook/practice/step02/index.md
#       modified:   public/docs/Workbook/practice/step03/index.md
#       modified:   public/docs/Workbook/practice/step04/index.md
#       modified:   public/docs/Workbook/practice/step06/index.md
#
```

#### vim コマンド

コミットした時に、ターミナルに上記のメッセージが作成されます。  
このメッセージを完了するには、以下の vim コマンドを利用します。

##### 答え

**以下のコマンドを実行する前に、escape ボタンをクリックしてください。**

```
:wq
```

上記コマンドは「**保存して終了**」という意味になります。  
コマンドを実行して、以下のメッセージが返ってきたら成功しています。

```
[feature/use-json-server a6caad6] Merge branch 'develop' into feature/use-json-server
```

#### ステージングエリアの状態を確認

##### 答え

```
% git status
```

##### 実行結果

```
On branch feature/use-json-server
Your branch is ahead of 'origin/feature/use-json-server' by 7 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

<br>

### 05. プッシュ

#### 答え

```
% git push origin feature/use-json-server
```

または

```
% git push origin HEAD
```

#### 実行結果

```
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 316 bytes | 316.00 KiB/s, done.
Total 2 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:toku-chan/ys-git-version-alpha.git
   5197d44..a6caad6  HEAD -> feature/use-json-server
```

Github でプルリクエストを確認した時に、画像赤枠のようになっていれば、コンフリクトは無事解消されています。

![resolve conflict](/public/images/workbook/step06/answer/image11.png)

<br>

### step. 06 ~ 09

こちらは今まで行ってきた操作と同じになるため、割愛します。  
もう一度確認したい場合は [09. Open 状態でプルリクエストを作成](/public/docs/Workbook/answer/step05/index.md#09-open-状態でプルリクエストを作成) から先をご確認ください。

<br>

## 練習問題

[練習問題 - コンフリクトの解消](/public/docs/Workbook/practice/step06/index.md) へ戻る
