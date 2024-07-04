import Link from "next/link";

import { Layout, theme, Typography } from "antd";
import styles from "../../styles/footer.module.css";
const { Footer } = Layout;
const { Paragraph } = Typography;

export const FooterComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Footer
      style={{ background: colorBgContainer }}
      className={styles.footerContainer}
    >
      <Link
        className={styles.footerLink}
        href="https://www.linkedin.com/in/lucasrbordignon/"
        target="_blank"
      >
        <Paragraph>Created by LRB Tech ©2024</Paragraph>
      </Link>
    </Footer>
  );
};
