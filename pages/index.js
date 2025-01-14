export default function Index() {
  return <></>;
}

export async function getServerSideProps({ req, res }) {
  const token = req.cookies.token;

  if (token) {
    res.writeHead(302, { Location: "/app" });
    res.end();

    return { props: {} };
  } else {
    res.writeHead(302, { Location: "/login" });
    res.end();

    return { props: {} };
  }
}
