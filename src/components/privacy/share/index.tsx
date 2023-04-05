import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShare } from '@/store/privacy'
import { RootState } from '@/store'
/**
 * Permite o usuário decidir opções de compartilhamento.
 * @constructor
 */
export function Share() {
  const dispatch = useDispatch()
  const share = useSelector(({ privacy }: RootState) => privacy.share)

  /**
   * Lida com mudanças.
   */
  const handleOnChange = useCallback(() => {
    dispatch(setShare(!share))
  }, [dispatch, share])

  return (
    <div>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleOnChange}
                name="share"
                checked={share}
              />
            }
            label="Habilitar compartilhamento"
          />
        </FormGroup>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Ao definir essa opção você permite a análise das informações
          relacionadas a sua conta como:{' '}
          <b>informações de pacientes e alunos</b>,{' '}
          <b>informações de tráfego</b>, <b>imagens</b>,{' '}
          <b>
            informações fisiológicas relacionados ao exame e avaliações físicas.
          </b>
        </Typography>
      </FormControl>
    </div>
  )
}
