import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skxx7Q2zJB1krSDDVb6tC8hZhVF7W4pDPbFwhRVOxBgdy920eWROfpsq8E73BdLfpEFwAzpzF7gdUFr4DEWKSCfHP39U4OcHasmgntmrie331q9uE5682Awwya1flQeKIuWnMlvRNN2OomRYzz0UMNTXsIgjOxcr40vhxZz678G72cPBIchQ"
})
