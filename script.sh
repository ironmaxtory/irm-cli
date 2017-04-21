#!/bin/bash

# echo The number of all args: $#
# echo All args: $*

# Just commit to the local and remote repositories
# but not to publish
if [[ $# -eq 1 && $1 == 'commit' ]]
then
  echo Start to commit project

  git add --all

  git commit

  git push origin master

  echo Finish committing project

# Publish to the npm after comn=mit
elif [[ $# -eq 1 && $1 == 'publish' ]]
then
  echo '[ Start to commit project ]'

  git add --all

  git commit -m 'update codes'

  git push origin master

  echo '[ Finish committing project ]'
  echo '[ Start publish --warning: Remmber to modify the version code ]'

  yarn publish
  echo '[ Finish publishing ]'

  sleep 1
  yarn global add irm-cli@latest
  echo '[ Finish installing ]'
fi
