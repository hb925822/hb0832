/*
 * @Author: hebo hb925822@126.com
 * @Date: 2023-05-18 17:07:25
 * @LastEditors: hebo hb925822@126.com
 * @LastEditTime: 2023-05-18 21:04:34
 * @FilePath: \mydoc\docs\.vuepress\theme.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';
// 我们默认导出了主题对象
export default hopeTheme({
    hostname: "",
    author: {
        name: "hb",
        /**
         * 作者网站
         */
        url: "string",

        /**
         * 作者 Email
         */
        email: "string"
    },
    // 主题配置
    locales: {
        "/": {
            // 设置正在使用的语言
            lang: "zh-CN",
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,

            footer: '默认页脚',

            displayFooter: true,

            // page meta
            metaLocales: {
                editLink: '在 GitHub 上编辑此页',
            },

        },
        "/en/": {
            // 设置正在使用的语言
            lang: "en-US",
            // navbar
            navbar: enNavbar,

            // sidebar
            sidebar: enSidebar,

            footer: 'Default footer',

            displayFooter: true,

            metaLocales: {
                editLink: 'Edit this page on GitHub',
            },
        },
    },
});
