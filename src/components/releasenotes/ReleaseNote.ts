interface ReleaseNote {
  releaseName: string;
  date: string;
  notes: string[];
}

const RELEASE_NOTE_EAP_V100: ReleaseNote = {
  releaseName: "EAP v1.0.0",
  date: "2023-06-12",
  notes: [
    "Moved from local file storage to cloud-based solution. No more hassling with file synchronization (autograf.dbk lock files), boreholes are no longer limited to 8 characters and much more.",
    "Implemented new data model for storing geotechnical data improving flexibility and quality assurance.",
    "The User Interface is completely new, adding functionalities such as an interactive map with WMS service. The functionality, however, is very limited in this current EAP release.",
  ],
};

export const RELEASE_NOTES = [RELEASE_NOTE_EAP_V100];

export default ReleaseNote;
