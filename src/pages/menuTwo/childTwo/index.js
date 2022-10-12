import React, {PureComponent} from 'react'
import { Input, Button, Form  } from 'antd'
import { Page } from 'components'
import store from 'store'
import { useLocation } from 'react-router'
import { withRouter } from 'umi'
import { connect } from 'umi'
import PropTypes from 'prop-types'
const FormItem = Form.Item



@withRouter
@connect(({ app, loading }) => ({ app, loading }))
class Menutt extends PureComponent {
  render() {
    const { dispatch } = this.props
    const handleOk = values => {
      const getMenuList = store.get('routeList');
      const urlParams = new URL(window.location.href);
      const pathname = urlParams?.pathname;
      getMenuList.filter((item)=> {
        if (item.route == pathname) {
          item.name = values.newName
        }
      })
      dispatch({ type: 'app/eidtMenuName',payload: getMenuList })
      // store.set('routeList', getMenuList)
      console.log(values, 'values')
    }
    return (
      <Page inner>
        <Form
          onFinish={handleOk}
          >
          <FormItem name="newName" 
            rules={[{ required: true }]} hasFeedback>
              <Input
              />
          </FormItem>
          <Button
              type="primary"
              htmlType="submit"
            >
              保存
            </Button>
        </Form>
      </Page>
    )
  }
}
Menutt.propTypes = {
  dispatch: PropTypes.func,
}
export default Menutt
