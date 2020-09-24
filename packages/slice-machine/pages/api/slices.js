import { getConfig } from 'lib/config'
import initClient from 'lib/client'

const { config } = getConfig()
const client = initClient(config.repo, config.dbId)

export const getSlices = async() => {
  const res = await client.get()
  if (res.status !== 200) {
    return { err: res, slices: [] }
  }
  const slices = await res.json()
  return { err: null, slices }
}
export const handler = async(req, res) => {
  const payload = await getSlices()
  return res.status(200).send(payload)
}