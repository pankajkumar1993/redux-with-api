import { Button, Card, Col, message, Row } from 'antd'
import { Book, publishBook, removeBook } from '../../store/books'
import { EyeOutlined, EditOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

interface BookCardProps extends Book {
  onView?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onTogglePublish?: (id: string, currentStatus: boolean) => void;
}

const BookCard = (book: BookCardProps) => {
  const { id, name, des, price, author, isPublished } = book;
  const dispatch = useDispatch<AppDispatch>();

  const handlePublish = () => {
    dispatch(publishBook(id))

    if (isPublished) {
      message.success(`Book published`)

    } else {
      message.warning(`Book unpublish`)
    }
  }

  const handleDelete = () => {
    dispatch(removeBook(id));
    message.success('Book deleted successfully')
  }

  return (
    <Card
      styles={{ body: { paddingBottom: 0 }, actions: { margin: 0 } }}
      role='button'
      bordered={false}
      className="shadow p-4 rounded-md border  hover:shadow-xl transition-shadow duration-300"
      title={name}
      extra={
        <span className={`font-semibold ${isPublished ? 'text-green-500' : 'text-red-500'}`}>
          {isPublished ? 'Published' : 'Not Published'}
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
              htmlType='button'
              key="togglePublish"
              type={isPublished ? "default" : "primary"}
              icon={isPublished ? <CloseCircleOutlined /> : <CheckCircleOutlined />}
              onClick={handlePublish}
              className={`w-full hover:bg-${isPublished ? 'gray-200' : 'blue-200'}`}
            >
              {isPublished ? 'Unpublish' : 'Published'}
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
            <Button
              key="delete"
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={handleDelete}
              className="hover:bg-red-200 w-full"
            >
              Delete
            </Button>
          </Col>

        </Row>
      ]}
    >
      <div className="mb-4">
        <p className="text-sm text-gray-500">Author: {author}</p>
        <p className="text-gray-700 mb-3">{des}</p>
        <p className="font-bold text-lg">Price: ${price}</p>
      </div>
    </Card>
  )
}

export default BookCard