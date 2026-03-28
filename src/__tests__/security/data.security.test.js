import { projects } from '../../components/Proyects/data';
import translations from '../../components/Language/translations';

const REQUIRED_TRANSLATION_KEYS = [
  'titulo',
  'subtitulo',
  'descripción',
  'descriptionAbout',
  'AcercaDeMí',
  'Habilidades',
  'Proyectos',
  'ExperienciaLaboral',
  'EducaciónCertificaciones',
  'TestimoniosReferencias',
  'Contacto',
  'Stack',
  'Aplicaciones',
];

describe('Projects data integrity and security', () => {
  test('projects array is not empty', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  test('all projects have required fields (title, subtitle, description, image, link)', () => {
    projects.forEach((project, index) => {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('subtitle');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('image');
      expect(project).toHaveProperty('link');
      expect(typeof project.title).toBe('string');
      expect(project.title.length).toBeGreaterThan(0);
      expect(typeof project.subtitle).toBe('string');
      expect(project.subtitle.length).toBeGreaterThan(0);
      expect(typeof project.description).toBe('string');
      expect(project.description.length).toBeGreaterThan(0);
      expect(typeof project.image).toBe('string');
      expect(project.image.length).toBeGreaterThan(0);
      expect(typeof project.link).toBe('string');
      expect(project.link.length).toBeGreaterThan(0);
    });
  });

  test('all project links use HTTPS protocol', () => {
    projects.forEach((project) => {
      expect(project.link).toMatch(/^https:\/\//);
    });
  });

  test('all project image URLs use HTTPS protocol', () => {
    projects.forEach((project) => {
      expect(project.image).toMatch(/^https:\/\//);
    });
  });

  test('no XSS in project titles (no script tags)', () => {
    projects.forEach((project) => {
      expect(project.title.toLowerCase()).not.toContain('<script');
      expect(project.title.toLowerCase()).not.toContain('</script>');
      expect(project.title.toLowerCase()).not.toContain('javascript:');
      expect(project.title).not.toMatch(/on\w+\s*=/i);
    });
  });

  test('no XSS in project descriptions (no script tags)', () => {
    projects.forEach((project) => {
      expect(project.description.toLowerCase()).not.toContain('<script');
      expect(project.description.toLowerCase()).not.toContain('</script>');
      expect(project.description.toLowerCase()).not.toContain('javascript:');
      expect(project.description).not.toMatch(/on\w+\s*=/i);
    });
  });

  test('no javascript: protocol in project links', () => {
    projects.forEach((project) => {
      expect(project.link.toLowerCase()).not.toMatch(/^javascript:/);
      expect(project.link.toLowerCase()).not.toContain('javascript:');
    });
  });

  test('no javascript: protocol in project image URLs', () => {
    projects.forEach((project) => {
      expect(project.image.toLowerCase()).not.toMatch(/^javascript:/);
      expect(project.image.toLowerCase()).not.toContain('javascript:');
    });
  });
});

describe('Translations data integrity and security', () => {
  test('Spanish translations have all required keys', () => {
    REQUIRED_TRANSLATION_KEYS.forEach((key) => {
      expect(translations.es).toHaveProperty(key);
      expect(typeof translations.es[key]).toBe('string');
      expect(translations.es[key].length).toBeGreaterThan(0);
    });
  });

  test('English translations have all required keys', () => {
    REQUIRED_TRANSLATION_KEYS.forEach((key) => {
      expect(translations.en).toHaveProperty(key);
      expect(typeof translations.en[key]).toBe('string');
      expect(translations.en[key].length).toBeGreaterThan(0);
    });
  });

  test('no script injection in Spanish translations', () => {
    Object.values(translations.es).forEach((value) => {
      expect(value.toLowerCase()).not.toContain('<script');
      expect(value.toLowerCase()).not.toContain('javascript:');
      expect(value).not.toMatch(/on\w+\s*=/i);
    });
  });

  test('no script injection in English translations', () => {
    Object.values(translations.en).forEach((value) => {
      expect(value.toLowerCase()).not.toContain('<script');
      expect(value.toLowerCase()).not.toContain('javascript:');
      expect(value).not.toMatch(/on\w+\s*=/i);
    });
  });

  test('both languages have same set of keys', () => {
    const esKeys = Object.keys(translations.es).sort();
    const enKeys = Object.keys(translations.en).sort();
    expect(esKeys).toEqual(enKeys);
  });
});
