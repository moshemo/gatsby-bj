import React from "react"
import { Tabs } from "antd"

import AdminLayout from "Layouts/admin"

const { TabPane } = Tabs

const AdminNewsPage = () => {
  return (
    <AdminLayout>
      <Tabs defaultActiveKey="1">
        <TabPane tab="One" key="1">
          Tab Pane 1
        </TabPane>
        <TabPane tab="Two" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Three" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </AdminLayout>
  )
}

export default AdminNewsPage
