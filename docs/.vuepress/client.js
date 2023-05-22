/*
 * @Author: hebo hb925822@126.com
 * @Date: 2023-05-18 17:08:23
 * @LastEditors: hebo hb925822@126.com
 * @LastEditTime: 2023-05-19 10:19:39
 * @FilePath: \mydoc\docs\.vuepress\client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'

export default defineClientConfig({
    enhance({ app, router, siteData }) { },
    setup() {
        onMounted(() => {
            // 在 mounted 之后使用 DOM API
            document.querySelector('#app')
        })
    },
    rootComponents: [],
})