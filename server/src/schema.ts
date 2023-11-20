import { nullable, z } from "zod";

const resumeSchema = z.object({
  personalDetails: z.object({
    name: z.string().describe("Name of the candidate"),
    email: z.string().email(),
    phone: z.string(),
  }),
  education: z
    .array(
      z.object({
        institute: z
          .string()
          .nullable()
          .describe(
            "Name of the institute where the candidate is pursuing his/her education"
          ),
        degree: z.string().describe("Degree pursued by the candidate"),
        startYear: z
          .number()
          .nullable()
          .describe("Year of starting the degree"),
        endYear: z.number().nullable().describe("Year of ending the degree"),
      })
    )
    .describe("An Array describing the education details of the candidate"),
  skills: z
    .array(z.string())
    .describe("An Array describing the tech stack of the candidate"),
  workExperience: z
    .array(
      z.object({
        company: z.string().describe("Company name"),
        position: z.string().describe("Position held"),
        startTmp: z.number().describe("Time started"),
        endTmp: z.number().describe("Time ended"),
      })
    )
    .nullable()
    .describe(
      "An Array describing the work experience jobs or internships of the candidate"
    ),
  projects: z
    .array(
      z.object({
        name: z.string().describe("Name of the project"),
        description: z.string().describe("Detailed Description of the project"),
        demoURL: z
          .string()
          .url()
          .nullable()
          .describe("URL of the project demo"),
        sourceCodeURL: z
          .string()
          .url()
          .nullable()
          .describe("URL of the project source code"),
      })
    )
    .nullable()
    .describe("An Array describing the projects done by the candidate"),
  acheivements: z
    .array(
      z.object({
        title: z.string().describe("Title of the acheivement or any award."),
        description: z
          .string()
          .nullable()
          .describe("description of the acheivement it mentioned."),
      })
    )
    .nullable()
    .describe("An Array describing the acheivments of the candidate"),
});
