import { ResourcePage } from "../_components/resource-page";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Homeschool Certificates and Recognition | Traveling Scholars",
  description:
    "Explore homeschool certificates, student IDs, recognition documents, and milestone records for parent-led families.",
  path: "/homeschool-certificates/"
});

export default function HomeschoolCertificatesPage() {
  return (
    <ResourcePage
      eyebrow="Homeschool certificates"
      title="Homeschool certificates can make student milestones feel visible and celebrated."
      intro="Recognition documents help students see their progress. Certificates, student IDs, and achievement records can support pride without implying school accreditation."
      sections={[
        {
          title: "What certificates can recognize",
          body: "Families may create certificates for course completion, reading milestones, service, participation, projects, honor recognition, or graduation-related celebrations.",
          points: ["Course completion", "Achievement and service", "Milestones and celebrations"]
        },
        {
          title: "Why polished documents matter",
          body: "Clear, attractive documents can help students feel seen. They also give parents a consistent way to preserve meaningful achievements alongside academic records.",
          points: ["Student pride", "Consistent family records", "Recognition beyond grades"]
        },
        {
          title: "Use careful wording",
          body: "Homeschool certificates should be accurate and should not claim accreditation or institutional authority unless that authority truly exists. Traveling Scholars is a records and organization platform."
        }
      ]}
      links={[
        { href: "/features/", label: "Explore features" },
        { href: "/student-portfolios/", label: "Portfolio guide" },
        { href: "/pricing/", label: "View pricing options" }
      ]}
    />
  );
}
