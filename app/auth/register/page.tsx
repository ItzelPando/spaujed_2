import { createUser } from '@/lib/db/models/User';
import { redirect } from 'next/navigation';

export default function RegisterPage() {
  async function handleRegister(formData: FormData) {
    'use server';
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    await createUser(email, password, name);
    redirect('/auth/login');
  }

  return (
    <form action={handleRegister}>
      <input type="text" name="name" placeholder="Nombre" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  );
}