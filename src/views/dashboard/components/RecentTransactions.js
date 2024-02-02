import React from 'react';
import DashboardCard from '../../../components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import SelectOption from '../../../components/forms/theme-elements/SelectOption';
import { Button } from '@mui/material';
import { IconSearch } from '@tabler/icons';

const RecentTransactions = () => {
  return (
    <DashboardCard title="Recherche" >
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
              backgroundColor: '#f2f2f2'
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          
          <Typography variant="subtitle1"
            fontWeight={400} component="label" htmlFor='name' mb="5px">Nom proprietaire</Typography>
          <CustomTextField id="name" variant="outlined" fullWidth />
          <Typography variant="subtitle1"
            fontWeight={400} component="label" htmlFor='name' mb="5px">Categorie culture</Typography>
          <SelectOption />
          <TimelineItem>
          </TimelineItem>
            <Button to="/" variant="outlined" color="primary" component={Link} fullWidth>
              Search       <IconSearch />
            </Button>
            <TimelineItem>
          </TimelineItem>
          <TimelineItem>
            <Typography variant="subtitle1"
              fontWeight={200} component="label" htmlFor='name' mb="5px"></Typography>
          </TimelineItem>
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default RecentTransactions;
