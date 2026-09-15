import { Reveal } from "./Reveal";
import rockfish from "../assets/fishing/rockfish.jpg";
import salmon from "../assets/food/salmon-soy-glaze.jpg";
import pasta from "../assets/food/butternut-squash-pasta.jpg";
import beans from "../assets/food/black-beans-plate.jpg";
import steak from "../assets/food/steak-mushrooms.jpg";
import friedRice from "../assets/food/shrimp-fried-rice.jpg";

/**
 * Cooking and fishing. Sits on the light canvas after About so the food reads
 * warm against cream rather than against the dark band, and so the page's
 * closing dark stretch (playground, swimming, piano, contact) does not get
 * any longer.
 *
 * Every photo is 3:4, so the grid is uniform and nothing gets cropped. Two
 * columns on phones, three from lg. Captions sit below the image, never on it.
 */

type Shot = { src: string; alt: string; caption: string };

const shots: Shot[] = [
  {
    src: rockfish,
    alt: "Joshua on a boat in the fog, holding a rockfish and a fishing rod",
    caption: "Rockfish",
  },
  {
    src: salmon,
    alt: "Soy-glazed salmon fillet over rice with wilted spinach and garlic",
    caption: "Soy-glazed salmon with spinach",
  },
  {
    src: pasta,
    alt: "Rigatoni in a butternut squash sauce with sausage and spinach",
    caption: "Butternut squash pasta with sausage and spinach",
  },
  {
    src: beans,
    alt: "A seared protein over black beans with tomato, corn, cotija, and green sauce",
    // TODO: Josh labeled this "chicken quesadilla with black beans", but there is no
    // quesadilla in the photo. Confirm the dish before merging.
    caption: "Chicken quesadilla with black beans",
  },
  {
    src: steak,
    alt: "A seared steak with sauteed mushrooms on a plate",
    caption: "Seared steak with mushrooms",
  },
  {
    src: friedRice,
    alt: "Shrimp fried rice topped with a fried egg",
    caption: "Shrimp fried rice with a fried egg",
  },
];

export function OffTheClock() {
  return (
    <section id="food" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="font-['Space_Mono',monospace] uppercase tracking-[0.2em] text-muted-foreground"
              style={{ fontSize: "12px" }}
            >
              Off the clock
            </p>
            <h2
              className="mt-2 font-['Satoshi',sans-serif] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, lineHeight: 1.05 }}
            >
              I cook.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            What comes out of my kitchen, and one thing I pulled out of the ocean.
          </p>
        </div>
      </Reveal>

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {shots.map((s, i) => (
          <Reveal key={s.src} delay={(i % 3) * 0.06}>
            <li className="group">
              <figure>
                <div className="overflow-hidden rounded-xl border border-border bg-card">
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={900}
                    height={1200}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption
                  className="mt-2.5 font-['Space_Mono',monospace] text-muted-foreground"
                  style={{ fontSize: "12px" }}
                >
                  {s.caption}
                </figcaption>
              </figure>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
