import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material'

export function FusionCard() {
  return (
    <Card variant="outlined">
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fusion
        </Typography>
        <Typography variant="body2" color="text.secondary">
          O Fusion&reg; é um sistema de exames para avaliar parâmetros
          fisiológicos importantes.
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small" variant="text">
          Acessar o Fusion
        </Button>
      </CardActions>
    </Card>
  )
}
