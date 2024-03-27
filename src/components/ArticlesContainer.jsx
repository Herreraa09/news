import firstImage from "../assets/images/image-retro-pcs.jpg";
import secondImage from "../assets/images/image-top-laptops.jpg"
import thirdImage from "../assets/images/image-gaming-growth.jpg"

import { Article } from "./Article";

export const ArticlesContainer = () => {
  return (
        <section className="mt-6 md:flex md:flex-wrap 
        md:gap-10">
            <Article 
            img={firstImage}
            number="1"
            title="Reviving Retro PCs"
            text="What happens when old PCs are given modern upgrades?"
            />

            <Article 
            img={secondImage}
            number="02"
            title="Top 10 Laptops of 2022"
            text="Our best picks for various needs and budgets."
            />

            <Article 
            img={thirdImage}
            number="03"
            title="The Growth of Gaming"
            text="How the pandemic has sparked fresh opportunities."
            />
        </section>
        
  )
}

