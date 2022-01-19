# 互联寺

访问地址： https://internet-temple.std4453.com

## 开发

安装依赖：

```bash
yarn
```

本地开启服务器：

```bash
yarn start
```

编译：

```bash
yarn build
```

现在配置了 Github Actions，在 push 到 master 的时候自动编译代码，并发布到 Github Pages。

此外，目前使用了腾讯云 COS 上传并转换静态图片资源，并开启 CDN 全球加速，之后可能会取消，只使用 Github Pages。

## 作者

- Haichuan Zhang - [me@std4453.com](mailto:me@std4453.com)
