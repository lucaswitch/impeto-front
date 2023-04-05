import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
  Dialog,
  Box,
  DialogContent,
  DialogActions,
  Divider,
} from '@mui/material'
import { ChangeEvent, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { FitcheckTerm } from '@/components/privacy/term-of-use/components'
import { setTermsOfUse } from '@/store/privacy'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 720,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

/**
 * Termo de compromisso geral.
 * @constructor
 */
export function TermOfUse() {
  const [termVisible, setTermVisible] = useState(false)
  const termOfUse = useSelector(({ privacy }: RootState) => privacy.term_of_use)
  const dispatch = useDispatch()

  /**
   * Lida com termo de uso.
   */
  const handleOnChange = useCallback(() => {
    setTermVisible(true)
  }, [])

  /**
   * Quando a checkbox muda.
   */
  const handleOnCheckboxChange = useCallback(
    (event: ChangeEvent) => {
      dispatch(setTermsOfUse(!termOfUse))
    },
    [dispatch, termOfUse],
  )

  /**
   * Lida com o fechamento.
   */
  const handleOnClose = useCallback(() => {
    setTermVisible(false)
  }, [])

  return (
    <div>
      <Dialog
        open={termVisible}
        onClose={handleOnClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogContent>
          <FitcheckTerm />
        </DialogContent>
        <Divider />
        <DialogActions
          style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={termOfUse}
                  onChange={handleOnCheckboxChange}
                />
              }
              label="Eu li e aceito os termos acima."
            />
          </FormGroup>
        </DialogActions>
      </Dialog>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleOnChange}
                name="term-of-use"
                checked={termOfUse}
              />
            }
            label="Termos de uso"
          />
        </FormGroup>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Última modificação em 2022/01/01.
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Estabelece os <b>critérios de responsabilidade</b> ao utilizar
          qualquer um dos produtos oferecidos pela Ímpeto&reg;.
        </Typography>
      </FormControl>
    </div>
  )
}
