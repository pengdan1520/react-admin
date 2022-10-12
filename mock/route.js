import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '3',
    name: '菜单1',
  },
  {
    id: '31',
    breadcrumbParentId: '3',
    menuParentId: '3',
    name: '菜单1-1',
    route: '/menuOne/childOne',
  },
  {
    id: '32',
    menuParentId: '3',
    breadcrumbParentId: '3',
    name: '菜单1-2',
    route: '/menuOne/childTwo',
  },
  {
    id: '5',
    name: '菜单2',
  },
  {
    id: '51',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: '菜单2-1',
    route: '/menuTwo/childOne',
  },
  {
    id: '52',
    breadcrumbParentId: '5',
    menuParentId: '5',
    name: '菜单2-2',
    route: '/menuTwo/childTwo',
  },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
