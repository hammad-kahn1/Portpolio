// ============================================================
// GITHUB DATA — Repository config separated from UI components
// ============================================================

export const githubConfig = {
  username: 'habibashah0789-a11y',
  profileUrl: 'https://github.com/habibashah0789-a11y',
  reposApiUrl: 'https://api.github.com/users/habibashah0789-a11y/repos',
} as const

/**
 * Academy App — manually configured because the repository is private.
 * URL: https://github.com/habibashah0789-a11y/Acdemy-app
 * Only factual information is stored here; nothing is fabricated.
 */
export const academyAppProject = {
  name: 'Acdemy-app',
  displayName: 'Academy App',
  url: 'https://github.com/habibashah0789-a11y/Acdemy-app',
  isPrivate: true,
  // No description fabricated — repo is not publicly accessible
  description:
    'A project hosted on this GitHub profile. The repository is currently private — visit GitHub for access and full project details.',
} as const

// ---- TYPE DEFINITIONS ----

export type GitHubRepo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  created_at: string
  topics: string[]
  visibility: string
  private: boolean
  size: number
}

// Language → color mapping (subset of GitHub's official palette)
export const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  Dart: '#00B4AB',
  Java: '#b07219',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  'C#': '#178600',
  PHP: '#4F5D95',
}
