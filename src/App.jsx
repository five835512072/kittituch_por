const linkedInUrl =
  "https://www.linkedin.com/in/kittituch-suwannasri-460b79217/";
const experience = [
  {
    role: "Software Engineer",
    company: "Ascend Group",
    employment: "Full-time",
    period: "Apr 2024 — Present",
    location: "Bangkok City, Thailand",
    skills: ["Spring Boot", "Robot Framework", "Karate", "Mountebank", "JMeter"],
    current: true,
  },
  {
    role: "Software Engineer",
    company: "SCB — Siam Commercial Bank",
    employment: "Full-time",
    period: "Jun 2022 — Apr 2024",
    location: "Bangkok City, Thailand",
    skills: ["Spring Boot"],
  },
  {
    role: "Software Programmer",
    company: "Magic Box Solutions",
    employment: "Full-time",
    period: "Jan 2021 — Jun 2022",
    location: "Bangkok City, Thailand",
    skills: ["TypeScript", "Python"],
  },
  {
    role: "Unity Developer",
    company: "Thai Generation",
    employment: "Full-time",
    period: "Jan 2020 — Dec 2020",
    location: "Bangkok, Bangkok City, Thailand · On-site",
    skills: ["C#", "Unity"],
  },
];

const skillGroups = [
  {
    label: "Ascend Group",
    skills: ["Spring Boot", "Robot Framework", "Karate", "Mountebank", "JMeter"],
  },
  {
    label: "Other listed skills",
    skills: ["TypeScript", "Python", "C#", "Unity"],
  },
];

