import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { Menu } from 'antd';

const MenuWrapper = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMenuItems {
            edges {
              node {
                name
                link
              }
            }
          }
        }
      `}
      render={data => {
        const menuItems = data.allMenuItems.edges.map(edge => edge.node).reverse()
        return (
          <Menu className="float-right" theme="dark" mode="horizontal" defaultSelectedKeys={['999']}>
            {menuItems.map(item => {
              return (
                <Menu.Item key={menuItems.indexOf(item)}>
                  <Link to={item.link} >
                    {item.name}
                  </Link>
                </Menu.Item>
              )
            })}
            <Menu.Item key={'999'}>
              <a href="https://dashboard.groundline.io/register"  >
                Sign Up
              </a>
            </Menu.Item>
          </Menu>
        )
      }}
    />
  )
}

export default MenuWrapper