import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

//component
import RecentTransactions from './components/RecentTransactions';
import ProductPerformance from './components/ProductPerformance';

const Dashboard = () => {
  
  const [categorieCultures, setCategorieCultures] = useState([]);
  const [products, setProducts] = useState([]);

  const userId = localStorage.getItem('userId');
  console.log('User ID:', userId);

  useEffect(() => {
    // Fetch data for categorieCultures
    fetch('https://culturebackoffice-production.up.railway.app/categoriecultures/categorieculture')
      .then(response => response.json())
      .then(data => {
        setCategorieCultures(data);
      })
      .catch(error => {
        console.error('Error fetching categorie cultures:', error);
      });

    // Fetch initial data for products
    fetch('https://culturebackoffice-production.up.railway.app/cultures/')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleSearch = (idculture, nom) => {
    console.log("adgfbvga");
    // Fetch data based on search criteria
    fetch(`https://culturebackoffice-production.up.railway.app/categoriecultures/filtreMultiCritere?idculture=${idculture}&nom=${nom}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error during search:', error);
      });
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <ProductPerformance products={products} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions
              categorieCultures={categorieCultures}
              onSearch={handleSearch}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
