export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Aqui é o layout de about</h1>
      {children}
    </>
  );
}
