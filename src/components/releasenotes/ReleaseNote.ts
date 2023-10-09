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

const RELEASE_NOTE_EAP_V101: ReleaseNote = {
  releaseName: "EAP v1.0.1",
  date: "2023-09-04",
  notes: [
    "Web: Released a web application where you can view projects, boreholes, quaternary layers in both map and list format. Adapted for both desktop and mobile view with some limitations in mobile.",
    "Desktop: Extended map functionality",
  ],
};

const RELEASE_NOTE_EAP_V102: ReleaseNote = {
  releaseName: "EAP v1.0.2",
  date: "2023-10-09",
  notes: [
    "Desktop: Started adding method properties and protocol rows for methods, currently only jb1 is almost fully updated. Still not possible to edit or delete properties and methods.",

    "Desktop: Added so that when a project or a borehole is selected in the table view, it is highlighted in the map and vice versa.",

    "Desktop: You can now zoom to a borehole in the map by right clicking on it in the table and selecting 'View in map'.",

    "Desktop: Updated the default view and made minor improvements to the view settings for a improved user experience.",

    "Web (Mobile devices): Updated view for mobile sized screens so that is easier to navigate between project list and the selected project. Also, now you can search for projects in the project list on mobile devices instead of filtering columns. ",
    "Web (Mobile devices): When clicking on a borehole in the map, the popup with information is now displayed as a modal on mobile devices (in front of other objects on the map) as it previously collided with other objects in the map ",
    "Web: When selecting projects in the project list the active project is highlighted in the map and vice versa.",
    "Web: Now the borehole list and borehole properties are displayed infront of the map instead of pushing it aside.",
    "Web: Added transparency slider and legend for WMS-services",
    "Web: Added a 'fake' import and export flow and pages where you can follow your import and export requests (/imports and /exports). Currently we only want input on the workflow (it is only fake data in it, so nothing is imported/exported), see the following explanation on how to use it:",
    "--- Importing projects: Importing projects is done with two steps. On step 1, you as a user create a import request. You do this by selecting 'Create import' and 'From database' on the landing page (From database means from other sources, e.g. SGU, NADAG etc). You follow the steps, selecting which area you are interested in receiving geosuite projects from, thereafter previewing and selecting which projects you would like to send an import request for. After finishing the import request, you will be able to track the import request status under the /imports page. When an import request is ready to be imported to a new or existing Geosuite project, its status will be set to 'Ready' and then you can proceed with Step 2 in the import process, selecting if the import(s) should be imported to an existing or a new project.",
    "--- Exporting projects: The export workflow is similar to the import workflow, except that only step is required instead of two. This is because you as a user only need to select what project(s) to export, select the receiver, and what data that is to be sent from the project(s) to the receiver. Thereafter, you can follow the progress on the export in the /exports page, but you do not need to do anything else.",
  ],
};

export const RELEASE_NOTES = [
  RELEASE_NOTE_EAP_V102,
  RELEASE_NOTE_EAP_V101,
  RELEASE_NOTE_EAP_V100,
];

export default ReleaseNote;
