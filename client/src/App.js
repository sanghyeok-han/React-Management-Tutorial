import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

class App extends Component {

  state = {
    customers: []
  }

  constructor() {
    super()
    api.get("/api/customers").then(res => {
      this.setState({ customers: res.data })
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.state.customers ? this.state.customers.map((customer) => {
                  return (
                    <Customer
                    key={customer.id}
                    id={customer.id}
                    image={customer.image}
                    name={customer.name}
                    birthday={customer.birthday}
                    gender={customer.gender}
                    job={customer.job}
                  />
                )}) : ""
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(App);

// C:\Users\User\Desktop\vsc 작업 공간\동빈나\React App\front>git remote add origin https://github.com/sanghyeok-han/React-Management-Tutorial.git

// C:\Users\User\Desktop\vsc 작업 공간\동빈나\React App\front>git push origin master --force