# Sample 09 - Debug Lambda ステップスルーデバッグ

vscode extention をインストール

![vscode extention](./AWS_Toolkit_vscode_ext.png)


「プロジェクトを作成してローカル実行でアタッチする方法」と「aws toolkitから起動する方法」

## アタッチする方法

```bash
sam local invoke -d 5858 HelloWorldFunction
```

## aws toolkitから起動

* vscodeのデバッグメニューから「Run」と同様。


## typescript でデバッグする場合の注意点

★の箇所を確認・修正する

launch.json
```json
{
  "configurations": [
    {
      "type": "aws-sam",
      "request": "direct-invoke",
      "name": "typescript:HelloWorld",
      "invokeTarget": {
          "target": "template",
          //★ デバッグ対象のsamのtemplate.yamlを指定
          "templatePath": "${workspaceFolder}/sample-09-debug-lambda/template.yaml",
          "logicalId": "HelloWorldFunction"
      },
      "lambda": {
          "runtime": "nodejs20.x",
          "payload": {},
          "environmentVariables": {},
          "pathMappings": [
            {
                //★ tsc(npm run compile)で作成したmapファイルの出力先を指定
                "localRoot": "${workspaceFolder}/sample-09-debug-lambda/hello-world/dist",
                "remoteRoot": "/var/task"
            }
        ]
      },
      "sam": {
        "containerBuild": false,
        "skipNewImageCheck": false
      },
    },
:    
```

template.yaml
```yaml
Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function # More info about Function Resource: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction
    Properties:
      CodeUri: hello-world
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
        //★ tsconfig.jsonを指定
        Minify: false
        Target: "es2020"
        //★ tsconfig.jsonを指定        
        Sourcemap: true ★
        EntryPoints: 
        - app.ts
```

hello-world/tsconfig.json
```json
{
    "compilerOptions": {
      "target": "es2020",
      "strict": true,
      "preserveConstEnums": true,
      //★ mapファイルを出力する
      "noEmit": false,
      //★ mapファイルを出力する      
      "sourceMap": true,
      //★ mapファイルを出力する      
      "outDir": "./dist",
      "module":"es2015",
      "moduleResolution":"node",
      "esModuleInterop": true, 
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true,  
    },
    "exclude": ["node_modules", "jest*", "**/*.test.ts"]
}

```

関数多くなるとメンテナンスが大変かな。
