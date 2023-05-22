/*
 * @Author: hebo hb925822@126.com
 * @Date: 2023-05-18 20:58:12
 * @LastEditors: hebo hb925822@126.com
 * @LastEditTime: 2023-05-18 21:02:29
 * @FilePath: \mydoc\docs\.vuepress\sidebar\en.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
