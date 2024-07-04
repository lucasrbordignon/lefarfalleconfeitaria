import { Button, Drawer, Typography, theme } from "antd";
import { useRouter } from "next/router";
const { Title } = Typography;

import styles from "../../styles/dishesNavbar.module.css";
import { MenuItems } from "./MenuItems";

export const DishesDrawer = ({ open, setOpen }) => {
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      placement="left"
      onClose={onClose}
      open={open}
      width={278}
      closeIcon={false}
    >
      <div className={styles.sidebarContainer}>
        <div>
          <div className={styles.sidebarTitle}>
            <Title
              level={2}
              className={styles.sidebarTitleText}
              style={{
                color: token.colorPrimary,
                marginTop: "1rem",
              }}
            >
              Menu
            </Title>
          </div>

          <MenuItems
            isDrawerOpen={open}
            setOpenDrawer={setOpen}
          />
        </div>

        <div className={styles.buttonContainer}>
          <Button
            href="https://www.instagram.com/lefarfalleconfeitaria/"
            target="_blank"            
          >
            Feito com amor...
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
