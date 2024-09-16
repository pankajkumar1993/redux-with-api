import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/rootReducers"
import { Button, Col, Flex, Form, Input, InputNumber, message, Modal, Row, Select, Spin, Typography } from "antd";
import BookCard from "../components/books/BookCard";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { AppDispatch } from "../store";
import { addBook } from "../store/books";

const HomePage = () => {
  const [open, setOpen] = useState(false)
  const { books, loading, error } = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch<AppDispatch>()
  console.log(books, "books");

  if (loading) return <p>Loading...</p>
  if (!books.length) return <p>No books found...</p>
  if (error) return <p>Unable to fetch todo</p>

  const showModal = () => {
    setOpen(true)
  }
  const hideModal = () => {
    setOpen(false)
  }
  const [form] = useForm()

  const handleForm = (values: any) => {
    console.log(values);

    const payLoad = { ...values, id: Date.now() };
    dispatch(addBook(payLoad))

    message.success('Book added successfully!!!')
    form.resetFields()
    hideModal();

  }
  return (
    <div>
      <section className="py-10">
        <div className="container">
          <Flex justify="space-between" align="center">
            <Typography.Title level={2}>Books</Typography.Title>
            <Button size="large" onClick={showModal} type="primary">Add Book</Button>
          </Flex>
          <Row>
            {
              books.map((book: any) => <Col span={24} md={12} lg={8} xl={6} xxl={6} key={book.id}>
                <BookCard {...book} key={book.id} />
              </Col>)
            }
          </Row>
        </div>
      </section>

      <Modal centered maskAnimation={true} open={open} footer={false} title="Add Book" onCancel={hideModal}>
        <Form form={form} layout="vertical" onFinish={handleForm} onFinishFailed={(error) => console.log(error)
        }>
          <Form.Item label="Book Name" name={'name'} rules={[{ required: true, message: 'Please enter the name' }]}>
            <Input placeholder="Enter the book name" size="large" />
          </Form.Item>
          <Form.Item label="Price" name={'price'} rules={[{ required: true, type: "number", message: 'Please enter the price' }]}>
            <InputNumber prefix="$" placeholder="Enter the book price" size="large" className="w-full" />
          </Form.Item>
          <Form.Item label="Book Descripton" name={'desc'} rules={[{ required: true, message: 'Please enter the description' }]}>
            <Input.TextArea placeholder="Enter the book description" rows={5} />
          </Form.Item>
          <Form.Item label="Book Published" name={'published'} rules={[{ required: true, message: 'Select any options' }]}>
            <Select size="large" placeholder="Please Select any option">
              <Select.Option value={true}>Publish</Select.Option>
              <Select.Option value={false}>Unpublish</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Author" name={'author'} rules={[{ required: true, message: 'Select any options' }]}>
            <Select size="large" placeholder="Please Select any option">
              <Select.Option value={'John'}>John</Select.Option>
              <Select.Option value={'Chris'}>Chris</Select.Option>
              <Select.Option value={'James'}>James</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" block size="large">Save</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default HomePage