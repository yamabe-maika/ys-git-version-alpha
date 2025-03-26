## Github でプルリクエストの作成・マージ

各Stepごとに答えを記載します。

<br>

### 01. プルリクエスト作成画面を開く

1. Github で Fork したリポジトリを開いてください。
2. 開けたら、Pull requests タブを選択してください。 (画像赤枠)

![Pull requests](/public/images/workbook/step03/answer/image01.png)

3. New pull request ボタンをクリックしてください。(画像赤枠)

![New pull request](/public/images/workbook/step03/answer/image02.png)

<br>

### 02. プルリクエストを作成する

#### マージ先を変更

1. 対象のリポジトリを、自身のリポジトリに切り替えてください。  
デフォルトでは、Fork 元のリポジトリが選択されています。  
**Fork したリポジトリ限定の作業になります。**

![change repository](/public/images/workbook/step03/answer/image03.png)

2. 比較対象のブランチを feature/create-todo-app に変更してください。

![compose branch](/public/images/workbook/step03/answer/image04.png)

3. マージ先のブランチを develop に変更してください。

![base branch](/public/images/workbook/step03/answer/image05.png)

4. ① が比較したときのコード差分になります。  
前のstep で src/App.tsx だけの変更したので、それ以外に差分がなければ、② Create pull request ボタンをクリックしてください。

![base branch](/public/images/workbook/step03/answer/image06.png)

#### 実装の内容を記載する

画像赤枠の部分を埋めてください。

![title, description](/public/images/workbook/step03/answer/image07.png)

#### Draft 状態で作成

1. 画像赤枠の ▼ ボタンをクリックして、Create draft pull request をクリックしてください。

![Draft で作成](/public/images/workbook/step03/answer/image08.png)

2. Draft pull request ボタンをクリックして、プルリクエストを作成します。

![Draft 状態を確認](/public/images/workbook/step03/answer/image09.png)

3. 画像赤枠の箇所で、プルリクエストが Draft 状態であることを確認できます。

![Draft 状態の確認](/public/images/workbook/step03/answer/image10.png)

<br>

### 03. プルリクエストを Open 状態にする

1. Draft から Open に切り替えるには、Ready for review ボタンをクリックしてください。

![Draft 状態の確認](/public/images/workbook/step03/answer/image11.png)

2. 画像赤枠部分の表示がされていれば、Open 状態にプルリクエストが変更したことが確認できます。

![Draft から Open](/public/images/workbook/step03/answer/image12.png)

<br>

### 04. マージ

1. プルリクエストをマージするには、画像赤枠の Merge pull request ボタンをクリックしてください。

![Merge pull request](/public/images/workbook/step03/answer/image13.png)

2. 次に Confirm merge ボタンをクリックしてください。

![Confirm merge](/public/images/workbook/step03/answer/image14.png)

3. マージが完了後、画像赤枠部分の表示がされていれば、マージが完了しています。

![正常に Merge されている](/public/images/workbook/step03/answer/image15.png)

<br>

### 05. マージして不要になったリモートブランチを削除する

1. マージ後、不要ブランチを削除するには、Delete branch ボタンをクリックしてください。

![Delete branch](/public/images/workbook/step03/answer/image16.png)

2. 画像赤枠部分の表示がされていれば、リモートのブランチは正常に削除されています。

![ブランチを消したことのメッセージ](/public/images/workbook/step03/answer/image17.png)

<br>

## 練習問題

[練習問題 - Github でプルリクエストの作成・マージ](/public/docs/Workbook/practice/step03/index.md) へ戻る
