import ReleaseNoteList from "../components/releasenotes/ReleaseNoteList";
import PageHeader from "./PageHeader";

const DUMMY_DATA = [
  {
    releaseName: "Geosuite EAP 1.0.0",
    date: "24:e juni 2022",
    notes: [
      "Fixat bugg 1",
      "Fixat bugg 2",
      "Fixat bugg 3",
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    ],
  },
  {
    releaseName: "Geosuite EAP 1.0.1",
    date: "24:e augusti 2022",
    notes: [
      "Fixat bugg 1",
      "Fixat bugg 2",
      "Fixat bugg 3",
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    ],
  },
  {
    releaseName: "Geosuite EAP 1.0.2",
    date: "24:e oktober 2022",
    notes: [
      "Fixat bugg 1",
      "Fixat bugg 2",
      "Fixat bugg 3",
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    ],
  },
  {
    releaseName: "Geosuite EAP 1.0.3",
    date: "24:e juni 2023",
    notes: [
      "Fixat bugg 1",
      "Fixat bugg 2",
      "Fixat bugg 3",
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
      "eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    ],
  },
];

const ReleaseNotes = () => {
  return (
    <article>
      <PageHeader header="Release notes"></PageHeader>
      <section className="mb-4">
        <h1>Description</h1>
        <p>
          For each release, notes on updates, bug fixes and new features will be
          posted here.
        </p>
      </section>
      <section>
        <ReleaseNoteList releaseNotes={DUMMY_DATA}></ReleaseNoteList>;
      </section>
    </article>
  );
};

export default ReleaseNotes;
