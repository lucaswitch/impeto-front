import { Box, Typography } from '@mui/material'

/**
 * Uma maneira mais interessante de mostrar um parâmetro e um valor.
 * @param param
 * @param value
 * @constructor
 */
export function ParamAndValue({ param, value }: { param: string; value: any }) {
  return (
    <Box
      mt={1}
      mb={1}
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Box style={{ flex: 1 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {param}
        </Typography>
      </Box>
      <Box style={{ flex: 1 }}>
        <Typography variant="subtitle1" color="text.secondary">
          {value}
        </Typography>
      </Box>
    </Box>
  )
}
