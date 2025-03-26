## 環境構築

### git-training フォルダを作成する

デスクトップに `git-training` フォルダを作成してください。

### ys-git-version-alpha を Clone する

1. VScode で先ほど作成した git-training フォルダを開いてください。

![VScode で git-training フォルダを開いている状態](/public/images/envBuild/image01.png)

<br>

2. Github で先ほど Fork したリポジトリを Clone するための SSH URL をコピーします。

![Github で Clone するための準備](/public/images/envBuild/image02.png)

<br>

3. VScode のターミナルで、 `git clone` を実行します。

```
% git clone [コピーした SSH URL を貼り付け]
```

![git clone コマンド](/public/images/envBuild/image03.png)

<br>

4. Clone 処理が完了すると、 ys-git-version-alpha のフォルダが作られて、コマンドの結果は画像赤枠のようになっていると思います。

![実行結果](/public/images/envBuild/image04.png)

### ライブラリのインストールをする

#### ys-git-version-alpha のフォルダを開く

方法はなんでも良いです。  

1. cd コマンドで切り替える  
※ 現在開いているフォルダが git-training と想定

```
% cd ys-git-version-alpha
```

![cd コマンド](/public/images/envBuild/image05.png)

2. VScode でフォルダを切り替える (推奨)  
ファイル > フォルダーを開く から ys-git-version-alpha を選択してください。

![フォルダを開く](/public/images/envBuild/image06.png)

#### npm install を実行

ターミナルで ys-git-version-alpha が開かれている状態で、ライブラリをインストールし、node_modules を作成します。

```
% npm install
```

![npm install](/public/images/envBuild/image07.png)

#### ローカル環境が立ち上がることを確認

正常にインストールができていれば、以下のコマンドを実行すると画像のような状態になります。

```
% npm run dev
```

![npm run dev](/public/images/envBuild/image08.png)

青文字のURLを command + クリック でブラウザを起動してください。  
※ mac 向けです。URLにホバーするとツールチップが出てくると思います。それに従い、操作をしてください。

### 終わり

ローカル環境でブラウザの起動が確認できたら、環境構築完了です。
