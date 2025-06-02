import { useRouter } from 'next/router';

export default function Mesa() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: 40 }}>
      <h1>Mesa {id}</h1>
      <p>Simulación de pedidos desde QR</p>
    </div>
  );
}