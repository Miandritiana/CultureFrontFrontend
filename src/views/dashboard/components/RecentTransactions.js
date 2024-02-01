import React from 'react';
import DashboardCard from '../../../components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Button } from '@mui/material';

const RecentTransactions = () => {
  return (
    <DashboardCard title="Recherche">
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '-40px',
            '& .MuiTimelineConnector-root': {
              width: '1px',
              backgroundColor: '#efefef'
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          
          <Typography variant="subtitle1"
            fontWeight={400} component="label" htmlFor='name' mb="5px">Nom</Typography>
          <CustomTextField id="name" variant="outlined" fullWidth />
          
          <TimelineItem>
          </TimelineItem>
          <TimelineItem>
          </TimelineItem>
          
          <Button to="/" variant="outlined" color="primary" component={Link} fullWidth>
            Search
          </Button>

        </Timeline>
      </>
    </DashboardCard>
  );
};

export default RecentTransactions;
