


bl.orck.orgにreactのプロジェクトを気軽にアップできるツールが欲しかったので、blockupを少しカスタマイズさせてもらってreactをビルドするのに必要なモジュールを追加した。


# 参照元

https://github.com/gabrielflorit/blockup



# インストール＆アンインストール

インストール
```
$ git clone git@github.com:shimizu/blockup-react.git
$ sudo npm install -g ./blockup-react
```

アンインストール
```
$ sudo npm remove -g blockup-react
```

# 使い方

プロジェクトの新規作成
```
$ mkdir example
$ cd example
$ blockup-react new
```

開発
```
$ npm install 
$ blockup-react server
```

