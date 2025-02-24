# CDK (Cloud Development Kit)

https://docs.aws.amazon.com/ja_jp/cdk/v2/guide/hello_world.html

## 準備

'''bash
# CDKのインストール
npm install -g aws-cdk
# version確認
cdk --version
2.1000.2 (build bc82193)
'''

# CDKプロジェクトの作成

'''bash
cdk init app --language typescript
'''




```
# account idの確認
aws sts get-caller-identity --query "Account" --output text
# regionの確認
aws configure get region
```