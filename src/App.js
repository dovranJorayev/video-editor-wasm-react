import "./App.css";
import VideoEditor from "./components/VideoEditor";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  const colorBgContainer = "#fff";

  return (
    <Layout className={"layout"}>
      <Header style={{ height: "80px" }}>
        <div className="logo">
          <img src="logo.svg" alt="logo" height={40} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[]}
        />
      </Header>

      <Content
        style={{ padding: "0 50px", minHeight: "calc(100vh - 80px - 60px)" }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Converter</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer }}
        >
          <VideoEditor />
        </div>
      </Content>
      <Footer style={{ textAlign: "center", height: "60px" }}>
        <b>Giffy</b> turn video to gif easy ©2023 with ❤️
      </Footer>
    </Layout>
  );
}

export default App;
