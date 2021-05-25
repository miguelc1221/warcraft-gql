import { test } from 'tap'
import { build } from '../helper'

test('default root route', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/',
  })
  console.log(
    JSON.parse(res.payload),
    'JSON.parse(res.payload) JSON.parse(res.payload),'
  )

  t.same(JSON.parse(res.payload), { root: true })
})
