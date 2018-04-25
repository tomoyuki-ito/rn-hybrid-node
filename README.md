# rn-hybrid-node

ネイティブコードとReactNativeコードを合わせたハイブリッドアプリについての動作検証用サンプル。  
本リポジトリ内でReactNativeのコードを管理し、[ios](https://github.com/tomoyuki-ito/rn-hybrid-ios)、[andorid](https://github.com/tomoyuki-ito/rn-hybrid-android)のコードはsubmoduleとして分割して管理する運用方法についても検証している。

## セットアップ

### node
```
git clone git@github.com:tomoyuki-ito/rn-hybrid-node.git
git submodule update --init
yarn install
```
`yarn start`でbundle.jsの配信サーバが立ち上がる

### ios
```
cd ios
pod install
open rn-hybrid-ios.xcworkspace
```
XcodeからRunする  
ただし、依存関係のエラーが出るので手動で修正
```
// RCTReconnectingWebSocket.h

// 14行目
// #import <fishhook/fishhook.h>  // 誤
#import "fishhook.h"              // 正
```

### android
`android/build.gradle`からAndroid Studioを開き、Runする

## 既存アプリにReactNativeを導入する手順について
公式サイトの導入手順[Integration with Existing Apps](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html)のまとめを記載します

### node
- ReactNative開発のためのディレクトリを用意する
- package.jsonを作成する [公式を参照](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html#2-install-javascript-dependencies)
- ReactNativeに必要なパッケージをインストールする
```
yarn add react-native@0.51.0
yarn add react@16.0.0
```
- index.jsを作成[公式を参照](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html#the-react-native-component)

### ios
- Podfileを作成する [公式を参照](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html#configuring-cocoapods-dependencies)
- RCTRootViewを使ってReactNativeのコンポーネントを呼び出す [公式を参照](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html#the-magic-rctrootview)
- Info.plistを編集し、http通信を許可する [公式を参照](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html#test-your-integration)

### android
※ 解説できるまで理解してないので公式ドキュメントの確認をお願いします。
- app内のbuild.gradleを編集する
- rootのbuild.gradleを編集する
- AndroidManifest.xmlを編集する
- MainActivityを編集する
- ReactRootViewを実装したActivityクラスを作成する

### 参考サイト
[React Nativeハイブリッドアプリケーション開発ことはじめ](http://tomoima525.hatenablog.com/entry/2017/12/19/180523)  
[tomoima525/react-native-hybrid-app](https://github.com/tomoima525/react-native-hybrid-app)  
