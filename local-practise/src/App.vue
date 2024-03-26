<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div ref="s2Container" style="width: 800px; margin: auto"></div>
  </div>
</template>

<script>

import { PivotSheet } from '../../packages/s2-core'
import CustomColCell from './customCell/CustomColCell'
import CustomDataCell from './customCell/CustomDataCell'

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
  "data": [
    {
      "number": 7789,
      "province": "浙江省",
      "city": "杭州市",
      "type": "家具",
      "sub_type": "桌子"
    },
    {
      "number": 2367,
      "province": "浙江省",
      "city": "绍兴市",
      "type": "家具",
      "sub_type": "桌子"
    },
    {
      "number": 3877,
      "province": "浙江省",
      "city": "宁波市",
      "type": "家具",
      "sub_type": "桌子"
    },
    {
      "number": 4342,
      "province": "浙江省",
      "city": "舟山市",
      "type": "家具",
      "sub_type": "桌子"
    },
    {
      "number": 5343,
      "province": "浙江省",
      "city": "杭州市",
      "type": "家具",
      "sub_type": "沙发"
    },
    {
      "number": 632,
      "province": "浙江省",
      "city": "绍兴市",
      "type": "家具",
      "sub_type": "沙发"
    },
    {
      "number": 7234,
      "province": "浙江省",
      "city": "宁波市",
      "type": "家具",
      "sub_type": "沙发"
    },
    {
      "number": 834,
      "province": "浙江省",
      "city": "舟山市",
      "type": "家具",
      "sub_type": "沙发"
    },
    {
      "number": 945,
      "province": "浙江省",
      "city": "杭州市",
      "type": "办公用品",
      "sub_type": "笔"
    },
    {
      "number": 1304,
      "province": "浙江省",
      "city": "绍兴市",
      "type": "办公用品",
      "sub_type": "笔"
    },
    {
      "number": 1145,
      "province": "浙江省",
      "city": "宁波市",
      "type": "办公用品",
      "sub_type": "笔"
    },
    {
      "number": 1432,
      "province": "浙江省",
      "city": "舟山市",
      "type": "办公用品",
      "sub_type": "笔"
    },
    {
      "number": 1343,
      "province": "浙江省",
      "city": "杭州市",
      "type": "办公用品",
      "sub_type": "纸张"
    },
    {
      "number": 1354,
      "province": "浙江省",
      "city": "绍兴市",
      "type": "办公用品",
      "sub_type": "纸张"
    },
    {
      "number": 1523,
      "province": "浙江省",
      "city": "宁波市",
      "type": "办公用品",
      "sub_type": "纸张"
    },
    {
      "number": 1634,
      "province": "浙江省",
      "city": "舟山市",
      "type": "办公用品",
      "sub_type": "纸张"
    },
    {
      "number": 1723,
      "province": "四川省",
      "city": "成都市",
      "type": "家具",
      "sub_type": "桌子"
    },
    {
      "number": 1822,
      "province": "四川省",
      "city": "绵阳市",
      "type": "家具",
      "sub_type": "桌子"
    },
    {
      "number": 1943,
      "province": "四川省",
      "city": "南充市",
      "type": "家具",
      "sub_type": "桌子"
    },
    {
      "number": 2330,
      "province": "四川省",
      "city": "乐山市",
      "type": "家具",
      "sub_type": "桌子"
    },
    {
      "number": 2451,
      "province": "四川省",
      "city": "成都市",
      "type": "家具",
      "sub_type": "沙发"
    },
    {
      "number": 2244,
      "province": "四川省",
      "city": "绵阳市",
      "type": "家具",
      "sub_type": "沙发"
    },
    {
      "number": 2333,
      "province": "四川省",
      "city": "南充市",
      "type": "家具",
      "sub_type": "沙发"
    },
    {
      "number": 2445,
      "province": "四川省",
      "city": "乐山市",
      "type": "家具",
      "sub_type": "沙发"
    },
    {
      "number": 2335,
      "province": "四川省",
      "city": "成都市",
      "type": "办公用品",
      "sub_type": "笔"
    },
    {
      "number": 245,
      "province": "四川省",
      "city": "绵阳市",
      "type": "办公用品",
      "sub_type": "笔"
    },
    {
      "number": 2457,
      "province": "四川省",
      "city": "南充市",
      "type": "办公用品",
      "sub_type": "笔"
    },
    {
      "number": 2458,
      "province": "四川省",
      "city": "乐山市",
      "type": "办公用品",
      "sub_type": "笔"
    },
    {
      "number": 4004,
      "province": "四川省",
      "city": "成都市",
      "type": "办公用品",
      "sub_type": "纸张"
    },
    {
      "number": 3077,
      "province": "四川省",
      "city": "绵阳市",
      "type": "办公用品",
      "sub_type": "纸张"
    },
    {
      "number": 3551,
      "province": "四川省",
      "city": "南充市",
      "type": "办公用品",
      "sub_type": "纸张"
    },
    {
      "number": 352,
      "province": "四川省",
      "city": "乐山市",
      "type": "办公用品",
      "sub_type": "纸张"
    }
  ]
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
        return new CustomColCell(node, spreadsheet, headerConfig)
      },
      dataCell: (viewMeta) => {
        console.log('dataCell:::')
        return new CustomDataCell(viewMeta, viewMeta.spreadsheet)
      },
      seriesNumber: {
        enable: true
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