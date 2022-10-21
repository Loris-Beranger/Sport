import axios from 'axios'
import { useQuery } from 'react-query'

export const getFieldList = () => {
  return useQuery(['structureList'], () => {
    return axios.get(
      `https://equipements.sports.gouv.fr/api/records/1.0/search/?dataset=data-es&Authorization=Apikey 3551c69686befbadbc365fc5d5aa658d3a18f02e1fa705fb652b0a52&q=nuit saint george&rows=30`
    )
  })
}
