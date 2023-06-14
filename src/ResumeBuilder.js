import React, { useState } from "react";
import IconDescription from "./images/iicon";
import IconDrag from "./images/drag";
import IconEdit from "./images/edit";
import CustomSwitch from "./components/toggle/ToggleSwitch";
import CustomTooltip from "./components/Tooltip/tooltip";
import Modal from "./components/modal/modal";

const ResumeBuilder = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      name: "Profile Summary",
      enabled: true,
      description: "Your educational background",
    },
    {
      id: 2,
      name: "Academic and Cocurricular Achievements",
      enabled: true,
      description: "Your work experience",
    },
    {
      id: 3,
      name: "Summer Internship Experience",
      enabled: true,
      description: "Your skills and abilities",
    },
    {
      id: 4,
      name: "Work Experience",
      enabled: true,
      description: "Your skills and abilities",
    },
    {
      id: 5,
      name: "Projects",
      enabled: true,
      description: "Your skills and abilities",
    },
    {
      id: 6,
      name: "Certifications",
      enabled: true,
      description: "Your skills and abilities",
    },
    {
      id: 7,
      name: "Leadership Positions",
      enabled: true,
      description: "Your skills and abilities",
    },
    {
      id: 8,
      name: "Extracurricular",
      enabled: true,
      description: "Your skills and abilities",
    },
    {
      id: 9,
      name: "Education",
      enabled: true,
      description: "Your skills and abilities",
    },
    // Add more sections as needed
  ]);


  const [isDragging, setIsDragging] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [enabledState, setEnabledState] = useState(true);

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("text/plain", id);
    setIsDragging(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetId) => {
    const sourceId = event.dataTransfer.getData("text/plain");
    const updatedSections = [...sections];

    const sourceIndex = updatedSections.findIndex(
      (section) => section.id === Number(sourceId)
    );
    const targetIndex = updatedSections.findIndex(
      (section) => section.id === Number(targetId)
    );

    const [movedSection] = updatedSections.splice(sourceIndex, 1);
    updatedSections.splice(targetIndex, 0, movedSection);

    setSections(updatedSections);
    setIsDragging(false);
    setIsDirty(true);
  };

  const handleEditSectionName = (id, newName) => {
    const updatedSections = sections.map((section) => {
      if (section.id === id && section.enabled) {
        return { ...section, name: newName };
      }
      return section;
    });

    setSections(updatedSections);
    setIsDirty(true);
  };

  const handleToggleSection = (id) => {
    const updatedSections = sections.map((section) => {
      if (section.id === id) {
        setEnabledState(!section.enabled);
        return { ...section, enabled: enabledState };
      }
      return section;
    });

    setSections(updatedSections);
    setIsDirty(true);
  };

  const handleSaveChanges = () => {
    // Handle saving changes
    setIsDirty(false);
  };

  return (
    <div className="pt-[0.5rem] pl-[15rem] pr-[15rem] font-['Inter']">
      <h1 className="text-center text-3xl mt-10 mb-10">Select Your Sections</h1>
      {sections.map((section) => (
        <div key={section.id} className="border-b" onDragOver={handleDragOver}>
          <div
            draggable
            onDragStart={(event) => handleDragStart(event, section.id)}
            onDrop={(event) => handleDrop(event, section.id)}
            className="flex justify-between p-1"
          >
            <div className="flex">
              <button className="mr-[2rem]" onDragOver={handleDragOver}>
                <IconDrag height={12} width={18} className="fill-gray-900" />
              </button>
              <div className="p-1 mr-[2rem]">
                <CustomTooltip text={section.description}>
                  <IconDescription
                    height={20}
                    width={20}
                    className="fill-gray-900"
                  />
                </CustomTooltip>
              </div>
              <div className="flex items-center">
                <h2 className="text-lg font-semibold">{section.name}</h2>
              </div>
            </div>

            <div className="flex justify-items-end">
              <button
                className="mr-[2rem]"
                onClick={() => {
                  handleEditSectionName(
                    section.id,
                    prompt("Enter new section name")
                  );
                }}
              >
                <IconEdit height={13} width={13} className="fill-gray-900" />
              </button>
              {/* <button onClick={() => handleToggleSection(section.id)}>
                  {section.enabled ? "Disable" : "Enable"}
                </button> */}
              <CustomSwitch
                checked={true}
                onClick={() => {
                  handleToggleSection(section.id);
                }}
              />
            </div>
          </div>
        </div>
      ))}
      {isDragging && <div>...Animation for drag and drop...</div>}
      <div className="ml-[20rem]">
        <button
          className={`border border-gray-900 px-10 py-2 mt-4 bg-[#8A4893] w-[429px] ${
            isDirty ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isDirty}
          onClick={handleSaveChanges}
        >
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
