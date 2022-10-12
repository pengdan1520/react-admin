import React, { PureComponent } from 'react'
import { Row } from 'antd'
import { Page } from 'components'


class ChildTwo extends PureComponent {
  render() {
    return (
      <Page inner
      >
        <Row gutter={24}>
          菜单1-2
        </Row>
      </Page>
    )
  }
}

export default ChildTwo
