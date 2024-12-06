import { ChapterType } from '@/content/project2025/types';
import DepartmentOfHomelandSecurityRaw from './versions/raw.mdx';
const departmentOfHomelandSecurity: ChapterType = {
  chapterIdx: 5,
  title: "Department of Homeland Security",
  chapterId: "department-of-homeland-security",
  url: "/project2025/the-common-defense/department-of-homeland-security",
  emoji: "🚨",
  description: "Recommends aggressive border security measures with limited attention to humanitarian concerns.",
  metadata: {
    authors: [
      {
        name: "Ken Cuccinelli",
        avatar: "https://example.com/images/authors/laura-m-greene.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Homeland Security",
    wordcount: 7_095, // Example word count; update with actual value.
    keywords: ["Border Security", "Homeland Defense", "Executive Control", "Immigration Policy"],
    status: "transcription", // Adjust based on the progress
  },
  versions: {
    markdown: DepartmentOfHomelandSecurityRaw,
  },
  summary: () => (
    <p>
      This chapter outlines reforms for the Department of Homeland Security, focusing on aggressive border security measures and
      prioritizing executive authority in enforcement. It critiques the potential sidelining of humanitarian concerns and the
      implications of consolidating authority at the federal level.
    </p>
  ),
};

export default departmentOfHomelandSecurity;