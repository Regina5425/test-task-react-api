import { Spin } from "antd";
const Spinner = () => (
  <Spin tip='Loading' size='large'>
    <div className='spinner-content' />
  </Spin>
);
export default Spinner;
