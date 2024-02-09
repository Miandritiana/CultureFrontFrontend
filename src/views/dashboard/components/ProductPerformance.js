import React, { useState, useEffect } from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { IconSend } from '@tabler/icons';

const ProductPerformance = ({products}) => {

    const handleSendMessage = (userId) => {
        const senderId = localStorage.getItem('userId');
        if (!senderId) {
          window.location.href = "auth/login";
          return;
        }
    
        // Get the userId of the product from its data
        const receiverId = userId;
    
        // Send message
        fetch(`https://culturebackoffice-production.up.railway.app/discussions/idutilisateur?userSend=${senderId}&userReceive=${receiverId}`)
          .then(response => response.json())
          .then(data => {
            // Redirect to the Message view after sending the message
            window.location.href = "/message";
          })
          .catch(error => {
            console.error('Error sending message:', error);
          });
      };

    return (

        <DashboardCard title="Liste culture">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Nom parcelle
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Culture
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Proprietaire
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Message
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.nomParcelle}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.nomCulture}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.nomUser}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <IconSend onClick={() => handleSendMessage(product.userId)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProductPerformance;
