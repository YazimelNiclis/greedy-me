import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
/* import { getSortedPostsData } from "../lib/post"; */
import Link from "next/link";
import Date from "../components/Date";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <View>
          <TextInput
            style={styles.inputEmailPass}
            mode="flat"
            label="Email"
            required
            underlineColor={colors.celeste}
            onBlur={() => {
              emailValidator;
            }}
            value={email}
            onChangeText={handleChangeEmail}
            error={errorEmail}
          />
          <Text style={styles.errorPass}>{errorEmail}</Text>
          <View>
            <TextInput
              style={styles.inputEmailPass}
              mode="flat"
              label="Contraseña"
              required
              underlineColor={colors.celeste}
              onBlur={() => {
                passValidator;
              }}
              value={password}
              onChangeText={handleChangePassword}
              secureTextEntry={hidePass ? true : false}
              error={errorContraseña}
            />
            <Icon
              name={hidePass ? "eye-slash" : "eye"}
              size={20}
              color="grey"
              onPress={() => setHidePass(!hidePass)}
              style={styles.icon}
            />
          </View>
          <Text style={styles.errorPass}>{errorContraseña}</Text>
          <View style={styles.contOlvidePass}>
            <Text
              style={styles.olvideMiPass}
              onPress={() => {
                props.navigation.navigate("OlvideContraseña");
              }}
            >
              Olvidé mi contraseña
            </Text>
          </View>
          <View>
            <ButtonEj text="Ingresar" onPress={handleSubmit} />
            <View style={styles.contenedorError}>
              <Text style={styles.errorPass}>{mensajeError}</Text>
            </View>
          </View>
        </View>
        <View>
          <TextInput
            style={styles.inputEmailPass}
            mode="flat"
            label="Email"
            required
            underlineColor={colors.celeste}
            onBlur={() => {
              emailValidator;
            }}
            value={email}
            onChangeText={handleChangeEmail}
            error={errorEmail}
          />
          <Text style={styles.errorPass}>{errorEmail}</Text>
          <View>
            <TextInput
              style={styles.inputEmailPass}
              mode="flat"
              label="Contraseña"
              required
              underlineColor={colors.celeste}
              onBlur={() => {
                passValidator;
              }}
              value={password}
              onChangeText={handleChangePassword}
              secureTextEntry={hidePass ? true : false}
              error={errorContraseña}
            />
            <Icon
              name={hidePass ? "eye-slash" : "eye"}
              size={20}
              color="grey"
              onPress={() => setHidePass(!hidePass)}
              style={styles.icon}
            />
          </View>
          <Text style={styles.errorPass}>{errorContraseña}</Text>
          <View style={styles.contOlvidePass}>
            <Text
              style={styles.olvideMiPass}
              onPress={() => {
                props.navigation.navigate("OlvideContraseña");
              }}
            >
              Olvidé mi contraseña
            </Text>
          </View>
          <View>
            <ButtonEj text="Ingresar" onPress={handleSubmit} />
            <View style={styles.contenedorError}>
              <Text style={styles.errorPass}>{mensajeError}</Text>
            </View>
          </View>
        </View>
      </section>
    </Layout>
  );
}

/* export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
} */
