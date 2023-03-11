import { useState } from 'react';
import { HeartOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/charSlice";
import { Card } from "antd";
const { Meta } = Card;

const CardLayout = ({ id, name, image, species }) => {
	const [like, setLike] = useState(false);
	
  const dispatch = useDispatch();

  const deleteChar = () => {
    dispatch(removeItem(id));
  };

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt='character' src={image} />}
      actions={[
        <HeartOutlined key='like' />,
        <DeleteOutlined key='delete' onClick={deleteChar} />,
      ]}
    >
      <Meta title={name} description={species} />
    </Card>
  );
};
export default CardLayout;
