import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

export function MetabolicCard() {
  return (
    <Card variant="outlined">
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Metabolic
        </Typography>
        <Typography variant="body2" color="text.secondary">
          O Fusion&reg; é um sistema de exames para avaliar parâmetros
          fisiológicos relacionados ao metabolismo dos seus pacientes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="text">
          Acessar o Metabolic
        </Button>
      </CardActions>
    </Card>
  )
}
