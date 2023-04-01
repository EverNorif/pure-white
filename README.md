# pure-white

Element-UI

Pinia

Vue-Router

Axios





可以通过如下命令运行本仓库的项目：

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
    <el-aside style="width: auto;">
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

### 全局状态管理

### Element UI的使用
