# workspace-sample

このリポジトリは、Githubワークスペースを使用して適切な設計方法を調査するためのサンプルアプリケーションです。ウェブサイトは「Hello World」メッセージを表示し、Firebase Hostingにデプロイ可能です。

## Firebase Hostingへのデプロイ

このウェブサイトをFirebase Hostingにデプロイするには、以下の手順に従ってください：

1. `npm install -g firebase-tools`を実行してFirebase CLIをインストールします。
2. プロジェクトディレクトリで`firebase init`を実行してFirebaseを初期化します。プロンプトが表示されたら「Hosting」を選択し、`index.html`を含む公開ディレクトリを指定してください。
3. `firebase deploy`を実行してウェブサイトをデプロイします。

これらの手順に従うことで、「Hello World」ウェブサイトをFirebase Hostingを通じて実行し、アクセス可能になります。

## GithubActionを使用したデプロイ手順

GithubActionを使用してデプロイするには、以下の手順に従ってください：

1. `.github/workflows/firebase-hosting-merge.yml`と`.github/workflows/firebase-hosting-pull-request.yml`の設定を確認します。
2. GitHubリポジトリの設定に移動し、`Secrets`セクションで必要なシークレットを設定します。これには、`GITHUB_TOKEN`と`FIREBASE_SERVICE_ACCOUNT_WORKSPACE_SAMPLE_E74B2`が含まれます。
3. マスターブランチにマージすることで自動的にデプロイがトリガーされます（`firebase-hosting-merge.yml`を参照）。また、プルリクエストが作成されると、プレビューデプロイがトリガーされます（`firebase-hosting-pull-request.yml`を参照）。

これらの手順に従うことで、GithubActionを使用してFirebase Hostingにデプロイすることができます。
