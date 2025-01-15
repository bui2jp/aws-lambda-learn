# aws-lambda-learn

aws lambda 関数の作成の基礎

cli, typescript, vscode
[参考](https://qiita.com/zukakosan/items/9c01aba5ff537382c856)

必要なもの

- vscode
- aws cli,
- aws sam cli
- docker

## AWS Cli

```
aws --version
aws-cli/2.22.23 Python/3.12.6 Linux/5.15.167.4-microsoft-standard-WSL2 exe/x86_64.ubuntu.20
```

## AWS SAM (Serverless Application Model) Cli

サーバーレスアプリケーションの開発とデプロイを支援するためのフレームワークです。AWS SAM は、CloudFormation の拡張機能として提供されており、サーバーレスアプリケーションの構築を簡素化します。

```
$ sam --version
SAM CLI, version 1.132.0
```

## AWS Toolkit for VSCode

vscode の拡張

# sam init

node22 (zip) + js

```
sam init \
  --name sample-01-node22-zip \
  --package-type Zip \
  --runtime nodejs22.x \
  --app-template hello-world \
  --no-application-insights \
  --no-tracing \
  --structured-logging
```

node22 (Zip) + ts

```
sam init \
  --name sample-02-node22-zip-ts \
  --package-type Zip \
  --runtime nodejs22.x \
  --app-template hello-world-typescript \
  --no-application-insights \
  --no-tracing \
  --structured-logging
```

node22 (docker image) + js

```
sam init \
  --name sample-03-node22-image \
  --package-type Image \
  --base-image amazon/nodejs22.x-base \
  --app-template hello-world-lambda-image \
  --no-application-insights \
  --no-tracing
```

python 3.13 (zip)

```
sam init \
  --name sample-04-python313-zip \
  --package-type Zip \
  --runtime python3.13 \
  --app-template hello-world \
  --no-application-insights \
  --no-tracing \
  --structured-logging
```

python 3.13 (docker image)

```
sam init \
  --name sample-05-python313-image \
  --package-type Image \
  --base-image amazon/python3.13-base \
  --app-template hello-world-lambda-image \
  --no-application-insights \
  --no-tracing
```

```
sam build, sam deploy, sam local invoke, sam logs, sam delete
```

# aws sam と CloudFormation

aws sam は CloudFormation の拡張機能として提供されている

terraform も利用可能だが、マルチクラウドの要件がないのであれば CloudFormation がおすすめ
