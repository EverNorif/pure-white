# pure-white

本项目是一个基于Vue3的前端项目，提供一个能够快速复用的前端模板。可以通过如下命令运行本项目：

```sh
git clone https://github.com/EverNorif/pure-white

cd pure-white

npm install # 依赖安装

npm run dev # 本地运行

npm run build  # build生产项目
```

## Development

### BaseHeader与BaseSideBar

本仓库提供了一个基础的Header栏，用于展示LOGO，路由所有的主题页面，提供dark mode的切换等功能，属于必选组件。同时也提供了一个基础的SideBar侧边栏，提供子页面的路由或者其他相关的功能，属于可选组件，用于参考。

### 新的主题页面的添加

主题页面指的是需要在Header栏中进行路由的页面。可以添加的新主题页面大体分为两类，一类是不需要侧边栏的页面，此类页面可以参考`views/SimplePage.vue`，另一类是需要侧边栏的页面，此类页面可以参考`views/ComplexPage.vue`。下面简单介绍这两类页面的添加格式。

不需要侧边栏的页面，需要在`template`标签中使用如下的布局，其中的内容需要使用`el-container`进行包裹，属于main部分。

```html
<template>
  <el-container>
    <el-main>
      <h1>Simple Page without Side Bar.</h1>
      <div>
        some content...
      </div>
    </el-main>
  </el-container>
</template>
```

需要侧边栏的页面，则需要额外使用`el-aside`包裹侧边栏组件。本项目提供了一个示例侧边栏组件作为参考实现。项目中已经引入了Element-UI的图标，可以直接使用。同时默认情况下是没有开启侧边栏menu的router功能，如果需要通过侧边栏进行路由跳转，可以考虑函数调用`$push`等更加灵活的方式。

```html
<template>
  <el-container>
    <el-aside>
      <BaseSideBar/>
    </el-aside>
    <el-main>
      <h1> Complex Page with Side Bar.</h1>
      <div>
        some content...
      </div>
    </el-main>
  </el-container>
</template>
```

完成主题页面组件的编写之后，需要进行路由注册。相关操作在`router/index.ts`中进行。而无论主题页面是否需要侧边栏，它都需要使用Header栏进行路由管理在`BaseHeader`中已经开启了menu的router状态，只需要在menu-item项中的index属性中指定对应的路由链接即可。

### 基础功能

1. 本项目使用Pinia进行状态管理，相关使用可以参考官方文档。同时在`views/PiniaTestPage.vue`中提供了简单的案例参考。

2. 本项目引入Element UI作为组件库，同样可以直接使用。在`views/MessagePage.vue`中提供了Message与Notification的简单使用参考。

3. 本项目引入了axios进行请求管理。在`views/AxiosTestPage.vue`中提供了简单的使用案例，同时结合了Element Message进行消息显示。


## Unified Feature

本项目实现了一些常用的通用功能，可以在主页中的`UniFeature`模块查看。相关的功能代码实现则都在`views/uni-features`目录下。

1. `pagination`：基于Element UI的分页功能，这里使用表格分页的形式展示。事实上分页组件的使用可以帮助我们双向绑定currentPage，pageSize等分页关键属性，并不需要绑定table使用
1. `codeMirror`：前端编辑器CodeMirror的使用，这里简单的使用了Python Language，如果需要其他语言的支持，则需要额外安装相关依赖并在Components中的extensions中进行指定。同时这里使用Vue中的watch监听来匹配Vue主题的dark模式与codeMirror的dark模式。注意这里extensions的初始状态在beforeCreate中指定

## External Feature

该模块记录了一些额外功能的使用，这些功能通常需要一些其他实现的依赖，例如特定后端等。不属于能够直接使用的功能，因此仅作为示例代码记录在不同的branch中。

1. `socket-io`：支持WebSocket，进行前后端双向通信。示例代码需要后端在本地启动，暴露端口为5000，同时使用namespace为`/api`



