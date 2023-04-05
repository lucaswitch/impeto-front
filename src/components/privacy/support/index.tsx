import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSupport } from '@/store/privacy'
import { RootState } from '@/store'
/**
 * Permite o usuário decidir opções de compartilhamento.
 * @constructor
 */
export function Support() {
  const dispatch = useDispatch()
  const support = useSelector(({ privacy }: RootState) => privacy.support)

  /**
   * Lida com mudanças.
   */
  const handleOnChange = useCallback(() => {
    dispatch(setSupport(!support))
  }, [dispatch, support])

  return (
    <div>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleOnChange}
                name="support"
                checked={support}
              />
            }
            label="Habilitar acompanhamento de suporte"
          />
        </FormGroup>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Ao definir essa opção você permite que a <b>nossa equipe modifique</b>{' '}
          e/ou <b>acesse as informações pessoais</b> da sua conta e das suas
          respectivas <b>avaliações</b>, <b>exames</b> ou outra{' '}
          <b>qualquer informação relacionada a sua conta que esta vinculada</b>{' '}
          a algum produto desenvolvido pela Ímpeto&reg;.
        </Typography>
      </FormControl>
    </div>
  )
}
