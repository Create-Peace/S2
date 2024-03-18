import { ColCell } from '../../../packages/s2-core'
import { Line } from '@antv/g';
export default class CustomColCell extends ColCell {

  initCell () {
    super.initCell()
    this.drawBorder()
  }

  drawBorder() {
  
    this.appendChild(
        new Line({
          style: {
            x1: this.meta.x,
            y1: this.meta.y,
            x2: this.meta.x,
            y2: this.meta.y + this.meta.height,
            stroke: '#37f',
            lineWidth: 4,
            zIndex: 999999,
          }
        })
      )
    }

}
