# Local Debug Lambda

ローカルPCでLambdaをデバッグするためのサンプル。

## sample-06-debug-lambda (node 20, typescript)

### ディレクトリ構成
```
$ tree -L 2 
.
├── README.md
├── README.md.org
├── events
│   └── event.json
├── hello-world
│   ├── app.ts
│   ├── jest.config.ts
│   ├── package.json
│   ├── tests
│   └── tsconfig.json
├── samconfig.toml
└── template.yaml

4 directories, 9 files
```


aws lambda invoke --function-name HelloWorldFunction --payload file://events/event.json output.json


aws lambda list-functions | jq -r '.Functions[].FunctionName'

# lambdaの一覧を取得 (samで作成)

```bash
$ aws lambda list-functions | jq -r '.Functions[].FunctionName'
sample-06-debug-lambda-HelloWorld2Function-0sJ6eydsY59P
sample-06-debug-lambda-HelloWorldFunction-qEYfbr7c2Vls
```

helloWorld2の関数だけを更新したい場合

build
```
npx esbuild hello-world2/app.ts --bundle --platform=node --target=es2020 --outfile=hello-world2/dist/app.js
```

dist/app.jsをzip化してアップロード


aws lambda update-function-code --function-name hello-world2 --zip-file fileb://hello-world2/dist/app.js

```
aws lambda create-function --function-name hello-world2 --runtime nodejs20.x --role arn:aws:iam::YOUR_ACCOUNT_ID:role/YOUR_LAMBDA_ROLE --handler app.lambdaHandler --zip-file fileb://hello-world2/dist/app.js


aws lambda update-function-code --function-name sample-06-debug-lambda-HelloWorld2Function-0sJ6eydsY59P --zip-file fileb://hello-world2/dist/lambda.zip


```
sam build
sam deploy
```