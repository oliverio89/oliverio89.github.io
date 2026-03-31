import translations from "../../components/Language/translations";

const REQUIRED_TRANSLATION_KEYS = [
  "titulo",
  "subtitulo",
  "descripción",
  "AcercaDeMí",
  "Proyectos",
  "Contacto",
  "projectsData",
  "experienceData",
];

describe("Projects and Experience data integrity and security", () => {
  const allProjects = [
    ...translations.es.projectsData,
    ...translations.en.projectsData,
  ];
  const allExperiences = [
    ...translations.es.experienceData,
    ...translations.en.experienceData,
  ];

  test("projectsData arrays are not empty", () => {
    expect(translations.es.projectsData.length).toBeGreaterThan(0);
    expect(translations.en.projectsData.length).toBeGreaterThan(0);
  });

  test("all projects have required fields", () => {
    allProjects.forEach((project) => {
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("description");
      expect(project).toHaveProperty("link");
      expect(typeof project.title).toBe("string");
      expect(typeof project.description).toBe("string");
      expect(typeof project.link).toBe("string");
    });
  });

  test("all project links use HTTPS protocol", () => {
    allProjects.forEach((project) => {
      if (project.link && project.link.startsWith("http")) {
        expect(project.link).toMatch(/^https:\/\//);
      }
    });
  });

  test("no XSS in titles or descriptions", () => {
    [...allProjects, ...allExperiences].forEach((item) => {
      const text =
        (item.title || item.role || "") +
        (item.description || item.summary || "");
      expect(text.toLowerCase()).not.toContain("<script");
      expect(text.toLowerCase()).not.toContain("javascript:");
    });
  });
});

describe("Translations data integrity and security", () => {
  test("Spanish translations have all required keys", () => {
    REQUIRED_TRANSLATION_KEYS.forEach((key) => {
      expect(translations.es).toHaveProperty(key);
      const val = translations.es[key];
      expect(val).toBeTruthy();
      if (typeof val === "string") {
        expect(val.length).toBeGreaterThan(0);
      }
    });
  });

  test("English translations have all required keys", () => {
    REQUIRED_TRANSLATION_KEYS.forEach((key) => {
      expect(translations.en).toHaveProperty(key);
      const val = translations.en[key];
      expect(val).toBeTruthy();
      if (typeof val === "string") {
        expect(val.length).toBeGreaterThan(0);
      }
    });
  });

  test("no script injection in translations", () => {
    const checkValue = (val) => {
      if (typeof val === "string") {
        expect(val.toLowerCase()).not.toContain("<script");
        expect(val.toLowerCase()).not.toContain("javascript:");
      } else if (Array.isArray(val)) {
        val.forEach((item) => {
          if (typeof item === "string") checkValue(item);
          else if (typeof item === "object")
            Object.values(item).forEach(checkValue);
        });
      } else if (typeof val === "object" && val !== null) {
        Object.values(val).forEach(checkValue);
      }
    };
    Object.values(translations.es).forEach(checkValue);
    Object.values(translations.en).forEach(checkValue);
  });

  test("both languages have same set of keys", () => {
    const esKeys = Object.keys(translations.es).sort();
    const enKeys = Object.keys(translations.en).sort();
    expect(esKeys).toEqual(enKeys);
  });
});
