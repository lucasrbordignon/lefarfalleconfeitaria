import { useRouter } from "next/router";
import { useEffect } from "react";
import capa from "../../public/bolo-capa.jpg";

import {
  ReadOutlined
} from "@ant-design/icons";
import { Button } from "antd";
import { animate } from "motion";

import { HomeLayout } from "../components/layouts/HomeLayout";
import styles from "../styles/home.module.css";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    animate(".homeContentAnimation", { opacity: [0, 1] }, { duration: 0.9 });
  }, []);

  return (
    <HomeLayout
      title="Le Farfalle"
      pageDescription="Cardápio digital Le Farfalle"
    >
      <main className={styles.mainContainer}>
        <img
          className={styles.img}
          src={capa.src}
          alt="O bolo mais gostoso da sua vida"
        />

        <div className={"homeContentAnimation"}>
          {/* <section className={styles.restaurantInformation}>
            <div className={styles.informationContainer}>
              <div>
                <AimOutlined /> Main St, Delicious City, London 9578, USA
              </div>
              <div>
                <ClockCircleOutlined /> Daily: 8:00 am to 11:00 pm
              </div>
            </div>
            <div className={styles.informationContainer}>
              <div>
                <PhoneOutlined /> <span>+1 234 43 55</span>
              </div>
              <div>
                <MailOutlined /> magentastore@gmail.com
              </div>
            </div>
          </section> */}

          <section className={styles.titleContainer}>
            <h1 className={styles.title}>Porque quando o doce é feito com amor a gente sente na primeira mordida!</h1>
            <Button
              type="primary"
              size="large"
              onClick={() => router.push("/dishes")}
            >
              <ReadOutlined />
              CARDÁPIO
            </Button>
          </section>
        </div>
      </main>
    </HomeLayout>
  );
};

export default HomePage;
