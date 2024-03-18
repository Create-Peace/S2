import { ColCell, EXTRA_FIELD } from '../../packages/s2-core'
import { Polyline } from '@antv/g';
export default class CustomColCell extends ColCell {
  // 覆盖背景绘制，可覆盖或者增加绘制方法
  getBackgroundColor () {
    let bg = null
    if (this.meta.field === EXTRA_FIELD && this.tableColumnBg?.[this.meta.query?.[this.colDimensionAlias?.[0]]]) {
      bg = this.tableColumnBg[this.meta.query[this.colDimensionAlias[0]]]?.colorValue
      return {
        backgroundColor: bg || '#fff'
      }
    }
    return super.getBackgroundColor()
  }

  drawBackgroundShape() {
    /* if (this.meta.rowIndex > 0) {
      return super.drawBackgroundShape();
    } */

    this.backgroundShape = this.appendChild(
      new Polyline({
        style: {
          points: [
            [this.meta.x, this.meta.y],
            [this.meta.x, this.meta.y + this.meta.height],
           /*  [this.meta.x + this.meta.width, this.meta.y + this.meta.height],
            [this.meta.x + this.meta.width, this.meta.y],
            [this.meta.x, this.meta.y] */
          ],
          stroke: '#379',
          lineWidth: 2,
          // zIndex: 999,
        },
      }),
    );
  }

}
