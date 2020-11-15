import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import style from './calculator_detail.module.scss'
import { InputAdornment, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  color: {
    margin:'1rem 0',
  backgroundColor: '#9ba78a'
  }}))

const Retirement = () => {
    const [result, setResult] = useState(0);
    const [age, setAge] = useState(0);
    const [retirementAge, setRetirementAge] = useState(0);
    const [rentability, setRentability] = useState(0);
    const [capital, setCapital] = useState(0);
    const [aporte, setAporte] = useState(0);
    const [monthlyRentability, setMonthlyRentability] = useState(0);

    const classes = useStyles();

    useEffect(()=>{
      const years = retirementAge-age

      const rentMonth = Math.pow((1+(rentability/100)),(1/12))

      const months = years*12

      let sum = capital

      for (let pmt = 0; pmt < months; pmt++) {
        sum = sum*rentMonth + aporte
      }

      setResult(sum)

      setMonthlyRentability(sum*(rentMonth-1))
    })
    
    return (
        <main>
            <h1>Calculadora para Independência Financeira</h1>
            <p>Utilize esta calculadora para calcular quanto é necessário guardar todo mềs a fim de obter sua independência financeira.</p>
            

            <div className={style.calculator}>
            <Typography variant="h6" gutterBottom>
        Calculadora de aportes mensais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rentability"
            name="rentability"
            label="Rentabilidade da carteira (% a.a.)"
            type="number"
            onChange={value => {setRentability(parseFloat(value.currentTarget.value))}}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="retirementAge"
            name="retirementAge"
            label="Idade ao se aposentar"
            type="number"
            onChange={value => {setRetirementAge(parseFloat(value.currentTarget.value))}}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Idade atual"
            type="number"
            onChange={value => {setAge(parseFloat(value.currentTarget.value))}}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="aporte"
            name="aporte"
            label="Aporte Mensal"
            type="number"
            onChange={value => {setAporte(parseFloat(value.currentTarget.value))}}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="capital"
            name="capital"
            label="Valor já investido"
            type="number"
            onChange={value => {setCapital(parseFloat(value.currentTarget.value))}}
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
            fullWidth
          />
        </Grid>
        
      </Grid>
      <Grid container spacing={3} className={classes.color} >
      <Grid item xs={12} sm={6}>
          <h3>Valor total acumulado</h3>
        </Grid>
      <Grid item xs={12} sm={6}>
      <p>{result.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}</p>
        </Grid>
      <Grid item xs={12} sm={6}>
          <h3>Receberá mensalmente</h3>
        </Grid>
      <Grid item xs={12} sm={6}>
      <p>{monthlyRentability.toLocaleString('pt-br', {style:'currency', currency:'BRL'})}</p>
        </Grid></Grid>
            </div>
            <p>Esta calculadora não leva em conta a inflação no período.</p>
        </main>
    )
}

export default Retirement