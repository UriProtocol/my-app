import { lazy, useEffect, useState } from "react";
import ContactContent from "../../content/ContactContent.json";
import axios from "axios";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const contentInitState = {
  titulo: "",
  contenido: "",
  boton: [{}],
  section: [{}]
}
const contentInitState2 = {
  titulo: "",
  contenido: "",
  boton: ""
}

const Home = () => {

  const [hero, setHero] = useState(contentInitState)
  const [start, setStart] = useState(contentInitState2)
  const [aboutus, setAboutus] = useState(contentInitState)
  const [product, setProduct] = useState(contentInitState)

  useEffect(() =>{
    getHero()
    getStart()
    getAboutus()
    getProduct()
  }, [])

  async function getHero(){
    const {data} = await axios.get('http://172.31.34.193:3000/hero')
    const hero = data.at(-1)
    const heroFormatted = {...hero, boton: [{title: hero.boton1}, {title: hero.boton2, color: "#fff"}]}
    setHero(heroFormatted)
  }
  async function getStart(){
    const {data} = await axios.get('http://172.31.34.193:3000/start')
    const start = data.at(-1)
    setStart(start)
  }
  async function getAboutus(){
    const {data} = await axios.get('http://172.31.34.193:3000/aboutus')
    const aboutus = data.at(-1)
    const aboutusFormatted = {...aboutus, section: [{title: aboutus.subtitulo1, content: aboutus.subtexto1, icon: "notes.svg"}, {title: aboutus.subtitulo2, content: aboutus.subtexto2, icon: "notes.svg"}]}

    setAboutus(aboutusFormatted)
  }
  async function getProduct(){
    const {data} = await axios.get('http://172.31.34.193:3000/product')
    const product = data.at(-1)

    setProduct(product)
  }

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={hero?.titulo}
        content={hero?.contenido}
        button={hero?.boton}
        icon="logo.svg"
        id="intro"
      />
      <MiddleBlock
        title={start?.titulo}
        content={start?.contenido}
        button={start?.boton}
      />
      <ContentBlock
        type="left"
        title={aboutus?.titulo}
        content={aboutus?.contenido}
        section={aboutus?.section}
        icon="graphs.svg"
        id="about"
      />
      {/*<ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />*/}
      <ContentBlock
        type="left"
        title={product?.titulo}
        content={product?.contenido}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
