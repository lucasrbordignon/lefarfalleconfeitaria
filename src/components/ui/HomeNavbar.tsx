import { useRouter } from "next/router";

import { InstagramOutlined, ReadOutlined } from "@ant-design/icons";
import { Button, Layout, theme, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

import styles from "../../styles/navbar.module.css";

import borboleta from "../../../public/borboleta.png";
import logo from "../../../public/logo.png";

export const HomeNavbar = () => {
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Header
      className={styles.headerContainer}
      style={{ background: colorBgContainer, padding: "0px" }}
    >
      <nav className={`container ${styles.navContainer}`}>
        {/* mobile */}
        <div
          className={styles.navContainerOptions}
          onClick={() => router.push("/")}
        >
          <img className={styles.img} src={borboleta.src} alt="" />
          <img className={styles.img} src={logo.src} alt="" />
        </div>

        <div className={styles.menuIcon}>
          <Button
            href="https://www.instagram.com/lefarfalleconfeitaria/"
            target="_blank"
            style={{ marginRight: ".5rem" }}
            icon={<InstagramOutlined />}
          />

          <Button
            icon={<ReadOutlined />}
            onClick={() => router.push("/dishes")}
          />
        </div>

        {/* desktop */}     
        <div className={styles.headerButtonsContainer}>
          <Button
            href="https://www.instagram.com/lefarfalleconfeitaria/"
            target="_blank"
            style={{ marginRight: ".5rem" }}
            icon={<InstagramOutlined />}
          >
            Nos siga no instagram!
          </Button>

          <Button
            icon={<ReadOutlined />}
            onClick={() => router.push("/dishes")}
          >
            Cardápio
          </Button>
        </div>
      </nav>
    </Header>
  );
};
