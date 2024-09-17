import { ConfigProvider } from "antd";
import { Link, Outlet } from "react-router-dom";
import themeConfig from "../config/theme";
const RootLayout = () => {
  return (
    <ConfigProvider
      theme={{
        token: themeConfig,
      }}
    >
      <header className="py-5 !shadow bg-white">
        <nav>
          <ul className="flex justify-center items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </ConfigProvider>
  );
};

export default RootLayout;
