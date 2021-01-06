const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

/* Write tests here

it('does something', async () => {
  await run('a{ }', 'a{ }', { })
})

*/


/* Input example */
const customInput = `.foo {
  margin: 100px 100px;
  padding: 100px;
  width: 100px;
  font-size: 100px;
}`;

/* Output example */
const customOut = `.foo {
  margin: 1rem 1rem;
  padding: 1rem;
  width: 1rem;
  font-size: 1rem;
}`;
it('test-transfer', async () => {
  await run(customInput, customOut, {})
})
