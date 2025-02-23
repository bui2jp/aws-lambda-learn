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

