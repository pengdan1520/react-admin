import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Button, Row, Input, Form } from 'antd'
import { GlobalFooter } from 'components'
import { GithubOutlined } from '@ant-design/icons'
import { t, Trans } from "@lingui/macro"
import { setLocale } from 'utils'
import config from 'utils/config'

import styles from './index.less'

const FormItem = Form.Item

@connect(({ loading, dispatch }) => ({ loading, dispatch }))
class Login extends PureComponent {

  render() {
    const { dispatch, loading } = this.props
    
    const handleOk = values => {
      console.log(values, 'vvvv')
      dispatch({ type: 'login/login', payload: {
        username: 'guest',
        password: 'guest',
      } })
    }


    return (
      <Fragment>
        <div className={styles.form}>
          <div className={styles.logo}>
            <span>{config.siteName}</span>
          </div>
          <Form
            onFinish={handleOk}
            >
            <FormItem name="username" 
             hasFeedback>
                <Input
                  placeholder={t`Username`}
                  defaultValue="guest"
                />
            </FormItem>
            <Trans id="Password" render={({translation}) => (
              <FormItem name="password" hasFeedback>
              <Input type='password' placeholder={translation} defaultValue="guest"  />
              </FormItem>)} 
            />
            <Row>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading.effects.login}
              >
                <Trans>登录</Trans>
              </Button>
              <p>
                <span className="margin-right">
                  <Trans>账号</Trans>
                  ：guest
                </span>
                <span>
                  <Trans>密码</Trans>
                  ：guest
                </span>
              </p>
            </Row>
          </Form>
        </div>
      </Fragment>
    )
  }
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default Login
