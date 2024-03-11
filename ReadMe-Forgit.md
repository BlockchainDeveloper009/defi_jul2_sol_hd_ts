git branch -a 
git switch <brancName> ls



### create new branch and switch to to new branch:
$git checkout -b feature/new-feature


### create new branch, but stay on current branch, then vomit '-b'
$git checkout feature/new-feature

### if you want to clone specific branch of repository
$git clone -b <branch-name> https://github.com/example/repository.git
$git clone -b develop https://github.com/example/repository.git


### pushing from a specific branch
$git push --set-upstream origin phase3/graphql-implementation

### show all branch
$git branch
> git branch
  dev_NewWagmiIplementation
  devbr
* phase3/graphql-implementation
### show current branch
$git branch --show-current

