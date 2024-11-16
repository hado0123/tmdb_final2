import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function MovieCard({ movies }) {
   return (
      <Grid container spacing={2.5}>
         {movies.map((movie) => (
            //  size = 12/5 하나의 행에 5개의 grid 보여줌
            <Grid size={2.4} key={movie.id}>
               {movie.title}
            </Grid>
         ))}
      </Grid>
   )
}

export default MovieCard
