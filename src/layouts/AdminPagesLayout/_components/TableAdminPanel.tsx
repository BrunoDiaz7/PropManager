import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import themeDark from '@/theme/themeDark';
import usuarios from './ListaLocatarios';

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: themeDark.palette.secondary.main,
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  ':hover': {
    backgroundColor: themeDark.palette.primary.main,
  },
}));

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Apellido</StyledTableCell>
            <StyledTableCell align="center">Propiedad</StyledTableCell>
            <StyledTableCell align="center">Locador</StyledTableCell>
            <StyledTableCell align="center">Telefono</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map(usuario => (
            <StyledTableRow key={usuario.nombre}>
              <StyledTableCell component="th" align="center">
                {usuario.nombre}
              </StyledTableCell>
              <StyledTableCell align="center">
                {usuario.apellido}
              </StyledTableCell>
              <StyledTableCell align="center">{usuario.calle}</StyledTableCell>
              <StyledTableCell align="center">
                {usuario.nombreCompletoLocador}
              </StyledTableCell>
              <StyledTableCell align="center">
                {usuario.telefono}
              </StyledTableCell>
              <StyledTableCell align="center">{usuario.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
