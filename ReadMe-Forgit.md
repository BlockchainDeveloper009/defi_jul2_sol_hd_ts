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

### show all branch
#git branch -a

```
krtzx@DESKTOP-1RBHF9J C:\source\repos\nextjs_dev\web-applications\willSettler_phase3\graphql-implementation
$ git branch -a
* phase3/graphql-implementation
  remotes/origin/HEAD -> origin/devbr
  remotes/origin/dev_NewWagmiIplementation
  remotes/origin/devbr
  remotes/origin/phase3/graphql-implementation

krtzx@DESKTOP-1RBHF9J C:\source\repos\nextjs_dev\web-applications\willSettler_phase3\graphql-implementation
$ git branch -vv
* phase3/graphql-implementation c0be6ac [origin/phase3/graphql-implementation: ahead 1] graph
```

### pull code from remote branch to local branch
git pull origin phase3/graphql-implementation:phase3/graphql-implementation



pull code from remote branch1 to local branch2

git pull <remote-name> <remote-branch-name>:<local-branch-name>
git pull origin dev_NewWagmiIplementation:phase3/graphql-implementation


### To show which remote branch your local branch is tracking, you can use the following command:
$git branch -vv 


### 

```
When you execute git checkout <branch_name>, it updates the files in your working directory to match the state of the specified branch.

If you already have a local copy of the branch on your laptop and you execute git checkout <branch_name>, Git will switch your working directory to the specified branch. If you have made changes to files in your working directory that are different from the branch you're checking out, Git will either:

Overwrite those changes with the version of the files from the branch you're switching to (if the changes are not staged or committed).
Prevent the checkout if the changes conflict with the branch you're switching to (if the changes are staged or committed).
If you already have the local copy of the branch and you don't need to switch branches, you might not need to execute git checkout again. You can directly use git pull to pull changes from the remote branch into your local branch without changing your current working directory.```

