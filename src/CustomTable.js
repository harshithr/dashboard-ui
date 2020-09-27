import React from 'react';
import { Table, Button, Input } from 'antd';
import { SortableContainer as sortableContainer, SortableElement as sortableElement, SortableHandle as sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined, UserOutlined, Loading3QuartersOutlined, CheckCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import arrayMove from 'array-move';
import 'antd/dist/antd.css';
import Avatar from 'antd/lib/avatar/avatar';

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: 'lightskyblue' }} />
));

let status = (text) => {
  return (
  <div className="status-container"><div className="status-style"><span style={{ paddingTop: '10px', color: 'white' }}>{text}</span></div><Loading3QuartersOutlined style={{ marginLeft: '10px', paddingTop: '15px' }} /></div>
  );
}

let status2 = (text) => {
  return (
  <div className="status-container"><div className="status-style2"><span style={{ paddingTop: '10px', color: 'white' }}>{text}</span></div><CheckCircleFilled style={{ marginLeft: '10px', paddingTop: '15px' }} /></div>
  );
}

let priority = (text, color) => {
  return (
  <div style={{ backgroundColor: `${color}`, }} className="priority-style"><span style={{ paddingTop: '10px', color: 'white' }}>{text}</span></div>
  );
}

let addStatus = (text, color) => {
  return (
    <div className="status-style2" style={{ backgroundColor: `${color}` }}><span style={{ paddingTop: '10px', color: 'white' }}>{text}</span></div>
  );
}


const columns = [
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: 'Items',
    dataIndex: 'items',
    className: 'drag-visible',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Due date',
    dataIndex: 'duedate'
  },
  {
    title: 'Priority',
    dataIndex: 'priority'
  },
  {
    title: <Button style={{ border: 0 }}><PlusCircleFilled style={{ backgroundColor: 'white', fontSize: '15px' }} /></Button>,
    dataindex: 'addContent',
  }
];

const data = [
  {
    key: '1',
    items: <h1 style={{ marginTop: '5px', width: '300px' }}>New To Do Item</h1>,
    owner: <Avatar icon={ <UserOutlined /> } />,
    status: status("Working on it"),
    duedate: 'Sep 26',
    priority: priority("Urgent", 'black'),
    index: 0,
  },
  {
    key: '2',
    items: <h1 style={{ marginTop: '5px', width: '300px' }}>Complete Assessment</h1>,
    owner: <Avatar icon={ <UserOutlined /> } />,
    status: status2("Done"),
    duedate: 'Sep 27',
    priority: priority('Medium', 'blueviolet'),
    index: 1,
  },
  {
    key: '3',
    items: <Input placeholder="+ ADD" />,
    owner: <Avatar icon={ <UserOutlined /> } />,
    status: addStatus("", 'grey'),
    duedate: '',
    priority: priority('', 'grey'),
    index: 1,
  },
];

const SortableItem = sortableElement(props => <tr {...props} />);
const SortableContainer = sortableContainer(props => <tbody {...props} />);

class CustomTable extends React.Component {
  state = {
    dataSource: data,
  };

  onAddRow = () => {
    const { dataSource } = this.state;
    this.setState({
      dataSource: dataSource[2] + dataSource[0],
    }); 
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      console.log('Sorted items: ', newData);
      this.setState({ dataSource: newData });
    }
  };

  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  render() {
    const { dataSource } = this.state;
    const DraggableContainer = props => (
      <SortableContainer
        useDragHandle
        helperClass="row-dragging"
        onSortEnd={this.onSortEnd}
        {...props}
      />
    );
    return (
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        rowKey="index"
        components={{
          body: {
            wrapper: DraggableContainer,
            row: this.DraggableBodyRow,
          },
        }}
      />
    );
  }
}


export default CustomTable;