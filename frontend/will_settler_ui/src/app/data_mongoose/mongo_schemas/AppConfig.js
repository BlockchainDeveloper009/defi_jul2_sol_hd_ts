export const AppConfigSchema= {
    appName: String,
    environment: String,
    github_uri: String,
    github_branch: String,
    contract_InfoId:String,
    tags: [String],
    date: { type: Date, default: Date.now },
  }
  