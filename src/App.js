import { SectionWrapper, Features } from "../src/components/Index";
import assets from "../src/assets";

function App() {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs exchange & earn crypto.
      Join 25+ million people using ProNef MarketPlace."
        showbtn
        mockupImage={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart user Interface MarketPlace"
        description="Experience a buttery UI of ProNef NFT MarketPlace. Smooth
        constant colors of a fluent UI design."
        mockupImage={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users'
        devices. You can easily get your app into people's hand."
        mockupImage={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first list of all NFTs
        white the second one shows the details of a specific NFT."
        mockupImage={assets.mockup}
        banner="banner02"
      />
    </>
  );
}

export default App;
