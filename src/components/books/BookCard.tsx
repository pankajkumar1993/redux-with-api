import { Button, Card, Col, message, Popconfirm, Row, Typography } from "antd";
import { Book, publishBook, removeBook } from "../../store/books";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";

interface BookCardProps extends Book {
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onTogglePublish?: (id: string, currentStatus: boolean) => void;
}

const BookCard = (book: BookCardProps) => {
  const { id, name, desc, price, author, published } = book;
  const dispatch = useDispatch<AppDispatch>();

  const handlePublish = () => {
    dispatch(publishBook(id));

    if (published) {
      message.success(`Book published`);
    } else {
      message.warning(`Book unpublish`);
    }
  };

  const handleDelete = () => {
    dispatch(removeBook(id));
    message.success("Book deleted successfully");
  };


  return (
    <Card
      styles={{ title: { textTransform: 'capitalize' }, body: { paddingBottom: 0, flexGrow: 1 }, actions: { marginBottom: 0 } }}
      role="button"
      bordered={false}
      className="shadow p-4 rounded-md border  hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      title={name}
      extra={
        <span
          className={`font-semibold ${published ? "text-green-500" : "text-red-500"}`}
        >
          {published ? "Published" : "Not Published"}
        </span>
      }
      actions={[
        <Row gutter={[8, 8]}>
          <Col span={12} md={12}>
            <Button
              key="view"
              type="default"
              icon={<EyeOutlined />}
              onClick={console.log}
              className="hover:bg-gray-200 w-full"
            >
              View
            </Button>
          </Col>
          <Col span={12} md={12}>
            <Button
              htmlType="button"
              key="togglePublish"
              type={'primary'}
              danger={published ? false : true}
              ghost
              icon={
                published ? <CloseCircleOutlined /> : <CheckCircleOutlined />
              }
              onClick={handlePublish}
              className={`w-full hover:bg-${published ? "gray-200" : "blue-200"}`}
            >
              {published ? "Unpublish" : "Published"}
            </Button>
          </Col>
          <Col span={12} md={12}>
            <Button
              key="edit"
              type="primary"
              icon={<EditOutlined />}
              onClick={console.log}
              className="hover:bg-gray-200 w-full"
            >
              Edit
            </Button>
          </Col>
          <Col span={12} md={12}>
            <Popconfirm
              title="Delete Book"
              description="Are want to delete book?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button
                key="delete"
                type="primary"
                danger
                icon={<DeleteOutlined />}
                className="hover:bg-red-200 w-full"
              >
                Delete
              </Button>
            </Popconfirm>

          </Col>
        </Row>,
      ]}
    >
      <div>
        <Typography.Paragraph className="font-bold text-lg">Price: ${price}</Typography.Paragraph>
        <Typography.Paragraph italic className="text-sm text-gray-500 m-0">Author: {author}</Typography.Paragraph>
        <Typography.Paragraph className="text-gray-700 mb-3">{desc}</Typography.Paragraph>
      </div>
    </Card>
  );
};

export default BookCard;
