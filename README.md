#### 基于webpack2构建的react-redux框架(Based on webpack2 build react-redux framework)  

==========================================

可以查看本框架上线产品(You can view the on-line products in this framework)：https://hyy1115.github.io/huangyongyue/   

2017-1-15发布(2017-1-15 Release)：  

1、本项目基于另外一个我开源的另外一个react框架演变而来，webpack1升级到了webpack2(the project is based on another open source I react a framework evolved from another, webpack1 upgrade to the webpack2)

2、react-router更新到了4.0.0，采用全新的路由方式。[react-router@4.0.0教程](https://react-router.now.sh/)(react-router updated to 4.0.0, using a new routing. [React-router@4.0.0 Tutorial] (https://react-router.now.sh/))

3、react、react-redux、react-dom全面升级(react、react-redux、react-dom comprehensive upgrade)
```
"react": "^16.0.0-alpha",
"react-dom": "^16.0.0-alpha",
"react-redux": "^4.4.0",
```

=========================

该项目包含了开发阶段的调试，代码检查，开发效率，实时更新，state存储模式，异步模式，组件结构的管理，打包部署到服务器。(The project includes development phase debugging, code checking, development efficiency, real-time updates, state storage mode, asynchronous mode, component structure management, and package deployment to the server.
)

 ![image](https://github.com/hyy1115/react-redux-webpack/blob/master/public/index.png)
==========================

####Installation教程
1, 方法(Method) 1: 下载源代码到本地( Download the source code to the local)  

2, 方法(Method) 2: 或者本地运行shell命令(Or run the shell command locally)  
```
 git clone https://github.com/hyy1115/react-redux-webpack2.git
 
```
 
3, 安装依赖包，已经解决了一些依赖包安装最新版可能出现的bug，如果还有问题，可以看相关社区的issue。(the installation depends on the package, has been resolved to rely on the package to install the latest version of the possible bug, if there are problems, you can see the relevant community issue.)  
```
npm install 或者cnpm install
```

4, 运行demo,将会开启3022端口(run demo, will open 3022 port)
   ```
    npm start
   ```

5, 打包(building)
```
mac: npm run build

windows: npm run build-win

```
6、router4写法(wording)  
```
export default (
    <HashRouter>
        <App>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/search" component={Search} />
                    {/* Add your route here */}
        </App>
    </HashRouter>

```

==================================================

####Finally, JavaScript is the world's best language, if demand, you can directly send me an email  
