import React, { useState, useEffect } from 'react';
import DashboardCard from '../../../components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Typography } from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import SelectOption from '../components/SelectOption';
import { Button } from '@mui/material';
import { IconSearch } from '@tabler/icons';

const RecentTransactions = ({ categorieCultures, onSearch }) => {

  const [selectedCulture, setSelectedCulture] = useState('');

  const handleSearch = () => {
    const nom = document.getElementById('name').value;
    console.log(nom);
    console.log('Selected Culture:', selectedCulture);
    onSearch(selectedCulture, nom);
  };

  const handleSelect = (selectedIdCulture) => {
    setSelectedCulture(selectedIdCulture);
  };


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
          <SelectOption options={categorieCultures} onSelect={handleSelect} />
          <TimelineItem>
          </TimelineItem>
            <Button to="/" variant="outlined" color="primary" fullWidth onClick={handleSearch}>
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
