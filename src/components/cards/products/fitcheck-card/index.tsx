import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from '@mui/material'

export function FitcheckCard() {
  return (
    <Card variant="outlined">
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fitcheck
        </Typography>
        <Typography variant="body2" color="text.secondary">
          O fitcheck&reg; é um sistema de avaliação física focado para personal
          trainers e assessorias esportivas que querem obter o melhor desempenho
          em atividades esportivas.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small" variant="text">
          Acessar o Fitcheck
        </Button>
      </CardActions>
    </Card>
  )
}
