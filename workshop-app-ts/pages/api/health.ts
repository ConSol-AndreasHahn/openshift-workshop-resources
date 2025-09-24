import type { NextApiRequest, NextApiResponse } from 'next'

type HealthResponse = { status: string; healthy?: boolean; error?: string }

let isHealthy = true

export default function handler(req: NextApiRequest, res: NextApiResponse<HealthResponse>) {
  if (req.method === 'GET') {
    if (isHealthy) {
      res.status(200).json({ status: 'ok' })
    } else {
      res.status(500).json({ status: 'unhealthy' })
    }
    return
  }

  if (req.method === 'POST') {
    try {
      const { healthy } = req.body as { healthy?: boolean }
      if (typeof healthy === 'boolean') {
        isHealthy = healthy
        res.status(200).json({ status: 'updated', healthy: isHealthy })
      } else {
        res.status(400).json({ status: 'error', error: 'Expected { healthy: true|false }' })
      }
    } catch (err) {
      res.status(400).json({ status: 'error', error: 'Invalid request body' })
    }
    return
  }

  res.status(405).json({ status: 'error', error: 'Method not allowed' })
}
