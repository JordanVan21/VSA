import { OneCard } from "./components/VerticalCard"
import "./styles/Product.css"

function Products() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 className="product-head fancy-underline">WWUVSA Merch</h1>
      </div>
      <h3 className="explore fade-in">Your favorite VSA merch is here!</h3>
      <div className="product-style">
        <OneCard
        img="https://i.imgur.com/gV5YbD2.png"
        alt="VSA 24-25 Shirt"
        merch="VSA 24-25 Shirt"
        content='This limited edition "Soi Sáng Con Đường" shirt features bold Vietnamese lettering and lanterns that honor cultural 
        tradition. Printed on a soft black tee, it’s perfect for everyday wear or special events.'
        unavailable={["XL"]}
        needButton
        ></OneCard>

        <OneCard
        img="https://i.imgur.com/Bvcezad.png"
        alt="VSA 23-24 Hoodie"
        merch="VSA 23-24 Hoodie"
        content="Stay cozy with the limited edition WWU VSA hoodie, featuring a bold design and soft, high-quality fabric. 
        Perfect for chilly days or lounging, with a sleek logo and vibrant colors."
        unavailable={["XL"]}
        needButton
        ></OneCard>

        <OneCard
        img="https://i.imgur.com/9sP9hq2.png"
        alt="VSA 23-24 Shirt"
        merch="VSA 23-24 Shirt"
        content="The limited edition WWU VSA shirt is perfect for events, meetings, or casual wear. With a bold design and 
        breathable fabric, it celebrates Vietnamese heritage in comfort and style."
        unavailable={["XL"]}
        needButton
        ></OneCard>

        <OneCard
        img="https://i.imgur.com/fu1dQgu.png"
        alt="VSA Sticker"
        merch="VSA Sticker"
        content="Representing the unity and mission of WWU VSA, the logo sticker features a sleek, contemporary design. Whether it's 
                  the official VSA logo or a creative variation, this sticker serves as a proud emblem of belonging and support for the 
                  VSA community."
        ></OneCard>

        <OneCard
        img="https://i.imgur.com/BuCb7WL.png"
        alt="VSA Phoenix Sticker"
        merch="VSA Phoenix Sticker"
        content="This limited edition phoenix sticker symbolizes rebirth, strength, and resilience in Vietnamese culture. With bold lines 
        and vibrant colors, it celebrates rising through challenges and cultural pride."
        ></OneCard>

        <OneCard
        img=""
        alt="VSA 23-24 HERITAGE NIGHT STICKER"
        merch="VSA 23-24 Heritage Night Sticker"
        content="This limited edition sticker honors VSA’s 2023-2024 beloved Heritage Night, blending traditional Vietnamese elements into a vibrant 
        design that celebrates unity and cultural pride."
        ></OneCard>

        <OneCard
        img="https://i.imgur.com/sbsXVUT.png"
        alt="VSA Fan Sticker"
        merch="VSA Fan Sticker"
        content="This limited edition sticker showcases a Vietnamese fan with lotus flowers and tassels, symbolizing culture and 
        elegance—perfect for adding a bold, traditional touch to your gear."
        ></OneCard>

        <OneCard
        img="https://i.imgur.com/jL3nFsm.png"
        alt="I heart VSA sticker"
        merch="I Heart VSA Sticker"
        content="This fun and bold sticker features a classic “I LOVE VSA” design—perfect for showing your pride and love for 
        the Vietnamese Student Association wherever you stick it."
        ></OneCard>

        <OneCard
        img="https://i.imgur.com/oD0attq.png"
        alt="VSA Soi Sáng Con Đường Stamp Sticker"
        merch="VSA Soi Sáng Con Đường Stamp Sticker"
        content="This vibrant sticker features a glowing lotus and elegant Vietnamese script framed like a postage stamp. It’s a bright, 
        symbolic tribute to guidance and cultural pride."
        ></OneCard>

      </div>

      <div>
        <h3 className="disclaimer">Purchases are not available through this website. Merchandise can be bought in person during VSA sales 
          events or by contacting us on Instagram at @wwuvsa. Prices may vary depending on the current WWU VSA board.</h3>
      </div>
    </div>
  )
}

export default Products