import Section from "../Section";
import LazyComponent from "./Lazy";

export default function Spotify() {
  return (
    <Section id="spotify" title="listening to">
      <LazyComponent />
    </Section>
  );
}
