import { OutsideRegister, register } from './register'
import { CreateUser } from '@/core/types/user'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

const registerOK: OutsideRegister<string> = async data => `${data.username} Cadastrado com successo`

const data: CreateUser = {
  username: 'john',
  email: 'john@doe.com',
  password: 'jhon123',
}

it('Deveria cadastar um usuario com suceso', async function () {
  return pipe(
    data,
    register(registerOK),
    TE.map(result =>
      expect(result).toBe(`${data.username} Cadastrado com successo`),
    ),
  )()
})
