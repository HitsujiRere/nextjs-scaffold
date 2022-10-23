import { Button, Checkbox, Form, Input, Space } from 'antd';
import type { NextPage } from 'next';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

interface FormValues {
  password: string;
  username: string;
}

const Home: NextPage = () => {
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<FormValues>) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space direction="vertical">
      <h1 className="py-4 text-2xl font-bold text-black">Welcome to Form!</h1>

      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onValuesChange={() => console.log(form.getFieldsValue())}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ message: 'Please input your username!', required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ message: 'Please input your password!', required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default Home;
