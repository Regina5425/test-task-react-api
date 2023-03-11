import { Result } from 'antd';
const Error = () => (
  <Result
    status="500"
    title="Sorry, something went wrong. Try later."
  />
);
export default Error;