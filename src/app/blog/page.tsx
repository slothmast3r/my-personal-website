import SideBar from "./_components/SideBar"
import CommentSection from "./_components/CommentSection"
import AboutAuthor from "./_components/AboutAuthor"
import Image from "next/image"

export default function Blog() {
  return (
    <div>
      <section
        className="hero-wrap h-screen"
        style={{ backgroundImage: "url('/assets/images/bg_1.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text h-screen align-items-end justify-content-center">
            <div className="col-md-12 ftco-animate pb-5 mb-3 text-center">
              <h1 className="mb-3 bread">Blog Single Post</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span className="mr-2">
                  <a href="/src/app/blog/blog/blog">
                    Blog
                    <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>{" "}
                <span>
                  Blog Single <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 " data-aos="fade-up">
              <div>
                <h2 className="mb-3">
                  It is a long established fact a reader be distracted
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis, eius mollitia suscipit, quisquam doloremque
                  distinctio perferendis et doloribus unde architecto optio
                  laboriosam porro adipisci sapiente officiis nemo accusamus ad
                  praesentium? Esse minima nisi et. Dolore perferendis, enim
                  praesentium omnis, iste doloremque quia officia optio deserunt
                  molestiae voluptates soluta architecto tempora.
                </p>
                <p>
                  <Image
                    src="/assets/images/image_3.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="img-fluid"
                  />
                </p>
                <p>
                  Molestiae cupiditate inventore animi, maxime sapiente optio,
                  illo est nemo veritatis repellat sunt doloribus nesciunt!
                  Minima laborum magni reiciendis qui voluptate quisquam
                  voluptatem soluta illo eum ullam incidunt rem assumenda
                  eveniet eaque sequi deleniti tenetur dolore amet fugit
                  perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut
                  ea, repudiandae suscipit!
                </p>
                <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                <p>
                  Temporibus ad error suscipit exercitationem hic molestiae
                  totam obcaecati rerum, eius aut, in. Exercitationem atque
                  quidem tempora maiores ex architecto voluptatum aut officia
                  doloremque. Error dolore voluptas, omnis molestias odio
                  dignissimos culpa ex earum nisi consequatur quos odit quasi
                  repellat qui officiis reiciendis incidunt hic non? Debitis
                  commodi aut, adipisci.
                </p>
                <p>
                  <Image
                    src="/assets/images/image_4.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="img-fluid"
                  />
                </p>
                <p>
                  Quisquam esse aliquam fuga distinctio, quidem delectus
                  veritatis reiciendis. Nihil explicabo quod, est eos ipsum.
                  Unde aut non tenetur tempore, nisi culpa voluptate maiores
                  officiis quis vel ab consectetur suscipit veritatis nulla quos
                  quia aspernatur perferendis, libero sint. Error, velit, porro.
                  Deserunt minus, quibusdam iste enim veniam, modi rem maiores.
                </p>
                <p>
                  Odit voluptatibus, eveniet vel nihil cum ullam dolores
                  laborum, quo velit commodi rerum eum quidem pariatur! Quia
                  fuga iste tenetur, ipsa vel nisi in dolorum consequatur,
                  veritatis porro explicabo soluta commodi libero voluptatem
                  similique id quidem? Blanditiis voluptates aperiam non magni.
                  Reprehenderit nobis odit inventore, quia laboriosam harum
                  excepturi ea.
                </p>
                <p>
                  Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam
                  ipsam quidem, dolor distinctio similique asperiores voluptas
                  enim, exercitationem ratione aut adipisci modi quod quibusdam
                  iusto, voluptates beatae iure nemo itaque laborum.
                  Consequuntur et pariatur totam fuga eligendi vero dolorum
                  provident. Voluptatibus, veritatis. Beatae numquam nam ab
                  voluptatibus culpa, tenetur recusandae!
                </p>
                <p>
                  Voluptas dolores dignissimos dolorum temporibus, autem aliquam
                  ducimus at officia adipisci quasi nemo a perspiciatis
                  provident magni laboriosam repudiandae iure iusto commodi
                  debitis est blanditiis alias laborum sint dolore. Dolores,
                  iure, reprehenderit. Error provident, pariatur cupiditate
                  soluta doloremque aut ratione. Harum voluptates mollitia illo
                  minus praesentium, rerum ipsa debitis, inventore?
                </p>
              </div>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    Life
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Sport
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Tech
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Travel
                  </a>
                </div>
              </div>

              <AboutAuthor
                imageUrl="/assets/images/person_1.jpg"
                name="George Washington"
                bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
"
              />

              <CommentSection />
            </div>
            <SideBar />
          </div>
        </div>
      </section>
    </div>
  )
}