function LinkedInLink({ children, className = "", ...props }) {
  return (
    <a
      className={className}
      href={linkedInUrl}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

const skillHeadings = [
  "Robot Framework",
  "Karate",
  "Mountebank",
  "JMeter",
  "TypeScript",
  "Python",
  "C#",
  "Unity",
];

function SkillsPage() {
  return (
    <main className="skills-page">
      <div className="section-heading skills-page-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Toolkit
          </p>
          <h1 id="skills-page-title">Skills</h1>
        </div>
      </div>

      <div className="skill-details">
        <section className="skill-detail" aria-labelledby="java-spring-boot-title">
          <h2 id="java-spring-boot-title">Java / Spring Boot</h2>
          <p>
            Experience contributing to the development of microservices and
            batch jobs using Java and Spring Boot in systems that integrate
            with multiple databases and services. Worked on assigned tasks and
            consulted with the team when handling more complex areas.
          </p>
          <ul className="skill-detail-list">
            <li>
              Used REST Client and RestTemplate to call internal and external
              services, configuring rate limits, circuit breakers, and timeouts
              to manage requests and handle downstream service failures.
            </li>
            <li>
              Connected to Oracle and MySQL databases using JDBC and used JPA
              to write queries.
            </li>
            <li>Used Kafka and RabbitMQ for messaging between services.</li>
            <li>Used OpenSearch for searching and inspecting data.</li>
            <li>
              Used Redis Cache to store frequently accessed data and reduce
              database reads.
            </li>
            <li>
              Integrated with S3 and developed services to list, retrieve,
              upload, and delete files.
            </li>
            <li>
              Used Persistent Volumes to retain data while applications are
              running, and with batch applications to check execution status and
              monitor two batch jobs running concurrently.
            </li>
            <li>
              Helped investigate issues by reviewing logs in OpenSearch and
              Loki, checking service status in Grafana, and testing functionality
              with the team.
            </li>
          </ul>
          <p>
            Currently developing further skills in microservice design and
            resolving complex issues. Familiar with following existing system
            patterns, working on tasks incrementally, and learning through code
            reviews and collaboration with the team.
          </p>
        </section>

        {skillHeadings.map((skill) => (
          <section
            className="skill-detail"
            aria-label={`${skill} skills`}
            key={skill}
          >
            <h2>{skill}</h2>
            {skill === "Robot Framework" && (
              <p>
                Developed Robot Framework test suites to automate API testing
                across services. Validated response status codes and payloads,
                along with related data in databases, Redis, RabbitMQ, Kafka,
                and S3. Scheduled daily test runs to verify that each service is
                functioning as expected.
              </p>
            )}
            {skill === "Karate" && (
              <p>
                Wrote and ran API tests with Karate, checking status codes,
                response bodies, and expected endpoint behavior. Also used
                Karate to mock APIs for performance testing and configured
                proxies to route requests to live downstream services.
              </p>
            )}
            {skill === "Mountebank" && (
              <p>
                Created simple stubs for dependent services to return
                predictable responses, making it easier to test APIs without
                relying on live downstream services.
              </p>
            )}
            {skill === "JMeter" && (
              <p>
                Used JMeter to evaluate service performance under different
                workloads. Ran step-load tests to observe behavior as traffic
                increased, maximum-capacity tests to identify service limits,
                and baseline tests to establish performance benchmarks. Also
                ran daily performance tests to detect potential degradation.
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}

const basePath = new URL(import.meta.env.BASE_URL, window.location.origin)
  .pathname.replace(/\/+$/, "");
const homeHref = `${basePath}/`;
const skillsHref = `${basePath}/skills`;

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isSkillsPage = currentPath === skillsHref;

  return (
    <div className="resume-page">
      <header className="site-header">
        <a
          className="brand"
          href={`${homeHref}#home`}
          aria-label="Kittituch Suwannasri home"
        >
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.7 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 4.2l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1.08 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
              </g>
            </svg>
          </span>
          <span>Kittituch Suwannasri</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href={`${homeHref}#experience`}>Experience</a>
          <a href={`${homeHref}#education`}>Education</a>
          <a href={skillsHref} aria-current={isSkillsPage ? "page" : undefined}>
            Skills
          </a>
          <LinkedInLink className="nav-cta">
            LinkedIn <span aria-hidden="true">↗</span>
          </LinkedInLink>
        </nav>
      </header>

      {isSkillsPage ? (
        <SkillsPage />
      ) : (
      <main id="home">
        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Software Engineer <span className="eyebrow-divider">/</span>{" "}
              Bangkok, Thailand
            </p>
            <h1 id="intro-title">
              Kittituch
              <br />
              <span>Suwannasri.</span>
            </h1>
            <p className="intro-description">
              Currently at Ascend Group. Previously at SCB, Magic Box Solutions,
              and Thai Generation.
            </p>
          </div>

          <aside className="profile-card" aria-label="Profile snapshot">
            <div className="profile-card-top">
              <span className="profile-label">PROFILE SNAPSHOT</span>
              <span className="profile-index">BKK · TH</span>
            </div>
            <div className="portrait">
              <img
                src={`${basePath}/profile.jpg`}
                alt="Kittituch Suwannasri"
              />
            </div>
            <div className="profile-card-bottom">
              <div>
                <h2>Software Engineer</h2>
                <p>Ascend Group · Full-time</p>
              </div>
              <LinkedInLink
                className="round-link"
                aria-label="Open LinkedIn profile"
              >
                ↗
              </LinkedInLink>
            </div>
          </aside>
        </section>

        <section
          className="content-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" />
                Career timeline
              </p>
              <h2 id="experience-title">Experience</h2>
            </div>
            <span className="section-count">2020 — NOW</span>
          </div>

          <div className="experience-list">
            {experience.map((job, index) => (
              <article className="experience-item" key={job.company}>
                <div className="experience-meta">
                  <span>{job.period}</span>
                  {job.current && <span className="current-label">Current</span>}
                </div>
                <div className="experience-details">
                  <div className="experience-title-row">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="experience-company">
                        {job.company} <span>·</span> {job.employment}
                      </p>
                    </div>
                    <span className="experience-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="experience-location">{job.location}</p>
                  <ul className="skill-list" aria-label={`${job.role} skills`}>
                    {job.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="details-grid">
          <section
            className="content-section education-section"
            id="education"
            aria-labelledby="education-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-line" />
                  Education
                </p>
                <h2 id="education-title">Academic background</h2>
              </div>
            </div>
            <article className="education-card">
              <span className="education-mark" aria-hidden="true">
                PSU
              </span>
              <div>
                <h3>Prince of Songkla University</h3>
                <p>University</p>
              </div>
            </article>
          </section>

          <section
            className="content-section skills-section"
            id="skills"
            aria-labelledby="skills-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-line" />
                  Toolkit
                </p>
                <h2 id="skills-title">Skills</h2>
              </div>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <ul className="skill-list">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      )}

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Kittituch Suwannasri</span>
        <LinkedInLink className="footer-link">
          Connect on LinkedIn <span aria-hidden="true">↗</span>
        </LinkedInLink>
      </footer>
    </div>
  );
}

export default App;
