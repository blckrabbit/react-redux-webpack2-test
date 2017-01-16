#### 基于webpack2构建的react-redux框架

==========================================

email：点击<a href="mailto:1130216245@qq.com">1130216245@qq.com</a>发邮件给我 ，想要交流的可以加qq。 

我的简历：https://hyy1115.github.io/huangyongyue/  （可以查看本框架上线产品）  

2017-1-15发布：  

1、本项目基于另外一个我开源的另外一个react框架演变而来，webpack1升级到了webpack2

2、react-router更新到了4.0.0，采用全新的路由方式。[react-router@4.0.0教程](https://react-router.now.sh/)

3、react、react-redux、react-dom全面升级
```
"react": "^16.0.0-alpha",
"react-dom": "^16.0.0-alpha",
"react-redux": "^4.4.0",
```

=========================

该项目包含了开发阶段的调试，代码检查，开发效率，实时更新，state存储模式，异步模式，组件结构的管理，打包部署到服务器。

 ![image](https://github.com/hyy1115/react-redux-webpack/blob/master/public/index.png)
==========================

####Installation教程
1, 方法 1: 下载源代码到本地  

2, 方法 2: 或者本地运行shell命令  
```
 git clone https://github.com/hyy1115/react-redux-webpack2.git
 
```
 
3, 安装依赖包，已经解决了一些依赖包安装最新版可能出现的bug，如果还有问题，可以看相关社区的issue。
```
npm install 或者cnpm install
```

4, 运行demo,将会开启3022端口
   ```
    npm start
   ```

5, 打包
```
mac: npm run build

windows: npm run build-win

```
6、router4写法  
```
export default (
    <HashRouter>
        <App>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/search" component={Search} />
                    {/*在这里添加你的Route*/}
        </App>
    </HashRouter>

```

==================================================

####Finally, JavaScript is the world's best language, if demand, you can directly send me an email  
