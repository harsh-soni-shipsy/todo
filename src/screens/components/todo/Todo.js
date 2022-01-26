import React, { useState } from 'react';
import { List, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function Todo(props) {
    var tasks = props.tasks;

    function deleteTask(e, id) {
        let allTasks = [];
        tasks.map(task => {
            if(task.id != id) {
                allTasks.push(task);
            }
        });
        props.setTask(allTasks);
    }

    return (
        <div style={{width: '80%', margin: 'auto'}}>
            <List
                bordered
                size='large'
                dataSource={tasks}
                itemLayout='horizontal'
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 5,
                }}
                header={
                    <div>
                      <b>Tasks</b>
                    </div>
                }
                renderItem={item => (
                    <List.Item
                     actions={[
                        <DeleteOutlined 
                            onClick={(e) => deleteTask(e, item.id)} 
                            style={{color: "#008FF7"}}
                        />
                        ]}
                    >
                        {item.task}
                    </List.Item>
                )}
            >
            </List>
        </div>
    );
}

export default Todo;