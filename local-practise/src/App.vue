<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div ref="s2Container" style="width: 800px; margin: auto"></div>
  </div>
</template>

<script>

import { PivotSheet } from '../../packages/s2-core'
import CustomColCell from './customCell/CustomColCell'

const dataCfg = {
  "describe": "标准交叉表数据。",
  "fields": {
    "rows": [
      "province",
      "city"
    ],
    "columns": [
      "type",
      "sub_type"
    ],
    "values": [
      "number"
    ],
    "valueInCols": true
  },
  "meta": [
    {
      "field": "number",
      "name": "数量"
    },
    {
      "field": "province",
      "name": "省份"
    },
    {
      "field": "city",
      "name": "城市"
    },
    {
      "field": "type",
      "name": "类别"
    },
    {
      "field": "sub_type",
      "name": "子类别"
    }
  ],
  "data": []
}

const s2DataConfig = {
      ...dataCfg,
      meta: [
        {
          field: 'province',
          name: '省份',
        },
        {
          field: 'city',
          name: '城市',
        },
        {
          field: 'type',
          name: '商品类别',
        },
        {
          field: 'sub_type',
          name: '子类别',
        },
        {
          field: 'number',
          name: '数量',
          // 自定义格式化
          // formatter: (value, record, meta) => {
          //   return `${value / 100} %`;
          // },
        },
      ]
    };

    const s2Options = {
      width: 600,
      height: 480,
      hierarchyType: 'grid',
      interaction: {
        copy: { enable: true },
        withFormat: true,
        withHeader: true,
      },
      colCell: (node, spreadsheet, headerConfig) => {
        return new CustomColCell(node, spreadsheet, headerConfig, this.customTableColumnBg)
      },
      // 显示序号
      // seriesNumber: {
      //   enable: true,
      //   自定义序号列文本, 默认 "序号"
      //   text: '自定义序号标题', 
      //},
      frozen: {
        // 默认冻结行头, 行头和数值区域都会展示滚动条
        // rowHeader: false,
        // 冻结行头时, 行头宽度占表格的 1/2, 支持动态调整 (0 - 1)
        // rowHeader: 0.2,
      },
    };



export default {
  name: 'App',
  mounted () {
    this.$nextTick(async() => {
      const s2 = new PivotSheet(this.$refs.s2Container, s2DataConfig, s2Options)
      await s2.render()
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>