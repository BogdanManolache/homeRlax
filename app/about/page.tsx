import Image from 'next/image';
import aboutImg from '../../public/images/customers.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us',
};

export default function AboutPage() {
  return (
    <section className="mb-16 mt-2 flex max-w-2xl flex-col justify-between gap-8 p-4 md:max-w-7xl">
      <div className="text-center">
        <Image
          src={aboutImg}
          alt="Customers relaxing"
          className="mx-auto mb-8 rounded-full shadow-md"
        />
        <h2 className=" text-lg font-semibold uppercase tracking-widest text-muted-foreground">
          about us
        </h2>
      </div>

      <div className="mx-auto max-w-3xl">
        <p className="mb-6 leading-relaxed text-gray-700">
          Nestled in the virtual realm, homeRlax emerges as a haven for weary
          souls seeking solace in the embrace of comfort. A beacon of
          tranquility amidst the chaos of the digital age, this online furniture
          emporium beckons with its promise of serenity. As visitors traverse
          its digital corridors, they are greeted by a curated selection of
          sumptuous sofas, plush armchairs, and luxurious loungers—all
          meticulously crafted to cocoon the body and soothe the mind. Each
          piece whispers tales of lazy Sunday afternoons and cozy evenings spent
          wrapped in warmth, inviting patrons to surrender to the allure of
          relaxation. In this sanctuary, where pixels meet palpable comfort,
          homeRlax fosters a sense of calm that transcends the boundaries of the
          screen, weaving a tapestry of tranquility that stretches from
          cyberspace to the confines of one&apos;s living room.
        </p>

        <p className="mb-6  leading-relaxed text-gray-700">
          At the heart of homeRlax lies a profound understanding of the profound
          impact that one&apos;s surroundings can have on their well-being.
          Beyond mere furniture, this virtual sanctuary offers a sanctuary for
          the weary, a sanctuary where the boundaries between the physical and
          the ethereal blur, and where the pursuit of comfort becomes a sacred
          ritual. Here, the art of relaxation is elevated to a sublime form,
          where every stitch, every curve, every texture is designed to evoke a
          sense of harmony and peace. In a world brimming with noise and haste,
          homeRlax stands as a beacon of mindfulness, reminding us to pause, to
          breathe, and to cherish the simple joys of comfort.
        </p>

        <p className="mb-6  leading-relaxed text-gray-700">
          As patrons navigate the labyrinthine expanse of homeRlax, they are
          guided by a philosophy that transcends mere commerce. More than just a
          marketplace, this virtual oasis serves as a testament to the
          transformative power of comfort—a reminder that amidst the hustle and
          bustle of modern life, there exists a sanctuary where the weary can
          find respite. With each click, each scroll, each purchase, visitors
          embark on a journey of self-discovery, forging a deeper connection
          with their own desires and needs. In the hushed serenity of their own
          homes, they find themselves enveloped in the warm embrace of homeRlax,
          where comfort is not merely a luxury but a way of life.
        </p>
      </div>
    </section>
  );
}
