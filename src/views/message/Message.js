import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// components
// import RecentTransactions from './components/RecentTransactions';
// import ProductPerformance from './components/ProductPerformance';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

const Message = () => {
  return (
    <PageContainer title="Message" description="this is Message">
        <DashboardCard title="Votre message" >
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={4}>
                        <Item key={4} elevation={4}>{`Rakoto`}</Item>
                        {/* <ProductPerformance /> */}
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        {/* <RecentTransactions /> */}
                    </Grid>
                </Grid>
            </Box>
        </DashboardCard>
    </PageContainer>
  );
};

export default Message;
