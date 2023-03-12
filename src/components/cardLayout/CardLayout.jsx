import { useState } from "react";
import { HeartOutlined, DeleteOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeItem, setLikedChar } from "../../redux/charSlice";
import { Card } from "antd";
const { Meta } = Card;

const CardLayout = ({ id, name, image, species }) => {
	const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();

  const deleteChar = () => {
    dispatch(removeItem(id));
  };

  const onClickLike = () => {
    setIsLiked(true);
		dispatch(setLikedChar({id, isLiked: true}))
  };

	const onClickDislike = () => {
    setIsLiked(false);
		dispatch(setLikedChar({id, isLiked: false}))
  };

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt='character' src={image} />}
      actions={[
        isLiked ? (
          <HeartFilled key='dislike' onClick={onClickDislike} />
        ) : (
          <HeartOutlined key='like' onClick={onClickLike} />
        ),
        <DeleteOutlined key='delete' onClick={deleteChar} />,
      ]}
    >
      <Meta title={name} description={species} />
    </Card>
  );
};
export default CardLayout;
