import Container from "./styles/Container.styled";
import {
  Navbar,
  NavItem,
  BannerSection,
  SpecialProductSection,
  TrendingProductsSection,
  RatingsSection,
  EnquiriesSection,
  TestimonialsSection,
  PartnersSection,
  Footer,
} from "./containers";

function App() {
  return (
    <Container>
      <Navbar>
        <NavItem value="Product" />
        <NavItem value="About" />
        <NavItem value="Blog" />
        <NavItem value="Reviews" />
      </Navbar>

      <BannerSection />
      <SpecialProductSection />
      <TrendingProductsSection />
      <RatingsSection />
      <EnquiriesSection />
      <TestimonialsSection />
      <PartnersSection />
      <Footer />
    </Container>
  );
}

export default App;
