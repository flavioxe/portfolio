import styles from "./Recommendations.module.scss";
import { SingleRecommendation } from "./SingleRecommendation";

export function Recommendations() {
  return (
    <>
      <section className={`${styles.recommendationsWrapper}`}>
        <div className={`${styles.recommendationsAnimation}`}>
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://github.com/MRonald.png"
            linkedin="#"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsum. Quis vitae, rem reprehenderit voluptas veritatis"
          />
          <SingleRecommendation
            name="Juliana Goia"
            avatar="https://github.com/MRonald.png"
            linkedin="#"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsum. Quis vitae, rem reprehenderit voluptas veritatis"
          />
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://veja.abril.com.br/wp-content/uploads/2023/12/Screenshot_72.png?w=561&h=344&crop=1"
            linkedin="#"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsum. Quis vitae, rem reprehenderit voluptas veritatis"
          />
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://conteudo.imguol.com.br/c/splash/a7/2021/03/14/beyonce-aceita-o-premio-de-melhor-cancao-de-rap-por-savage-no-palco-do-grammy-2021-1615775648806_v2_450x450.jpg"
            linkedin="#"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsum. Quis vitae, rem reprehenderit voluptas veritatis"
          />
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://midias.correiobraziliense.com.br/_midias/jpg/2023/09/29/675x450/1_beyonce_1_1024x768-29804111.jpg?20230929135653?20230929135653"
            linkedin="#"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsum. Quis vitae, rem reprehenderit voluptas veritatis"
          />
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2847_of_118%29_%2852946286530%29_%28cropped%29.jpg/800px-Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2847_of_118%29_%2852946286530%29_%28cropped%29.jpg"
            linkedin="#"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsum. Quis vitae, rem reprehenderit voluptas veritatis"
          />
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://br.web.img3.acsta.net/pictures/19/04/10/17/53/4934423.jpg"
            linkedin="#"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsum. Quis vitae, rem reprehenderit voluptas veritatis"
          />
          <SingleRecommendation
            name="Michael Ronald"
            avatar="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/16398/production/_126123019_gettyimages-621520826.jpg"
            linkedin="#"
            review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsum. Quis vitae, rem reprehenderit voluptas veritatis"
          />
        </div>
      </section>
    </>
  );
}
