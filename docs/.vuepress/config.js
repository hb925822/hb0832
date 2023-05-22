/*
 * @Author: hebo hb925822@126.com
 * @Date: 2023-05-18 17:05:33
 * @LastEditors: hebo hb925822@126.com
 * @LastEditTime: 2023-05-19 10:33:11
 * @FilePath: \mydoc\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig,defaultTheme } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
// import theme from "./theme.js";
export default defineUserConfig({
    base: '/',
    theme: defaultTheme({
        // 侧边栏数组
        // 所有页面会使用相同的侧边栏
        sidebar: [
          // SidebarItem
          {
            text: 'Foo',
            link: 'demo/',
            children: [
              // SidebarItem
              {
                text: 'github',
                link: 'https://github.com',
                children: [],
              },
              // 字符串 - 页面文件路径
              '/demo/page.md',
            ],
          },
          // 字符串 - 页面文件路径
          // '/bar/README.md',
        ],
      }),
    // theme,
    locales: {
        "/": {
          // 设置正在使用的语言
          lang: "zh-CN",
        },
        "/en/": {
          // 设置正在使用的语言
          lang: "en-US",
        },
      },
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
})