// import { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { Input, Space } from 'antd'
import { Flex } from 'antd'
import useMovieDetailsStore from '../zustand/store'

const { Header } = Layout
const { Search } = Input

const boxStyle = {
  width: '100%',
  lineHeight: 1,
}

function HeaderTop() {

  const { query, searchQuery } = useMovieDetailsStore()

  const handleSearch = (e) => {
    searchQuery(e.target.value)
  }

  return (
    <Header>
      <Flex style={boxStyle} justify="space-between" align="center">
        <h1>
          <Menu
            className="nav"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
          </Menu>
        </h1>
        <Space direction="vertical">
          <Search
            placeholder="search movie name"
            value={query}
            onChange={handleSearch}
            // onSearch={handleSearch}
            // enterButton
          />
        </Space>
      </Flex>
      <div className="logo" />
    </Header>
  )
}

export default HeaderTop
