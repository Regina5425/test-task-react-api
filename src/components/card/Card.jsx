import { HeartOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const CardLayout = () => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt='example'
        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      />
    }
    actions={[<HeartOutlined key='like' />, <DeleteOutlined key='delete' />]}
  >
    <Meta title='Card title' description='This is the description' />
  </Card>
);
export default CardLayout;
