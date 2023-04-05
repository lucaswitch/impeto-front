import { createSlice } from '@reduxjs/toolkit'
export interface PrivacyState {
  share: boolean
  support: boolean
  term_of_use: boolean
}

const initialState: PrivacyState = {
  share: false,
  support: false,
  term_of_use: false,
}

const privacySlice = createSlice({
  name: 'privacy',
  initialState,
  reducers: {
    setShare(state, action) {
      state.share = action.payload
    },
    setSupport(state, action) {
      state.support = action.payload
    },
    setTermsOfUse(state, action) {
      console.log(action)
      state.term_of_use = action.payload
    },
  },
})

export const { setShare, setSupport, setTermsOfUse } = privacySlice.actions
export default privacySlice
