import Page, { generateMetadata } from "@/app/[locale]/page";

export { generateMetadata };

export default function Home(props: unknown) {
  // @ts-ignore
  return <Page {...props} />;
}
