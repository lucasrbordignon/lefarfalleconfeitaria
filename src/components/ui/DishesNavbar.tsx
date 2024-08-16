import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { HomeOutlined, InstagramOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Layout, theme, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

import borboleta from "../../../public/borboleta.png";
import logo from "../../../public/logo.png";

import { DishesDrawer } from ".";
import navStyles from "../../styles/dishesNavbar.module.css";
import styles from "../../styles/navbar.module.css";

export const DishesNavbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <Header
      className={styles.headerContainer}
      style={{ background: colorBgContainer, padding: "0px" }}
    >
      <nav className={`container ${styles.navContainer}`}>
        <Link
          href="/"
          className={styles.navContainerOptions}
        >
          <img className={styles.img} src={borboleta.src} alt="" />
          <img className={styles.img} src={logo.src} alt="" />
          {/* <IconChefHat
            size={30}
            color={`${token.colorPrimary}`}
          />
          <Title
            level={1}
            style={{ fontSize: "24px" }}
          >
            Le Farfalle
          </Title> */}
        </Link>

        <div className={navStyles.hamburgerMenuIcon}>
          <Button
            onClick={showDrawer}
            icon={<MenuOutlined />}
          />
        </div>

        <div className={styles.headerButtonsContainer}>
          <Button
            href="https://www.instagram.com/lefarfalleconfeitaria/"
            target="_blank"
            style={{ marginRight: ".5rem" }}
            icon={<InstagramOutlined />}
          />

          <Button
            icon={<HomeOutlined />}
            onClick={() => router.push("/")}
          >
            Início
          </Button>
        </div>
      </nav>

      <DishesDrawer
        open={open}
        setOpen={setOpen}
      />
    </Header>
  );
};
