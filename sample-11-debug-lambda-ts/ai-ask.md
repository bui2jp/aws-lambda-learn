
# 実現したいこと

vscode, wsl, ubuntu, aws lambda, aws sam cli, typescript を利用している
ブレークポイントを利用したデバッグを行いたい。

# 環境

```
s$ tree -L 3 
.
├── AWS_Toolkit_vscode_ext.png
├── README.md
├── ai-ask.md
├── events
│   └── event.json
├── samconfig.toml
├── src
│   ├── common
│   │   └── mylib.ts
│   └── hello-world
│       ├── app.ts
│       ├── dist # ここには npm run compile でコンパイルされたファイルが出力される
│       ├── jest.config.js
│       ├── jest.config.ts
│       ├── node_modules
│       ├── package-lock.json
│       ├── package.json
│       ├── tests
│       └── tsconfig.json
└── template.yaml

8 directories, 13 files
```
## 設定

template.yaml
```
  HelloWorldFunctionLocal:
    Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
    Properties:
      CodeUri: ./src/hello-world/dist/hello-world
      Handler: app.lambdaHandler
      Runtime: nodejs20.x
      Architectures:
        - x86_64
      Events:
        HelloWorld:
          Type: Api # More info about API Event Source: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#api
          Properties:
            Path: /hello
            Method: get
    Metadata: # Manage esbuild properties
      BuildMethod: esbuild
      BuildProperties:
        Minify: false
        Target: "es2020"
        Sourcemap: true
        EntryPoints: 
        - app.js
        Tsconfig: ../../tsconfig.json # tsconfig.json を指定
```

launch.json
```
    {
      "type": "aws-sam",
      "request": "direct-invoke",      
      "invokeTarget": {        
        "target": "template",
        "logicalId": "HelloWorldFunctionLocal",
        "templatePath": "/home/user01/aws-lambda-learn/sample-11-debug-lambda-ts/template.yaml"
      },
      "lambda": {
        "runtime": "nodejs20.x",
      },
      "sam": {        
        "containerBuild": false,
        "skipNewImageCheck": false
      },
      "api": {
        "httpMethod": "get"
      },
      "name": "test local"
    },
```
# 問題点

app.ts にブレークポイントを設定すると停止するが、ステップ実行するとずれる。
mylib.ts にブレークポイントを設定すると停止しない。
