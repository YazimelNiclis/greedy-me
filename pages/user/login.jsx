import Head from "next/head";
import Layout from "../../components/layout";
import loginStyles from "../../styles/login.module.css";
export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <div>
        <header className={loginStyles.titulo}>
          <a className={loginStyles.letraAzul}>gre</a>
          <a className={loginStyles.letraVerde}>edy</a>
          <a className={loginStyles.letraNaranja}>me </a>
        </header>
        <form className={loginStyles.formulario}>
          <input type="email" className="form-input px-4 py-3 rounded-full" />
          <input
            type="password"
            className="form-input px-4 py-3 rounded-full"
          />
        </form>
      </div>
    </Layout>
  );
}
