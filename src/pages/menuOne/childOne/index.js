import React, { PureComponent } from 'react'
import { Row } from 'antd'
import { Page } from 'components'

class ChildOne extends PureComponent {
  render() {
    return (
      <Page inner
      >
        <Row gutter={24}>
          菜单1-1
        </Row>
      </Page>
    )
  }
}


export default ChildOne
