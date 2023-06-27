import Layout, { siteTitle, name } from "../components/layout";
import Image from "next/image";
import Link from "next/link";

const description = "Alex's resume.";
const titleSuffix = "Resume";

export default function Home() {
  return (
    <Layout description={description} titleSuffix={titleSuffix}>
      <h2 className="text-4xl font-bold mb-3">Resume</h2>

    </Layout>
  );
}
