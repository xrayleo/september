import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import './index.scss'

function createData( rank: string,name: string ) {
  return { rank, name };
}

const rows = [
  createData('#1', 'Mandy'),
  createData('#2', 'joan'),
  createData('#3', 'Lenz'),
  createData('#4', 'bing'),
  createData('#5', 'Cute'),
];

function Winners() {
  const { t } = useTranslation();

  return (
    <Box sx={{paddingBottom: '10px'}} className="win-box">
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <Link to='/' className='arrow-back'>
          <ArrowBackIosNewIcon sx={{color: '#8ab819',cursor: 'pointer' }}></ArrowBackIosNewIcon>
        </Link>
        <Typography sx={{ padding: '20px 0', color: 'rgb(126, 34, 92)', fontWeight: 'bold',fontSize: '20px'}}>{t('winPageTitle')}</Typography>
      </Stack>
      <TableContainer>
        <Table sx={{ minWidth: 375 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgb(249 20 171)'}}>
              <TableCell sx={{ color: 'white',textAlign: 'left' }}>Ranking</TableCell>
              <TableCell align="right" sx={{ color: 'white',textAlign: 'left' }}>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: 'rgb(126, 34, 92)',textAlign: 'left' }}>{row.rank}</TableCell>
                <TableCell align="right" sx={{ color: 'rgb(126, 34, 92)',textAlign: 'left' }}>{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Winners
