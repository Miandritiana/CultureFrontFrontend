import React, { useState } from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

//component
import Chat from '../message/components/Chat';

const Message = () => {

    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (userName) => {
        setSelectedUser(userName);
    };

    const users = ["Rakoto", "John", "Alice"];

  return (
    <PageContainer title="Message" description="this is Message">
        <DashboardCard title="Votre message" >
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={4}>
                        {users.map((user, index) => (
                            <Paper
                                key={index}
                                elevation={selectedUser === user ? 8 : 4}
                                onClick={() => handleUserClick(user)}
                                style={{
                                    height: 60,
                                    lineHeight: '60px',
                                    cursor: 'pointer',
                                    backgroundColor: selectedUser === user ? '#e0e0e0' : 'white',
                                }}
                            >
                               <Typography variant="h6">{user}</Typography>
                            </Paper>
                        ))} 
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        {selectedUser && (
                            <Chat />
                        )}
                    </Grid>
                </Grid>
            </Box>
        </DashboardCard>
    </PageContainer>
  );
};

export default Message;
