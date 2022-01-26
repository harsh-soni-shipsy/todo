import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function Task(props) {
    let [task, setTask] = useState('');

    let handleChange = (e) => {
        setTask(e.target.value);
    }

    let onClickHandler = (e) => {
        if(task.length > 0) {
            props.setId(props.id+1);
            props.setTask([...props.tasks, {id: props.id, task: task}]);
            setTask('');
        }
    }

    return (
        <div style={{width: '80%', margin: 'auto', marginTop: '5em',}}>
            <Row justify='center'>
                <Col span={18}>
                    <Input 
                        onChange={handleChange}
                        size='large'
                        value={task}
                        placeholder='Enter your task'>
                    </Input>
                </Col>
                <Col span={2}>
                    <Button 
                        type='primary' 
                        size='large' 
                        icon={<PlusOutlined/>}
                        style={{width: '100%'}}
                        onClick={onClickHandler}
                    >
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Task;