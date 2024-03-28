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


export function generateRawData(
  row,
  col,
) {
  const res = [];
  const rowKeys = Object.keys(row);
  const colKeys = Object.keys(col);

  for (let i = 0; i < row[rowKeys[0]]; i++) {
    for (let j = 0; j < row[rowKeys[1]]; j++) {
      for (let m = 0; m < col[colKeys[0]]; m++) {
        for (let n = 0; n < col[colKeys[1]]; n++) {
          res.push({
            province: `p${i}`,
            city: `c${j}`,
            type: `type${m}`,
            subType: `subType${n}`,
            number: i * n,
          });
        }
      }
    }
  }

  return res;
}

const s2DataConfig = {
 /*  interaction:{
    scrollSpeedRatio: {
      horizontal: 2
    }
  }, */
  fields: {
    rows: ['type', 'subType'],
    columns: ['province', 'city'],
    values: ['number'],
  },
  data: generateRawData(
    { province: 10, city: 100 },
    { type: 10, sub_type: 100 },
  ),
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