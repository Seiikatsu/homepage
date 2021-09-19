type SectionInfo = {
  id: string;
  text: string;
};

export const HomeSectionInfo: SectionInfo = {
  id: "home",
  text: "Home",
};

export const AboutSectionInfo: SectionInfo = {
  id: "about",
  text: "About Me",
};

export const SkillsSectionInfo: SectionInfo = {
  id: "skills",
  text: "Skills",
};

export const ProjectsSectionInfo: SectionInfo = {
  id: 'projects',
  text: 'Public projects'
}

export const ContactSectionInfo: SectionInfo = {
  id: "contact",
  text: "Contact Me",
};

const sections: SectionInfo[] = [
  HomeSectionInfo,
  AboutSectionInfo,
  SkillsSectionInfo,
  ProjectsSectionInfo,
  ContactSectionInfo,
];

export default sections;
