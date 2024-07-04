import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as data from '../../../utils/dish';

import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Layout,
  Skeleton,
  Tag,
  Tooltip,
  Typography,
  theme,
} from "antd";
import { animate } from "motion";
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

import { TMenuItem, TRestaurant } from "@/types/dish";
import { DishLayout } from "../../../components/layouts";
import styles from "../../../styles/dishDetailsCard.module.css";

interface IDishes {
  dish: TMenuItem;
}

const Dish = (props: IDishes) => {
  const { dish } = props;
  const router = useRouter();

  const { useToken } = theme;
  const { token } = useToken();

  useEffect(() => {
    animate(
      ".cardDescriptionAnimation",
      { opacity: [0, 1] },
      { duration: 0.9 }
    );
  }, []);

  return (
    <DishLayout
      title={dish?.name}
      pageDescription={`Ingredients and description`}
      imageUrl={dish.imageUrl}
    >
      <Content>
        <main>
          <Card
            className={`${styles.card} cardDescriptionAnimation`}
            cover={
              <>
                {!dish?.imageUrl ? (
                  <Skeleton.Image
                    active
                    className={styles.image}
                  />
                ) : (
                  <Image
                    className={styles.image}
                    style={{ borderRadius: "0px" }}
                    alt="dish food"
                    src={dish?.imageUrl}
                    width={400}
                    height={450}
                  />
                )}
              </>
            }
          >
            <div className={styles.bodyCard}>
              {dish?.bestSeller && (
                <Tag
                  className={styles.bestSellerTag}
                  color={token.colorInfo}
                >
                  Mais vendido
                </Tag>
              )}
              <Title
                className={styles.dishName}
                level={3}
              >
                {dish?.name}
              </Title>

              <Text className={styles.subtitle}>Ingredientes</Text>
              <Paragraph
                type="secondary"
                className={styles.paragraph}
              >
                {dish?.ingredients}
              </Paragraph>

              <Text className={styles.subtitle}>Descrição</Text>
              <Paragraph
                type="secondary"
                className={styles.paragraph}
              >
                {dish?.description}
              </Paragraph>

              <Tooltip title="Voltar ao cardápio">
                <Button
                  onClick={() => router.push("/dishes")}
                  icon={<ArrowLeftOutlined style={{ fontSize: "13px" }} />}
                  className={styles.detailsButton}
                  style={{
                    background: token.colorInfoBg,
                    borderRadius: "0px 0px 50% 0px",
                  }}
                  type="text"
                  size="large"
                />
              </Tooltip>
            </div>
          </Card>
        </main>
      </Content>
    </DishLayout>
  );
};

export default Dish;

export async function getStaticPaths() {
  const restaurant = await data.data;

  const sections = [];
  restaurant[0]?.sections.map((section) =>
    section.items.map((item) => sections.push(item.id))
  );

  const paths = sections.map((dish: any) => {
    return { params: { id: dish } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params.id;
  
  const dish = await getItemById(data.data, slug)

  return {
    props: {
      dish,
    },
    // Re-generate every 10 minutes(600sec)
    revalidate: 600,
  };
}

function getItemById(data: TRestaurant[], id: string): TMenuItem | null {
  for (const restaurant of data) {
    for (const section of restaurant.sections) {
      const item = section.items.find(item => item.id === id);
      if (item) {
        return item;
      }
    }
  }
  return null;
}